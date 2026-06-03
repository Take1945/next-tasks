import TaskCard from "@/app/components/TaskCard/TaskCard"
import { getAllTasks } from "@/app/src/actions/Task"

const ExpiredTaskPage = async () => {
  const allTask = await getAllTasks()
 
  // 1. 期限切れ、かつ未完了のタスクだけをフィルタリング
  const expiredTasksRaw = allTask.filter((task) => {
    const now = new Date()
    const dueDate = new Date(task.dueDate)
    return now > dueDate && task.isCompleted === false
  })

  // 2. 💡 フィルター後のデータを、クライアントに渡せるプレーンな形式（文字列）に変換
  const filterAlltask = expiredTasksRaw.map((task) => ({
    ...task,
    _id: task._id.toString(), // ❌ 特殊オブジェクト から ⭕️ 文字列へ
    userId: task.userId?.toString(),
    createdAt: task.createdAt ? new Date(task.createdAt).toISOString() : undefined,
    updatedAt: task.updatedAt ? new Date(task.updatedAt).toISOString() : undefined,
    dueDate: task.dueDate ? new Date(task.dueDate).toISOString() : undefined,
  }))
 
  return (
    <div className='text-gray-800 p-8 h-full overflow-y-auto pb-24'>
      <header className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold flex items-center'>Expired Tasks</h1>
      </header>
      <div className='mt-8 flex flex-wrap gap-4'>
        {filterAlltask?.map((task) => task &&
       
          <TaskCard key={task._id} task={task as any} />
        )}
      </div>
    </div>
  )
}
 
export default ExpiredTaskPage
