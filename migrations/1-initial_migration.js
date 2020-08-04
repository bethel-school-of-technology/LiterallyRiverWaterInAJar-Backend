'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "inventory", deps: []
 * createTable "posts", deps: []
 * createTable "users", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "initial_migration",
    "created": "2020-08-03T20:36:16.674Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "inventory",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "name": {
                    "type": Sequelize.STRING(45),
                    "field": "name",
                    "allowNull": false
                },
                "price1": {
                    "type": Sequelize.INTEGER,
                    "field": "price1",
                    "allowNull": false
                },
                "price2": {
                    "type": Sequelize.INTEGER,
                    "field": "price2",
                    "allowNull": false
                },
                "description1": {
                    "type": Sequelize.STRING,
                    "field": "description1",
                    "allowNull": false
                },
                "description2": {
                    "type": Sequelize.STRING,
                    "field": "description2",
                    "allowNull": false
                },
                "size1": {
                    "type": Sequelize.STRING(10),
                    "field": "size1",
                    "allowNull": false
                },
                "size2": {
                    "type": Sequelize.STRING(10),
                    "field": "size2",
                    "allowNull": false
                },
                "numbers": {
                    "type": Sequelize.INTEGER,
                    "field": "numbers",
                    "allowNull": false
                },
                "inCart": {
                    "type": Sequelize.BOOLEAN,
                    "field": "inCart",
                    "allowNull": false
                },
                "isMainProduct": {
                    "type": Sequelize.BOOLEAN,
                    "field": "isMainProduct",
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
                },
                "image": {
                    "type": Sequelize.STRING,
                    "field": "image",
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "posts",
            {
                "PostId": {
                    "type": Sequelize.INTEGER,
                    "field": "PostId",
                    "primaryKey": true,
                    "autoIncrement": true,
                    "allowNull": false
                },
                "PostBody": {
                    "type": Sequelize.STRING,
                    "field": "PostBody"
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
                "UserId": {
                    "type": Sequelize.INTEGER,
                    "field": "UserId",
                    "allowNull": false,
                    "primaryKey": true,
                    "autoIncrement": true
                },
                "FirstName": {
                    "type": Sequelize.STRING,
                    "field": "FirstName"
                },
                "LastName": {
                    "type": Sequelize.STRING,
                    "field": "LastName"
                },
                "Username": {
                    "type": Sequelize.STRING,
                    "field": "Username",
                    "unique": true
                },
                "Password": {
                    "type": Sequelize.STRING,
                    "field": "Password"
                },
                "Email": {
                    "type": Sequelize.STRING,
                    "field": "Email",
                    "unique": true
                },
                "Admin": {
                    "type": Sequelize.BOOLEAN,
                    "field": "Admin",
                    "defaultValue": false
                },
                "Deleted": {
                    "type": Sequelize.BOOLEAN,
                    "field": "Deleted",
                    "defaultValue": false
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
