"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newsSchema_1 = require("../models/newsSchema");
const mongoose_1 = require("mongoose");
const News = (0, mongoose_1.model)("news", newsSchema_1.default);
exports.default = News;
