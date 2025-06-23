import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import TaskManager from './components/TaskManager';
import ApiData from './components/ApiData';

function App() {
  const [count, setCount] = useState(0);

  return (
   
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <header className="bg-white dark:bg-gray-800 shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold">PLP Task Manager</h1>
          </div>
        </header>

        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          {/* Example: You can keep your counter, TaskManager, and ApiData on the Home page or as separate components */}
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6 mt-8">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center gap-4 my-4">
                <Button
                  onClick={() => setCount((count) => count - 1)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                >
                  -
                </Button>
                <span className="text-xl font-bold">{count}</span>
                <Button
                  onClick={() => setCount((count) => count + 1)}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                >
                  +
                </Button>
              </div>
              <div className="text-gray-500 dark:text-gray-400 mt-4">
                <TaskManager />
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">API Data</h2>
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