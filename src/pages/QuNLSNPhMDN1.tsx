import React from 'react';

export default function QuNLSNPhMDN1() {
  return (
    <div>
      {/* SideNavBar Shell */}
<aside className="flex flex-col fixed left-0 top-0 h-full z-40 bg-slate-50 dark:bg-slate-950 h-screen w-64 border-r border-slate-200 dark:border-slate-800 font-inter text-sm font-medium">
<div className="p-6 border-b border-slate-200 dark:border-slate-800">
<h1 className="text-lg font-bold text-blue-900 dark:text-white">Project Control</h1>
<p className="text-xs text-slate-500 uppercase tracking-wider">SME Admin Portal</p>
</div>
<div className="flex items-center gap-3 p-4 mx-2 mt-4 mb-2 bg-white dark:bg-slate-900 rounded shadow-sm border border-slate-200 dark:border-slate-800">
<div className="w-10 h-10 bg-primary-container rounded-full flex items-center justify-center text-white">
<span className="material-symbols-outlined">person</span>
</div>
<div>
<p className="font-bold text-blue-900 dark:text-white leading-tight">Admin User</p>
<p className="text-[10px] uppercase text-slate-400">System Operator</p>
</div>
</div>
<nav className="flex-1 px-2 py-4 space-y-1">
<a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 px-4 py-3 hover:translate-x-1 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>Dashboard</span>
</a>
<a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 px-4 py-3 hover:translate-x-1 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
<span>Inventory</span>
</a>
<a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 px-4 py-3 hover:translate-x-1 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="handyman">handyman</span>
<span>Project Leads</span>
</a>
<a className="flex items-center gap-3 bg-blue-900 text-white rounded-md mx-2 px-4 py-3" href="#">
<span className="material-symbols-outlined" data-icon="menu_book">menu_book</span>
<span>Catalog CMS</span>
</a>
<a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 px-4 py-3 hover:translate-x-1 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
<span>Invoices</span>
</a>
<a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 px-4 py-3 hover:translate-x-1 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span>Settings</span>
</a>
</nav>
<div className="p-4 mt-auto">
<button className="w-full bg-on-tertiary-container text-white font-bold py-3 px-4 rounded hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined">add_circle</span>
                New Entry
            </button>
</div>
<div className="border-t border-slate-200 dark:border-slate-800 p-2">
<a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 px-4 py-3 hover:translate-x-1 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span>Logout</span>
</a>
</div>
</aside>
{/* Main Content Area */}
<main className="ml-64 min-h-screen">
{/* TopAppBar Content Shell */}
<header className="flex justify-between items-center h-20 px-8 sticky top-0 z-30 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
<div className="flex items-center gap-4">
<h2 className="font-headline-sm text-primary">CATALOG MANAGEMENT</h2>
<span className="bg-slate-100 text-slate-500 text-[10px] px-2 py-1 font-bold uppercase tracking-widest rounded">Production Environment</span>
</div>
<div className="flex items-center gap-6">
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
<input className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm w-64 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900" placeholder="Search Materials..." type="text"/>
</div>
<button className="text-blue-900 font-inter font-semibold tracking-tight hover:text-orange-600 transition-colors">
                    Technical Resources
                </button>
</div>
</header>
<div className="p-margin max-w-screen-xl mx-auto space-y-lg">
{/* Dashboard Quick Stats (Bento Grid Style) */}
<section className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
<div className="bg-white p-6 border border-slate-200 shadow-sm rounded-lg flex flex-col justify-between h-32">
<div className="flex justify-between items-start">
<span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Total Materials</span>
<span className="material-symbols-outlined text-blue-900">category</span>
</div>
<p className="text-display-lg font-display-lg text-primary">142</p>
</div>
<div className="bg-white p-6 border border-slate-200 shadow-sm rounded-lg flex flex-col justify-between h-32">
<div className="flex justify-between items-start">
<span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Active Projects</span>
<span className="material-symbols-outlined text-blue-900">construction</span>
</div>
<p className="text-display-lg font-display-lg text-primary">28</p>
</div>
<div className="bg-white p-6 border border-slate-200 shadow-sm rounded-lg flex flex-col justify-between h-32 border-l-4 border-l-on-tertiary-container">
<div className="flex justify-between items-start">
<span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Pending Updates</span>
<span className="material-symbols-outlined text-on-tertiary-container">sync_problem</span>
</div>
<p className="text-display-lg font-display-lg text-primary">05</p>
</div>
<div className="bg-white p-6 border border-slate-200 shadow-sm rounded-lg flex flex-col justify-between h-32">
<div className="flex justify-between items-start">
<span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Last Export</span>
<span className="material-symbols-outlined text-blue-900">file_download</span>
</div>
<div>
<p className="text-headline-sm font-headline-sm text-primary">12 Oct 2024</p>
<p className="text-[10px] text-slate-400">PDF FORMAT (8.4MB)</p>
</div>
</div>
</section>
{/* Table Controls */}
<div className="flex flex-col md:flex-row justify-between items-end gap-md">
<div className="space-y-2">
<h3 className="font-headline-sm text-primary">Product Inventory</h3>
<div className="flex gap-2">
<button className="bg-primary text-white text-xs px-4 py-2 rounded font-bold uppercase tracking-tight flex items-center gap-2">
<span className="material-symbols-outlined text-sm">filter_list</span> Filter
                        </button>
<button className="bg-slate-200 text-slate-700 text-xs px-4 py-2 rounded font-bold uppercase tracking-tight">
                            Sort: Newest First
                        </button>
</div>
</div>
<div className="flex gap-2">
<button className="bg-slate-100 hover:bg-slate-200 text-primary px-4 py-2 text-xs font-bold rounded uppercase border border-slate-200">
                        Bulk Actions
                    </button>
<button className="bg-on-tertiary-container text-white px-6 py-2 text-xs font-bold rounded uppercase shadow-sm">
                        + Add New Material
                    </button>
</div>
</div>
{/* Data Table */}
<section className="bg-white border border-slate-200 shadow-sm overflow-hidden rounded-lg">
<table className="w-full text-left border-collapse">
<thead className="bg-primary-container text-white">
<tr>
<th className="px-6 py-4 font-label-bold text-label-bold uppercase tracking-widest">Product / Material</th>
<th className="px-6 py-4 font-label-bold text-label-bold uppercase tracking-widest">SKU Code</th>
<th className="px-6 py-4 font-label-bold text-label-bold uppercase tracking-widest">Category</th>
<th className="px-6 py-4 font-label-bold text-label-bold uppercase tracking-widest">Stock Level</th>
<th className="px-6 py-4 font-label-bold text-label-bold uppercase tracking-widest">Status</th>
<th className="px-6 py-4 font-label-bold text-label-bold uppercase tracking-widest text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-slate-200 rounded overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="close-up view of textured grey industrial concrete surface with subtle aggregate details" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIHGsdbG5fApmgjFuRHpgKO_0bR0dNOU3At5prLo5kEanRNLEYX0Gd-Er7r2WWrm7895o9Neckk3a9XDTncheW0PkVlPRTP74cfRQJxc-_7Qk8Fp-02Yo4YARJznQQRVSYEeW5_CTOXaQdBqqsLHw93_OseyACMRAyBnrA7eYSQZtu2usKz9pBJHeu5Oni5WK5tEOaTigTxSi15OZeYVb5iZmbogtey1BqWpqa67yZ4-KfYVUJB4aExA0lD7O8bLPSww2In28iDrON"/>
</div>
<div>
<p className="font-bold text-primary font-table-data text-table-data">High-Performance C35/45</p>
<p className="text-xs text-slate-500">Reinforced structural mix</p>
</div>
</div>
</td>
<td className="px-6 py-4 font-table-data text-table-data text-slate-600">CONC-HP-45</td>
<td className="px-6 py-4">
<span className="bg-blue-50 text-blue-700 text-[10px] px-2 py-1 rounded font-black uppercase">Materials</span>
</td>
<td className="px-6 py-4 font-table-data text-table-data">
<div className="flex items-center gap-2">
<div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="bg-on-tertiary-container h-full w-[85%]"></div>
</div>
<span className="text-xs">850m³</span>
</div>
</td>
<td className="px-6 py-4">
<span className="flex items-center gap-1.5 text-xs font-bold text-emerald-600">
<span className="w-2 h-2 rounded-full bg-emerald-600"></span> Published
                                </span>
</td>
<td className="px-6 py-4 text-right space-x-2">
<button className="text-slate-400 hover:text-blue-900 transition-colors"><span className="material-symbols-outlined">edit</span></button>
<button className="text-slate-400 hover:text-blue-900 transition-colors"><span className="material-symbols-outlined">visibility</span></button>
<button className="text-slate-400 hover:text-error transition-colors"><span className="material-symbols-outlined">delete</span></button>
</td>
</tr>
<tr className="hover:bg-slate-50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-slate-200 rounded overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="professional industrial construction equipment with yellow protective finish on a bright work site" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYVSLie45duRGxIEGS95woxXuq0nO7OFbQsFTCpPLhIZuQzUpWBi18y5dAfVDH5HrcJBUkcEQuChxHTXPOAb_WvjuhWnDiITELzp71BSI9DHGCBUilLxO7sM_7VlXwo3wjWM9qDLsg1PIMBxks4H17LvlDMzVCE2joYKSTI6RpKCS1RWFeZSzJiDDXW83nTB7nOVehOFI5LQXuKytG5e9Gd9v56jDlSIkoBOyUWYaLIl6mWJbaoezqLAXX1Cmk7GbXXMgl3-3eff6K"/>
</div>
<div>
<p className="font-bold text-primary font-table-data text-table-data">Heavy-Duty Vibratory Compactor</p>
<p className="text-xs text-slate-500">Site Equipment - Leveling</p>
</div>
</div>
</td>
<td className="px-6 py-4 font-table-data text-table-data text-slate-600">EQP-VIB-02</td>
<td className="px-6 py-4">
<span className="bg-orange-50 text-orange-700 text-[10px] px-2 py-1 rounded font-black uppercase">Equipment</span>
</td>
<td className="px-6 py-4 font-table-data text-table-data">
<div className="flex items-center gap-2">
<div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="bg-error h-full w-[12%]"></div>
</div>
<span className="text-xs">02 Units</span>
</div>
</td>
<td className="px-6 py-4">
<span className="flex items-center gap-1.5 text-xs font-bold text-orange-500">
<span className="w-2 h-2 rounded-full bg-orange-500"></span> Maintenance
                                </span>
</td>
<td className="px-6 py-4 text-right space-x-2">
<button className="text-slate-400 hover:text-blue-900 transition-colors"><span className="material-symbols-outlined">edit</span></button>
<button className="text-slate-400 hover:text-blue-900 transition-colors"><span className="material-symbols-outlined">visibility</span></button>
<button className="text-slate-400 hover:text-error transition-colors"><span className="material-symbols-outlined">delete</span></button>
</td>
</tr>
<tr className="hover:bg-slate-50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-slate-200 rounded overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="architectural concrete wall with clean lines and smooth gray finish in natural daylight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2to5jfZ5RC-ivd0xNJ6zz8O7NQrhXEvb18gmmk6gXXbAff_tMMGbuxlOp3vrsnqLFdQ2vVhyTBd6Gk5pROOC0CFMYygF8t_U2McGiDgtYF9l9x75jkLokvGB6NoFB7Fg6upUDRajwN_lItLyqCqAY57qKDKIlqav4VoQt6SVkWKxrS-OsjbH7La97Ig8Cwj_dWdbvBQZ9v6jUxTnH5JVGkb4eU16XMzmeG6-ICmYHkiIFVx1g2I1wm7PB6ZvCj2DOEupuacMs9RKM"/>
</div>
<div>
<p className="font-bold text-primary font-table-data text-table-data">Self-Leveling Screed G-200</p>
<p className="text-xs text-slate-500">Flooring base compound</p>
</div>
</div>
</td>
<td className="px-6 py-4 font-table-data text-table-data text-slate-600">MAT-SCR-200</td>
<td className="px-6 py-4">
<span className="bg-blue-50 text-blue-700 text-[10px] px-2 py-1 rounded font-black uppercase">Materials</span>
</td>
<td className="px-6 py-4 font-table-data text-table-data">
<div className="flex items-center gap-2">
<div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="bg-on-tertiary-container h-full w-[45%]"></div>
</div>
<span className="text-xs">1,200kg</span>
</div>
</td>
<td className="px-6 py-4">
<span className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
<span className="w-2 h-2 rounded-full bg-slate-400"></span> Archived
                                </span>
</td>
<td className="px-6 py-4 text-right space-x-2">
<button className="text-slate-400 hover:text-blue-900 transition-colors"><span className="material-symbols-outlined">edit</span></button>
<button className="text-slate-400 hover:text-blue-900 transition-colors"><span className="material-symbols-outlined">visibility</span></button>
<button className="text-slate-400 hover:text-error transition-colors"><span className="material-symbols-outlined">delete</span></button>
</td>
</tr>
</tbody>
</table>
<div className="px-6 py-4 border-t border-slate-100 flex justify-between items-center bg-slate-50">
<p className="text-xs text-slate-500 uppercase font-bold">Showing 1-3 of 142 entries</p>
<div className="flex gap-1">
<button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 bg-white text-slate-400"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
<button className="w-8 h-8 flex items-center justify-center rounded border border-on-tertiary-container bg-on-tertiary-container text-white text-xs font-bold">1</button>
<button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 bg-white text-slate-600 text-xs hover:bg-slate-50">2</button>
<button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 bg-white text-slate-600 text-xs hover:bg-slate-50">3</button>
<button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 bg-white text-slate-400"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
</div>
</div>
</section>
{/* Quick Editor / Form Section (Drawer Style/Split) */}
<section className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
<div className="lg:col-span-2 space-y-md">
<div className="bg-white border border-slate-200 rounded-lg shadow-sm">
<div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
<h4 className="font-headline-sm text-primary">Add New Project Case Study</h4>
<span className="text-xs font-bold text-on-tertiary-container uppercase">Draft Saved 2m ago</span>
</div>
<div className="p-6 space-y-md">
<div className="grid grid-cols-2 gap-md">
<div className="space-y-1">
<label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Project Title</label>
<input className="w-full border-slate-200 rounded p-3 text-sm focus:ring-1 focus:ring-blue-900 outline-none" placeholder="e.g. Skyline Commercial Plaza" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Industry Segment</label>
<select className="w-full border-slate-200 rounded p-3 text-sm focus:ring-1 focus:ring-blue-900 outline-none">
<option>Commercial Infrastructure</option>
<option>Residential Development</option>
<option>Industrial Flooring</option>
</select>
</div>
</div>
<div className="space-y-1">
<label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Project Description</label>
<textarea className="w-full border-slate-200 rounded p-3 text-sm focus:ring-1 focus:ring-blue-900 outline-none" placeholder="Detailed technical specifications and project outcomes..." rows={4}></textarea>
</div>
<div className="grid grid-cols-3 gap-md">
<div className="space-y-1">
<label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Completion Date</label>
<input className="w-full border-slate-200 rounded p-3 text-sm focus:ring-1 focus:ring-blue-900 outline-none" type="date"/>
</div>
<div className="space-y-1">
<label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Total Area (m²)</label>
<input className="w-full border-slate-200 rounded p-3 text-sm focus:ring-1 focus:ring-blue-900 outline-none" type="number"/>
</div>
<div className="space-y-1">
<label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Mix Specification</label>
<input className="w-full border-slate-200 rounded p-3 text-sm focus:ring-1 focus:ring-blue-900 outline-none" placeholder="e.g. C40" type="text"/>
</div>
</div>
</div>
<div className="px-6 py-4 border-t border-slate-100 flex justify-end gap-3">
<button className="px-6 py-2 border border-slate-200 text-primary text-xs font-bold rounded uppercase hover:bg-slate-50">Save as Draft</button>
<button className="px-8 py-2 bg-primary text-white text-xs font-bold rounded uppercase shadow-sm">Publish Project</button>
</div>
</div>
</div>
{/* Media Sidebar */}
<div className="space-y-gutter">
<div className="bg-white border border-slate-200 rounded-lg shadow-sm p-6">
<h4 className="text-xs font-black uppercase text-slate-500 tracking-widest mb-4">Project Media</h4>
<div className="border-2 border-dashed border-slate-200 rounded-lg p-8 flex flex-col items-center justify-center text-center space-y-2">
<span className="material-symbols-outlined text-slate-300 text-4xl">cloud_upload</span>
<p className="text-sm font-bold text-primary">Upload Visual Assets</p>
<p className="text-[10px] text-slate-400 uppercase">JPG, PNG up to 10MB</p>
<button className="mt-4 px-4 py-2 bg-slate-100 text-slate-700 text-[10px] font-black rounded uppercase">Browse Files</button>
</div>
<div className="mt-4 grid grid-cols-2 gap-2">
<div className="relative aspect-square bg-slate-100 rounded overflow-hidden border border-slate-200">
<img className="w-full h-full object-cover" data-alt="architectural photo of a modern building facade with brutalist concrete elements" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv86ODGI52398xXHqEoa5EF_b_5UwnkBVB1OcnPykVMo2T5t8D0UMH2z8SVDeePvXRq6W0AnHfpjOgr7tKb9hbDRqtckxCwgCJazQapee65XwTONCmj7nURARutgu5O-MwDC7LSW-lJdGAQ6aBtEE6E2-MmYeOmiWiuoHb-rvq9aE6jzXwh-ra9IrGVPKrHP14u7Evc-9uglKJ7JYZS5pTIRquDehfw93-r7VGV9H8FhYEy0oEJBzyLYqPx4_u95-Ti8Imobt_sdIF"/>
<button className="absolute top-1 right-1 bg-white/80 w-6 h-6 flex items-center justify-center rounded text-error"><span className="material-symbols-outlined text-sm">close</span></button>
</div>
<div className="relative aspect-square bg-slate-100 rounded overflow-hidden border border-slate-200">
<img className="w-full h-full object-cover" data-alt="dramatic low angle shot of a skyscraper construction site with steel beams and grey clouds" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ6hiL6NTYvsCNgFI4YuwvEOjuqUiA9JVlvkQ2XglInsq0cfxN4yF3-oMPEfu0uckq4Em4S4rAWCNYX-T8Y54RFFFQ3UpI0SSN4laFxrZ40tjMG-0EITH2CDwwVeOc7vQ5nHCFugP89wMeVeCHUETzavKcJb-_LHpsFHAilMae1-3hKLgVLLjF0gdStAXZto9wioE_MtrKhuYoilScHImRXoYhxCQKDWIsxqfgcBkUgsa4v6Ng0ypO7LjeNch4BQFBM5dZxGq5Ciyn"/>
<button className="absolute top-1 right-1 bg-white/80 w-6 h-6 flex items-center justify-center rounded text-error"><span className="material-symbols-outlined text-sm">close</span></button>
</div>
</div>
</div>
<div className="bg-primary-container p-6 rounded-lg shadow-sm text-white space-y-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-on-tertiary-container">security</span>
<h4 className="text-xs font-black uppercase tracking-widest">Compliance Check</h4>
</div>
<p className="text-xs text-slate-400">All project data must comply with ISO 9001:2015 structural reporting standards. Ensure mix specs are validated.</p>
<div className="bg-white/5 p-3 rounded border border-white/10">
<div className="flex justify-between items-center mb-1">
<span className="text-[10px] uppercase font-bold">Data Integrity</span>
<span className="text-[10px] font-bold">92%</span>
</div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="bg-emerald-500 h-full w-[92%]"></div>
</div>
</div>
</div>
</div>
</section>
</div>
{/* Footer Shell */}
<footer className="w-full py-12 px-8 grid grid-cols-1 md:grid-cols-4 gap-8 bg-blue-950 dark:bg-black border-t-4 border-orange-600 font-inter text-xs uppercase tracking-widest text-slate-400 mt-xl">
<div className="col-span-1 md:col-span-2">
<h1 className="text-2xl font-black text-white mb-4">CONCRETE SOLUTIONS</h1>
<p className="mb-6 max-w-md normal-case leading-relaxed">Systemizing industrial excellence through precision management and structural integrity. Part of the Enterprise Construction Cloud Network.</p>
<p className="font-bold text-orange-500">© 2024 CONCRETE SOLUTIONS. ALL RIGHTS RESERVED. INDUSTRIAL EXCELLENCE.</p>
</div>
<div>
<h5 className="text-white font-bold mb-4">Internal Navigation</h5>
<ul className="space-y-2">
<li><a className="hover:text-white transition-colors" href="#">Sitemap</a></li>
<li><a className="hover:text-white transition-colors" href="#">Technical Specs</a></li>
<li><a className="hover:text-white transition-colors" href="#">Compliance</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-bold mb-4">Security &amp; Legal</h5>
<ul className="space-y-2">
<li><a className="hover:text-white transition-colors" href="#">Safety</a></li>
<li><a className="text-white underline" href="#">Privacy Policy</a></li>
</ul>
</div>
</footer>
</main>
    </div>
  );
}
