'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "PostTitle" from table "posts"
 * addColumn "isMainProduct" to table "inventory"
 * addColumn "inCart" to table "inventory"
 * addColumn "numbers" to table "inventory"
 * addColumn "size" to table "inventory"
 * addColumn "id" to table "inventory"
 * changeColumn "description" on table "inventory"
 * changeColumn "name" on table "inventory"
 * changeColumn "name" on table "inventory"
 * changeColumn "name" on table "inventory"
 *
 **/

var info = {
    "revision": 3,
    "name": "initial_migration",
    "created": "2020-07-25T02:52:41.190Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "removeColumn",
        params: ["posts", "PostTitle"]
    },
    {
        fn: "addColumn",
        params: [
            "inventory",
            "isMainProduct",
            {
                "type": Sequelize.BOOLEAN,
                "field": "isMainProduct",
                "allowNull": false
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "inventory",
            "inCart",
            {
                "type": Sequelize.BOOLEAN,
                "field": "inCart",
                "allowNull": false
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "inventory",
            "numbers",
            {
                "type": Sequelize.INTEGER,
                "field": "numbers",
                "allowNull": false
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "inventory",
            "size",
            {
                "type": Sequelize.STRING(10),
                "field": "size",
                "allowNull": false
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "inventory",
            "id",
            {
                "type": Sequelize.INTEGER,
                "field": "id",
                "autoIncrement": true,
                "primaryKey": true,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "inventory",
            "description",
            {
                "type": Sequelize.STRING(45),
                "field": "description",
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "inventory",
            "name",
            {
                "type": Sequelize.STRING(45),
                "field": "name",
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "inventory",
            "name",
            {
                "type": Sequelize.STRING(45),
                "field": "name",
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "inventory",
            "name",
            {
                "type": Sequelize.STRING(45),
                "field": "name",
                "allowNull": false
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
