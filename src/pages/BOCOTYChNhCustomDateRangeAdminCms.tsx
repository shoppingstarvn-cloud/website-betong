import React from 'react';

export default function BOCOTYChNhCustomDateRangeAdminCms() {
  return (
    <div>
      {/* SideNavBar */}
<nav className="bg-slate-900 dark:bg-black text-orange-500 font-inter text-xs uppercase tracking-widest font-semibold h-screen w-64 border-r border-r border-slate-800 flat no shadows flex flex-col fixed left-0 top-0 h-full z-40 hidden md:flex">
<div className="text-white font-black px-4 py-6">
<div className="flex items-center gap-xs">
<span className="material-symbols-outlined" data-icon="factory">factory</span>
<div className="flex flex-col">
<span className="text-sm">Industrial Ops</span>
<span className="text-[10px] text-slate-400 font-normal">Site Manager Pro</span>
</div>
</div>
</div>
<div className="flex-1 flex flex-col gap-base mt-sm">
<a className="text-slate-400 hover:text-white px-4 py-3 hover:bg-slate-800/50 transition-all active:opacity-80 flex items-center gap-sm" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                Dashboard
            </a>
<a className="text-slate-400 hover:text-white px-4 py-3 hover:bg-slate-800/50 transition-all active:opacity-80 flex items-center gap-sm" href="#">
<span className="material-symbols-outlined" data-icon="construction">construction</span>
                Projects
            </a>
<a className="text-slate-400 hover:text-white px-4 py-3 hover:bg-slate-800/50 transition-all active:opacity-80 flex items-center gap-sm" href="#">
<span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
                Inventory
            </a>
<a className="bg-slate-800 text-orange-500 border-l-4 border-orange-500 px-4 py-3 flex items-center gap-sm hover:bg-slate-800/50 transition-all active:opacity-80" href="#">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
                Reports
            </a>
<a className="text-slate-400 hover:text-white px-4 py-3 hover:bg-slate-800/50 transition-all active:opacity-80 flex items-center gap-sm" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
                Settings
            </a>
</div>
<div className="mt-auto mb-lg flex flex-col gap-base border-t border-slate-800 pt-sm">
<a className="text-slate-400 hover:text-white px-4 py-3 hover:bg-slate-800/50 transition-all active:opacity-80 flex items-center gap-sm" href="#">
<span className="material-symbols-outlined" data-icon="contact_support">contact_support</span>
                Support
            </a>
<a className="text-slate-400 hover:text-white px-4 py-3 hover:bg-slate-800/50 transition-all active:opacity-80 flex items-center gap-sm" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
                Logout
            </a>
</div>
</nav>
{/* Main Content Area */}
<main className="flex-1 flex flex-col md:ml-64 bg-surface min-h-screen">
{/* TopAppBar */}
<header className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 font-inter antialiased text-sm font-medium docked full-width top-0 border-b border-b border-slate-200 dark:border-slate-800 flat no shadows duration-150 ease-in-out flex justify-between items-center h-16 px-6 w-full sticky top-0 z-50">
<div className="flex items-center gap-md">
<div className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-50 uppercase block md:hidden">Industrial CMS</div>
</div>
<div className="flex items-center gap-md">
<div className="relative hidden sm:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" data-icon="search">search</span>
<input className="pl-10 pr-4 py-2 border border-outline-variant bg-surface-container-lowest rounded-DEFAULT focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors w-64 text-body-sm font-body-sm text-on-surface" placeholder="Search reports..." type="text"/>
</div>
<div className="flex items-center gap-sm">
<button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors rounded-full flex items-center justify-center">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors rounded-full flex items-center justify-center">
<span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
</button>
<button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors rounded-full flex items-center justify-center">
<span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
</button>
</div>
</div>
</header>
{/* Content Canvas */}
<div className="p-margin md:p-xl flex-1 flex flex-col gap-xl max-w-max_width mx-auto w-full">
{/* Page Header & Filter */}
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-md border-b border-outline-variant pb-md">
<div>
<h1 className="font-headline-md text-headline-md text-on-surface">Báo cáo Tùy chỉnh (Custom Report)</h1>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Analyze performance metrics across selected timelines.</p>
</div>
<div className="flex flex-col sm:flex-row items-end gap-sm w-full md:w-auto">
<div className="flex gap-sm w-full sm:w-auto">
<div className="flex flex-col gap-base w-full sm:w-auto">
<label className="font-label-bold text-label-bold text-on-surface-variant uppercase">From Date</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm" data-icon="calendar_today">calendar_today</span>
<input className="pl-10 pr-4 py-2 border border-outline-variant bg-surface-container-lowest rounded-DEFAULT focus:border-primary focus:ring-1 focus:ring-primary outline-none text-body-sm font-body-sm text-on-surface w-full" type="date"/>
</div>
</div>
<div className="flex flex-col gap-base w-full sm:w-auto">
<label className="font-label-bold text-label-bold text-on-surface-variant uppercase">To Date</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm" data-icon="calendar_today">calendar_today</span>
<input className="pl-10 pr-4 py-2 border border-outline-variant bg-surface-container-lowest rounded-DEFAULT focus:border-primary focus:ring-1 focus:ring-primary outline-none text-body-sm font-body-sm text-on-surface w-full" type="date"/>
</div>
</div>
</div>
<button className="bg-on-tertiary-container hover:bg-tertiary-container text-on-primary font-label-bold text-label-bold uppercase px-6 py-2.5 rounded-DEFAULT transition-colors w-full sm:w-auto flex items-center justify-center gap-xs h-[42px]">
<span className="material-symbols-outlined text-[18px]" data-icon="filter_list">filter_list</span>
                        Apply
                    </button>
</div>
</div>
{/* KPI Summary Bento Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div className="bg-surface-container-lowest border border-outline-variant p-md rounded-lg flex flex-col gap-md">
<div className="flex justify-between items-start">
<span className="font-label-bold text-label-bold text-on-surface-variant uppercase">Total Visits</span>
<span className="material-symbols-outlined text-on-tertiary-container" data-icon="visibility">visibility</span>
</div>
<div className="flex items-baseline gap-sm">
<span className="font-display-lg text-display-lg text-on-surface">124,592</span>
<span className="font-body-sm text-body-sm text-[#16a34a] flex items-center"><span className="material-symbols-outlined text-[16px]" data-icon="trending_up">trending_up</span> 12.5%</span>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-md rounded-lg flex flex-col gap-md">
<div className="flex justify-between items-start">
<span className="font-label-bold text-label-bold text-on-surface-variant uppercase">Inquiries</span>
<span className="material-symbols-outlined text-on-tertiary-container" data-icon="contact_mail">contact_mail</span>
</div>
<div className="flex items-baseline gap-sm">
<span className="font-display-lg text-display-lg text-on-surface">3,840</span>
<span className="font-body-sm text-body-sm text-[#16a34a] flex items-center"><span className="material-symbols-outlined text-[16px]" data-icon="trending_up">trending_up</span> 8.2%</span>
</div>
</div>
<div className="bg-primary text-on-primary border border-primary p-md rounded-lg flex flex-col gap-md">
<div className="flex justify-between items-start">
<span className="font-label-bold text-label-bold text-primary-fixed-dim uppercase">Conversion Rate</span>
<span className="material-symbols-outlined text-primary-fixed-dim" data-icon="bar_chart">bar_chart</span>
</div>
<div className="flex items-baseline gap-sm">
<span className="font-display-lg text-display-lg text-on-primary">3.08%</span>
<span className="font-body-sm text-body-sm text-[#16a34a] flex items-center"><span className="material-symbols-outlined text-[16px]" data-icon="trending_up">trending_up</span> 1.1%</span>
</div>
</div>
</div>
{/* Chart Area */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col">
<div className="bg-surface-container-low px-md py-sm border-b border-outline-variant flex justify-between items-center">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Trend Analysis</h2>
<div className="flex gap-sm">
<button className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined" data-icon="more_horiz">more_horiz</span></button>
</div>
</div>
<div className="p-md h-64 flex items-end justify-between gap-xs relative">
{/* Placeholder Bars for Chart */}
<div className="w-full bg-primary-fixed-dim h-[40%] rounded-t-sm hover:bg-primary transition-colors relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">12k</div>
</div>
<div className="w-full bg-primary-fixed-dim h-[60%] rounded-t-sm hover:bg-primary transition-colors relative group"></div>
<div className="w-full bg-primary-fixed-dim h-[45%] rounded-t-sm hover:bg-primary transition-colors relative group"></div>
<div className="w-full bg-primary-fixed-dim h-[80%] rounded-t-sm hover:bg-primary transition-colors relative group"></div>
<div className="w-full bg-primary h-[95%] rounded-t-sm relative group"></div>
<div className="w-full bg-primary-fixed-dim h-[70%] rounded-t-sm hover:bg-primary transition-colors relative group"></div>
<div className="w-full bg-primary-fixed-dim h-[50%] rounded-t-sm hover:bg-primary transition-colors relative group"></div>
</div>
{/* X Axis Labels */}
<div className="px-md pb-md flex justify-between text-on-surface-variant font-label-bold text-label-bold">
<span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
</div>
</div>
{/* Data Table */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden">
<div className="bg-primary px-md py-sm flex justify-between items-center">
<h3 className="font-headline-sm text-headline-sm text-on-primary">Detailed Metrics</h3>
<button className="text-primary-fixed-dim hover:text-on-primary flex items-center gap-xs font-label-bold text-label-bold uppercase">
<span className="material-symbols-outlined text-[16px]" data-icon="download">download</span> Export
                    </button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-outline-variant bg-surface-container-low font-label-bold text-label-bold text-on-surface-variant uppercase">
<th className="px-md py-sm font-semibold">Source</th>
<th className="px-md py-sm font-semibold">Visits</th>
<th className="px-md py-sm font-semibold">Inquiries</th>
<th className="px-md py-sm font-semibold">Conv. Rate</th>
<th className="px-md py-sm font-semibold text-right">Trend</th>
</tr>
</thead>
<tbody className="font-table-data text-table-data text-on-surface">
<tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors">
<td className="px-md py-sm">Organic Search</td>
<td className="px-md py-sm">45,210</td>
<td className="px-md py-sm">1,204</td>
<td className="px-md py-sm">2.66%</td>
<td className="px-md py-sm text-right text-[#16a34a]"><span className="material-symbols-outlined text-[18px] align-middle" data-icon="arrow_upward">arrow_upward</span></td>
</tr>
<tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors">
<td className="px-md py-sm">Direct</td>
<td className="px-md py-sm">32,105</td>
<td className="px-md py-sm">980</td>
<td className="px-md py-sm">3.05%</td>
<td className="px-md py-sm text-right text-on-surface-variant"><span className="material-symbols-outlined text-[18px] align-middle" data-icon="horizontal_rule">horizontal_rule</span></td>
</tr>
<tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors">
<td className="px-md py-sm">Referral (Partner Sites)</td>
<td className="px-md py-sm">28,940</td>
<td className="px-md py-sm">1,150</td>
<td className="px-md py-sm">3.97%</td>
<td className="px-md py-sm text-right text-[#16a34a]"><span className="material-symbols-outlined text-[18px] align-middle" data-icon="arrow_upward">arrow_upward</span></td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-md py-sm">Social Media</td>
<td className="px-md py-sm">18,337</td>
<td className="px-md py-sm">506</td>
<td className="px-md py-sm">2.75%</td>
<td className="px-md py-sm text-right text-error"><span className="material-symbols-outlined text-[18px] align-middle" data-icon="arrow_downward">arrow_downward</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>
    </div>
  );
}
