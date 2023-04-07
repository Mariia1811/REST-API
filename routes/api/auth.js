const express = require("express");
const router = express.Router();
const validateBody = require("../../utils/validateBody");
const { registerSchema, loginSchema } = require("../../schemas/user");

router.post("/user/register", validateBody(registerSchema),  );

module.exports = router;

