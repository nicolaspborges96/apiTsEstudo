"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class Database {
    constructor() {
        this.DB_URL = 'mongodb://root:12345@172.18.0.1:27017/portal';
    }
    createConnection() {
        mongoose.connect(this.DB_URL);
    }
}
exports.default = Database;
