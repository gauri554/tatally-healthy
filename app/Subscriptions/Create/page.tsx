import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

export default function AddNewPackage() {
  return (
    <div className="p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Add New Package</h2>
        <Button variant="outline" className="bg-green-100 text-green-700 border-green-500">
          Package List
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">Package Name</label>
            <Input placeholder="Enter Package Name" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Duration in Days</label>
            <Input type="number" placeholder="Enter number" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Offer Price</label>
            <Input placeholder="Enter Plan Price" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Subscription Price</label>
            <Input placeholder="Enter Subscription Price" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <label className="block text-sm font-medium mb-1">Status</label>
            <Switch defaultChecked />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Items</label>
            <Input value="Items 1" readOnly />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Add New Features</label>
          <div className="flex gap-2">
            <Textarea placeholder="Enter features" className="flex-1" />
            <Button variant="secondary">Save</Button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end gap-4 pt-4">
          <Button variant="outline">Cancel</Button>
          <Button className="bg-green-700 text-white">Save</Button>
        </div>
      </div>
    </div>
  );
}
