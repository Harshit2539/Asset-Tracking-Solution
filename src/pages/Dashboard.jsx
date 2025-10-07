import React, { useState } from "react";
import {
  Search,
  Edit3,
  Filter,
  Download,
  Plus,
  Mail,
  Phone,
  Building,
  Shield,
  BarChart3,
  Package,
  Bell,
  FileText,
  ArrowUp,
  ArrowDown,
  TrendingUp,
  ChevronRight,
  Users,
  Zap,
  Wrench,
  Settings,
  ClipboardCheck,
  FileBarChart,
  UserCheck
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout"; 

const Home = () => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Card data with navigation paths
  const cardData = [
    {
      id: 1,
      title: "SDO Grid",
      value: "42",
      change: "+12%",
      isPositive: true,
      icon: <Zap className="w-5 h-5" />,
      color: "bg-blue-500",
      path: "/sdo"
    },
    {
      id: 2,
      title: "Lineman Grid",
      value: "28",
      change: "+5%",
      isPositive: true,
      icon: <Wrench className="w-5 h-5" />,
      color: "bg-green-500",
      path: "/lineman"
    },
    {
      id: 3,
      title: "ETG Grid",
      value: "15",
      change: "-3%",
      isPositive: false,
      icon: <Settings className="w-5 h-5" />,
      color: "bg-amber-500",
      path: "/etg"
    },
    {
      id: 4,
      title: "CES Grid",
      value: "37",
      change: "+23%",
      isPositive: true,
      icon: <ClipboardCheck className="w-5 h-5" />,
      color: "bg-purple-500",
      path: "/ces"
    },
    {
      id: 5,
      title: "CES Audit",
      value: "19",
      change: "+8%",
      isPositive: true,
      icon: <FileBarChart className="w-5 h-5" />,
      color: "bg-red-500",
      path: "/ces-audit"
    },
    {
      id: 6,
      title: "Users",
      value: "24",
      change: "+15%",
      isPositive: true,
      icon: <Users className="w-5 h-5" />,
      color: "bg-indigo-500",
      path: "/users"
    },
    {
      id: 7,
      title: "Reports",
      value: "56",
      change: "+32%",
      isPositive: true,
      icon: <FileText className="w-5 h-5" />,
      color: "bg-teal-500",
      path: "/report"
    },
  ];

  // Static data for charts
  const gridPerformanceData = [
    { month: "Jan", sdo: 65, lineman: 45, etg: 35, ces: 55 },
    { month: "Feb", sdo: 78, lineman: 52, etg: 40, ces: 60 },
    { month: "Mar", sdo: 90, lineman: 65, etg: 48, ces: 72 },
    { month: "Apr", sdo: 81, lineman: 58, etg: 42, ces: 65 },
    { month: "May", sdo: 56, lineman: 40, etg: 30, ces: 45 },
    { month: "Jun", sdo: 55, lineman: 38, etg: 28, ces: 42 },
  ];

  const auditStatusData = [
    { status: "Completed", value: 65, color: "bg-green-500" },
    { status: "In Progress", value: 20, color: "bg-blue-500" },
    { status: "Pending", value: 10, color: "bg-amber-500" },
    { status: "Rejected", value: 5, color: "bg-red-500" }
  ];

  const userDistributionData = [
    { role: "Admin", value: 15, color: "bg-blue-500" },
    { role: "Manager", value: 25, color: "bg-green-500" },
    { role: "Supervisor", value: 30, color: "bg-amber-500" },
    { role: "Field Staff", value: 30, color: "bg-purple-500" }
  ];

  const reportTypesData = [
    { type: "Performance", value: 35, color: "bg-indigo-500" },
    { type: "Maintenance", value: 25, color: "bg-teal-500" },
    { type: "Audit", value: 20, color: "bg-amber-500" },
    { type: "Inventory", value: 15, color: "bg-blue-500" },
    { type: "Other", value: 5, color: "bg-gray-500" }
  ];

  // Function to handle card click
  const handleCardClick = (path) => {
    navigate(path);
  };

  // Multi Series Bar Chart Component
  const MultiBarChart = ({ data, title, height = 300 }) => {
    const allValues = data.flatMap(item => [item.sdo, item.lineman, item.etg, item.ces]);
    const maxValue = Math.max(...allValues);
    
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
        <div className="flex items-end justify-between h-48 gap-2">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div className="flex items-end justify-center h-40 gap-1 w-full">
                <div
                  className="w-1/4 bg-blue-500 rounded-t hover:bg-blue-600 transition-colors"
                  style={{ height: `${(item.sdo / maxValue) * 100}%` }}
                  title={`SDO: ${item.sdo}`}
                />
                <div
                  className="w-1/4 bg-green-500 rounded-t hover:bg-green-600 transition-colors"
                  style={{ height: `${(item.lineman / maxValue) * 100}%` }}
                  title={`Lineman: ${item.lineman}`}
                />
                <div
                  className="w-1/4 bg-amber-500 rounded-t hover:bg-amber-600 transition-colors"
                  style={{ height: `${(item.etg / maxValue) * 100}%` }}
                  title={`ETG: ${item.etg}`}
                />
                <div
                  className="w-1/4 bg-purple-500 rounded-t hover:bg-purple-600 transition-colors"
                  style={{ height: `${(item.ces / maxValue) * 100}%` }}
                  title={`CES: ${item.ces}`}
                />
              </div>
              <div className="text-xs text-gray-500 mt-2">{item.month}</div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4 gap-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded mr-1"></div>
            <span className="text-xs text-gray-600">SDO Grid</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded mr-1"></div>
            <span className="text-xs text-gray-600">Lineman Grid</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-amber-500 rounded mr-1"></div>
            <span className="text-xs text-gray-600">ETG Grid</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-purple-500 rounded mr-1"></div>
            <span className="text-xs text-gray-600">CES Grid</span>
          </div>
        </div>
      </div>
    );
  };

  // Pie Chart Component
  const PieChart = ({ data, title }) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="relative w-40 h-40 mb-4 md:mb-0">
            {data.map((item, index, array) => {
              const percentage = (item.value / total) * 100;
              const prevPercentage = array.slice(0, index).reduce((sum, i) => sum + (i.value / total) * 100, 0);
              
              return (
                <div
                  key={index}
                  className="absolute top-0 left-0 w-full h-full"
                  style={{
                    clipPath: `conic-gradient(from ${prevPercentage * 3.6}deg, ${item.color} 0%, ${item.color} ${percentage * 3.6}deg, transparent ${percentage * 3.6}deg)`
                  }}
                />
              );
            })}
          </div>
          <div className="ml-0 md:ml-6 space-y-2">
            {data.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${item.color} mr-2`} />
                <span className="text-sm text-gray-600">
                  {item.status || item.role || item.type}: {item.value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Simple Line Chart Component
  const LineChart = ({ data, title }) => {
    const maxValue = Math.max(...data.map(item => 
      Math.max(item.sdo, item.lineman, item.etg, item.ces)
    ));
    
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
        <div className="h-64 relative">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* SDO Grid Line */}
            <polyline
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
              points={data.map((item, index) => {
                const x = (index / (data.length - 1)) * 100;
                const y = 100 - (item.sdo / maxValue) * 100;
                return `${x},${y}`;
              }).join(' ')}
            />
            {/* Lineman Grid Line */}
            <polyline
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              points={data.map((item, index) => {
                const x = (index / (data.length - 1)) * 100;
                const y = 100 - (item.lineman / maxValue) * 100;
                return `${x},${y}`;
              }).join(' ')}
            />
            {/* ETG Grid Line */}
            <polyline
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2"
              points={data.map((item, index) => {
                const x = (index / (data.length - 1)) * 100;
                const y = 100 - (item.etg / maxValue) * 100;
                return `${x},${y}`;
              }).join(' ')}
            />
            {/* ces Grid Line */}
            <polyline
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="2"
              points={data.map((item, index) => {
                const x = (index / (data.length - 1)) * 100;
                const y = 100 - (item.ces / maxValue) * 100;
                return `${x},${y}`;
              }).join(' ')}
            />
          </svg>
          <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500">
            {data.map((item, index) => (
              <div key={index}>{item.month}</div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4 gap-4 flex-wrap">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded mr-1"></div>
            <span className="text-xs text-gray-600">SDO Grid</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded mr-1"></div>
            <span className="text-xs text-gray-600">Lineman Grid</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-amber-500 rounded mr-1"></div>
            <span className="text-xs text-gray-600">ETG Grid</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-purple-500 rounded mr-1"></div>
            <span className="text-xs text-gray-600">CES Grid</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout>
      {/* Dashboard Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
        <div>
          <h1 className="text-lg sm:text-3xl font-semibold text-gray-900 mb-1">
            Dashboard
          </h1>
          {/* <p className="text-sm text-gray-600">Power Grid Management Overview</p> */}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4 mb-8">
        {cardData.map((card) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card.path)}
            className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer hover:border-blue-300 group"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-medium text-gray-600 mb-1">
                  {card.title}
                </p>
                <h3 className="text-xl font-bold text-gray-900">
                  {card.value}
                </h3>
                <p className={`text-xs mt-1 ${card.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                  {card.isPositive ? <ArrowUp className="inline w-3 h-3" /> : <ArrowDown className="inline w-3 h-3" />}
                  {card.change}
                </p>
              </div>
              <div
                className={`p-2 rounded-full ${card.color} bg-opacity-10 text-${card.color.split('-')[1]}-500 group-hover:bg-opacity-20 transition-all`}
              >
                {card.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <MultiBarChart data={gridPerformanceData} title="Grid Performance Overview" />
        <PieChart data={auditStatusData} title="CES Audit Status" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <LineChart data={gridPerformanceData} title="Grid Performance Trend" />
        <PieChart data={userDistributionData} title="User Distribution" />
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Grid Activities</h3>
        <div className="space-y-3">
          {[
            { action: "SDO Grid maintenance completed", user: "Vinit Yadav", time: "2 hours ago", color: "bg-blue-100 text-blue-800" },
            { action: "Lineman Grid inspection scheduled", user: "Sarah Johnson", time: "5 hours ago", color: "bg-green-100 text-green-800" },
            { action: "ETG Grid update", user: "Michael Chen", time: "1 day ago", color: "bg-amber-100 text-amber-800" },
            { action: "CES Grid audit initiated", user: "System", time: "2 days ago", color: "bg-purple-100 text-purple-800" },
            { action: "CES Audit report generated", user: "Audit Team", time: "3 days ago", color: "bg-red-100 text-red-800" },
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${activity.color} mr-3`}>
                  {activity.action.split(' ')[0]}
                </span>
                <div>
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">By {activity.user}</p>
                </div>
              </div>
              <span className="text-xs text-gray-400">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;