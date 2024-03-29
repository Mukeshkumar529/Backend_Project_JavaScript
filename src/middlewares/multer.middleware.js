import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage: storage });

// const multer = require('multer');

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     // Specify the destination folder for uploaded files
//     cb(null, './public/temp');
//   },
//   filename: function (req, file, cb) {
//     // Specify how the file should be named
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

/*import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    // cb(null, file.fieldname + "-" + uniqueSuffix);

    cb(null, file.originalname);
  },
});

export const upload = multer({
  storage,
});
*/
