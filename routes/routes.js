const router = require('express').Router()
const controller = require('../controllers/controller')
const articleController = require('../controllers/articles')

router.get('/message/:name', controller.message)
      .get('/me', controller.me)
      .post('/playme', controller.playme)
      .post('/playground', controller.playground)
      .post('/article', articleController.createArticle)
      .get('/article', articleController.getArticlebytitle)
      .get('/articleAll', articleController.getArticles)
      .patch('/articleAll/:id', articleController.updateArticle) 
      .delete('/articleAll/:id', articleController.deleteArticle) 
module.exports = router