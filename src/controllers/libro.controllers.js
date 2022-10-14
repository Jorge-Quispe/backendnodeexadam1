import { pool } from "../database"

  export const listarlibroconnombrecat=async(req,res)=>{
  
    pool.query('select idlibro, titulo, autor, paginas, edicion, nombre from libro  join editorial on libro.ideditorial = editorial.ideditorial;', function (err, result) {
      try {
          return res.status(200).json(result);
      } catch (error) {
          return res.status(500).json('Error al mostrar libros' + e);
      }
    });
  };

  
export const agregarLibro = async (req,res)=>{
    const {titulo,autor,paginas, ideditorial} = req.body;
    pool.query('insert into libro(titulo, autor, paginas, edicion, ideditorial) values (?,?,?,"aea",?)',[titulo,autor,paginas, ideditorial], function(err, result) {
    try {
      return res.status(200).json(
        `El producto ${ titulo } se ha agregado correctamente...!` //alt 96
    );
    } catch (e) {
        return res.status(500).json('Error al insertar el libro');
    }
  });
  };
  export const readAllLibro=async(req,res)=>{
  
    pool.query('select * from libro', function (err, result) {
      try {
          return res.status(200).json(result);
      } catch (error) {
          return res.status(500).json('Error al mostrar libros' + e);
      }
    });
  };
  
export const deleteLibro = async (req,res)=>{
    const id = parseInt(req.params.id);
    pool.query('delete from libro where idlibro = ?;',[id], function(err, result) {
    try {
        return res.status(200).json(result);
    } catch (e) {
        return res.status(500).json('Error al eliminar el libro');
    }
  });
  };




  export const editarLibro = async (req,res)=>{
    const id = parseInt(req.params.id);
    const {titulo,autor,paginas,ideditorial} = req.body;
  
    pool.query('update libro set titulo = ?, autor = ?, paginas = ? , ideditorial = ?  where idlibro =?',[titulo,autor,paginas,ideditorial,id], function(err, result) {
    try {
      return res.status(200).json(
        `El producto con id  ${ id } se ha editado correctamente...!` //alt 96
    );
    } catch (e) {
        return res.status(500).json('Error al insertar la Escuela');
    }
  });
  };
  
  
export const getlibroid = async (req,res)=>{
    const id = parseInt(req.params.id);
    pool.query('select * from libros where idlibro = ?;',[id], function(err, result) {
    try {
        return res.status(200).json(result);
    } catch (e) {
        return res.status(500).json('Error al mostrar el producto');
    }
  });
  };
  export const readAllEditorial=async(req,res)=>{
  
    pool.query('select * from editorial;', function (err, result) {
      try {
          return res.status(200).json(result);
      } catch (error) {
          return res.status(500).json('Error al mostrar edittorial' + e);
      }
    });
  };