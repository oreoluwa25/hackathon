const Articles = require('../models/Article')

async function createArticle(data, res) {
    try {
        // const newArticle = {
        //     title: data.title,
        //     body: data.body,
        //     article_image: data.article_image
        // }
        await Articles.create(data)
        return res.status(200).json({
            success: true,
            message: "Article created"
        });
    } catch (error) {
        console.error(error)
        return res.status(422).json({
            success: false,
            message: "Unprocessable"
        });
    }
}
async function getArticlebytitle(res) {
    try {
        let articles = await Articles.findOne({title:"Harry porter"});
        console.log("Articles",articles) 
        if(articles.length === 0){
            return res.status(404).json({
                success: false,
                message: "No users found"
            });
        }
        res.status(200).json(
            {
                success: true,
                message: "Users found", 
                articles,
                count: articles.length
            }
        );
    } catch (err) {
        res.status(500).json({ 
            success: false,
            message: "Internal Server Error",
            error: err.message
        });
    }
}
async function getArticles(res) {
        try {
            let articles = await Articles.find().limit(3).sort({title:1}).select({title:true, body:true});
            console.log("Articles",articles) 
            if(articles.length === 0){
                return res.status(404).json({
                    success: false,
                    message: "No users found"
                });
            }
            res.status(200).json(
                {
                    success: true,
                    message: "Users found", 
                    articles,
                    count: articles.length
                }
            );
        } catch (err) {
            res.status(500).json({ 
                success: false,
                message: "Internal Server Error",
                error: err.message
            });
        }
}
async function updateArticle(req,res) {
    try {
        let id = { _id: req.params.id };
        let article = await req.body;
        console.log(article)
        let update = await Articles.findOneAndUpdate(id, article, {new:true});
        console.log(id)
        if(!update){
            return res.status(400).json({
                success: false,
                message: "User update failed"
            });
        }
        return res.status(200).json(
            {
                success: true,
                message: "User updated successfully",
                article: update
            }
        );
    } catch (err) {
        res.status(500).json({ 
            success: false,
            message: "Internal Server Error",
            error: err.message
        });
    }
}
async function deleteArticle(req,res) {
    try {
        let id = { _id: req.params.id };
        let article = await Articles.findOneAndRemove(id);
        if(!article){
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        return res.status(200).json(
            {
                success: true,
                message: `User with id ${req.params.id} deleted successfully`,
                article
            }
        );
    } catch (err) {
        res.status(500).json({ 
            success: false,
            message: "Internal Server Error",
            error: err.message
        });
    }
}



module.exports = {createArticle, getArticlebytitle, getArticles, updateArticle, deleteArticle}