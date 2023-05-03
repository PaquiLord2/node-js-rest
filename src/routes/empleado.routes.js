import {Router} from 'express';
import {getEmpleado, deleteEmpleados, getEmpleados,createEmpleados,putEmpleados} from '../controllers/empleados.controllers.js'
const router = Router()

router.get('/empleados',getEmpleados)
router.get('/empleados/:id',getEmpleado)

router.post('/empleados',createEmpleados)

router.patch('/empleados/:id',putEmpleados)

router.delete('/empleados/:id',deleteEmpleados)

export default router