import mongoose from "mongoose";

export async function connectDB(){
    try{
        let connection = await mongoose.connect(process.env.MONGOBD_URI)
        console.log("Db Connecter",connection)

    }
    catch(error){
        console.log("Error In Db Connection",error);
        
    }
}