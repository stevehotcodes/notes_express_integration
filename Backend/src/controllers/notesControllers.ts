import { Response,Request } from "express";
import DatabaseHelper from "../helpers/dbHelpers";
import {v4 as uid} from "uuid"
import { INotes } from "../types/interfaces";


const dbConnectionInstance=DatabaseHelper.getInstance()



export const addNewNote =async (req:Request,res:Response)=>{
    try {
        let id=uid();

          let{noteTitle,noteDescription}=req.body
          await dbConnectionInstance.exec('addNewNote',{id,noteTitle,noteDescription});
          return res.status(200).json("note added successfully")

          
    } catch (error:any) {
        console.log(error.message)
        return res.status(500).json(error)
    }
}

export const getAllNotes=async(req:Request,res:Response)=>{
    try{
        let notes:INotes[]=(await dbConnectionInstance.exec("getAllNote")).recordset
        if(notes){
            return res.status(200).json(notes);

        }
        else{
            return res.status(404).json("no notes were found")
        }
    


    }
    catch(error:any){
        
        res.status(500).json({"Error in getting notes":error.message})
    }
}