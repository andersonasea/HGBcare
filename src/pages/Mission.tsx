import { Target, Users, Heart, Globe } from 'lucide-react'
import type { ValueItem } from '../types'

const missions: ValueItem[] = [
  {
    icon: Target,
    title: 'Notre mission',
    text: 'Rendre les gestes qui sauvent et les formations médicales accessibles au grand public et aux professionnels de santé, sans frontières.',
  },
  {
    icon: Users,
    title: 'Grand public',
    text: 'Apprendre à prendre en charge une personne en crise (malaise, étouffement, crise convulsive) sans être médecin, et savoir alerter les secours.',
  },
  {
    icon: Heart,
    title: 'Médecins et professionnels',
    text: 'Proposer des formations poussées en urgences, réanimation, trauma et pédiatrie, à jour des recommandations et bonnes pratiques.',
  },
  {
    icon: Globe,
    title: 'Au-delà des frontières',
    text: 'Soins accessibles partout : formations en ligne et en présentiel, à Kinshasa et ailleurs, pour agir partout où la santé compte.',
  },
]

export default function Mission() {
  return (
    <div className="min-h-screen">
      <div className="bg-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Notre mission</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Soins accessibles au-delà des frontières de la santé — formations pour tous, du premier secours à l’urgence avancée.
          </p>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {missions.map((m, i) => (
            <div key={i} className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <m.icon className="text-primary" size={28} />
              </div>
              <h2 className="font-semibold text-lg mb-2">{m.title}</h2>
              <p className="text-gray-500 text-sm">{m.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-light py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-xl text-gray-600 leading-relaxed">
            HBG Care croit que chacun peut contribuer à sauver des vies. Nous formons le grand public aux premiers secours et les médecins aux urgences vitales, pour des soins accessibles partout.
          </p>
          <p className="text-gray-500 mt-4">— L'équipe HBG Care</p>
        </div>
      </section>
    </div>
  )
}
