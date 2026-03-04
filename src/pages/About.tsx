import { ChefHat, Heart, Leaf, Award } from 'lucide-react'
import type { ValueItem } from '../types'

const values: ValueItem[] = [
  {
    icon: ChefHat,
    title: 'Formation grand public',
    text: 'Apprenez à réagir face à une crise, aux premiers secours et aux gestes qui sauvent, sans être médecin.',
  },
  {
    icon: Leaf,
    title: 'Formations pour médecins',
    text: 'Formations avancées en urgences, réanimation, trauma et pédiatrie pour les professionnels de santé.',
  },
  {
    icon: Heart,
    title: 'Accessible à tous',
    text: 'Des formations gratuites ou payantes, en ligne et en présentiel, pour rendre les soins accessibles au-delà des frontières.',
  },
  {
    icon: Award,
    title: 'Qualité et reconnaissance',
    text: 'Contenus à jour des recommandations, diplômes reconnus (PSC1, etc.) et équipe de formateurs expérimentés.',
  },
]

export default function About() {
  return (
    <div className="min-h-screen">
      <div className="bg-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">À propos de HBG Care</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Formations en médecine pour le grand public et les professionnels : premiers secours, gestion de crise, urgences.
          </p>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Notre histoire</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                HBG Care est né d'une idée simple : rendre les gestes qui sauvent et les formations médicales accessibles au plus grand nombre. Pour le grand public, nous proposons comment prendre en charge une personne en crise sans être médecin ; pour les médecins, des formations poussées en urgences et réanimation.
              </p>
              <p>
                Notre équipe de formateurs et professionnels de santé conçoit des programmes à jour des recommandations, du premier secours civique aux urgences vitales. Chaque formation vise à renforcer les compétences et la confiance en situation réelle.
              </p>
              <p>
                Que vous soyez particulier, entreprise ou professionnel de santé, HBG Care vous accompagne en présentiel et en ligne, à Kinshasa et au-delà.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-12 text-center">
            <span className="text-8xl block mb-6">⚕️</span>
            <p className="text-2xl font-bold text-dark">
              "Soins accessibles au-delà des frontières de la santé."
            </p>
            <p className="text-gray-500 mt-2">— L'équipe HBG Care</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nos valeurs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <v.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-4xl font-bold text-primary">5+</p>
              <p className="text-gray-500 mt-1">Années d'expérience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">10K+</p>
              <p className="text-gray-500 mt-1">Participants formés</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">15+</p>
              <p className="text-gray-500 mt-1">Formations disponibles</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">4.8</p>
              <p className="text-gray-500 mt-1">Note moyenne</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
