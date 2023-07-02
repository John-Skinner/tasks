import express from 'express';

import sqlite3, {Database} from "sqlite3";

const app = express();
sqlite3.verbose();
let dbLoc='/home/ubuntu/serverRoot/tasks/tasks.db';
let macLoc='/Users/johnskinner/sql/tasks.db';
let db=new sqlite3.Database(dbLoc,(err) => {
    if (err) {
        console.error('error on db connect ' + err);
    }
    else {
        console.log(' db connection success');
    }
})
app.get('/table',(req,res)=> {
    res.send('table is received');
});
app.listen(80,() => {
    console.log('listening on 80');
})
