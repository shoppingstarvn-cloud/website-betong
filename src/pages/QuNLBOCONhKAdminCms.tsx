import React from 'react';

export default function QuNLBOCONhKAdminCms() {
  return (
    <div>
      {/* TopNavBar */}
<nav className="flex justify-between items-center px-8 py-3 w-full sticky top-0 z-50 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 font-['Inter'] antialiased tracking-tight">
<div className="flex items-center gap-8">
<span className="text-xl font-black uppercase tracking-wider text-slate-900 dark:text-white">Industrial Admin</span>
<div className="hidden md:flex items-center gap-6">
<a className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-700 transition-colors" href="#">Dashboard</a>
<a className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-700 transition-colors" href="#">Analytics</a>
<a className="text-slate-900 dark:text-white font-bold border-b-2 border-[#1A2B3C] pb-1" href="#">Reports</a>
<a className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-700 transition-colors" href="#">Logs</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<input className="bg-surface-container border-none text-body-sm px-4 py-2 rounded-lg w-64 focus:ring-2 focus:ring-primary-container" placeholder="Search..." type="text"/>
<span className="material-symbols-outlined absolute right-3 top-2 text-on-surface-variant" data-icon="search">search</span>
</div>
<button className="p-2 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors rounded-full">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="p-2 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors rounded-full">
<span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
</button>
<div className="w-8 h-8 rounded-full overflow-hidden border border-slate-200">
<img alt="Administrator Profile" className="w-full h-full object-cover" data-alt="Close-up portrait of a professional male administrator in a clean office setting, soft professional lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0uCh2gYbgybCwcQ7TigOPxUXru65K8X4Xcxaaw2xXhxahe7RfGu_fRvZRI3Y_WbPCOzGLtX4CDD6UM3fdiKJDwEve5WvfExLVgDhJTalzSJPmhEvq-Q2H7SNWxcb5-Ueq-l0SgpOJVUYa3TaE9i4PfGcvMx3t5CdfOiymvHCV3i9srcObsID-CcVhGDpw_XDgbRqM7VWM0K4TCmCIrZOd9_vjIXDMQK6k1hTiipVt4hz8ihmARfYJfsX5a3si5ylOdvljDXWPsMir"/>
</div>
</div>
</nav>
<div className="flex">
{/* SideNavBar */}
<aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col py-6 font-['Inter'] text-sm font-semibold">
<div className="px-6 mb-8">
<div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
<div className="w-10 h-10 rounded bg-primary-container flex items-center justify-center text-white">
<span className="material-symbols-outlined" data-icon="precision_manufacturing">precision_manufacturing</span>
</div>
<div>
<p className="text-[#1A2B3C] dark:text-white font-bold">Project Alpha</p>
<p className="text-xs text-slate-500">Site Lead Access</p>
</div>
</div>
</div>
<div className="flex-1 space-y-1">
<a className="flex items-center gap-3 px-6 py-3 text-slate-600 dark:text-slate-400 border-l-4 border-transparent hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all duration-150" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>Overview</span>
</a>
<a className="flex items-center gap-3 px-6 py-3 text-slate-600 dark:text-slate-400 border-l-4 border-transparent hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all duration-150" href="#">
<span className="material-symbols-outlined" data-icon="precision_manufacturing">precision_manufacturing</span>
<span>Materials</span>
</a>
<a className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-slate-800 text-[#1A2B3C] dark:text-white border-l-4 border-[#1A2B3C] shadow-sm transition-all duration-150" href="#">
<span className="material-symbols-outlined" data-icon="pending_actions">pending_actions</span>
<span>Scheduled Reports</span>
</a>
<a className="flex items-center gap-3 px-6 py-3 text-slate-600 dark:text-slate-400 border-l-4 border-transparent hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all duration-150" href="#">
<span className="material-symbols-outlined" data-icon="badge">badge</span>
<span>Team</span>
</a>
<a className="flex items-center gap-3 px-6 py-3 text-slate-600 dark:text-slate-400 border-l-4 border-transparent hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all duration-150" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span>Configuration</span>
</a>
</div>
<div className="mt-auto px-6 pt-6 border-t border-slate-200 dark:border-slate-800">
<button className="w-full flex items-center justify-center gap-2 bg-on-tertiary-container text-white py-3 rounded-lg font-bold hover:opacity-90 transition-opacity mb-4">
<span className="material-symbols-outlined" data-icon="add">add</span>
<span>New Report</span>
</button>
<a className="flex items-center gap-3 py-3 text-slate-600 dark:text-slate-400 hover:text-error transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span>Logout</span>
</a>
</div>
</aside>
{/* Main Content Canvas */}
<main className="ml-64 flex-1 p-8 min-h-screen">
<header className="flex justify-between items-end mb-10">
<div>
<h1 className="text-headline-md font-headline-md text-primary mb-2">Báo cáo Định kỳ</h1>
<p className="text-body-md text-on-surface-variant">Quản lý và thiết lập lịch trình tự động gửi báo cáo hệ thống.</p>
</div>
<button className="bg-primary text-on-primary px-6 py-3 rounded flex items-center gap-2 font-bold hover:bg-primary-container transition-colors shadow-sm">
<span className="material-symbols-outlined" data-icon="add_circle">add_circle</span>
<span>+ Tạo Lịch mới</span>
</button>
</header>
{/* KPI Cards Section */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-xl">
{/* KPI 1 */}
<div className="bg-white border border-outline-variant/30 p-6 flex flex-col gap-2">
<div className="flex justify-between items-start">
<span className="text-label-bold font-label-bold text-on-primary-container uppercase">Tổng lịch trình hoạt động</span>
<span className="material-symbols-outlined text-[#1A2B3C]" data-icon="schedule">schedule</span>
</div>
<div className="text-display-lg font-display-lg text-primary">24</div>
<div className="flex items-center gap-2 text-body-sm text-green-600">
<span className="material-symbols-outlined text-sm" data-icon="trending_up">trending_up</span>
<span>+2 so với tháng trước</span>
</div>
</div>
{/* KPI 2 */}
<div className="bg-white border border-outline-variant/30 p-6 flex flex-col gap-2">
<div className="flex justify-between items-start">
<span className="text-label-bold font-label-bold text-on-primary-container uppercase">Báo cáo đã gửi (30 ngày)</span>
<span className="material-symbols-outlined text-[#1A2B3C]" data-icon="mail">mail</span>
</div>
<div className="text-display-lg font-display-lg text-primary">1,402</div>
<div className="flex items-center gap-2 text-body-sm text-on-secondary-container">
<span className="material-symbols-outlined text-sm" data-icon="check_circle">check_circle</span>
<span>Tỷ lệ thành công 99.8%</span>
</div>
</div>
{/* KPI 3 */}
<div className="bg-white border border-outline-variant/30 p-6 flex flex-col gap-2">
<div className="flex justify-between items-start">
<span className="text-label-bold font-label-bold text-on-primary-container uppercase">Lần gửi dự kiến tiếp theo</span>
<span className="material-symbols-outlined text-[#1A2B3C]" data-icon="event">event</span>
</div>
<div className="text-display-lg font-display-lg text-primary">08:00</div>
<div className="flex items-center gap-2 text-body-sm text-on-tertiary-container">
<span className="material-symbols-outlined text-sm" data-icon="timer">timer</span>
<span>Còn lại 14 giờ 20 phút</span>
</div>
</div>
</section>
{/* Data Table Section */}
<section className="bg-white border border-outline-variant/30 overflow-hidden">
<div className="bg-[#F5F7F9] px-6 py-4 border-b border-outline-variant/30 flex justify-between items-center">
<h2 className="text-headline-sm font-headline-sm text-primary">Danh sách Lịch trình</h2>
<div className="flex gap-2">
<button className="p-2 border border-outline-variant bg-white hover:bg-slate-50 transition-colors">
<span className="material-symbols-outlined" data-icon="filter_list">filter_list</span>
</button>
<button className="p-2 border border-outline-variant bg-white hover:bg-slate-50 transition-colors">
<span className="material-symbols-outlined" data-icon="download">download</span>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full border-collapse text-left">
<thead>
<tr className="bg-primary text-white">
<th className="px-6 py-4 text-label-bold font-label-bold uppercase tracking-wider">Tên báo cáo</th>
<th className="px-6 py-4 text-label-bold font-label-bold uppercase tracking-wider">Loại</th>
<th className="px-6 py-4 text-label-bold font-label-bold uppercase tracking-wider">Tần suất</th>
<th className="px-6 py-4 text-label-bold font-label-bold uppercase tracking-wider">Người nhận</th>
<th className="px-6 py-4 text-label-bold font-label-bold uppercase tracking-wider">Định dạng</th>
<th className="px-6 py-4 text-label-bold font-label-bold uppercase tracking-wider">Trạng thái</th>
<th className="px-6 py-4 text-label-bold font-label-bold uppercase tracking-wider text-right">Thao tác</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200">
{/* Row 1 */}
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4">
<div className="font-table-data text-table-data text-primary">Báo cáo So sánh Vật liệu</div>
<div className="text-xs text-on-surface-variant">Mã: RPT-2024-001</div>
</td>
<td className="px-6 py-4 text-table-data text-on-surface">Monthly Comparison</td>
<td className="px-6 py-4 text-table-data text-on-surface">Hàng tháng (Ngày 01)</td>
<td className="px-6 py-4 text-table-data text-on-surface">6 Nhân sự</td>
<td className="px-6 py-4">
<span className="bg-red-50 text-red-700 px-2 py-1 text-xs font-bold rounded">PDF</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-10 h-5 bg-green-500 rounded-full relative p-1 cursor-pointer">
<div className="w-3 h-3 bg-white rounded-full absolute right-1"></div>
</div>
<span className="text-xs font-bold text-green-600">Active</span>
</div>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-2">
<button className="p-1 text-on-tertiary-container hover:bg-orange-50 transition-colors" title="Gửi ngay">
<span className="material-symbols-outlined" data-icon="send">send</span>
</button>
<button className="p-1 text-[#1A2B3C] hover:bg-slate-100 transition-colors" title="Sửa">
<span className="material-symbols-outlined" data-icon="edit">edit</span>
</button>
<button className="p-1 text-error hover:bg-red-50 transition-colors" title="Xóa">
<span className="material-symbols-outlined" data-icon="delete">delete</span>
</button>
</div>
</td>
</tr>
{/* Row 2 */}
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4">
<div className="font-table-data text-table-data text-primary">Hiệu suất Đội ngũ Dự án</div>
<div className="text-xs text-on-surface-variant">Mã: RPT-2024-002</div>
</td>
<td className="px-6 py-4 text-table-data text-on-surface">Year Over Year</td>
<td className="px-6 py-4 text-table-data text-on-surface">Hàng tuần (Thứ 2)</td>
<td className="px-6 py-4 text-table-data text-on-surface">Ban Quản lý</td>
<td className="px-6 py-4">
<span className="bg-green-50 text-green-700 px-2 py-1 text-xs font-bold rounded">EXCEL</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-10 h-5 bg-slate-300 rounded-full relative p-1 cursor-pointer">
<div className="w-3 h-3 bg-white rounded-full absolute left-1"></div>
</div>
<span className="text-xs font-bold text-slate-500">Inactive</span>
</div>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-2">
<button className="p-1 text-on-tertiary-container hover:bg-orange-50 transition-colors" title="Gửi ngay">
<span className="material-symbols-outlined" data-icon="send">send</span>
</button>
<button className="p-1 text-[#1A2B3C] hover:bg-slate-100 transition-colors" title="Sửa">
<span className="material-symbols-outlined" data-icon="edit">edit</span>
</button>
<button className="p-1 text-error hover:bg-red-50 transition-colors" title="Xóa">
<span className="material-symbols-outlined" data-icon="delete">delete</span>
</button>
</div>
</td>
</tr>
{/* Row 3 */}
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4">
<div className="font-table-data text-table-data text-primary">Nhật ký Kho bãi Daily</div>
<div className="text-xs text-on-surface-variant">Mã: RPT-2024-005</div>
</td>
<td className="px-6 py-4 text-table-data text-on-surface">Logs Analysis</td>
<td className="px-6 py-4 text-table-data text-on-surface">Hàng ngày</td>
<td className="px-6 py-4 text-table-data text-on-surface">Admin</td>
<td className="px-6 py-4">
<span className="bg-red-50 text-red-700 px-2 py-1 text-xs font-bold rounded">PDF</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-10 h-5 bg-green-500 rounded-full relative p-1 cursor-pointer">
<div className="w-3 h-3 bg-white rounded-full absolute right-1"></div>
</div>
<span className="text-xs font-bold text-green-600">Active</span>
</div>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-2">
<button className="p-1 text-on-tertiary-container hover:bg-orange-50 transition-colors" title="Gửi ngay">
<span className="material-symbols-outlined" data-icon="send">send</span>
</button>
<button className="p-1 text-[#1A2B3C] hover:bg-slate-100 transition-colors" title="Sửa">
<span className="material-symbols-outlined" data-icon="edit">edit</span>
</button>
<button className="p-1 text-error hover:bg-red-50 transition-colors" title="Xóa">
<span className="material-symbols-outlined" data-icon="delete">delete</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-4 bg-white border-t border-slate-200 flex justify-between items-center">
<span className="text-body-sm text-on-surface-variant">Hiển thị 3 trong tổng số 24 lịch trình</span>
<div className="flex gap-1 items-center">
<button className="p-2 text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
</button>
<div className="flex gap-2 mx-4">
<div className="w-8 h-1 bg-on-tertiary-container"></div>
<div className="w-8 h-1 bg-slate-200"></div>
<div className="w-8 h-1 bg-slate-200"></div>
</div>
<button className="p-2 text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</section>
</main>
</div>
    </div>
  );
}
