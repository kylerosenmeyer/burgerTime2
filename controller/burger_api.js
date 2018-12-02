const db = require("../models")

module.exports = function(app) {

    app.post("/api/users/:username", function(req,res) {

        let userName = req.params.username
        console.log("user: ",userName)

        db.Patron.findOrCreate( { where: { patron_name: userName } } ).then( (result) => { res.json(result) } )
    })

    app.post("/api/addburger/", function(req, res) {

        console.log("incoming burger:", req.body)
        db.Burger.create({

            burger_name: req.body.burger_name,
            burger_devoured: req.body.burger_devoured,
            PatronId: req.body.patronID

        }).then( (result) =>  { res.json(result) } )
    })

    app.delete("/api/deleteburger/:id", function(req, res) {

        db.Burger.destroy( { where: { id: req.params.id } } )
          .then( (results) => { res.json(results) } )
    })

    app.put("/api/updateburger/:id", function(req, res) {

        console.log("incoming burger change: ",req.body)

        db.Burger.update( { burger_name: req.body.burger_name,
                            burger_devoured: req.body.burger_devoured}, 
                          { where: { id: req.params.id } } )
          .then( (results) => { res.json(results) } )
    })
}
    

