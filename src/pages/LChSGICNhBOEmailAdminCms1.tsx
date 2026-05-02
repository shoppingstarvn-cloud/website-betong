import React from 'react';

export default function LChSGICNhBOEmailAdminCms1() {
  return (
    <div>
      {/* SideNavBar Component */}
<nav className="bg-slate-900 dark:bg-black fixed left-0 top-0 h-screen w-64 border-r border-slate-800 flex flex-col h-full py-6 z-50 font-['Inter'] text-sm font-medium">
<div className="px-6 mb-8 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-primary-fixed flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-on-primary-fixed" data-icon="domain">domain</span>
</div>
<div>
<h1 className="text-white font-bold text-xl leading-none">Concrete Corp</h1>
<span className="text-slate-400 text-xs">Material CMS</span>
</div>
</div>
<div className="flex-1 flex flex-col gap-1 px-2">
<a className="text-slate-400 hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-slate-800 transition-all duration-200 group rounded" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>Dashboard</span>
</a>
<a className="text-slate-400 hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-slate-800 transition-all duration-200 group rounded" href="#">
<span className="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
<span>Audit Logs</span>
</a>
<a className="text-slate-400 hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-slate-800 transition-all duration-200 group rounded" href="#">
<span className="material-symbols-outlined" data-icon="group">group</span>
<span>Users</span>
</a>
{/* Active Tab */}
<a className="bg-slate-800 text-orange-500 border-r-4 border-orange-500 px-4 py-3 flex items-center gap-3 group transition-all rounded-l" href="#">
<span className="material-symbols-outlined" data-icon="mail">mail</span>
<span>Email Alerts</span>
</a>
</div>
<div className="px-2 mt-auto flex flex-col gap-1 border-t border-slate-800 pt-4">
<a className="text-slate-400 hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-slate-800 transition-all duration-200 group rounded" href="#">
<span className="material-symbols-outlined" data-icon="help">help</span>
<span>Support</span>
</a>
<a className="text-slate-400 hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-slate-800 transition-all duration-200 group rounded" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span>Sign Out</span>
</a>
</div>
</nav>
{/* Main Content Area */}
<div className="flex-1 flex flex-col ml-64 min-h-screen">
{/* TopNavBar Component */}
<header className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 font-['Inter'] antialiased text-sm tracking-tight flex items-center justify-between px-6 h-16 w-full docked full-width top-0 z-40 border-b border-slate-200 dark:border-slate-800 sticky">
<div className="flex items-center gap-4 w-1/3">
<div className="relative w-full max-w-md">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" data-icon="search">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded focus:ring-1 focus:ring-orange-500 outline-none text-sm" placeholder="Search..." type="text"/>
</div>
</div>
<div className="flex items-center justify-center">
<span className="text-lg font-black tracking-tighter text-slate-900 dark:text-white uppercase">MaterialAdmin</span>
</div>
<div className="flex items-center justify-end gap-2 w-1/3">
<button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors rounded-full cursor-pointer active:opacity-80 transition-opacity">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors rounded-full cursor-pointer active:opacity-80 transition-opacity">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<div className="w-8 h-8 ml-2 rounded-full bg-slate-300 overflow-hidden cursor-pointer">
<img alt="Administrator Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl_v2r-IwLsN2ewq8I1amoqQJeEMRCkUm05wVK8DjWkQbfmQ8m1LEN0EpndqR34ju9HTpqH74DS2jdKoLkKVKvn_IZ5EWBOVIxQQpsPJdMI4yJs8pXpqRwiZzfuNy05tOxWE2gJ22DKnXxjAlwlXmO4kBYi7Pdq8ZMKyIgeH7s95E5_VprpSa3kFjXP1H2ZyIO6kolQ6ZBGM4BaFUT25jJXfeD4ZkKp47kHaEEAvAWL5ZjQSTya5rbUvquSNC0yN-dBmDL9whorYZN"/>
</div>
</div>
</header>
{/* Page Content Canvas */}
<main className="flex-1 p-margin overflow-y-auto">
<div className="max-w-[max_width] mx-auto">
{/* Header Section */}
<div className="mb-xl">
<h2 className="font-headline-md text-headline-md text-on-surface">Lịch sử Gửi Cảnh báo Email</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-xs max-w-2xl">Theo dõi danh sách các thông báo email tự động đã được gửi từ hệ thống. Quản lý trạng thái và rà soát lỗi truyền dẫn.</p>
</div>
{/* Filter Bar (Level 1 Element) */}
<div className="bg-surface-container-lowest border border-outline-variant p-md rounded flex flex-wrap items-end gap-gutter mb-lg">
<div className="flex-1 min-w-[200px]">
<label className="block font-label-bold text-label-bold text-on-surface-variant mb-xs">TÌM KIẾM</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</span>
<input className="w-full pl-10 pr-3 py-2 border border-outline-variant rounded bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none font-body-sm text-body-sm" placeholder="Người nhận hoặc tiêu đề..." type="text"/>
</div>
</div>
<div className="w-48">
<label className="block font-label-bold text-label-bold text-on-surface-variant mb-xs">TỪ NGÀY</label>
<input className="w-full px-3 py-2 border border-outline-variant rounded bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none font-body-sm text-body-sm" type="date"/>
</div>
<div className="w-48">
<label className="block font-label-bold text-label-bold text-on-surface-variant mb-xs">ĐẾN NGÀY</label>
<input className="w-full px-3 py-2 border border-outline-variant rounded bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none font-body-sm text-body-sm" type="date"/>
</div>
<div className="w-48">
<label className="block font-label-bold text-label-bold text-on-surface-variant mb-xs">TRẠNG THÁI</label>
<select className="w-full px-3 py-2 border border-outline-variant rounded bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none font-body-sm text-body-sm appearance-none">
<option value="all">Tất cả (All)</option>
<option value="success">Thành công (Success)</option>
<option value="failed">Thất bại (Failed)</option>
</select>
</div>
<button className="bg-primary hover:bg-on-primary-fixed text-on-primary px-6 py-2 rounded font-label-bold text-label-bold transition-colors h-[42px] flex items-center justify-center">
                        LỌC DỮ LIỆU
                    </button>
</div>
{/* Data Table Container */}
<div className="bg-surface-container-lowest border border-outline-variant rounded overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-primary text-on-primary border-b border-primary h-[48px]">
<th className="px-md py-sm font-label-bold text-label-bold w-48">TIMESTAMP</th>
<th className="px-md py-sm font-label-bold text-label-bold">RECIPIENT EMAIL</th>
<th className="px-md py-sm font-label-bold text-label-bold">ALERT SUBJECT</th>
<th className="px-md py-sm font-label-bold text-label-bold w-48">TRIGGER TYPE</th>
<th className="px-md py-sm font-label-bold text-label-bold w-32">STATUS</th>
<th className="px-md py-sm font-label-bold text-label-bold w-24 text-center">ACTIONS</th>
</tr>
</thead>
<tbody className="font-table-data text-table-data text-on-surface">
<tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors group">
<td className="px-md py-sm text-on-surface-variant text-xs">2023-10-27 14:32:01</td>
<td className="px-md py-sm">admin.ops@concretecorp.com</td>
<td className="px-md py-sm font-medium">Lỗi vượt ngưỡng 10% - Kho NVL A</td>
<td className="px-md py-sm text-on-surface-variant">Error Threshold</td>
<td className="px-md py-sm">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-secondary-container text-on-secondary-container text-[11px] font-bold uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Success
                                        </span>
</td>
<td className="px-md py-sm text-center">
<button className="text-on-surface-variant hover:text-on-tertiary-container transition-colors" title="View Content">
<span className="material-symbols-outlined text-[20px]" data-icon="visibility">visibility</span>
</button>
</td>
</tr>
<tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors group">
<td className="px-md py-sm text-on-surface-variant text-xs">2023-10-27 08:00:00</td>
<td className="px-md py-sm">management@concretecorp.com</td>
<td className="px-md py-sm font-medium">Báo cáo ngày: Sản lượng ca đêm</td>
<td className="px-md py-sm text-on-surface-variant">Scheduled Report</td>
<td className="px-md py-sm">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-secondary-container text-on-secondary-container text-[11px] font-bold uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Success
                                        </span>
</td>
<td className="px-md py-sm text-center">
<button className="text-on-surface-variant hover:text-on-tertiary-container transition-colors" title="View Content">
<span className="material-symbols-outlined text-[20px]" data-icon="visibility">visibility</span>
</button>
</td>
</tr>
<tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors group">
<td className="px-md py-sm text-on-surface-variant text-xs">2023-10-26 23:15:44</td>
<td className="px-md py-sm">it.support@concretecorp.com</td>
<td className="px-md py-sm font-medium">Cảnh báo: Mất kết nối trạm trộn #3</td>
<td className="px-md py-sm text-on-surface-variant">System Alert</td>
<td className="px-md py-sm">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-error-container text-on-error-container text-[11px] font-bold uppercase tracking-wider border border-error-container">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span> Failed
                                        </span>
</td>
<td className="px-md py-sm text-center">
<button className="text-on-surface-variant hover:text-on-tertiary-container transition-colors" title="View Content">
<span className="material-symbols-outlined text-[20px]" data-icon="visibility">visibility</span>
</button>
</td>
</tr>
<tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors group">
<td className="px-md py-sm text-on-surface-variant text-xs">2023-10-26 15:45:12</td>
<td className="px-md py-sm">qa.lead@concretecorp.com</td>
<td className="px-md py-sm font-medium">Yêu cầu duyệt mẫu mẻ trộn X-992</td>
<td className="px-md py-sm text-on-surface-variant">Workflow Action</td>
<td className="px-md py-sm">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-secondary-container text-on-secondary-container text-[11px] font-bold uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Success
                                        </span>
</td>
<td className="px-md py-sm text-center">
<button className="text-on-surface-variant hover:text-on-tertiary-container transition-colors" title="View Content">
<span className="material-symbols-outlined text-[20px]" data-icon="visibility">visibility</span>
</button>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-md py-sm text-on-surface-variant text-xs">2023-10-26 10:05:00</td>
<td className="px-md py-sm">finance.dept@concretecorp.com</td>
<td className="px-md py-sm font-medium">Báo cáo chênh lệch chi phí vận chuyển</td>
<td className="px-md py-sm text-on-surface-variant">Scheduled Report</td>
<td className="px-md py-sm">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-secondary-container text-on-secondary-container text-[11px] font-bold uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Success
                                        </span>
</td>
<td className="px-md py-sm text-center">
<button className="text-on-surface-variant hover:text-on-tertiary-container transition-colors" title="View Content">
<span className="material-symbols-outlined text-[20px]" data-icon="visibility">visibility</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
{/* Pagination (Slide Indicators Style) */}
<div className="bg-surface-container border-t border-outline-variant px-md py-sm flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">Showing 1 to 5 of 128 entries</span>
<div className="flex items-center gap-4">
<button className="text-on-surface-variant hover:text-primary transition-colors flex items-center cursor-pointer disabled:opacity-50" disabled="">
<span className="material-symbols-outlined text-[20px]" data-icon="chevron_left">chevron_left</span>
</button>
<div className="flex gap-base items-center h-full">
<div className="w-lg h-base bg-on-tertiary-container cursor-pointer transition-colors" title="Page 1"></div>
<div className="w-lg h-base bg-surface-variant hover:bg-outline-variant cursor-pointer transition-colors" title="Page 2"></div>
<div className="w-lg h-base bg-surface-variant hover:bg-outline-variant cursor-pointer transition-colors" title="Page 3"></div>
<div className="w-lg h-base bg-surface-variant hover:bg-outline-variant cursor-pointer transition-colors" title="Page 4"></div>
<div className="w-lg h-base bg-surface-variant hover:bg-outline-variant cursor-pointer transition-colors" title="Page 5"></div>
</div>
<button className="text-on-surface-variant hover:text-primary transition-colors flex items-center cursor-pointer">
<span className="material-symbols-outlined text-[20px]" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
</main>
</div>
    </div>
  );
}
