import React from 'react';

export default function QuNLSNPhMAdminCms() {
  return (
    <div>
      {/* SideNavBar */}
<aside className="bg-surface-container-lowest text-on-surface font-label-bold uppercase tracking-widest h-screen w-64 border-r border-outline-variant flat no shadows fixed left-0 top-0 flex flex-col pt-4 pb-8 z-40 hidden md:flex">
<div className="px-6 mb-8 flex items-center gap-sm">
<div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined text-body-lg">domain</span>
</div>
<div>
<h1 className="font-bold text-on-surface text-body-sm tracking-normal capitalize">Core Assets</h1>
<p className="text-[10px] text-on-surface-variant tracking-normal capitalize">SME Management</p>
</div>
</div>
<div className="px-4 mb-6">
<button className="w-full bg-on-tertiary-container text-on-primary py-sm px-4 rounded font-label-bold flex items-center justify-center gap-xs hover:bg-tertiary-container transition-colors duration-200">
<span className="material-symbols-outlined text-body-lg">add</span>
                New Entry
            </button>
</div>
<nav className="flex-1 px-4 space-y-base">
<a className="bg-surface-variant text-on-tertiary-container border-l-4 border-on-tertiary-container flex items-center gap-sm px-4 py-sm rounded-r transition-all duration-150" href="#">
<span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
                Products
            </a>
<a className="text-on-surface-variant hover:bg-surface hover:text-on-surface flex items-center gap-sm px-4 py-sm rounded transition-all duration-150 ml-1" href="#">
<span className="material-symbols-outlined" data-icon="construction">construction</span>
                Projects
            </a>
<a className="text-on-surface-variant hover:bg-surface hover:text-on-surface flex items-center gap-sm px-4 py-sm rounded transition-all duration-150 ml-1" href="#">
<span className="material-symbols-outlined" data-icon="category">category</span>
                Categories
            </a>
<a className="text-on-surface-variant hover:bg-surface hover:text-on-surface flex items-center gap-sm px-4 py-sm rounded transition-all duration-150 ml-1" href="#">
<span className="material-symbols-outlined" data-icon="conveyor_belt">conveyor_belt</span>
                Suppliers
            </a>
<a className="text-on-surface-variant hover:bg-surface hover:text-on-surface flex items-center gap-sm px-4 py-sm rounded transition-all duration-150 ml-1" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
                Settings
            </a>
</nav>
<div className="px-4 mt-auto space-y-base">
<a className="text-on-surface-variant hover:bg-surface hover:text-on-surface flex items-center gap-sm px-4 py-sm rounded transition-all duration-150 ml-1" href="#">
<span className="material-symbols-outlined" data-icon="help">help</span>
                Support
            </a>
<a className="text-on-surface-variant hover:bg-surface hover:text-on-surface flex items-center gap-sm px-4 py-sm rounded transition-all duration-150 ml-1" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
                Logout
            </a>
</div>
</aside>
<div className="flex-1 flex flex-col md:ml-64 min-h-screen">
{/* TopNavBar (Mobile Only for Shell Consistency, but desktop search/actions) */}
<header className="bg-surface-container-lowest text-on-surface font-body-sm font-medium tracking-tight docked full-width top-0 border-b border-outline-variant shadow-sm sticky top-0 z-50 flex items-center justify-between px-6 h-16 w-full">
<div className="flex items-center gap-sm md:hidden">
<span className="text-lg font-black tracking-tighter text-on-surface uppercase">Industrial Admin</span>
</div>
<div className="hidden md:flex items-center flex-1 max-w-md ml-lg">
<div className="relative w-full">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full bg-surface border border-outline-variant rounded py-2 pl-10 pr-4 text-body-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="Search products..." type="text"/>
</div>
</div>
<div className="flex items-center gap-md ml-auto">
<button className="text-outline hover:text-on-surface transition-colors duration-200">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="text-outline hover:text-on-surface transition-colors duration-200">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<div className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden border border-outline-variant">
<img alt="Administrator Avatar" className="w-full h-full object-cover" data-alt="professional headshot of a man in business attire looking confident against a neutral background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd2Ycgq3l_2oNvpQ0uZZJjYK6fHYivZJ22ujIMscGQk8BYwDZQmQwDqFuCMqKvM3s8G-8p8nIYwvSutq67390V-H0UQpi3m6A4kmlF1eWEsgCp1sm4kRf1mkSlG-cnorCALAUrJxolGbMygQWgLOXwwuo_X4VmZkLQVtpyCDmQoq_fN4tZwmMnfWvSCgpEuct9dT4w13oj2lYqO8vYAx_mHNnm6WrJZNGodAb4UqbpsJazb4wlsDfPl9qm9oQuS81XUECGHBSN5gg4"/>
</div>
</div>
</header>
{/* Main Content Canvas */}
<main className="flex-1 p-6 md:p-lg max-w-[max_width] mx-auto w-full">
{/* Page Header */}
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-lg">
<div>
<h2 className="font-headline-md text-headline-md text-on-surface">Product Management</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Manage catalog, inventory, and pricing.</p>
</div>
<div className="flex items-center gap-sm">
<button className="bg-surface-container-lowest border border-outline-variant text-on-surface px-4 py-2 rounded font-table-data hover:bg-surface-variant transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">download</span>
                        Export
                    </button>
<button className="bg-primary text-on-primary px-4 py-2 rounded font-table-data hover:bg-primary-container transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">add</span>
                        Add New Product
                    </button>
</div>
</div>
{/* Filters & Controls Bar */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-t p-4 flex flex-col sm:flex-row gap-4 items-center justify-between mt-xl">
<div className="flex items-center gap-4 w-full sm:w-auto">
<div className="relative min-w-[200px]">
<select className="w-full appearance-none bg-surface-container-lowest border border-outline-variant text-on-surface font-body-sm py-2 pl-4 pr-10 rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none">
<option>All Categories</option>
<option>Concrete Mixes</option>
<option>Structural Steel</option>
<option>Admixtures</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
</div>
<div className="relative min-w-[160px]">
<select className="w-full appearance-none bg-surface-container-lowest border border-outline-variant text-on-surface font-body-sm py-2 pl-4 pr-10 rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none">
<option>All Statuses</option>
<option>Active</option>
<option>Draft</option>
<option>Archived</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
</div>
</div>
<div className="flex items-center gap-2 w-full sm:w-auto">
<span className="text-body-sm font-body-sm text-on-surface-variant">Showing 1-10 of 142</span>
<div className="flex gap-1 ml-4">
<button className="w-8 h-8 flex items-center justify-center border border-outline-variant rounded text-outline hover:bg-surface-variant transition-colors disabled:opacity-50">
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<button className="w-8 h-8 flex items-center justify-center border border-outline-variant rounded text-on-surface bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
</div>
</div>
{/* Data Table */}
<div className="bg-surface-container-lowest border-x border-b border-outline-variant rounded-b overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-primary text-on-primary font-table-data text-table-data uppercase tracking-wider">
<th className="py-3 px-4 font-medium w-12">
<input className="rounded border-outline-variant text-on-tertiary-container focus:ring-on-tertiary-container bg-transparent" type="checkbox"/>
</th>
<th className="py-3 px-4 font-medium">Product Name</th>
<th className="py-3 px-4 font-medium">Category</th>
<th className="py-3 px-4 font-medium">SKU</th>
<th className="py-3 px-4 font-medium text-right">Unit Price</th>
<th className="py-3 px-4 font-medium">Status</th>
<th className="py-3 px-4 font-medium">Last Updated</th>
<th className="py-3 px-4 font-medium text-right">Actions</th>
</tr>
</thead>
<tbody className="font-body-sm text-body-sm text-on-surface divide-y divide-outline-variant">
<tr className="hover:bg-surface hover:shadow-[0px_4px_12px_rgba(26,43,60,0.08)] transition-all duration-150 group">
<td className="py-3 px-4">
<input className="rounded border-outline-variant text-on-tertiary-container focus:ring-on-tertiary-container" type="checkbox"/>
</td>
<td className="py-3 px-4 font-medium text-on-surface">Fresh Concrete M300</td>
<td className="py-3 px-4 text-on-surface-variant">Ready-Mix</td>
<td className="py-3 px-4 font-mono text-xs text-on-surface-variant">RMX-300-STD</td>
<td className="py-3 px-4 text-right font-medium">$85.00 <span className="text-on-surface-variant font-normal text-xs">/m³</span></td>
<td className="py-3 px-4">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary-fixed text-on-primary-fixed text-[11px] font-bold tracking-wide uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Active
                                </span>
</td>
<td className="py-3 px-4 text-on-surface-variant text-xs">Oct 24, 2023</td>
<td className="py-3 px-4 text-right">
<div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1 text-outline hover:text-on-tertiary-container transition-colors" title="View">
<span className="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button className="p-1 text-outline hover:text-primary transition-colors" title="Edit">
<span className="material-symbols-outlined text-[20px]">edit</span>
</button>
<button className="p-1 text-outline hover:text-error transition-colors" title="Delete">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-surface hover:shadow-[0px_4px_12px_rgba(26,43,60,0.08)] transition-all duration-150 group">
<td className="py-3 px-4">
<input className="rounded border-outline-variant text-on-tertiary-container focus:ring-on-tertiary-container" type="checkbox"/>
</td>
<td className="py-3 px-4 font-medium text-on-surface">Waterproof Concrete</td>
<td className="py-3 px-4 text-on-surface-variant">Specialty Mix</td>
<td className="py-3 px-4 font-mono text-xs text-on-surface-variant">SPC-WPF-001</td>
<td className="py-3 px-4 text-right font-medium">$120.50 <span className="text-on-surface-variant font-normal text-xs">/m³</span></td>
<td className="py-3 px-4">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary-fixed text-on-primary-fixed text-[11px] font-bold tracking-wide uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Active
                                </span>
</td>
<td className="py-3 px-4 text-on-surface-variant text-xs">Oct 22, 2023</td>
<td className="py-3 px-4 text-right">
<div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1 text-outline hover:text-on-tertiary-container transition-colors" title="View">
<span className="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button className="p-1 text-outline hover:text-primary transition-colors" title="Edit">
<span className="material-symbols-outlined text-[20px]">edit</span>
</button>
<button className="p-1 text-outline hover:text-error transition-colors" title="Delete">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-surface hover:shadow-[0px_4px_12px_rgba(26,43,60,0.08)] transition-all duration-150 group bg-surface-container-low">
<td className="py-3 px-4">
<input className="rounded border-outline-variant text-on-tertiary-container focus:ring-on-tertiary-container" type="checkbox"/>
</td>
<td className="py-3 px-4 font-medium text-on-surface">High-Early Strength M400</td>
<td className="py-3 px-4 text-on-surface-variant">Ready-Mix</td>
<td className="py-3 px-4 font-mono text-xs text-on-surface-variant">RMX-400-HES</td>
<td className="py-3 px-4 text-right font-medium">$105.00 <span className="text-on-surface-variant font-normal text-xs">/m³</span></td>
<td className="py-3 px-4">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-surface-variant text-on-surface-variant text-[11px] font-bold tracking-wide uppercase border border-outline-variant">
<span className="w-1.5 h-1.5 rounded-full bg-outline"></span> Draft
                                </span>
</td>
<td className="py-3 px-4 text-on-surface-variant text-xs">Oct 20, 2023</td>
<td className="py-3 px-4 text-right">
<div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1 text-outline hover:text-on-tertiary-container transition-colors" title="View">
<span className="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button className="p-1 text-outline hover:text-primary transition-colors" title="Edit">
<span className="material-symbols-outlined text-[20px]">edit</span>
</button>
<button className="p-1 text-outline hover:text-error transition-colors" title="Delete">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-surface hover:shadow-[0px_4px_12px_rgba(26,43,60,0.08)] transition-all duration-150 group">
<td className="py-3 px-4">
<input className="rounded border-outline-variant text-on-tertiary-container focus:ring-on-tertiary-container" type="checkbox"/>
</td>
<td className="py-3 px-4 font-medium text-on-surface">Rebar #4 Grade 60</td>
<td className="py-3 px-4 text-on-surface-variant">Structural Steel</td>
<td className="py-3 px-4 font-mono text-xs text-on-surface-variant">STL-RBR-0460</td>
<td className="py-3 px-4 text-right font-medium">$0.85 <span className="text-on-surface-variant font-normal text-xs">/ft</span></td>
<td className="py-3 px-4">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary-fixed text-on-primary-fixed text-[11px] font-bold tracking-wide uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Active
                                </span>
</td>
<td className="py-3 px-4 text-on-surface-variant text-xs">Oct 15, 2023</td>
<td className="py-3 px-4 text-right">
<div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1 text-outline hover:text-on-tertiary-container transition-colors" title="View">
<span className="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button className="p-1 text-outline hover:text-primary transition-colors" title="Edit">
<span className="material-symbols-outlined text-[20px]">edit</span>
</button>
<button className="p-1 text-outline hover:text-error transition-colors" title="Delete">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
{/* Professional Pagination Indicator Bar */}
<div className="mt-8 flex justify-center items-center gap-2">
<div className="h-1 w-8 bg-on-tertiary-container rounded"></div>
<div className="h-1 w-8 bg-outline-variant rounded"></div>
<div className="h-1 w-8 bg-outline-variant rounded"></div>
<div className="h-1 w-8 bg-outline-variant rounded"></div>
</div>
</main>
</div>
    </div>
  );
}
