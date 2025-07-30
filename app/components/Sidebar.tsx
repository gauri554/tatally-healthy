import Link from 'next/link';
import { FaTachometerAlt, FaList, FaBoxOpen, FaUserCog, FaFileAlt, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  const menuItems = [
    { icon: <FaTachometerAlt />, label: "Dashboard", href: "/" },
    { icon: <FaList />, label: "Business List", href: "/Business" },
    { icon: <FaBoxOpen />, label: "Subscription Plans", href: "/subscriptions" },
    { icon: <FaUserCog />, label: "Staff Management", href: "/staff" },
    { icon: <FaFileAlt />, label: "Reports", href: "/reports" },
    { icon: <FaCog />, label: "Settings", href: "/settings" },
  ];

  return (
    <div className="min-h-screen w-56 bg-black text-white p-4 flex flex-col gap-6">
      <div className="text-lg font-semibold mb-6">Totally Healthy</div>
      <ul className="flex flex-col gap-4">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className={`flex items-center gap-3 text-sm cursor-pointer hover:text-green-400 ${
                index === 0 ? "bg-green-900 px-3 py-2 rounded" : ""
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
