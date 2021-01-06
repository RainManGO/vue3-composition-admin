/*
 * @Description: 布局配置
 * @Author: ZY
 * @Date: 2020-12-25 10:31:11
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-04 16:55:16
 */

interface LayoutSettings {
    // Controls settings panel display
    showSettings: boolean 
    // Controls tagsview display
    showTagsView: boolean 
    // Controls siderbar logo display
    showSidebarLogo: boolean 
    // If true, will fix the header component
    fixedHeader: boolean 
    // If true, will change active text color for sidebar based on theme
    sidebarTextTheme: boolean 
  }
  
  // You can customize below settings :)
  const layoutSettings: LayoutSettings = {
    showSettings: true,
    showTagsView: true,
    fixedHeader: false,
    showSidebarLogo: true,
    sidebarTextTheme: true,
  }
  
  export default layoutSettings