import app from './app';
import {startDBConnection} from './database';
import {createStatusDB} from './services/createStatus';


async function main(){
    await startDBConnection();
    await createStatusDB();
    await app.listen(app.get('port'));
    console.log("escuchando en puerto", app.get('port'));
}

main().then(v=> console.log("iniciado el main"));

