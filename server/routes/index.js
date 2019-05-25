var express = require('express');
var router = express.Router();

const aws = require('aws-sdk')
aws.config.update({ region: 'ap-northeast-2' })
const rekognition = new aws.Rekognition()

const axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/detectImage', async (req, res, next) => {
  const imageURL = req.query.imageURL
  const responseImage = await axios.get(
    imageURL,
    { responseType: 'arraybuffer' }
  )
  
  const params = {
    Image: {
      Bytes: new Buffer(responseImage.data, 'binary')
    }
  }
  rekognition.detectText(params, (err, data) => {
    if (err) {
      res.status(200).send(
        {
          status: 400,
          detectionResult: err
        }
      )
    } else {
      res.status(200).send(
        {
          status: 200,
          detectionResult: data
        }
      )
    }
  })
})

module.exports = router;
