import * as mongoose from 'mongoose';
import newsSchema from '../models/newsSchema';
import { model } from 'mongoose';


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

const News = model<INews>("news", newsSchema)

export default News;