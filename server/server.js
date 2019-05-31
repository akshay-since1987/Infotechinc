var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

var app = express()

app.use(serveStatic(path.resolve(__dirname, '../'), {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html', "css","js", "jpg","png","gif","woff","ttf", "otf", "woff2", "eot"],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now())
    }
}))

app.listen(8080)

