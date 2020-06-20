/*
 * @Author NF
 * @Task A todo list (project to learn EJS - see list.ejs also)
*/

//jshint esversion:6
//jshint -W033

exports.getDate = function() {

const today = new Date()
const day = today.toLocaleDateString("en-US", {  weekday: "long", day: "numeric", month: "long"})

return(day)

}
