"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
/** Autenticación y Registro **/
router.post('/auth/register', (req, res) => {
    console.log(req.body);
});
exports.default = router;
//# sourceMappingURL=router.js.map