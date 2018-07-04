// import { setupRoutes } from "app/router";
let router = require("./app/router");

let express = require("express")();

const port = 4545;

express.use(router.setupRoutes());

express.listen(port, () => {
    console.log(`Listening on port ${port}`)
});