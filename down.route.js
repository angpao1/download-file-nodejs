const express = require('express')
const router = express.Router()

router.get('/:file', function (req, res, next) {
    var filePath = "file"; // Or format the path using the `id` rest param
    var fileName = "EXTOSOFT_Timesheet_1101_July_2020.xlsx"; // The default name the browser will use
    res.download(filePath + "/" + fileName, fileName);    
});

module.exports = router