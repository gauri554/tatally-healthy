'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  FaTachometerAlt,
  FaList,
  FaBoxOpen,
  FaUserCog,
  FaCog,
  FaChevronDown,
  FaChevronUp,
} from 'react-icons/fa';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleSubmenu = (label: string) => {
    setOpenMenu(prev => (prev === label ? null : label));
  };

  const menuItems = [
    { icon: <FaTachometerAlt />, label: "Dashboard", href: "/" },
    { icon: <FaList />, label: "Business List", href: "/Business" },
    {
      icon: <FaBoxOpen />,
      label: "Subscription Plan",
      submenu: [
        { label: "Create Plan", href: "/Subscriptions/Create" },
        { label: "Manage Plan", href: "/Subscriptions/Manage" },
      ],
    },
    {
      icon: <FaUserCog />,
      label: "Staff Management",
      submenu: [
        { label: "All Staff", href: "/staff/create" },
        { label: "Roles", href: "/staff/manage" },
      ],
    },
    {
      icon: <FaCog />,
      label: "Settings",
      submenu: [
        { label: "Currencies", href: "/setting/currencies" },
        { label: "Payment Gateway", href: "/setting/payment" },
        { label: "System Settings", href: "/setting/system" },
        { label: "General Settings", href: "/setting/general" },
      ],
    },
  ];

  return (
    <div
      className={`
       bg-black text-white w-56 p-4 flex flex-col gap-6  h-full z-40 
        fixed top-0 left-0 transition-transform duration-300 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 md:relative 
      `}
    >
      {/* Mobile Close Button */}
      <div className="flex justify-end md:hidden">
        <button onClick={onClose} className="text-white text-2xl font-bold">
          &times;
        </button>
      </div>

      <div className="text-lg font-semibold mb-6">Totally Healthy</div>

      <ul className="flex flex-col gap-4">
        {menuItems.map((item, index) => (
          <li key={index}>
            {!item.submenu ? (
              <Link
                href={item.href!}
                className={`flex items-center gap-3 text-sm cursor-pointer hover:text-green-400 ${
                  index === 0 ? "bg-green-900 px-3 py-2 rounded" : ""
                }`}
              >
                <span>{item.icon}</span>
                {item.label}
              </Link>
            ) : (
              <>
                <div
                  onClick={() => toggleSubmenu(item.label)}
                  className="flex items-center justify-between text-sm cursor-pointer hover:text-green-400"
                >
                  <div className="flex items-center gap-3">
                    <span>{item.icon}</span>
                    {item.label}
                  </div>
                  {openMenu === item.label ? (
                    <FaChevronUp className="w-3 h-3" />
                  ) : (
                    <FaChevronDown className="w-3 h-3" />
                  )}
                </div>
                {openMenu === item.label && (
                  <ul className="ml-7 mt-2 flex flex-col gap-2 text-sm text-gray-300">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={subItem.href}
                          className="hover:text-green-300 block"
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar; 