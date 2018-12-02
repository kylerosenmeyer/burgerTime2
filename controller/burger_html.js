
const db = require("../models")

module.exports = function(app) {

    let burgerMenu = [],
        pastBurgers = []

    app.get("/", function(req, res) {

        res.render("index")
    })

    app.get("/burger-menu/:username", function(req, res) {

        let user = req.params.username
        console.log("user =", user)

        db.Patron.findOne( { where: { patron_name: user }, include: [db.Burger]
        }).then( (results) => 
            {
                console.log("burger table incoming: ",results.Burgers)
                for ( let i=0; i<results.Burgers.length; i++ ) {
                    
                    if ( results.Burgers[i].burger_devoured == false ) {

                        burgerMenu.push(results.Burgers[i])

                    } else if ( results.Burgers[i].burger_devoured == true ) {
                        pastBurgers.push(results.Burgers[i])
                    }
                }

                console.log("burgerMenu: ", burgerMenu)
                console.log("pastBurgers: ", pastBurgers)
                console.log("userDoublecheck: ", user)

                    res.render("app", 
                    { 
                        user: user,
                        PatronID: results.id,
                        burger: burgerMenu,
                        pastburger: pastBurgers                    } 
                )
                burgerMenu = []
                pastBurgers = [] 
            }
        )      
    })
    

    
}
    

