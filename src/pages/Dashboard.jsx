import React, { useState } from 'react'
import Layout from '../components/Layout'
import { 
  Plus, 
  Package, 
  Users, 
  CreditCard, 
  DollarSign,
  TrendingUp,
  BookOpen,
  UserPlus,
  BarChart3
} from 'lucide-react'

const Dashboard = () => {
  const [showAddProduct, setShowAddProduct] = useState(false)
  const [showCreateMembership, setShowCreateMembership] = useState(false)

  const stats = [
    { title: 'Total Products', value: '0', icon: Package },
    { title: 'Total Customers', value: '0', icon: Users },
    { title: 'Active Memberships', value: '0', icon: CreditCard },
    { title: 'Total Revenue', value: '$0.00', icon: DollarSign }
  ]

  const revenueStats = [
    { period: 'Today', amount: '$0.00' },
    { period: 'This Week', amount: '$0.00' },
    { period: 'This Month', amount: '$0.00' }
  ]

  const quickActions = [
    { title: 'Add New Product', icon: Plus, action: () => setShowAddProduct(true) },
    { title: 'Create Membership', icon: UserPlus, action: () => setShowCreateMembership(true) },
    { title: 'Manage Customers', icon: Users, action: () => {} },
    { title: 'View Analytics', icon: BarChart3, action: () => {} }
  ]

  const tips = [
    'How to create your first digital product',
    'Growing your customer base',
    'Setting up recurring memberships'
  ]

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header with Action Buttons */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Dashboard</h1>
          <div className="flex gap-3">
            <button
              onClick={() => setShowAddProduct(true)}
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 flex items-center gap-2"
            >
              <Plus size={16} />
              Add Product
            </button>
            <button
              onClick={() => setShowCreateMembership(true)}
              className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 flex items-center gap-2"
            >
              <Plus size={16} />
              Create Membership
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                </div>
                <stat.icon size={24} className="text-secondary" />
              </div>
            </div>
          ))}
        </div>

        {/* Revenue Stats */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-lg font-semibold text-primary mb-4">Revenue</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {revenueStats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-light rounded-lg">
                <p className="text-sm text-gray-600">{stat.period}</p>
                <p className="text-xl font-bold text-primary">{stat.amount}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Sales */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-semibold text-primary mb-4">Recent Sales</h2>
            <div className="text-center py-8 text-gray-500">
              No sales yet
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-semibold text-primary mb-4">Quick Actions</h2>
            <div className="space-y-3">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={action.action}
                  className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <action.icon size={16} className="text-secondary" />
                  <span className="text-gray-700">{action.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tips & Resources */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-semibold text-primary mb-4">Tips & Resources</h2>
            <div className="space-y-3">
              {tips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg">
                  <BookOpen size={16} className="text-secondary mt-0.5" />
                  <span className="text-gray-700 text-sm">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add Product Modal */}
      {showAddProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-primary mb-4">Add New Product</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" rows="3"></textarea>
              </div>
              <div className="flex gap-3">
                <button type="submit" className="flex-1 bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90">
                  Add Product
                </button>
                <button 
                  type="button" 
                  onClick={() => setShowAddProduct(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Create Membership Modal */}
      {showCreateMembership && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-primary mb-4">Create Membership</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Membership Name</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Price</label>
                <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" rows="3"></textarea>
              </div>
              <div className="flex gap-3">
                <button type="submit" className="flex-1 bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90">
                  Create Membership
                </button>
                <button 
                  type="button" 
                  onClick={() => setShowCreateMembership(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default Dashboard
