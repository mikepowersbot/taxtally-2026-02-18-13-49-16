import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Clock, CheckCircle, AlertCircle, TrendingUp, DollarSign, Calendar, Activity } from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Filings",
      value: "24",
      change: "+3 this month",
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Pending Actions",
      value: "5",
      change: "2 due this week",
      icon: Clock,
      color: "text-amber-600",
      bgColor: "bg-amber-100"
    },
    {
      title: "Completed",
      value: "18",
      change: "+4 this month",
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Total Refunds",
      value: "$12,450",
      change: "+$2,100",
      icon: DollarSign,
      color: "text-emerald-600",
      bgColor: "bg-emerald-100"
    }
  ];

  const recentActivity = [
    { action: "Filed Q4 2025 Sales Tax", date: "2 days ago", status: "completed" },
    { action: "Submitted 1099 Forms", date: "1 week ago", status: "completed" },
    { action: "Payroll Tax Payment Due", date: "3 days ago", status: "pending" },
    { action: "Quarterly Estimate Payment", date: "Feb 15, 2026", status: "upcoming" },
    { action: "Annual Return Filed", date: "Jan 30, 2026", status: "completed" }
  ];

  const upcomingDeadlines = [
    { task: "Q1 2026 Estimated Tax", date: "Apr 15, 2026", daysLeft: 57 },
    { task: "1096 Annual Summary", date: "Mar 31, 2026", daysLeft: 41 },
    { task: "W-2 Distribution", date: "Jan 31, 2026", daysLeft: 13 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-2 text-gray-600">Welcome back! Here&apos;s your tax overview.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-full ${stat.bgColor}`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <p className="text-xs text-gray-500">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Recent Activity */}
          <Card className="lg:col-span-2 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
                <Activity className="w-5 h-5 mr-2 text-blue-600" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-full ${
                        item.status === 'completed' ? 'bg-green-100' :
                        item.status === 'pending' ? 'bg-amber-100' : 'bg-blue-100'
                      }`}>
                        {item.status === 'completed' ? (
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        ) : item.status === 'pending' ? (
                          <Clock className="w-4 h-4 text-amber-600" />
                        ) : (
                          <Calendar className="w-4 h-4 text-blue-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{item.action}</p>
                        <p className="text-sm text-gray-500">{item.date}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      item.status === 'completed' ? 'bg-green-100 text-green-700' :
                      item.status === 'pending' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Deadlines */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
                <AlertCircle className="w-5 h-5 mr-2 text-red-600" />
                Upcoming Deadlines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingDeadlines.map((deadline, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-medium text-gray-900 text-sm">{deadline.task}</p>
                      <span className={`text-xs font-semibold px-2 py-1 rounded ${
                        deadline.daysLeft < 30 ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                        {deadline.daysLeft} days
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{deadline.date}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          deadline.daysLeft < 30 ? 'bg-red-500' : 'bg-amber-500'
                        }`}
                        style={{ width: `${Math.max(0, 100 - (deadline.daysLeft * 2))}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="shadow-sm mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-900">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg text-center transition-colors group">
                <FileText className="w-8 h-8 mx-auto mb-2 text-blue-600 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-gray-900">New Filing</span>
              </button>
              <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg text-center transition-colors group">
                <DollarSign className="w-8 h-8 mx-auto mb-2 text-green-600 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-gray-900">Make Payment</span>
              </button>
              <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg text-center transition-colors group">
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-purple-600 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-gray-900">View Reports</span>
              </button>
              <button className="p-4 bg-amber-50 hover:bg-amber-100 rounded-lg text-center transition-colors group">
                <Calendar className="w-8 h-8 mx-auto mb-2 text-amber-600 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-gray-900">Schedule</span>
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Tax Health Score */}
        <Card className="shadow-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center">
              <TrendingUp className="w-6 h-6 mr-2" />
              Tax Health Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-5xl font-bold mb-2">85</p>
                <p className="text-blue-100">Your tax compliance is in good standing</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-blue-100 mb-1">Improve to 90+</p>
                <div className="w-32 h-32 relative">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      strokeDasharray="85, 100"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold">85%</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}