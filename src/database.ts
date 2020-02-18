import { connect } from 'mongoose'

export async function startDBConnection() {
    const db = await connect('mongodb://localhost/todo-list',{
        useNewUrlParser: true,
        useFindAndModify : false
    });
    console.log('Database is connected');
}
