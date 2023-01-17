const VideosServices = require('../services/videos.Services');

const createVideos = async(req, res) => {
  try {
    const video = req.body;
    const result = await VideosServices.create(video);
    res.json(
      {
        message: 'creando video',
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
const deletedVideo = async(req, res) => {
  try {
    const {id} = req.params;
    const result = await VideosServices.deleted(id);
    res.json(
      {
        message: 'eliminando video ',
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
  createVideos,
  deletedVideo
}