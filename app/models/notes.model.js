module.exports = (sequelize, Sequelize) => {
    const Notes = sequelize.define("notes", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      }
    });
    return Notes;
  };