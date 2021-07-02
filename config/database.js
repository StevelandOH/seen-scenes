const {
	db: { username, password, database, host },
} = require('./index');

module.exports = {
	development: {
		username: "seen_scenes_app",
		password: "password",
		database: "seen_scenes_development",
		host,
		dialect: 'postgres',
	},
	production: {
		use_env_variable: 'DATABASE_URL',
		dialect: 'postgres',
		seederStorage: 'sequelize',
	},
};
