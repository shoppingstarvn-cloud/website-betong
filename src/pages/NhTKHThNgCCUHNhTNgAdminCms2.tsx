import React from 'react';

export default function NhTKHThNgCCUHNhTNgAdminCms2() {
  return (
    <div>
      {/* SideNavBar */}
<nav className="w-64 h-screen border-r fixed left-0 top-0 z-50 border-slate-200 dark:border-slate-800 shadow-none bg-[#F5F7F9] dark:bg-slate-900 flex flex-col h-full py-6">
<div className="px-4 mb-8">
<h1 className="text-lg font-bold text-[#1A2B3C] dark:text-white mb-1">System Console</h1>
<p className="font-['Inter'] text-xs font-medium text-slate-500">Audit Management v2.4</p>
</div>
<div className="flex-1 flex flex-col gap-1 px-2">
<a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 px-4 py-3 font-['Inter'] text-xs font-medium hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-[#1A2B3C] transition-all transition-transform duration-150 active:scale-95 rounded" href="#">
<span className="material-symbols-outlined">dashboard</span>
                Overview
            </a>
<a className="flex items-center gap-3 bg-white dark:bg-slate-800 text-orange-600 dark:text-orange-400 border-r-4 border-orange-600 px-4 py-3 shadow-sm font-['Inter'] text-xs font-medium hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-[#1A2B3C] transition-all transition-transform duration-150 active:scale-95 rounded" href="#">
<span className="material-symbols-outlined">list_alt</span>
                System Logs
            </a>
<a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 px-4 py-3 font-['Inter'] text-xs font-medium hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-[#1A2B3C] transition-all transition-transform duration-150 active:scale-95 rounded" href="#">
<span className="material-symbols-outlined">verified_user</span>
                Access History
            </a>
<a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 px-4 py-3 font-['Inter'] text-xs font-medium hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-[#1A2B3C] transition-all transition-transform duration-150 active:scale-95 rounded" href="#">
<span className="material-symbols-outlined">settings_input_component</span>
                Configurations
            </a>
<a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 px-4 py-3 font-['Inter'] text-xs font-medium hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-[#1A2B3C] transition-all transition-transform duration-150 active:scale-95 rounded" href="#">
<span className="material-symbols-outlined">inventory_2</span>
                Archives
            </a>
</div>
<div className="mt-auto px-2 flex flex-col gap-1">
<a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 px-4 py-3 font-['Inter'] text-xs font-medium hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-[#1A2B3C] transition-all transition-transform duration-150 active:scale-95 rounded" href="#">
<span className="material-symbols-outlined">help_outline</span>
                Support
            </a>
<a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 px-4 py-3 font-['Inter'] text-xs font-medium hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-[#1A2B3C] transition-all transition-transform duration-150 active:scale-95 rounded" href="#">
<span className="material-symbols-outlined">logout</span>
                Logout
            </a>
</div>
</nav>
<div className="ml-64 flex-1 flex flex-col">
{/* TopAppBar */}
<header className="docked full-width top-0 border-b z-40 border-slate-200 dark:border-slate-800 shadow-none bg-white dark:bg-slate-950 flex justify-between items-center w-full px-8 h-16">
<div className="flex items-center gap-8">
<span className="text-xl font-black text-[#1A2B3C] dark:text-white uppercase tracking-wider">AuditShield</span>
<nav className="hidden md:flex gap-6 font-['Inter'] text-sm tracking-tight">
<a className="text-slate-500 dark:text-slate-400 hover:text-[#1A2B3C] dark:hover:text-white transition-colors duration-200 cursor-pointer active:opacity-70" href="#">Dashboard</a>
<a className="text-orange-600 dark:text-orange-400 border-b-2 border-orange-600 dark:border-orange-400 pb-1 hover:text-[#1A2B3C] dark:hover:text-white transition-colors duration-200 cursor-pointer active:opacity-70" href="#">Logs</a>
<a className="text-slate-500 dark:text-slate-400 hover:text-[#1A2B3C] dark:hover:text-white transition-colors duration-200 cursor-pointer active:opacity-70" href="#">Reports</a>
<a className="text-slate-500 dark:text-slate-400 hover:text-[#1A2B3C] dark:hover:text-white transition-colors duration-200 cursor-pointer active:opacity-70" href="#">Security</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
<input className="pl-9 pr-4 py-1.5 rounded border border-slate-200 bg-[#F5F7F9] text-sm focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all w-64 text-[#1A2B3C]" placeholder="Search logs..." type="text"/>
</div>
<button className="text-[#1A2B3C] dark:text-slate-100 hover:text-[#1A2B3C] dark:hover:text-white transition-colors duration-200 cursor-pointer active:opacity-70">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="text-[#1A2B3C] dark:text-slate-100 hover:text-[#1A2B3C] dark:hover:text-white transition-colors duration-200 cursor-pointer active:opacity-70">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="w-8 h-8 rounded-full bg-slate-300 overflow-hidden border border-slate-200">
<img alt="Administrator Profile" className="w-full h-full object-cover" data-alt="Administrator Profile avatar icon with initials" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrrSnYjMG2LjkL116RYoe7upc9UJB2jYl6QHBIvnaijevcBmJrHNCzSYhBYgxkzpIR_2M1deto1uRgWhC7M5x8oD91FwX3c7TAK_ecCP7x7W6Smd4GVOyPdLJs3myvgZ3NGfoEITFGdaFdZhaeb_HgTubWghV0nL3RrevwwKcgkAGQqp4iBvG4WzmmZEvwq8yeWaFLbVB-6_XCQwuaEoSQ6RAT9ehx-AjJpuj5KokugHV99MarTEkwLVKR_GZLX47OE-wnpoy3AB34"/>
</div>
</div>
</header>
{/* Main Content Canvas */}
<main className="flex-1 p-margin overflow-y-auto">
<div className="max-w-max_width mx-auto">
{/* Page Header */}
<div className="mb-lg">
<h2 className="font-headline-md text-headline-md text-primary-container mb-2">Nhật ký Hệ thống</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Monitoring real-time system activities and security events.</p>
</div>
{/* Rotation Settings Card */}
<section className="bg-surface-container-lowest border border-outline-variant/30 rounded-DEFAULT mb-lg overflow-hidden">
<div className="bg-[#F5F7F9] px-6 py-4 border-b border-outline-variant/30">
<h3 className="font-headline-sm text-headline-sm text-primary-container flex items-center gap-2">
<span className="material-symbols-outlined text-[20px]">manage_history</span>
                            Cấu hình Tự động Xóa Nhật ký
                        </h3>
</div>
<div className="p-6"><div className="flex items-center gap-3 p-4 mb-6 rounded bg-orange-50 border border-orange-200 text-orange-800">
<span className="material-symbols-outlined text-[20px] text-orange-600">warning</span>
<div className="flex-1">
<p className="font-body-sm text-body-sm font-semibold mb-0.5">Cảnh báo hệ thống</p>
<p className="font-body-sm text-body-sm opacity-90">Dung lượng nhật ký đã đạt giới hạn 500MB. Hệ thống sẽ tự động thực hiện xoay vòng dữ liệu.</p>
</div>
</div>
<form className="grid grid-cols-1 md:grid-cols-3 gap-gutter items-end">
<div className="flex flex-col gap-2">
<label className="font-label-bold text-label-bold text-primary-container uppercase">Auto-Rotation</label>
<div className="flex items-center h-10">
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#eb6a1b]"></div>
<span className="ml-3 font-body-sm text-body-sm text-on-surface-variant">Enabled</span>
</label>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="font-label-bold text-label-bold text-primary-container uppercase">Thời gian lưu trữ</label>
<select className="h-10 px-3 py-2 bg-white border border-[#c4c6cd]/50 text-on-surface text-sm rounded focus:ring-1 focus:ring-primary-container focus:border-primary-container block w-full">
<option>30 days</option>
<option selected="">60 days</option>
<option>90 days</option>
<option>1 year</option>
</select>
</div>
<div className="flex flex-col gap-2">
<label className="font-label-bold text-label-bold text-primary-container uppercase">Giới hạn dung lượng (MB)</label>
<input className="h-10 px-3 py-2 bg-white border border-[#c4c6cd]/50 text-on-surface text-sm rounded focus:ring-1 focus:ring-primary-container focus:border-primary-container block w-full" type="number" value="500"/>
</div>
<div className="md:col-span-3 flex justify-end mt-4">
<button className="bg-[#eb6a1b] hover:bg-[#eb6a1b]/90 text-white font-label-bold text-label-bold py-2.5 px-6 rounded transition-colors shadow-sm flex items-center gap-2" type="button">
<span className="material-symbols-outlined text-[16px]">save</span>
                                    Lưu cấu hình
                                </button>
</div>
</form>
</div>
</section>
{/* Data Table Section */}
<section className="bg-surface-container-lowest border border-outline-variant/30 rounded-DEFAULT">
{/* Table Controls */}
<div className="bg-[#F5F7F9] px-6 py-4 flex justify-between items-center border-b border-outline-variant/30">
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">filter_list</span>
<input className="pl-9 pr-4 py-1.5 rounded border border-[#c4c6cd]/50 bg-white text-sm focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all w-64 text-[#1A2B3C]" placeholder="Filter records..." type="text"/>
</div>
<div className="flex gap-2">
<button className="bg-white border border-outline-variant/50 text-primary-container hover:bg-slate-50 font-label-bold text-label-bold py-1.5 px-4 rounded transition-colors flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px]">download</span>
                                Xuất CSV
                            </button>
<button className="bg-white border border-outline-variant/50 text-primary-container hover:bg-slate-50 font-label-bold text-label-bold py-1.5 px-4 rounded transition-colors flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px]">picture_as_pdf</span>
                                Xuất PDF
                            </button>
<button className="bg-error/10 text-error hover:bg-error/20 font-label-bold text-label-bold py-1.5 px-4 rounded transition-colors flex items-center gap-1.5 ml-2">
<span className="material-symbols-outlined text-[16px]">delete</span>
                                Xóa Nhật ký
                            </button>
</div>
</div>
{/* Table */}
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-primary-container text-white border-b border-outline-variant/30">
<th className="py-3 px-6 font-label-bold text-label-bold uppercase tracking-wider">Timestamp</th>
<th className="py-3 px-6 font-label-bold text-label-bold uppercase tracking-wider">User</th>
<th className="py-3 px-6 font-label-bold text-label-bold uppercase tracking-wider">Action</th>
<th className="py-3 px-6 font-label-bold text-label-bold uppercase tracking-wider">Module</th>
<th className="py-3 px-6 font-label-bold text-label-bold uppercase tracking-wider">IP</th>
<th className="py-3 px-6 font-label-bold text-label-bold uppercase tracking-wider">Status</th>
</tr>
</thead>
<tbody className="font-table-data text-table-data text-on-surface">
<tr className="border-b border-outline-variant/20 hover:bg-slate-50 transition-colors">
<td className="py-3 px-6 text-slate-500 text-sm">2023-10-27 14:32:01</td>
<td className="py-3 px-6">admin@system.local</td>
<td className="py-3 px-6">LOGIN_SUCCESS</td>
<td className="py-3 px-6">Auth</td>
<td className="py-3 px-6 text-slate-500 font-mono text-xs">192.168.1.105</td>
<td className="py-3 px-6">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800">Success</span>
</td>
</tr>
<tr className="border-b border-outline-variant/20 hover:bg-slate-50 transition-colors">
<td className="py-3 px-6 text-slate-500 text-sm">2023-10-27 14:35:12</td>
<td className="py-3 px-6">system_service</td>
<td className="py-3 px-6">CONFIG_UPDATE</td>
<td className="py-3 px-6">Network Settings</td>
<td className="py-3 px-6 text-slate-500 font-mono text-xs">10.0.0.1</td>
<td className="py-3 px-6">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800">Success</span>
</td>
</tr>
<tr className="border-b border-outline-variant/20 hover:bg-slate-50 transition-colors">
<td className="py-3 px-6 text-slate-500 text-sm">2023-10-27 15:01:44</td>
<td className="py-3 px-6">unknown</td>
<td className="py-3 px-6">LOGIN_FAILED</td>
<td className="py-3 px-6">Auth</td>
<td className="py-3 px-6 text-slate-500 font-mono text-xs">45.22.19.102</td>
<td className="py-3 px-6">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-error-container text-on-error-container">Failed</span>
</td>
</tr>
<tr className="border-b border-outline-variant/20 hover:bg-slate-50 transition-colors">
<td className="py-3 px-6 text-slate-500 text-sm">2023-10-27 15:15:20</td>
<td className="py-3 px-6">db_admin</td>
<td className="py-3 px-6">QUERY_EXECUTE</td>
<td className="py-3 px-6">Database</td>
<td className="py-3 px-6 text-slate-500 font-mono text-xs">192.168.1.50</td>
<td className="py-3 px-6">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800">Success</span>
</td>
</tr>
<tr className="hover:bg-slate-50 transition-colors">
<td className="py-3 px-6 text-slate-500 text-sm">2023-10-27 16:00:05</td>
<td className="py-3 px-6">system</td>
<td className="py-3 px-6">AUTO_ROTATION_TRIGGER</td>
<td className="py-3 px-6">Log Manager</td>
<td className="py-3 px-6 text-slate-500 font-mono text-xs">localhost</td>
<td className="py-3 px-6">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-orange-100 text-orange-800">Warning</span>
</td>
</tr>
</tbody>
</table>
</div>
{/* Pagination Bar */}
<div className="px-6 py-4 flex items-center justify-between border-t border-outline-variant/30 bg-white">
<span className="text-sm text-slate-500">Showing 1 to 5 of 2,451 entries</span>
<div className="flex gap-1">
<div className="h-1 w-8 bg-slate-200 cursor-pointer"></div>
<div className="h-1 w-8 bg-[#eb6a1b] cursor-pointer"></div>
<div className="h-1 w-8 bg-slate-200 cursor-pointer"></div>
<div className="h-1 w-8 bg-slate-200 cursor-pointer"></div>
</div>
</div>
</section>
</div>
</main>
</div>
    </div>
  );
}
