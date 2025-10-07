import React, { useState } from "react";
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  ChevronDown, 
  User, 
  Calendar, 
  Clock, 
  FileText, 
  Shield, 
  CheckCircle, 
  AlertCircle,
  BarChart3,
  TrendingUp,
  ClipboardCheck,
  Target,
  AlertTriangle
} from "lucide-react";
import Layout from "../components/Layout";

const CESAudit = () => {
  const [selectedInspection, setSelectedInspection] = useState("10001");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const inspections = [
    { 
      id: "10001", 
      fl: "FL-CES-001", 
      description: "Environmental Control System", 
      object: "CES/ENV/CTRL", 
      action: "ADD", 
      inspectedBy: "A. Johnson", 
      date: "28/08/2025", 
      time: "14:30", 
      status: "To be Audit", 
      responsibility: "O & M Team",
      priority: "High",
      compliance: "Pending Audit"
    },
    { 
      id: "10002", 
      fl: "FL-CES-002", 
      description: "Safety Equipment Check", 
      object: "CES/SAF/EQP", 
      action: "UPDATE", 
      inspectedBy: "M. Davis", 
      date: "27/08/2025", 
      time: "11:15", 
      status: "To be Audit", 
      responsibility: "ETG Team",
      priority: "Medium",
      compliance: "Pending Audit"
    },
    { 
      id: "10003", 
      fl: "FL-CES-003", 
      description: "Compliance Documentation", 
      object: "CES/DOC/COMP", 
      action: "FOUND OK", 
      inspectedBy: "R. Wilson", 
      date: "26/08/2025", 
      time: "09:45", 
      status: "To be Audit", 
      responsibility: "O & M Team",
      priority: "High",
      compliance: "Pending Audit"
    },
    { 
      id: "10004", 
      fl: "FL-CES-004", 
      description: "Audit Trail Review", 
      object: "CES/AUD/TRL", 
      action: "Observations", 
      inspectedBy: "S. Brown", 
      date: "25/08/2025", 
      time: "16:20", 
      status: "To be Audit", 
      responsibility: "ETG Team",
      priority: "Medium",
      compliance: "Pending Audit"
    },
    { 
      id: "10005", 
      fl: "FL-CES-005", 
      description: "Waste Management System", 
      object: "CES/WST/MGT", 
      action: "", 
      inspectedBy: "", 
      date: "", 
      time: "", 
      status: "To be Audit", 
      responsibility: "",
      priority: "Low",
      compliance: "Pending Audit"
    },
    { 
      id: "10006", 
      fl: "FL-CES-006", 
      description: "Emission Control Unit", 
      object: "CES/EMI/CTRL", 
      action: "", 
      inspectedBy: "", 
      date: "", 
      time: "", 
      status: "To be Audit", 
      responsibility: "",
      priority: "High",
      compliance: "Pending Audit"
    },
    { 
      id: "10007", 
      fl: "FL-CES-007", 
      description: "Safety Training Records", 
      object: "CES/TRN/REC", 
      action: "", 
      inspectedBy: "", 
      date: "", 
      time: "", 
      status: "To be Audit", 
      responsibility: "",
      priority: "Medium",
      compliance: "Pending Audit"
    },
  ];

  const statusColors = {
    "To be Audit": "bg-blue-100 text-blue-800 border border-blue-200",
    "Audit Complete": "bg-green-100 text-green-800 border border-green-200",
    "In Progress": "bg-amber-100 text-amber-800 border border-amber-200"
  };

  const priorityColors = {
    "High": "bg-red-100 text-red-800",
    "Medium": "bg-yellow-100 text-yellow-800",
    "Low": "bg-blue-100 text-blue-800"
  };

  const complianceColors = {
    "Pending Audit": "bg-gray-100 text-gray-800",
    "Fully Compliant": "bg-green-100 text-green-800",
    "Partially Compliant": "bg-amber-100 text-amber-800",
    "Non-Compliant": "bg-red-100 text-red-800"
  };

  const actionColors = {
    "ADD": "bg-blue-100 text-blue-800",
    "UPDATE": "bg-amber-100 text-amber-800",
    "FOUND OK": "bg-green-100 text-green-800",
    "Observations": "bg-purple-100 text-purple-800"
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
                  CES - Audit Complete
                </h1>
                {/* <p className="text-gray-600 text-sm">
                  Compliance & Environmental Safety Audit Management
                </p> */}
              </div>
              <div className="flex items-center mt-4 md:mt-0 space-x-3">
                <button className="flex items-center justify-center gap-2 px-4 py-2 text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg transition-colors font-medium text-sm shadow-sm">
                  <Download size={16} />
                  Export Audit Report
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
                  placeholder="Search audits by ID, description, or compliance status..."
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
                    <option value="To be Audit">To be Audit</option>
                    <option value="Audit Complete">Audit Complete</option>
                    <option value="In Progress">In Progress</option>
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
                  <p className="text-sm font-medium text-gray-600">Total Audits</p>
                  <h3 className="text-2xl font-bold text-gray-900">24</h3>
                </div>
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
              </div>
              <p className="text-xs text-green-600 mt-2">+15% from last quarter</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">To be Audited</p>
                  <h3 className="text-2xl font-bold text-gray-900">16</h3>
                </div>
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Target className="w-5 h-5 text-amber-600" />
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-2">67% pending audit</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">High Priority</p>
                  <h3 className="text-2xl font-bold text-gray-900">8</h3>
                </div>
                <div className="p-2 bg-red-100 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-2">33% require urgent attention</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Completion Rate</p>
                  <h3 className="text-2xl font-bold text-gray-900">72%</h3>
                </div>
                <div className="p-2 bg-green-100 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
              </div>
              <p className="text-xs text-green-600 mt-2">+8% from last month</p>
            </div>
          </div>

          {/* Table Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <tr>
                    {[
                      "Inspection No.",
                      "Functional Location",
                      "Description",
                      "Object",
                      "Action",
                      "Inspected By",
                      "Date",
                      "Time",
                      "Status",
                      "Priority",
                      "Compliance",
                      "Responsibility",
                     
                    ].map((col, idx) => (
                      <th
                        key={idx}
                        className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider border-r border-blue-500/30"
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
                      className={`hover:bg-gray-50 transition-colors ${selectedInspection === row.id ? 'bg-blue-50' : ''} ${idx % 2 === 0 ? "bg-white" : "bg-gray-25"}`}
                      onClick={() => setSelectedInspection(row.id)}
                    >
                      <td className="px-4 py-3 font-medium text-blue-700 cursor-pointer">
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
                        {row.action && (
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${actionColors[row.action]}`}>
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
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${priorityColors[row.priority]}`}>
                          {row.priority}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${complianceColors[row.compliance]}`}>
                          {row.compliance}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <select className="w-full px-2 py-1 text-sm border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                          <option value="">Select</option>
                          <option value="om" selected={row.responsibility === "O & M Team"}>O & M Team</option>
                          <option value="etg" selected={row.responsibility === "ETG Team"}>ETG Team</option>
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
                Audit Inspection Details
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
                        <span className="text-sm font-medium text-gray-900">A. Johnson</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Certification:</span>
                        <span className="text-sm font-medium text-gray-900">CES-Auditor-L3</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Department:</span>
                        <span className="text-sm font-medium text-gray-900">Compliance & Safety</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                      <FileText className="w-4 h-4 mr-2 text-green-600" />
                      Audit Status
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Current Status:</span>
                        <span className="text-sm font-medium text-gray-900">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            To be Audit
                          </span>
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Scheduled Date:</span>
                        <span className="text-sm font-medium text-gray-900">28/08/2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Priority:</span>
                        <span className="text-sm font-medium text-gray-900">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            High
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                      <Shield className="w-4 h-4 mr-2 text-amber-600" />
                      Audit Requirements
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Checklist Items:</span>
                        <span className="text-sm font-medium text-gray-900">24 Items</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Documents Required:</span>
                        <span className="text-sm font-medium text-gray-900">8 Files</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Risk Assessment:</span>
                        <span className="text-sm font-medium text-gray-900">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            Medium Risk
                          </span>
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Regulatory Standard:</span>
                        <span className="text-sm font-medium text-gray-900">ISO 14001:2015</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-purple-600" />
                      Timeline
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Created:</span>
                        <span className="text-sm font-medium text-gray-900">15/08/2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Due Date:</span>
                        <span className="text-sm font-medium text-gray-900">30/08/2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Estimated Duration:</span>
                        <span className="text-sm font-medium text-gray-900">2 days</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-8 min-h-32 flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
                <ClipboardCheck className="w-8 h-8 text-gray-400 mb-2" />
                <p className="text-gray-500 text-center text-sm">
                  Select an audit item from the table above to view detailed compliance information
                </p>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500 flex items-center gap-2">
              <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
              Audit Status: 4 of 7 items ready for audit
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex items-center justify-center gap-2 px-6 py-3 text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors font-medium shadow-sm">
                Close
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CESAudit;