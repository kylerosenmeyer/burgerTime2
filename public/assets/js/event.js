//Event Listener for the Eat Da Burger Button
$("#eatDaBurger").click( function() {
    let userName = $("#enterName").val().trim(),
        url = "/api/users/" + userName,
        nextPage = "/burger-menu/" + userName

    console.log("url", url)
    $.post(url).then( () => { location.href = nextPage } )
})

//Event Listener for clicking the Add Da Burger button. 
$("#addBurger").click( function() {
    //Get the burger name from the user, and store it in an object called newBurger.
    event.preventDefault()

    let burgercheck = $("#burgerName").val().trim(),
        patronID = $("#yourName").attr("data-id")
        newBurger = {
            burger_name: burgercheck,
            burger_devoured: 0,
            patronID: patronID
        }
       
    console.log(newBurger)
    //Hit the post route to add the burger to the database, and reload the page.
    $.post("/api/addburger", newBurger).then( () => { location.reload() } )
})

//Event Listener for clicking the Eat Da Burger button.
$(".eatBurger").click( function() {
    //Get the burger_id of the burger clicked on, and create the burger object to be updated.
    let bfID = $(this).attr("data-number"),
        eatenBurger = {
            id: bfID,
            burger_name: $("#" + bfID).text(),
            burger_devoured: 1
        }
    //Hit the route to update the devoured state of the burger, and reload the page.
    $.ajax({
        url: "/api/updateburger/" + bfID,
        method: "PUT",
        data: eatenBurger
    }).then( () => { location.reload() } )
})

//Event Listener for clicking the "Put This Burger Back On The Menu" button.
$(".restoreBurger").click( function() {
    
    //Get the burger_id of the burger clicked on, and create the burger object to be updated.
    let bfID = $(this).attr("data-number")

    let restoredBurger = {
            id: bfID,
            burger_name: $("#" + bfID).text(),
            burger_devoured: 0
        }
    //Hit the route to update the devoured state of the burger, and reload the page.
    $.ajax({
        url: "/api/updateburger/" + bfID,
        method: "PUT",
        data: restoredBurger
    }).then( () => { location.reload() } )
})

//Event Listener for clicking the "Throw Away This Burger" button.
$(".deleteBurger").click( function() {
    //Get the burger_id of the burger clicked on, and create the burger object to be updated.
    let bfID = $(this).attr("data-number"),
        thrownBurger = {
            id: bfID,
            burger_name: $("#" + bfID).text(),
            burger_devoured: 1
        }
    //Hit the route to delete the burger from the database, and reload the page.
    $.ajax({
        url: "/api/deleteburger/" + bfID, 
        method: "DELETE",
        data: thrownBurger
    }).then( () => { location.reload() } )
})

//Event Listener for clicking the "Update Burger" button.
$("#changeBurger").click( () => {
    event.preventDefault()

    //Get the burger_id from the dropdown menu item selected, and create a burger object to be updated.
    let bfID = $(".same-as-selected").attr("id"),
        burgerUpdate = {
            id: bfID,
            burger_name: $("#burgerUpdate").val().trim(),
            burger_devoured: 0
        }
    //Hit the route to update the burger, and reload the page.
    $.ajax({
        url: "/api/updateburger/" + bfID,
        method: "PUT",
        data: burgerUpdate
    }).then( () => { location.reload() } )
})





