const {createArticle, getArticlebytitle, getArticles, getArticlebyId,updateArticle, deleteArticle} = require('../services/article')
exports.createArticle = async(req, res) => {
    let data = req.body
    await createArticle(data, res)
}

exports.getArticlebytitle = async(req, res) => {
    await getArticlebytitle(res)
}

exports.getArticles = async(req, res) => {
    await getArticles(res)
}

exports.updateArticle = async(req, res) => {

    await updateArticle(req,res)
}

exports.deleteArticle = async(req, res) => {

    await deleteArticle(req,res)
}

