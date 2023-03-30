"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const newsSchema = new mongoose_1.Schema({
    hat: { type: String },
    title: { type: String },
    text: { type: String },
    autor: { type: String },
    img: { type: String },
    publishDate: { type: String },
    link: { type: String },
    active: { type: String },
});
exports.default = newsSchema;
