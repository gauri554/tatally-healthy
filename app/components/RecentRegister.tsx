// RecentRegister.tsx
export default function RecentRegister() {
  return (
    <div className="bg-white rounded-xl shadow p-6 overflow-x-auto text-gray-600">
      <h2 className="font-semibold text-lg mb-4">Ventas Recientes</h2>
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b">
            <th className="py-2 px-3 font-semibold text-gray-600">Fecha</th>
            <th className="py-2 px-3 font-semibold text-gray-600">Factura</th>
            <th className="py-2 px-3 font-semibold text-gray-600">Cliente</th>
            <th className="py-2 px-3 font-semibold text-gray-600">Total</th>
            <th className="py-2 px-3 font-semibold text-gray-600">Pagado</th>
            <th className="py-2 px-3 font-semibold text-gray-600">Vencido</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-2 px-3">16 May, 2025</td>
            <td className="py-2 px-3">S14</td>
            <td className="py-2 px-3">-</td>
            <td className="py-2 px-3">S/500</td>
            <td className="py-2 px-3">S/500</td>
            <td className="py-2 px-3">S/0</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-3">16 May, 2025</td>
            <td className="py-2 px-3">S16</td>
            <td className="py-2 px-3">ASHURA</td>
            <td className="py-2 px-3">S/670</td>
            <td className="py-2 px-3">S/670</td>
            <td className="py-2 px-3">S/0</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-3">16 May, 2025</td>
            <td className="py-2 px-3">S17</td>
            <td className="py-2 px-3">-</td>
            <td className="py-2 px-3">S/200</td>
            <td className="py-2 px-3">S/200</td>
            <td className="py-2 px-3">S/0</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-3">16 May, 2025</td>
            <td className="py-2 px-3">S18</td>
            <td className="py-2 px-3">ASHURA</td>
            <td className="py-2 px-3">S/1,200</td>
            <td className="py-2 px-3">S/800</td>
            <td className="py-2 px-3">S/400</td>
          </tr>
          <tr>
            <td className="py-2 px-3">17 May, 2025</td>
            <td className="py-2 px-3">S20</td>
            <td className="py-2 px-3">ASHURA</td>
            <td className="py-2 px-3">S/1,151.50</td>
            <td className="py-2 px-3">S/0</td>
            <td className="py-2 px-3">S/1,151.50</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
