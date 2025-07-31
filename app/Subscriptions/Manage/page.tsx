import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function PlanList() {
  return (
    <div className="p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Plan List</h2>
        <Button className="bg-green-700 text-white">Create Plans</Button>
      </div>

      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center gap-2">
            <label className="text-sm">Show-</label>
            <select className="border rounded px-2 py-1 text-sm">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
          </div>

          <Input
            type="text"
            placeholder="Search..."
            className="max-w-xs text-sm border px-2 py-1 rounded"
          />
        </div>

        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4"><input type="checkbox" /></th>
              <th className="p-4">SL.</th>
              <th className="p-4">Subscription Name</th>
              <th className="p-4">Items</th>
              <th className="p-4">Duration</th>
              <th className="p-4">Offer Price</th>
              <th className="p-4">Subscription Price</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {[
              { id: 1, name: "Free", duration: 7, offer: "$0", price: "$0" },
              { id: 2, name: "Standard", duration: 30, offer: "$10", price: "$10" },
              { id: 3, name: "Premium", duration: 180, offer: "$50", price: "$60" },
            ].map((plan) => (
              <tr key={plan.id} className="border-b">
                <td className="p-4"><input type="checkbox" /></td>
                <td className="p-4">{plan.id}</td>
                <td className="p-4">{plan.name}</td>
                <td className="p-4">-</td>
                <td className="p-4">{plan.duration}</td>
                <td className="p-4 font-semibold">{plan.offer}</td>
                <td className="p-4 font-semibold">{plan.price}</td>
                <td className="p-4">
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-green-600"></div>
                  </label>
                </td>
                <td className="p-4 text-right">
                  <button className="text-xl font-bold">⋮</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
