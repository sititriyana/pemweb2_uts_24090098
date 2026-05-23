import { Github, Instagram, Linkedin, Mail, MapPin, Phone, BookOpen, Code2, GraduationCap } from 'lucide-react';

const BiodataPage = () => {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1 style={{ color: '#800020' }}>Biodata Mahasiswa</h1>
          <p>Profil pembuat website</p>
        </div>
      </div>

      <div className="biodata-container">
        <div
          className="biodata-card profile-card"
          style={{
            borderTop: '4px solid #800020',
            background: '#fff7f8',
          }}
        >
          <div
            className="profile-avatar-lg"
            style={{
              background: '#800020',
              color: 'white',
            }}
          >
            <span>S</span>
          </div>

          <h2 className="profile-name" style={{ color: '#5c0017' }}>
            Siti Triyana
          </h2>

          <p className="profile-nim" style={{ color: '#800020' }}>
            NIM: 24090098
          </p>

          <p className="profile-prodi">D-4 Teknik Informatika</p>

          <p className="profile-kampus">
            Universitas Harkat Negeri
          </p>

          <div className="profile-contacts">
            <a
              href="mailto:sititriyana@example.com"
              className="contact-chip"
              style={{
                borderColor: '#f3c5d0',
                background: '#fff0f3',
                color: '#800020',
              }}
            >
              <Mail size={14} /> sititriyana@example.com
            </a>

            <span
              className="contact-chip"
              style={{
                borderColor: '#f3c5d0',
                background: '#fff0f3',
                color: '#800020',
              }}
            >
              <MapPin size={14} /> Tegal, Jawa Tengah
            </span>

            <span
              className="contact-chip"
              style={{
                borderColor: '#f3c5d0',
                background: '#fff0f3',
                color: '#800020',
              }}
            >
              <Phone size={14} /> 08xx-xxxx-xxxx
            </span>
          </div>

          <div className="social-links">
            <a
              href="#"
              className="social-btn github"
              style={{
                borderColor: '#f3c5d0',
                color: '#800020',
                background: '#fff0f3',
              }}
            >
              <Github size={18} />
            </a>

            <a
              href="#"
              className="social-btn linkedin"
              style={{
                borderColor: '#f3c5d0',
                color: '#800020',
                background: '#fff0f3',
              }}
            >
              <Linkedin size={18} />
            </a>

            <a
              href="#"
              className="social-btn instagram"
              style={{
                borderColor: '#f3c5d0',
                color: '#800020',
                background: '#fff0f3',
              }}
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div className="biodata-details">
          <div
            className="detail-card"
            style={{
              borderTop: '4px solid #800020',
              background: '#fffafb',
            }}
          >
            <div
              className="detail-header"
              style={{ color: '#800020' }}
            >
              <GraduationCap size={20} />
              <h3>Informasi Akademik</h3>
            </div>

            <div className="detail-grid">
              <div className="detail-item">
                <span>Nama Lengkap</span>
                <strong>Siti Triyana</strong>
              </div>

              <div className="detail-item">
                <span>NIM</span>
                <strong>24090098</strong>
              </div>

              <div className="detail-item">
                <span>Program Studi</span>
                <strong>D-4 Teknik Informatika</strong>
              </div>

              <div className="detail-item">
                <span>Fakultas</span>
                <strong>Sekolah Vokasi</strong>
              </div>

              <div className="detail-item">
                <span>Angkatan</span>
                <strong>2024</strong>
              </div>

              <div className="detail-item">
                <span>Status</span>
                <strong>Aktif</strong>
              </div>

              <div className="detail-item">
                <span>Kampus</span>
                <strong>
                  Kampus Mataram – Jalan Mataram No.9, Kota Tegal
                </strong>
              </div>
            </div>
          </div>

          <div
            className="detail-card"
            style={{
              borderTop: '4px solid #800020',
              background: '#fffafb',
            }}
          >
            <div
              className="detail-header"
              style={{ color: '#800020' }}
            >
              <Code2 size={20} />
              <h3>Teknologi yang Digunakan</h3>
            </div>

            <div className="tech-stack">
              {[
                { name: 'React', sub: 'TypeScript', color: '#800020' },
                { name: 'Express', sub: 'TypeScript', color: '#9f1239' },
                { name: 'Prisma ORM', sub: 'MySQL', color: '#5c0017' },
                { name: 'Zustand', sub: 'State Management', color: '#be123c' },
                { name: 'Vite', sub: 'Build Tool', color: '#881337' },
                { name: 'JWT Auth', sub: 'Authentication', color: '#7f1d1d' },
              ].map(({ name, sub, color }) => (
                <div
                  key={name}
                  className="tech-item"
                  style={{
                    borderLeft: `3px solid ${color}`,
                    background: '#fff7f8',
                  }}
                >
                  <strong style={{ color }}>{name}</strong>
                  <span>{sub}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="detail-card"
            style={{
              borderTop: '4px solid #800020',
              background: '#fffafb',
            }}
          >
            <div
              className="detail-header"
              style={{ color: '#800020' }}
            >
              <BookOpen size={20} />
              <h3>Tentang Proyek</h3>
            </div>

            <p className="about-text">
              Event Management System adalah aplikasi web full-stack yang dibangun
              sebagai tugas mata kuliah Pemrograman Web. Aplikasi ini digunakan
              untuk mengelola event kampus secara digital mulai dari kategori,
              pembicara, hingga detail event.
            </p>

            <p className="about-text">
              Proyek ini menggunakan React TypeScript + Vite pada frontend,
              Express TypeScript pada backend, Prisma ORM dengan database MySQL,
              serta JWT Authentication untuk sistem login.
            </p>

            <div
              className="repo-link"
              style={{
                background: '#fff0f3',
                borderColor: '#f3c5d0',
              }}
            >
              <Github size={16} color="#800020" />

              <a
                href="https://github.com/username/event-management"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#800020' }}
              >
                github.com/username/event-management
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiodataPage;