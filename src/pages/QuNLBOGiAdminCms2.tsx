import React from 'react';

export default function QuNLBOGiAdminCms2() {
  return (
    <div>
      <nav className="flex flex-col fixed left-0 top-0 h-screen w-64 z-50 py-6 bg-[#1A2B3C] dark:bg-slate-950 border-r border-slate-800">
<div className="px-6 mb-10">
<h2 className="text-lg font-black text-white italic">BUILDCORE</h2>
<p className="text-slate-400 font-['Inter'] text-xs mt-1">Admin Portal</p>
</div>
<div className="flex-1 flex flex-col gap-1">
<a className="text-slate-400 flex items-center gap-3 py-3 px-4 font-['Inter'] font-bold text-[11px] uppercase tracking-widest hover:bg-slate-800 hover:text-white transition-all duration-200 active:scale-[0.98] transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                Dashboard
            </a>
<a className="text-slate-400 flex items-center gap-3 py-3 px-4 font-['Inter'] font-bold text-[11px] uppercase tracking-widest hover:bg-slate-800 hover:text-white transition-all duration-200 active:scale-[0.98] transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
                Product Catalog
            </a>
<a className="text-slate-400 flex items-center gap-3 py-3 px-4 font-['Inter'] font-bold text-[11px] uppercase tracking-widest hover:bg-slate-800 hover:text-white transition-all duration-200 active:scale-[0.98] transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="group">group</span>
                User Directory
            </a>
<a className="bg-orange-600 text-white rounded-r-md mr-4 flex items-center gap-3 py-3 px-4 shadow-[4px_0px_0px_0px_rgba(255,255,255,0.2)] font-['Inter'] font-bold text-[11px] uppercase tracking-widest active:scale-[0.98] transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="request_quote">request_quote</span>
                Inquiry Management
            </a>
</div>
<div className="mt-auto flex flex-col gap-1">
<a className="text-slate-400 flex items-center gap-3 py-3 px-4 font-['Inter'] font-bold text-[11px] uppercase tracking-widest hover:bg-slate-800 hover:text-white transition-all duration-200 active:scale-[0.98] transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
                Settings
            </a>
<a className="text-slate-400 flex items-center gap-3 py-3 px-4 font-['Inter'] font-bold text-[11px] uppercase tracking-widest hover:bg-slate-800 hover:text-white transition-all duration-200 active:scale-[0.98] transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
                Logout
            </a>
</div>
</nav>
<div className="flex-1 ml-64 flex flex-col h-screen relative bg-surface">
<header className="flex justify-between items-center h-16 px-8 w-full sticky top-0 z-40 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
<div className="flex items-center gap-4">
<span className="text-xl font-black text-slate-900 dark:text-white tracking-tighter">Industrial CMS</span>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden md:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" data-icon="search">search</span>
<input className="pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded text-sm focus:ring-2 focus:ring-orange-600 outline-none w-64 text-slate-900 dark:text-white placeholder-slate-400" placeholder="Search..." type="text"/>
</div>
<div className="flex items-center gap-2">
<button className="p-2 text-slate-500 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors scale-95 duration-200 transition-transform">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="p-2 text-slate-500 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors scale-95 duration-200 transition-transform">
<span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
</button>
<button className="p-2 text-slate-500 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors scale-95 duration-200 transition-transform">
<span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
</button>
</div>
</div>
</header>
<main className="flex-1 overflow-y-auto p-8 lg:p-12">
<div className="max-w-[1280px] mx-auto space-y-xl">
<section>
<h1 className="font-display-lg text-display-lg text-primary tracking-tight">Quản lý Báo giá &amp; Liên hệ</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-2 max-w-2xl">Theo dõi và phản hồi các yêu cầu từ khách hàng tiềm năng. Quản lý trạng thái để đảm bảo phản hồi kịp thời cho mọi dự án.</p>
</section>
<section className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-lg shadow-sm">
<div className="flex flex-col md:flex-row gap-md justify-between items-end mb-lg">
<div className="flex-1 w-full max-w-md relative">
<label className="block font-label-bold text-label-bold text-on-surface mb-2 uppercase">Tìm kiếm</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</span>
<input className="w-full pl-10 pr-4 py-3 bg-surface border border-outline-variant rounded-DEFAULT font-body-md text-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="Tên khách hàng, Email, Số điện thoại..." type="text"/>
</div>
</div>
<div className="flex flex-wrap gap-4 w-full md:w-auto">
<div>
<label className="block font-label-bold text-label-bold text-on-surface mb-2 uppercase">Trạng thái</label>
<select className="w-full md:w-48 px-4 py-3 bg-surface border border-outline-variant rounded-DEFAULT font-body-md text-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none appearance-none">
<option>Tất cả trạng thái</option>
<option>New</option>
<option>Contacted</option>
<option>Quoted</option>
<option>Closed</option>
</select>
</div>
<div>
<label className="block font-label-bold text-label-bold text-on-surface mb-2 uppercase">Thời gian</label>
<input className="w-full md:w-48 px-4 py-3 bg-surface border border-outline-variant rounded-DEFAULT font-body-md text-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none" type="date"/>
</div>
</div>
</div>
<div className="overflow-x-auto border border-outline-variant rounded-DEFAULT">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-primary text-on-primary">
<th className="py-4 px-6 font-label-bold text-label-bold uppercase tracking-wider">Customer Name</th>
<th className="py-4 px-6 font-label-bold text-label-bold uppercase tracking-wider">Contact Info</th>
<th className="py-4 px-6 font-label-bold text-label-bold uppercase tracking-wider">Requested Service</th>
<th className="py-4 px-6 font-label-bold text-label-bold uppercase tracking-wider">Submission Date</th>
<th className="py-4 px-6 font-label-bold text-label-bold uppercase tracking-wider">Status</th>
<th className="py-4 px-6 font-label-bold text-label-bold uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant bg-surface-container-lowest">
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="py-4 px-6 font-table-data text-table-data text-on-surface">Công ty XD Hòa Bình</td>
<td className="py-4 px-6">
<div className="font-table-data text-table-data text-on-surface">090 123 4567</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">contact@hoabinh.com</div>
</td>
<td className="py-4 px-6 font-table-data text-table-data text-on-surface">Concrete M300 - 500m3</td>
<td className="py-4 px-6 font-body-sm text-body-sm text-on-surface-variant">24 Oct, 2023</td>
<td className="py-4 px-6">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-primary-fixed text-on-primary-fixed-variant uppercase tracking-wider">New</span>
</td>
<td className="py-4 px-6 text-right space-x-2">
<button className="text-on-surface-variant hover:text-primary transition-colors" title="View Details">
<span className="material-symbols-outlined" data-icon="visibility">visibility</span>
</button>
<button className="text-on-surface-variant hover:text-on-tertiary-container transition-colors" title="Update Status">
<span className="material-symbols-outlined" data-icon="edit">edit</span>
</button>
<button className="text-on-surface-variant hover:text-error transition-colors" title="Delete">
<span className="material-symbols-outlined" data-icon="delete">delete</span>
</button>
<button className="text-on-surface-variant hover:text-primary transition-colors" onclick="document.getElementById('quick-reply-modal').classList.remove('hidden')" title="Quick Reply">
<span className="material-symbols-outlined" data-icon="reply">reply</span>
</button></td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="py-4 px-6 font-table-data text-table-data text-on-surface">Phát Đạt Corp</td>
<td className="py-4 px-6">
<div className="font-table-data text-table-data text-on-surface">091 987 6543</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">purchasing@phatdat.vn</div>
</td>
<td className="py-4 px-6 font-table-data text-table-data text-on-surface">Structural Steel Rebar</td>
<td className="py-4 px-6 font-body-sm text-body-sm text-on-surface-variant">22 Oct, 2023</td>
<td className="py-4 px-6">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-secondary-container text-on-secondary-container uppercase tracking-wider">Contacted</span>
</td>
<td className="py-4 px-6 text-right space-x-2">
<button className="text-on-surface-variant hover:text-primary transition-colors" title="View Details">
<span className="material-symbols-outlined" data-icon="visibility">visibility</span>
</button>
<button className="text-on-surface-variant hover:text-on-tertiary-container transition-colors" title="Update Status">
<span className="material-symbols-outlined" data-icon="edit">edit</span>
</button>
<button className="text-on-surface-variant hover:text-error transition-colors" title="Delete">
<span className="material-symbols-outlined" data-icon="delete">delete</span>
</button>
<button className="text-on-surface-variant hover:text-primary transition-colors" onclick="document.getElementById('quick-reply-modal').classList.remove('hidden')" title="Quick Reply">
<span className="material-symbols-outlined" data-icon="reply">reply</span>
</button></td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="py-4 px-6 font-table-data text-table-data text-on-surface">Nam Long Group</td>
<td className="py-4 px-6">
<div className="font-table-data text-table-data text-on-surface">098 333 2211</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">info@namlong.com</div>
</td>
<td className="py-4 px-6 font-table-data text-table-data text-on-surface">Foundation Piling Services</td>
<td className="py-4 px-6 font-body-sm text-body-sm text-on-surface-variant">18 Oct, 2023</td>
<td className="py-4 px-6">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-tertiary-fixed text-on-tertiary-fixed-variant uppercase tracking-wider">Quoted</span>
</td>
<td className="py-4 px-6 text-right space-x-2">
<button className="text-on-surface-variant hover:text-primary transition-colors" title="View Details">
<span className="material-symbols-outlined" data-icon="visibility">visibility</span>
</button>
<button className="text-on-surface-variant hover:text-on-tertiary-container transition-colors" title="Update Status">
<span className="material-symbols-outlined" data-icon="edit">edit</span>
</button>
<button className="text-on-surface-variant hover:text-error transition-colors" title="Delete">
<span className="material-symbols-outlined" data-icon="delete">delete</span>
</button>
<button className="text-on-surface-variant hover:text-primary transition-colors" onclick="document.getElementById('quick-reply-modal').classList.remove('hidden')" title="Quick Reply">
<span className="material-symbols-outlined" data-icon="reply">reply</span>
</button></td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="py-4 px-6 font-table-data text-table-data text-on-surface">Vinaconex JSC</td>
<td className="py-4 px-6">
<div className="font-table-data text-table-data text-on-surface">024 3888 9999</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">tender@vinaconex.vn</div>
</td>
<td className="py-4 px-6 font-table-data text-table-data text-on-surface">Cement PCB40 - 1000 Tons</td>
<td className="py-4 px-6 font-body-sm text-body-sm text-on-surface-variant">10 Oct, 2023</td>
<td className="py-4 px-6">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-surface-variant text-on-surface-variant uppercase tracking-wider">Closed</span>
</td>
<td className="py-4 px-6 text-right space-x-2">
<button className="text-on-surface-variant hover:text-primary transition-colors" title="View Details">
<span className="material-symbols-outlined" data-icon="visibility">visibility</span>
</button>
<button className="text-on-surface-variant hover:text-on-tertiary-container transition-colors" title="Update Status">
<span className="material-symbols-outlined" data-icon="edit">edit</span>
</button>
<button className="text-on-surface-variant hover:text-error transition-colors" title="Delete">
<span className="material-symbols-outlined" data-icon="delete">delete</span>
</button>
<button className="text-on-surface-variant hover:text-primary transition-colors" onclick="document.getElementById('quick-reply-modal').classList.remove('hidden')" title="Quick Reply">
<span className="material-symbols-outlined" data-icon="reply">reply</span>
</button></td>
</tr>
</tbody>
</table>
</div>
<div className="flex items-center justify-between mt-6 pt-4 border-t border-outline-variant">
<span className="font-body-sm text-body-sm text-on-surface-variant">Showing 1 to 4 of 48 entries</span>
<div className="flex items-center gap-1">
<button className="px-3 py-1 border border-outline-variant rounded-DEFAULT text-on-surface hover:bg-surface-container-low transition-colors disabled:opacity-50 font-body-sm text-body-sm" disabled="">Prev</button>
<button className="px-3 py-1 bg-primary text-on-primary rounded-DEFAULT font-body-sm text-body-sm">1</button>
<button className="px-3 py-1 border border-outline-variant rounded-DEFAULT text-on-surface hover:bg-surface-container-low transition-colors font-body-sm text-body-sm">2</button>
<button className="px-3 py-1 border border-outline-variant rounded-DEFAULT text-on-surface hover:bg-surface-container-low transition-colors font-body-sm text-body-sm">3</button>
<span className="px-2 text-on-surface-variant">...</span>
<button className="px-3 py-1 border border-outline-variant rounded-DEFAULT text-on-surface hover:bg-surface-container-low transition-colors font-body-sm text-body-sm">Next</button>
</div>
</div>
</section>
</div>
</main>
</div>
<div className="hidden fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm" id="quick-reply-modal">
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-2xl w-full max-w-xl mx-4 overflow-hidden">
<div className="bg-primary text-on-primary px-6 py-4 flex justify-between items-center">
<h3 className="font-headline-sm text-lg uppercase tracking-wider">Quick Reply</h3>
<button className="hover:rotate-90 transition-transform" onclick="document.getElementById('quick-reply-modal').classList.add('hidden')">
<span className="material-symbols-outlined">close</span>
</button>
</div>
<div className="p-6 space-y-6">
<div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant">
<p className="text-xs font-label-bold text-on-surface-variant uppercase mb-1">Inquiry Context</p>
<p className="font-table-data text-on-surface">Customer: <span className="font-bold" id="modal-customer-name">Công ty XD Hòa Bình</span></p>
<p className="font-body-sm text-on-surface-variant">Service: Concrete M300 - 500m3</p>
</div>
<div>
<label className="block text-xs font-label-bold text-on-surface uppercase mb-3">Quick Templates</label>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1.5 bg-surface border border-outline-variant rounded-full text-xs font-medium hover:border-primary hover:text-primary transition-colors">Thank you for your interest</button>
<button className="px-3 py-1.5 bg-surface border border-outline-variant rounded-full text-xs font-medium hover:border-primary hover:text-primary transition-colors">Schedule a consultation</button>
<button className="px-3 py-1.5 bg-surface border border-outline-variant rounded-full text-xs font-medium hover:border-primary hover:text-primary transition-colors">Request more details</button>
</div>
</div>
<div>
<label className="block text-xs font-label-bold text-on-surface uppercase mb-2">Your Message</label>
<textarea className="w-full p-4 bg-surface border border-outline-variant rounded-lg font-body-md text-on-surface focus:ring-1 focus:ring-primary focus:border-primary outline-none min-h-[150px] resize-none" placeholder="Type your reply here..."></textarea>
</div>
<div className="flex justify-end gap-3 pt-2">
<button className="px-6 py-2.5 border border-outline-variant rounded text-sm font-bold text-on-surface hover:bg-surface-container-low transition-colors uppercase" onclick="document.getElementById('quick-reply-modal').classList.add('hidden')">Cancel</button>
<button className="px-6 py-2.5 bg-orange-600 text-white rounded text-sm font-bold hover:bg-orange-700 shadow-md transition-all uppercase">Send Reply</button>
</div>
</div>
</div>
</div>
    </div>
  );
}
