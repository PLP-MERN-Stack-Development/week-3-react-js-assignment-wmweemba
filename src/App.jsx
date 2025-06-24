// import { useState, useEffect } from 'react';
// import './App.css';
// import Button from './components/Button';
// import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/NavBar';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Footer from './components/Footer';
// import TaskManager from './components/TaskManager';
// import ApiData from './components/ApiData';

// function App() {
//   const [count, setCount] = useState(0);
//   const [theme, setTheme] = useState('light');

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme') || 'light';
//     setTheme(savedTheme);
//     if (savedTheme === 'dark') {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, []);

//   const toggleTheme = () => {
//     if (theme === 'light') {
//       setTheme('dark');
//       document.documentElement.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       setTheme('light');
//       document.documentElement.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-900">
      

//       <div className="flex items-center justify-between">
//         <Navbar />
//             <button
//             onClick={toggleTheme}
//             className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           >
//             Light/Dark
//           </button>
//       </div>
//       <header className="bg-white shadow">
//         <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
//           <h1 className="text-3xl font-bold">PLP Task Manager</h1>
//         </div>
//       </header>

//       <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>

//         <div className="bg-white overflow-hidden shadow rounded-lg p-6 mt-8">
//           <div className="flex flex-col items-center justify-center">
//             <div className="flex items-center gap-4 my-4">
//               <Button
//                 onClick={() => setCount((count) => count - 1)}
//                 className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
//               >
//                 -
//               </Button>
//               <span className="text-xl font-bold">{count}</span>
//               <Button
//                 onClick={() => setCount((count) => count + 1)}
//                 className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
//               >
//                 +
//               </Button>
//             </div>
//             <div className="text-gray-500 mt-4">
//               <TaskManager />
//             </div>
//           </div>
//         </div>

//         <div className="mt-8 bg-white overflow-hidden shadow rounded-lg p-6">
//           <h2 className="text-2xl font-bold mb-4">API Data</h2>
//           <div>
//             <ApiData />
//           </div>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default App;



import { useState, useEffect } from 'react';
import './App.css';
import Button from './components/Button';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import TaskManager from './components/TaskManager';
import ApiData from './components/ApiData';

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className={`min-h-screen bg-[var(--color-background)] text-[var(--color-text)]`}>
      <div className={`flex items-center justify-between ${theme === 'dark' ? 'bg-[var(--color-primary)' : 'bg-[var(--color-primary)'}`}>
        <Navbar />
        <button
          onClick={toggleTheme}
          className="mt-4 px-4 py-2 bg-[var(--color-primary)] text-white rounded hover:bg-opacity-90"
        >
          ☀️/🌙
        </button>
      </div>
      <header className={`bg-[var(--color-background)] shadow ${theme === 'dark' ? 'shadow-gray-700' : 'shadow-gray-200'}`}>
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-[var(--color-text)]">PLP Task Manager</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <div className={`bg-[var(--color-background)] overflow-hidden shadow rounded-lg p-6 mt-8 ${theme === 'dark' ? 'shadow-gray-700' : 'shadow-gray-200'}`}>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-4 my-4">
              <Button
                onClick={() => setCount((count) => count - 1)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                -
              </Button>
              <span className="text-xl font-bold text-[var(--color-text)]">{count}</span>
              <Button
                onClick={() => setCount((count) => count + 1)}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                +
              </Button>
            </div>
            <div className="text-[var(--color-text)] mt-4">
              <TaskManager />
            </div>
          </div>
        </div>

        <div className={`mt-8 bg-[var(--color-background)] overflow-hidden shadow rounded-lg p-6 ${theme === 'dark' ? 'shadow-gray-700' : 'shadow-gray-200'}`}>
          <h2 className="text-2xl font-bold mb-4 text-[var(--color-text)]">API Data</h2>
          <div>
            <ApiData />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;