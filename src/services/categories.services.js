const Categories = require('../models/categories.models')

class CategoriesServices {

  static async create(categiorie){
    try {
      const result = await Categories.create(categiorie);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async deleted(id) {
    try {
      const result = await Categories.destroy({
        where: {id}
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CategoriesServices;