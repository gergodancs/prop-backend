import express = require('express');
import bodyParser = require('body-parser');
import cors = require('cors');
import * as path from "node:path";
import {pool} from "./db";



const app = express();
app.use(bodyParser.json());
app.use(cors());

const authRoutes = require('./routes/auth');
import flatRoutes = require('./routes/flat');

app.use('/auth', authRoutes);
app.use('/flats', flatRoutes);
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/test-db', async (_req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.status(200).json({ success: true, time: result.rows[0].now });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});
