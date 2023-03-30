const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/contacts");
const validateBody = require("../../utils/validateBody");
const addContactsSchema = require("../../schemas/books");


router.get("/", ctrl.getAll);

router.get("/:id", ctrl.getById);

router.post("/",  validateBody(addContactsSchema), ctrl.add);

router.delete("/:id", ctrl.deleteById);

router.put("/:id", validateBody(addContactsSchema), ctrl.updateById);

module.exports = router;
