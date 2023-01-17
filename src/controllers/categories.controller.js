const CategoriesService = require('../services/categories.services');

const createCategorie = async(req, res) => {
  try {
    const categorie = req.body;
    const result = await CategoriesService.create(categorie);
    res.json(
      {
        message: 'creando categoria',
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
const deletedCategorie = async(req, res) => {
  try {
    const {id} = req.params;
    const result = await CategoriesService.deleted(id);
    res.json(
      {
        message: 'eliminando categoria ',
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

module.exports = {
  createCategorie,
  deletedCategorie
}
