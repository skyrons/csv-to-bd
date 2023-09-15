import { BrowserRouter, Route, Routes } from 'react-router-dom'

import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ProductDetail from './pages/ProductDetails.tsx'

import './services/firebase'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/ProductDetails" element={<ProductDetail/>} />
    </Routes>
  </BrowserRouter>
  
)
