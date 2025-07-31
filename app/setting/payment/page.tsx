import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function PaymentGatewaySettings() {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-white rounded shadow p-4">
        <ul className="space-y-2">
          {["stripe", "mollie", "paypal", "paystack", "razorpay", "instamojo", "toyyibpay", "flutterwave", "thawani", "mercadopago", "phonepe", "paytm", "Tap Payment", "Sslcommerz", "Manual"].map((gateway) => (
            <li key={gateway} className={`px-3 py-2 rounded ${gateway === "stripe" ? "bg-green-600 text-white" : "hover:bg-gray-100"}`}>
              {gateway}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Form */}
      <div className="w-full md:w-3/4 bg-white rounded shadow p-6">
        <h2 className="text-xl font-semibold mb-6">Payment Gateway Settings</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Gateway Image</label>
            <Input type="file" className="mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium">Gateway Name</label>
            <Input placeholder="enter gateway name"  className="mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium">Gateway Charge</label>
            <Input placeholder="enter gateway charge" className="mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium">Gateway Currency</label>
            <Input placeholder="enter gateway currency" className="mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium">STRIPE KEY</label>
            <Input value="pk_test_6fhZnVtHmR5p5drBiBQBYF0006XSCfWvq" className="mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium">STRIPE SECRET</label>
            <Input value="sk_test_YKyquAoMHjQuADW45uXJekn0O079PsUtOSD" className="mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium">Gateway Mode</label>
            <Select defaultValue="Sandbox">
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Sandbox">Sandbox</SelectItem>
                <SelectItem value="Live">Live</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium">Status</label>
            <Select defaultValue="Active">
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium">Is Manual</label>
            <Select defaultValue="No">
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Yes">Yes</SelectItem>
                <SelectItem value="No">No</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Instructions</label>
            <Textarea rows={6} className="w-full" />
          </div>

          <div className="pt-4">
            <Button className="bg-green-600 text-white">Save</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
