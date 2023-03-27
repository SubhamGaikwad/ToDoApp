const ToDomodels = require("../models/ToDomodels")

module.exports.getToDo = async(req,res)=>{
    const ToDo = await ToDomodels.find()
    res.send(ToDo)

}
module.exports.saveToDo = async(req,res)=>{
    const {text} = req.body

    ToDomodels.create({text})
    .then((data)=>{
        console.log("Added successfully...")
        console.log(data)
        res.send(data)
    })

}
module.exports.updateToDo = async(req,res)=>{
    const {_id,text} = req.body
    ToDomodels.findByIdAndUpdate(_id,{text})
    .then(()=>{
        res.send("updated successfully...")
    })
    .catch((err)=>{
        console.log(err)
    })
}
module.exports.deleteToDo = async(req,res)=>{
    const {_id} = req.body
    ToDomodels.findByIdAndDelete(_id)
    .then(()=>{
        res.send("deleted successfully...")
    })
    .catch((err)=>{
        console.log(err)
    })
}
