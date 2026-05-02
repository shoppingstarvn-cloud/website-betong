import React from 'react';

export default function DashboardAdminThCChiNConcretepro() {
  return (
    <div>
      {/* SideNavBar (from JSON logic) */}
<aside className="bg-white dark:bg-slate-950 text-[#1A2B3C] dark:text-slate-100 font-['Inter'] antialiased tracking-tight docked h-screen w-64 border-r fixed left-0 top-0 border-slate-200 dark:border-slate-800 flat no shadows flex flex-col py-6 z-50">
<div className="px-6 mb-10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-primary-container rounded flex items-center justify-center">
<span className="material-symbols-outlined text-white" style="font-variation-settings: 'FILL' 1;">precision_manufacturing</span>
</div>
<div>
<h1 className="text-xl font-black uppercase tracking-widest text-[#1A2B3C] dark:text-orange-500">Bê Tông Pro</h1>
<p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Hệ thống Quản trị</p>
</div>
</div>
</div>
<nav className="flex-1 space-y-1">
{/* Active: Dashboard */}
<a className="flex items-center gap-4 px-6 py-3 bg-slate-50 dark:bg-slate-900 text-on-tertiary-container font-bold border-r-4 border-on-tertiary-container transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-bold text-label-bold">Dashboard</span>
</a>
<a className="flex items-center gap-4 px-6 py-3 text-slate-500 dark:text-slate-400 hover:text-[#1A2B3C] dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
<span className="font-label-bold text-label-bold">Sản phẩm</span>
</a>
<a className="flex items-center gap-4 px-6 py-3 text-slate-500 dark:text-slate-400 hover:text-[#1A2B3C] dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="precision_manufacturing">precision_manufacturing</span>
<span className="font-label-bold text-label-bold">Dự án</span>
</a>
<a className="flex items-center gap-4 px-6 py-3 text-slate-500 dark:text-slate-400 hover:text-[#1A2B3C] dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="request_quote">request_quote</span>
<span className="font-label-bold text-label-bold">Báo giá</span>
</a>
<a className="flex items-center gap-4 px-6 py-3 text-slate-500 dark:text-slate-400 hover:text-[#1A2B3C] dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span className="font-label-bold text-label-bold">Tài chính</span>
</a>
<a className="flex items-center gap-4 px-6 py-3 text-slate-500 dark:text-slate-400 hover:text-[#1A2B3C] dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-label-bold text-label-bold">Cài đặt</span>
</a>
</nav>
<div className="mt-auto px-6 space-y-1">
<a className="flex items-center gap-4 py-3 text-slate-500 dark:text-slate-400 hover:text-[#1A2B3C] transition-all" href="#">
<span className="material-symbols-outlined" data-icon="help">help</span>
<span className="font-label-bold text-label-bold">Hỗ trợ</span>
</a>
<a className="flex items-center gap-4 py-3 text-error transition-all" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span className="font-label-bold text-label-bold">Đăng xuất</span>
</a>
</div>
</aside>
{/* TopAppBar */}
<header className="bg-white/95 dark:bg-slate-950/95 backdrop-blur-md text-[#1A2B3C] dark:text-slate-100 font-['Inter'] text-sm font-medium docked full-width top-0 sticky z-40 border-b border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none flex justify-between items-center px-8 h-16 ml-64">
<div className="flex items-center gap-4 w-1/3">
<div className="relative w-full">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
<input className="w-full pl-10 pr-4 py-1.5 bg-slate-100 dark:bg-slate-900 border-none rounded text-sm focus:ring-1 focus:ring-on-tertiary-container" placeholder="Tìm kiếm đơn hàng, khách hàng..." type="text"/>
</div>
</div>
<div className="flex items-center gap-6">
<button className="relative text-slate-600 dark:text-slate-400 hover:text-on-tertiary-container transition-colors">
<span className="material-symbols-outlined" data-icon="error_outline">error_outline</span>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-error rounded-full"></span>
</button>
<button className="text-slate-600 dark:text-slate-400 hover:text-on-tertiary-container transition-colors">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-800 mx-2"></div>
<div className="flex items-center gap-3">
<div className="text-right">
<p className="text-xs font-bold leading-none">Admin Nguyễn</p>
<p className="text-[10px] text-slate-500 uppercase">Quản trị hệ thống</p>
</div>
<span className="material-symbols-outlined text-3xl" data-icon="account_circle">account_circle</span>
</div>
</div>
</header>
{/* Main Content */}
<main className="ml-64 p-8">
<div className="max-w-[1280px] mx-auto space-y-8">
{/* Page Header */}
<div className="flex justify-between items-end">
<div>
<h2 className="font-headline-md text-headline-md text-primary">Tổng Quan Vận Hành</h2>
<p className="font-body-sm text-body-sm text-secondary">Cập nhật lúc: 14:30 | 24/05/2024</p>
</div>
<div className="flex gap-3">
<button className="px-4 py-2 bg-white border border-outline-variant font-label-bold text-label-bold hover:bg-slate-50 transition-all flex items-center gap-2">
<span className="material-symbols-outlined text-sm">download</span>
                        XUẤT BÁO CÁO
                    </button>
<button className="px-4 py-2 bg-primary-container text-white font-label-bold text-label-bold hover:bg-primary transition-all flex items-center gap-2 shadow-lg shadow-primary/10">
<span className="material-symbols-outlined text-sm">add</span>
                        TẠO ĐƠN MỚI
                    </button>
</div>
</div>
{/* Bento Grid 1: Financial & Alerts */}
<div className="grid grid-cols-12 gap-gutter">
{/* Financial Overview */}
<div className="col-span-8 grid grid-cols-3 gap-gutter">
<div className="bg-white p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
<div>
<p className="font-label-bold text-label-bold text-secondary uppercase mb-2">Doanh thu tháng</p>
<h3 className="font-headline-sm text-headline-sm text-primary">4.850.000.000 ₫</h3>
</div>
<div className="mt-4 flex items-center gap-2 text-emerald-600">
<span className="material-symbols-outlined text-sm">trending_up</span>
<span className="font-table-data text-table-data">+12.5% so với tháng trước</span>
</div>
</div>
<div className="bg-white p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
<div>
<p className="font-label-bold text-label-bold text-secondary uppercase mb-2">Công nợ khách hàng</p>
<h3 className="font-headline-sm text-headline-sm text-error">1.240.000.000 ₫</h3>
</div>
<div className="mt-4 flex items-center gap-2 text-slate-500">
<span className="material-symbols-outlined text-sm">info</span>
<span className="font-table-data text-table-data">8 khách hàng quá hạn</span>
</div>
</div>
<div className="bg-white p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
<div>
<p className="font-label-bold text-label-bold text-secondary uppercase mb-2">Lợi nhuận gộp</p>
<h3 className="font-headline-sm text-headline-sm text-on-tertiary-container">824.000.000 ₫</h3>
</div>
<div className="mt-4 flex items-center gap-2 text-emerald-600">
<span className="material-symbols-outlined text-sm">trending_up</span>
<span className="font-table-data text-table-data">+5.2% so với tháng trước</span>
</div>
</div>
</div>
{/* Intelligent Alerts */}
<div className="col-span-4 bg-primary-container text-white p-6 relative overflow-hidden">
<div className="relative z-10">
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-on-tertiary-container" style="font-variation-settings: 'FILL' 1;">warning</span>
<p className="font-label-bold text-label-bold uppercase">Cảnh báo khẩn cấp (03)</p>
</div>
<div className="space-y-4">
<div className="bg-white/10 p-3 border-l-4 border-on-tertiary-container">
<p className="font-table-data text-table-data font-bold">Lỗi trạm trộn số #02</p>
<p className="text-[11px] opacity-70">Cảm biến cân xi măng không phản hồi. Cần bảo trì ngay.</p>
</div>
<div className="bg-white/10 p-3 border-l-4 border-error">
<p className="font-table-data text-table-data font-bold">Đơn hàng CP-204 quá hạn</p>
<p className="text-[11px] opacity-70">Khách hàng: VinHomes Ocean Park. Trễ 45 phút.</p>
</div>
</div>
</div>
{/* Decorative Background Element */}
<div className="absolute -bottom-10 -right-10 w-40 h-40 bg-on-tertiary-container/10 rounded-full blur-3xl"></div>
</div>
</div>
{/* Bento Grid 2: Operation & Chart */}
<div className="grid grid-cols-12 gap-gutter">
{/* Operation Status */}
<div className="col-span-3 space-y-gutter">
<div className="bg-white p-6 border border-slate-200">
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 bg-surface-container flex items-center justify-center">
<span className="material-symbols-outlined text-primary">local_shipping</span>
</div>
<span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded">ĐANG CHẠY</span>
</div>
<p className="font-label-bold text-label-bold text-secondary">XE BỒN ĐANG VẬN HÀNH</p>
<h4 className="font-display-lg text-[36px] font-bold text-primary">18 / 25</h4>
<div className="mt-4 w-full bg-slate-100 h-1.5 overflow-hidden">
<div className="bg-on-tertiary-container h-full w-[72%]"></div>
</div>
</div>
<div className="bg-white p-6 border border-slate-200">
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 bg-surface-container flex items-center justify-center">
<span className="material-symbols-outlined text-primary">layers</span>
</div>
<span className="text-[10px] font-bold text-secondary">MỤC TIÊU: 1,200m³</span>
</div>
<p className="font-label-bold text-label-bold text-secondary">BÊ TÔNG ĐÃ XUẤT (NGÀY)</p>
<h4 className="font-display-lg text-[36px] font-bold text-primary">842 m³</h4>
<div className="mt-4 w-full bg-slate-100 h-1.5 overflow-hidden">
<div className="bg-primary-container h-full w-[65%]"></div>
</div>
</div>
</div>
{/* Combo Chart (Simulated Visual) */}
<div className="col-span-9 bg-white border border-slate-200 p-6">
<div className="flex justify-between items-center mb-8">
<div>
<h3 className="font-headline-sm text-headline-sm text-primary">Hiệu Suất Kinh Doanh</h3>
<p className="font-body-sm text-body-sm text-secondary">So sánh Doanh thu Thực tế vs Kế hoạch (6 tháng)</p>
</div>
<div className="flex gap-4">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-primary-container"></div>
<span className="text-xs font-bold">Thực tế</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 border-2 border-on-tertiary-container"></div>
<span className="text-xs font-bold text-secondary">Kế hoạch</span>
</div>
</div>
</div>
{/* Simulated Combo Chart */}
<div className="relative h-[240px] flex items-end justify-between gap-4 px-4">
{/* Y-Axis Labels */}
<div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[10px] text-slate-400 font-bold">
<span>5B</span>
<span>4B</span>
<span>3B</span>
<span>2B</span>
<span>1B</span>
<span>0</span>
</div>
{/* Chart Bars & Lines */}
<div className="flex-1 flex flex-col items-center gap-2 relative">
<div className="w-full h-[180px] flex items-end justify-center relative">
<div className="w-12 bg-surface-container-high h-[120px] relative group hover:bg-on-tertiary-container/20 transition-all">
<div className="absolute bottom-0 w-full bg-primary-container h-[90px]"></div>
<div className="absolute top-[30px] w-full border-t-2 border-on-tertiary-container border-dashed"></div>
</div>
</div>
<span className="text-[10px] font-bold text-secondary uppercase">Th01</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2 relative">
<div className="w-full h-[180px] flex items-end justify-center relative">
<div className="w-12 bg-surface-container-high h-[140px] relative group hover:bg-on-tertiary-container/20 transition-all">
<div className="absolute bottom-0 w-full bg-primary-container h-[110px]"></div>
<div className="absolute top-[40px] w-full border-t-2 border-on-tertiary-container border-dashed"></div>
</div>
</div>
<span className="text-[10px] font-bold text-secondary uppercase">Th02</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2 relative">
<div className="w-full h-[180px] flex items-end justify-center relative">
<div className="w-12 bg-surface-container-high h-[160px] relative group hover:bg-on-tertiary-container/20 transition-all">
<div className="absolute bottom-0 w-full bg-primary-container h-[155px]"></div>
<div className="absolute top-[20px] w-full border-t-2 border-on-tertiary-container border-dashed"></div>
</div>
</div>
<span className="text-[10px] font-bold text-secondary uppercase">Th03</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2 relative">
<div className="w-full h-[180px] flex items-end justify-center relative">
<div className="w-12 bg-surface-container-high h-[180px] relative group hover:bg-on-tertiary-container/20 transition-all">
<div className="absolute bottom-0 w-full bg-primary-container h-[140px]"></div>
<div className="absolute top-[10px] w-full border-t-2 border-on-tertiary-container border-dashed"></div>
</div>
</div>
<span className="text-[10px] font-bold text-secondary uppercase">Th04</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2 relative">
<div className="w-full h-[180px] flex items-end justify-center relative">
<div className="w-12 bg-surface-container-high h-[180px] relative group hover:bg-on-tertiary-container/20 transition-all">
<div className="absolute bottom-0 w-full bg-primary-container h-[175px]"></div>
<div className="absolute top-[15px] w-full border-t-2 border-on-tertiary-container border-dashed"></div>
</div>
</div>
<span className="text-[10px] font-bold text-on-tertiary-container uppercase">Th05 (Nay)</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2 relative opacity-40">
<div className="w-full h-[180px] flex items-end justify-center relative">
<div className="w-12 bg-surface-container-high h-[180px] relative">
<div className="absolute top-[10px] w-full border-t-2 border-on-tertiary-container border-dashed"></div>
</div>
</div>
<span className="text-[10px] font-bold text-secondary uppercase">Th06</span>
</div>
</div>
</div>
</div>
{/* Inquiries List */}
<div className="bg-white border border-slate-200">
<div className="p-6 border-b border-slate-200 flex justify-between items-center bg-[#F5F7F9]">
<h3 className="font-headline-sm text-headline-sm text-primary">Yêu Cầu Báo Giá Mới (Inquiries)</h3>
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-on-tertiary-container rounded-full animate-pulse"></span>
<span className="text-xs font-bold uppercase tracking-wider text-on-tertiary-container">4 Yêu cầu chưa xử lý</span>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-primary text-white">
<th className="px-6 py-4 font-label-bold text-label-bold">ID</th>
<th className="px-6 py-4 font-label-bold text-label-bold">KHÁCH HÀNG</th>
<th className="px-6 py-4 font-label-bold text-label-bold">DỰ ÁN</th>
<th className="px-6 py-4 font-label-bold text-label-bold">MÁC BÊ TÔNG</th>
<th className="px-6 py-4 font-label-bold text-label-bold">KHỐI LƯỢNG</th>
<th className="px-6 py-4 font-label-bold text-label-bold">THỜI GIAN ĐỔ</th>
<th className="px-6 py-4 font-label-bold text-label-bold text-center">THAO TÁC</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4 font-table-data text-table-data font-bold">#INQ-4592</td>
<td className="px-6 py-4">
<p className="font-table-data text-table-data text-primary">Công ty Xây dựng Delta</p>
<p className="text-[11px] text-secondary">0903.XXX.XXX</p>
</td>
<td className="px-6 py-4 font-table-data text-table-data">Chung cư Masterise Homes</td>
<td className="px-6 py-4">
<span className="px-2 py-0.5 bg-slate-100 border border-slate-200 rounded text-[11px] font-bold">M350 R7</span>
</td>
<td className="px-6 py-4 font-table-data text-table-data">450 m³</td>
<td className="px-6 py-4 font-table-data text-table-data">26/05/2024</td>
<td className="px-6 py-4 text-center">
<div className="flex justify-center gap-2">
<button className="w-8 h-8 flex items-center justify-center bg-on-tertiary-container text-white rounded hover:bg-tertiary transition-all" title="Báo giá ngay">
<span className="material-symbols-outlined text-sm">description</span>
</button>
<button className="w-8 h-8 flex items-center justify-center bg-surface-container text-secondary rounded hover:bg-slate-300 transition-all">
<span className="material-symbols-outlined text-sm">more_vert</span>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4 font-table-data text-table-data font-bold">#INQ-4591</td>
<td className="px-6 py-4">
<p className="font-table-data text-table-data text-primary">Tập đoàn Hòa Bình</p>
<p className="text-[11px] text-secondary">0982.XXX.XXX</p>
</td>
<td className="px-6 py-4 font-table-data text-table-data">Cầu Vĩnh Tuy 2</td>
<td className="px-6 py-4">
<span className="px-2 py-0.5 bg-slate-100 border border-slate-200 rounded text-[11px] font-bold">M450 R28</span>
</td>
<td className="px-6 py-4 font-table-data text-table-data">1,200 m³</td>
<td className="px-6 py-4 font-table-data text-table-data">28/05/2024</td>
<td className="px-6 py-4 text-center">
<div className="flex justify-center gap-2">
<button className="w-8 h-8 flex items-center justify-center bg-on-tertiary-container text-white rounded hover:bg-tertiary transition-all">
<span className="material-symbols-outlined text-sm">description</span>
</button>
<button className="w-8 h-8 flex items-center justify-center bg-surface-container text-secondary rounded hover:bg-slate-300 transition-all">
<span className="material-symbols-outlined text-sm">more_vert</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-4 flex justify-center border-t border-slate-100">
<button className="font-label-bold text-label-bold text-primary hover:text-on-tertiary-container transition-all flex items-center gap-2">
                        XEM TẤT CẢ YÊU CẦU
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</div>
{/* Decorative Construction Asset */}
<div className="grid grid-cols-2 gap-gutter">
<div className="relative h-48 bg-slate-900 group overflow-hidden">
<img alt="close-up of a modern concrete structure under construction with orange crane in distance and dramatic lighting" className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" data-alt="industrial construction site with crane and concrete structure in golden hour lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEQGvwp-oR9z9Y-dsx76RutXzze6r4M2kFq8wvAe-5c7B9NSqOK21VfQf1jIRrdaATzgV47Dd6aGYh-jdf6861P6M79sCRISjg241NLdc8N6wMWCivUqPSlbA7MlgJLho5j9CVIOnhKSasyQXgKOBMqNJl57cuIO4zDyevaz54RcK9TnuDGUYGbDzyMR8CFBYRS-lRRSBgzPDW8WXQMmAaOf-3dulBDm01EMyk4WY5mvZF4mIz3qZ8gXhZkGCj_AocCbBHg4PKPvJ-"/>
<div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent p-8 flex flex-col justify-center">
<h4 className="text-white font-headline-sm text-headline-sm mb-2">Quản Lý Trạm Trộn</h4>
<p className="text-slate-300 font-body-sm text-body-sm max-w-md">Theo dõi hiệu suất và bảo trì định kỳ hệ thống trạm trộn bê tông trung tâm.</p>
</div>
</div>
<div className="relative h-48 bg-on-tertiary-container group overflow-hidden">
<img alt="fleet of concrete mixer trucks parked in a row at a production facility with early morning mist" className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" data-alt="fleet of white concrete mixer trucks parked at an industrial site with misty background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzUCnLEYB-BFs1z_427f2qNmO5anzNM5_BwTaUxM6t-XGgeumRaFN8dblQIvz6eVo2W_fQCRr4-n8n20qQoXPvUkhzE7Z7B2e64jKBamEjAI_y289OYhchQCUPAlsjHTMuLNDT_N-1dkL2W0OD8x5XpaCS3-t7lp6cUWDt-d0-RMa_7OZjKVbZs6OWb0qP0Qg-9eHMEYC59B6Iie8RbE8FocKitns-e-64zxw7g3syk9Vm-nKsuzrxTd5--8Ubtg7UH7jFQ5Zvub_y"/>
<div className="absolute inset-0 bg-gradient-to-r from-tertiary-container to-transparent p-8 flex flex-col justify-center">
<h4 className="text-white font-headline-sm text-headline-sm mb-2">Điều Phối Đội Xe</h4>
<p className="text-slate-200 font-body-sm text-body-sm max-w-md">Tối ưu hóa lộ trình di chuyển của 25 xe bồn qua hệ thống GPS thông minh.</p>
</div>
</div>
</div>
</div>
</main>
{/* FAB (from JSON logic) */}
<button className="fixed bottom-8 right-8 w-14 h-14 bg-on-tertiary-container text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50">
<span className="material-symbols-outlined text-2xl" data-weight="fill">add</span>
</button>
    </div>
  );
}
