import TaskCard from "@/app/components/TaskCard/TaskCard"
import { getAllTasks } from "@/app/src/actions/Task"

const CompletedTaskPage = async () => {
  const allTask = await getAllTasks()
  
  // 1. 完了済みのタスクだけをフィルタリング
  const completedTasksRaw = allTask.filter((task) => task.isCompleted === true)
  
  // 2. 💡 フィルター後のタスクを、クライアントコンポーネントに渡せる安全な形式（文字列）に変換
  const filterAlltask = completedTasksRaw.map((task) => ({
    ...task,
    _id: task._id.toString(), // ❌ 特殊なオブジェクト から ⭕️ 文字列へ
    userId: task.userId?.toString(), // userId もあれば文字列へ
    // 日付データもすべて文字列（ISO形式）に変換
    createdAt: task.createdAt ? new Date(task.createdAt).toISOString() : undefined,
    updatedAt: task.updatedAt ? new Date(task.updatedAt).toISOString() : undefined,
    dueDate: task.dueDate ? new Date(task.dueDate).toISOString() : undefined,
  }))

  return (
    <div className='text-gray-800 p-8 h-full overflow-y-auto pb-24'>
      <header className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold flex items-center'>Completed Tasks</h1>
      </header>
      <div className='mt-8 flex flex-wrap gap-4'>
        {/* 💡 安全に変換された filterAlltask をループで回す */}
        {filterAlltask?.map((task) => task &&
          <TaskCard key={task._id} task={task as any} />
        )}
      </div>
    </div>
  )
}

export default CompletedTaskPage