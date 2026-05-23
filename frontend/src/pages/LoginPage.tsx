import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { Calendar, Eye, EyeOff, Lock, Hash } from 'lucide-react';
import toast from 'react-hot-toast';

const MAROON = '#6d0019';
const MAROON_LIGHT = '#fff0f3';
const MAROON_BORDER = '#f3c5d0';

const LoginPage = () => {
  const [nim, setNim] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  const { login, isLoading } = useAuthStore();

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await login(nim, password);

      toast.success('Login berhasil! Selamat datang.');

      navigate('/dashboard');
    } catch (err: unknown) {
      toast.error((err as Error).message || 'Login gagal');
    }
  };

  return (
    <div
      className="login-page"
      style={{
        background:
          'linear-gradient(135deg, #fff5f7 0%, #ffe8ee 100%)',
      }}
    >
      <div className="login-bg">
        <div className="bg-shape bg-shape-1" />
        <div className="bg-shape bg-shape-2" />
        <div className="bg-shape bg-shape-3" />
      </div>

      <div
        className="login-card"
        style={{
          borderTop: `5px solid ${MAROON}`,
          background: '#ffffff',
          boxShadow: '0 10px 30px rgba(109,0,25,0.12)',
        }}
      >
        <div className="login-header">
          <div
            className="login-logo"
            style={{
              background: MAROON,
              boxShadow: '0 4px 12px rgba(109,0,25,0.25)',
            }}
          >
            <Calendar size={32} />
          </div>

          <h1 style={{ color: MAROON }}>
            EventHub
          </h1>

          <p
            style={{
              color: '#7a7a7a',
            }}
          >
            Event Management System
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="login-form"
        >
          <div className="form-group">
            <label
              style={{
                color: MAROON,
                fontWeight: 600,
              }}
            >
              NIM
            </label>

            <div className="input-wrapper">
              <Hash
                size={16}
                className="input-icon"
                color={MAROON}
              />

              <input
                type="text"
                value={nim}
                onChange={(e) => setNim(e.target.value)}
                placeholder="Masukkan NIM Anda"
                required
                autoComplete="username"
                style={{
                  border: `1px solid ${MAROON_BORDER}`,
                  background: '#fffafb',
                }}
              />
            </div>
          </div>

          <div className="form-group">
            <label
              style={{
                color: MAROON,
                fontWeight: 600,
              }}
            >
              Password
            </label>

            <div className="input-wrapper">
              <Lock
                size={16}
                className="input-icon"
                color={MAROON}
              />

              <input
                type={showPass ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan Password"
                required
                autoComplete="current-password"
                style={{
                  border: `1px solid ${MAROON_BORDER}`,
                  background: '#fffafb',
                }}
              />

              <button
                type="button"
                className="toggle-pass"
                onClick={() => setShowPass(!showPass)}
                style={{
                  color: MAROON,
                }}
              >
                {showPass ? (
                  <EyeOff size={16} />
                ) : (
                  <Eye size={16} />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="btn-login"
            disabled={isLoading}
            style={{
              background: MAROON,
              border: 'none',
              boxShadow: '0 4px 12px rgba(109,0,25,0.2)',
            }}
          >
            {isLoading ? (
              <span className="loading-spinner" />
            ) : (
              'Masuk'
            )}
          </button>
        </form>

        <p
          className="login-hint"
          style={{
            background: MAROON_LIGHT,
            border: `1px solid ${MAROON_BORDER}`,
            color: MAROON,
          }}
        >
          Default: NIM <strong>24090098</strong> / Password{' '}
          <strong>24090098</strong>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;