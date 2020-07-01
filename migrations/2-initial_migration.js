'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "userId" from table "users"
 * removeColumn "LAstNAme" from table "users"
 * removeColumn "SignUpDate" from table "users"
 * addColumn "UserId" to table "users"
 * addColumn "LastName" to table "users"
 * addColumn "Username" to table "users"
 * addColumn "Password" to table "users"
 * addColumn "Email" to table "users"
 * addColumn "Admin" to table "users"
 * changeColumn "FirstName" on table "users"
 * changeColumn "FirstName" on table "users"
 *
 **/

var info = {
    "revision": 2,
    "name": "initial_migration",
    "created": "2020-07-01T22:25:12.139Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "removeColumn",
        params: ["users", "userId"]
    },
    {
        fn: "removeColumn",
        params: ["users", "LAstNAme"]
    },
    {
        fn: "removeColumn",
        params: ["users", "SignUpDate"]
    },
    {
        fn: "addColumn",
        params: [
            "users",
            "UserId",
            {
                "type": Sequelize.INTEGER,
                "field": "UserId",
                "allowNull": false,
                "primaryKey": true,
                "autoIncrement": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "users",
            "LastName",
            {
                "type": Sequelize.STRING,
                "field": "LastName"
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "users",
            "Username",
            {
                "type": Sequelize.STRING,
                "field": "Username",
                "unique": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "users",
            "Password",
            {
                "type": Sequelize.STRING,
                "field": "Password"
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "users",
            "Email",
            {
                "type": Sequelize.STRING,
                "field": "Email",
                "unique": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "users",
            "Admin",
            {
                "type": Sequelize.BOOLEAN,
                "field": "Admin",
                "default": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "users",
            "FirstName",
            {
                "type": Sequelize.STRING,
                "field": "FirstName"
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "users",
            "FirstName",
            {
                "type": Sequelize.STRING,
                "field": "FirstName"
            }
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
