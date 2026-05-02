import React from 'react';

export default function CUHNhThNgBOEmailCBiUThNgKAdminCms() {
  return (
    <div>
      {/* SideNavBar (from JSON) */}
<nav className="bg-slate-50 dark:bg-slate-950 text-[#1A2B3C] dark:text-slate-100 font-['Inter'] text-xs font-semibold uppercase tracking-widest h-full border-r border-slate-200 dark:border-slate-800 flat no-shadows fixed left-0 top-0 w-64 h-screen flex flex-col pt-20 pb-6 z-40 transition-all duration-200 ease-in-out hidden md:flex">
<div className="px-6 mb-8 flex flex-col gap-2">
<div className="w-10 h-10 bg-primary rounded-DEFAULT flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined">domain</span>
</div>
<h1 className="text-lg font-bold text-[#1A2B3C] dark:text-white mt-2">Operations Hub</h1>
<p className="text-on-surface-variant font-label-bold text-label-bold">Material Management</p>
</div>
<div className="px-4 mb-6">
<button className="w-full bg-primary text-on-primary font-table-data text-table-data py-sm rounded-DEFAULT flex items-center justify-center gap-2 hover:bg-primary-fixed-variant transition-colors">
<span className="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">add</span>
                New Quote
            </button>
</div>
<ul className="flex-1 flex flex-col gap-1 w-full">
<li><a className="text-slate-600 dark:text-slate-400 hover:text-[#1A2B3C] dark:hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors" href="#"><span className="material-symbols-outlined">dashboard</span>Dashboard</a></li>
<li><a className="text-slate-600 dark:text-slate-400 hover:text-[#1A2B3C] dark:hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors" href="#"><span className="material-symbols-outlined">inventory_2</span>Inventory</a></li>
<li><a className="text-slate-600 dark:text-slate-400 hover:text-[#1A2B3C] dark:hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors" href="#"><span className="material-symbols-outlined">request_quote</span>Project Quotes</a></li>
{/* Active Tab */}
<li><a className="bg-[#1A2B3C] text-white dark:bg-slate-100 dark:text-slate-900 rounded-none border-l-4 border-orange-500 px-4 py-3 flex items-center gap-3 transition-all" href="#"><span className="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">mail</span>Email Alerts</a></li>
<li><a className="text-slate-600 dark:text-slate-400 hover:text-[#1A2B3C] dark:hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors" href="#"><span className="material-symbols-outlined">settings</span>System Config</a></li>
<li><a className="text-slate-600 dark:text-slate-400 hover:text-[#1A2B3C] dark:hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors" href="#"><span className="material-symbols-outlined">history</span>User Logs</a></li>
</ul>
<ul className="mt-auto flex flex-col gap-1 w-full border-t border-slate-200 dark:border-slate-800 pt-4">
<li><a className="text-slate-600 dark:text-slate-400 hover:text-[#1A2B3C] dark:hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors" href="#"><span className="material-symbols-outlined">contact_support</span>Support</a></li>
<li><a className="text-slate-600 dark:text-slate-400 hover:text-[#1A2B3C] dark:hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors" href="#"><span className="material-symbols-outlined">logout</span>Logout</a></li>
</ul>
</nav>
{/* Main Content Canvas */}
<main className="flex-1 flex flex-col md:pl-64 min-h-screen relative">
{/* TopAppBar (from JSON) */}
<header className="bg-white dark:bg-slate-900 text-[#1A2B3C] dark:text-slate-100 font-['Inter'] antialiased text-sm tracking-tight docked full-width top-0 border-b border-slate-200 dark:border-slate-800 flat no-shadows flex items-center justify-between w-full h-16 px-6 sticky top-0 z-50">
<div className="flex items-center gap-4">
<span className="text-xl font-black text-[#1A2B3C] dark:text-white uppercase tracking-wider">BuildIndustrial CMS</span>
</div>
<div className="flex items-center gap-6">
{/* Search Bar Placeholder based on "search_bar": "on_left" (moved relative to brand) */}
<div className="hidden lg:flex items-center bg-surface-container-low border border-outline-variant rounded-DEFAULT px-3 py-1.5 focus-within:border-primary transition-colors">
<span className="material-symbols-outlined text-outline text-[18px]">search</span>
<input className="bg-transparent border-none outline-none text-body-sm font-body-sm ml-2 w-48 text-on-surface placeholder:text-outline" placeholder="Search resources..." type="text"/>
</div>
<div className="flex items-center gap-4">
<button className="text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors p-2 rounded-full flex items-center justify-center">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors p-2 rounded-full flex items-center justify-center">
<span className="material-symbols-outlined">help</span>
</button>
<button className="text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors p-2 rounded-full flex items-center justify-center">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="w-8 h-8 rounded-full bg-primary-fixed-dim overflow-hidden border border-outline-variant flex items-center justify-center">
<span className="material-symbols-outlined text-primary">person</span>
</div>
</div>
</div>
</header>
{/* Page Content */}
<div className="p-margin max-w-max_width mx-auto w-full flex-1 flex flex-col gap-xl">
{/* Page Header */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-outline-variant pb-sm">
<div>
<h2 className="font-headline-md text-headline-md text-primary">System Notification Routing</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Configure SMTP endpoints and monitor automated dispatch health.</p>
</div>
<div className="flex gap-3">
<button className="px-md py-sm bg-surface-container-lowest border border-outline text-on-surface font-table-data text-table-data rounded-DEFAULT hover:bg-surface-container-low transition-colors shadow-sm">
                        Send Test Ping
                    </button>
<button className="px-md py-sm bg-primary text-on-primary font-table-data text-table-data rounded-DEFAULT hover:bg-primary-fixed-variant transition-colors shadow-sm">
                        Save Configuration
                    </button>
</div>
</div>
{/* Configuration Grid */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/* Primary Settings (Col 8) */}
<div className="md:col-span-8 flex flex-col gap-gutter">
{/* SMTP Settings Card */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT shadow-sm overflow-hidden flex flex-col">
<div className="bg-surface-container-low px-md py-sm border-b border-outline-variant flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[18px]">router</span>
<h3 className="font-table-data text-table-data text-primary uppercase tracking-wider">Primary SMTP Gateway</h3>
</div>
<div className="p-md grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-sm">
<div className="flex flex-col gap-1 md:col-span-2">
<label className="font-label-bold text-label-bold text-on-surface-variant uppercase">Provider Preset</label>
<select className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-sm py-2 text-body-sm font-body-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none">
<option>Custom Enterprise Relay</option>
<option>AWS SES (us-east-1)</option>
<option>SendGrid API</option>
</select>
</div>
<div className="flex flex-col gap-1">
<label className="font-label-bold text-label-bold text-on-surface-variant uppercase">Host Address</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-sm py-2 text-body-sm font-body-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none" type="text" value="smtp.internal-corp.net"/>
</div>
<div className="flex flex-col gap-1">
<label className="font-label-bold text-label-bold text-on-surface-variant uppercase">Port / Protocol</label>
<div className="flex gap-2">
<input className="w-24 bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-sm py-2 text-body-sm font-body-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none text-center" type="text" value="587"/>
<select className="flex-1 bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-sm py-2 text-body-sm font-body-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none">
<option>TLS (Recommended)</option>
<option>SSL</option>
<option>None (Insecure)</option>
</select>
</div>
</div>
<div className="flex flex-col gap-1">
<label className="font-label-bold text-label-bold text-on-surface-variant uppercase">Service Account Username</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-sm py-2 text-body-sm font-body-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none" type="text" value="svc_alerts@buildindustrial.com"/>
</div>
<div className="flex flex-col gap-1">
<label className="font-label-bold text-label-bold text-on-surface-variant uppercase">Authentication Token</label>
<div className="relative">
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-sm py-2 pr-10 text-body-sm font-body-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none" type="password" value="****************"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
</div>
</div>
</div>
</div>
{/* Automatic Rotation Config Card */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT shadow-sm overflow-hidden flex flex-col">
<div className="bg-surface-container-low px-md py-sm border-b border-outline-variant flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[18px]">sync</span>
<h3 className="font-table-data text-table-data text-primary uppercase tracking-wider">Credential Rotation Policy</h3>
</div>
<div className="p-md flex flex-col gap-4">
<div className="flex items-start justify-between gap-4">
<div>
<p className="font-table-data text-table-data text-on-surface">Enforce Automated Key Rotation</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 max-w-lg">Requires integration with HashiCorp Vault or AWS Secrets Manager. If disabled, tokens must be updated manually prior to expiration.</p>
</div>
{/* Toggle Switch CSS representation */}
<div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer border border-primary">
<div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5 shadow-sm"></div>
</div>
</div>
<div className="h-px bg-outline-variant w-full"></div>
<div className="flex flex-col gap-1 w-64">
<label className="font-label-bold text-label-bold text-on-surface-variant uppercase">Rotation Frequency (Days)</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-sm py-2 text-body-sm font-body-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none" type="number" value="90"/>
</div>
</div>
</div>
</div>
{/* Secondary/Monitoring (Col 4) */}
<div className="md:col-span-4 flex flex-col gap-gutter">
{/* Dispatch Health Chart Card */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT shadow-sm overflow-hidden flex flex-col h-full">
<div className="bg-surface-container-low px-md py-sm border-b border-outline-variant flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[18px]">monitoring</span>
<h3 className="font-table-data text-table-data text-primary uppercase tracking-wider">7-Day Dispatch Health</h3>
</div>
<div className="p-md flex-1 flex flex-col justify-center gap-6">
<div className="text-center">
<p className="font-display-lg text-display-lg text-primary">98.2%</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Overall Delivery Success Rate</p>
</div>
{/* Structural Bar Chart */}
<div className="flex flex-col gap-2 w-full">
<div className="flex justify-between items-end">
<span className="font-label-bold text-label-bold text-on-surface-variant uppercase">Volume Ratio</span>
<span className="font-label-bold text-label-bold text-on-surface-variant uppercase">12,450 Total</span>
</div>
<div className="w-full h-3 bg-surface-variant rounded-sm overflow-hidden flex">
{/* Success Segment */}
<div className="h-full bg-primary" style="width: 98.2%;"></div>
{/* Failed Segment */}
<div className="h-full bg-error" style="width: 1.8%;"></div>
</div>
<div className="flex justify-between mt-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-primary"></div>
<span className="font-table-data text-table-data text-on-surface">Delivered (12,226)</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-error"></div>
<span className="font-table-data text-table-data text-on-surface">Bounced/Failed (224)</span>
</div>
</div>
</div>
<div className="mt-auto bg-surface px-sm py-xs border border-outline-variant rounded-sm flex items-start gap-2">
<span className="material-symbols-outlined text-error text-[16px] mt-0.5">warning</span>
<p className="font-body-sm text-body-sm text-on-surface text-xs">Spike in bounce rates detected on 10/24 related to @legacy-domain.com filters.</p>
</div>
</div>
</div>
</div>
</div>
{/* Logging Section (Full Width) */}
<div className="flex flex-col gap-sm">
<div className="flex justify-between items-end">
<div>
<h3 className="font-headline-sm text-headline-sm text-primary">Recent Dispatch Logs</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Real-time telemetry of system-generated notifications.</p>
</div>
<div className="flex gap-2">
<button className="px-sm py-xs bg-surface border border-outline-variant text-on-surface font-table-data text-table-data rounded-DEFAULT hover:bg-surface-container-low transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">download</span> CSV
                        </button>
<button className="px-sm py-xs bg-surface border border-outline-variant text-on-surface font-table-data text-table-data rounded-DEFAULT hover:bg-surface-container-low transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">picture_as_pdf</span> PDF
                        </button>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse min-w-[800px]">
<thead className="bg-primary text-on-primary">
<tr>
<th className="font-table-data text-table-data px-md py-sm font-semibold border-b border-primary-fixed-dim w-48">Timestamp (UTC)</th>
<th className="font-table-data text-table-data px-md py-sm font-semibold border-b border-primary-fixed-dim">Recipient</th>
<th className="font-table-data text-table-data px-md py-sm font-semibold border-b border-primary-fixed-dim">Event Type</th>
<th className="font-table-data text-table-data px-md py-sm font-semibold border-b border-primary-fixed-dim w-32">Status</th>
<th className="font-table-data text-table-data px-md py-sm font-semibold border-b border-primary-fixed-dim w-24 text-right">Latency</th>
</tr>
</thead>
<tbody className="text-on-surface">
<tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors">
<td className="font-body-sm text-body-sm px-md py-sm text-on-surface-variant">2023-10-26 14:32:01</td>
<td className="font-body-sm text-body-sm px-md py-sm">procurement@steelworks.inc</td>
<td className="font-body-sm text-body-sm px-md py-sm">Quote Approval Request</td>
<td className="px-md py-sm">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-sm bg-surface border border-outline-variant text-primary font-table-data text-xs">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Delivered
                                        </span>
</td>
<td className="font-body-sm text-body-sm px-md py-sm text-right text-on-surface-variant">120ms</td>
</tr>
<tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors">
<td className="font-body-sm text-body-sm px-md py-sm text-on-surface-variant">2023-10-26 14:15:44</td>
<td className="font-body-sm text-body-sm px-md py-sm">admin@buildindustrial.com</td>
<td className="font-body-sm text-body-sm px-md py-sm">System Health Alert</td>
<td className="px-md py-sm">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-sm bg-surface border border-outline-variant text-primary font-table-data text-xs">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Delivered
                                        </span>
</td>
<td className="font-body-sm text-body-sm px-md py-sm text-right text-on-surface-variant">85ms</td>
</tr>
<tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors bg-error-container/10">
<td className="font-body-sm text-body-sm px-md py-sm text-on-surface-variant">2023-10-26 13:05:12</td>
<td className="font-body-sm text-body-sm px-md py-sm">j.doe@legacy-vendor.co</td>
<td className="font-body-sm text-body-sm px-md py-sm">Invoice Submission</td>
<td className="px-md py-sm">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-sm bg-surface border border-outline-variant text-error font-table-data text-xs">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span> Bounced (550)
                                        </span>
</td>
<td className="font-body-sm text-body-sm px-md py-sm text-right text-on-surface-variant">450ms</td>
</tr>
<tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors">
<td className="font-body-sm text-body-sm px-md py-sm text-on-surface-variant">2023-10-26 11:22:00</td>
<td className="font-body-sm text-body-sm px-md py-sm">site-manager@project-alpha.com</td>
<td className="font-body-sm text-body-sm px-md py-sm">Material Delivery Confirmation</td>
<td className="px-md py-sm">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-sm bg-surface border border-outline-variant text-primary font-table-data text-xs">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Delivered
                                        </span>
</td>
<td className="font-body-sm text-body-sm px-md py-sm text-right text-on-surface-variant">110ms</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="font-body-sm text-body-sm px-md py-sm text-on-surface-variant">2023-10-26 09:00:05</td>
<td className="font-body-sm text-body-sm px-md py-sm">all-staff@buildindustrial.com</td>
<td className="font-body-sm text-body-sm px-md py-sm">Weekly Inventory Digest</td>
<td className="px-md py-sm">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-sm bg-surface border border-outline-variant text-primary font-table-data text-xs">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Delivered
                                        </span>
</td>
<td className="font-body-sm text-body-sm px-md py-sm text-right text-on-surface-variant">320ms</td>
</tr>
</tbody>
</table>
</div>
<div className="bg-surface-container-low px-md py-sm border-t border-outline-variant flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">Showing 5 of 12,450 records</span>
<div className="flex gap-1">
<button className="w-8 h-8 flex items-center justify-center rounded-sm hover:bg-surface-variant text-on-surface-variant transition-colors disabled:opacity-50"><span className="material-symbols-outlined text-[18px]">chevron_left</span></button>
<button className="w-8 h-8 flex items-center justify-center rounded-sm bg-primary text-on-primary font-table-data text-table-data">1</button>
<button className="w-8 h-8 flex items-center justify-center rounded-sm hover:bg-surface-variant text-on-surface-variant font-table-data text-table-data transition-colors">2</button>
<button className="w-8 h-8 flex items-center justify-center rounded-sm hover:bg-surface-variant text-on-surface-variant font-table-data text-table-data transition-colors">3</button>
<span className="w-8 h-8 flex items-center justify-center text-on-surface-variant">...</span>
<button className="w-8 h-8 flex items-center justify-center rounded-sm hover:bg-surface-variant text-on-surface-variant transition-colors"><span className="material-symbols-outlined text-[18px]">chevron_right</span></button>
</div>
</div>
</div>
</div>
{/* Bottom Spacing */}
<div className="pb-xl"></div>
</div>
</main>
    </div>
  );
}
