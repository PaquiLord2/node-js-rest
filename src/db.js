import {createPool} from 'mysql2/promise';
import {DB_HOST,DB_USER,DB_PASSWORD,DB_PORT,DB_DATABASE} from './config.js'

export const pool =  createPool({
    host:DB_HOST,
    user:DB_USER,
    password:DB_PASSWORD,
    port:DB_PORT,
    database:DB_DATABASE
})
/*
import {createPool} from 'mysql2/promise';

export const pool =  createPool({
    host:'localhost',
    user:'root',
    password:'YJ3452Q1',
    port:3306,
    database:'comania'
})
npm install dotenv
luego crear en la raíz principal un archivo .env
luego crear en src un archivo llamado config.js
luego importar el .env en config.js

*/
