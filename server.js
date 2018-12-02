//Setup constant variables
const 
    express = require("express"),
    handlebars = require("express-handlebars"),
    app = express(),
    PORT = process.env.PORT || 8080,
    db = require("./models"),
    htmlRoutes = require("./controller/burger_html.js"),
    apiRoutes = require("./controller/burger_api.js")

//Setup Middleware
app.use( express.urlencoded( { extended: true } ) )
app.use( express.json() )

//Setup the public folder for event listeners and styling
app.use( express.static( "public" ) )

//Setup the handblebars templates as the view engine
app.engine("handlebars", handlebars({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

//call the controller files with app as a paramater. That will bring in all the app.(tasks) into the server to be run with express()
htmlRoutes(app)
apiRoutes(app)

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    })
})
