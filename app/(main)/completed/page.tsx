import TaskCard from "@/app/components/TaskCard/TaskCard"
import { getAllTasks } from "@/app/src/actions/Task"


const CompletedTaskPage = async () => {
  const allTask = await getAllTasks()
  
  // 1. 完了済みのタスクだけをフィルタリング（型は自動的に TaskDocument[] になります）
  const completedTasks = allTask.filter((task) => task.isCompleted === true)

  return (
    <div className='text-gray-800 p-8 h-full overflow-y-auto pb-24'>
      <header className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold flex items-center'>Completed Tasks</h1>
      </header>
      <div className='mt-8 flex flex-wrap gap-4'>
        {/* 2. プレーンなオブジェクトに変換せず、そのまま TaskCard に渡す */}
        {completedTasks.map((task) => (
          /* 💡 _id は ObjectId 型なので、keyに渡すときは .toString() をつけます */
          <TaskCard key={task._id.toString()} task={task} />
        ))}
      </div>
    </div>
  )
}

export default CompletedTaskPage