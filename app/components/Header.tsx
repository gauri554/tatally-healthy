export default function Header() {
  return (
    <div className="flex justify-between items-center bg-white shadow-md px-6 py-4 rounded-lg">
      <div className="text-lg font-semibold text-gray-700">Totally Healthy</div>
      <div className="flex items-center gap-4 text-gray-600">
        <select className="border border-gray-300 rounded px-2 py-1 text-sm">
          <option>Spanish</option>
          <option>English</option>
        </select>
        <span className="text-sm">Hello 👋</span>
        <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-sm font-medium text-white">
          A
        </div>
      </div>
    </div>
  );
}