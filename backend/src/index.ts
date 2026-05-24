import express from 'express';
import cors from 'cors'; // Pastikan sudah install 'npm install cors'
import routes from './routes'; 

const app = express();

// Konfigurasi CORS agar tidak diblokir
app.use(cors({
  origin: '*', // Izinkan semua akses dari frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Routes
app.use('/api', routes);

// 1. Konversi port ke Number agar TypeScript tidak error
const PORT: number = Number(process.env.PORT) || 5000;

// 2. Jalankan server dengan binding IP '0.0.0.0' agar bisa diakses di Railway
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running on port ${PORT}`);
});