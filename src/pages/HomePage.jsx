import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import AuthModal from '../components/AuthModal'
import { 
  BookOpen, 
  Users, 
  Download, 
  Shield, 
  BarChart3, 
  Globe,
  ArrowRight
} from 'lucide-react'

const HomePage = () => {
  const [authModal, setAuthModal] = useState({ isOpen: false, mode: 'signin' })
  const { user } = useAuth()
  const navigate = useNavigate()

  const handleGetStarted = () => {
    if (user) {
      navigate('/dashboard')
    } else {
      setAuthModal({ isOpen: true, mode: 'signup' })
    }
  }

  const handleSignIn = () => {
    if (user) {
      navigate('/dashboard')
    } else {
      setAuthModal({ isOpen: true, mode: 'signin' })
    }
  }

  const features = [
    {
      icon: BookOpen,
      title: 'Digital Products',
      description: 'Sell e-books, courses, software, templates, and any other digital products with secure delivery.'
    },
    {
      icon: Users,
      title: 'Membership Sites',
      description: 'Create and manage membership sites with recurring payments and protected content access.'
    },
    {
      icon: Download,
      title: 'Automated Delivery',
      description: 'Automatically deliver products to customers after purchase with secure download links.'
    },
    {
      icon: Shield,
      title: 'License Protection',
      description: 'Protect your digital products with license keys and download limits to prevent unauthorized sharing.'
    },
    {
      icon: BarChart3,
      title: 'Sales Analytics',
      description: 'Track your sales, revenue, and customer behavior with detailed analytics and reports.'
    },
    {
      icon: Globe,
      title: 'Global Payments',
      description: 'Accept payments from customers worldwide with multiple payment gateway integrations.'
    }
  ]

  const steps = [
    {
      number: '1',
      title: 'Create Account',
      description: 'Sign up and set up your seller profile'
    },
    {
      number: '2',
      title: 'Upload Products',
      description: 'Add your digital products and set prices'
    },
    {
      number: '3',
      title: 'Share Your Store',
      description: 'Promote your products with a custom storefront'
    },
    {
      number: '4',
      title: 'Get Paid',
      description: 'Receive payments directly to your account'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-light py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold text-primary mb-6">
            MyDigitalShelf
          </h1>
          <p className="text-xl text-secondary mb-8 max-w-3xl mx-auto">
            Create, sell, and deliver digital products with ease. Manage your digital inventory, 
            process payments, and automate delivery all in one place.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={handleGetStarted}
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              Get Started
            </button>
            <button
              onClick={handleSignIn}
              className="bg-transparent border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-light py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-4">
            How It Works
          </h2>
          <p className="text-secondary text-center mb-12">
            Our platform makes selling digital products simple and straightforward.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Ready to start selling?
          </h2>
          <p className="text-secondary text-lg mb-8">
            Join thousands of creators who are successfully selling digital products online.
          </p>
          <button
            onClick={handleGetStarted}
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors inline-flex items-center gap-2"
          >
            Create Your Account
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <AuthModal
        isOpen={authModal.isOpen}
        onClose={() => setAuthModal({ isOpen: false, mode: 'signin' })}
        mode={authModal.mode}
      />
    </div>
  )
}

export default HomePage
