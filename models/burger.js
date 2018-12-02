module.exports = function(sequelize, DataTypes) {

    var Burger = sequelize.define("Burger", {
        
        burger_name: { 
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        burger_devoured: {
            type: DataTypes.BOOLEAN,
            default: false
        }
    })

    Burger.associate = function(db) {
        db.Burger.belongsTo(db.Patron, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return Burger
}