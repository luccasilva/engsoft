module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'sisi',
    database: 'engsoft',
    define: {
        timestamps: true, //created_at, updated_at
        underscored: true, //snake case ( user_group )
    },
};