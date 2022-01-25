import express from 'express';
import download from 'download';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
// import { pinFileToIPFS } from "../pinata"
import pinataSDK from '@pinata/sdk';
dotenv.config();
const pinata = pinataSDK(`e96ee04dc5db6749ab42`, `777c2b29574ff9a6a9ec605594eb6270b45ea364a0e96919662ca076bd369f78`);
const router = express.Router();
// import multer from "multer";
// import { PythonShell } from "python-shell";

// const dirPath = path.join(process.cwd(), "/src/python/script1.py");
// import fileController from "../controllers/file";

// let storageProperties = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, "uploads/");
//   },
//   filename(req, file, cb) {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, file.fieldname + "-" + uniqueSuffix + ".docx");
//   },
// });

// let upload = multer({ storage: storageProperties });

router.post('/uploadnft', async (req, res) => {
  try {
    // Url of the image
    const file = req.body.url;

    const url = new URL(file);

    const fileName = path.basename(url.pathname);
    // Path at which image will get downloaded
    const filePath = `${__dirname}/files`;

    download(file, filePath).then(async (r) => {
      console.log('Download Completed', r);
      // const fileStream = fs.createReadStream(`${filePath}/${fileName}`);
      // const resp = { filePath, fileName };

      const readableStreamForFile = fs.createReadStream(`${filePath}/${fileName}`);

      const options = {
        pinataMetadata: {
          name: fileName,
          keyvalues: {
            test: 'jdjdj',
          },
        },
        pinataOptions: {
          cidVersion: 0,
        },
      };
      pinata
        .pinFileToIPFS(readableStreamForFile, options as any)
        .then((result) => {
          // handle results here
          console.log(`pinata response >> ${result}`);
          res.status(200).send({ status: 200, data: result, erorr: null });
        })
        .catch((err) => {
          // handle error here
          console.log(`pinata error >> ${err}`, JSON.stringify(err));
          res.status(400).send({ status: 400, data: null, error: err.message });
        });
    });
  } catch (error) {
    res.status(400).send({ status: 400, data: null, error: error.message });
  }
});

/**
 * uploadfile api - uploads the files as base64 .
 */

// router.post("/uploadfile", upload.single("file"), async (req, res) => {
//   try {
//     const filePath = path.join(process.cwd(), req.file.path);
//     let options = {
//       args: [filePath],
//     };

//     PythonShell.run(dirPath, options, async (err, results) => {
//       if (err) {
//         throw err;
//       } else {
//         let data = {
//           fileName: req.file.originalname,
//           path: req.file.path,
//           fileData: results[0],
//         };
//         let fileData = await fileController.saveFile(data);
//         res.status(200).send({ status: 200, data: fileData, erorr: null });
//       }
//     });
//   } catch (error) {
//     res.status(400).send({ status: 400, data: null, error: error.message });
//   }
// });

// router.get("/getData/:_id", async (req, res) => {
//   try {
//     let { _id }: any = req.params;

//     let fileData = await fileController.getFile(_id);
//     res.status(200).send({ status: 200, data: fileData, erorr: null });
//   } catch (error) {
//     res.status(400).send({ status: 400, data: null, error: error.message });
//   }
// });
export default router;
