const {Router} = require('express');
const {
  createVideos,
  deletedVideo
} = require('../controllers/videos.controllers');
const router = Router();

router.post('/videos', createVideos);
router.delete('/videos/:id', deletedVideo);

module.exports = router;