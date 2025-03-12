const express = require('express')
const path   = require('path')
const app = express()
const multer  = require('multer')
const mergerpdfs  = require('mergepdfs')
const upload = multer({ dest: 'uploads/' })
const port = 300

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"templates/index.html"))
})

app.post('/merge', upload.array('pdfs', 2), function (req, res, next) {
    console.log(req.files)
    mergerpdfs(path.join(__dirname,req.file[0].path))
    res.send({data:req.files})
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
  })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})