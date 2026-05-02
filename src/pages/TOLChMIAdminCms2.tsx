import React from 'react';

export default function TOLChMIAdminCms2() {
  return (
    <div>
      {/* TopNavBar */}
<header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
<div className="flex items-center gap-8">
<span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white uppercase">IndustrialCORE</span>
<nav className="hidden md:flex gap-6 items-center">
<a className="font-inter text-sm font-medium tracking-tight text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 duration-200 ease-in-out" href="#">Projects</a>
<a className="font-inter text-sm font-medium tracking-tight text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 duration-200 ease-in-out" href="#">Logistics</a>
<a className="font-inter text-sm font-medium tracking-tight text-orange-600 dark:text-orange-500 border-b-2 border-orange-600 pb-1 duration-200 ease-in-out" href="#">Analytics</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
<input className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-orange-600" placeholder="Search analytics..." type="text"/>
</div>
<button className="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded transition-colors duration-200">
<span className="material-symbols-outlined text-slate-600 dark:text-slate-400">notifications</span>
</button>
<button className="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded transition-colors duration-200">
<span className="material-symbols-outlined text-slate-600 dark:text-slate-400">settings</span>
</button>
<div className="w-8 h-8 bg-slate-200 rounded-full overflow-hidden border border-slate-300">
<img alt="Manager Profile" data-alt="Professional construction project manager portrait in corporate setting with soft office lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz8DRIPsDTaDxlYRtBuyQ1YJTW33BcIrEDVoNxoqwpLWR2Vs04-culH-9aHSFNYrK4j10Pkxqoio6fr6FAiiayv03EVl9EAz-_XAH5DyIsKVj6-T3eFv1O-9V6ehNt-2NaY0LSDDFMuQtf5it8-JxsM5ErmW2-2PORSLm_DYDpPRlgdfK59K6lT1z5FWkXulqjFylsTZknMSZOBlrBypIAuwd620bYzN18Yrve4L7PX1sXlE4kiZ0fGdpfYqRlmu-2e5QOo9ehAlZO"/>
</div>
</div>
</header>
{/* SideNavBar */}
<aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 flex flex-col z-40 bg-slate-50 dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800">
<div className="p-6">
<div className="flex items-center gap-3 mb-1">
<div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
<span className="material-symbols-outlined text-white text-sm">precision_manufacturing</span>
</div>
<div>
<h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">Operations</h2>
<p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Precision Management</p>
</div>
</div>
</div>
<nav className="flex-1 px-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-3 font-inter text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:pl-2 transition-all duration-150 active:scale-95" href="#">
<span className="material-symbols-outlined">dashboard</span>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-3 font-inter text-xs font-semibold uppercase tracking-widest bg-slate-200 dark:bg-slate-800 text-orange-600 dark:text-orange-400 border-l-4 border-orange-600 hover:pl-2 transition-all duration-150 active:scale-95" href="#">
<span className="material-symbols-outlined">description</span>
                Daily Reports
            </a>
<a className="flex items-center gap-3 px-3 py-3 font-inter text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:pl-2 transition-all duration-150 active:scale-95" href="#">
<span className="material-symbols-outlined">inventory_2</span>
                Material Catalog
            </a>
<a className="flex items-center gap-3 px-3 py-3 font-inter text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:pl-2 transition-all duration-150 active:scale-95" href="#">
<span className="material-symbols-outlined">construction</span>
                Site Safety
            </a>
<a className="flex items-center gap-3 px-3 py-3 font-inter text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:pl-2 transition-all duration-150 active:scale-95" href="#">
<span className="material-symbols-outlined">history</span>
                Archived
            </a>
</nav>
<div className="p-4 mt-auto space-y-1 border-t border-slate-200 dark:border-slate-800">
<a className="flex items-center gap-3 px-3 py-2 font-inter text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:pl-2 transition-all duration-150" href="#">
<span className="material-symbols-outlined">help</span>
                Help Center
            </a>
<a className="flex items-center gap-3 px-3 py-2 font-inter text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:pl-2 transition-all duration-150" href="#">
<span className="material-symbols-outlined">logout</span>
                Logout
            </a>
</div>
</aside>
{/* Main Content Canvas (Quản lý Báo cáo Định kỳ Screen Background) */}
<main className="ml-64 mt-16 p-8 min-h-screen">
<div className="max-w-[1280px] mx-auto">
<header className="flex justify-between items-end mb-8">
<div>
<h1 className="font-headline-md text-headline-md text-on-surface mb-2">Quản lý Báo cáo Định kỳ</h1>
<p className="font-body-md text-body-md text-on-surface-variant">Theo dõi và cấu hình các lịch gửi báo cáo tự động cho các phòng ban.</p>
</div>
<button className="bg-primary text-on-primary px-6 py-2.5 rounded font-label-bold flex items-center gap-2 hover:bg-primary-container transition-colors">
<span className="material-symbols-outlined text-sm">add</span>
                    Tạo Lịch mới
                </button>
</header>
{/* Stats Overview */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
<div className="bg-white border border-slate-200 p-6 rounded shadow-sm">
<p className="font-label-bold text-slate-500 mb-1">TỔNG SỐ LỊCH</p>
<p className="text-3xl font-bold text-slate-900">24</p>
</div>
<div className="bg-white border border-slate-200 p-6 rounded shadow-sm border-l-4 border-l-orange-600">
<p className="font-label-bold text-slate-500 mb-1">ĐANG HOẠT ĐỘNG</p>
<p className="text-3xl font-bold text-slate-900">18</p>
</div>
<div className="bg-white border border-slate-200 p-6 rounded shadow-sm">
<p className="font-label-bold text-slate-500 mb-1">SẮP GỬI</p>
<p className="text-3xl font-bold text-slate-900">03</p>
</div>
<div className="bg-white border border-slate-200 p-6 rounded shadow-sm">
<p className="font-label-bold text-slate-500 mb-1">LỖI GỬI TIN</p>
<p className="text-3xl font-bold text-error">0</p>
</div>
</div>
{/* Background Table Content (Blurred/Dimmed by Overlay) */}
<div className="bg-white border border-slate-200 rounded overflow-hidden">
<table className="w-full text-left">
<thead className="bg-primary text-white font-label-bold">
<tr>
<th className="px-6 py-4">TÊN BÁO CÁO</th>
<th className="px-6 py-4">TẦN SUẤT</th>
<th className="px-6 py-4">ĐỊNH DẠNG</th>
<th className="px-6 py-4">NGƯỜI NHẬN</th>
<th className="px-6 py-4">TRẠNG THÁI</th>
<th className="px-6 py-4">HÀNH ĐỘNG</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 font-table-data text-table-data">
<tr className="hover:bg-slate-50">
<td className="px-6 py-4 text-slate-900">Báo cáo So sánh Vật liệu Q4</td>
<td className="px-6 py-4 text-slate-600">Hàng tuần</td>
<td className="px-6 py-4 text-slate-600">PDF</td>
<td className="px-6 py-4 text-slate-600">5 Emails</td>
<td className="px-6 py-4">
<span className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded text-xs">Hoạt động</span>
</td>
<td className="px-6 py-4">
<button className="text-slate-400 hover:text-slate-600"><span className="material-symbols-outlined">more_vert</span></button>
</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="px-6 py-4 text-slate-900">Nhật ký Kho bãi - Chi nhánh A</td>
<td className="px-6 py-4 text-slate-600">Hàng ngày</td>
<td className="px-6 py-4 text-slate-600">Excel</td>
<td className="px-6 py-4 text-slate-600">2 Emails</td>
<td className="px-6 py-4">
<span className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded text-xs">Hoạt động</span>
</td>
<td className="px-6 py-4">
<button className="text-slate-400 hover:text-slate-600"><span className="material-symbols-outlined">more_vert</span></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</main>
{/* Modal Overlay */}
<div className="fixed inset-0 z-[60] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
{/* Modal Dialog */}
<div className="bg-white w-full max-w-2xl rounded shadow-2xl overflow-hidden flex flex-col">
{/* Header */}
<div className="bg-slate-50 px-8 py-6 border-b border-slate-200 flex justify-between items-center">
<h2 className="font-headline-sm text-headline-sm text-slate-900">Tạo Lịch gửi Báo cáo mới</h2>
<button className="text-slate-400 hover:text-slate-600">
<span className="material-symbols-outlined">close</span>
</button>
</div>
{/* Body */}
<div className="p-8 space-y-6">
{/* Row 1: Report Type & Frequency */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="font-label-bold text-slate-600 block uppercase tracking-wider text-[11px]">Loại Báo cáo</label>
<div className="relative">
<select className="w-full h-11 px-4 bg-white border border-slate-200 rounded text-slate-900 font-body-md focus:border-primary-container focus:ring-0 appearance-none">
<option>Báo cáo So sánh Vật liệu</option>
<option>Hiệu suất Đội ngũ</option>
<option>Nhật ký Kho bãi</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
</div>
</div>
<div className="space-y-2">
<label className="font-label-bold text-slate-600 block uppercase tracking-wider text-[11px]">Tần suất gửi</label>
<div className="relative">
<select className="w-full h-11 px-4 bg-white border border-slate-200 rounded text-slate-900 font-body-md focus:border-primary-container focus:ring-0 appearance-none">
<option>Hàng ngày</option>
<option>Hàng tuần</option>
<option>Hàng tháng</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">calendar_today</span>
</div>
</div>
</div>
{/* Row 2: Delivery Time */}
<div className="space-y-2">
<label className="font-label-bold text-slate-600 block uppercase tracking-wider text-[11px]">Thời gian gửi</label>
<div className="relative w-full md:w-1/2">
<input className="w-full h-11 px-4 bg-white border border-slate-200 rounded text-slate-900 font-body-md focus:border-primary-container focus:ring-0" type="time" value="08:00"/>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">schedule</span>
</div>
</div>
{/* Row 3: Recipient List */}
<div className="space-y-2">
<label className="font-label-bold text-slate-600 block uppercase tracking-wider text-[11px]">Danh sách Người nhận (Email)</label>
<div className="min-h-[100px] p-2 bg-white border border-slate-200 rounded focus-within:border-primary-container">
<div className="flex flex-wrap gap-2">
{/* Tag */}
<div className="flex items-center gap-1.5 bg-slate-100 text-slate-700 px-3 py-1.5 rounded font-body-sm">
                                nguyen.van.a@industry.com
                                <button className="text-slate-400 hover:text-slate-600"><span className="material-symbols-outlined text-[16px]">close</span></button>
</div>
<div className="flex items-center gap-1.5 bg-slate-100 text-slate-700 px-3 py-1.5 rounded font-body-sm">
                                tran.thi.b@industry.com
                                <button className="text-slate-400 hover:text-slate-600"><span className="material-symbols-outlined text-[16px]">close</span></button>
</div>
<input className="flex-1 min-w-[120px] border-none focus:ring-0 font-body-sm p-1.5" placeholder="Thêm email..." type="text"/>
</div>
</div>
<p className="text-[11px] text-slate-400 italic">Nhập email và nhấn Enter để thêm người nhận.</p>
</div>
{/* Row 4: File Format */}
<div className="space-y-2">
<label className="font-label-bold text-slate-600 block uppercase tracking-wider text-[11px]">Định dạng Tệp</label>
<div className="flex gap-8 items-center pt-1">
<label className="flex items-center gap-3 cursor-pointer group">
<input checked="" className="w-4 h-4 text-orange-600 border-slate-300 focus:ring-orange-500" name="format" type="radio"/>
<span className="font-body-md text-slate-900 group-hover:text-primary transition-colors">PDF (Tài liệu tối ưu hóa in ấn)</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-4 h-4 text-orange-600 border-slate-300 focus:ring-orange-500" name="format" type="radio"/>
<span className="font-body-md text-slate-900 group-hover:text-primary transition-colors">Excel (Dữ liệu bảng tính)</span>
</label>
</div>
</div>
</div>
{/* Footer */}
<div className="px-8 py-6 bg-slate-50 border-t border-slate-200 flex justify-end gap-4">
<button className="px-6 py-2.5 rounded font-label-bold text-slate-600 hover:bg-slate-200 transition-all active:scale-95">
                    Hủy
                </button>
<button className="px-8 py-2.5 rounded font-label-bold bg-orange-600 text-white hover:bg-orange-700 shadow-md transition-all active:scale-95">
                    Tạo Lịch mới
                </button>
</div>
</div>
</div>
{/* Floating Background Decorative Element */}
<div className="fixed bottom-8 right-8 z-30 opacity-10 pointer-events-none">
<span className="material-symbols-outlined text-[120px]">engineering</span>
</div>
    </div>
  );
}
