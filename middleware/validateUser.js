

const validateUser = (req,res,next) =>{
    const {name,email,age} = req.body

    if (!name || !email || !age){
        return res.status(400).json({message:"all fields needed"})
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (!emailRegex.test(email)){
        return res.status(400).json({message : "email pattern wrong"})
    }
    
    if (typeof age !== 'number'){
        return res.status(400).json({message : "Age has to be numb"})
    }
    next();
}

module.exports = validateUser;
