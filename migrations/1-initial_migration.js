'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "inventory", deps: []
 * createTable "users", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "initial_migration",
    "created": "2020-07-01T21:04:45.024Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "inventory",
            {
                "name": {
                    "type": Sequelize.INTEGER,
                    "field": "name",
                    "primaryKey": true,
                    "allowNull": false
                },
                "price": {
                    "type": Sequelize.INTEGER,
                    "field": "price",
                    "allowNull": false
                },
                "location": {
                    "type": Sequelize.STRING(45),
                    "field": "location",
                    "allowNull": false
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "users",
            {
                "userId": {
                    "type": Sequelize.INTEGER,
                    "field": "userId",
                    "primaryKey": true,
                    "allowNull": false,
                },
                "FirstName": {
                    "type": Sequelize.STRING(50),
                    "field": "FirstName",
                    "allowNull": true
                },
                "LAstNAme": {
                    "type": Sequelize.STRING(50),
                    "field": "LAstNAme",
                    "allowNull": true
                },
                "SignUpDate": {
                    "type": Sequelize.DATE,
                    "field": "SignUpDate",
                    "allowNull": true
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
