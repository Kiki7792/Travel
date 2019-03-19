module.exports = {
    devServer: {
        proxy: {
            'api': {
                target: 'http://localhost:8080/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/mock'
                }
            }
        }
    }
}

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