import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useScrollHeader } from '../../../hooks/useScrollHeader';
import { useAuth } from '../../../context/AuthContext';
import './Header.scss';

const Header = () => {
  const isScrolled = useScrollHeader(50);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header__content">
        <Link to="/" className="header__logo" style={{ textDecoration: 'none' }}>XT<span>PC</span></Link>
        <nav className="header__nav">
          <Link to="/">Trang chủ</Link>
          <Link to="/build-pc">Build PC</Link>
          <Link to="/linh-kien-pc">Linh kiện</Link>
          <Link to="/gaming">Gaming PC</Link>
          <Link to="/lien-he">Liên hệ</Link>
        </nav>
        <div className="header__actions">
          {user ? (
            <>
              <button className="btn-login" onClick={() => navigate('/profile')}>{user.username || 'Profile'}</button>
              <button className="btn-register" onClick={() => { logout(); navigate('/'); }}>Logout</button>
            </>
          ) : (
            <>
              <button className="btn-login" onClick={() => navigate('/login')}>Đăng nhập</button>
              <button className="btn-register" onClick={() => navigate('/register')}>Đăng ký</button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
