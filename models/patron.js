module.exports = function(sequelize, DataTypes) {

    var Patron = sequelize.define("Patron", {
        
        patron_name: { 
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        }
    })
    
    Patron.associate = function(db) {
    
        db.Patron.hasMany(db.Burger, {
        onDelete: "CASCADE"
        })
    }

    return Patron
}


