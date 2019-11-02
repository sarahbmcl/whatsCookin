module.export = function(sequelize, DataTypes) {
let User = sequelize. define("user", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      min: 1
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      min: 1 
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      min: 6 
    }
  },
  freezeTableName: true
});
return User
}