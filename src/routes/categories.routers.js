const {Router} = require('express');
const {
  createCategorie,
  deletedCategorie
} = require('../controllers/categories.controller');

const router = Router();

router.post('/category', createCategorie);
router.delete('/category/:id', deletedCategorie);

module.exports = router;