/* 
  该份文件同时供 mock 时使用
  项目配置在 devlopment 的时候使用 mock
  此时如果判断 process.env.NODE_ENV === 'development' ? '/proxy' : '',将会出现偏差
  因为 vite-mock-plugin 初始化 middleware 的时候，process.env.NODE_ENV 还未正确赋值
  表现为首次进入应用没有 mock 效果，必须得更改 mock 文件才会有效果 
*/
export const PROXY_PREFIX = process.env.NODE_ENV !== 'production' ? '/proxy' : '';
export const API_PREFIX_V1 = `${PROXY_PREFIX}/txyx-digitizing`;
