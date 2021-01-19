<!--
 * @Description: 角色切换和菜单配置（后端控制权限使用）
 * @Author: ZY
 * @Date: 2021-01-08 19:32:16
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-13 16:49:21
-->
<template>
  <div class="app-container">
    <el-button
      type="primary"
      @click="handleCreateRole"
    >
      {{ t("permission.createRole") }}
    </el-button>

    <el-table
      :data="rolesList"
      style="width: 100%;margin-top:30px;"
      border
    >
      <el-table-column
        align="center"
        label="Role Key"
        width="220"
      >
        <template #default="{row}">
          {{ row.key }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="Role Name"
        width="220"
      >
        <template #default="{row}">
          {{ row.name }}
        </template>
      </el-table-column>
      <el-table-column
        align="header-center"
        label="Description"
      >
        <template #default="{row}">
          {{ row.description }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="Operations"
      >
        <template #default="scope">
          <el-button
            type="primary"
            size="small"
            @click="handleEdit(scope)"
          >
            {{ t("permission.editPermission") }}
          </el-button>
          <el-button
            type="danger"
            size="small"
            @click="handleDelete(scope)"
          >
            {{ t("permission.delete") }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      v-model="dialogVisible"
      :title="dialogType === 'edit' ? 'Edit Role' : 'New Role'"
    >
      <el-form
        :model="role"
        label-width="80px"
        label-position="left"
      >
        <el-form-item label="Name">
          <el-input
            v-model="role.name"
            placeholder="Role Name"
          />
        </el-form-item>
        <el-form-item label="Desc">
          <el-input
            v-model="role.description"
            :autosize="{minRows: 2, maxRows: 4}"
            type="textarea"
            placeholder="Role Description"
          />
        </el-form-item>
        <el-form-item label="Menus">
          <el-tree
            ref="treeRef"
            :check-strictly="checkStrictly"
            :data="routesTreeData"
            :props="defaultProps"
            show-checkbox
            node-key="path"
            class="permission-tree"
          />
        </el-form-item>
      </el-form>
      <div style="text-align:right;">
        <el-button
          type="danger"
          @click="dialogVisible = false"
        >
          {{ t("permission.cancel") }}
        </el-button>
        <el-button
          type="primary"
          @click="confirmRole"
        >
          {{ t("permission.confirm") }}
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, reactive, toRefs, ref, nextTick, getCurrentInstance } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import { getRoutes, getRoles, delRole, updateRole, createRole } from '@/apis/roles'
import { resolve } from 'path'
import { useI18n } from 'vue-i18n'
import editRole from './editRole'
import { cloneDeep } from 'lodash'
interface Role {
  key: number
  name: string
  description: string
  routes: RouteRecordRaw[]
}

interface RoutesTreeData {
  children: RoutesTreeData[]
  title: string
  path: string
}

const defaultRole: Role = {
  key: 0,
  name: '',
  description: '',
  routes: []
}

export default defineComponent({

  setup() {
    const { ctx } = getCurrentInstance() as any
    const treeRef = ref<HTMLInputElement | null>(null)
    const { t } = useI18n()
    const { flattenRoutes } = editRole()

    const onlyOneShowingChildFunc = (children: RouteRecordRaw[] = [], parent: RouteRecordRaw) => {
      let onlyOneChild = null
      const showingChild = children.filter(item => !item.meta || !item.meta.hidden)
      // When there is only one child route, the child route is displayed by default
      if (showingChild.length === 1) {
        onlyOneChild = showingChild[0]
        onlyOneChild.path = resolve(parent.path, onlyOneChild.path)
        return onlyOneChild
      }

      // Show parent if there are no child route to display
      if (showingChild.length === 0) {
        onlyOneChild = { ...parent, path: '' }
        return onlyOneChild
      }
      return false
    }

    // Reshape the routes structure so that it looks the same as the sidebar
    const getReshapeRoutes = (routes: RouteRecordRaw[], basePath = '/') => {
      const reshapeRoutes: RouteRecordRaw[] = []
      for (let route of routes) {
        // Skip hidden routes
        if (route.meta && route.meta.hidden) {
          continue
        }
        const onlyOneShowingChild = onlyOneShowingChildFunc(route.children, route)
        if (route.children && onlyOneShowingChild && (!route.meta || !route.meta.alwaysShow)) {
          route = onlyOneShowingChild
        }

        const data: RouteRecordRaw = {
          path: resolve(basePath, route.path),
          meta: {
            title: route.meta && route.meta.title
          }
        } as any as RouteRecordRaw
        // Recursive generate child routes
        if (route.children) {
          data.children = getReshapeRoutes(route.children, data.path)
        }
        reshapeRoutes.push(data)
      }
      return reshapeRoutes
    }

    const generateTreeData = (routes: RouteRecordRaw[]) => {
      const data: RoutesTreeData[] = []
      for (const route of routes) {
        const tmp: RoutesTreeData = {
          children: [],
          title: '',
          path: ''
        }
        tmp.title = route.meta ? t(`route.${route.meta.title}`).toString() : ''
        tmp.path = route.path
        if (route.children) {
          tmp.children = generateTreeData(route.children)
        }
        data.push(tmp)
      }
      return data
    }

    const generateTree = (routes: RouteRecordRaw[], basePath = '/', checkedKeys: string[]) => {
      const res: RouteRecordRaw[] = []
      for (const route of routes) {
        const routePath = resolve(basePath, route.path)
        // recursive child routes
        if (route.children) {
          route.children = generateTree(route.children, routePath, checkedKeys)
        }
        if (checkedKeys.includes(routePath) || (route.children && route.children.length >= 1)) {
          res.push(route)
        }
      }
      return res
    }

    const state = reactive({
      role: Object.assign({}, defaultRole),
      reshapedRoutes: [] as RouteRecordRaw[],
      serviceRoutes: [] as RouteRecordRaw[],
      rolesList: [] as Role[],
      dialogVisible: false,
      dialogType: 'new',
      checkStrictly: false,
      defaultProps: {
        children: 'children',
        label: 'title'
      },
      handleCreateRole: () => {
        state.role = Object.assign({}, defaultRole)
        if (treeRef.value) {
          (treeRef.value as any).setCheckedKeys([])
        }
        state.dialogType = 'new'
        state.dialogVisible = true
      },
      handleEdit: (scope: any) => {
        state.dialogType = 'edit'
        state.dialogVisible = true
        state.checkStrictly = true
        state.role = cloneDeep(scope.row)
        nextTick(() => {
          const routes = flattenRoutes(getReshapeRoutes(state.role.routes as any as RouteRecordRaw[]))
          const treeData = generateTreeData(routes)
          const treeDataKeys = treeData.map(t => {
            return t.path
          })
          const tree = (treeRef.value as any)
          tree.setCheckedKeys(treeDataKeys)
          // set checked state of a node not affects its father and child nodes
          state.checkStrictly = false
        })
      },
      handleDelete: (scope: any) => {
        const { $index, row } = scope
        ctx.$confirm('Confirm to remove the role?', 'Warning', {
          confirmButtonText: 'Confirm',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(async() => {
          delRole(row.key).then((res) => {
            state.rolesList.splice($index, 1)
            ctx.$message({
              type: 'success',
              message: res?.data
            })
          })
        })
      }
    })

    const confirmRole = async() => {
      const isEdit = state.dialogType === 'edit'
      const checkedKeys = (treeRef.value as any).getCheckedKeys()
      state.role.routes = generateTree(cloneDeep(state.serviceRoutes as RouteRecordRaw[]), '/', checkedKeys)
      if (isEdit) {
        await updateRole(state.role.key, { role: state.role }).then(async() => {
          for (let index = 0; index < state.rolesList.length; index++) {
            if (state.rolesList[index].key === state.role.key) {
              state.rolesList.splice(index, 1, Object.assign({}, state.role))
              break
            }
          }
        })
      } else {
        await createRole({ role: state.role }).then(async(res) => {
          state.role.key = res?.data.key
          state.rolesList.push(state.role)
        })
      }

      const { description, key, name } = state.role
      state.dialogVisible = false
      ctx.$notify({
        title: 'Success',
        dangerouslyUseHTMLString: true,
        message: `
          <div>Role Key: ${key}</div>
          <div>Role Name: ${name}</div>
          <div>Description: ${description}</div>
        `,
        type: 'success'
      })
    }

    const getServiceRoutes = () => {
      getRoutes().then((res) => {
        state.serviceRoutes = res?.data.routes as any as RouteRecordRaw[]
        state.reshapedRoutes = getReshapeRoutes(res?.data.routes as any as RouteRecordRaw[])
      })
    }

    const getRolesList = () => {
      getRoles().then((res) => {
        state.rolesList = res?.data.items as any as Role[]
      })
    }

    onBeforeMount(() => {
      getServiceRoutes()
      getRolesList()
    })

    const routesTreeData = computed(() => generateTreeData(state.reshapedRoutes as any as RouteRecordRaw[]))

    return {
      t,
      confirmRole,
      ...toRefs(state),
      treeRef,
      routesTreeData
    }
  }
})
</script>

<style lang="scss" scoped>
.app-container {
  .roles-table {
    margin-top: 30px;
  }

  .permission-tree {
    margin-bottom: 30px;
  }
}
</style>
