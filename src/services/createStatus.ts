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
                            state: "Sin hacer"
                        };
                    let state = new State(newState);
                    await state.save();
                    newState =
                        {
                            cod: 2,
                            state: "Finalizado"
                        };
                    state = new State(newState);
                    await state.save();
                    newState =
                        {
                            cod: 3,
                            state: "Postergado"
                        };

                    state = new State(newState);
                    await state.save();


                }
            })
        });
}
