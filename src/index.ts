// import node from 'node';
// import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const express = require("express");
const fileUpload = require("express-fileupload");
const pdfParse = require("pdf-parse");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 3000;
import express from 'express';

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.post("/extract-text", (req: express.Request, res: express.Response) => {
    if (!req.files && !req.files.pdfFile) {
        res.status(400);
        res.end();
    }

    pdfParse(req.files.pdfFile).then((result: any) => {
        res.send(result.text);
    });
});

app.listen(3000);