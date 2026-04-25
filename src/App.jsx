import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'

// Pages
import HomePage from './features/home/index'
import ExperiencePage from './features/experience/index'
import ProjectsPage from './features/projects/index'
import SkillsPage from './features/skills/index'
import CodingPage from './features/codingProfiles/index'
import EducationPage from './features/education/index'
import ContactPage from './features/contact/index'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/coding" element={<CodingPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
