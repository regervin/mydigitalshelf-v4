import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { ChevronDown, User, LogOut } from 'lucide-react'

const TopNav = () => {
  const { user, signOut } = useAuth()
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const handleSignOut = async () => {
    await signOut()
    setDropdownOpen(false)
  }

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex justify-end">
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
          >
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
            <span>{user?.email}</span>
            <ChevronDown size={16} />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-10">
              <div className="py-1">
                <button
                  onClick={handleSignOut}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <LogOut size={16} className="mr-2" />
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TopNav
