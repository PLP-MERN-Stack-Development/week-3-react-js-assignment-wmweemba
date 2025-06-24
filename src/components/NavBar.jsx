import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="bg-white dark:bg-gray-800 shadow mb-6">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
//         <div className="flex-shrink-0">
//           <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
//             Task Manager
//           </Link>
//         </div>
//         <ul className="flex space-x-6">
//           <li>
//             <NavLink
//               to="/"
//               end
//               className={({ isActive }) =>
//                 `text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded transition ${
//                   isActive ? 'bg-blue-100 dark:bg-blue-900 font-semibold' : ''
//                 }`
//               }
//             >
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/about"
//               className={({ isActive }) =>
//                 `text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded transition ${
//                   isActive ? 'bg-blue-100 dark:bg-blue-900 font-semibold' : ''
//                 }`
//               }
//             >
//               About
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/contact"
//               className={({ isActive }) =>
//                 `text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded transition ${
//                   isActive ? 'bg-blue-100 dark:bg-blue-900 font-semibold' : ''
//                 }`
//               }
//             >
//               Contact
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



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