module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("notes", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      }
    });
    return Tutorial;
  };