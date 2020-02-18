import { connection } from 'mongoose'
import State from "../models/state";
import Job from "../models/job";


export async function createStatusDB() {

        connection.db.collection("states", async function(err, collection){
            collection.find({}).toArray(async function(err, data){
                if(data.length < 1){
                    let newState =
                        {
                            cod: 1,
                            state: "sin hacer"
                        };
                    let state = new State(newState);
                    await state.save();
                    newState =
                        {
                            cod: 2,
                            state: "hecho"
                        };
                    state = new State(newState);
                    await state.save();
                    newState =
                        {
                            cod: 3,
                            state: "demorado"
                        };

                    state = new State(newState);
                    await state.save();


                }
            })
        });
}
