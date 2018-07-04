import { Router, Request } from "express";
import { Response } from "express-serve-static-core";
let express = require("express");

const text = "This is the webpage text";
const obj = {
    message: text
};

// export function setupRoutes(): Router {
//     let router = express.Router();

//     router.get("/getText", (req: Request, res: Response) => {
//         console.log("Hit the getText endpoint");
//         res.status(200);
//         res.json(obj);
//     });

//     return router;

// }

module.exports = {

    setupRoutes(): Router {
        let router = express.Router();
    
        router.get("/getText", (req: Request, res: Response) => {
            console.log("Hit the getText endpoint");
            res.status(200);
            res.json(obj);
        });
    
        return router;
    
    }

}