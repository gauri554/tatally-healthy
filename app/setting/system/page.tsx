import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function SystemSettingsPage() {
  return (
    <div className="p-6 md:p-10">
      <h1 className="text-center text-lg font-semibold text-red-500 mb-6">
        Note : Don't Use Any Kind Of Space In The Input Fields
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-4 h-fit">
          <h2 className="bg-green-700 text-white text-sm px-4 py-2 rounded mb-4">App</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="hover:underline cursor-pointer">Drivers</li>
            <li className="hover:underline cursor-pointer">Storage Settings</li>
            <li className="hover:underline cursor-pointer">Mail Configuration</li>
            <li className="hover:underline cursor-pointer">Others</li>
          </ul>
        </div>

        <div className="md:col-span-2 bg-white rounded-lg shadow p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">APP_NAME</label>
              <Input placeholder="" className="w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">APP_KEY</label>
              <Input
                value="base64:Xo4XSLlPaIY6MSNM317vHWARKoJvdumiBQ3KY1CwRY="
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">APP_DEBUG</label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="true (Developers Only)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">true (Developers Only)</SelectItem>
                  <SelectItem value="false">false</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">APP_URL</label>
              <Input value="http://127.0.0.1:8000" className="w-full" />
            </div>
            <div className="pt-4">
              <Button className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded">
                Update
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
