import express from 'express';

import sqlite3, {Database, Statement} from "sqlite3";
import { open } from 'sqlite';
import cors from 'cors';
import bodyParser from 'body-parser';
import morganBody from 'morgan-body';

const app = express();
app.use(cors());
app.use(bodyParser.json());
morganBody(app);

sqlite3.verbose();
let dbLoc='/home/ubuntu/serverRoot/tasks/tasks.db';
let macLoc='/Users/johnskinner/sql/tasks.db';

async function execCmd(db:Database,cmd:string) {
    await db.exec(cmd);
}
(async () => {
    sqlite3.verbose();
   let sqlDb =  await open({
        filename:macLoc,
        driver:sqlite3.Database
    });

    app.post('/exec',async (req,res) => {
        let execCmd=req.body.cmd;
        console.log(JSON.stringify(req.body))
        console.log('received exec command:' + execCmd);
        try {
            await sqlDb.exec(execCmd);
        }
        catch (err) {
            res.send('error '+err);
        }

    });
   app.post('/reset', (req,res)=> {
       try {
           res.send('ok');
       }
       catch (error) {
           res.send('Error in reset');
       }
   })
    app.post('/get',async (req,res) => {
        let getCmd=req.body.cmd;
        console.log('get service');
        console.log(JSON.stringify(req.body,null,2));
        try {
            const result = await sqlDb.all(getCmd);
            console.log(JSON.stringify(result,null,2));
            console.log(`the result: ${result}`)
            console.dir(result);
            res.send(result);
        }
        catch (error) {
            res.send('Error:' + error);
        }


    })
    app.post('/run',async (req,res) => {
        let runCmd=req.body.cmd;
        console.log('run service');
        console.log(JSON.stringify(req.body,null,2));
        try {
            const result = await sqlDb.run(runCmd);
            console.log(JSON.stringify(result,null,2));
            res.send(result);
        }
        catch (error) {
            res.send('Error:' + error);
        }


    })
})()


app.listen(4312,() => {
    console.log('listening on 4312');
})
