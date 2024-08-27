const express = require('express')
const taskListerController = require('./controllers/taskListerController')

const router = express.Router()

router.get('/', taskListerController.index)
router.get('/app', taskListerController.app)
router.get('/app/create', taskListerController.create)
router.post('/app/new-list', taskListerController.save)

router.get('/app/:id', taskListerController.show)
router.post('/app/:id/delete', taskListerController.delete)
router.post('/app/:id/new-task', taskListerController.addTask)

router.post('/app/:listId/complete/:taskId', taskListerController.completeTask)
router.post('/app/:listId/undo-task/:taskId', taskListerController.undoTask)

module.exports = router