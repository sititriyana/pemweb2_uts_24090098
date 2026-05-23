import express from 'express';
import routes from './routes';

const app = express();

// 1. CORS yang diizinkan untuk Vercel Anda
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Izinkan SEMUA origin
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  
  // Tangani preflight request (OPTIONS)
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// 2. Body Parser (Cukup sekali saja)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3. Health check
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', message: 'API is running' });
});

// 4. Routes (Prefix /api)
app.use('/api', routes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;