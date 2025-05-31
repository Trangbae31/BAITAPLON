let menuOpen = false;

// Toggle menu chính
function toggleMenu() {
  const menu = document.getElementById('menu');
  menuOpen = !menuOpen;
  if (menuOpen) {
    menu.classList.add('show');
  } else {
    menu.classList.remove('show');
    closeAllSubmenus();
  }
}

// Đóng tất cả submenu khi đóng menu chính
function closeAllSubmenus() {
  const submenus = document.querySelectorAll('.submenu');
  submenus.forEach(sm => {
    sm.classList.remove('show');
    const arrow = sm.previousElementSibling.querySelector('.arrow');
    if (arrow) arrow.innerHTML = '&#9660;'; // ▼
  });
}

// Toggle submenu
function toggleSubMenu(id, headerElem) {
  const submenu = document.getElementById(id);
  const arrow = headerElem.querySelector('.arrow');
  if (!submenu) return;

  if (submenu.classList.contains('show')) {
    submenu.classList.remove('show');
    if (arrow) arrow.innerHTML = '&#9660;'; // ▼
  } else {
    submenu.classList.add('show');
    if (arrow) arrow.innerHTML = '&#9650;'; // ▲
  }
}

// Toggle ô tìm kiếm
function toggleSearch() {
  const searchBox = document.getElementById('searchBox');
  searchBox.classList.toggle('active');
}
// Thêm sau khi DOM đã sẵn sàng
window.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu');
  const searchBox = document.getElementById('searchBox');

  // Tự đóng menu khi di chuột ra ngoài
  menu.addEventListener('mouseleave', () => {
    menu.classList.remove('show');
    menuOpen = false;
    closeAllSubmenus();
  });

  // Tự đóng ô tìm kiếm khi di chuột ra ngoài
  searchBox.addEventListener('mouseleave', () => {
    searchBox.classList.remove('active');
  });
});
// Tìm kiếm
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const searchBox = document.getElementById('searchBox');

  // Tự động hiện tỉnh thành
  const provinces = [
    "An Giang", "Bà Rịa - Vũng Tàu", "Bạc Liêu", "Bắc Giang", "Bắc Kạn",
    "Bắc Ninh", "Bến Tre", "Bình Dương", "Bình Định", "Bình Phước", "Bình Thuận",
    "Cà Mau", "Cao Bằng", "Cần Thơ", "Đà Nẵng", "Đắk Lắk", "Đắk Nông", "Điện Biên",
    "Đồng Nai", "Đồng Tháp", "Gia Lai", "Hà Giang", "Hà Nam", "Hà Nội", "Hà Tĩnh",
    "Hải Dương", "Hải Phòng", "Hậu Giang", "Hòa Bình", "Hưng Yên", "Khánh Hòa",
    "Kiên Giang", "Kon Tum", "Lai Châu", "Lạng Sơn", "Lào Cai", "Lâm Đồng",
    "Long An", "Nam Định", "Nghệ An", "Ninh Bình", "Ninh Thuận", "Phú Thọ",
    "Phú Yên", "Quảng Bình", "Quảng Nam", "Quảng Ngãi", "Quảng Ninh",
    "Quảng Trị", "Sóc Trăng", "Sơn La", "Tây Ninh", "Thái Bình", "Thái Nguyên",
    "Thanh Hóa", "Thừa Thiên Huế", "Tiền Giang", "TP. Hồ Chí Minh", "Trà Vinh",
    "Tuyên Quang", "Vĩnh Long", "Vĩnh Phúc", "Yên Bái"
  ];

  // Gợi ý theo chữ nhập
  searchInput.addEventListener('input', () => {
    const input = searchInput.value.trim().toLowerCase();
    searchResults.innerHTML = '';
    if (!input) return;

    const filtered = provinces.filter(p =>
      p.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .startsWith(input.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
    );

    filtered.forEach(p => {
      const li = document.createElement('li');
      li.textContent = p;
      li.onclick = () => {
        searchInput.value = p;
        searchResults.innerHTML = '';
      };
      searchResults.appendChild(li);
    });
  });
// SLIDER LOGIC
let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');

    function changeSlide(direction) {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + direction + slides.length) % slides.length;
      slides[currentSlide].classList.add('active');
    }

// Tự động chuyển slide mỗi 5 giây
setInterval(() => {
  changeSlide(1);
}, 5000);

// Khởi tạo slide đầu tiên
showSlide(slideIndex);

// DOM: chọn nút có id là "backBtn"
    const nutQuayLai = document.getElementById("backBtn");

// DOM Event: gán sự kiện click cho nút
    nutQuayLai.addEventListener("click", function () {
      history.back();  // Quay lại trang trước đó trong lịch sử
    });
