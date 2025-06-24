import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-[var(--color-background)] text-[var(--color-text)] p-4">
      <div className="flex space-x-4">
        <span className="font-bold">Task Manager</span>
        <a href="/" className="text-[var(--color-primary)] hover:underline">Home</a>
        <a href="/about" className="text-[var(--color-primary)] hover:underline">About</a>
        <a href="/contact" className="text-[var(--color-primary)] hover:underline">Contact</a>
      </div>
    </nav>
  );
}
export default Navbar;
