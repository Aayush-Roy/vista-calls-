import httpStatus from "http-status";
import { User } from "../models/users.model.js";
import bcrypt,{hash} from "bcrypt";
import crypto from "crypto";

const login = async(req,res)=>{
    const{username,password} = req.body;
    if(!username || !password){
        return res.status(httpStatus.BAD_REQUEST).json({message:"username and password are required"});
    }
    try{
        const user = await User.findOne({username});
        if(!user){
            return res.status(httpStatus.NOT_FOUND).json({message:"user not found"});
        }
        if(bcrypt.compare(password, user.password)){
            let token = crypto.randomBytes(20).toString("hex");
            user.token = token;
            await user.save();
            return res.status(httpStatus.OK).json({token:token});
        }
       
    }catch(e){
        return res.status(500).json({message:`something went wrong ${e}`});
    }
}


const register = async(req,res)=>{
    const {name,username,password} = req.body;
    try{
        const existingUser = await User.findOne({username});
        if(existingUser){
            return res.status(httpStatus.FOUND).json({message:"user already exists"});
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = new User({
            name:name,
            username:username,
            password: hashedPassword
        })

        await newUser.save();
        res.status(httpStatus.CREATED).json({message:"user registered successfully"});

    }catch(e){
        res.json({message:"error creating user",e});
    }
}

export {login,register};