import React from 'react';

export default function MUEmailBOCONhKCCNhBOLIConcretepro6() {
  return (
    <div>
      {/* Top Navigation Container (Shared Component Logic) */}
<header className="bg-white dark:bg-slate-950 border-b border-[#1A2B3C]/10 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-xl font-black text-[#1A2B3C] dark:text-white tracking-tighter uppercase">STRUCTURAL INTEGRITY</span>
</div>
<nav className="hidden md:flex gap-8">
<a className="font-['Inter'] font-semibold tracking-tight uppercase text-[#1A2B3C] dark:text-white border-b-2 border-[#FF6B00] pb-1" href="#">Dashboard</a>
<a className="font-['Inter'] font-semibold tracking-tight uppercase text-slate-500 hover:text-[#FF6B00] transition-colors duration-200" href="#">Reports</a>
<a className="font-['Inter'] font-semibold tracking-tight uppercase text-slate-500 hover:text-[#FF6B00] transition-colors duration-200" href="#">Inventory</a>
<a className="font-['Inter'] font-semibold tracking-tight uppercase text-slate-500 hover:text-[#FF6B00] transition-colors duration-200" href="#">Logistics</a>
</nav>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-[#1A2B3C] dark:text-slate-100 cursor-pointer">notifications</span>
<span className="material-symbols-outlined text-[#1A2B3C] dark:text-slate-100 cursor-pointer">settings</span>
</div>
</div>
</header>
<main className="max-w-[800px] mx-auto my-xl bg-white shadow-sm overflow-hidden border border-outline-variant/30"><div className="w-full py-2 flex justify-center border-b border-outline-variant/10 bg-surface-container-lowest">
<a className="font-body-sm text-[12px] text-secondary hover:text-primary transition-colors underline decoration-outline-variant/30 underline-offset-2" href="#">
        Xem trên trình duyệt
    </a>
</div>
{/* Email Header Section */}
<div className="bg-primary-container p-lg flex flex-col md:flex-row md:items-center justify-between gap-md border-b-4 border-on-tertiary-container">
<div className="flex flex-col gap-xs">
<h2 className="font-display-lg text-headline-sm text-white uppercase tracking-tight">CONCRETEPRO</h2>
<p className="font-body-md text-white/80 opacity-90">Báo cáo Hoạt động Hệ thống - Tháng 10/2023</p>
</div>
<div className="bg-white/10 p-sm rounded-lg backdrop-blur-sm">
<span className="material-symbols-outlined text-white text-4xl" data-icon="analytics">analytics</span>
</div>
</div>
{/* System Error Notification (New Section) */}
<div className="m-lg bg-red-50 border-l-4 border-red-600 p-md flex flex-col gap-sm">
<div className="flex items-center gap-xs text-red-800">
<span className="material-symbols-outlined text-red-600 font-bold" data-icon="warning">warning</span>
<h4 className="font-label-bold uppercase tracking-wider">Cảnh báo Lỗi Hệ thống</h4>
</div>
<p className="font-body-md text-red-900 font-medium">Phát hiện <span className="font-bold underline">08 lỗi nghiêm trọng</span> trong 24 giờ qua.</p>
<div className="bg-white/60 rounded p-sm border border-red-100">
<ul className="flex flex-col gap-xs">
<li className="flex justify-between items-start gap-md">
<span className="font-body-sm text-red-700 leading-tight">Database connection timeout on API gateway</span>
<span className="font-label-bold text-red-500 whitespace-nowrap">10:42 AM</span>
</li>
<li className="flex justify-between items-start gap-md border-t border-red-100 pt-xs">
<span className="font-body-sm text-red-700 leading-tight">Failed to generate monthly inventory report (ID: 992)</span>
<span className="font-label-bold text-red-500 whitespace-nowrap">09:15 AM</span>
</li>
<li className="flex justify-between items-start gap-md border-t border-red-100 pt-xs">
<span className="font-body-sm text-red-700 leading-tight">Unauthorized access attempt blocked from IP: 192.168.1.44</span>
<span className="font-label-bold text-red-500 whitespace-nowrap">08:02 AM</span>
</li>
</ul>
</div>
<div className="mt-xs flex">
<button className="flex items-center gap-xs bg-slate-600 hover:bg-slate-700 text-white px-md py-2 font-label-bold uppercase tracking-wider transition-colors text-[13px]">
<span className="material-symbols-outlined text-[18px]" data-icon="download">download</span>
        Tải xuống Nhật ký Hệ thống
    </button>
</div></div>
{/* Salutation */}
<div className="p-lg border-b border-outline-variant/20">
<h1 className="font-headline-md text-primary mb-xs">Chào Admin,</h1>
<p className="font-body-lg text-on-surface-variant">Đây là bản tóm tắt hoạt động của hệ thống Website Vật liệu Xây dựng.</p>
</div>
{/* KPI Grid Section (Bento Style) */}
<div className="p-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md bg-surface-container-low">
<div className="bg-white p-md border border-outline-variant/30 hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-sm">
<span className="material-symbols-outlined text-on-tertiary-container" data-icon="monitoring">monitoring</span>
<span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+12.5%</span>
</div>
<p className="font-label-bold text-secondary uppercase mb-xs">Tổng truy cập</p>
<h3 className="font-headline-sm text-primary">45,280</h3>
</div>
<div className="bg-white p-md border border-outline-variant/30 hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-sm">
<span className="material-symbols-outlined text-on-tertiary-container" data-icon="request_quote">request_quote</span>
<span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+8.2%</span>
</div>
<p className="font-label-bold text-secondary uppercase mb-xs">Báo giá mới</p>
<h3 className="font-headline-sm text-primary">1,240</h3>
</div>
<div className="bg-white p-md border border-outline-variant/30 hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-sm">
<span className="material-symbols-outlined text-on-tertiary-container" data-icon="ads_click">ads_click</span>
<span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-1 rounded-full">-1.5%</span>
</div>
<p className="font-label-bold text-secondary uppercase mb-xs">Tỷ lệ chuyển đổi</p>
<h3 className="font-headline-sm text-primary">2.8%</h3>
</div>
<div className="bg-white p-md border border-outline-variant/30 hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-sm">
<span className="material-symbols-outlined text-on-tertiary-container" data-icon="architecture">architecture</span>
<span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+4</span>
</div>
<p className="font-label-bold text-secondary uppercase mb-xs">Dự án mới</p>
<h3 className="font-headline-sm text-primary">12</h3>
</div>
</div>
{/* Weekly Traffic Chart Section */}
<div className="p-lg">
<h4 className="font-headline-sm text-primary mb-md flex items-center gap-xs">
<span className="material-symbols-outlined" data-icon="bar_chart">bar_chart</span>
                Lưu lượng truy cập theo tuần
            </h4>
<div className="bg-surface-container rounded-lg p-lg h-[240px] flex items-end justify-between gap-sm border border-outline-variant/20">
{/* Simple Bar Chart Construction */}
<div className="flex flex-col items-center flex-1 gap-sm">
<div className="w-full bg-on-tertiary-container/20 rounded-t h-[40%] relative">
<div className="absolute bottom-0 w-full bg-on-tertiary-container rounded-t h-[100%] transition-all"></div>
</div>
<span className="font-label-bold text-secondary">T1</span>
</div>
<div className="flex flex-col items-center flex-1 gap-sm">
<div className="w-full bg-on-tertiary-container/20 rounded-t h-[65%] relative">
<div className="absolute bottom-0 w-full bg-on-tertiary-container rounded-t h-[100%] transition-all"></div>
</div>
<span className="font-label-bold text-secondary">T2</span>
</div>
<div className="flex flex-col items-center flex-1 gap-sm">
<div className="w-full bg-on-tertiary-container/20 rounded-t h-[90%] relative">
<div className="absolute bottom-0 w-full bg-on-tertiary-container rounded-t h-[100%] transition-all"></div>
</div>
<span className="font-label-bold text-secondary">T3</span>
</div>
<div className="flex flex-col items-center flex-1 gap-sm">
<div className="w-full bg-on-tertiary-container/20 rounded-t h-[75%] relative">
<div className="absolute bottom-0 w-full bg-on-tertiary-container rounded-t h-[100%] transition-all"></div>
</div>
<span className="font-label-bold text-secondary">T4</span>
</div>
</div>
</div>
{/* Top Products/Projects Section */}
<div className="p-lg bg-surface-container-low">
<h4 className="font-headline-sm text-primary mb-md flex items-center gap-xs">
<span className="material-symbols-outlined" data-icon="star">star</span>
                Sản phẩm &amp; Dự án nổi bật
            </h4>
<div className="flex flex-col gap-sm">
{/* Item 1 */}
<div className="bg-white border border-outline-variant/30 p-sm flex items-center gap-md">
<div className="w-16 h-16 bg-surface-container-highest shrink-0 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="high-strength architectural concrete block detail with smooth finish and industrial grey tone" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmYcTE4iOGTRKKxKO6uW4h1JximpcXlp3v9rLWzFakDgxtoiUMbJLAzlykllpAeiepC9yIJWyOvXN-HfkFYmuRrmDeMrnumlDfXtX4tWPC24U66W2BTF8AMOWEgg0sedxxd9YtCD9wTG16UrK63H1jaJvtrGYOA33ydjULLqapfwSBIfmcuWA27p1Qir85YktlTY_EEnBMeOZhnagw5pQYkjww6tCu4pBwzTqi99XS5vTPERJUEwNkjbf7QdIVkYMC2fF2inlBxhGj"/>
</div>
<div className="flex-1">
<h5 className="font-label-bold text-primary">Bê tông Tươi Cường độ cao M350</h5>
<p className="font-body-sm text-secondary">420 lượt xem • 28 yêu cầu báo giá</p>
</div>
<span className="material-symbols-outlined text-on-tertiary-container" data-icon="trending_up">trending_up</span>
</div>
{/* Item 2 */}
<div className="bg-white border border-outline-variant/30 p-sm flex items-center gap-md">
<div className="w-16 h-16 bg-surface-container-highest shrink-0 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="modern industrial construction site with steel reinforcements and concrete foundation in bright daylight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSsuxUdrAWytD7973H7UpZC47z85IMkIHKM0nXbgXFK1pRXHWlARaZge8zsJRlH0okOs3LqVoBavTGCqYK78WS3c4UckPXOL3HgCE9h8YavAlLqM8_XTMp0ixIq-q6RL0Q5DVa79oNmndvF1Rkx4C0Urj1jESDcXg7WfXsL_xcdl0JNIjUMkHcMHxD-jpnoqcPlFhaum3uqCVZfNKrnclnPVVELvfpSruNASs9j_6ARRAkUm1TsHNEViNOjoI3_77fAHdlQ8LZAa3D"/>
</div>
<div className="flex-1">
<h5 className="font-label-bold text-primary">Dự án Vinhomes Grand Park - Phase 2</h5>
<p className="font-body-sm text-secondary">315 lượt xem • Cập nhật tiến độ mới</p>
</div>
<span className="material-symbols-outlined text-on-tertiary-container" data-icon="trending_up">trending_up</span>
</div>
{/* Item 3 */}
<div className="bg-white border border-outline-variant/30 p-sm flex items-center gap-md">
<div className="w-16 h-16 bg-surface-container-highest shrink-0 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="professional engineer checking concrete quality with technical equipment on a construction site" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpVCXUidnlYiPe37t4iBE28NE6M0k1klaxxGck0xN1FCb_qQF0ULXL0MxYlPRtV2eI0Z45A6jTApwQlCSzsSuyBO1UysBEFPJX9TU1N6FrS9y6YqYfDulC-UbqI-kvk_KfBCd1R6rx_LYkKKmu0VKKRfWpAT_JBATkN7SxlqJxFVedh_n2_ttm-qy8lppboqDMiQ5bgj5fqHUoV1md2kOctZI8JXBp0F-l8-YOyNL-W7n-CaipRAPf8-1zfudJ5_Xpw2QNF83Y8lxB"/>
</div>
<div className="flex-1">
<h5 className="font-label-bold text-primary">Phụ gia chống thấm chuyên dụng Sika</h5>
<p className="font-body-sm text-secondary">290 lượt xem • 15 đơn hàng hoàn tất</p>
</div>
<span className="material-symbols-outlined text-on-tertiary-container" data-icon="trending_up">trending_up</span>
</div>
</div>
</div>
{/* CTA Section */}
<div className="p-xl text-center">
<div className="flex flex-col md:flex-row items-center justify-center gap-md">
<a className="inline-block bg-on-tertiary-container text-white px-lg py-sm font-label-bold uppercase tracking-widest hover:bg-primary transition-colors" href="#">
        Xem báo cáo chi tiết trên CMS
    </a>
<div className="relative group">
<button className="flex items-center gap-xs border-2 border-outline-variant/50 text-secondary px-lg py-sm font-label-bold uppercase tracking-widest hover:bg-surface-container hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[20px]" data-icon="share">share</span>
        Chia sẻ
    </button>
<div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-48 bg-white border border-outline-variant/30 shadow-xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-10">
<div className="flex flex-col py-1">
<button className="flex items-center gap-sm px-md py-2 hover:bg-surface-container-low text-secondary hover:text-primary transition-colors" onclick="showCopyToast()">
<span className="material-symbols-outlined text-[18px]">link</span>
<span className="text-[12px] font-label-bold uppercase">Sao chép liên kết</span>
</button>
<div className="h-[1px] bg-outline-variant/20 mx-md my-1"></div>
<div className="flex justify-around p-2 text-secondary">
<a className="hover:text-primary transition-colors" href="#"><svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg></a>
<a className="hover:text-primary transition-colors" href="#"><svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg></a>
</div>
</div>
</div>
</div>
</div>
<p className="mt-md font-body-sm text-secondary">Báo cáo này được tạo tự động vào ngày 01/11/2023.</p>
</div>
{/* Shared Footer Component */}
<footer className="bg-[#1A2B3C] dark:bg-black w-full py-10 px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left border-t-4 border-[#FF6B00]">
<div className="flex flex-col gap-2">
<span className="text-lg font-bold text-white uppercase">CONCRETEPRO</span>
<p className="font-['Inter'] text-xs font-normal tracking-wide text-white">© 2024 Structural Integrity Materials. All rights reserved. Industrial Grade Excellence.</p>
</div>
<div className="flex flex-wrap justify-center gap-6">
<a className="font-['Inter'] text-xs font-normal tracking-wide text-slate-300 hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="font-['Inter'] text-xs font-normal tracking-wide text-slate-300 hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="font-['Inter'] text-xs font-normal tracking-wide text-slate-300 hover:text-white transition-colors" href="#">Safety Standards</a>
<a className="font-['Inter'] text-xs font-normal tracking-wide text-slate-300 hover:text-white transition-colors" href="#">Contact Support</a>
</div>
<div className="flex justify-center md:justify-end gap-4 mb-2">
<a aria-label="Facebook" className="text-slate-300 hover:text-white transition-colors" href="#">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24">
<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
</svg>
</a>
<a aria-label="LinkedIn" className="text-slate-300 hover:text-white transition-colors" href="#">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24">
<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
</svg>
</a>
<a aria-label="YouTube" className="text-slate-300 hover:text-white transition-colors" href="#">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24">
<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
</svg>
</a>
</div><div className="mt-4 md:mt-0 flex flex-col"><a className="font-['Inter'] text-xs font-normal tracking-wide text-slate-500 hover:text-[#FF6B00] transition-colors underline" href="#">Hủy đăng ký nhận báo cáo</a></div>
</footer>
</main>
{/* Mobile Bottom NavBar (Shared Component Logic) */}
<div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-outline-variant/20 flex justify-around p-sm z-50">
<div className="flex flex-col items-center text-[#1A2B3C]">
<span className="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">dashboard</span>
<span className="text-[10px] font-bold uppercase">Home</span>
</div>
<div className="flex flex-col items-center text-slate-400">
<span className="material-symbols-outlined">analytics</span>
<span className="text-[10px] font-bold uppercase">Reports</span>
</div>
<div className="flex flex-col items-center text-slate-400">
<span className="material-symbols-outlined">inventory_2</span>
<span className="text-[10px] font-bold uppercase">Stocks</span>
</div>
<div className="flex flex-col items-center text-slate-400">
<span className="material-symbols-outlined">person</span>
<span className="text-[10px] font-bold uppercase">Admin</span>
</div>
</div>
<div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[100] bg-primary text-white px-6 py-3 shadow-2xl border border-white/10 opacity-0 pointer-events-none transition-all duration-300 transform translate-y-2 flex items-center gap-3" id="copy-toast">
<span className="material-symbols-outlined text-green-400">check_circle</span>
<span className="font-label-bold uppercase tracking-wider text-sm">Đã sao chép!</span>
</div>
    </div>
  );
}
