import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
   <header className="p-5 bg-blue-500">
        <nav>
            <ul className="flex space-x-4">
                <li><NavLink to="/home" className="text-white" activeClassName="underline">Home</NavLink></li>
                <li><NavLink to="/sender" className="text-white" activeClassName="underline">Sender</NavLink></li>
                <li><NavLink to="/docd" className="text-white" activeClassName="underline">Documentation</NavLink></li>
            </ul>
        </nav>
    </header>
);

export default Header