'use client';
import React from 'react';
import styles from './Container.module.css';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend
} from 'recharts';


const graphData = [
  { name: 'Enero', beneficio: 400, perdida: 240 },
  { name: 'Febrero', beneficio: 300, perdida: 139 },
  { name: 'Marzo', beneficio: 200, perdida: 980 },
  { name: 'Abril', beneficio: 278, perdida: 390 },
  { name: 'Mayo', beneficio: 189, perdida: 480 },
];


const pieData = [
  { name: 'Ventas', value: 500 },
  { name: 'Gastos', value: 300 },
  { name: 'Otros', value: 200 },
];

const COLORS = ['#00C49F', '#FF8042', '#8884d8'];

const Container = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topCards}>
        {[
          { label: 'Ventas Totales', value: 'S/101.91M', growth: '+ S/38.31M Este Mes', iconColor: 'purple' },
          { label: 'Compra Total', value: 'S/80.97M', growth: '+ S/77.29M Este Mes', iconColor: 'orange' },
          { label: 'Ingreso Total', value: 'S/88.96M', growth: '+ S/36.65M Este Mes', iconColor: 'green' },
          { label: 'Gasto Total', value: 'S/49.33K', growth: '+ S/10.05K Este Mes', iconColor: 'red' },
          { label: 'Total de Clientes', value: '43', growth: '+ 20 Este Mes', iconColor: 'blue' },
          { label: 'Total de Proveedores', value: '5', growth: '+ 2 Este Mes', iconColor: 'yellow' },
          { label: 'Devoluciones de Ventas', value: 'S/24.34K', growth: '+ S/2.05K Este Mes', iconColor: 'navy' },
          { label: 'Devoluciones de Compras', value: 'S/70', growth: '+ S/0 Este Mes', iconColor: 'pink' },
        ].map((card, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.icon} style={{ background: card.iconColor }} />
            <p><strong>{card.label}</strong></p>
            <p>{card.value}</p>
            <span>{card.growth}</span>
          </div>
        ))}
      </div>

      <div className={styles.middleRow}>
        <div className={styles.graphBox}>
          <h3>Estadísticas de Ingresos</h3>
          <p><span style={{ color: 'purple' }}>Beneficio: S/353.99</span> | <span style={{ color: 'red' }}>Pérdida: S/1.47K</span></p>
          <div className={styles.placeholder}><div className={styles.placeholder}>
  <ResponsiveContainer width="100%" height={250}>
    <LineChart data={graphData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="beneficio" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="perdida" stroke="#ff0000" />
    </LineChart>
  </ResponsiveContainer>
</div>
</div>
        </div>

        <div className={styles.stockBox}>
          <h3>Bajo Stock</h3>
          <table>
            <thead>
              <tr><th>SL</th><th>Nombre</th><th>Cantidad de Alerta</th></tr>
            </thead>
            <tbody>
              {[
                ['1', 'SSSSSS', '0'],
                ['2', 'Milk (semi skimmed)', '3'],
                ['3', 'Hp', '4'],
                ['4', 'Apple', '44'],
                ['5', 'Kelsey Fuller', '75']
              ].map(([sl, name, qty], i) => (
                <tr key={i}><td>{sl}</td><td>{name}</td><td>{qty}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.bottomRow}>
       <div className={styles.pieChart}>
  <ResponsiveContainer width="100%" height={250}>
    <PieChart>
      <Pie
        data={pieData}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        label
      >
        {pieData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
</div>

        <div className={styles.recentTables}>
          <div>
            <h4>Ventas Recientes</h4>
            <table>
              <thead><tr><th>Fecha</th><th>Factura</th><th>Cliente</th><th>Total</th><th>Pagado</th></tr></thead>
              <tbody>
                <tr><td>16 May, 2025</td><td>S14</td><td>ASHURA</td><td>S/500</td><td>S/500</td></tr>
                <tr><td>18 May, 2025</td><td>S17</td><td>ASHURA</td><td>S/200</td><td>S/200</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <p className={styles.footer}>© 2023 Totally Healthy, all rights reserved.</p>
    </div>
  );
};

export default Container;
