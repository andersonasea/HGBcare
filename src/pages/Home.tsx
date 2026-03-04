import { Link } from 'react-router-dom'
import { ArrowRight, Star, Clock, MapPin, Utensils } from 'lucide-react'
import { SAMPLE_MENU } from '../services/menuService'
import type { Testimonial } from '../types'

const popularItems = SAMPLE_MENU.filter((item) => item.popular).slice(0, 4)

const testimonials: Testimonial[] = [
  { name: 'Marie L.', text: 'J\'ai appris à réagir face à une crise sans être médecin. Formation claire et rassurante.', rating: 5 },
  { name: 'Thomas D.', text: 'En tant que médecin, les formations avancées HBG Care m\'ont vraiment fait progresser.', rating: 5 },
  { name: 'Sophie M.', text: 'Le module premiers secours grand public est accessible et bien expliqué. Je recommande.', rating: 4 },
]

export default function Home() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-dark to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCA0LTRzNCAxLjkgNCA0LTIgNC00IDQtNC0yLTQtNCIvPjwvZz48L2c+PC9zdmc+')] bg-repeat" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              HBB CARE :
              </h1>
              <span className="text-gray-200 text-2xl italic"> Soins accessibles au-delà des frontières de la santé </span>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Une entreprise de santé innovante qui s’engage à rendre les Soins accessibles à tous..
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/menu"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                Voir Nos Formations <ArrowRight size={18} />
              </Link>
              <Link
                to="/reservation"
                className="border-2 border-white text-white hover:bg-white hover:text-dark px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Réserver une Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Utensils className="text-primary" size={28} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Tourisme Medicale</h3>
              <section className="text-gray-500"> 
                <ul>
                  <li>Analyse medicale et coordination Hospitalire</li>
                  <li>Organization du voyage medical: vols, visas, conciergeries</li>
                  <li>Traduction,accompagnement, suivi personnalise</li>
                  <li>Acces a des specialistes reconnus</li>
                </ul>
                  

              </section>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="text-primary" size={28} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Formations accessibles</h3>
              <p className="text-gray-500">Formations en ligne et en présentiel, du grand public aux professionnels de santé.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-primary" size={28} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Emplacement idéal</h3>
              <p className="text-gray-500">En plein cœur de kinshasa, facilement accessible en transport.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Formations les plus demandées</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Du grand public aux médecins : premiers secours, gestion de crise, urgences avancées.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
              >
                <div className="text-5xl mb-4">{item.image}</div>
                <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                <p className="text-gray-500 text-sm mb-3 line-clamp-2">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold text-lg">{item.price === 0 ? 'Gratuit' : `${item.price.toFixed(2)} €`}</span>
                  <Link to="/menu" className="text-sm text-accent hover:underline font-medium">
                    S'inscrire
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
            >
              Voir toutes les formations <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ce que disent nos clients</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="text-secondary fill-secondary" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{t.text}"</p>
                <p className="font-semibold text-sm">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Prêt à vous former avec HBG Care ?</h2>
          <p className="text-lg mb-8 opacity-90">
            Choisissez vos formations (grand public ou médecins) ou réservez une consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/reservation"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Réserver une consultation
            </Link>
            <Link
              to="/menu"
              className="border-2 border-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Voir les formations
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
