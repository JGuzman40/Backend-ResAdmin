const { DataTypes } = require('sequelize')
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		'Suscription',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			plan_price: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			registration_date: {
				type: DataTypes.DATE,
			},
		},
		{
			timestamps: false,
		}
	)
}