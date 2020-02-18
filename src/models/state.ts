import {Schema, model, Document} from 'mongoose';

const schema = new Schema({
    cod : Number,
    state: String,
});

interface IState extends Document{
    cod: number;
    state: string;
}


export default model<IState>('state',schema);
