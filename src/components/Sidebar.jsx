import React from 'react'
import { NavLink } from 'react-router-dom'
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  CreditCard, 
  BarChart3, 
  Settings,
  HardDrive
} from 'lucide-react'

const Sidebar = () => {
  const navItems = [
    { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/products', icon: Package, label: 'Products' },
    { to: '/memberships', icon: Users, label: 'Memberships' },
    { to: '/customers', icon: Users, label: 'Customers' },
    { to: '/sales', icon: CreditCard, label: 'Sales' },
    { to: '/analytics', icon: BarChart3, label: 'Analytics' },
    { to: '/settings', icon: Settings, label: 'Settings' },
  ]

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      <div className="p-6">
        <h1 className="text-xl font-bold text-primary">MyDigitalShelf</h1>
      </div>
      
      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
              >
                <item.icon size={20} className="mr-3" />
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center text-sm text-gray-600">
          <HardDrive size={16} className="mr-2" />
          <div>
            <div>Storage</div>
            <div className="text-xs">0% of 10 GB used</div>
            <div className="text-xs">0 Bytes used</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
