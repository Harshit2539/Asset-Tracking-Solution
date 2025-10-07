import React, { useState } from "react";
import { 
  Search, 
  Filter, 
  Download, 
  BarChart3, 
  PieChart, 
  Calendar,
  ChevronDown,
  ChevronUp,
  X,
  FileText,
  TrendingUp,
  CheckCircle,
  Clock,
  AlertCircle,
  Building,
  MapPin,
  User
} from "lucide-react";
import Layout from "../components/Layout";

const Reports = () => {
  const [activeTab, setActiveTab] = useState('tracking');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [expandedRows, setExpandedRows] = useState(new Set());

  const toggleRow = (id) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedRows(newExpanded);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 p-4 md:p-6">
        <div className="max-w-8xl mx-auto">
          {/* Header Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Reports & Analytics
                </h1>
                {/* <p className="text-gray-600 text-sm">
                  Comprehensive asset tracking and summary reports
                </p> */}
              </div>
              <div className="flex items-center mt-4 md:mt-0 space-x-3">
                <button className="flex items-center justify-center gap-2 px-4 py-2 text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg transition-colors font-medium text-sm shadow-sm">
                  <Download size={16} />
                  Export All Reports
                </button>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-col sm:flex-row gap-2 mb-6">
            <button
              onClick={() => setActiveTab('tracking')}
              className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition-colors font-medium text-sm ${
                activeTab === 'tracking'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              <FileText size={16} />
              Asset Tracking
            </button>
            <button
              onClick={() => setActiveTab('summary')}
              className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition-colors font-medium text-sm ${
                activeTab === 'summary'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              <BarChart3 size={16} />
              Summary Report
            </button>
          </div>

          {/* Asset Tracking Report */}
          <div className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden ${activeTab === 'tracking' ? 'block' : 'hidden'}`}>
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-3">
                    <FileText size={24} />
                    Asset Tracking Report
                  </h2>
                  {/* <p className="text-blue-100 text-sm mt-1">
                    Comprehensive asset monitoring and inspection tracking
                  </p> */}
                </div>
                <div className="flex items-center mt-4 md:mt-0 space-x-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-100">
                    <TrendingUp size={12} className="mr-1" />
                    Updated today
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6">
              {/* Filters Section */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <Filter size={18} />
                    Search Filters
                  </h3>
                  <button
                    onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
                    className="md:hidden text-gray-500 hover:text-gray-700"
                  >
                    {isMobileFiltersOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>

                <div className={`space-y-4 ${isMobileFiltersOpen ? 'block' : 'hidden md:block'}`}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Functional Location
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter location"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Circle
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter circle"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Division
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter division"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Sub Division
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter sub division"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Site Visit Date
                      </label>
                      <input
                        type="date"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Status
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {[
                          { label: "New", color: "blue" },
                          { label: "WIP", color: "yellow" },
                          { label: "Attended", color: "purple" },
                          { label: "Closed", color: "gray" },
                          { label: "Audit Complete", color: "green" },
                        ].map((status, i) => (
                          <span
                            key={i}
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium cursor-pointer transition-colors
                              bg-${status.color}-100 text-${status.color}-800 border border-${status.color}-200 hover:bg-${status.color}-200`}
                          >
                            {status.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row justify-end gap-3 pt-2">
                    <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium text-sm">
                      Clear Filters
                    </button>
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                      Apply Filters
                    </button>
                  </div>
                </div>
              </div>

              {/* Table Section */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Inspection No.</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Functional Location</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Inspected By</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {[...Array(6)].map((_, row) => (
                        <React.Fragment key={row}>
                          <tr className="hover:bg-gray-50 transition-colors cursor-pointer" onClick={() => toggleRow(row)}>
                            <td className="px-4 py-3 font-medium text-blue-600">ATR-{String(row + 1).padStart(3, "0")}</td>
                            <td className="px-4 py-3">FL-{row + 1}</td>
                            <td className="px-4 py-3 max-w-xs truncate">Description {row + 1}</td>
                            <td className="px-4 py-3">Inspector {row + 1}</td>
                            <td className="px-4 py-3">{new Date().toLocaleDateString()}</td>
                            <td className="px-4 py-3">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                New
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <button className="text-gray-400 hover:text-blue-600 transition-colors">
                                {expandedRows.has(row) ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                              </button>
                            </td>
                          </tr>
                          {expandedRows.has(row) && (
                            <tr className="bg-blue-50">
                              <td colSpan={7} className="px-4 py-3">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                                  <div>
                                    <h4 className="font-medium text-gray-700 mb-2">Object Details</h4>
                                    <p className="text-gray-600">Object {row + 1}</p>
                                  </div>
                                  <div>
                                    <h4 className="font-medium text-gray-700 mb-2">Time</h4>
                                    <p className="text-gray-600">{new Date().toLocaleTimeString()}</p>
                                  </div>
                                  <div>
                                    <h4 className="font-medium text-gray-700 mb-2">Closed By</h4>
                                    <p className="text-gray-600">Manager {row + 1}</p>
                                  </div>
                                  <div>
                                    <h4 className="font-medium text-gray-700 mb-2">Audit Status</h4>
                                    <p className="text-gray-600">Pending</p>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Table Footer */}
              <div className="mt-4 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-600">
                <span>Showing 6 of 247 tracking records</span>
                <div className="flex gap-2">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                    Export CSV
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                    Export PDF
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Report */}
          <div className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden ${activeTab === 'summary' ? 'block' : 'hidden'}`}>
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-3">
                    <BarChart3 size={24} />
                    Summary Report
                  </h2>
                  {/* <p className="text-emerald-100 text-sm mt-1">
                    Executive dashboard with key performance indicators
                  </p> */}
                </div>
                <div className="flex items-center mt-4 md:mt-0 space-x-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-100">
                    <Clock size={12} className="mr-1" />
                    Real-time data
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6">
              {/* Stats Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
                {[
                  { label: "Total New", value: 47, color: "blue", icon: FileText },
                  { label: "Work in Progress", value: 23, color: "yellow", icon: Clock },
                  { label: "Action Taken", value: 65, color: "purple", icon: TrendingUp },
                  { label: "Closed", value: 89, color: "gray", icon: CheckCircle },
                  { label: "Audit Complete", value: 142, color: "green", icon: BarChart3 },
                ].map((item, i) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={i} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <div className={`p-2 rounded-lg bg-${item.color}-100`}>
                          <IconComponent className={`w-4 h-4 text-${item.color}-600`} />
                        </div>
                        <span className={`text-2xl font-bold text-${item.color}-600`}>{item.value}</span>
                      </div>
                      <p className="text-sm font-medium text-gray-700">{item.label}</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div
                          className={`h-2 rounded-full bg-${item.color}-600`}
                          style={{ width: `${(item.value / 142) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Summary Table */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">New</th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">WIP</th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Action Taken</th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Closed</th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Audit Complete</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {[
                        { name: "Division 1", data: [12, 5, 18, 25, 32] },
                        { name: "Division 2", data: [8, 3, 12, 18, 28] },
                        { name: "Division 3", data: [15, 7, 20, 22, 35] },
                        { name: "Division 4", data: [12, 8, 15, 24, 47] },
                      ].map((division, i) => (
                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                          <td className="px-4 py-3 font-medium text-gray-900">{division.name}</td>
                          {division.data.map((value, col) => (
                            <td key={col} className="px-4 py-3 text-center">
                              <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-medium ${
                                col === 0 ? "bg-blue-100 text-blue-800" :
                                col === 1 ? "bg-yellow-100 text-yellow-800" :
                                col === 2 ? "bg-purple-100 text-purple-800" :
                                col === 3 ? "bg-gray-100 text-gray-800" :
                                "bg-green-100 text-green-800"
                              }`}>
                                {value}
                              </span>
                            </td>
                          ))}
                        </tr>
                      ))}
                      <tr className="bg-gray-50 font-semibold border-t-2 border-gray-300">
                        <td className="px-4 py-3 text-gray-800">Total</td>
                        <td className="px-4 py-3 text-center text-blue-600 font-bold">47</td>
                        <td className="px-4 py-3 text-center text-yellow-600 font-bold">23</td>
                        <td className="px-4 py-3 text-center text-purple-600 font-bold">65</td>
                        <td className="px-4 py-3 text-center text-gray-600 font-bold">89</td>
                        <td className="px-4 py-3 text-center text-green-600 font-bold">142</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Summary Footer */}
              <div className="mt-4 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-600">
                <span className="flex items-center gap-2">
                  <Clock size={16} className="text-gray-400" />
                  Last updated: {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
                </span>
                <button className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium text-sm">
                  Generate Executive Summary
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Reports;