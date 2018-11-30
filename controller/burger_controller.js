const 
    express = require("express"),
    burger = require("../model/burger.js")


module.exports = function(app) {

    app.use(express.static("./public"))

    
    //The Root GET Route displays all the Burgers on Menu
    app.get("/", (req, res) => {

        //The function allBurgers will be passed as a paramater to the allBurgers function in burger.js.
        function burgerMenu(currentData, pastData) {
            // console.log("back at burger Controller: ", data)
            //The "data" that comes back to the allBurgers function is the result generated in orm.js. 
            // console.log("current: ", currentData)
            // console.log("past: ", pastData)
            //When the callback returns to this file, render the page.
            res.render("index", 
            { 
                burger: currentData,
                pastburger: pastData
            } )
        }
        //execute the chain of commands.
        burger.allBurgers(burgerMenu)
    })

    //The addBurger POST Route displays the Burger Menu after a burger is added.
    app.post("/api/addburger", (req, res) => {
       
        //the req.body passed into this route is generated in event.js that holds the event listeners on the page.
        let newBurger = req.body
        console.log(newBurger)

        function addBurger(currentData, pastData) {

            //This route brings in the new burger (object) being added.
            // console.log("back at burger Controller: ", newBurger)
            //The "data" that comes back to the addBurger function is the result generated in orm.js. 
            //When the callback returns to this file, render the page.
            res.render("index", 
            { 
                burger: currentData,
                pastburger: pastData
            } )
        }
        //Execute the chain of commands. Pass the new burger_name and burger_devoured state onward to be added to the database.
        burger.addBurger(newBurger, addBurger)
    })

    //The actionBurger PUT Route updates the Burger Menu after a burger is eaten or restored.
    app.put("/api/actionburger", (req, res) => {

        let burgerAction = req.body

        function perform(currentData, pastData) {

            // console.log("back at burger Controller: ", burgerAction)
            //When the callback returns to this file, render the page.
            res.render("index", 
            { 
                burger: currentData,
                pastburger: pastData
            } )
        }
        //Execute the chain of commands. Pass the burger_name and burger_devoured state onward to be updated in the database.
        burger.statusUpdate(burgerAction, perform)
    })

    //The deleteBurger DELETE Route removes the Burger Menu (and database.)
    app.delete("/api/deleteburger", (req, res) => {

        let burgerDeletion = req.body
        
        function destroy(currentData, pastData) {

            // console.log("back at burger Controller: ", burgerDeletion)
            //When the callback returns to this file, render the page.
            res.render("index",
            {
                burger: currentData,
                pastBurger: pastData
            })
        }
        //Execute the chain of commands. Pass the burger_name and burger_devoured state onward to be deleted from the database.
        burger.deleteDaBurger(burgerDeletion, destroy)
    })

     //The updateBurger PUT Route updates the Burger Menu after a burger's name has been changed.
     app.put("/api/updateburger", (req, res) => {

        let burgerUpdate = req.body

        function update(currentData, pastData) {

            // console.log("back at burger Controller: ", burgerUpdate)
            //When the callback returns to this file, render the page.
            res.render("index", 
            { 
                burger: currentData,
                pastburger: pastData
            } )
        }
        //Execute the chain of commands. Pass the burger_name and burger_devoured state onward to be updated in the database.
        burger.nameUpdate(burgerUpdate, update)
    })
}

    

