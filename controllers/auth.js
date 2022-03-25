import bcrypt from 'bcrypt'
import User from '../models/User.js'

const login = (req, res) =>{
    const userData = {
      login: req.body
    }
    res.status(200).json(userData)
}
const  register = async (req, res)=>{
    const existingUser = await  User.findOne({email: req.body.email})
    if(existingUser){
        res.status(409).json({
            message: 'Error: email has already been taken'
        })
    }
    const salt = bcrypt.genSaltSync(10)
    const password = req.body.password
    const user = new User({
        email: req.body.email,
        password: bcrypt.hashSync(password, salt)
    })
    try{
        await user.save()
        res.status(201).json(user)
    }catch(error){

    }
}
export {login, register}