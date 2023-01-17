const UserServices = require('../services/users.services');


const getUserById = async(req, res) => {
  try {
    const {id} = req.params;
    const result = await UserServices.getById(id);
    res.json(
      {
        message: 'enviando users por su id',
        data: result,
      }
    );
  } catch (error) {
    res.status(400).json(
      {
      error: error.messages,
      datails : error.stack,
      }
    );
  }
}

const getUsersWithCourses = async(req, res) => {
  try {
    const {id} = req.params;
    const result = await UserServices.getUsersCourses(id);
    res.json(
      {
        message: 'enviando users con sus cursos',
        data: result,
      }
    );
  } catch (error) {
    res.status(400).json(
      {
      error: error.messages,
      datails : error.stack,
      }
    );
  }
}

const createUser = async(req, res) => {
  try {
    const user = req.body;
    console.log(user);
    const result = await UserServices.create(user);
    res.json(
      {
        message: 'creando usuario',
        data: result,
      }
    );
  } catch (error) {
    res.status(400).json(
      {
      error: error.messages,
      datails : error.stack,
      }
    );
  }
};

const updateUser = async(req, res) => {
  try {
    const {id} = req.params;
    const field = req.body;
    const result = await UserServices.update(id, field);
    res.json(
      {
        message: 'actualizando usuario',
        data: result,
      }
    );
  } catch (error) {
    res.status(400).json(
      {
      error: error.messages,
      datails : error.stack,
      }
    );
  }
}

module.exports ={
  getUserById,
  getUsersWithCourses,
  createUser,
  updateUser
}
