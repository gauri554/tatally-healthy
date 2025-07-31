import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AddNewStaff() {
  return (
    <div className="p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Add New Staff</h2>
        <Button className="bg-green-700 text-white">View List</Button>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <Input placeholder="Enter Name" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <Input type="tel" placeholder="Enter Phone Number" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Role</label>
              <select className="w-full border rounded p-2">
                <option value="">Select a role</option>
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Confirm password</label>
              <Input type="password" placeholder="Enter Confirm password" />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <Input  type="email" placeholder="Enter email id"/>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Image</label>
              <div className="flex items-center gap-2">
                <input type="file" className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:rounded file:text-sm file:bg-white file:text-gray-700 hover:file:bg-gray-100" />
                <span className="text-xl">📤</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <Input type="password" placeholder="Enter Confirm password"  />
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end gap-4 mt-6">
          <Button variant="outline">Cancel</Button>
          <Button className="bg-green-700 text-white">Save</Button>
        </div>
      </div>
    </div>
  );
}
