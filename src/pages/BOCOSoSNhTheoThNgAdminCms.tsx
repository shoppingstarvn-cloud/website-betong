import React from 'react';

export default function BOCOSoSNhTheoThNgAdminCms() {
  return (
    <div>
      {/* SideNavBar (Shared Component JSON) */}
<aside className="fixed left-0 top-0 h-full flex flex-col z-40 h-screen w-64 border-r bg-white border-r border-slate-200">
{/* Header */}
<div className="px-6 py-8 border-b border-outline-variant/30 flex items-center gap-sm">
<div className="w-10 h-10 rounded-DEFAULT bg-primary flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">domain</span>
</div>
<div>
<h2 className="text-lg font-bold text-slate-900">Admin Panel</h2>
<p className="font-['Inter'] text-sm font-medium text-outline">Monthly Reporting</p>
</div>
</div>
{/* Navigation Tabs */}
<nav className="flex-1 py-md flex flex-col gap-xs overflow-y-auto">
{/* Inactive */}
<a className="text-slate-500 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 transition-colors duration-200 ease-in-out font-['Inter'] text-sm font-medium" href="#">
<span className="material-symbols-outlined">dashboard</span>
                Dashboard
            </a>
{/* Active (Intent: Monthly Detailed Report -> Reports) */}
<a className="bg-slate-100 text-slate-900 border-l-4 border-slate-900 px-4 py-3 flex items-center gap-3 font-['Inter'] text-sm font-medium" href="#">
<span className="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">analytics</span>
                Reports
            </a>
{/* Inactive */}
<a className="text-slate-500 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 transition-colors duration-200 ease-in-out font-['Inter'] text-sm font-medium" href="#">
<span className="material-symbols-outlined">compare_arrows</span>
                Comparison
            </a>
{/* Inactive */}
<a className="text-slate-500 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 transition-colors duration-200 ease-in-out font-['Inter'] text-sm font-medium" href="#">
<span className="material-symbols-outlined">precision_manufacturing</span>
                Materials
            </a>
{/* Inactive */}
<a className="text-slate-500 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 transition-colors duration-200 ease-in-out font-['Inter'] text-sm font-medium" href="#">
<span className="material-symbols-outlined">inventory_2</span>
                Inventory
            </a>
</nav>
{/* Footer */}
<div className="border-t border-outline-variant/30 py-md flex flex-col gap-xs">
<a className="text-slate-500 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 transition-colors duration-200 ease-in-out font-['Inter'] text-sm font-medium" href="#">
<span className="material-symbols-outlined">settings</span>
                Settings
            </a>
<a className="text-slate-500 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 transition-colors duration-200 ease-in-out font-['Inter'] text-sm font-medium" href="#">
<span className="material-symbols-outlined">logout</span>
                Logout
            </a>
</div>
</aside>
{/* Main Content Wrapper */}
<main className="flex-1 ml-64 flex flex-col min-h-screen">
{/* TopAppBar (Shared Component JSON) */}
<header className="flex justify-between items-center w-full px-6 h-16 bg-white border-b border-slate-200 docked full-width top-0 z-30">
<div className="flex items-center gap-sm">
<span className="text-xl font-black text-slate-900 tracking-tighter">Industrial Insights</span>
</div>
<div className="flex items-center gap-md">
{/* Search (on_right) */}
<div className="relative hidden md:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">search</span>
<input className="pl-9 pr-4 py-2 border border-slate-200 rounded-DEFAULT text-sm font-['Inter'] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-64 bg-surface-container-lowest" placeholder="Search data..." type="text"/>
</div>
{/* Trailing Icons */}
<div className="flex items-center gap-2">
<button className="p-2 text-slate-500 hover:bg-slate-50 transition-colors cursor-pointer active:opacity-80 transition-all rounded-full flex items-center justify-center">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 text-slate-500 hover:bg-slate-50 transition-colors cursor-pointer active:opacity-80 transition-all rounded-full flex items-center justify-center">
<span className="material-symbols-outlined">settings</span>
</button>
</div>
{/* Profile */}
<div className="h-8 w-8 rounded-full bg-surface-variant border border-outline-variant overflow-hidden ml-2">
<img alt="User avatar" className="h-full w-full object-cover" data-alt="Professional headshot of a businessman in a light office environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBADT_lzgn2FqzUM8C-KTiHxThB6nPFDZg0MSP7mICQeRvO6EYUWDt6mTK3y7mZoJyVLeK_UlJ-P4Zcy7Uxdd7dAxzl3ecKjK36fbnJndTdL1LXzwIQRHecPTC9Rj7B3GUKM68vcmpnrIinuzGAnaT4qNvxwPTVjR6IX2Avuk0RVx3NoGXSfUSJW7rifyNY6Yh5hgBo4SVnINWG5pHQqLRnoqFfnfuiMFC0PdW2kdGRr9SLWfmgkYhIaqWj0iYKKNYnjQ_6uoAWHoTX"/>
</div>
</div>
</header>
{/* Page Content Canvas */}
<div className="p-margin max-w-max_width mx-auto w-full flex flex-col gap-xl">
{/* Page Header */}
<div className="flex justify-between items-end border-b border-outline-variant pb-md">
<div>
<p className="font-label-bold text-label-bold text-outline uppercase tracking-wider mb-xs">Performance Analysis</p>
<h1 className="font-headline-md text-headline-md text-primary">Báo cáo So sánh theo Tháng</h1>
</div>
<div className="flex gap-sm">
<button className="flex items-center gap-2 px-4 py-2 bg-surface-container-lowest border border-outline-variant text-on-surface font-table-data text-table-data rounded-DEFAULT hover:bg-surface-container-low shadow-[0_4px_12px_rgba(26,43,60,0.04)] transition-all">
<span className="material-symbols-outlined text-sm">calendar_month</span>
                        Tháng 10 vs Tháng 9, 2023
                        <span className="material-symbols-outlined text-sm">arrow_drop_down</span>
</button>
<button className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary font-table-data text-table-data rounded-DEFAULT hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined text-sm">download</span>
                        Export
                    </button>
</div>
</div>
{/* KPI Cards Grid (Level 1 Depth) */}
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
{/* Card 1: Visits */}
<div className="bg-surface-container-lowest border border-outline-variant/50 p-md flex flex-col gap-sm rounded-DEFAULT relative overflow-hidden group hover:shadow-[0_4px_12px_rgba(26,43,60,0.08)] transition-shadow">
<div className="absolute top-0 left-0 w-1 h-full bg-surface-tint"></div>
<p className="font-table-data text-table-data text-outline">Total Visits</p>
<div className="flex items-baseline gap-sm">
<span className="font-headline-sm text-headline-sm text-primary">42,890</span>
<div className="flex items-center text-sm font-table-data">
<span className="material-symbols-outlined text-xs">trending_up</span>
<span className="ml-1">+12.4%</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-outline-variant text-xs">vs. 38,150 prev. month</p>
</div>
{/* Card 2: Total Inquiries */}
<div className="bg-surface-container-lowest border border-outline-variant/50 p-md flex flex-col gap-sm rounded-DEFAULT relative overflow-hidden group hover:shadow-[0_4px_12px_rgba(26,43,60,0.08)] transition-shadow">
<div className="absolute top-0 left-0 w-1 h-full bg-surface-tint"></div>
<p className="font-table-data text-table-data text-outline">Total Inquiries</p>
<div className="flex items-baseline gap-sm">
<span className="font-headline-sm text-headline-sm text-primary">1,245</span>
<div className="flex items-center text-sm font-table-data">
<span className="material-symbols-outlined text-xs">trending_up</span>
<span className="ml-1">+8.2%</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-outline-variant text-xs">vs. 1,150 prev. month</p>
</div>
{/* Card 3: Top Product */}
<div className="bg-surface-container-lowest border border-outline-variant/50 p-md flex flex-col gap-sm rounded-DEFAULT relative overflow-hidden group hover:shadow-[0_4px_12px_rgba(26,43,60,0.08)] transition-shadow">
<div className="absolute top-0 left-0 w-1 h-full bg-surface-tint"></div>
<p className="font-table-data text-table-data text-outline">Top Performing Asset</p>
<div className="flex items-baseline gap-sm">
<span className="font-headline-sm text-headline-sm text-primary text-xl truncate">Type I Portland</span>
</div>
<div className="flex items-center text-sm font-table-data text-outline-variant mt-auto">
<span className="material-symbols-outlined text-xs mr-1">category</span>
                        Cement &amp; Binding
                    </div>
</div>
{/* Card 4: Conversion Rate */}
<div className="bg-surface-container-lowest border border-outline-variant/50 p-md flex flex-col gap-sm rounded-DEFAULT relative overflow-hidden group hover:shadow-[0_4px_12px_rgba(26,43,60,0.08)] transition-shadow">
<div className="absolute top-0 left-0 w-1 h-full bg-error"></div>
<p className="font-table-data text-table-data text-outline">Conversion Rate</p>
<div className="flex items-baseline gap-sm">
<span className="font-headline-sm text-headline-sm text-primary">2.9%</span>
<div className="flex items-center text-sm font-table-data text-error">
<span className="material-symbols-outlined text-xs">trending_down</span>
<span className="ml-1">-0.4%</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-outline-variant text-xs">vs. 3.3% prev. month</p>
</div>
</section>
{/* Charts Section (Bento layout style) */}
<section className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
{/* Traffic Trend (Line Chart) */}
<div className="lg:col-span-2 bg-surface-container-lowest border border-outline-variant/50 rounded-DEFAULT flex flex-col">
<div className="px-md py-sm border-b border-outline-variant/30 flex justify-between items-center bg-[#F5F7F9]">
<h3 className="font-table-data text-table-data text-primary">Traffic Trend (MoM Comparison)</h3>
<div className="flex gap-sm font-body-sm text-body-sm text-xs">
<div className="flex items-center gap-2"><span className="w-3 h-1 bg-primary block"></span> Current Month</div>
<div className="flex items-center gap-2"><span className="w-3 h-1 bg-outline block opacity-50"></span> Previous Month</div>
</div>
</div>
<div className="p-md flex-1 relative min-h-[300px]">
{/* Chart Grid Background */}
<div className="absolute inset-0 p-md flex flex-col justify-between z-0 pointer-events-none">
<div className="w-full h-px bg-outline-variant/20"></div>
<div className="w-full h-px bg-outline-variant/20"></div>
<div className="w-full h-px bg-outline-variant/20"></div>
<div className="w-full h-px bg-outline-variant/20"></div>
<div className="w-full h-px bg-outline-variant/20"></div>
</div>
{/* SVG Line Mockup */}
<svg className="w-full h-full relative z-10" preserveaspectratio="none" viewbox="0 0 100 40">
{/* Previous Month (Dashed) */}
<path className="opacity-50" d="M0,30 L10,25 L20,28 L30,15 L40,20 L50,10 L60,18 L70,12 L80,22 L90,15 L100,5" fill="none" stroke="#74777d" stroke-dasharray="2,2" stroke-linejoin="round" stroke-width="0.5"></path>
{/* Current Month (Solid) */}
<path d="M0,35 L10,22 L20,18 L30,25 L40,12 L50,15 L60,8 L70,10 L80,5 L90,12 L100,2" fill="none" stroke="#041627" stroke-linejoin="round" stroke-width="1"></path>
</svg>
{/* X-Axis Labels */}
<div className="absolute bottom-2 left-md right-md flex justify-between text-[10px] text-outline font-['Inter']">
<span>W1</span><span>W2</span><span>W3</span><span>W4</span>
</div>
</div>
</div>
{/* Category Interest (Donut Chart) */}
<div className="bg-surface-container-lowest border border-outline-variant/50 rounded-DEFAULT flex flex-col">
<div className="px-md py-sm border-b border-outline-variant/30 bg-[#F5F7F9]">
<h3 className="font-table-data text-table-data text-primary">Category Interest</h3>
</div>
<div className="p-md flex-1 flex flex-col items-center justify-center gap-md">
<div className="relative w-48 h-48">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 32 32">
{/* Base/Background */}
<circle cx="16" cy="16" fill="transparent" r="16" stroke="#f2f4f6" stroke-width="8"></circle>
{/* Segment 1 (Cement) */}
<circle cx="16" cy="16" fill="transparent" r="16" stroke="#041627" stroke-dasharray="45 100" stroke-width="8"></circle>
{/* Segment 2 (Steel) */}
<circle cx="16" cy="16" fill="transparent" r="16" stroke="#4f6073" stroke-dasharray="30 100" stroke-dashoffset="-45" stroke-width="8"></circle>
{/* Segment 3 (Aggregates) */}
<circle cx="16" cy="16" fill="transparent" r="16" stroke="#b7c8de" stroke-dasharray="15 100" stroke-dashoffset="-75" stroke-width="8"></circle>
{/* Segment 4 (Other) */}
<circle cx="16" cy="16" fill="transparent" r="16" stroke="#e0e3e5" stroke-dasharray="10 100" stroke-dashoffset="-90" stroke-width="8"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
<span className="font-headline-sm text-headline-sm text-primary">45%</span>
<span className="text-[10px] font-table-data text-outline uppercase tracking-wider">Top Cat.</span>
</div>
</div>
{/* Legend */}
<div className="w-full flex flex-col gap-2 font-body-sm text-body-sm text-xs mt-4">
<div className="flex justify-between items-center"><div className="flex items-center gap-2"><span className="w-3 h-3 bg-primary rounded-sm block"></span> Cement &amp; Binding</div> <span className="font-table-data">45%</span></div>
<div className="flex justify-between items-center"><div className="flex items-center gap-2"><span className="w-3 h-3 bg-surface-tint rounded-sm block"></span> Structural Steel</div> <span className="font-table-data">30%</span></div>
<div className="flex justify-between items-center"><div className="flex items-center gap-2"><span className="w-3 h-3 bg-inverse-primary rounded-sm block"></span> Aggregates</div> <span className="font-table-data">15%</span></div>
<div className="flex justify-between items-center"><div className="flex items-center gap-2"><span className="w-3 h-3 bg-surface-variant rounded-sm block"></span> Masonry</div> <span className="font-table-data">10%</span></div>
</div>
</div>
</div>
</section>
{/* Product Performance Detail Table */}
<section className="bg-surface-container-lowest border border-outline-variant/50 rounded-DEFAULT overflow-hidden flex flex-col">
<div className="px-md py-sm border-b border-outline-variant/30 flex justify-between items-center bg-[#F5F7F9]">
<h3 className="font-table-data text-table-data text-primary">Product Performance Detail</h3>
<button className="text-sm font-table-data text-surface-tint hover:text-primary transition-colors flex items-center gap-1">
                        View Full Catalog <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-primary text-on-primary font-table-data text-table-data">
<th className="py-3 px-md font-medium">Product Name</th>
<th className="py-3 px-md font-medium">Category</th>
<th className="py-3 px-md font-medium text-right">Views</th>
<th className="py-3 px-md font-medium text-right">Inquiries</th>
<th className="py-3 px-md font-medium text-right">MoM Conversion Change</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md text-on-surface">
<tr className="border-b border-outline-variant/30 hover:bg-surface-container-low transition-colors">
<td className="py-4 px-md font-table-data">Type I Portland Cement</td>
<td className="py-4 px-md text-outline">Cement &amp; Binding</td>
<td className="py-4 px-md text-right font-table-data">8,450</td>
<td className="py-4 px-md text-right font-table-data">320</td>
<td className="py-4 px-md text-right">
<span className="inline-flex items-center gap-1 text-sm">
<span className="material-symbols-outlined text-[16px]">trending_up</span> +2.1%
                                    </span>
</td>
</tr>
<tr className="border-b border-outline-variant/30 hover:bg-surface-container-low transition-colors">
<td className="py-4 px-md font-table-data">Rebar Grade 60 (20ft)</td>
<td className="py-4 px-md text-outline">Structural Steel</td>
<td className="py-4 px-md text-right font-table-data">6,210</td>
<td className="py-4 px-md text-right font-table-data">285</td>
<td className="py-4 px-md text-right">
<span className="inline-flex items-center gap-1 text-sm">
<span className="material-symbols-outlined text-[16px]">trending_up</span> +0.8%
                                    </span>
</td>
</tr>
<tr className="border-b border-outline-variant/30 hover:bg-surface-container-low transition-colors">
<td className="py-4 px-md font-table-data">Crushed Gravel (3/4")</td>
<td className="py-4 px-md text-outline">Aggregates</td>
<td className="py-4 px-md text-right font-table-data">4,100</td>
<td className="py-4 px-md text-right font-table-data">112</td>
<td className="py-4 px-md text-right text-error">
<span className="inline-flex items-center gap-1 text-sm">
<span className="material-symbols-outlined text-[16px]">trending_down</span> -1.5%
                                    </span>
</td>
</tr>
<tr className="border-b border-outline-variant/30 hover:bg-surface-container-low transition-colors">
<td className="py-4 px-md font-table-data">Ready-Mix Concrete (3000 PSI)</td>
<td className="py-4 px-md text-outline">Cement &amp; Binding</td>
<td className="py-4 px-md text-right font-table-data">3,890</td>
<td className="py-4 px-md text-right font-table-data">195</td>
<td className="py-4 px-md text-right">
<span className="inline-flex items-center gap-1 text-sm">
<span className="material-symbols-outlined text-[16px]">trending_up</span> +4.3%
                                    </span>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-4 px-md font-table-data">Cinder Block (8x8x16)</td>
<td className="py-4 px-md text-outline">Masonry</td>
<td className="py-4 px-md text-right font-table-data">2,150</td>
<td className="py-4 px-md text-right font-table-data">45</td>
<td className="py-4 px-md text-right text-error">
<span className="inline-flex items-center gap-1 text-sm">
<span className="material-symbols-outlined text-[16px]">trending_down</span> -0.2%
                                    </span>
</td>
</tr>
</tbody>
</table>
</div>
</section>
</div>
</main>
    </div>
  );
}
