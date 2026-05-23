import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

// 1. CORS yang diizinkan untuk Vercel Anda
app.use(cors({
  origin: 'https://pemweb2-uts-24090098.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));

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