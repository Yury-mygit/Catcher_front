import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowLogin(false);
  };

  const handleRegisterClick = () => {
    alert('Registration');
  };

  const handleWidgetClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

   const location = useLocation();

  const getNavLinkClass = (path: string) => {
    return location.pathname === path ? "text-white hover:text-gray-300 underline" : "text-white hover:text-gray-300";
  };

  return (
    <header className="p-5 bg-blue-500 flex justify-between items-center">
      <NavLink to="/home" className="text-white hover:text-gray-300">Tester</NavLink>
      <nav>
        <ul className="flex space-x-4">
          <li><NavLink to="/home" className={getNavLinkClass("/home")}>Home</NavLink></li>
          <li><NavLink to="/sender" className={getNavLinkClass("/sender")}>Sender</NavLink></li>
          <li><NavLink to="/automation" className={getNavLinkClass("/automation")}>Automation test</NavLink></li>
          <li><NavLink to="/docd" className={getNavLinkClass("/docd")}>Documentation</NavLink></li>
        </ul>
      </nav>
      <button className="text-white hover:text-gray-300" onClick={handleLoginClick}>Log in</button>
      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={handleCloseClick}>
          <div className="bg-white p-4 rounded shadow-lg w-64" onClick={handleWidgetClick}>
            <button className="float-right" onClick={handleCloseClick}>X</button>
            <form>
              <input type="text" placeholder="Username" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Log in</button>
            </form>
            <button onClick={handleRegisterClick}>Register</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
