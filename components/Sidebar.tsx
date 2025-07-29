"use client";
import "@/styles/Sidebar.css";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaUser, FaClipboardList, FaUsers, FaChartBar, FaCog } from "react-icons/fa";

export default function Sidebar() {
  const [openSubmenus, setOpenSubmenus] = useState<string[]>([]);

  const toggleSubmenu = (name: string) => {
    setOpenSubmenus((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  const isOpen = (name: string) => openSubmenus.includes(name);

  return (
    <div className="sidebar">
    <aside className="sidebar">
      <div className="logo">
        <h2>Totally Healthy</h2>
        <FiMenu className="menu-icon" />
      </div>

      <ul className="nav-list">
        <li className="nav-item active">📊 Dashboard</li>
        <li className="nav-item"><FaClipboardList /> Business List</li>

        {/* Subscription Plans with submenu */}
        <li className="nav-item" onClick={() => toggleSubmenu("subscriptions")}>
          <FaClipboardList />
          Subscription Plans
        </li>
        {isOpen("subscriptions") && (
          <ul className="submenu">
            <li>Monthly Plans</li>
            <li>Annual Plans</li>
          </ul>
        )}

        {/* Staff Management with submenu */}
        <li className="nav-item" onClick={() => toggleSubmenu("staff")}>
          <FaUsers />
          Staff Management
        </li>
        {isOpen("staff") && (
          <ul className="submenu">
            <li>Team List</li>
            <li>Add Staff</li>
          </ul>
        )}

        {/* Reports with submenu */}
        <li className="nav-item" onClick={() => toggleSubmenu("reports")}>
          <FaChartBar />
          Reports
        </li>
        {isOpen("reports") && (
          <ul className="submenu">
            <li>Daily Report</li>
            <li>Monthly Report</li>
          </ul>
        )}

        {/* Settings with submenu */}
        <li className="nav-item" onClick={() => toggleSubmenu("settings")}>
          <FaCog />
          Settings
        </li>
        {isOpen("settings") && (
          <ul className="submenu">
            <li>Account</li>
            <li>Security</li>
          </ul>
        )}
      </ul>
    </aside>
  </div>

  );
}
