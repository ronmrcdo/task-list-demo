const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Task extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Task.belongsTo(models.User, { foreignKey: 'userId' });
		}
	}
	Task.init(
		{
			note: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Task',
			tableName: 'tasks',
		},
	);
	return Task;
};
