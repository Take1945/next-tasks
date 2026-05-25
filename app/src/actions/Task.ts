'use server';

import { redirect } from "next/navigation";
import { Task, TaskModel } from "../models/task";
import { connectDb } from "../units/database";
import { adminAuth } from "@/app/lib/firebase-admin"
import { cookies } from 'next/headers'

export interface FormState {
  error: string;
}

const getUserId = async () => {
  const cookieStore = await cookies()
  const session = cookieStore.get('session')?.value
  if (!session) redirect('/login')
  const decoded = await adminAuth.verifySessionCookie(session)
  return decoded.uid
}

export const getTasks = async () => {
  const userId = await getUserId()
  await connectDb()
  return TaskModel.find({ userId }).lean()
}

export const createTask = async (state: FormState, formData: FormData) => {
  const userId = await getUserId()
  const newTask: Task = {
    title: formData.get('title') as string,
    description: formData.get('description') as string,
    dueDate: formData.get('dueDate') as string,
    userId,
    isCompleted: false,
  }
  try {
    await connectDb()
    await TaskModel.create(newTask)
  } catch {
    return { error: 'タスクの作成に失敗しました' }
  }
  redirect('/all')
}

export const updateTask = async (id: string, state: FormState, formData: FormData) => {
  const userId = await getUserId()
  const newTask: Task = {
    title: formData.get('title') as string,
    description: formData.get('description') as string,
    dueDate: formData.get('dueDate') as string,
    userId,
    isCompleted: Boolean(formData.get('isCompleted')),
  }
  try {
    await connectDb()
    await TaskModel.updateOne({ _id: id, userId }, newTask)
  } catch {
    return { error: 'タスクの更新に失敗しました' }
  }
  redirect('/all')
}

export const deleteTask = async (id: string, state: FormState) => {
  const userId = await getUserId()
  try {
    await connectDb()
    await TaskModel.deleteOne({ _id: id, userId })
  } catch {
    return { error: 'タスクの消去に失敗しました' }
  }
  redirect('/all')
}