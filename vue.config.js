module.exports = {
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        publicPath: '/', //这里解决静态资源引用路径问题
        // 设置代理
        proxy: {
            "/api": {
                // 登录接口 账号admin 密码123456
                target: 'http://timemeetyou.com:8889/api/private/v1/',
                // 121.41.231.182:80/bas/usr/login   crm项目接口
                ws: true, // 是否启用websockets
                changOrigin: true, //开启代理
                secure: false, // 将安全设置为false,才能访问https开头的
                pathRewrite: {
                    '^/api': '' //这里理解成用‘/api’代替target里面的地址
                }
            }
        }
    }
}