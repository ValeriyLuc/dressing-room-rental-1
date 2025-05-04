
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Index from "@/pages/Index"
import Catalog from "@/pages/Catalog"
import Services from "@/pages/Services"
import Projects from "@/pages/Projects"
import About from "@/pages/About"
import Contacts from "@/pages/Contacts"
import NotFound from "@/pages/NotFound"
import CategoryDetail from "@/pages/CategoryDetail"
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:categoryId" element={<CategoryDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
