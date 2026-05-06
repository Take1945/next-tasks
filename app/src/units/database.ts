import mongoose from "mongoose";

export const connectDb =async()=>{
try{
    await mongoose.connect(process.env.DB_URI || '')
}catch(err){
console.log('DB接続に失敗しました',err)
throw err
}

}