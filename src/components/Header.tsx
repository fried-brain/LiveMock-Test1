import React from 'react';
import { GraduationCap } from 'lucide-react';

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <GraduationCap className="w-8 h-8 text-indigo-600" />
            <span className="text-2xl font-bold text-gray-800">LiveMock</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#" active>Dashboard</NavLink>
            <NavLink href="#">My Tests</NavLink>
            <NavLink href="#">Results</NavLink>
            <NavLink href="#">Settings</NavLink>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-800">
              Help
            </button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, children, active = false }) {
  return (
    <a
      href={href}
      className={`${
        active ? 'text-indigo-600' : 'text-gray-600'
      } hover:text-indigo-600 transition-colors font-medium`}
    >
      {children}
    </a>
  );
}

export default Header;