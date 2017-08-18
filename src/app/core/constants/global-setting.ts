'use strict';

// export const BASE_URL = 'http://127.0.0.1:9999';
// export const BASE_URL = 'http://192.168.3.113:8080';		
//let backendUrl = 'http://localhost:9000';
//let backendUrl = 'http://192.168.3.163:8030';

// let backendUrl = 'http://192.168.3.124:9000';
// let backendUrl = 'http://192.168.3.163:8030';
let backendUrl = 'http://localhost:9000';
// let backendUrl = 'http://192.168.3.92:8020';



// 生产环境中通过配置 roleplay-config.js文件来指定后端服务器地址
// if((process.env.ENV === 'production') && (<any>window).roleplayConfig && ((<any>((<any>window).roleplayConfig)).backendUrl)){
// 	backendUrl = (<any>((<any>window).roleplayConfig)).backendUrl;
// }

export const BASE_URL = `${backendUrl}`;








