import React from 'react';

export default function CmsDashboardQuNTr() {
  return (
    <div>
      {/* TopNavBar: Execution of JSON parameters */}
<header className="flex justify-between items-center h-20 px-8 max-w-full sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
<div className="flex items-center gap-8">
<span className="text-xl font-black text-blue-900 dark:text-white uppercase tracking-wider">CONCRETE SOLUTIONS</span>
<nav className="hidden lg:flex gap-6">
<a className="font-inter font-semibold tracking-tight text-orange-600 border-b-2 border-orange-600 pb-1" href="#">Materials</a>
<a className="font-inter font-semibold tracking-tight text-slate-600 dark:text-slate-400 hover:text-blue-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-200 ease-in-out" href="#">Equipment</a>
<a className="font-inter font-semibold tracking-tight text-slate-600 dark:text-slate-400 hover:text-blue-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-200 ease-in-out" href="#">Projects</a>
<a className="font-inter font-semibold tracking-tight text-slate-600 dark:text-slate-400 hover:text-blue-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-200 ease-in-out" href="#">Technical Resources</a>
<a className="font-inter font-semibold tracking-tight text-slate-600 dark:text-slate-400 hover:text-blue-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-200 ease-in-out" href="#">Contact</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
<input className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 text-sm" placeholder="Search resources..." type="text"/>
</div>
<button className="bg-blue-900 text-white px-6 py-2 rounded-md font-semibold text-sm hover:bg-blue-800 transition-all">Get a Quote</button>
</div>
</header>
<div className="flex min-h-screen">
{/* SideNavBar: Execution of JSON parameters */}
<aside className="flex flex-col fixed left-0 top-20 h-[calc(100vh-80px)] w-64 z-40 bg-slate-50 dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800">
<div className="p-6 border-b border-slate-200 dark:border-slate-800">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-md bg-blue-900 flex items-center justify-center text-white">
<span className="material-symbols-outlined" data-weight="fill" style="font-variation-settings: 'FILL' 1;">admin_panel_settings</span>
</div>
<div>
<h2 className="text-lg font-bold text-blue-900 dark:text-white leading-tight">Project Control</h2>
<p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">SME Admin Portal</p>
</div>
</div>
</div>
<nav className="flex-1 py-4 space-y-1 overflow-y-auto sidebar-scroll">
{/* Dashboard Active */}
<a className="flex items-center gap-3 bg-blue-900 text-white rounded-md mx-2 px-4 py-3 font-inter text-sm font-medium transition-transform active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>Dashboard</span>
</a>
<a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 px-4 py-3 mx-2 rounded-md font-inter text-sm font-medium hover:translate-x-1 transition-transform active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
<span>Inventory</span>
</a>
<a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 px-4 py-3 mx-2 rounded-md font-inter text-sm font-medium hover:translate-x-1 transition-transform active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="handyman">handyman</span>
<span>Project Leads</span>
</a>
<a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 px-4 py-3 mx-2 rounded-md font-inter text-sm font-medium hover:translate-x-1 transition-transform active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="menu_book">menu_book</span>
<span>Catalog CMS</span>
</a>
<a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 px-4 py-3 mx-2 rounded-md font-inter text-sm font-medium hover:translate-x-1 transition-transform active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
<span>Invoices</span>
</a>
<a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 px-4 py-3 mx-2 rounded-md font-inter text-sm font-medium hover:translate-x-1 transition-transform active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span>Settings</span>
</a>
</nav>
<div className="p-4 mt-auto border-t border-slate-200 dark:border-slate-800">
<button className="w-full bg-orange-600 text-white font-bold py-3 rounded-md flex items-center justify-center gap-2 hover:bg-orange-700 transition-colors active:scale-95">
<span className="material-symbols-outlined">add_circle</span>
                    New Entry
                </button>
<a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-error mt-4 px-4 py-2 font-inter text-xs font-medium uppercase tracking-widest transition-colors" href="#">
<span className="material-symbols-outlined text-sm" data-icon="logout">logout</span>
                    Logout
                </a>
</div>
</aside>
{/* Main Content Canvas */}
<main className="flex-1 ml-64 p-8">
<header className="mb-10">
<div className="flex justify-between items-end">
<div>
<p className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-1">Administrative Overview</p>
<h1 className="text-display-lg font-display-lg text-primary">Global Control Center</h1>
</div>
<div className="flex items-center gap-2 text-on-surface-variant font-medium">
<span className="material-symbols-outlined">calendar_today</span>
<span className="text-body-sm">October 24, 2024</span>
</div>
</div>
</header>
{/* Stats Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-xl">
<div className="bg-white p-6 border border-slate-200 hover:shadow-lg transition-shadow duration-300">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-slate-100 rounded">
<span className="material-symbols-outlined text-blue-900" style="font-variation-settings: 'FILL' 1;">construction</span>
</div>
<span className="text-xs font-bold text-green-600">+12%</span>
</div>
<p className="text-label-bold text-on-surface-variant uppercase mb-1">Active Projects</p>
<h3 className="text-headline-md font-headline-md text-primary">42</h3>
</div>
<div className="bg-white p-6 border border-slate-200 hover:shadow-lg transition-shadow duration-300">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-slate-100 rounded">
<span className="material-symbols-outlined text-blue-900" style="font-variation-settings: 'FILL' 1;">group</span>
</div>
<span className="text-xs font-bold text-green-600">+5</span>
</div>
<p className="text-label-bold text-on-surface-variant uppercase mb-1">New Leads</p>
<h3 className="text-headline-md font-headline-md text-primary">128</h3>
</div>
<div className="bg-white p-6 border border-slate-200 hover:shadow-lg transition-shadow duration-300">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-slate-100 rounded">
<span className="material-symbols-outlined text-blue-900" style="font-variation-settings: 'FILL' 1;">article</span>
</div>
<span className="text-xs font-bold text-slate-400">Stable</span>
</div>
<p className="text-label-bold text-on-surface-variant uppercase mb-1">Recent News</p>
<h3 className="text-headline-md font-headline-md text-primary">15</h3>
</div>
<div className="bg-white p-6 border border-slate-200 hover:shadow-lg transition-shadow duration-300">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-slate-100 rounded">
<span className="material-symbols-outlined text-orange-600" style="font-variation-settings: 'FILL' 1;">warning</span>
</div>
<span className="text-xs font-bold text-error">Pending</span>
</div>
<p className="text-label-bold text-on-surface-variant uppercase mb-1">Safety Audits</p>
<h3 className="text-headline-md font-headline-md text-primary">3</h3>
</div>
</div>
<div className="grid grid-cols-1 xl:grid-cols-3 gap-gutter">
{/* Data Table Section (Main Area) */}
<div className="xl:col-span-2 space-y-gutter">
<section className="bg-white border border-slate-200 overflow-hidden">
<div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
<h2 className="text-headline-sm font-headline-sm text-primary">Active Structural Projects</h2>
<button className="text-body-sm font-semibold text-blue-900 flex items-center gap-1 hover:underline">
                                View Report <span className="material-symbols-outlined text-sm">open_in_new</span>
</button>
</div>
<table className="w-full text-left">
<thead className="bg-primary text-white">
<tr>
<th className="px-6 py-3 text-label-bold uppercase">Project ID</th>
<th className="px-6 py-3 text-label-bold uppercase">Location</th>
<th className="px-6 py-3 text-label-bold uppercase">Pour Status</th>
<th className="px-6 py-3 text-label-bold uppercase">Quality Score</th>
<th className="px-6 py-3 text-label-bold uppercase">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4 text-table-data">CS-9021</td>
<td className="px-6 py-4 text-table-data">Manhattan Plaza</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-16 h-2 bg-slate-200 rounded-full overflow-hidden">
<div className="w-3/4 h-full bg-orange-600"></div>
</div>
<span className="text-xs font-bold">75%</span>
</div>
</td>
<td className="px-6 py-4 text-table-data text-green-600">9.8/10</td>
<td className="px-6 py-4">
<button className="text-blue-900 hover:text-orange-600"><span className="material-symbols-outlined">edit_note</span></button>
</td>
</tr>
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4 text-table-data">CS-8842</td>
<td className="px-6 py-4">O'Hare Terminal 5</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-16 h-2 bg-slate-200 rounded-full overflow-hidden">
<div className="w-1/4 h-full bg-orange-600"></div>
</div>
<span className="text-xs font-bold">25%</span>
</div>
</td>
<td className="px-6 py-4 text-table-data text-green-600">9.4/10</td>
<td className="px-6 py-4">
<button className="text-blue-900 hover:text-orange-600"><span className="material-symbols-outlined">edit_note</span></button>
</td>
</tr>
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4 text-table-data">CS-9110</td>
<td className="px-6 py-4">Austin Gigafactory</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-16 h-2 bg-slate-200 rounded-full overflow-hidden">
<div className="w-full h-full bg-blue-900"></div>
</div>
<span className="text-xs font-bold">100%</span>
</div>
</td>
<td className="px-6 py-4 text-table-data text-green-600">9.9/10</td>
<td className="px-6 py-4">
<button className="text-blue-900 hover:text-orange-600"><span className="material-symbols-outlined">edit_note</span></button>
</td>
</tr>
</tbody>
</table>
</section>
{/* Bento Grid Content Management */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
<div className="bg-white border border-slate-200 p-6 flex flex-col justify-between h-64 overflow-hidden relative group">
<div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
<img className="w-full h-full object-cover" data-alt="close-up of industrial concrete architecture with sharp lines and shadows in daylight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBms2VEz2_XOJUgxb4St9F4tOIf1CZHklJqQmuSHLr4kLIGoVM9OJ2JyVrEQoKbFwbRMWAhzXRFw23PuqVKg3L5I_ypakyF6KcRchZoaIeED6KcbzMACEG8gPpeevuJwGS-pRk5Cd-1NPO9dfMg43mm__Is-MNCKSpzjzyCyIqbprWmTjVb0t80nqVqt5Ro3hn2ZLmKCdeAcKnNb8XXXCvE6MHoufxN9O9iksS_51Em8HSW-qbQhakO4CSxhyj_sY-4FXKC_i6RyM15"/>
</div>
<div className="relative z-10">
<span className="text-label-bold text-orange-600 uppercase">Product CMS</span>
<h4 className="text-headline-sm font-headline-sm text-primary mt-2">Materials Inventory</h4>
<p className="text-body-sm text-on-surface-variant mt-2">Manage mix designs, curing agents, and equipment specs.</p>
</div>
<button className="relative z-10 w-fit bg-primary text-white px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-orange-600 transition-colors">Manage Catalog</button>
</div>
<div className="bg-white border border-slate-200 p-6 flex flex-col justify-between h-64 overflow-hidden relative group">
<div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
<img className="w-full h-full object-cover" data-alt="industrial construction worker operating a concrete pump on a large building site" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEe9fnhnrp1tP4PgnIbftZd42B9GMkrJtPRQLV-OeH3578gIUVcXksU4wnbALDp787ku7NUCmDpZUpxr2Asqocc6-dZFMrVb7fWl_OLxAsTiBdWLB4M_f_SA91DoRSkr9MynJXCHrFoI3UImr--KMtNJXE3l04CPdFtauQqEl0txVmEVcnMExWeeRSWDBLMzX2emZ52LRx2vKBkEJk-DM6_OLooKUW5L4Kmv14NjMw3S76toav5KkAdQyVMUi19MFg0x8jcaqwZZO2"/>
</div>
<div className="relative z-10">
<span className="text-label-bold text-orange-600 uppercase">Media Library</span>
<h4 className="text-headline-sm font-headline-sm text-primary mt-2">Project Assets</h4>
<p className="text-body-sm text-on-surface-variant mt-2">Upload drone footage, blueprints, and site photography.</p>
</div>
<button className="relative z-10 w-fit bg-primary text-white px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-orange-600 transition-colors">Open Library</button>
</div>
</div>
</div>
{/* Sidebar Activity/News */}
<div className="space-y-gutter">
<section className="bg-white border border-slate-200 p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-headline-sm font-headline-sm text-primary">System Feed</h3>
<span className="material-symbols-outlined text-slate-300">notifications</span>
</div>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-1 bg-orange-600 h-10 shrink-0"></div>
<div>
<p className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">10:45 AM Today</p>
<p className="text-body-sm text-primary font-medium">New Quote Request from <span className="text-blue-900 font-bold">Skanska Global</span></p>
</div>
</div>
<div className="flex gap-4">
<div className="w-1 bg-blue-900 h-10 shrink-0"></div>
<div>
<p className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Yesterday</p>
<p className="text-body-sm text-primary font-medium">Inventory Level Low: <span className="text-error font-bold">High-Strength Fiber</span></p>
</div>
</div>
<div className="flex gap-4">
<div className="w-1 bg-green-600 h-10 shrink-0"></div>
<div>
<p className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Oct 22</p>
<p className="text-body-sm text-primary font-medium">Project <span className="text-blue-900 font-bold">CS-9110</span> marked as Completed.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-1 bg-slate-200 h-10 shrink-0"></div>
<div>
<p className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Oct 21</p>
<p className="text-body-sm text-primary font-medium">News post "Industry Safety 2024" published.</p>
</div>
</div>
</div>
<button className="w-full mt-8 py-3 border border-slate-200 text-xs font-bold uppercase tracking-widest hover:bg-slate-50 transition-colors">Clear All History</button>
</section>
<section className="bg-primary text-white p-6 border-b-4 border-orange-600">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-orange-600">verified_user</span>
<h3 className="text-label-bold uppercase">Security Status</h3>
</div>
<p className="text-body-sm text-slate-300 mb-6">Database integrity verified. SSL certificates active. 2FA required for all admins.</p>
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-xs font-bold uppercase tracking-widest">Systems Nominal</span>
</div>
</section>
</div>
</div>
</main>
</div>
{/* Footer: Execution of JSON parameters */}
<footer className="w-full py-12 px-8 grid grid-cols-1 md:grid-cols-4 gap-8 bg-blue-950 dark:bg-black border-t-4 border-orange-600 relative z-50">
<div className="md:col-span-1">
<span className="text-2xl font-black text-white">CONCRETE SOLUTIONS</span>
<p className="text-slate-400 text-body-sm mt-4">Pioneering structural integrity through advanced material science and industrial excellence.</p>
</div>
<div className="md:col-span-1">
<h4 className="font-inter text-xs uppercase tracking-widest text-orange-500 mb-4">Internal Links</h4>
<ul className="space-y-2">
<li><a className="font-inter text-xs uppercase tracking-widest text-slate-400 hover:text-white transition-colors" href="#">Sitemap</a></li>
<li><a className="font-inter text-xs uppercase tracking-widest text-slate-400 hover:text-white transition-colors" href="#">Technical Specs</a></li>
<li><a className="font-inter text-xs uppercase tracking-widest text-slate-400 hover:text-white transition-colors" href="#">Compliance</a></li>
</ul>
</div>
<div className="md:col-span-1">
<h4 className="font-inter text-xs uppercase tracking-widest text-orange-500 mb-4">Resources</h4>
<ul className="space-y-2">
<li><a className="font-inter text-xs uppercase tracking-widest text-slate-400 hover:text-white transition-colors" href="#">Safety</a></li>
<li><a className="font-inter text-xs uppercase tracking-widest text-slate-400 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
<div className="md:col-span-1 flex flex-col justify-between">
<div className="text-right">
<p className="font-inter text-xs uppercase tracking-widest text-slate-400 leading-relaxed">© 2024 CONCRETE SOLUTIONS.<br/>ALL RIGHTS RESERVED.<br/>INDUSTRIAL EXCELLENCE.</p>
</div>
<div className="flex justify-end gap-4 mt-4">
<span className="material-symbols-outlined text-white">shield</span>
<span className="material-symbols-outlined text-white">terminal</span>
</div>
</div>
</footer>
    </div>
  );
}
