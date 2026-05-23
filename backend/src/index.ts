import express from 'express';
import cors from 'cors';

const app = express();

const allowedOrigins = [
  'http://localhost:5173',
  'https://uts-pemweb2-24090098.vercel.app',
  process.env.FRONTEND_URL
].filter(Boolean);

// MENGAKTIFKAN CORS
app.use(cors({
  origin: function (origin, callback) {
    // izinkan request tanpa origin (seperti dari mobile apps atau curl)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true // PENTING: Jika Anda menggunakan Session atau Cookies
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