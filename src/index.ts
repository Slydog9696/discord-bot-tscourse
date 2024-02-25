// import node from 'node';
// import { createRequire } from 'module';
import express from 'express';
import { createRequire } from 'node:module';
import multer from 'multer';
const customRequire = createRequire(__filename);
// const express = customRequire("express");
const fileUpload = customRequire("express-fileupload");
const pdfParse = customRequire("pdf-parse");
const cors = customRequire("cors");
const path = customRequire("path");
const fs = customRequire("fs");
const app = express();
const port = 3000;


const upload = multer({ dest: 'uploads/' });

app.post("/extract-text", upload.single('pdfFile'), (req: express.Request, res: express.Response) => {
    if (!req.file) {
        res.status(400);
        res.end();
    }

    pdfParse(req.file?.path).then((result: any) => {
        res.send(result.text);
    });
});

app.listen(3000);