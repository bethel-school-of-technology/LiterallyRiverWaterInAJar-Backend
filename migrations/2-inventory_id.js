'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "name" from table "inventory"
 * addColumn "id" to table "inventory"
 *
 **/

var info = {
    "revision": 2,
    "name": "inventory_id",
    "created": "2020-07-20T19:09:23.259Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "removeColumn",
        params: ["inventory", "name"]
    },
    {
        fn: "addColumn",
        params: [
            "inventory",
            "id",
            {
                "type": Sequelize.INTEGER,
                "field": "id",
                "primaryKey": true,
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
