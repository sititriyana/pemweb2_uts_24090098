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