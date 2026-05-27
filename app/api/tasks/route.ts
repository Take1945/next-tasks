import { TaskDocument, TaskModel } from "@/app/src/models/task";
import { connectDb } from "@/app/src/units/database"
import { NextResponse } from "next/server";


export const GET = async()=>{
    try {
await connectDb();
const allTasks:TaskDocument[] = await TaskModel.find();
return NextResponse.json({message:'タスク取得成功' ,tasks:allTasks},{
     headers:{'Cache-Control': 'no-store, no-cache, must-revalidate',
    }})
    }catch(error){
console.log(error)
    }
}
export const dynamic='force-dynamic'