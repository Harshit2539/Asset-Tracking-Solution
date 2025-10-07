import React, { useState } from "react";
import { X, Search, Filter, Download, Plus, ChevronDown, Eye } from "lucide-react";
import Layout from "../components/Layout";

const SDOGrid = () => {
  const [selectedInspection, setSelectedInspection] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const inspections = [
    { id: "10001", fl: "FL 1", description: "Transformer Inspection", object: "T-101", action: "Observations", inspectedBy: "John Doe", date: "2023-10-15", time: "14:30", status: "New", lineman: "", responsibility: "" },
    { id: "10002", fl: "FL 2", description: "Circuit Breaker Check", object: "CB-205", action: "", inspectedBy: "Mike Johnson", date: "2023-10-14", time: "10:15", status: "In Progress", lineman: "John Smith", responsibility: "O & M Team" },
    { id: "10003", fl: "FL 3", description: "Panel Maintenance", object: "PNL-301", action: "", inspectedBy: "Sarah Wilson", date: "2023-10-13", time: "09:45", status: "Completed", lineman: "David Wilson", responsibility: "ETG Team" },
    { id: "10004", fl: "FL 4", description: "Cable Inspection", object: "CBL-402", action: "", inspectedBy: "Robert Brown", date: "2023-10-12", time: "16:20", status: "New", lineman: "", responsibility: "" },
    { id: "10005", fl: "FL 1", description: "Voltage Test", object: "VT-105", action: "", inspectedBy: "Emily Davis", date: "2023-10-11", time: "11:30", status: "New", lineman: "", responsibility: "" },
    { id: "10006", fl: "", description: "Safety Audit", object: "SA-006", action: "", inspectedBy: "James Miller", date: "2023-10-10", time: "13:45", status: "On Hold", lineman: "", responsibility: "" },
    { id: "10007", fl: "FL 1", description: "Grounding Check", object: "GC-107", action: "", inspectedBy: "Lisa Anderson", date: "2023-10-09", time: "15:00", status: "New", lineman: "", responsibility: "" },
  ];

  const filteredInspections = inspections.filter(inspection => {
    const matchesSearch = inspection.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inspection.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inspection.object.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || inspection.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const statusColors = {
    "New": "bg-blue-100 text-blue-800",
    "In Progress": "bg-amber-100 text-amber-800",
    "Completed": "bg-emerald-100 text-emerald-800",
    "On Hold": "bg-red-100 text-red-800"
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
                  SDO Grid - Assign Observations
                </h1>
                {/* <p className="text-gray-600 text-sm">
                  Manage and assign inspection observations to linemen
                </p> */}
              </div>
              <div className="flex items-center mt-4 md:mt-0 space-x-3">
                {/* <button className="flex items-center justify-center gap-2 px-4 py-2 text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg transition-colors font-medium text-sm shadow-sm">
                  <Plus size={16} />
                  New Inspection
                </button> */}
                <button className="flex items-center justify-center gap-2 px-4 py-2 text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors font-medium text-sm shadow-sm">
                  <Download size={16} />
                  Export
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
                  placeholder="Search inspections..."
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
                    <option value="New">New</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                    <option value="On Hold">On Hold</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ChevronDown size={16} />
                  </div>
                </div>
                <button className="flex items-center justify-center gap-2 px-4 py-2 text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors font-medium text-sm">
                  <Filter size={16} />
                  More Filters
                </button>
              </div>
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
                      "Lineman",
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
                  {filteredInspections.map((row, idx) => (
                    <tr 
                      key={idx} 
                      className={`hover:bg-gray-50 transition-colors ${selectedInspection === row.id ? 'bg-blue-50' : ''}`}
                      onClick={() => setSelectedInspection(row.id)}
                    >
                      <td className="px-4 py-3 font-medium text-gray-900">{row.id}</td>
                      <td className="px-4 py-3">
                        {row.fl && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {row.fl}
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-gray-700">{row.description}</td>
                      <td className="px-4 py-3 text-gray-700">{row.object}</td>
                      <td className="px-4 py-3">
                        {row.action && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                            {row.action}
                          </span>
                        )}
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
                        <select 
                          className="w-full px-2 py-1 text-sm border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          value={row.lineman}
                          onChange={(e) => {}}
                        >
                          <option value="">Select Lineman</option>
                          <option value="John Smith">John Smith</option>
                          <option value="Mike Johnson">Mike Johnson</option>
                          <option value="David Wilson">David Wilson</option>
                        </select>
                      </td>
                      <td className="px-4 py-3">
                        <select 
                          className="w-full px-2 py-1 text-sm border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          value={row.responsibility}
                          onChange={(e) => {}}
                        >
                          <option value="">Select Team</option>
                          <option value="O & M Team">O & M Team</option>
                          <option value="ETG Team">ETG Team</option>
                        </select>
                      </td>
                     
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
            <div className={`rounded-lg p-6 min-h-32 ${selectedInspection ? 'bg-white border border-gray-200' : 'bg-gray-50 border-2 border-dashed border-gray-300 flex items-center justify-center'}`}>
              {selectedInspection ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Inspection Information</h4>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600"><span className="font-medium">ID:</span> {selectedInspection}</p>
                      <p className="text-sm text-gray-600"><span className="font-medium">Date:</span> 2023-10-15</p>
                      <p className="text-sm text-gray-600"><span className="font-medium">Time:</span> 14:30</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Assignment Details</h4>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600"><span className="font-medium">Status:</span> <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">New</span></p>
                      <p className="text-sm text-gray-600"><span className="font-medium">Priority:</span> Medium</p>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500 text-center text-sm">
                  Select an inspection from the table above to view detailed information
                </p>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-3">
            <button className="flex items-center justify-center gap-2 px-6 py-3 text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors font-medium shadow-sm">
              <X size={16} />
              Cancel
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

export default SDOGrid;