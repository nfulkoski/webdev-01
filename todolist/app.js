/*
 * @Author NF
 * @Task A todo list (project to learn EJS - see list.ejs also)
 * @Version 1.0.0 (functional, non-final)
*/

/*
Important learning
- es6 created 'let' which has local scope when written inside a function
- whereas var has global scope when written inside a function
- e.g. multiple different uses of iterating var i = 0 can cause confusion
- scoping issues associated with var having global scope when defined inside a function,
- ... "are among the most common cause of bugs in javascript"
- in retrospect all variables should be constants so there isnt an example in this file!
- ... but there is in this project. list.ejs. <3
*/

//jshint esversion:6
//jshint -W033

const express = require("express")
const bodyParser = require("body-parser")
const date = require(__dirname + "/date.js")

const app = express()

app.use('*/css',express.static('public/css'));
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))

// Updating an array is not breach of const term.
// push and pop still function.
const items_general = [ ]
const items_work = [ ]


app.get("/", (req, res) => {

res.render('list', { today_name: date.getDate(), listItems: items_general, title: "General" })

})

app.post("/", (req, res) => {

if(req.body.list == "Work") {

  items_work.push(req.body.input_tsk)
  res.redirect("/work")

} else {

  items_general.push(req.body.input_tsk)
  res.redirect("/")

}

})

app.get("/work", (req, res) => {

res.render('list', { today_name: date.getDate(), listItems: items_work, title: "Work" })

})


app.listen(3000, () => { console.log("Listening on port 3000.")})
