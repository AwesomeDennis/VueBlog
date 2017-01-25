/**
 * Created by Turanto on 2016/12/12.
 */
const express = require('express')
const router = express.Router()
const db = require('./db')
const fn = () => {}

router.post('/api/login', (req, res) => {
    const {name, pwd}=req.body;
    db.User.findOne({name}, 'pwd', (err, doc) => {
        switch (true) {
            case err:
                console.log(err)
                break
            case !doc:
                res.send({state: 0, msg: '账号不存在'})
                break
            case pwd == doc.pwd:
                res.send({state: 1, msg: '登录成功'})
                break
            case pwd != doc.pwd:
                res.send({state: 2, msg: '密码错误'})
                break
            default:
                res.send({state: 3, msg: '未知错误'})
        }
    })
})

router.get('/api/getArticles', (req, res) => {
    db.Article.find(null, 'title date content', (err, doc) => {
        if (err) {
            console.log(err)
        } else if (doc) {
            res.send(JSON.stringify(doc))
        }
    })
})

router.get('/api/getLinks', (req, res) => {
    console.log('执行getLinks')
    db.Link.find(null, (err, doc) => {
        if (err) {
            console.log(err)
        } else {
            res.send(doc)
        }
    })
})

router.get('/api/getArticle', (req, res) => {
    console.log('执行getArticle')
    const _id = req.query.id
    db.Article.findOne({_id}, (err, doc) => {
        if (err) {
            console.log(err)
        } else {
            res.send(doc)
            console.log(doc)
        }
    })
})

router.post('/api/deleteArticle', (req, res) => {
    console.log('执行deleteArticle')
    db.Article.findByIdAndRemove(req.body.id, fn)
    res.status(200).end()
})
module.exports = router