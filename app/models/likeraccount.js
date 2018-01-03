module.exports = function (sequelize, Sequelize) {

    return sequelize.define('LikerAccount', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        username: {
            type: Sequelize.STRING
        },
        token : {
            type: Sequelize.STRING
        }
    }, {
        underscored: true
    });

}