const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: true,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('pages', resolve('src/pages'))
            .set('common', resolve('src/common'))
    }
}


// module.exports = {
//     devServer: {
//         proxy: {
//             'api': {
//                 target: 'http://localhost:8080/',
//                 changeOrigin: true,
//                 pathRewrite: {
//                     '^/api': '/mock'
//                 }
//             }
//         }
//     }
// }

// const mockData = require("./public/mock/index.json")
// module.exports = {
//     devServer: {
//         before: (app) => {
//             app.get("/api", (reg, res, next)=>{
//                 res.json(mockData);
//             })
//         }
//     }
// }