const express = require('express')
const router = express.Router()
const { getEntries, createEntry, getLatest } = require('../controllers/entryController')

router.route('/').get(getEntries).post(createEntry)
router.route('/latest').get(getLatest)

module.exports = router