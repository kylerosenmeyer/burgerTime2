//Setup constant variables
const 
    express = require("express"),
    handlebars = require("express-handlebars"),
    app = express(),
    PORT = process.env.PORT || 8080,
    controller = require("./controller/burger_controller.js")

//Setup Middleware
app.use( express.urlencoded( { extended: true } ) )
app.use( express.json() )

//Setup the public folder for event listeners and styling
app.use( express.static( "burgerTime/public" ) )

//Setup the handblebars templates as the view engine
app.engine("handlebars", handlebars({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

//call the controller file with app as a paramater. That will bring in all the app.(tasks) into the server to be run with express()
controller(app)

//Start listening on the port.
app.listen( PORT, () => { console.log( "App listening on PORT " + PORT ) } ) 