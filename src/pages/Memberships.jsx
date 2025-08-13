import React, { useState } from 'react'
import Layout from '../components/Layout'
import { Plus, Edit, Trash2, Users } from 'lucide-react'

const Memberships = () => {
  const [showCreateMembership, setShowCreateMembership] = useState(false)
  const [memberships, setMemberships] = useState([])

  const handleCreateMembership = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const newMembership = {
      id: Date.now(),
      name: formData.get('name'),
      price: formData.get('price'),
      description: formData.get('description'),
      members: 0,
      status: 'Active'
    }
    setMemberships([...memberships, newMembership])
    setShowCreateMembership(false)
    e.target.reset()
  }

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Memberships</h1>
          <button
            onClick={() => setShowCreateMembership(true)}
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 flex items-center gap-2"
          >
            <Plus size={16} />
            Create Membership
          </button>
        </div>

        {memberships.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm border p-12 text-center">
            <div className="text-gray-400 mb-4">
              <Users size={48} className="mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No memberships yet</h3>
            <p className="text-gray-500 mb-4">Create your first membership site to start building a community</p>
            <button
              onClick={() => setShowCreateMembership(true)}
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90"
            >
              Create Your First Membership
            </button>
          </div>
        ) : (
          <div className="grid gap-6">
            {memberships.map((membership) => (
              <div key={membership.id} className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-primary mb-2">{membership.name}</h3>
                    <p className="text-gray-600 mb-4">{membership.description}</p>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <span>${membership.price}/month</span>
                      <span>{membership.members} members</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                        {membership.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-yellow-600 hover:text-yellow-900">
                      <Edit size={16} />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Create Membership Modal */}
        {showCreateMembership && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
              <h3 className="text-lg font-semibold text-primary mb-4">Create Membership</h3>
              <form onSubmit={handleCreateMembership} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Membership Name</label>
                  <input 
                    name="name"
                    type="text" 
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Price ($)</label>
                  <input 
                    name="price"
                    type="number" 
                    step="0.01"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea 
                    name="description"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                    rows="3"
                  ></textarea>
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
      </div>
    </Layout>
  )
}

export default Memberships
