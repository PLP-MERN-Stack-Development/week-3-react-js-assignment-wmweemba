# PLP Task Manager – React + Vite

A modern, responsive task management application built with React, Vite, and Tailwind CSS. This app demonstrates component-based architecture, state management with hooks, persistent storage, API integration, and theme switching (light/dark mode).

---

## 🚀 Features

- **Add, complete, and delete tasks** with persistent local storage
- **Filter tasks** (All, Active, Completed)
- **Counter** 
- **API integration** with [JSONPlaceholder](https://jsonplaceholder.typicode.com/) (fetch, search, and paginate posts)
- **Responsive design** using Tailwind CSS
- **Light/Dark theme toggle**
- **Modern navigation** with React Router

---

## 🛠 Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)

---

## 📁 Folder Structure

```
src/
│
├── components/
│   ├── ApiData.jsx
│   ├── Button.jsx
│   ├── Footer.jsx
│   ├── NavBar.jsx
│   └── TaskManager.jsx
│   
├── pages/
│   ├── About.jsx
│   ├── Contact.jsx
│   └── Home.jsx
│
├── utils/
│   ├── api.js
│   └── useLocalStorage.js
│
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

---

## ⚡️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/plp-task-manager.git
   cd plp-task-manager
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

---

## 📝 Usage

- **Add Tasks:** Enter a task and click "Add Task".
- **Complete/Delete Tasks:** Use the checkbox or "Delete" button.
- **Filter Tasks:** Use the filter buttons (All, Active, Completed).
- **Counter:** Use the + and - buttons to increment/decrement.
- **API Section:** Browse, search, and paginate posts from JSONPlaceholder.
- **Theme Toggle:** Click the ☀️/🌙 button to switch between light and dark mode.

---

## 📄 License

This project is for educational purposes as part of the Power Learn Project (PLP) curriculum.

---

## 🙏 Acknowledgements

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for free fake API
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
