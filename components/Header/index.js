import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const [user, setUser] = useState({});
  useEffect(() => {
      setUser(JSON.parse(localStorage.getItem('userData')));
  }, []);

  if (!user || Object.keys(user).length === 0) return null;

  const handleClick = () => {
    localStorage.setItem('isAuth', 'false');
    localStorage.setItem('userData', '{}');
    router.push('/login');
  };

  return (
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <input className="form-control form-control-dark w-100 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search" />
      <div className="navbar-nav">
        <div className="nav-item text-nowrap">
          <p className="mr-2 mb-5 lg:mb-0">Hello, {user.name}</p>
          <a className="nav-link px-3" href="#" onClick={handleClick}>Sign out</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
