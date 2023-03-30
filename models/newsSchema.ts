import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

interface INews {
    hat: string,
    title: string,
    text: string,
    autor: string,
    img: string,
    publishDate: string,
    link: string,
    active: string
}

const newsSchema = new Schema<INews>({
    hat:{type: String},
    title:{type: String},
    text:{type: String},
    autor:{type: String},
    img:{type: String},
    publishDate:{type: String},
    link:{type: String},
    active:{type: String},

});

export default newsSchema;