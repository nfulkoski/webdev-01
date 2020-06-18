//jshint esversion:6
//jshint -W033

/*
 * @Author NF
 * @Task Basic email list signup form with mailchimp api.
 * @Version 1.0.0 final.
*/

// Git excludes config.js - features api keys etc.
const config = require('./config.js')

const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")
const https = require("https")

const app = new express()

app.use(express.static("public"))

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", (req, res) => {

res.sendFile(__dirname + "/index.html")

})

app.post("/", (req, res) => {

const email = req.body.email
console.log("Signup received from " + req.body.email)

    const test = {

      members: [
        {
          email_address: email,
          status: "subscribed",
          merge_fields: {
            //Low yield to add actual inputs since we just want to learn user input -> mailchimp
            //A single input on the webpage suffices for this educational purpose.
            //Meme names used bonus points if you get the reference.
            FNAME: "Mesars",
            LNAME: "Plox"
          }
        }
      ]

    }

    const jsonData = JSON.stringify(test)

    const url = "https://us10.api.mailchimp.com/3.0/lists/" + config.listid + "?apikey=" + config.apikey

    const request_to_smk = https.request(url, config.options, (resp_post_smk) => {

      if(resp_post_smk.statusCode == 200) {

        res.send("<h1><em>Successfully subscribed!</h1></em>")
        console.log("Signup successful from " + req.body.email)


      } else {

        res.send("<h1>Aint work redo pls</h1")
        console.log("Signup failed error " + resp_post_smk.statusCode)

      }

      resp_post_smk.on("data", (data) => {

        console.log(JSON.parse(data))

      })

    })

    request_to_smk.write(jsonData)
    request_to_smk.end()


  })

app.listen(process.env.PORT || 3000, () => console.log("Listening on port " + (process.env.PORT || 3000)))
