import React from 'react';

export default function LiNHBOGi() {
  return (
    <div>
      {/* TopNavBar */}
<header className="flex justify-between items-center h-20 px-8 max-w-full sticky top-0 z-50 bg-white border-b border-slate-200">
<div className="text-xl font-black text-blue-900 uppercase tracking-wider font-inter">CONCRETE SOLUTIONS</div>
<nav className="hidden md:flex items-center gap-8 h-full">
<a className="font-inter font-semibold tracking-tight text-slate-600 hover:text-blue-900 duration-200 ease-in-out" href="#">Materials</a>
<a className="font-inter font-semibold tracking-tight text-slate-600 hover:text-blue-900 duration-200 ease-in-out" href="#">Equipment</a>
<a className="font-inter font-semibold tracking-tight text-slate-600 hover:text-blue-900 duration-200 ease-in-out" href="#">Projects</a>
<a className="font-inter font-semibold tracking-tight text-slate-600 hover:text-blue-900 duration-200 ease-in-out" href="#">Technical Resources</a>
<a className="font-inter font-semibold tracking-tight text-orange-600 border-b-2 border-orange-600 pb-1 duration-200 ease-in-out" href="#">Contact</a>
</nav>
<div className="flex items-center gap-6">
<div className="hidden lg:flex items-center bg-slate-100 rounded px-3 py-1.5 border border-slate-200">
<span className="material-symbols-outlined text-slate-400 text-sm mr-2">search</span>
<input className="bg-transparent border-none focus:ring-0 text-sm w-48" placeholder="Search resources..." type="text"/>
</div>
<button className="bg-primary text-white px-6 py-2.5 font-inter font-semibold text-sm tracking-tight hover:bg-primary-container transition-colors">
                Get a Quote
            </button>
</div>
</header>
<main className="max-w-[1280px] mx-auto px-8 py-16">
{/* Hero Section */}
<section className="mb-xl text-center md:text-left">
<div className="flex flex-col md:flex-row items-center gap-12">
<div className="flex-1">
<span className="text-on-tertiary-container font-label-bold uppercase tracking-widest bg-tertiary-fixed px-3 py-1 rounded-sm">Industrial Excellence</span>
<h1 className="font-display-lg text-primary mt-6 mb-4">Structural Partnership Starts Here.</h1>
<p className="text-body-lg text-on-surface-variant max-w-2xl">Connect with our technical experts for material specifications, logistics coordination, and customized concrete solutions for large-scale infrastructure.</p>
</div>
<div className="w-full md:w-1/3 bg-white border border-outline-variant p-8 relative">
<div className="absolute -top-4 -right-4 w-12 h-12 bg-on-tertiary-container flex items-center justify-center">
<span className="material-symbols-outlined text-white">support_agent</span>
</div>
<p className="font-headline-sm text-primary mb-2">24/7 Support</p>
<p className="text-body-sm text-on-surface-variant">Emergency project support and logistics tracking for active concrete pours.</p>
<p className="text-primary font-bold mt-4 text-lg">+1 (800) CONCRETE</p>
</div>
</div>
</section>
{/* Main Content Grid */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
{/* Contact Form Section */}
<div className="lg:col-span-7 bg-white p-10 border border-outline-variant">
<div className="mb-8">
<h2 className="font-headline-md text-primary mb-2">Project Inquiry &amp; Quote Request</h2>
<p className="text-body-md text-on-surface-variant">Provide your project details and a technical advisor will respond within 4 business hours.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="font-label-bold text-primary block">FULL NAME</label>
<input className="w-full border border-outline-variant p-3 bg-surface-container-lowest form-input-focus" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="font-label-bold text-primary block">COMPANY NAME</label>
<input className="w-full border border-outline-variant p-3 bg-surface-container-lowest form-input-focus" placeholder="Construction Ltd." type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="font-label-bold text-primary block">EMAIL ADDRESS</label>
<input className="w-full border border-outline-variant p-3 bg-surface-container-lowest form-input-focus" placeholder="j.doe@company.com" type="email"/>
</div>
<div className="space-y-2">
<label className="font-label-bold text-primary block">PHONE NUMBER</label>
<input className="w-full border border-outline-variant p-3 bg-surface-container-lowest form-input-focus" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="font-label-bold text-primary block">SERVICE TYPE</label>
<select className="w-full border border-outline-variant p-3 bg-surface-container-lowest form-input-focus">
<option>Ready-Mix Concrete Supply</option>
<option>Specialty Aggregate Procurement</option>
<option>On-site Mixing Plant Logistics</option>
<option>Technical Consultation &amp; Lab Testing</option>
<option>Equipment Leasing</option>
</select>
</div>
<div className="space-y-2">
<label className="font-label-bold text-primary block">PROJECT DETAILS</label>
<textarea className="w-full border border-outline-variant p-3 bg-surface-container-lowest form-input-focus" placeholder="Describe scope, volume (m³), and site location..." rows={4}></textarea>
</div>
<div className="flex items-center gap-4 pt-4">
<button className="bg-on-tertiary-container text-white px-10 py-4 font-inter font-bold text-sm tracking-widest uppercase hover:brightness-110 transition-all flex items-center gap-2" type="submit">
                            Submit Request
                            <span className="material-symbols-outlined text-sm">send</span>
</button>
<p className="text-[11px] text-on-surface-variant max-w-xs leading-tight">By submitting this form, you agree to our privacy policy regarding industrial data handling.</p>
</div>
</form>
</div>
{/* Department Sidebar */}
<div className="lg:col-span-5 space-y-gutter">
{/* Department Cards */}
<div className="grid grid-cols-1 gap-6">
<div className="bg-surface-container-low border border-outline-variant p-6 flex items-start gap-4">
<div className="bg-primary text-white p-3">
<span className="material-symbols-outlined">engineering</span>
</div>
<div>
<h3 className="font-label-bold text-primary mb-1 uppercase tracking-wider">Technical Engineering</h3>
<p className="text-body-sm text-on-surface-variant mb-2">Mix design certification and structural testing inquiries.</p>
<a className="text-on-tertiary-container font-semibold hover:underline" href="mailto:tech@concretesolutions.com">tech@concretesolutions.com</a>
</div>
</div>
<div className="bg-surface-container-low border border-outline-variant p-6 flex items-start gap-4">
<div className="bg-primary text-white p-3">
<span className="material-symbols-outlined">local_shipping</span>
</div>
<div>
<h3 className="font-label-bold text-primary mb-1 uppercase tracking-wider">Logistics &amp; Dispatch</h3>
<p className="text-body-sm text-on-surface-variant mb-2">Delivery scheduling and real-time fleet coordination.</p>
<a className="text-on-tertiary-container font-semibold hover:underline" href="mailto:dispatch@concretesolutions.com">dispatch@concretesolutions.com</a>
</div>
</div>
<div className="bg-surface-container-low border border-outline-variant p-6 flex items-start gap-4">
<div className="bg-primary text-white p-3">
<span className="material-symbols-outlined">payments</span>
</div>
<div>
<h3 className="font-label-bold text-primary mb-1 uppercase tracking-wider">Accounts &amp; Billing</h3>
<p className="text-body-sm text-on-surface-variant mb-2">Invoice processing and enterprise credit applications.</p>
<a className="text-on-tertiary-container font-semibold hover:underline" href="mailto:finance@concretesolutions.com">finance@concretesolutions.com</a>
</div>
</div>
</div>
{/* Plant Locations Map */}
<div className="bg-white border border-outline-variant overflow-hidden">
<div className="bg-surface-container p-4 border-b border-outline-variant flex justify-between items-center">
<h3 className="font-label-bold text-primary uppercase tracking-widest">Global Mixing Plants</h3>
<span className="text-[10px] bg-primary text-white px-2 py-0.5">3 ACTIVE SITES</span>
</div>
<div className="h-[300px] bg-slate-200 relative group">
<img className="w-full h-full object-cover grayscale opacity-80" data-alt="stylized top-down industrial map showing mixing plant coordinates with technical grid overlays and location pins" data-location="Houston, TX" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC92xI_JHxQEQDoD0dtrLngaVo7b2yTuUFOjamx4xQwyo-nP52hqntXsUP6mp7hGzNHgdfPMRqmQOMrYqu1cY13vLGQYP9_sh2Jq-3zsCnQqG7YEkszOb5m61vsamSJhLnLQLxeHV3XUcsUMup84A1I-0JHfGKO7o1ylbbFjx4xbWSCdJriP4SgqKeNl76pUizAZy_p9WRZpzJoLTlHJa85eNCfXgOzi-3S4Rdde3QX-uTSz2nNLPORfyZoQI9TGS7swup3WeGFITN"/>
<div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<button className="bg-white text-primary px-4 py-2 text-sm font-bold shadow-lg">View Interactive Map</button>
</div>
{/* Location Markers */}
<div className="absolute top-1/4 left-1/3 w-3 h-3 bg-on-tertiary-container border-2 border-white rounded-full"></div>
<div className="absolute top-1/2 left-2/3 w-3 h-3 bg-on-tertiary-container border-2 border-white rounded-full"></div>
<div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-on-tertiary-container border-2 border-white rounded-full"></div>
</div>
<div className="p-6 space-y-4">
<div className="flex justify-between items-center pb-2 border-b border-slate-100">
<div>
<p className="font-bold text-primary text-sm">North Mixing Plant</p>
<p className="text-xs text-on-surface-variant">Industrial Way, Houston, TX</p>
</div>
<span className="material-symbols-outlined text-slate-400">directions</span>
</div>
<div className="flex justify-between items-center pb-2 border-b border-slate-100">
<div>
<p className="font-bold text-primary text-sm">Port Logistics Hub</p>
<p className="text-xs text-on-surface-variant">Harbor Dr, Long Beach, CA</p>
</div>
<span className="material-symbols-outlined text-slate-400">directions</span>
</div>
</div>
</div>
</div>
</div>
</main>
{/* Footer */}
<footer className="w-full py-12 px-8 grid grid-cols-1 md:grid-cols-4 gap-8 bg-blue-950 border-t-4 border-orange-600">
<div className="col-span-1 md:col-span-1">
<div className="text-2xl font-black text-white mb-4">CONCRETE SOLUTIONS</div>
<p className="text-slate-400 text-xs tracking-tight leading-relaxed">
                Industrial-grade infrastructure partners. Providing precision engineering and logistical excellence for the modern architectural landscape.
            </p>
</div>
<div>
<h4 className="font-inter text-xs uppercase tracking-widest text-orange-500 mb-6">QUICK LINKS</h4>
<ul className="space-y-4">
<li><a className="font-inter text-xs uppercase tracking-widest text-slate-400 hover:text-white transition-colors" href="#">Sitemap</a></li>
<li><a className="font-inter text-xs uppercase tracking-widest text-slate-400 hover:text-white transition-colors" href="#">Technical Specs</a></li>
<li><a className="font-inter text-xs uppercase tracking-widest text-slate-400 hover:text-white transition-colors" href="#">Compliance</a></li>
</ul>
</div>
<div>
<h4 className="font-inter text-xs uppercase tracking-widest text-orange-500 mb-6">SAFETY &amp; STANDARDS</h4>
<ul className="space-y-4">
<li><a className="font-inter text-xs uppercase tracking-widest text-slate-400 hover:text-white transition-colors" href="#">Safety Protocols</a></li>
<li><a className="font-inter text-xs uppercase tracking-widest text-slate-400 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="font-inter text-xs uppercase tracking-widest text-white underline" href="#">Contact Support</a></li>
</ul>
</div>
<div>
<h4 className="font-inter text-xs uppercase tracking-widest text-orange-500 mb-6">HEADQUARTERS</h4>
<p className="text-slate-400 text-xs tracking-widest leading-loose">
                100 CONCRETE PLAZA<br/>
                SUITE 500, INDUSTRIAL DISTRICT<br/>
                HOUSTON, TX 77001
            </p>
<div className="mt-4 flex gap-4">
<span className="material-symbols-outlined text-white cursor-pointer">share</span>
<span className="material-symbols-outlined text-white cursor-pointer">mail</span>
<span className="material-symbols-outlined text-white cursor-pointer">phone_in_talk</span>
</div>
</div>
<div className="col-span-1 md:col-span-4 border-t border-slate-800 pt-8 mt-8">
<p className="font-inter text-xs uppercase tracking-widest text-slate-500 text-center">
                © 2024 CONCRETE SOLUTIONS. ALL RIGHTS RESERVED. INDUSTRIAL EXCELLENCE.
            </p>
</div>
</footer>
    </div>
  );
}
