"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from 'recharts';

const data = [
  { month: 'Jan', beneficio: 0, perdida: 0 },
  { month: 'Feb', beneficio: 0, perdida: 0 },
  { month: 'Mar', beneficio: 0, perdida: 0 },
  { month: 'Apr', beneficio: 150, perdida: 0 },
  { month: 'May', beneficio: 300, perdida: 100 },
  { month: 'Jun', beneficio: 400, perdida: 400 },
  { month: 'Jul', beneficio: 350, perdida: 900 },
  { month: 'Aug', beneficio: 200, perdida: 400 },
  { month: 'Sep', beneficio: 100, perdida: 100 },
  { month: 'Oct', beneficio: 0, perdida: 0 },
  { month: 'Nov', beneficio: 0, perdida: 0 },
  { month: 'Dec', beneficio: 0, perdida: 0 },
];

export default function FinanceOverview() {
  return (
    <div className="bg-white rounded-xl shadow p-6 text-gray-600">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg">Estadísticas de Ingresos</h2>
        <select className="border border-gray-300 rounded px-2 py-1 text-sm">
          <option>2025</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="beneficio" stroke="#8e44ad" strokeWidth={3} name="Beneficio" />
          <Line type="monotone" dataKey="perdida" stroke="#e74c3c" strokeWidth={3} name="Pérdida" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
