import React from 'react';

export default function NhTKHThNgAdminCms2() {
  return (
    <div>
      {/* SideNavBar */}
<nav className="bg-slate-900 dark:bg-slate-950 font-['Inter'] antialiased text-sm font-medium tracking-tight h-screen w-64 border-r border-slate-800 dark:border-slate-800 flat no shadows fixed left-0 top-0 h-full z-40 flex flex-col hidden md:flex">
<div className="p-6 border-b border-slate-800">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center text-white font-bold">M</div>
<div>
<h1 className="text-xl font-bold tracking-tighter text-white leading-tight">MaterialCore</h1>
<span className="text-xs text-slate-400">Admin Console</span>
</div>
</div>
<button className="mt-6 w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded transition-colors active:scale-95 transform transition-transform flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">add</span> New Project
            </button>
</div>
<div className="flex-1 overflow-y-auto py-4">
<ul className="space-y-1">
<li>
<a className="text-slate-400 hover:bg-slate-800 hover:text-white px-4 py-3 flex items-center gap-3 transition-colors hover:bg-slate-800 transition-all duration-200 active:scale-95 transform transition-transform" href="#">
<span className="material-symbols-outlined">dashboard</span>
                        Dashboard
                    </a>
</li>
<li>
<a className="text-slate-400 hover:bg-slate-800 hover:text-white px-4 py-3 flex items-center gap-3 transition-colors hover:bg-slate-800 transition-all duration-200 active:scale-95 transform transition-transform" href="#">
<span className="material-symbols-outlined">inventory_2</span>
                        Materials
                    </a>
</li>
<li>
<a className="text-slate-400 hover:bg-slate-800 hover:text-white px-4 py-3 flex items-center gap-3 transition-colors hover:bg-slate-800 transition-all duration-200 active:scale-95 transform transition-transform" href="#">
<span className="material-symbols-outlined">construction</span>
                        Projects
                    </a>
</li>
<li>
<a className="bg-orange-600 text-white border-l-4 border-orange-400 px-4 py-3 flex items-center gap-3 hover:bg-slate-800 transition-all duration-200 active:scale-95 transform transition-transform" href="#">
<span className="material-symbols-outlined">history_edu</span>
                        Audit Logs
                    </a>
</li>
<li>
<a className="text-slate-400 hover:bg-slate-800 hover:text-white px-4 py-3 flex items-center gap-3 transition-colors hover:bg-slate-800 transition-all duration-200 active:scale-95 transform transition-transform" href="#">
<span className="material-symbols-outlined">group</span>
                        Users
                    </a>
</li>
</ul>
</div>
<div className="p-4 border-t border-slate-800">
<ul className="space-y-1">
<li>
<a className="text-slate-400 hover:bg-slate-800 hover:text-white px-4 py-3 flex items-center gap-3 transition-colors hover:bg-slate-800 transition-all duration-200 active:scale-95 transform transition-transform" href="#">
<span className="material-symbols-outlined">help</span>
                        Support
                    </a>
</li>
<li>
<a className="text-slate-400 hover:bg-slate-800 hover:text-white px-4 py-3 flex items-center gap-3 transition-colors hover:bg-slate-800 transition-all duration-200 active:scale-95 transform transition-transform" href="#">
<span className="material-symbols-outlined">settings</span>
                        Settings
                    </a>
</li>
</ul>
</div>
</nav>
{/* Main Content Area */}
<div className="flex-1 flex flex-col min-w-0 md:ml-64">
{/* TopAppBar */}
<header className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-900 dark:text-slate-100 font-['Inter'] text-base font-semibold docked full-width top-0 border-b border-b border-slate-200 dark:border-slate-800 flat no shadows flex justify-between items-center w-full px-6 py-3 sticky top-0 z-30">
<div className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-widest">
                System Audit Logs
            </div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
<input className="pl-10 pr-4 py-2 bg-surface-container-low border-outline-variant rounded-full text-sm focus:ring-2 focus:ring-orange-500 outline-none w-64 text-slate-500 dark:text-slate-400" placeholder="Search..." type="text"/>
</div>
<button className="text-slate-500 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors focus:ring-2 focus:ring-orange-500 outline-none p-2 rounded-full">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="text-slate-500 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors focus:ring-2 focus:ring-orange-500 outline-none p-2 rounded-full">
<span className="material-symbols-outlined">help_outline</span>
</button>
<button className="text-slate-500 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors focus:ring-2 focus:ring-orange-500 outline-none p-2 rounded-full">
<span className="material-symbols-outlined">account_circle</span>
</button>
</div>
</header>
{/* Page Content */}
<main className="flex-1 p-6 lg:p-8 overflow-y-auto">
{/* Page Header */}
<div className="mb-8">
<h2 className="font-headline-md text-headline-md text-primary">Nhật ký Hệ thống</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">Theo dõi và giám sát mọi hoạt động quản trị trên hệ thống.</p>
</div>
{/* Filter Bar */}
<div className="bg-surface-container-lowest border border-outline-variant p-4 mb-6 flex flex-col md:flex-row gap-4 items-end">
<div className="w-full md:w-1/4">
<label className="block font-label-bold text-label-bold text-on-surface-variant mb-2 uppercase">Search</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full pl-10 pr-3 py-2 border border-outline-variant rounded bg-surface focus:border-primary focus:ring-1 focus:ring-primary font-body-sm text-body-sm text-on-surface outline-none transition-colors" placeholder="Admin name or action..." type="text"/>
</div>
</div>
<div className="w-full md:w-1/5">
<label className="block font-label-bold text-label-bold text-on-surface-variant mb-2 uppercase">Module</label>
<select className="w-full px-3 py-2 border border-outline-variant rounded bg-surface focus:border-primary focus:ring-1 focus:ring-primary font-body-sm text-body-sm text-on-surface outline-none transition-colors">
<option>All Modules</option>
<option>Products</option>
<option>Projects</option>
<option>Users</option>
<option>Settings</option>
</select>
</div>
<div className="w-full md:w-1/5">
<label className="block font-label-bold text-label-bold text-on-surface-variant mb-2 uppercase">Action Type</label>
<select className="w-full px-3 py-2 border border-outline-variant rounded bg-surface focus:border-primary focus:ring-1 focus:ring-primary font-body-sm text-body-sm text-on-surface outline-none transition-colors">
<option>All Actions</option>
<option>Create</option>
<option>Update</option>
<option>Delete</option>
<option>Login</option>
</select>
</div>
<div className="w-full md:w-1/4">
<label className="block font-label-bold text-label-bold text-on-surface-variant mb-2 uppercase">Date Range</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">calendar_today</span>
<input className="w-full pl-10 pr-3 py-2 border border-outline-variant rounded bg-surface focus:border-primary focus:ring-1 focus:ring-primary font-body-sm text-body-sm text-on-surface outline-none transition-colors" placeholder="Last 7 Days" type="text"/>
</div>
</div>
<div className="w-full md:w-auto">
<button className="w-full md:w-auto px-6 py-2 bg-primary text-on-primary font-table-data text-table-data rounded hover:bg-on-primary-fixed-variant transition-colors flex items-center justify-center gap-2 h-[42px]">
<span className="material-symbols-outlined text-sm">filter_list</span> Filter
                    </button>
</div>
</div>
{/* Data Table */}
<div className="bg-surface-container-lowest border border-outline-variant overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-primary text-on-primary font-label-bold text-label-bold uppercase tracking-wider">
<th className="py-4 px-6 font-medium">Thời gian</th>
<th className="py-4 px-6 font-medium">Người thực hiện</th>
<th className="py-4 px-6 font-medium">Hành động</th>
<th className="py-4 px-6 font-medium">Phân hệ</th>
<th className="py-4 px-6 font-medium">Địa chỉ IP</th>
<th className="py-4 px-6 font-medium">Trạng thái</th>
<th className="py-4 px-6 font-medium text-center">Chi tiết</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant font-table-data text-table-data text-on-surface">
<tr className="hover:bg-surface-container-low transition-colors group cursor-pointer">
<td className="py-4 px-6 whitespace-nowrap text-on-surface-variant">2023-10-27 14:32:01</td>
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-8 h-8 rounded-full border border-outline-variant object-cover" data-alt="professional headshot of a man in a modern office setting, bright lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrlAJcpDVnpNZbFTYRT4aYwh2L_LKyqOKxjLri-jvNT4Hg-G2a7hRFqBOeD-cLU22yE5XT5iNRgL7mkYQUpExHKxtkBPDV003bd__xfMk9RrP_ZhInSY_8FABmzass4l-Z74TXJ54v6uep6e4G2VCClmFEYd-yeRCMfdAfr0LyxId-KXraMo-KmHB8DE6RqieylXO9PXWc5-_BxZbXPST6fjVvBFHGvW6GeW10PC4siK-BeY4HitOmo8mV06hDztd_zg9v2okZpCtz"/>
<span className="font-medium">Admin User 1</span>
</div>
</td>
<td className="py-4 px-6">Cập nhật sản phẩm 'Thép Xây Dựng Hòa Phát'</td>
<td className="py-4 px-6"><span className="px-2 py-1 bg-surface-container-high rounded text-xs text-on-surface-variant font-medium">Products</span></td>
<td className="py-4 px-6 text-on-surface-variant font-mono text-xs">192.168.1.105</td>
<td className="py-4 px-6">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#E6F4EA] text-[#137333] border border-[#CEEAD6]">
<span className="w-1.5 h-1.5 rounded-full bg-[#1E8E3E]"></span> Success
                                    </span>
</td>
<td className="py-4 px-6 text-center">
<button className="text-outline hover:text-primary transition-colors p-1 rounded hover:bg-surface-container">
<span className="material-symbols-outlined text-xl">visibility</span>
</button>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors group cursor-pointer">
<td className="py-4 px-6 whitespace-nowrap text-on-surface-variant">2023-10-27 13:15:45</td>
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-8 h-8 rounded-full border border-outline-variant object-cover" data-alt="professional headshot of a woman in a modern office setting, bright lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBl5pD3slB5OXZX1DAs75TsXnF150pdqla4fx7-Y0XeNhb5WK86AB7q9w9V_6jdUgi0_mfi5i3k3gGIdD8EhCLhbyvUG8uzcKU3gSO7q72cxB1DAA_S9jOoLRfBIKwjcQrY_15vXl9xGp8V7ydDyVDdxCrQaEENFbbF54wtIQzjQmsJ6oZC39jWH6xOV0M-cK8OqWELq2-N0zX362lelcRZ6fY4LN_p2O3CdfOrx-tmo7_EeCTAJT4PGvZaCwzttJtP5dqw6AZVfKri"/>
<span className="font-medium">Manager User 2</span>
</div>
</td>
<td className="py-4 px-6">Xóa dự án 'Khu đô thị mới An Khánh'</td>
<td className="py-4 px-6"><span className="px-2 py-1 bg-surface-container-high rounded text-xs text-on-surface-variant font-medium">Projects</span></td>
<td className="py-4 px-6 text-on-surface-variant font-mono text-xs">10.0.0.52</td>
<td className="py-4 px-6">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#E6F4EA] text-[#137333] border border-[#CEEAD6]">
<span className="w-1.5 h-1.5 rounded-full bg-[#1E8E3E]"></span> Success
                                    </span>
</td>
<td className="py-4 px-6 text-center">
<button className="text-outline hover:text-primary transition-colors p-1 rounded hover:bg-surface-container">
<span className="material-symbols-outlined text-xl">visibility</span>
</button>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors group cursor-pointer">
<td className="py-4 px-6 whitespace-nowrap text-on-surface-variant">2023-10-27 11:05:12</td>
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold border border-outline-variant">SA</div>
<span className="font-medium">System Auto</span>
</div>
</td>
<td className="py-4 px-6">Đồng bộ dữ liệu tồn kho thất bại</td>
<td className="py-4 px-6"><span className="px-2 py-1 bg-surface-container-high rounded text-xs text-on-surface-variant font-medium">System</span></td>
<td className="py-4 px-6 text-on-surface-variant font-mono text-xs">localhost</td>
<td className="py-4 px-6">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#FCE8E6] text-[#A50E0E] border border-[#FAD2CF]">
<span className="w-1.5 h-1.5 rounded-full bg-[#D93025]"></span> Failed
                                    </span>
</td>
<td className="py-4 px-6 text-center">
<button className="text-outline hover:text-primary transition-colors p-1 rounded hover:bg-surface-container">
<span className="material-symbols-outlined text-xl">visibility</span>
</button>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors group cursor-pointer">
<td className="py-4 px-6 whitespace-nowrap text-on-surface-variant">2023-10-27 09:00:05</td>
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-8 h-8 rounded-full border border-outline-variant object-cover" data-alt="professional headshot of a man in a modern office setting, bright lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw7utakdqFosvD0VZHEYDgos1UjaJgEN2de3Pkn0ke7N87EWyX5-oKUxGEE0Rx4zrloyjnvqbvJYmt54RoafglwuiNpr9kWi5mTjt_py-Wd_UMfju33ljQpOPBMdedlpLhLYUgbmfuObALPCsRkgGdT1vrMr3vj17ADCxoM6J8DZwL4TcO06Nxd2dMS1mzu1c6qBqfXa4FgyjkhTX6Y61QlBhmh1JhcMi1gBxfaoOc6Aa9Uv-f2MizvzXC7giptBgsXmkGl2fsiRxA"/>
<span className="font-medium">Admin User 1</span>
</div>
</td>
<td className="py-4 px-6">Đăng nhập hệ thống</td>
<td className="py-4 px-6"><span className="px-2 py-1 bg-surface-container-high rounded text-xs text-on-surface-variant font-medium">Auth</span></td>
<td className="py-4 px-6 text-on-surface-variant font-mono text-xs">192.168.1.105</td>
<td className="py-4 px-6">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#E6F4EA] text-[#137333] border border-[#CEEAD6]">
<span className="w-1.5 h-1.5 rounded-full bg-[#1E8E3E]"></span> Success
                                    </span>
</td>
<td className="py-4 px-6 text-center">
<button className="text-outline hover:text-primary transition-colors p-1 rounded hover:bg-surface-container">
<span className="material-symbols-outlined text-xl">visibility</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
{/* Pagination */}
<div className="bg-surface px-6 py-4 border-t border-outline-variant flex items-center justify-between">
<div className="font-body-sm text-body-sm text-on-surface-variant">
                        Showing <span className="font-medium text-on-surface">1</span> to <span className="font-medium text-on-surface">20</span> of <span className="font-medium text-on-surface">1,240</span> entries
                    </div>
<div className="flex items-center gap-1">
<button className="px-3 py-1.5 border border-outline-variant rounded text-on-surface-variant hover:bg-surface-container-high disabled:opacity-50 transition-colors font-body-sm text-body-sm flex items-center" disabled="">
<span className="material-symbols-outlined text-sm mr-1">chevron_left</span> Prev
                        </button>
<button className="w-8 h-8 flex items-center justify-center border border-primary bg-primary text-on-primary rounded font-body-sm text-body-sm font-medium">1</button>
<button className="w-8 h-8 flex items-center justify-center border border-outline-variant bg-surface text-on-surface hover:bg-surface-container-high rounded font-body-sm text-body-sm transition-colors">2</button>
<button className="w-8 h-8 flex items-center justify-center border border-outline-variant bg-surface text-on-surface hover:bg-surface-container-high rounded font-body-sm text-body-sm transition-colors">3</button>
<span className="px-2 text-outline-variant">...</span>
<button className="w-8 h-8 flex items-center justify-center border border-outline-variant bg-surface text-on-surface hover:bg-surface-container-high rounded font-body-sm text-body-sm transition-colors">62</button>
<button className="px-3 py-1.5 border border-outline-variant rounded text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm flex items-center">
                            Next <span className="material-symbols-outlined text-sm ml-1">chevron_right</span>
</button>
</div>
</div>
</div>
</main>
</div>
    </div>
  );
}
