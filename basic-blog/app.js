/*
 * @Author NF
 * @Task Basic blog to practice previously-introduced web dev skillsets.
 * @Version wip
*/

//jshint esversion:6

/* Load in packages */

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("Lodash")

/* Set up express application */

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

/*
 * Important learning: Map serves as performant collection of key-value pairs.
 * - call map.set(key, value) to allocate key-value pair.
 * - call map.get(key) to retrieve paired value.
 * - iterate key-value pairs by for(let [key, value] of map)
 * - iterate all values by for(let value of map.values())
 * usefully, value can serve as js object of any size.
*/
const posts = new Map();

/* Home page */

app.get("/", (req, res) => {

console.log(posts)

res.render('home', { posts: posts})

})

/* About page */

app.get("/about", (req, res) => {

res.render('about', { })

})

/* Contact page */

app.get("/contact", (req, res) => {

res.render('contact', { })

})

/* Compose page (not linked from other pages ... its "secret")*/

app.get("/compose", (req, res) => {

res.render('compose', { })

})

app.post("/compose", (req, res) => {

  const posturl = url_friendly(req.body.compose_title)

  const content = {

    title: req.body.compose_title,
    body: req.body.compose_body

  }

  if(posts.get(posturl)) {

    console.log("Composition failed - title exists: " + content.title)
    res.send("Error - title already exists")

  } else {

    posts.set(posturl, content)
    res.redirect("/")
    console.log("Composition with title: " + content.title)

  }

})

/* Post pages */

/*
 * Important learning: route parameters in express.js
 * - user directed to page by route parameter in link
 * - infinite subdirectories based on the routing parameter given
 * https://expressjs.com/en/guide/routing.html
*/

app.get("/posts/:posturl", (req, res) => {

  let post = posts.get(req.params.posturl)

  if(!post) {

    res.send("Error - post does not exist")

  } else {

    res.render("post", { post: post })

  }

})

/* Listener */

app.listen(3000, () => { console.log("Listening on port 3000.")})


/* General functions */

/* Naive url friendly function.*/

function url_friendly(text) {

return(_.toLower(text))

}
