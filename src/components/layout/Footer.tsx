import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">⚕️</span>
              <span className="text-xl font-bold">
                HBG <span className="text-primary">Care</span>
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Formations en médecine pour le grand public et les professionnels : premiers secours, gestion de crise, urgences.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Accueil</Link></li>
              <li><Link to="/menu" className="hover:text-primary transition-colors">Formations</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Nos services</Link></li>
              <li><Link to="/partenaires" className="hover:text-primary transition-colors">Partenaires</Link></li>
              <li><Link to="/reservation" className="hover:text-primary transition-colors">Réservation</Link></li>
              <li><Link to="/order" className="hover:text-primary transition-colors">Mes inscriptions</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">À propos</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <Clock size={14} />
                <span>Lun - Ven : 9h - 18h</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={14} />
                <span>Formations sur rendez-vous</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <MapPin size={14} />
                <span>Kinshasa & en ligne</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} />
                <span>01 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} />
                <span>contact@hbgcare.fr</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} HBG Care. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
