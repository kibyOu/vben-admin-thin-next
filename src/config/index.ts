/**
 * @description 导出运行环境相关配置
 **/
const isDev = process.env.NODE_ENV === 'development';
// 系统角色标签
export const title = isDev ? 'Loading TOF' : 'BUILD_EVA_ADMIN_TITLE';
//网关地址
export const baseURL = isDev ? 'https://tof-uat-gateway.eads.tcl.com' : 'BUILD_EVA_ADMIN_BASE_URL';
//clientId
export const clientId = isDev ? 'tof-operate-platform-pc' : 'BUILD_EVA_ADMIN_CLIENT_ID';
// 系统菜单标签
export const menuLabel = isDev ? 'TOF_WEB_MENU' : 'BUILD_EVA_ADMIN_MENU_LABEL';
// 系统角色标签
export const roleLabel = isDev ? 'TOF_WEB_ROLE' : 'BUILD_EVA_ADMIN_ROLE_LABEL';
// 打印地址
export const printURL = isDev
  ? 'https://testdmp.tcl.com/webroot/decision/view/report?viewlet=电子/大数据平台部/新方舟UAT/打印单报表'
  : 'BUILD_EVA_ADMIN_PRINT_URL';
// 文件预览地址
export const previewURL = isDev
  ? 'https://tof-uat-minio-api.eads.tcl.com'
  : 'BUILD_EVA_ADMIN_FILE_PREVIEW_URL';
// 所处环境
export const enviroment = isDev ? 'localhost' : 'BUILD_EVA_ADMIN_ENVIROMENT';
