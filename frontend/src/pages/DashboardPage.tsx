import { useEffect, useState } from 'react';
import {
  Calendar,
  Tags,
  Mic2,
  TrendingUp,
} from 'lucide-react';

import api from '../lib/api';

interface Stats {
  events: number;
  categories: number;
  pembicara: number;
  upcoming: number;
}

const DashboardPage = () => {
  const [stats, setStats] = useState<Stats>({
    events: 0,
    categories: 0,
    pembicara: 0,
    upcoming: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [evRes, catRes, spkRes] =
          await Promise.all([
            api.get('/events'),
            api.get('/categories'),
            api.get('/pembicara'),
          ]);

        const upcoming = evRes.data.filter(
          (e: { status: string }) =>
            e.status === 'upcoming'
        ).length;

        setStats({
          events: evRes.data.length,
          categories: catRes.data.length,
          pembicara: spkRes.data.length,
          upcoming,
        });
      } catch {
        // silent
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const cards = [
    {
      label: 'Total Event',
      value: stats.events,
      icon: Calendar,
      color: '#800020',
      bg: '#fff0f3',
    },
    {
      label: 'Kategori',
      value: stats.categories,
      icon: Tags,
      color: '#9f1239',
      bg: '#ffe4eb',
    },
    {
      label: 'Pembicara',
      value: stats.pembicara,
      icon: Mic2,
      color: '#be123c',
      bg: '#ffe9ee',
    },
    {
      label: 'Upcoming',
      value: stats.upcoming,
      icon: TrendingUp,
      color: '#5c0017',
      bg: '#fff2f5',
    },
  ];

  return (
    <div className="page">
      <div
        className="page-header"
        style={{
          borderTop: '4px solid #800020',
          background: '#fff7f8',
        }}
      >
        <div>
          <h1 style={{ color: '#800020' }}>
            Dashboard
          </h1>

          <p>
            Selamat datang di Event Management
            System
          </p>
        </div>
      </div>

      {loading ? (
        <div className="loading-grid">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="skeleton-card"
            />
          ))}
        </div>
      ) : (
        <div className="stats-grid">
          {cards.map(
            ({
              label,
              value,
              icon: Icon,
              color,
              bg,
            }) => (
              <div
                key={label}
                className="stat-card"
                style={{
                  borderTop: `4px solid ${color}`,
                  background: '#fffafb',
                }}
              >
                <div
                  className="stat-icon"
                  style={{
                    background: bg,
                    color: color,
                  }}
                >
                  <Icon size={24} />
                </div>

                <div className="stat-info">
                  <span
                    className="stat-value"
                    style={{
                      color: color,
                    }}
                  >
                    {value}
                  </span>

                  <span className="stat-label">
                    {label}
                  </span>
                </div>
              </div>
            )
          )}
        </div>
      )}

      <div className="dashboard-info">
        <div
          className="info-card"
          style={{
            borderTop: '4px solid #800020',
            background: '#fffafb',
          }}
        >
          <h3 style={{ color: '#800020' }}>
            Tentang Sistem
          </h3>

          <p>
            Event Management System adalah
            aplikasi untuk mengelola berbagai
            event kampus, termasuk seminar,
            workshop, dan acara lainnya.
            Sistem ini memungkinkan pengelolaan
            kategori event, pembicara, dan
            detail event secara terpadu.
          </p>
        </div>

        <div
          className="info-card"
          style={{
            borderTop: '4px solid #800020',
            background: '#fffafb',
          }}
        >
          <h3 style={{ color: '#800020' }}>
            Teknologi
          </h3>

          <ul className="tech-list">
            <li>
              <span
                className="tech-badge react"
                style={{
                  background: '#fff0f3',
                  color: '#800020',
                }}
              >
                React + TypeScript
              </span>
            </li>

            <li>
              <span
                className="tech-badge express"
                style={{
                  background: '#ffe5eb',
                  color: '#9f1239',
                }}
              >
                Express + TypeScript
              </span>
            </li>

            <li>
              <span
                className="tech-badge prisma"
                style={{
                  background: '#fff2f5',
                  color: '#5c0017',
                  border: '1px solid #f3c5d0',
                }}
              >
                Prisma ORM
              </span>
            </li>

            <li>
              <span
                className="tech-badge zustand"
                style={{
                  background: '#ffe9ee',
                  color: '#be123c',
                }}
              >
                Zustand
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;