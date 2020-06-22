/*
 * @Author NF
 * @Task 'Secrets' application - to learn authentication and security
 * @Version 1.0.1
 */

//jshint esversion:6
//jshint -W033

require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const saltRounds = 10

const app = new express()

app.use(express.static("public"))
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({
  extended: true
}))

mongoose.connect(process.env.DB_LOC, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const userSchema = new mongoose.Schema({

  email: String,
  password: String

})

const User = new mongoose.model("User", userSchema)

app.get("/", (req, res) => {

  res.render("home")

})

app.get("/login", (req, res) => {

  res.render("login")

})

app.post("/login", (req, res) => {

  const username = req.body.username
  const password = req.body.password

  User.findOne({
    email: username
  }, (err, foundUser) => {

    if (err) {

      console.log(err)

    } else {

      if (foundUser) {

        bcrypt.compare(req.body.password, foundUser.password, (err, result) => {

          if (result == true) {

            res.render("secrets")

          }

        })

      }

    }

  })

})




app.get("/register", (req, res) => {

  res.render("register")

})

app.post("/register", (req, res) => {

  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {

    const newUser = new User({

      email: req.body.username,
      password: hash

    })

    newUser.save((err) => {

      if (err) {

        console.log(err)

      } else {

        res.render("secrets")

      }

    })

  })



})


app.listen(3000, () => {
  console.log("Listening on port 3000.")
})