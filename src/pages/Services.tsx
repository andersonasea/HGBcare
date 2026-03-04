import { Heart, Stethoscope, Truck, Ambulance, Scissors, Sparkles, Bone, Smile, Scale, Baby, Brain, Activity, Footprints, Eye, HeartPulse, Beaker, Plane, CheckCircle } from 'lucide-react'

const servicesList = [
  { icon: Heart, name: 'Secourisme' },
  { icon: Stethoscope, name: 'Consultation mobile et téléconsultation' },
  { icon: Truck, name: 'Import et export de matériel médical' },
  { icon: Activity, name: 'Logistique médicale' },
  { icon: Ambulance, name: 'Transport sanitaire' },
  { icon: Sparkles, name: 'Chirurgie robotique' },
  { icon: Scissors, name: 'Chirurgie esthétique' },
  { icon: Heart, name: 'Néphrologie' },
  { icon: Stethoscope, name: 'Urologie' },
  { icon: Footprints, name: 'Physiothérapie' },
  { icon: Smile, name: 'Dentisterie' },
  { icon: Scale, name: 'Chirurgie bariatrique' },
  { icon: Baby, name: 'Fertilité' },
  { icon: Brain, name: 'Cerveau et colonne vertébrale / Neurosciences' },
  { icon: Scissors, name: 'Chirurgie générale et laparoscopie' },
  { icon: Bone, name: 'Orthopédie / Os et articulations' },
  { icon: Eye, name: 'Ophtalmologie' },
  { icon: HeartPulse, name: 'Cardiologie' },
  { icon: Beaker, name: 'Oncologie' },
]

const tourismeMedicalItems = [
  'Analyse médicale et coordination hospitalière',
  'Organisation du voyage médical : vols, visas, conciergeries',
  'Traduction, accompagnement, suivi personnalisé',
  'Accès à des spécialistes reconnus',
]

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-light">
      <div className="bg-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Nos services</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            HBG Care propose bien plus que les formations en soins de santé : secourisme, consultations, logistique médicale, spécialités chirurgicales et tourisme médical.
          </p>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-dark mb-6">Formations & soins de santé</h2>
        <p className="text-gray-600 mb-8">
          En plus de nos <strong>formations en soins de santé</strong>, nous proposons les services suivants :
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {servicesList.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center gap-3 hover:shadow-md hover:border-primary/20 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <s.icon className="text-primary" size={20} />
              </div>
              <span className="font-medium text-dark">{s.name}</span>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-primary text-white px-6 py-4 flex items-center gap-3">
            <Plane size={24} />
            <h2 className="text-xl font-bold">Tourisme médical</h2>
          </div>
          <div className="p-6 sm:p-8">
            <p className="text-gray-600 mb-6">
              Un accompagnement complet pour votre voyage médical à l'étranger :
            </p>
            <ul className="space-y-4">
              {tourismeMedicalItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-primary shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
