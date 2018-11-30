const connection = require("./connection.js")

let orm = {

   //* Get All Da Burgers from the database
  queryAllBurgers: function(table, column, send) {

    let query = "SELECT * FROM ?? ORDER BY ?? DESC"

    connection.query(query, [table, column], (err, result) => { 

      let currentData = [],
          pastData = []

      for ( let i=0; i<result.length; i++ ) {

        if ( result[i].burger_devoured === 0 ) {

          currentData.push(result[i])
        } else pastData.push(result[i])
      }
      //Send the resulting data back to burger_controller.js
      send(currentData, pastData) 
    } )
  },

  //* Add A Burger to the database
  queryAddBurger: function(table, name, devoured, send) {

    let query = "INSERT INTO ?? (burger_name, burger_devoured) VALUES (?,?)"
    
    connection.query(query, [table, name, devoured], (err, result) => { 
      
      
      let refreshQuery = "SELECT * FROM burgers ORDER BY burger_name DESC"
      connection.query(refreshQuery, (err, result) => { 
        let currentData = [],
            pastData = []

        for ( let i=0; i<result.length; i++ ) {

          if ( result[i].burger_devoured === 0 ) {

            currentData.push(result[i])
          } else pastData.push(result[i])
        }
        //Send the resulting data back to burger_controller.js
        send(currentData, pastData)
      } )
    })
  },

  //* Eat/Restore A Burger (update status in database)
  queryBurgerStatus: function(table, devoured, id, send) {

    let query = "UPDATE ?? SET burger_devoured = ? WHERE id = ?"

    connection.query(query, [table, devoured, id], (err, result) => {

      let refreshQuery = "SELECT * FROM burgers ORDER BY burger_name DESC"
      connection.query(refreshQuery, (err, result) => { 
        let currentData = [],
            pastData = []

        for ( let i=0; i<result.length; i++ ) {

          if ( result[i].burger_devoured === 0 ) {

            currentData.push(result[i])
          } else pastData.push(result[i])
        }
        //Send the resulting data back to burger_controller.js
        send(currentData, pastData)
       } )
    })
  },
  //* Update A Burger in the Database (name change)
  queryBurgerUpdate: function(table, name, id, send) {

    let query = "UPDATE ?? SET burger_name = ? WHERE id = ?"

    connection.query(query, [table, name, id], (err, result) => {

      let refreshQuery = "SELECT * FROM burgers ORDER BY burger_name DESC"
      connection.query(refreshQuery, (err, result) => { 
        let currentData = [],
            pastData = []

        for ( let i=0; i<result.length; i++ ) {

          if ( result[i].burger_devoured === 0 ) {

            currentData.push(result[i])
          } else pastData.push(result[i])
        }
        //Send the resulting data back to burger_controller.js
        send(currentData, pastData)
       } )
    })
  },
  //*Delete A Burger in the Database
  queryDeleteBurger: function(table, id, send) {

    let query = "DELETE FROM ?? WHERE id = ?"

    connection.query(query, [table, id], (err, result) => {

      let refreshQuery = "SELECT * FROM burgers ORDER BY burger_name DESC"
      connection.query(refreshQuery, (err, result) => { 
        let currentData = [],
            pastData = []

        for ( let i=0; i<result.length; i++ ) {

          if ( result[i].burger_devoured === 0 ) {

            currentData.push(result[i])
          } else pastData.push(result[i])
        }
        //Send the resulting data back to burger_controller.js
        send(currentData, pastData)
       } )
    })
  }
}

module.exports = orm

