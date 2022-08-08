import 'reflect-metadata'
import { app } from './../src/app/index'
import database from './config/database'

database.initialize().then(() => console.log('DB inicializada'))
app.listen(3030)
