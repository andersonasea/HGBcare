import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock, User } from 'lucide-react'
import { registerUser } from '../services/authService'
import { FirebaseError } from 'firebase/app'
import toast from 'react-hot-toast'

interface RegisterFormData {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export default function Register() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterFormData>()

  const onSubmit = async (data: RegisterFormData) => {
    setLoading(true)
    try {
      await registerUser(data.email, data.password, data.name)
      toast.success('Compte créé avec succès !')
      navigate('/')
    } catch (err) {
      const message = err instanceof Error ? err.message : ''
      if (err instanceof FirebaseError) {
        if (err.code === 'auth/email-already-in-use') {
          toast.error('Cet email est déjà utilisé.')
        } else if (err.code === 'auth/weak-password') {
          toast.error('Le mot de passe doit contenir au moins 6 caractères.')
        } else if (err.code === 'auth/invalid-email') {
          toast.error('Adresse email invalide.')
        } else {
          toast.error(message || "Erreur lors de l'inscription.")
        }
      } else if (message.includes("Firebase n'est pas configuré") || message.includes('pas configuré')) {
        toast.error(
          "Firebase n'est pas configuré. Placez le fichier .env à la racine du projet (à côté de package.json), avec vos clés Firebase, puis redémarrez le serveur (npm run dev).",
          { duration: 6000 }
        )
      } else {
        toast.error(message || "Erreur lors de l'inscription.")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-light flex items-center justify-center py-12 px-4">
      <div className="bg-white rounded-xl shadow-sm p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <span className="text-4xl">🍽️</span>
          <h1 className="text-2xl font-bold mt-4 mb-2">Créer un compte</h1>
          <p className="text-gray-500">Rejoignez la communauté HBG Care</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-dark mb-2">
              <User size={16} /> Nom complet
            </label>
            <input
              type="text"
              {...register('name', { required: 'Le nom est requis' })}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              placeholder="Votre nom"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-dark mb-2">
              <Mail size={16} /> Email
            </label>
            <input
              type="email"
              {...register('email', {
                required: "L'email est requis",
                pattern: { value: /^\S+@\S+$/, message: 'Email invalide' },
              })}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              placeholder="votre@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-dark mb-2">
              <Lock size={16} /> Mot de passe
            </label>
            <input
              type="password"
              {...register('password', {
                required: 'Le mot de passe est requis',
                minLength: { value: 6, message: '6 caractères minimum' },
              })}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-dark mb-2">
              <Lock size={16} /> Confirmer le mot de passe
            </label>
            <input
              type="password"
              {...register('confirmPassword', {
                required: 'La confirmation est requise',
                validate: (val) =>
                  val === watch('password') || 'Les mots de passe ne correspondent pas',
              })}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              placeholder="••••••••"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-primary-dark disabled:opacity-50 text-white py-3 rounded-lg font-semibold transition-colors"
          >
            {loading ? 'Création...' : "S'inscrire"}
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-500">
          Déjà un compte ?{' '}
          <Link to="/login" className="text-primary hover:underline font-medium">
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  )
}
