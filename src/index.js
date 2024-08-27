const express = require("express")
const path = require("node:path")
const router = require("./routes")

const app = express()

//CONFIGURAÇÃO DO EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//CONFIGURAÇÃO DE ARQUIVOS ESTÁTICOS
app.use(express.static('public'))

//CONFIGURAÇÃO PARA LER DADOS DA REQUISIÇÃO
app.use(express.urlencoded({ extended: true }))

//ROTAS DA APLICAÇÃO
app.use(router)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.clear()
  console.log(`Servidor iniciado: http://localhost:${PORT}`)
})