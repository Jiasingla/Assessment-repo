import { Router } from "express";
import db from "./db.js";
const router=Router()

router.post("/enquiry",(req,res)=>{
    const parentname=req.body.pname
    const email=req.body.email
    const phonenum=req.body.phonenum
    console.log("Received:", parentname, email, phonenum)
    db.query("SELECT * FROM student WHERE phonenum=? OR email=? ",[phonenum,email],(err,result)=>{
        if(err){
            res.json({
                error:err
            })
        }else{
           if(result.length>0){
             res.json({
                message:"user already registered"
            })
           }else{
            db.query("INSERT INTO student(parentname,email,phonenum) VALUES(?,?,?)",[parentname,email,phonenum],(err,result)=>{
                if(err){
                    res.json({
                        error:err
                    })
                }else{
                    res.json({
                        message:"User registered successfully"
                    })
                }
            })
           }
        }
    })
})
export default router