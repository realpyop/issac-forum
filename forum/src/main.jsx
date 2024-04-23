import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import CreatePost from './pages/CreatePost.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<App />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
