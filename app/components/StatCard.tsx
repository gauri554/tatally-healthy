import {
  BarChart2,
  ShoppingBag,
  Wallet,
  DollarSign,
  User,
  Users,
  RotateCw,
  RotateCcw,
} from "lucide-react";

const iconMap: { [key: string]: React.ReactNode } = {
  bar: <BarChart2 size={20} className="text-white" />,
  bag: <ShoppingBag size={20} className="text-white" />,
  wallet: <Wallet size={20} className="text-white" />,
  money: <DollarSign size={20} className="text-white" />,
  user: <User size={20} className="text-white" />,
  users: <Users size={20} className="text-white" />,
  undo: <RotateCcw size={20} className="text-white" />,
  redo: <RotateCw size={20} className="text-white" />,
};

const bgColorMap: { [key: string]: string } = {
  blue: "bg-blue-500",
  orange: "bg-orange-500",
  red: "bg-red-500",
  green: "bg-green-500",
  sky: "bg-sky-500",
  purple: "bg-purple-500",
  lime: "bg-lime-500",
  pink: "bg-pink-500",
};

interface StatCardProps {
  color: string;
  label: string;
  value: string;
  change: string;
  icon: string;
}

export default function StatCard({ color, label, value, change, icon }: StatCardProps) {
  const bgColor = bgColorMap[color] || "bg-gray-400";
  const IconComponent = iconMap[icon];

  return (
    <div className="bg-white rounded-xl shadow p-4 flex items-start gap-4">
      <div className={`p-2 rounded-md ${bgColor}`}>
        {IconComponent}
      </div>
      <div>
        <p className="text-gray-500 text-sm">{label}</p>
        <h2 className="text-lg font-semibold">{value}</h2>
        <p className={`text-sm ${change.includes('-') ? 'text-red-500' : 'text-green-500'}`}>{change}</p>
      </div>
    </div>
  );
}
