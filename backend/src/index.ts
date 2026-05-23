import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/index';

dotenv.config();

const app = express();

// Daftar domain yang diizinkan (Lokal & Vercel)
const allowedOrigins = [
  'http://localhost:5173',
  'https://uts-pemweb2-24090098.vercel.app',
  process.env.FRONTEND_URL
].filter(Boolean); // Menghapus nilai kosong jika ada

app.use(cors({
  origin: function (origin, callback) {
    // Izinkan jika tanpa origin (seperti Postman) atau jika origin terdaftar di allowedOrigins
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Blocked by CORS'));
    }
  },
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Event Management API is running' });
});

app.use('/api', routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;