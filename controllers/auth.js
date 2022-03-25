import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import User from '../models/User.js'

const login = async (req, res) =>{
    const existingUser = await  User.findOne({email: req.body.email})
    if(existingUser){
        const passwordResult = bcrypt.compareSync(req.body.password, existingUser.password)
        if(passwordResult){
            const token = jwt.sign({
                email: existingUser.email,
                userID: existingUser._id
            },process.env.JWT, {expiresIn: 3600})
            res.status(200).json({
                token: `Bearer ${token}`
            })
        }else{
            res.status(401).json({
                message: 'Error: passwords do not match'
            })
        }
    }
    else{
        res.status(404).json({
            message: 'Error: email not found'
        })
    }
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