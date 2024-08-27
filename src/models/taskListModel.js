let taskLists = []

const taskListModel = {
  getAllTaskLists: () => {
    return taskLists
  },
  
  getListTaskById: (id) => {
    return taskLists.find(list => list.id === id)
  },

  createList: (title) => {
    const newList = {
      id: Math.floor(Math.random() * 99999999).toString(),
      title: title,
      tasks: []
    }
    return newList
  },


  saveList: (taskList) => {
    if (taskList.title === '') throw new Error('Título da lista não pode ficar vazio.')
    taskLists.push(taskList)
  },
  
  deleteList: (id) => {
    const listIndex = taskLists.findIndex(list => list.id === id)
    taskLists.splice(listIndex, 1)
  },

  addTask: (listId, taskTitle) => {
    const newTask = {
      id: Math.floor(Math.random() * 99999999).toString(),
      title: taskTitle,
      completed: false
    }
    taskLists.find(list => list.id === listId).tasks.push(newTask)
  },

  completeTask: (listId, taskId) => {
    const taskList = taskLists.find(list => list.id === listId)
    const task = taskList.tasks.find(task => task.id === taskId)
    task.completed = true
  },

  undoTask: (listId, taskId) => {
    const taskList = taskLists.find(list => list.id === listId)
    const task = taskList.tasks.find(task => task.id === taskId)
    task.completed = false
  }
}

module.exports = taskListModel