import {pool} from '../db.js'
export const getEmpleados = async  (req,res)=>{
    try{
    const [filas] = await pool.query('SELECT * from empleado')
    console.log(filas)
  
    res.json(filas)
}
catch(error){
    return res.status(500).json({mensaje:"algo salió mal"})
}
}
export const createEmpleados = async (req,res)=>{
    try{
 console.log(req.body)
const {nombre,salario} = req.body
 const [filas] = await pool.query('INSERT INTO empleado (nombre,salario) VALUES (?, ?)', [nombre,salario])
 res.send({
     id:filas.insertId,
     nombre,
     salario
 })
}
catch(error){
    return res.status(500).json({mensaje:"algo salió mal"})
}
}
export const getEmpleado = async (req,res)=>{
    try{
 console.log(req.params)
 const [filas] = await pool.query('select * from empleado where id=?',[req.params.id])
 
 if(filas.length<=0){
    return res.status(404).json({
        mensaje:"El usuario no ha podido ser encontrado"
    })
 }
 res.json(filas[0])
   }
   catch(error){
    return res.status(500).json({mensaje:"algo salió mal"})
}
}
export const deleteEmpleados = async (req,res)=>{
    try{
   const [filas] = await pool.query('delete from empleado where id=?',[req.params.id])
   console.log(filas.affectedRows);
   if(filas.affectedRows){
    return res.sendStatus(204)}
   res.status(404).json({
    "mensaje":"no existe el usuario"})
    }
    catch(error){
        return res.status(500).json({mensaje:"algo salió mal"})
    }
}

export const putEmpleados = async (req,res)=>{
    try{
        
    const {id} = req.params //
    const {nombre,salario} = req.body
    const [resultado] = await pool.query('update empleado set nombre= IFNULL(?,nombre),salario= IFNULL(?,salario) where id=?',[nombre,salario,id])
    if (resultado.affectedRows ===0){
    return res.status(404).json({mensaje:"no existe"})
}

const [rows]  =  await pool.query('select * from empleado where id=?',[id])  
res.status(202).json(rows[0])
}catch(error){
    return res.status(500).json({mensaje:"algo salió mal"})
}
}