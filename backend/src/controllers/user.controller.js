import httpStatus from "http-status";
import { User } from "../models/users.model";

const register = async(req,res)=>{
    const {name,username,password} = req.body;
    try{
        const existingUser = await User.findOne({username});
        if(existingUser){
            return res.status(httpStatus.FOUND).json({message:"user already exists"});
        }
        // const hashedPassword = await bcrypt.hash(password);
    }catch{

    }
}