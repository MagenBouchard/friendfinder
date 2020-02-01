
const express = require("express");
const app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;


// app.get("/", function(req, res){
//     res.send("hello world!");
// })


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
require(".")


app.listen(PORT, function() {
  console.log("App listening on : http://localhost:" + PORT);
});