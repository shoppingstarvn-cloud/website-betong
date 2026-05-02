import React from 'react';

export default function DanhMCSNPhMTIUSeoConcretepro() {
  return (
    <div>
      {/* TopNavBar */}
<header className="bg-white dark:bg-slate-900 docked full-width top-0 border-b border-slate-200 dark:border-slate-800 flat no shadows sticky z-50">
<div className="flex justify-between items-center px-8 py-4 max-w-full mx-auto max-w-[1280px]">
<div className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter">
                CONCRETEPRO
            </div>
<nav className="hidden md:flex gap-8">
<a className="text-slate-600 dark:text-slate-400 font-medium hover:text-orange-600 transition-colors font-inter font-bold tracking-tight uppercase text-sm" href="#">Trang chủ</a>
<a className="text-orange-600 dark:text-orange-500 border-b-2 border-orange-600 hover:text-orange-600 transition-colors font-inter font-bold tracking-tight uppercase text-sm pb-1" href="#">Sản phẩm</a>
<a className="text-slate-600 dark:text-slate-400 font-medium hover:text-orange-600 transition-colors font-inter font-bold tracking-tight uppercase text-sm" href="#">Dịch vụ</a>
<a className="text-slate-600 dark:text-slate-400 font-medium hover:text-orange-600 transition-colors font-inter font-bold tracking-tight uppercase text-sm" href="#">Dự án</a>
<a className="text-slate-600 dark:text-slate-400 font-medium hover:text-orange-600 transition-colors font-inter font-bold tracking-tight uppercase text-sm" href="#">Tin tức</a>
<a className="text-slate-600 dark:text-slate-400 font-medium hover:text-orange-600 transition-colors font-inter font-bold tracking-tight uppercase text-sm" href="#">Liên hệ</a>
</nav>
<div className="flex items-center gap-4">
<button aria-label="Tìm kiếm sản phẩm" className="text-on-surface hover:text-on-tertiary-container transition-colors">
<span className="material-symbols-outlined" data-icon="search">search</span>
</button>
<button className="bg-primary text-on-primary font-label-bold px-6 py-3 rounded-DEFAULT hover:bg-primary-container transition-colors uppercase">
                    Yêu cầu báo giá
                </button>
</div>
</div>
</header>
{/* Main Content */}
<main className="flex-grow w-full max-w-[1280px] mx-auto px-gutter py-xl">
{/* Page Header */}
<header className="mb-lg">
<h1 className="font-headline-md text-headline-md text-primary mb-xs">Danh Mục Bê Tông Thương Phẩm &amp; Vật Liệu Xây Dựng</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Cung cấp các loại bê tông tươi chất lượng cao với mác bê tông từ M200 đến M500+, đảm bảo tiêu chuẩn cường độ và độ bền cho mọi công trình.</p>
</header>
<div className="flex flex-col md:flex-row gap-gutter">
{/* Sidebar Filters */}
<aside className="w-full md:w-64 flex-shrink-0">
<div className="bg-surface-container-lowest border border-outline-variant p-md rounded-DEFAULT sticky top-[100px]">
<div className="flex items-center justify-between border-b border-outline-variant pb-xs mb-sm">
<h2 className="font-headline-sm text-headline-sm text-primary text-lg">Bộ lọc tìm kiếm</h2>
<span className="material-symbols-outlined text-outline" data-icon="tune">tune</span>
</div>
{/* Category Filter */}
<nav aria-label="Lọc theo loại vật liệu" className="mb-md">
<h3 className="font-label-bold text-label-bold text-on-surface-variant uppercase mb-xs tracking-wider">Loại vật liệu</h3>
<div className="flex flex-col gap-xs">
<label className="flex items-center gap-xs cursor-pointer group">
<input checked="" className="form-checkbox h-4 w-4 text-on-tertiary-container border-outline-variant rounded-sm focus:ring-on-tertiary-container bg-surface-container-lowest" type="checkbox"/>
<span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">Bê tông tươi (12)</span>
</label>
<label className="flex items-center gap-xs cursor-pointer group">
<input className="form-checkbox h-4 w-4 text-on-tertiary-container border-outline-variant rounded-sm focus:ring-on-tertiary-container bg-surface-container-lowest" type="checkbox"/>
<span className="font-body-md text-body-md text-on-surface-variant group-hover:text-primary transition-colors">Bê tông đúc sẵn (8)</span>
</label>
<label className="flex items-center gap-xs cursor-pointer group">
<input className="form-checkbox h-4 w-4 text-on-tertiary-container border-outline-variant rounded-sm focus:ring-on-tertiary-container bg-surface-container-lowest" type="checkbox"/>
<span className="font-body-md text-body-md text-on-surface-variant group-hover:text-primary transition-colors">Xi măng đặc chủng (5)</span>
</label>
<label className="flex items-center gap-xs cursor-pointer group">
<input className="form-checkbox h-4 w-4 text-on-tertiary-container border-outline-variant rounded-sm focus:ring-on-tertiary-container bg-surface-container-lowest" type="checkbox"/>
<span className="font-body-md text-body-md text-on-surface-variant group-hover:text-primary transition-colors">Cốt liệu (4)</span>
</label>
</div>
</nav>
{/* Strength Filter */}
<nav aria-label="Lọc theo mác bê tông" className="mb-md">
<h3 className="font-label-bold text-label-bold text-on-surface-variant uppercase mb-xs tracking-wider">Mác Bê Tông (Cường độ)</h3>
<div className="flex flex-col gap-xs">
<label className="flex items-center gap-xs cursor-pointer group">
<input className="form-checkbox h-4 w-4 text-on-tertiary-container border-outline-variant rounded-sm focus:ring-on-tertiary-container bg-surface-container-lowest" type="checkbox"/>
<span className="font-body-md text-body-md text-on-surface-variant group-hover:text-primary transition-colors">M200 - M250</span>
</label>
<label className="flex items-center gap-xs cursor-pointer group">
<input checked="" className="form-checkbox h-4 w-4 text-on-tertiary-container border-outline-variant rounded-sm focus:ring-on-tertiary-container bg-surface-container-lowest" type="checkbox"/>
<span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">M300 - M400</span>
</label>
<label className="flex items-center gap-xs cursor-pointer group">
<input className="form-checkbox h-4 w-4 text-on-tertiary-container border-outline-variant rounded-sm focus:ring-on-tertiary-container bg-surface-container-lowest" type="checkbox"/>
<span className="font-body-md text-body-md text-on-surface-variant group-hover:text-primary transition-colors">M450+ (Cường độ cao)</span>
</label>
</div>
</nav>
<button className="w-full bg-surface-container text-primary font-label-bold py-2 px-4 border border-outline-variant rounded-DEFAULT hover:bg-surface-container-high transition-colors">
                        Xóa bộ lọc
                    </button>
</div>
</aside>
{/* Product Grid */}
<section className="flex-grow">
{/* Toolbar */}
<div className="flex justify-between items-center mb-md pb-xs border-b border-outline-variant">
<span className="font-body-md text-body-md text-on-surface-variant">Hiển thị 1-6 trong số 29 sản phẩm bê tông tươi</span>
<div className="flex items-center gap-sm">
<label className="font-body-sm text-body-sm text-on-surface-variant hidden md:block" htmlFor="sort-select">Sắp xếp theo:</label>
<select className="form-select bg-surface-container-lowest border-outline-variant text-on-surface font-body-sm rounded-DEFAULT py-1 pl-2 pr-8 focus:ring-primary focus:border-primary" id="sort-select">
<option>Phổ biến nhất</option>
<option>Tên A-Z</option>
<option>Cường độ: Thấp - Cao</option>
</select>
<div className="flex border border-outline-variant rounded-DEFAULT overflow-hidden">
<button aria-label="Dạng lưới" className="p-1 bg-surface-container-high text-primary hover:bg-surface-container-highest transition-colors">
<span className="material-symbols-outlined" data-icon="grid_view">grid_view</span>
</button>
<button aria-label="Dạng danh sách" className="p-1 bg-surface-container-lowest text-outline hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined" data-icon="view_list">view_list</span>
</button>
</div>
</div>
</div>
{/* Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
{/* Product Card 1 */}
<article className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT overflow-hidden hover:shadow-[0px_4px_12px_rgba(26,43,60,0.08)] transition-shadow duration-300 flex flex-col group">
<div className="h-48 bg-surface-container relative overflow-hidden">
<img alt="Bê tông tươi mác M300 - Bê tông thương phẩm chất lượng cao độ sụt 10±2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="close up of grey wet fresh concrete mix being poured showing texture and small aggregates" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuGCev-f0vPlc30tGRzQw1M0S1erLdRyHX5KHk50rDoh1ugKjbLE0JyNFXGF2bZUnkTMyHtm1L1lvQLRQ8aXAjEsv1tXzTCWbejU-RLpC7WOYSw3XXUd2AXxZp4ADvOQFTO0B-_PYad0DVjZgTMH_is8YyoX8S7WtLrkuEjh7CCrHHPFMXBn-_I9iBRpBXGFEKHie613gNqn6WGNmRDyqftWhRzMci7BEbWjXs6shbV8TlpzCLLcyB172Hoo8DJooIBVW_LcIfXULM"/>
<div className="absolute top-2 left-2 bg-primary text-on-primary font-label-bold text-label-bold px-2 py-1 rounded-sm uppercase">
                                Bán Chạy
                            </div>
</div>
<div className="p-sm flex flex-col flex-grow">
<div className="flex justify-between items-start mb-xs">
<h3 className="font-headline-sm text-headline-sm text-primary text-[18px] leading-tight">Bê tông tươi M300</h3>
<span className="font-label-bold text-label-bold text-on-tertiary-container bg-tertiary-fixed px-2 py-1 rounded-sm">Cấp B</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-sm line-clamp-2">Bê tông tươi mác 300 tiêu chuẩn, phù hợp đổ sàn, dầm cho công trình dân dụng. Liên hệ để nhận giá bê tông tươi M300 ưu đãi.</p>
<div className="mt-auto border-t border-surface-container pt-xs">
<div className="grid grid-cols-2 gap-x-2 gap-y-1 mb-sm">
<div className="font-body-sm text-body-sm text-outline">Cường độ nén:</div>
<div className="font-table-data text-table-data text-on-surface text-right">28.9 MPa</div>
<div className="font-body-sm text-body-sm text-outline">Thời gian đông:</div>
<div className="font-table-data text-table-data text-on-surface text-right">4-6 giờ</div>
</div>
<a className="w-full flex justify-center items-center gap-xs border border-primary text-primary font-label-bold py-2 rounded-DEFAULT hover:bg-primary hover:text-on-primary transition-colors uppercase text-center" href="#">
<span>Chi tiết sản phẩm</span>
<span className="material-symbols-outlined text-[16px]" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</div>
</article>
{/* Product Card 2 */}
<article className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT overflow-hidden hover:shadow-[0px_4px_12px_rgba(26,43,60,0.08)] transition-shadow duration-300 flex flex-col group">
<div className="h-48 bg-surface-container relative overflow-hidden">
<img alt="Bê tông tươi mác M450 cao cấp - Bê tông cường độ cao cho dự án hạ tầng" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="smooth grey concrete wall surface showing minimalist industrial architectural texture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCN0id9c3LWVaPg2-QTGMdkszbEOI1pk3cN5EofnP-Hn3hsB_qKQP8KK6j1-rHDnXrpwrk_NjNXyHkIgSXN9vEe-74xrckZjDDAZyxmWxrWlq89st1Mzs_poNMEsUUTtC4EzPMsp0l26plK58rgHF8rVK58Z4t2v2UcFeliApeQkRff_DDOl8DjYLdz8SIiny50bI-QaXixA1up2h5inRcihonUCHstQFvIQJmkk8ptIEIExXTzWU7zfO1Vun-j85c7sK_SEgm7OsDr"/>
</div>
<div className="p-sm flex flex-col flex-grow">
<div className="flex justify-between items-start mb-xs">
<h3 className="font-headline-sm text-headline-sm text-primary text-[18px] leading-tight">Bê tông M450 Cao Cấp</h3>
<span className="font-label-bold text-label-bold text-on-tertiary-container bg-tertiary-fixed px-2 py-1 rounded-sm">Cấp A+</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-sm line-clamp-2">Bê tông thương phẩm mác 450 chuyên dụng cho kết cấu chịu lực lớn, cầu cảng và cao ốc văn phòng.</p>
<div className="mt-auto border-t border-surface-container pt-xs">
<div className="grid grid-cols-2 gap-x-2 gap-y-1 mb-sm">
<div className="font-body-sm text-body-sm text-outline">Cường độ nén:</div>
<div className="font-table-data text-table-data text-on-surface text-right">45.0 MPa</div>
<div className="font-body-sm text-body-sm text-outline">Phụ gia:</div>
<div className="font-table-data text-table-data text-on-surface text-right">Sikament R4</div>
</div>
<a className="w-full flex justify-center items-center gap-xs border border-primary text-primary font-label-bold py-2 rounded-DEFAULT hover:bg-primary hover:text-on-primary transition-colors uppercase text-center" href="#">
<span>Chi tiết sản phẩm</span>
<span className="material-symbols-outlined text-[16px]" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</div>
</article>
{/* Product Card 3 */}
<article className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT overflow-hidden hover:shadow-[0px_4px_12px_rgba(26,43,60,0.08)] transition-shadow duration-300 flex flex-col group">
<div className="h-48 bg-surface-container relative overflow-hidden">
<img alt="Cốt liệu đá dăm 1x2 - Vật liệu đầu vào cho sản xuất bê tông tươi mác cao" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="macro shot of rough gravel and crushed stone aggregate used in concrete construction" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgY2ZUuk4zjj8qshz7JKrJ5xNWpuGuVzyquBj3uXYEvymDJSW7slrUQlNeGnJY14YrWhELxlctAq_au7eFH33K-IZLgo8pSt4DBUYqHHKXrYvhkiqNpbrv3_-Ke4heLBs6GSvhCDaZJ6qaqSrpCxBmgM1alTlwoNaU5vQM-gpdX__Nhd6EImtF09zcmRDpyLmD8DMC1lDHlTIwV9w_anixijpI1d0DZqP6UoMnN1kzO07jrQm0nz2EZMoDkPjHGVKvO2FYt0tvHUBG"/>
</div>
<div className="p-sm flex flex-col flex-grow">
<div className="flex justify-between items-start mb-xs">
<h3 className="font-headline-sm text-headline-sm text-primary text-[18px] leading-tight">Cốt liệu Đá 1x2 tiêu chuẩn</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-sm line-clamp-2">Đá dăm 1x2 sạch tạp chất, thành phần cốt liệu chính trong quy trình sản xuất bê tông thương phẩm.</p>
<div className="mt-auto border-t border-surface-container pt-xs">
<div className="grid grid-cols-2 gap-x-2 gap-y-1 mb-sm">
<div className="font-body-sm text-body-sm text-outline">Hạt thoi dẹt:</div>
<div className="font-table-data text-table-data text-on-surface text-right">&lt; 10%</div>
<div className="font-body-sm text-body-sm text-outline">Khối lượng thể tích:</div>
<div className="font-table-data text-table-data text-on-surface text-right">1.45 T/m3</div>
</div>
<a className="w-full flex justify-center items-center gap-xs border border-primary text-primary font-label-bold py-2 rounded-DEFAULT hover:bg-primary hover:text-on-primary transition-colors uppercase text-center" href="#">
<span>Chi tiết sản phẩm</span>
<span className="material-symbols-outlined text-[16px]" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</div>
</article>
</div>
{/* Pagination */}
<div className="mt-xl flex justify-center">
<nav aria-label="Phân trang danh sách sản phẩm" className="flex items-center gap-2">
<button aria-label="Trang trước" className="p-2 border border-outline-variant text-outline rounded-DEFAULT hover:bg-surface-container transition-colors disabled:opacity-50">
<span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
</button>
<div className="flex gap-1 h-2 w-32 items-center mx-4">
<div className="h-1 flex-1 bg-on-tertiary-container rounded-sm"></div>
<div className="h-1 flex-1 bg-surface-container-high rounded-sm"></div>
<div className="h-1 flex-1 bg-surface-container-high rounded-sm"></div>
<div className="h-1 flex-1 bg-surface-container-high rounded-sm"></div>
<div className="h-1 flex-1 bg-surface-container-high rounded-sm"></div>
</div>
<button aria-label="Trang sau" className="p-2 border border-outline-variant text-primary rounded-DEFAULT hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
</button>
</nav>
</div>
{/* SEO Content Section */}
<section className="mt-xl pt-lg border-t border-outline-variant">
<div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
<div>
<h2 className="font-headline-sm text-primary mb-sm">Bảng giá bê tông tươi và mác bê tông phổ biến</h2>
<p className="font-body-md text-on-surface-variant mb-sm">
                Việc lựa chọn đúng <strong>mác bê tông</strong> là yếu tố then chốt quyết định độ bền của công trình. Tại CONCRETEPRO, chúng tôi cung cấp đa dạng các dòng <strong>bê tông thương phẩm</strong> từ mác thấp đến mác cao, đáp ứng mọi yêu cầu kỹ thuật khắt khe nhất. 
            </p>
<p className="font-body-md text-on-surface-variant">
<strong>Giá bê tông tươi</strong> thường phụ thuộc vào cấp độ bền, độ sụt và các loại phụ gia đi kèm. Chúng tôi cam kết cung cấp giải pháp vật liệu tối ưu với chi phí tiết kiệm nhất cho nhà thầu và chủ đầu tư.
            </p>
</div>
<div>
<h2 className="font-headline-sm text-primary mb-sm">Tại sao nên chọn bê tông thương phẩm CONCRETEPRO?</h2>
<ul className="list-disc list-inside font-body-md text-on-surface-variant space-y-2">
<li>Quy trình sản xuất tự động, kiểm soát chặt chẽ cấp phối <strong>mác bê tông tươi</strong>.</li>
<li>Hệ thống xe bồn chuyên dụng, đảm bảo cung ứng đúng tiến độ cho mọi vị trí công trình.</li>
<li>Đội ngũ kỹ thuật tư vấn chuyên sâu về các loại <strong>bê tông thương phẩm</strong> đặc chủng.</li>
<li>Minh bạch về nguồn gốc cốt liệu đá, cát và xi măng đầu vào.</li>
</ul>
</div>
</div>
</section>
</section>
</div>
</main>
{/* Footer */}
<footer className="bg-slate-900 dark:bg-black docked full-width bottom-0 border-t border-slate-800 flat mt-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-12 py-16 w-full max-w-[1280px] mx-auto">
<div>
<div className="text-xl font-bold text-white uppercase mb-4">
                    CONCRETEPRO
                </div>
<p className="font-inter text-sm text-slate-400">© 2024 CONCRETEPRO SME. Industrial Construction Excellence. Chuyên gia bê tông thương phẩm hàng đầu.</p>
</div>
<div className="col-span-1 md:col-span-3">
<nav aria-label="Liên kết chân trang" className="flex flex-wrap gap-x-8 gap-y-4">
<a className="font-inter text-sm text-slate-400 hover:text-white transition-colors" href="#">Về chúng tôi</a>
<a className="font-inter text-sm text-slate-400 hover:text-white transition-colors" href="#">Sản phẩm &amp; Dịch vụ</a>
<a className="font-inter text-sm text-slate-400 hover:text-white transition-colors" href="#">Dự án tiêu biểu</a>
<a className="font-inter text-sm text-slate-400 hover:text-white transition-colors" href="#">Tuyển dụng</a>
<a className="font-inter text-sm text-slate-400 hover:text-white transition-colors" href="#">Liên hệ</a>
<a className="font-inter text-sm text-slate-400 hover:text-white transition-colors" href="#">Bản đồ</a>
</nav>
</div>
</div>
</footer>
    </div>
  );
}
