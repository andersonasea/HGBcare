import { MapPin, Building2 } from 'lucide-react'
import sponsor_Acibadem from  '../assets/Acibadem.jpg'
import sponsor_AgakhanHospital from '../assets/Aga-Khan-Hospital-1.jpg'
import sponsor_Manipal_hospital from '../assets/Manipal-Hospital.jpg'
import sponsor_Max_Nanavati from '../assets/Max-Nanavati.jpg'
import sponsor_Netcare from '../assets/Netcare.jpg'


const destinations = [
  { name: 'Turquie' },
  { name: 'Inde' },
  { name: 'Maroc' },
  { name: 'Kenya' },
  { name: 'Afrique du Sud' },
]

const partenaires = [
  { name: 'Manipal Hospitals',logo:sponsor_Manipal_hospital },
  { name: 'ACIBADEM',logo:sponsor_Acibadem },
  { name: 'Nanavati Max',logo:sponsor_Max_Nanavati },
  { name: 'Netcare Hospitals',logo:sponsor_Netcare },
  { name: 'The Aga Khan University Hospitals',logo:sponsor_AgakhanHospital },
]

export default function Partenaires() {
  return (
    <div className="min-h-screen bg-gray-light">
      <div className="bg-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Partenaires & Destinations</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Nos destinations de tourisme médical et nos partenaires hospitaliers reconnus à l'international.
          </p>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-2 mb-6">
          <MapPin className="text-primary" size={24} />
          <h2 className="text-2xl font-bold text-dark">Destinations</h2>
        </div>
        <p className="text-gray-600 mb-6">
          HBG Care vous accompagne vers des destinations de choix pour vos soins et votre tourisme médical :
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {destinations.map((d, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center gap-3 hover:shadow-md hover:border-primary/20 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="text-primary" size={20} />
              </div>
              <span className="font-semibold text-dark">{d.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-2 mb-6">
          <Building2 className="text-primary" size={24} />
          <h2 className="text-2xl font-bold text-dark">Partenaires</h2>
        </div>
        <p className="text-gray-600 mb-6">
          Réseau d'établissements partenaires pour un accès à des soins de qualité et des spécialistes reconnus :
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {partenaires.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center gap-3 hover:shadow-md hover:border-primary/20 transition-all"
            >
             
                
             <img src={p.logo} alt="logo" width={140} height={20} />
              
             
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
