"use client"; // if you're using app directory

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const currencies = [
  { name: "US Dollar", code: "USD", rate: 1, symbol: "$", status: "Active", isDefault: "Yes" },
  { name: "Afghanistan Afghani", code: "AFN", rate: 67.27, symbol: "؋", status: "Active", isDefault: "No" },
  { name: "Albania Lek", code: "ALL", rate: 91.47, symbol: "L", status: "Active", isDefault: "No" },
  { name: "Algerian Dinar", code: "DZD", rate: 133.08, symbol: "دج", status: "Active", isDefault: "No" },
  { name: "Angolan Kwanza", code: "AOA", rate: 910.98, symbol: "Kz", status: "Active", isDefault: "No" },
  { name: "Argentine Peso", code: "ARS", rate: 1007.68, symbol: "$", status: "Active", isDefault: "No" },
  { name: "Armenian Dram", code: "AMD", rate: 389.25, symbol: "֏", status: "Active", isDefault: "No" },
  { name: "Aruban Guilder", code: "AWG", rate: 1.79, symbol: "ƒ", status: "Active", isDefault: "No" },
  { name: "Australian Dollar", code: "AUD", rate: 1.54, symbol: "$", status: "Active", isDefault: "No" },
  { name: "Euro", code: "EUR", rate: 0.95, symbol: "€", status: "Active", isDefault: "No" },
  { name: "Azerbaijan Manat", code: "AZN", rate: 1.7, symbol: "₼", status: "Active", isDefault: "No" },
  { name: "Bahamian Dollar", code: "BSD", rate: 1, symbol: "$", status: "Active", isDefault: "No" },
  { name: "Bahraini Dinar", code: "BHD", rate: 0.38, symbol: ".د.ب", status: "Active", isDefault: "No" },
  { name: "Bangladesh Taka", code: "BDT", rate: 119, symbol: "৳", status: "Active", isDefault: "No" },
];

export default function CurrencyList() {
  const [search, setSearch] = useState("");

  const filtered = currencies.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Currency List</h2>
        <Button className="bg-green-600 hover:bg-green-700 text-white">
          + Add Currency
        </Button>
      </div>

      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <label htmlFor="show" className="text-sm font-medium">
            Show:
          </label>
          <select
            id="show"
            className="border rounded px-2 py-1 text-sm"
            defaultValue="10"
          >
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
        </div>

        <Input
          placeholder="Search..."
          className="w-full max-w-xs"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <ScrollArea className="rounded-md border">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-2"><input type="checkbox" /></th>
              <th className="p-2">SL.</th>
              <th className="p-2">Name</th>
              <th className="p-2">Code</th>
              <th className="p-2">Rate</th>
              <th className="p-2">Symbol</th>
              <th className="p-2">Status</th>
              <th className="p-2">Default</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c, idx) => (
              <tr key={idx} className="border-t">
                <td className="p-2"><input type="checkbox" /></td>
                <td className="p-2">{idx + 1}</td>
                <td className="p-2">{c.name}</td>
                <td className="p-2">{c.code}</td>
                <td className="p-2">{c.rate}</td>
                <td className="p-2">{c.symbol}</td>
                <td className="p-2">
                  <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded">
                    {c.status}
                  </span>
                </td>
                <td className="p-2">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded ${
                      c.isDefault === "Yes"
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {c.isDefault}
                  </span>
                </td>
                <td className="p-2 text-center text-xl">⋮</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ScrollArea>

      <footer className="text-xs text-gray-500 text-center pt-4">
        © 2023 Totally Healthy, all rights reserved. <br />
        Development By: <span className="text-green-600">♥ Totally Healthy</span>
      </footer>
    </div>
  );
}
