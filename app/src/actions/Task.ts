'use server';

import { redirect } from "next/navigation";
import { Task,TaskModel } from "../models/task";
import { connectDb } from "../units/database";
export interface FormState {
error :string;
    }

    export const createTask = async( state:FormState,formData:FormData)=>{
        const newTask:Task={
            title:formData.get('title') as string,
            description:formData.get('description') as string,
            dueDate:formData.get('dueDate') as string,
         isCompleted:false,
        }
        try{
            await connectDb()
            await TaskModel.create(newTask)
        }catch(error){
            state.error='タスクの作成に失敗しました'
            return state;
        }
        redirect('/')
    }

        export const updateTask = async(id:string, state:FormState,formData:FormData)=>{
        const newTask:Task={
            title:formData.get('title') as string,
            description:formData.get('description') as string,
            dueDate:formData.get('dueDate') as string,
         isCompleted:Boolean(formData.get('isCompleted')),
        }
        try{
            await connectDb()
            await TaskModel.updateOne({_id:id},newTask)
        }catch(error){
            state.error='タスクの更新に失敗しました'
            return state;
        }
        redirect('/')
    }

export const deleteTask = async(id:string,state:FormState,formData:FormData)=>{
    const deleteTask:Task={
       title:formData.get('title') as string,
       description:formData.get('description') as string,
        dueDate:formData.get('dueDate') as string,
         isCompleted:Boolean(formData.get('isCompleted')),}
         try{
            await connectDb()
            await TaskModel.deleteOne({_id:id},deleteTask)
         }catch(error){
            state.error='タスクの消去に失敗しました'
            return state;
         }
redirect('/')
    }
