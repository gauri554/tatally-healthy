'use client';
import { useState } from 'react';

export default function BusinessListPage() {
  const [search, setSearch] = useState('');

  const businesses = [
    { id: 1, name: 'Ashura Organics', owner: 'Ashura', email: 'ashura@health.com', status: 'Active' },
    { id: 2, name: 'Green Grocers', owner: 'Lina', email: 'lina@grocery.com', status: 'Inactive' },
    { id: 3, name: 'Fresh Bite Café', owner: 'Ravi', email: 'ravi@cafe.com', status: 'Active' },
  ];

  const filtered = businesses.filter(b =>
    b.name.toLowerCase().includes(search.toLowerCase()) ||
    b.owner.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-700">Business List</h1>
        <input
          type="text"
          placeholder="Search business..."
          className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-xl shadow-md">
          <thead className="text-gray-600 text-left bg-gray-100">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Business Name</th>
              <th className="px-6 py-3">Owner</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {filtered.map((b) => (
              <tr key={b.id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-4">{b.id}</td>
                <td className="px-6 py-4 font-medium">{b.name}</td>
                <td className="px-6 py-4">{b.owner}</td>
                <td className="px-6 py-4">{b.email}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${b.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                    {b.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
