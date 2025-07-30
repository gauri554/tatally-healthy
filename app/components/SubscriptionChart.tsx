'use client';

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Compra', value: 80.97, color: '#FDBA74' },   // 🟠 orange
  { name: 'Ventas', value: 101.91, color: '#4ADE80' },   // 🟢 green
  { name: 'Ingreso', value: 88.96, color: '#818CF8' },   // 🔵 blue
  { name: 'Gasto', value: 49.33, color: '#F87171' },     // 🔴 red
];

export default function SubscriptionChart() {
  return (
    <div className="bg-white rounded-xl shadow p-6 text-gray-600 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="w-full md:w-1/2 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={65}
              innerRadius={30}
              paddingAngle={4}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="w-full md:w-1/2 space-y-3 text-sm">
        <h2 className="font-semibold text-lg text-gray-800 mb-2">Informes generales</h2>
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span>{item.name}</span>
            </div>
            <span className="font-medium">S/{item.value}{item.name === 'Gasto' ? 'K' : 'M'}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
