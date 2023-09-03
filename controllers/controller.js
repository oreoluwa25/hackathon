const { response } = require("express");
const { request } = require("http");

let people = {
    "joy": {name: "joy", age: 17},
    "emma": {name: "emma", age: 21},
    'ore': {name: "ore", age: 20}
}
exports.message = async(req, res) => {
    logger.log("info", "Request received: ", req);
    let name = req.params.name
    if(people[name]){
        res.json(people[name])
    }else{
        res.json('not found')
    }
}

exports.me = async(req, res) => {
    let name = req.query.name
    if(people[name]){ 
        res.json(people[name])
    }else{
        res.json('not found')
    }
}


exports.playme = async(req, res) => {    
    const {name} = await req.body;
    const {age} = await req.body;

    res.status(200).json({
        message: `Your name is ${name} and i am ${age} years old`,
    });
    
}

exports.playground = async(req, res) => {    
    const {name} =  req.body;
    const {age} =  req.body;

    res.status(200).json({
        message: `Your name is ${name} and i am ${age} years old`,
    });
}
