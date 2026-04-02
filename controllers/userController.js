const {v4,uuidv4} = require('uuid');

const users = [];

exports.createUser = (req, res) => {
    const {name,email,age} = req.body;

    const newUser = {
        id : uuidv4(),
        name,
        email,
        age
    };

    users.push(newUser);
    res.status(201).json(newUser);
}

exports.getUsers = (req, res) => {
    const user =  users.find(u => u.id === req.params.id)

    if (!user){
        return res.status(200).json(user)
    }
}

exports.updateUser = (req,res)=>{
    const user = users.find(u => u.id === req.params.id);

    if (!user){
        return res.status(404).json({message: "User not find"})
    }
    const {name,email,age} = req.body

    user.name = name || user.name
    user.email = email || user.email
    user.age = age || user.age 

    res.status(200).json(user)
}

exports.deleteUser = (req,res)=>{
    const index = users.findIndex(u => u.id === req.params.id);

    if (index === -1){
        return res.status(404).json({message : "user not found"})
    }
    users.splice(index,1);

    req.status(200).json({message: "deleted user successfully"})
}

