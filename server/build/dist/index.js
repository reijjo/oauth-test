"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
app.get("/", function (req, res) {
    res.send("hello world");
});
app.listen(3001, function () {
    console.log("Server Started at port 3001");
});
//# sourceMappingURL=index.js.map