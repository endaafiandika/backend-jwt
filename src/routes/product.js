const express = require("express")
const controller = require('../controller/product')
const validate = require ('../middleware/validate')
const cache = require ('../middleware/cache')
const upload = require('../middleware/upload')
const routes = express.Router()

routes.get("/", cache, controller.All)
routes.put("/", validate, controller.Edit)
routes.get("/search",controller.search)
routes.post("/", validate, upload.single("images"), controller.Add)
routes.delete("/", validate, controller.Delete)

module.exports = routes