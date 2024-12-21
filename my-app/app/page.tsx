import Header from './components/Header'
import Hero from './components/Hero'
import ResearchPublications from './components/ResearchPublications'
import Events from './components/Events'
import ProfessionalNetworking from './components/ProfessionalNetworking'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <ResearchPublications />
        <Events />
        <ProfessionalNetworking />
      </main>
      <Footer />
    </div>
  )
}

