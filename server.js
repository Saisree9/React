import express from "express";
let app = express();

const port = 2000;
let server = app.listen(port);
export default server;
console.log("listening on port" + port);