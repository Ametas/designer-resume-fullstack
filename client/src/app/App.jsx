import './App.scss'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import ResumePage from '../pages/Resume'
import OrderPage from '../pages/Order'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ResumePage />} />
                <Route path="/order" element={<OrderPage />} />
            </Routes>
        </Router>
    )
}

export default App
