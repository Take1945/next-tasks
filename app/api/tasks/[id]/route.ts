import { TaskModel } from "@/app/src/models/task";
import { connectDb } from "@/app/src/units/database"
import { NextRequest, NextResponse } from "next/server"

export  const GET =async(
_: NextRequest,
{params}:{params:Promise<{id: string}>}

)=>{
    try{
await connectDb();
const{id}=await params
const task = await TaskModel.findById(id);

if(!task){
    return NextResponse.json({message:'タスクが存在しません'},
        {status:404}
    );
}

    return NextResponse.json({message:'タスク取得成功',task});
    }catch(error){
        return NextResponse.json({message:'タスク取得失敗'},{status:500});
    }
};

export const dynamic = 'force-dynamic'