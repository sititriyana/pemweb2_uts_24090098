import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

const allowedOrigins = [
  'http://localhost:5173',
  'https://uts-pemweb2-24090098.vercel.app',
  process.env.FRONTEND_URL
].filter(Boolean);

// MENGAKTIFKAN CORS
// MENGAKTIFKAN CORS (Cukup satu blok ini saja)
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://uts-pemweb2-24090098.vercel.app'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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