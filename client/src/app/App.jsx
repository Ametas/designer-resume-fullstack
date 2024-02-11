import './App.scss'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import ResumePage from '../pages/Resume'
import OrderPage from '../pages/Order'
import Admin from './../pages/Admin/Admin';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ResumePage />} />
                <Route path="/order" element={<OrderPage />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </Router>
    )
}

export default App
