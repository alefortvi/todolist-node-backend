import {Schema, model, Document} from 'mongoose';

const schema = new Schema({
    state: Number,
    description: String,
    imagePath: String
});

interface IJob extends Document{
    state: number;
    description: string;
    imagePath: string;
}


export default model<IJob>('Job',schema);
