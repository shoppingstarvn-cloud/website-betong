import React from 'react';

export default function QuNLHANConcreteproAdminCms() {
  return (
    <div>
      {/* SideNavBar */}
<aside className="flex flex-col h-screen fixed left-0 top-0 py-6 px-4 h-screen w-64 border-r border-slate-700 bg-[#1A2B3C] text-white z-50">
<div className="mb-10 px-2">
<h1 className="text-lg font-black text-white uppercase tracking-widest">CONCRETEPRO</h1>
<div className="mt-4 flex items-center gap-3">
<img alt="Admin Portrait" className="w-10 h-10 rounded-full border-2 border-slate-600" data-alt="professional portrait of a middle-aged male architect in a modern office with natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjKWV4a4w670wxI3K0Ip7IU5HxY1HqldGeT8iQlN2hcsJNoDQY6ci-XgBKFml1zur_EGtn_em3vPaU3Fdo6pNdRHhhwBLyuKv8d_8-6Pfrmgr4dcTk7zRT9GJoS1-nSUUovShL79BuS62dY6ErBnPZeV6iMx-vwSIgXiJTHq94Zkb3bMvfMT3b64T7gL6MRUxoXoooD3u3rinwzJxpc7xKvaIIdu3Mkw6B8OOgHcL-mKg3hP0a2XrIXiQnX4gVF4LYgwnFyxECrkKS"/>
<div>
<p className="font-sans text-sm font-medium tracking-wide">Quản trị hệ thống</p>
<p className="text-xs text-slate-400">Vật liệu &amp; Bê tông</p>
</div>
</div>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800 transition-all duration-200 font-sans text-sm font-medium tracking-wide" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>Dashboard</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800 transition-all duration-200 font-sans text-sm font-medium tracking-wide" href="#">
<span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
<span>Sản phẩm</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800 transition-all duration-200 font-sans text-sm font-medium tracking-wide" href="#">
<span className="material-symbols-outlined" data-icon="architecture">architecture</span>
<span>Dự án</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800 transition-all duration-200 font-sans text-sm font-medium tracking-wide" href="#">
<span className="material-symbols-outlined" data-icon="request_quote">request_quote</span>
<span>Báo giá</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 bg-orange-600 text-white rounded-sm font-sans text-sm font-medium tracking-wide active:scale-[0.98] transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
<span>Hóa đơn</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800 transition-all duration-200 font-sans text-sm font-medium tracking-wide" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span>Cài đặt</span>
</a>
</nav>
<div className="mt-auto border-t border-slate-700 pt-6 space-y-4">
<a className="flex items-center gap-3 px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 transition-all duration-200 font-sans text-sm font-medium tracking-wide" href="#">
<span className="material-symbols-outlined" data-icon="help">help</span>
<span>Hỗ trợ</span>
</a>
<button className="w-full bg-orange-600 text-white py-3 px-4 rounded-sm text-sm font-bold active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
<span className="material-symbols-outlined" data-icon="add">add</span>
                Tạo hóa đơn mới
            </button>
</div>
</aside>
{/* Main Content Area */}
<main className="ml-64 flex-1 flex flex-col">
{/* TopNavBar */}
<header className="flex justify-between items-center px-6 h-16 w-full sticky top-0 z-40 bg-white border-b border-slate-200">
<div className="flex items-center gap-4 flex-1">
<div className="relative w-full max-w-md">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 focus:outline-none focus:border-primary-container text-sm" placeholder="Tìm kiếm hóa đơn, khách hàng..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-slate-500 hover:bg-slate-50 transition-colors cursor-pointer active:opacity-80">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="p-2 text-slate-500 hover:bg-slate-50 transition-colors cursor-pointer active:opacity-80">
<span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
</button>
</div>
</header>
{/* Page Canvas */}
<section className="p-8 max-w-[1280px] w-full mx-auto">
{/* Page Header Actions */}
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="font-headline-md text-primary-container">Quản lý Hóa đơn</h2>
<p className="text-body-sm text-on-surface-variant">Theo dõi và quản lý các giao dịch tài chính xây dựng.</p>
</div>
<div className="flex gap-3">
<button className="flex items-center gap-2 px-4 py-2 border border-slate-200 text-primary-container font-label-bold hover:bg-slate-50 transition-colors">
<span className="material-symbols-outlined text-lg" data-icon="download">download</span>
                        XUẤT EXCEL
                    </button>
<button className="flex items-center gap-2 px-6 py-2 bg-primary-container text-white font-label-bold hover:bg-primary transition-colors">
<span className="material-symbols-outlined text-lg" data-icon="add_circle">add_circle</span>
                        TẠO HÓA ĐƠN
                    </button>
</div>
</div>
{/* Widgets Bento Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
<div className="bg-white p-6 border border-slate-200">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-slate-50">
<span className="material-symbols-outlined text-primary-container" data-icon="payments">payments</span>
</div>
<span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1">+12.5%</span>
</div>
<p className="text-label-bold text-on-surface-variant mb-1">TỔNG DOANH THU</p>
<h3 className="font-headline-sm text-primary-container">2.450.000.000 <span className="text-sm font-medium">VNĐ</span></h3>
<div className="mt-4 h-1 w-full bg-slate-100">
<div className="h-1 bg-orange-600 w-3/4"></div>
</div>
</div>
<div className="bg-white p-6 border border-slate-200">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-slate-50">
<span className="material-symbols-outlined text-primary-container" data-icon="schedule">schedule</span>
</div>
<span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1">14 hóa đơn</span>
</div>
<p className="text-label-bold text-on-surface-variant mb-1">CHỜ THANH TOÁN</p>
<h3 className="font-headline-sm text-primary-container">842.000.000 <span className="text-sm font-medium">VNĐ</span></h3>
<div className="mt-4 h-1 w-full bg-slate-100">
<div className="h-1 bg-primary-container w-1/3"></div>
</div>
</div>
<div className="bg-white p-6 border border-slate-200">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-slate-50 text-error">
<span className="material-symbols-outlined" data-icon="warning">warning</span>
</div>
<span className="text-xs font-bold text-error bg-error-container px-2 py-1">Cần xử lý</span>
</div>
<p className="text-label-bold text-on-surface-variant mb-1">QUÁ HẠN</p>
<h3 className="font-headline-sm text-error">156.400.000 <span className="text-sm font-medium">VNĐ</span></h3>
<div className="mt-4 h-1 w-full bg-slate-100">
<div className="h-1 bg-error w-1/4"></div>
</div>
</div>
</div>
{/* Filters Section */}
<div className="bg-white p-4 border border-slate-200 mb-6 flex flex-wrap gap-4 items-center">
<div className="flex items-center gap-2">
<span className="text-label-bold text-on-surface-variant">LỌC THEO:</span>
</div>
<select className="bg-white border border-slate-200 text-sm py-1.5 px-3 focus:border-primary-container outline-none">
<option>Tất cả trạng thái</option>
<option>Đã thanh toán</option>
<option>Chờ thanh toán</option>
<option>Quá hạn</option>
</select>
<div className="flex items-center bg-white border border-slate-200 px-3 py-1.5 gap-2">
<span className="material-symbols-outlined text-sm text-slate-400" data-icon="calendar_today">calendar_today</span>
<span className="text-sm text-slate-600">Tháng này (01/10 - 31/10)</span>
</div>
<button className="ml-auto text-sm font-semibold text-primary-container hover:underline">Xóa bộ lọc</button>
</div>
{/* Data Table Container */}
<div className="bg-white border border-slate-200 overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-primary-container text-white">
<th className="px-6 py-4 font-label-bold uppercase tracking-wider text-xs">Mã hóa đơn</th>
<th className="px-6 py-4 font-label-bold uppercase tracking-wider text-xs">Khách hàng</th>
<th className="px-6 py-4 font-label-bold uppercase tracking-wider text-xs">Ngày phát hành</th>
<th className="px-6 py-4 font-label-bold uppercase tracking-wider text-xs text-right">Tổng tiền</th>
<th className="px-6 py-4 font-label-bold uppercase tracking-wider text-xs text-center">Trạng thái</th>
<th className="px-6 py-4 font-label-bold uppercase tracking-wider text-xs text-right">Hành động</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
{/* Row 1 */}
<tr className="hover:bg-slate-50 transition-colors group">
<td className="px-6 py-4 font-table-data text-primary-container">INV-2023-089</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-slate-100 flex items-center justify-center font-bold text-primary-container text-xs">VH</div>
<div>
<p className="font-table-data text-primary-container">Vinhomes Grand Park</p>
<p className="text-[10px] text-slate-400">Phân khu The Beverly</p>
</div>
</div>
</td>
<td className="px-6 py-4 font-table-data text-slate-600">12/10/2023</td>
<td className="px-6 py-4 font-table-data text-primary-container text-right">450.000.000 VNĐ</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    Đã thanh toán
                                </span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 text-slate-400 hover:text-primary-container" title="Xem"><span className="material-symbols-outlined text-lg" data-icon="visibility">visibility</span></button>
<button className="p-1.5 text-slate-400 hover:text-primary-container" title="In"><span className="material-symbols-outlined text-lg" data-icon="print">print</span></button>
<button className="p-1.5 text-slate-400 hover:text-orange-600" title="Xuất E-invoice"><span className="material-symbols-outlined text-lg" data-icon="receipt">receipt</span></button>
</div>
</td>
</tr>
{/* Row 2 */}
<tr className="hover:bg-slate-50 transition-colors group">
<td className="px-6 py-4 font-table-data text-primary-container">INV-2023-090</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-slate-100 flex items-center justify-center font-bold text-primary-container text-xs">SC</div>
<div>
<p className="font-table-data text-primary-container">Sungroup Catalyst</p>
<p className="text-[10px] text-slate-400">Dự án Hòn Thơm</p>
</div>
</div>
</td>
<td className="px-6 py-4 font-table-data text-slate-600">14/10/2023</td>
<td className="px-6 py-4 font-table-data text-primary-container text-right">1.200.000.000 VNĐ</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                                    Chờ thanh toán
                                </span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 text-slate-400 hover:text-primary-container" title="Xem"><span className="material-symbols-outlined text-lg" data-icon="visibility">visibility</span></button>
<button className="p-1.5 text-slate-400 hover:text-orange-600" title="Gửi nhắc nợ"><span className="material-symbols-outlined text-lg" data-icon="notification_important">notification_important</span></button>
<button className="p-1.5 text-slate-400 hover:text-primary-container" title="In"><span className="material-symbols-outlined text-lg" data-icon="print">print</span></button>
</div>
</td>
</tr>
{/* Row 3 */}
<tr className="hover:bg-slate-50 transition-colors group">
<td className="px-6 py-4 font-table-data text-primary-container">INV-2023-078</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-slate-100 flex items-center justify-center font-bold text-primary-container text-xs">NV</div>
<div>
<p className="font-table-data text-primary-container">Novaland Group</p>
<p className="text-[10px] text-slate-400">Aqua City Center</p>
</div>
</div>
</td>
<td className="px-6 py-4 font-table-data text-slate-600">25/09/2023</td>
<td className="px-6 py-4 font-table-data text-error text-right">156.400.000 VNĐ</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                    Quá hạn
                                </span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 text-slate-400 hover:text-primary-container" title="Xem"><span className="material-symbols-outlined text-lg" data-icon="visibility">visibility</span></button>
<button className="p-1.5 text-error hover:scale-110 transition-transform" title="Gửi nhắc nợ khẩn cấp"><span className="material-symbols-outlined text-lg" data-icon="priority_high">priority_high</span></button>
<button className="p-1.5 text-slate-400 hover:text-primary-container" title="In"><span className="material-symbols-outlined text-lg" data-icon="print">print</span></button>
</div>
</td>
</tr>
{/* Row 4 */}
<tr className="hover:bg-slate-50 transition-colors group">
<td className="px-6 py-4 font-table-data text-primary-container">INV-2023-091</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-slate-100 flex items-center justify-center font-bold text-primary-container text-xs">KH</div>
<div>
<p className="font-table-data text-primary-container">Khang Điền House</p>
<p className="text-[10px] text-slate-400">Dự án The Privia</p>
</div>
</div>
</td>
<td className="px-6 py-4 font-table-data text-slate-600">18/10/2023</td>
<td className="px-6 py-4 font-table-data text-primary-container text-right">620.000.000 VNĐ</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                                    Chờ thanh toán
                                </span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 text-slate-400 hover:text-primary-container" title="Xem"><span className="material-symbols-outlined text-lg" data-icon="visibility">visibility</span></button>
<button className="p-1.5 text-slate-400 hover:text-primary-container" title="In"><span className="material-symbols-outlined text-lg" data-icon="print">print</span></button>
<button className="p-1.5 text-slate-400 hover:text-orange-600" title="Xuất E-invoice"><span className="material-symbols-outlined text-lg" data-icon="receipt">receipt</span></button>
</div>
</td>
</tr>
</tbody>
</table>
{/* Pagination Footer */}
<div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between">
<p className="text-xs text-on-surface-variant font-medium">Hiển thị 1 - 4 trong số 156 hóa đơn</p>
<div className="flex items-center gap-2">
<button className="p-1 hover:bg-slate-50 disabled:opacity-30" disabled="">
<span className="material-symbols-outlined text-lg" data-icon="chevron_left">chevron_left</span>
</button>
<div className="flex gap-1">
<span className="w-8 h-0.5 bg-orange-600"></span>
<span className="w-8 h-0.5 bg-slate-200"></span>
<span className="w-8 h-0.5 bg-slate-200"></span>
</div>
<button className="p-1 hover:bg-slate-50">
<span className="material-symbols-outlined text-lg" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</div>
{/* Additional Professional Layout Element (Decorative Asset) */}
<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
<div className="relative h-64 overflow-hidden rounded-sm group">
<img alt="Concrete site" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" data-alt="dramatic industrial shot of a large-scale concrete pouring site at twilight with heavy machinery and sharp structural lines" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVx6HMY51CkUD4ASeiQcIoViE4d9Q7jeU9hQYutQOzWDgC7oX1wK2xmYNJaaM4M0jLawqtm-klu5-ftKzIbxPafnLEiQiox27F8NhECwG3pyqYjT43374vKOcLZPQEZ4497ea_tkEB5u3-N9CV4pFFmEK5oiCFxsT_HIsLZDyd68ngXwdJF2ktENrFLtxZEGVIBAtgUH-yIC4XNzE6pGTqSM_jfm95dkybQkR_Uh0J2kCFGUJz1sVBVIPppPRvI3118t65F-2xeETs"/>
<div className="absolute inset-0 bg-primary-container/60 p-8 flex flex-col justify-end">
<h4 className="text-white font-bold text-lg mb-2">Đối tác tin cậy cho mọi công trình</h4>
<p className="text-slate-300 text-sm">CONCRETEPRO cung cấp giải pháp bê tông tươi và vật liệu xây dựng hàng đầu Việt Nam.</p>
</div>
</div>
<div className="space-y-6">
<h4 className="font-headline-sm text-primary-container">Hướng dẫn Xuất Hóa đơn Điện tử</h4>
<ul className="space-y-4">
<li className="flex gap-4 items-start">
<span className="w-6 h-6 flex-shrink-0 bg-orange-600 text-white flex items-center justify-center text-xs font-bold">1</span>
<p className="text-body-sm text-on-surface-variant">Chọn các hóa đơn ở trạng thái "Đã thanh toán" từ danh sách phía trên.</p>
</li>
<li className="flex gap-4 items-start">
<span className="w-6 h-6 flex-shrink-0 bg-orange-600 text-white flex items-center justify-center text-xs font-bold">2</span>
<p className="text-body-sm text-on-surface-variant">Nhấn vào biểu tượng "Xuất E-invoice" hoặc chọn hàng loạt để xử lý tập trung.</p>
</li>
<li className="flex gap-4 items-start">
<span className="w-6 h-6 flex-shrink-0 bg-orange-600 text-white flex items-center justify-center text-xs font-bold">3</span>
<p className="text-body-sm text-on-surface-variant">Hệ thống sẽ tự động đồng bộ dữ liệu với cơ quan Thuế và gửi email cho khách hàng.</p>
</li>
</ul>
</div>
</div>
</section>
</main>
    </div>
  );
}
