const express = require('express');
const router = express.Router();
const { getBootcamps, createBootcamp, getaBootcamp ,updateBootcamp,deleteBootcamp} = require('../controllers/bootcamp')

router.route('/').get(getBootcamps).post(createBootcamp);
router.route('/:id').get(getaBootcamp).put(updateBootcamp).delete(deleteBootcamp);

module.exports=router;
