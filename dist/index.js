"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express') // CJS Common JS
const express_1 = __importDefault(require("express")); // ESM Ecmascript modules
const app = (0, express_1.default)();
// Routing
app.get('/', (req, res) => {
    res.send('Hola Mundo en Express / TypeScript');
});
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log('Servidor Funcionanado en el puerto:', port);
});
//# sourceMappingURL=index.js.map