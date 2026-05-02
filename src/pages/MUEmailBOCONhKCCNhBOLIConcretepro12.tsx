import React from 'react';

export default function MUEmailBOCONhKCCNhBOLIConcretepro12() {
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
<main className="max-w-[800px] mx-auto my-xl bg-white shadow-sm overflow-hidden border border-outline-variant/30">
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
<span className="font-body-sm text-red-700 leading-tight"><a className="hover:underline hover:text-primary transition-colors" href="/cms/system-health/api-gateway">Database connection timeout on API gateway</a></span>
<span className="font-label-bold text-red-500 whitespace-nowrap">10:42 AM</span>
</li>
<li className="flex justify-between items-start gap-md border-t border-red-100 pt-xs">
<span className="font-body-sm text-red-700 leading-tight"><a className="hover:underline hover:text-primary transition-colors" href="/cms/reports/management">Failed to generate monthly inventory report (ID: 992)</a></span>
<span className="font-label-bold text-red-500 whitespace-nowrap">09:15 AM</span>
</li>
<li className="flex justify-between items-start gap-md border-t border-red-100 pt-xs">
<span className="font-body-sm text-red-700 leading-tight"><a className="hover:underline hover:text-primary transition-colors" href="/cms/security/access-logs">Unauthorized access attempt blocked from IP: 192.168.1.44</a></span>
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
<a className="inline-block bg-on-tertiary-container text-white px-lg py-sm font-label-bold uppercase tracking-widest hover:bg-primary transition-colors" href="#">
                Xem báo cáo chi tiết trên CMS
            </a>
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
<div className="mt-4 md:mt-0">
<a className="font-['Inter'] text-xs font-normal tracking-wide text-slate-500 hover:text-[#FF6B00] transition-colors underline" href="#">Hủy đăng ký nhận báo cáo</a>
</div>
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
    </div>
  );
}
