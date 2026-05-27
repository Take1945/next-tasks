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

if (!task) {
  return NextResponse.json(
    { message: 'タスクが存在しません' },
    { 
      status: 404,
      headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate' } 
    }
  );
}

 return NextResponse.json(
  { message: 'タスク取得成功', task },
  {
    headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate' }
  }
);
} catch (error) {
  return NextResponse.json(
    { message: 'タスク取得失敗' },
    { status: 500 }
  );
}}
export const dynamic = 'force-dynamic'