const express = require("express");
const app = express();
const helmet = require("helmet");
app.use(helmet());
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server started on port ${port}`));