const   
    orm = require("../config/orm.js")

//burgers is an object containing property functions to execute various queries on the database. It accepts a passthrough parameter
//from burger_controller.js (which is a callback function) and passes that along to orm.js along with the query paramaters needed.
let burgers = {

    //allBurgers brings in the allBurgers function from burger_controller.js as a callback, and passes it on to orm. js with additional
    //parameters to make a mysql query.
    allBurgers: function(cb) {

        orm.queryAllBurgers("burgers", "burger_name", cb)
    },
    //addBurgers brings in the addBurger function from burger_controller.js as a callback, and passes it on to orm. js with additional
    //parameters to make a mysql query.
    addBurger: function(newBurger, insert) {

        //Since newBurger was passed into addBurger as an object, grab the name and devored state from it.
        let burgerName = newBurger.burger_name,
            burgerDevoured = newBurger.burger_devoured

        //Now the information is assembled for the mysql query, so send the parameters to orm.js.
        orm.queryAddBurger("burgers", burgerName, burgerDevoured, insert)
    }, 
    //statusUpdate brings in the parameters and callback from the actionBurger route (eat burger or restore burger) in burger_controller.js  and passes the callback with query paramaters to orm.js
    statusUpdate: function(burgerAction, eat) {

       let  burgerID = burgerAction.burger_id,
            burgerDevoured = burgerAction.burger_devoured
        //Now the information is assembled for the mysql query, so send the parameters to orm.js.
        orm.queryBurgerStatus("burgers", burgerDevoured, burgerID, eat)
    },
    //nameUpdate brings in the parameters and callback from the update burger route in burger_controller.js  and passes the callback with query paramaters to orm.js
    nameUpdate: function(burgerUpdate, update) {

        let burgerID = burgerUpdate.burger_id,
            burgerName = burgerUpdate.burger_name
        //Now the information is assembled for the mysql query, so send the parameters to orm.js.
        orm.queryBurgerUpdate("burgers", burgerName, burgerID, update)
    },
    //deleteDaBurger brings in the parameters and callback from the delete burger route in burger_controller.js  and passes the callback with query paramaters to orm.js
    deleteDaBurger: function(burgerDeletion, destroy) {

        let burgerID = burgerDeletion.burger_id
        //Now the information is assembled for the mysql query, so send the parameters to orm.js.
        orm.queryDeleteBurger("burgers", burgerID, destroy)
    }
}

module.exports = burgers

