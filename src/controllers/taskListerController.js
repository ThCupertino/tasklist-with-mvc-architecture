const taskListModel = require("../models/taskListModel")

const taskListerController = {
  //GET /index
  index: (req, res) => {
    res.render('index')
  },

  //GET /app
  app: (req, res) => {
    const taskLists = taskListModel.getAllTaskLists()
    res.render('app', { taskLists })
  },

  //GET /app/nova-lista
  create: (req, res) => {
    res.render('create.ejs')
  },

  //POST /app/nova-lista
  save: (req, res) => {
    const { title } = req.body
    const newList = taskListModel.createList(title)
    taskListModel.saveList(newList)
    res.redirect('/app')
  },

  //GET /app/:id
  show: (req, res) => {
    const { id } = req.params
    if (!id) throw new Error('Lista de tarefas não encontrada!')
    const taskList = taskListModel.getListTaskById(id)
    res.render('show', { taskList })
  },

  //POST /app/:id/excluir
  delete: (req, res) => {
    const { id } = req.params
    if(!id) throw new Error('Lista de tarefas não encontrada!')
    taskListModel.deleteList(id)
    res.redirect('/app')
  },

  // POST /app/:id/nova-tarefa
  addTask: (req, res) => {
    const { id } = req.params
    const { title } = req.body

    taskListModel.addTask(id, title)

    res.redirect(`/app/${id}`)
  },

  // POST /app/:listaId/completar/:taskId
  completeTask: (req, res) => {
    const { listId, taskId } = req.params
    taskListModel.completeTask(listId, taskId)
    res.redirect(`/app/${listId}`)
  },

  // POST /app/:listaId/desfazer/:taskId
  undoTask: (req, res) => {
    const { listId, taskId } = req.params
    taskListModel.undoTask(listId, taskId)
    res.redirect(`/app/${listId}`)
  }

}

module.exports = taskListerController