import express from 'express';
import path, { dirname, join } from 'path';
import { fileURLToPath } from 'url'; 
import cors from 'cors';
import bodyParser from 'body-parser'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express(); 
app.use(cors());
app.use(bodyParser.json()); 

const root = join(__dirname, 'dist'); 
app.use(express.static(root));

app.use('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(process.env.PORT || 3001, () => {
  console.log('server started');
});