import React from 'react';

export default function DanhMCSNPhM() {
  return (
    <div>
      {/* TopNavBar */}
<header className="bg-white dark:bg-slate-900 flex justify-between items-center h-20 px-8 max-w-full sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800">
<div className="text-xl font-black text-blue-900 dark:text-white uppercase tracking-wider">CONCRETE SOLUTIONS</div>
<nav className="hidden md:flex items-center gap-8 font-inter font-semibold tracking-tight">
<a className="text-slate-600 dark:text-slate-400 hover:text-blue-900 transition-colors" href="#">Materials</a>
<a className="text-slate-600 dark:text-slate-400 hover:text-blue-900 transition-colors" href="#">Equipment</a>
<a className="text-slate-600 dark:text-slate-400 hover:text-blue-900 transition-colors" href="#">Projects</a>
<a className="text-slate-600 dark:text-slate-400 hover:text-blue-900 transition-colors" href="#">Technical Resources</a>
<a className="text-slate-600 dark:text-slate-400 hover:text-blue-900 transition-colors" href="#">Contact</a>
</nav>
<div className="flex items-center gap-4">
<div className="hidden lg:flex items-center border border-outline-variant bg-surface-container-low px-4 py-2 rounded">
<span className="material-symbols-outlined text-outline" style="font-variation-settings: 'FILL' 0;">search</span>
<input className="bg-transparent border-none focus:ring-0 text-body-sm w-48" placeholder="Search Materials..." type="text"/>
</div>
<button className="bg-on-tertiary-container text-white px-6 py-3 font-label-bold uppercase tracking-widest hover:brightness-110 transition-all">
                Get a Quote
            </button>
</div>
</header>
<div className="flex min-h-screen">
{/* SideNavBar / Filter Sidebar */}
<aside className="w-80 bg-slate-50 dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 hidden md:flex flex-col sticky top-20 h-[calc(100vh-80px)] p-8">
<div className="mb-8">
<h2 className="font-headline-sm text-blue-900 mb-4">Categories</h2>
<div className="space-y-2">
<button className="w-full flex items-center justify-between p-3 bg-blue-900 text-white rounded-md shadow-sm transition-transform active:scale-95">
<span className="flex items-center gap-3">
<span className="material-symbols-outlined text-sm">inventory_2</span>
<span className="font-label-bold">All Materials</span>
</span>
<span className="text-xs bg-white/20 px-2 py-0.5 rounded">24</span>
</button>
<button className="w-full flex items-center justify-between p-3 text-slate-600 hover:bg-slate-200 transition-transform active:scale-95">
<span className="flex items-center gap-3">
<span className="material-symbols-outlined text-sm">water_drop</span>
<span className="font-body-md">Ready-Mix Concrete</span>
</span>
<span className="text-xs text-slate-400">12</span>
</button>
<button className="w-full flex items-center justify-between p-3 text-slate-600 hover:bg-slate-200 transition-transform active:scale-95">
<span className="flex items-center gap-3">
<span className="material-symbols-outlined text-sm">foundation</span>
<span className="font-body-md">Specialized Concrete</span>
</span>
<span className="text-xs text-slate-400">6</span>
</button>
<button className="w-full flex items-center justify-between p-3 text-slate-600 hover:bg-slate-200 transition-transform active:scale-95">
<span className="flex items-center gap-3">
<span className="material-symbols-outlined text-sm">architecture</span>
<span className="font-body-md">Architectural Finishes</span>
</span>
<span className="text-xs text-slate-400">4</span>
</button>
<button className="w-full flex items-center justify-between p-3 text-slate-600 hover:bg-slate-200 transition-transform active:scale-95">
<span className="flex items-center gap-3">
<span className="material-symbols-outlined text-sm">construction</span>
<span className="font-body-md">Additives &amp; Fillers</span>
</span>
<span className="text-xs text-slate-400">8</span>
</button>
</div>
</div>
<div className="mb-8">
<h2 className="font-label-bold uppercase text-slate-400 mb-4">Filter by Strength</h2>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded border-outline-variant text-blue-900 focus:ring-blue-900" type="checkbox"/>
<span className="font-body-sm text-slate-600 group-hover:text-blue-900">20 - 30 MPa</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded border-outline-variant text-blue-900 focus:ring-blue-900" type="checkbox"/>
<span className="font-body-sm text-slate-600 group-hover:text-blue-900">30 - 50 MPa</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded border-outline-variant text-blue-900 focus:ring-blue-900" type="checkbox"/>
<span className="font-body-sm text-slate-600 group-hover:text-blue-900">High Strength (50+ MPa)</span>
</label>
</div>
</div>
<div className="mt-auto p-4 bg-primary-container rounded-lg text-white">
<p className="font-body-sm mb-4">Need a custom mix for a specific industrial project?</p>
<button className="w-full py-2 bg-on-tertiary-container text-white font-label-bold uppercase rounded hover:brightness-110 transition-colors">Consult an Engineer</button>
</div>
</aside>
{/* Main Content Canvas */}
<main className="flex-1 p-margin md:p-lg bg-surface">
<header className="mb-xl flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<nav className="flex gap-2 text-slate-400 font-label-bold uppercase mb-2">
<a className="hover:text-blue-900" href="#">Materials</a>
<span>/</span>
<span className="text-blue-900">Catalog</span>
</nav>
<h1 className="font-display-lg text-primary">Industrial Concrete Catalog</h1>
<p className="font-body-lg text-slate-500 max-w-2xl mt-2">Structural-grade materials engineered for extreme durability, architectural precision, and heavy industrial load-bearing requirements.</p>
</div>
<div className="flex items-center gap-4 border-b-2 border-slate-200 pb-2">
<span className="text-slate-400 font-label-bold">SORT BY</span>
<select className="bg-transparent border-none font-label-bold text-blue-900 focus:ring-0 uppercase">
<option>Performance Grade</option>
<option>Newest Arrivals</option>
<option>Sustainability Rating</option>
</select>
</div>
</header>
{/* Product Grid */}
<div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-gutter">
{/* Product Card 1 */}
<div className="bg-white border border-slate-200 flex flex-col group hover:shadow-[0px_4px_12px_rgba(26,43,60,0.08)] transition-all">
<div className="relative h-64 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Close-up of smooth gray high-performance concrete slab with uniform texture and industrial lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_erkPiC1DhLJNtZrVAG7YxjrjtVjISpWvKIMomlKF25VaIbkV-qOZDyRpO1tLn74EUpMQMq-dp3cuX2Jsl4C03CXFtNIl-jLFCbomiD0QLRNMZYiF6hwVylhyiPnENX1jx1zyQamP8ME_klwAwfic099EfUMV81iFLYp0Oh7-HV1ySZYLZcaXiqvTHUDAEjBetf49GIXSgGWBOJCwXobg6VF97YnGcak5DOLs2xPpk13SsH58lI3vib4qGOBGk-gD4PHtPQ273Yc0"/>
<div className="absolute top-4 left-4 bg-blue-900 text-white px-3 py-1 font-label-bold">BEST SELLER</div>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-headline-sm text-primary mb-1">C35/45 structural-mix</h3>
<p className="font-body-sm text-slate-500 uppercase tracking-wider">Ready-Mix Standard</p>
</div>
<span className="material-symbols-outlined text-on-tertiary-container" style="font-variation-settings: 'FILL' 1;">verified</span>
</div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="border-l-2 border-slate-100 pl-3">
<span className="block text-[10px] text-slate-400 font-bold uppercase">Compressive Strength</span>
<span className="font-table-data text-primary">45 MPa</span>
</div>
<div className="border-l-2 border-slate-100 pl-3">
<span className="block text-[10px] text-slate-400 font-bold uppercase">Durability Class</span>
<span className="font-table-data text-primary">XC3, XC4, XD1</span>
</div>
<div className="border-l-2 border-slate-100 pl-3">
<span className="block text-[10px] text-slate-400 font-bold uppercase">Workability</span>
<span className="font-table-data text-primary">S3 (100-150mm)</span>
</div>
<div className="border-l-2 border-slate-100 pl-3">
<span className="block text-[10px] text-slate-400 font-bold uppercase">Aggregate Size</span>
<span className="font-table-data text-primary">20mm max</span>
</div>
</div>
<p className="font-body-sm text-slate-600 mb-8 line-clamp-2">Ideal for reinforced concrete structures, foundations, and heavy-duty slabs requiring high early-age strength development.</p>
<div className="mt-auto flex gap-2">
<button className="flex-1 py-3 bg-primary text-white font-label-bold uppercase tracking-wider hover:bg-primary-container transition-colors">Request Quote</button>
<button className="w-12 h-12 flex items-center justify-center border border-slate-200 text-primary hover:bg-slate-50 transition-colors">
<span className="material-symbols-outlined">description</span>
</button>
</div>
</div>
</div>
{/* Product Card 2 */}
<div className="bg-white border border-slate-200 flex flex-col group hover:shadow-[0px_4px_12px_rgba(26,43,60,0.08)] transition-all">
<div className="relative h-64 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Construction site worker smoothing fresh liquid concrete with industrial power trowel tool at sunset" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3UbeL2BksV7sTC5Y0gIEFDBii7CgqLF29aZCn2ybV-qdf9D7qXLV7I2iiu82ItzzDGAdbW4-yT8bzzgq0y0FEezsesUloYM2I2oqLP82fVJTkom58e0jwBk_6sau7Y1wo3rL6xRwUGb1Ub7eXCFFWz65mYx0tJZ8eogoG1p33XlCXo5VFc9MLJB1P2ZffmLFCCZZiIPXZOp-XxeJ5Oy4HmpB5L6ABTSjJgI7f9Mr9rHg3460s2lagpAKYkeu5X8Cyt_RZSBBgZaE0"/>
<div className="absolute top-4 left-4 bg-on-tertiary-container text-white px-3 py-1 font-label-bold">FAST CURING</div>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-headline-sm text-primary mb-1">Rapid-Set Industrial</h3>
<p className="font-body-sm text-slate-500 uppercase tracking-wider">Special Concrete</p>
</div>
<span className="material-symbols-outlined text-slate-300">timer</span>
</div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="border-l-2 border-slate-100 pl-3">
<span className="block text-[10px] text-slate-400 font-bold uppercase">Compressive Strength</span>
<span className="font-table-data text-primary">30 MPa @ 24h</span>
</div>
<div className="border-l-2 border-slate-100 pl-3">
<span className="block text-[10px] text-slate-400 font-bold uppercase">Setting Time</span>
<span className="font-table-data text-primary">45 - 90 mins</span>
</div>
<div className="border-l-2 border-slate-100 pl-3">
<span className="block text-[10px] text-slate-400 font-bold uppercase">Shrinkage</span>
<span className="font-table-data text-primary">Ultra-Low</span>
</div>
<div className="border-l-2 border-slate-100 pl-3">
<span className="block text-[10px] text-slate-400 font-bold uppercase">Application</span>
<span className="font-table-data text-primary">Roads / Ports</span>
</div>
</div>
<p className="font-body-sm text-slate-600 mb-8 line-clamp-2">High-performance rapid setting mix designed for urgent infrastructure repairs and heavy-traffic environments.</p>
<div className="mt-auto flex gap-2">
<button className="flex-1 py-3 bg-primary text-white font-label-bold uppercase tracking-wider hover:bg-primary-container transition-colors">Request Quote</button>
<button className="w-12 h-12 flex items-center justify-center border border-slate-200 text-primary hover:bg-slate-50 transition-colors">
<span className="material-symbols-outlined">description</span>
</button>
</div>
</div>
</div>
{/* Product Card 3 */}
<div className="bg-white border border-slate-200 flex flex-col group hover:shadow-[0px_4px_12px_rgba(26,43,60,0.08)] transition-all">
<div className="relative h-64 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Modern architectural wall made of polished white concrete with subtle aggregate texture and sharp shadow lines" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP2x2mXgKprIvLSHbrczCAvMCL4D_j_WjLTAW5EMRKjxBXDAymlm8fudnNvr3GdeNdY42QdykXrp9KrIMdCQBjt7VhBcPq39HZIZMnNTmciDFQDM_-EIey9jmBRJ9r0NfbgxpPLE5gAFJ56sWgdIRGY9g-9d7GxEDvuCy2aJS3IcglfbgOavDy3xet3AYk4ebDltUWMwWSljfjNZFCjyM3nziqtPncecuAVfF1ntqTqHDecJApAWIBgx_1m6wJDBpyZH2TKxMliMJQ"/>
<div className="absolute top-4 left-4 bg-slate-100 text-slate-900 px-3 py-1 font-label-bold">AESTHETIC GRADE</div>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-headline-sm text-primary mb-1">Architectural White</h3>
<p className="font-body-sm text-slate-500 uppercase tracking-wider">Visible Structures</p>
</div>
<span className="material-symbols-outlined text-slate-300">palette</span>
</div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="border-l-2 border-slate-100 pl-3">
<span className="block text-[10px] text-slate-400 font-bold uppercase">Reflectance</span>
<span className="font-table-data text-primary">85% Albedo</span>
</div>
<div className="border-l-2 border-slate-100 pl-3">
<span className="block text-[10px] text-slate-400 font-bold uppercase">Finish</span>
<span className="font-table-data text-primary">Satin Polish</span>
</div>
<div className="border-l-2 border-slate-100 pl-3">
<span className="block text-[10px] text-slate-400 font-bold uppercase">Strength</span>
<span className="font-table-data text-primary">C25/30</span>
</div>
<div className="border-l-2 border-slate-100 pl-3">
<span className="block text-[10px] text-slate-400 font-bold uppercase">UV Resistance</span>
<span className="font-table-data text-primary">Lifetime</span>
</div>
</div>
<p className="font-body-sm text-slate-600 mb-8 line-clamp-2">Premium aesthetic concrete using white Portland cement for high-visibility architectural facades and interior floors.</p>
<div className="mt-auto flex gap-2">
<button className="flex-1 py-3 bg-primary text-white font-label-bold uppercase tracking-wider hover:bg-primary-container transition-colors">Request Quote</button>
<button className="w-12 h-12 flex items-center justify-center border border-slate-200 text-primary hover:bg-slate-50 transition-colors">
<span className="material-symbols-outlined">description</span>
</button>
</div>
</div>
</div>
{/* Product Card 4 */}
<div className="bg-white border border-slate-200 flex flex-col group hover:shadow-[0px_4px_12px_rgba(26,43,60,0.08)] transition-all">
<div className="relative h-64 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Industrial concrete mixer truck pouring liquid concrete into a metal foundation formwork on a large construction site" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA-1gLuJVx5BfeOBjzIvtE1kg7kZ-1FS4SNmOXhivfU_lVvRKUGzs1eiBlfy_qBSPjUWn0hGscNfSJ3nwwKqRSiJTB2FnT9S2Ivt_OI2ueS1Vk1gLyw_aiqqyqOf6ccYaNMRRq7-oWoIqW7jF1BlTsyQuo5i9GzlkfZd3lR0QLSFXl1SfiJOsspB8UDl8yM1jhB85ceAMxm3t8HKrusz7JCGf_yj2jKzDhsvtqWo6-LyrphSiZr8ViN70earCovu1zAqJ5ckymILVD"/>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-headline-sm text-primary mb-1">Self-Consolidating</h3>
<p className="font-body-sm text-slate-500 uppercase tracking-wider">Heavy Reinforcement</p>
</div>
<span className="material-symbols-outlined text-slate-300">fluid</span>
</div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="border-l-2 border-slate-100 pl-3">
<span className="block text-[10px] text-slate-400 font-bold uppercase">Slump Flow</span>
<span className="font-table-data text-primary">650 - 800 mm</span>
</div>
<div className="border-l-2 border-slate-100 pl-3">
<span className="block text-[10px] text-slate-400 font-bold uppercase">Stability</span>
<span className="font-table-data text-primary">Visual Rating 0</span>
</div>
<div className="border-l-2 border-slate-100 pl-3">
<span className="block text-[10px] text-slate-400 font-bold uppercase">Compaction</span>
<span className="font-table-data text-primary">Self-Leveling</span>
</div>
<div className="border-l-2 border-slate-100 pl-3">
<span className="block text-[10px] text-slate-400 font-bold uppercase">Usage</span>
<span className="font-table-data text-primary">Complex Rebar</span>
</div>
</div>
<p className="font-body-sm text-slate-600 mb-8 line-clamp-2">Flowable concrete that spreads through congested reinforcement without vibration while maintaining homogeneity.</p>
<div className="mt-auto flex gap-2">
<button className="flex-1 py-3 bg-primary text-white font-label-bold uppercase tracking-wider hover:bg-primary-container transition-colors">Request Quote</button>
<button className="w-12 h-12 flex items-center justify-center border border-slate-200 text-primary hover:bg-slate-50 transition-colors">
<span className="material-symbols-outlined">description</span>
</button>
</div>
</div>
</div>
{/* Product Card 5 */}
<div className="bg-white border border-slate-200 flex flex-col group hover:shadow-[0px_4px_12px_rgba(26,43,60,0.08)] transition-all">
<div className="relative h-64 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Dense fiber-reinforced concrete block showing metallic filaments for structural integrity in macro detail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6w-m7UmVdRg8DizIO7Z4KU0QmT1yKDuz9em-0mZ8Ce8crQQUrHWN1MXPdyVBgn5azjobX510PY9qrsMBTMJLrQKoGxaiYO0_zfRZKpVbqjErnxy6TbznhGLBAP-ak0R2O91Urk9tCbTUoAITLnUtLjbwJjdma0dPURUQsgPDYM-RdJXiEzVHWJBiyA9jH6VJnT7r7yC0WdLQJZAEPi5DxICTIYBjh8biIMuoovGFm__kK_lGd2oW6Kiml47qGt2ubpERF7KlMcmoj"/>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-headline-sm text-primary mb-1">Fiber-Reinforced Ultra</h3>
<p className="font-body-sm text-slate-500 uppercase tracking-wider">Crack Prevention</p>
</div>
<span className="material-symbols-outlined text-slate-300">grid_4x4</span>
</div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="border-l-2 border-slate-100 pl-3">
<span className="block text-[10px] text-slate-400 font-bold uppercase">Fiber Type</span>
<span className="font-table-data text-primary">Steel Macro</span>
</div>
<div className="border-l-2 border-slate-100 pl-3">
<span className="block text-[10px] text-slate-400 font-bold uppercase">Flexural Strength</span>
<span className="font-table-data text-primary">High Ductility</span>
</div>
<div className="border-l-2 border-slate-100 pl-3">
<span className="block text-[10px] text-slate-400 font-bold uppercase">Dosage</span>
<span className="font-table-data text-primary">25 - 40 kg/m³</span>
</div>
<div className="border-l-2 border-slate-100 pl-3">
<span className="block text-[10px] text-slate-400 font-bold uppercase">Certification</span>
<span className="font-table-data text-primary">EN 14889</span>
</div>
</div>
<p className="font-body-sm text-slate-600 mb-8 line-clamp-2">Replaces traditional mesh in flooring and precast elements, providing superior impact resistance and toughness.</p>
<div className="mt-auto flex gap-2">
<button className="flex-1 py-3 bg-primary text-white font-label-bold uppercase tracking-wider hover:bg-primary-container transition-colors">Request Quote</button>
<button className="w-12 h-12 flex items-center justify-center border border-slate-200 text-primary hover:bg-slate-50 transition-colors">
<span className="material-symbols-outlined">description</span>
</button>
</div>
</div>
</div>
{/* Product Card 6 */}
<div className="bg-white border border-slate-200 flex flex-col group hover:shadow-[0px_4px_12px_rgba(26,43,60,0.08)] transition-all">
<div className="relative h-64 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Eco-friendly green concrete blocks with natural plant life nearby representing sustainable building practices" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKlY7Me9aY6MyHtkYJzmt75NeIZ8HwwPbKtzcQlaxIEIRJ74cRCnSVinczI_mb_KIgwzZfncMYcK-qHAuPA8AlKsaOqC46wXQnTCsXSoTcq5sfuBO0KpYa9If3L7sytvYJ-OIAAMhLwPFqe9wS1YD0YwLFxfAKYue1FyvkOYlBWsr3PTOfREDw6I2DarNJAvJiDhVxfbk_4TF162zX7q9hmXs8m55rfG1eMMmCuVQfP_pN9owuYPCrQDFrYQvcxfLISPiagHKBeXEy"/>
<div className="absolute top-4 left-4 bg-emerald-700 text-white px-3 py-1 font-label-bold">ECO-ENGINEERED</div>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-headline-sm text-primary mb-1">Low-Carbon EcoMix</h3>
<p className="font-body-sm text-slate-500 uppercase tracking-wider">Sustainability</p>
</div>
<span className="material-symbols-outlined text-emerald-600">eco</span>
</div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="border-l-2 border-slate-100 pl-3">
<span className="block text-[10px] text-slate-400 font-bold uppercase">CO2 Reduction</span>
<span className="font-table-data text-primary">40% vs OPC</span>
</div>
<div className="border-l-2 border-slate-100 pl-3">
<span className="block text-[10px] text-slate-400 font-bold uppercase">SCM Content</span>
<span className="font-table-data text-primary">GGBS / PFA</span>
</div>
<div className="border-l-2 border-slate-100 pl-3">
<span className="block text-[10px] text-slate-400 font-bold uppercase">Curing</span>
<span className="font-table-data text-primary">Standard</span>
</div>
<div className="border-l-2 border-slate-100 pl-3">
<span className="block text-[10px] text-slate-400 font-bold uppercase">LEED Points</span>
<span className="font-table-data text-primary">Maximum</span>
</div>
</div>
<p className="font-body-sm text-slate-600 mb-8 line-clamp-2">High-performance structural mix incorporating supplementary cementitious materials for reduced environmental impact.</p>
<div className="mt-auto flex gap-2">
<button className="flex-1 py-3 bg-primary text-white font-label-bold uppercase tracking-wider hover:bg-primary-container transition-colors">Request Quote</button>
<button className="w-12 h-12 flex items-center justify-center border border-slate-200 text-primary hover:bg-slate-50 transition-colors">
<span className="material-symbols-outlined">description</span>
</button>
</div>
</div>
</div>
</div>
{/* Pagination */}
<div className="mt-xl flex items-center justify-between border-t border-slate-200 pt-8">
<p className="font-body-sm text-slate-500 uppercase">Showing 6 of 24 results</p>
<div className="flex items-center gap-4">
<div className="flex gap-2">
<div className="w-8 h-1 bg-on-tertiary-container"></div>
<div className="w-8 h-1 bg-slate-300"></div>
<div className="w-8 h-1 bg-slate-300"></div>
<div className="w-8 h-1 bg-slate-300"></div>
</div>
<div className="flex gap-2">
<button className="p-2 border border-slate-200 text-slate-400 hover:text-blue-900 transition-colors">
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="p-2 border border-slate-200 text-primary hover:bg-slate-50 transition-colors">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
</div>
</main>
</div>
{/* Footer */}
<footer className="w-full py-12 px-8 grid grid-cols-1 md:grid-cols-4 gap-8 bg-blue-950 dark:bg-black border-t-4 border-orange-600">
<div className="md:col-span-1">
<div className="text-2xl font-black text-white mb-4">CONCRETE SOLUTIONS</div>
<p className="font-inter text-xs uppercase tracking-widest text-slate-400 leading-loose">
                PROVIDING WORLD-CLASS STRUCTURAL MATERIALS FOR INFRASTRUCTURE, COMMERCIAL, AND RESIDENTIAL DEVELOPMENTS GLOBALLY.
            </p>
</div>
<div>
<h4 className="font-label-bold text-orange-500 mb-6 uppercase tracking-widest">Navigation</h4>
<ul className="space-y-3 font-inter text-xs uppercase tracking-widest">
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Sitemap</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Technical Specs</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Compliance</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Safety</a></li>
</ul>
</div>
<div>
<h4 className="font-label-bold text-orange-500 mb-6 uppercase tracking-widest">Resources</h4>
<ul className="space-y-3 font-inter text-xs uppercase tracking-widest">
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Project Leads</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Invoices</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h4 className="font-label-bold text-orange-500 mb-6 uppercase tracking-widest">Headquarters</h4>
<p className="font-inter text-xs uppercase tracking-widest text-slate-400 leading-loose">
                1200 Industrial Plaza<br/>
                Concrete Valley, CA 90210<br/>
                T: +1 (555) 092-4400<br/>
                E: contact@concretesolutions.com
            </p>
</div>
<div className="md:col-span-4 border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="font-inter text-xs uppercase tracking-widest text-slate-400">
                © 2024 CONCRETE SOLUTIONS. ALL RIGHTS RESERVED. INDUSTRIAL EXCELLENCE.
            </div>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-orange-500 transition-colors font-inter text-xs uppercase tracking-widest" href="#">LinkedIn</a>
<a className="text-slate-400 hover:text-orange-500 transition-colors font-inter text-xs uppercase tracking-widest" href="#">YouTube</a>
<a className="text-slate-400 hover:text-orange-500 transition-colors font-inter text-xs uppercase tracking-widest" href="#">Twitter</a>
</div>
</div>
</footer>
    </div>
  );
}
