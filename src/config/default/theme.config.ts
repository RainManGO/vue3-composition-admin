/*
 * @Description: 主题配置
 * @Author: ZY
 * @Date: 2020-12-08 09:45:59
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-09 10:16:28
 */
// 布局枚举
enum Layout{
    Horizontal,
    Vertical,
    Gallery,
    Comprehensive,
    Common
}
// 主题分类
enum ThemeName{
    Default,
    Ocean,
    Green,
    Glory,
    White
}

export interface Theme{
  // 布局种类 horizontal vertical gallery comprehensive common
  layout?: Layout
  // 主题名称 default ocean green glory white
  themeName?: ThemeName
  // 是否固定头部
  fixedHeader?: boolean
  // 是否显示顶部进度条
  showProgressBar?: boolean
  // 是否显示多标签页
  showTabsBar?: boolean
  // 是否显示语言选择组件
  showLanguage?: boolean
  // 是否显示刷新组件
  showRefresh?: boolean
  // 是否显示搜索组件
  showSearch?: boolean
  // 是否显示主题组件
  showTheme?: boolean
  // 是否显示通知组件
  showNotice?: boolean
  // 是否显示全屏组件
  showFullScreen?: boolean
}

const themeConfig: Theme = {
  // 布局种类 horizontal vertical gallery comprehensive common
  layout: Layout.Horizontal,
  // 主题名称 default ocean green glory white
  themeName: ThemeName.Default,
  // 是否固定头部
  fixedHeader: true,
  // 是否显示顶部进度条
  showProgressBar: true,
  // 是否显示多标签页
  showTabsBar: true,
  // 是否显示语言选择组件
  showLanguage: true,
  // 是否显示刷新组件
  showRefresh: true,
  // 是否显示搜索组件
  showSearch: true,
  // 是否显示主题组件
  showTheme: true,
  // 是否显示通知组件
  showNotice: true,
  // 是否显示全屏组件
  showFullScreen: true
}

export default themeConfig
