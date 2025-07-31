import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function StaffList() {
  return (
    <div className="p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Staff List</h2>
        <Button className="bg-green-700 text-white">+ Add New Staff</Button>
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
              <th className="p-4">Name</th>
              <th className="p-4">Phone</th>
              <th className="p-4">User Email</th>
              <th className="p-4">User Role</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {[
              { id: 1, name: "Admin", phone: "", email: "admin@admin.com", role: "admin" },
              { id: 2, name: "Manager", phone: "", email: "manager@manager.com", role: "manager" },
            ].map((staff) => (
              <tr key={staff.id} className="border-b">
                <td className="p-4"><input type="checkbox" /></td>
                <td className="p-4">{staff.id}</td>
                <td className="p-4">{staff.name}</td>
                <td className="p-4">{staff.phone || "-"}</td>
                <td className="p-4">{staff.email}</td>
                <td className="p-4">{staff.role}</td>
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
