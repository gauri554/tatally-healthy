'use client';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCard from './components/StatCard';
import FinanceOverview from './components/FinanceOverview';
import SubscriptionChart from './components/SubscriptionChart';
import RecentRegister from './components/RecentRegister';

export default function DashboardPage() {
  return (
   
<>
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 my-6 text-gray-600">
          <StatCard color="blue" label="Ventas Totales" value="S/101.91M" change="+S/3.81M Este Mes" icon="bar" />
          <StatCard color="orange" label="Compra Total" value="S/80.97M" change="+S/7.29M Este Mes" icon="bag" />
          <StatCard color="red" label="Ingreso Total" value="S/88.96M" change="-S/3.65M Este Mes" icon="wallet" />
          <StatCard color="green" label="Gasto Total" value="S/49.33K" change="+S/10.05K Este Mes" icon="money" />
          <StatCard color="sky" label="Total de Clientes" value="43" change="+20 Este Mes" icon="user" />
          <StatCard color="purple" label="Total de Proveedores" value="5" change="+2 Este Mes" icon="users" />
          <StatCard color="lime" label="Devoluciones de Ventas" value="S/24.34K" change="+S/22.05K Este Mes" icon="undo" />
          <StatCard color="pink" label="Devoluciones de Compras" value="S/70" change="+S/0 Este Mes" icon="redo" />
        </div>

      
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-6">
          <div className="xl:col-span-2">
            <FinanceOverview />
          </div>
          <div className="space-y-4">
            <SubscriptionChart />
          </div>
        </div>

      
        <RecentRegister />

        <footer className="mt-6 text-center text-sm text-gray-500">
          © 2023 Totally Healthy, all rights reserved.
          <br />
          Development by <span className="text-green-500 font-medium">Totally Healthy</span>
        </footer>
   </>
  );
}
