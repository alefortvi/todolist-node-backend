import {Schema, model, Document} from 'mongoose';

const schema = new Schema({
    state: String,
    description: String,
    imagePath: String
});

interface IJob extends Document{
    state: string;
    description: string;
    imagePath: string;
}


export default model<IJob>('Job',schema);
