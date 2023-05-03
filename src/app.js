import express from 'express';

import empleadosRoutes from './routes/empleado.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

//aquí se usa el valor json para recibir e interpretar los datos
app.use(express.json())

//termina

app.use(indexRoutes)
app.use('/api',empleadosRoutes)

//middleware
app.use((req,res,next)=>{
    res.status(404).json({
        mensaje:"la página no ha podido ser encontrada"
    })
})
//fin del middleware

export default app;