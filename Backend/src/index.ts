
import express, { Request, Response,json } from "express"


const app =express();
app.use(json());
// app.use(cors);
const port= 3000;




app.use('/notes')

app.listen(port,()=>{
    console.log("I am running at port ........",port);
    
})






