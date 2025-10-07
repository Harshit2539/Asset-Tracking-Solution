import React, { useState } from "react";
import { X, Search, Filter, Download, Eye, ChevronDown, User, Clock, Calendar, MapPin, AlertCircle } from "lucide-react";
import Layout from "../components/Layout";

const LinemanGrid = () => {
  const [selectedInspection, setSelectedInspection] = useState("10001");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const inspections = [
    { 
      id: "10001", 
      fl: "FL-201", 
      description: "Transformer Maintenance Check", 
      object: "T-501", 
      action: "Observation", 
      inspectedBy: "Rajesh Kumar", 
      date: "2023-10-15", 
      time: "14:30", 
      status: "Assigned", 
      responsibility: "O & M Team",
      priority: "High"
    },
    { 
      id: "10002", 
      fl: "FL-105", 
      description: "Circuit Breaker Inspection", 
      object: "CB-208", 
      action: "Observation", 
      inspectedBy: "Vikram Singh", 
      date: "2023-10-14", 
      time: "10:15", 
      status: "In Progress", 
      responsibility: "ETG Team",
      priority: "Medium"
    },
    { 
      id: "10003", 
      fl: "FL-309", 
      description: "Panel Voltage Testing", 
      object: "PNL-401", 
      action: "Observation", 
      inspectedBy: "Anita Desai", 
      date: "2023-10-13", 
      time: "09:45", 
      status: "Completed", 
      responsibility: "O & M Team",
      priority: "Low"
    },
    { 
      id: "10004", 
      fl: "FL-412", 
      description: "Cable Insulation Check", 
      object: "CBL-305", 
      action: "Observation", 
      inspectedBy: "Sanjay Patel", 
      date: "2023-10-12", 
      time: "16:20", 
      status: "Assigned", 
      responsibility: "ETG Team",
      priority: "High"
    },
    { 
      id: "10005", 
      fl: "FL-218", 
      description: "Grounding System Verification", 
      object: "GRD-102", 
      action: "Observation", 
      inspectedBy: "Priya Sharma", 
      date: "2023-10-11", 
      time: "11:30", 
      status: "Pending Review", 
      responsibility: "O & M Team",
      priority: "Medium"
    },
    { 
      id: "10006", 
      fl: "FL-501", 
      description: "Safety Equipment Audit", 
      object: "SAF-006", 
      action: "Observation", 
      inspectedBy: "Amit Verma", 
      date: "2023-10-10", 
      time: "13:45", 
      status: "Assigned", 
      responsibility: "ETG Team",
      priority: "High"
    },
  ];

  const statusColors = {
    "Assigned": "bg-blue-100 text-blue-800 border border-blue-200",
    "In Progress": "bg-amber-100 text-amber-800 border border-amber-200",
    "Completed": "bg-green-100 text-green-800 border border-green-200",
    "Pending Review": "bg-purple-100 text-purple-800 border border-purple-200"
  };

  const priorityColors = {
    "High": "bg-red-100 text-red-800",
    "Medium": "bg-yellow-100 text-yellow-800",
    "Low": "bg-green-100 text-green-800"
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Lineman Grid - Attended Inspections
                </h1>
                {/* <p className="text-gray-600 text-sm">
                  Manage and track inspection assignments for field linemen
                </p> */}
              </div>
              <div className="flex items-center mt-4 md:mt-0 space-x-3">
                <button className="flex items-center justify-center gap-2 px-4 py-2 text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg transition-colors font-medium text-sm shadow-sm">
                  <Download size={16} />
                  Export Report
                </button>
              </div>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search inspections by ID, description, or object..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
                />
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  >
                    <option value="all">All Status</option>
                    <option value="Assigned">Assigned</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                    <option value="Pending Review">Pending Review</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ChevronDown size={16} />
                  </div>
                </div>
                <button className="flex items-center justify-center gap-2 px-4 py-2 text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors font-medium text-sm">
                  <Filter size={16} />
                  Advanced Filters
                </button>
              </div>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Inspections</p>
                  <h3 className="text-2xl font-bold text-gray-900">24</h3>
                </div>
                <div className="p-2 bg-blue-100 rounded-lg">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
              </div>
              <p className="text-xs text-green-600 mt-2">+12% from last week</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Assigned</p>
                  <h3 className="text-2xl font-bold text-gray-900">8</h3>
                </div>
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Clock className="w-5 h-5 text-amber-600" />
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-2">33% of total</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">In Progress</p>
                  <h3 className="text-2xl font-bold text-gray-900">5</h3>
                </div>
                <div className="p-2 bg-green-100 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-green-600" />
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-2">21% of total</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Completed</p>
                  <h3 className="text-2xl font-bold text-gray-900">11</h3>
                </div>
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Calendar className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-2">46% of total</p>
            </div>
          </div>

          {/* Table Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    {[
                      "Inspection No.",
                      "Functional Location",
                      "Description",
                      "Object",
                      "Action",
                      "Inspected by",
                      "Date",
                      "Time",
                      "Status",
                      "Priority",
                      "Responsibility",
                      
                    ].map((col, idx) => (
                      <th
                        key={idx}
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200"
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {inspections.map((row, idx) => (
                    <tr 
                      key={idx} 
                      className={`hover:bg-gray-50 transition-colors ${selectedInspection === row.id ? 'bg-blue-50' : ''}`}
                      onClick={() => setSelectedInspection(row.id)}
                    >
                      <td className="px-4 py-3 font-medium text-blue-600 cursor-pointer">
                        {row.id}
                      </td>
                      <td className="px-4 py-3">
                        {row.fl && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            {row.fl}
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-gray-700 max-w-xs truncate">{row.description}</td>
                      <td className="px-4 py-3 text-gray-700">{row.object}</td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {row.action}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-700">{row.inspectedBy}</td>
                      <td className="px-4 py-3 text-gray-700">{row.date}</td>
                      <td className="px-4 py-3 text-gray-700">{row.time}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[row.status]}`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${priorityColors[row.priority]}`}>
                          {row.priority}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <select className="w-full px-2 py-1 text-sm border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                          <option value="">Select</option>
                          <option value="om" selected={row.responsibility === "O & M Team"}>O & M Team</option>
                          <option value="etg" selected={row.responsibility === "ETG Team"}>ETG Team</option>
                        </select>
                      </td>
                      {/* <td className="px-4 py-3">
                        <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors">
                          <Eye size={16} />
                        </button>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Inspection Details Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Inspection Details
              </h3>
              {selectedInspection && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Selected: {selectedInspection}
                </span>
              )}
            </div>
            
            {selectedInspection ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                      <User className="w-4 h-4 mr-2 text-blue-600" />
                      Inspector Information
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Inspector:</span>
                        <span className="text-sm font-medium text-gray-900">Rajesh Kumar</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Employee ID:</span>
                        <span className="text-sm font-medium text-gray-900">EMP-42015</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Department:</span>
                        <span className="text-sm font-medium text-gray-900">Field Operations</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-green-600" />
                      Location Details
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Functional Location:</span>
                        <span className="text-sm font-medium text-gray-900">FL-201</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Area:</span>
                        <span className="text-sm font-medium text-gray-900">Substation A, Zone 2</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Grid Section:</span>
                        <span className="text-sm font-medium text-gray-900">North-West</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-2 text-amber-600" />
                      Equipment & Status
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Equipment:</span>
                        <span className="text-sm font-medium text-gray-900">Transformer T-501</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Priority:</span>
                        <span className="text-sm font-medium text-gray-900">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            High
                          </span>
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Status:</span>
                        <span className="text-sm font-medium text-gray-900">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            Assigned
                          </span>
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Due Date:</span>
                        <span className="text-sm font-medium text-gray-900">2023-10-20</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-purple-600" />
                      Timeline
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Scheduled:</span>
                        <span className="text-sm font-medium text-gray-900">2023-10-15</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Assigned To:</span>
                        <span className="text-sm font-medium text-gray-900">Lineman Team B</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Estimated Duration:</span>
                        <span className="text-sm font-medium text-gray-900">3 hours</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-8 min-h-32 flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
                <Eye className="w-8 h-8 text-gray-400 mb-2" />
                <p className="text-gray-500 text-center text-sm">
                  Select an inspection from the table above to view detailed information
                </p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-3">
            <button className="flex items-center justify-center gap-2 px-6 py-3 text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors font-medium shadow-sm">
              <X size={16} />
              Close
            </button>
            {/* <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm">
              Save Changes
            </button> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LinemanGrid;