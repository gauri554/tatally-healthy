"use client";

import { useState } from "react";
import { MoreVertical, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const businessData = [
  {
    id: 1,
    name: "Acnoo",
    category: "Fashion Store",
    phone: "1871165401",
    package: "Free",
    lastEnroll: "29 Aug, 2024",
    expiredDate: "12 Jul, 2035",
  },
];

export default function BusinessListPage() {
  const [search, setSearch] = useState("");

  const filteredData = businessData.filter((b) =>
    b.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full bg-white rounded-md shadow-md p-6 mt-5">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold text-gray-800">Business List</h1>
        <Button className="bg-green-600 hover:bg-green-700 text-white">
          <Plus className="mr-2 h-4 w-4" /> Add new Business
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-600">Show -</label>
          <select className="border border-gray-300 rounded px-2 py-1 text-sm">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
        </div>

        <div className="flex items-center w-full sm:w-64">
          <Input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3">
                <Checkbox />
              </th>
              <th className="p-3">SL.</th>
              <th className="p-3">Business Name</th>
              <th className="p-3">Business Category</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Package</th>
              <th className="p-3">Last Enroll</th>
              <th className="p-3">Expired Date</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((biz, index) => (
              <tr key={biz.id} className="border-t hover:bg-gray-50">
                <td className="p-3">
                  <Checkbox />
                </td>
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{biz.name}</td>
                <td className="p-3">{biz.category}</td>
                <td className="p-3">{biz.phone}</td>
                <td className="p-3">{biz.package}</td>
                <td className="p-3">{biz.lastEnroll}</td>
                <td className="p-3">{biz.expiredDate}</td>
                <td className="p-3">
                  <MoreVertical className="w-4 h-4 cursor-pointer text-gray-600" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     
    </div>
  );
}
