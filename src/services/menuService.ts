import { collection, getDocs, query, where } from 'firebase/firestore'
import { db, isConfigured } from './firebase'
import type { MenuItem, Category } from '../types'

const COLLECTION = 'menuItems'

function requireDb() {
  if (!isConfigured || !db) {
    throw new Error('Firebase n\'est pas configuré.')
  }
  return db
}

export async function getAllMenuItems(): Promise<MenuItem[]> {
  const firestore = requireDb()
  const snapshot = await getDocs(collection(firestore, COLLECTION))
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as MenuItem))
}

export async function getMenuItemsByCategory(category: string): Promise<MenuItem[]> {
  const firestore = requireDb()
  const q = query(
    collection(firestore, COLLECTION),
    where('category', '==', category)
  )
  const snapshot = await getDocs(q)
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as MenuItem))
}

/** Formations médicales : grand public (crise, premiers secours) et formations poussées pour médecins */
export const SAMPLE_MENU: MenuItem[] = [
  {
    id: '1',
    name: 'Prise en charge d\'une crise (grand public)',
    description: 'Apprenez à réagir face à une personne en crise (épilepsie, malaise, étouffement) sans être médecin. Gestes essentiels et appel des secours.',
    price: 0,
    category: 'secourisme-medicale',
    image: '🆘',
    popular: true,
  },
  {
    id: '2',
    name: 'Premiers secours et RCP',
    description: 'Réanimation cardio-pulmonaire, utilisation du DAE, gestes qui sauvent. Formation reconnue pour le grand public.',
    price: 0,
    category: 'secourisme-medicale',
    image: '❤️‍🩹',
    popular: true,
  },
  {
    id: '3',
    name: 'Gestion de l\'urgence en milieu non médical',
    description: 'Comment stabiliser une victime, protéger les lieux et alerter correctement les secours. Idéal pour lieux publics et entreprises.',
    price: 0,
    category: 'secourisme-medicale',
    image: '🏥',
    popular: false,
  },
  // {
  //   id: '4',
  //   name: 'Urgences vitales (médecins)',
  //   description: 'Formation avancée : prise en charge des arrêts cardiaques, choc, détresse respiratoire. Protocoles et mise à jour des recommandations.',
  //   price: 0,
  //   category: 'medecins',
  //   image: '⚕️',
  //   popular: true,
  // },
  // {
  //   id: '5',
  //   name: 'Trauma et réanimation (médecins)',
  //   description: 'Stratégies de réanimation, gestion des polytraumatismes, transfusion. Niveau spécialisé pour professionnels de santé.',
  //   price: 0,
  //   category: 'medecins',
  //   image: '🩺',
  //   popular: true,
  // },
  // {
  //   id: '6',
  //   name: 'Pédiatrie en urgence (médecins)',
  //   description: 'Urgences pédiatriques : détresse respiratoire, déshydratation, convulsions. Adapté aux médecins et internes.',
  //   price: 0,
  //   category: 'medecins',
  //   image: '👶',
  //   popular: false,
  // },
  
  {
    id: '7',
    name: 'Initiation aux premiers secours (IPS)',
    description: 'Formation courte pour savoir alerter, protéger et effectuer les premiers gestes en attendant les secours.',
    price: 0,
    category: 'secourisme-medicale',
    image: '🩹',
    popular: true,
  },
  {
    id: '8',
    name: 'Prévention et secours civiques (PSC1)',
    description: 'Diplôme reconnu : prévention, protection, alerte, gestes d\'urgence. Indispensable pour tous.',
    price: 0,
    category: 'secourisme-medicale',
    image: '📜',
    popular: true,
  },
  // {
  //   id: '9',
  //   name: 'Urgences en structure de soins (médecins)',
  //   description: 'Organisation des urgences, triage, flux patients. Pour médecins travaillant ou souhaitant travailler aux urgences.',
  //   price: 0,
  //   category: 'medecins',
  //   image: '🏨',
  //   popular: false,
  // },
  {
    id: '10',
    name: 'Alerte et protection du grand public',
    description: 'Comprendre le 15, 18, 112. Que dire, que faire en attendant les secours. Formation gratuite et accessible à tous.',
    price: 0,
    category: 'secourisme-medicale',
    image: '📞',
    popular: true,
  },
]

export const CATEGORIES: Category[] = [
  { id: 'all', label: 'Toutes les formations' },
  { id: 'secourisme-medicale', label: 'Secourisme Medicale' },
  { id: 'premiers-secours', label: 'Premiers secours' },
  { id: 'medecins', label: 'Médecins / Avancé' },
]
