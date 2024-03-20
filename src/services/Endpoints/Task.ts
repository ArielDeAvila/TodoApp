import { Endpoint } from "@/types/TypeStore"

const TasksEndpoints = {
  getAllTask: {
    method: 'get',
    uri: () => 'task/getall'
  } as Endpoint,

  createTask: {
    method: 'post',
    uri: () => 'task/create'
  } as Endpoint,

  completeTask: {
    method: 'patch',
    uri: (id: number) => `task/complete/${id}`
  } as Endpoint,

  deleteTask: {
    method: 'delete',
    uri: (id: number) => `task/delete/${id}`
  } as Endpoint
}

export default TasksEndpoints