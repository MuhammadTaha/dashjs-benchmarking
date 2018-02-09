'use strict';

var db = require("../../db");
var sequelize =  db.sequelize,
Sequelize =  db.Sequelize ;

var MetricValue = sequelize.define('matric_values',{
  id: {
    type: Sequelize.BIGINT,
    allowNull: false,
    primaryKey:true,
    autoIncrement:true
  },
  client_id: {
    type: Sequelize.BIGINT,
    allowNull: false,
    
  },
  metric_id: {
    type: Sequelize.BIGINT,
    allowNull: false,
  },
  player_id: {
    type: Sequelize.BIGINT,
    allowNull: false,
  },
  unit_id: {
    type: Sequelize.BIGINT,
    allowNull: false,
  },
  metric_values: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
  }
 
   
});
  

module.exports = MetricValue;