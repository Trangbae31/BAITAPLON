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

function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Toggle ô tìm kiếm
function toggleSearch() {
  const searchBox = document.getElementById('searchBox');
  searchBox.classList.toggle('active');
}

// Tự động đóng khi rời chuột
window.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu');
  const searchBox = document.getElementById('searchBox');

  menu?.addEventListener('mouseleave', () => {
    menu.classList.remove('show');
    closeAllSubmenus?.(); // nếu hàm có tồn tại
  });

  searchBox?.addEventListener('mouseleave', () => {
    searchBox.classList.remove('active');
  });
});

// Gợi ý theo chữ nhập từ các li có sẵn
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

// Hàm chuẩn hóa (nếu chưa có)
function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

searchInput.addEventListener('input', () => {
  const input = removeAccents(searchInput.value.trim());
  const allItems = searchResults.querySelectorAll('li');
  let found = false;

  // Nếu input trống thì ẩn luôn danh sách
  if (input === "") {
    searchResults.style.display = "none";
    return;
  }

  // Có gõ thì hiện danh sách
  searchResults.style.display = "block";

  allItems.forEach(li => {
    const liText = removeAccents(li.textContent.trim());
    if (liText.includes(input)) {
      li.style.display = 'list-item';
      found = true;
    } else {
      li.style.display = 'none';
    }
  });

  // Thêm hoặc xóa thông báo "không tìm thấy"
  const notFound = document.getElementById('not-found');
  if (!found) {
    if (!notFound) {
      const nf = document.createElement('li');
      nf.id = 'not-found';
      nf.textContent = 'Không tìm thấy kết quả';
      nf.style.fontStyle = 'italic';
      nf.style.color = '#888';
      searchResults.appendChild(nf);
    }
  } else {
    if (notFound) notFound.remove();
  }
});


// Khi click vào li trong danh sách gợi ý
searchResults.addEventListener('click', e => {
  if (e.target.tagName === 'LI' && e.target.id !== 'not-found') {
    const value = e.target.getAttribute('data-value');
    const folder = e.target.getAttribute('data-folder') || 'where';
    window.location.href = `/BAITAPLON/html/${folder}/${value}.html`;
  }
});

// Khi nhấn Enter trên ô input thì chuyển hướng
searchInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    e.preventDefault();

    const input = removeAccents(searchInput.value.trim())
      .replace(/\./g, "")
      .replace(/\s+/g, "-");

    const allItems = Array.from(searchResults.querySelectorAll('li')).filter(
      li => li.id !== 'not-found'
    );

    const matched = allItems.find(li => {
      const text = removeAccents(li.textContent.trim())
        .replace(/\./g, "")
        .replace(/\s+/g, "-");
      return text === input;
    });

    if (matched) {
      const value = matched.getAttribute('data-value');
      const folder = matched.getAttribute('data-folder') || 'where';
      window.location.href = `/BAITAPLON/html/${folder}/${value}.html`;
    } else {
      alert("Không tìm thấy tỉnh thành hoặc địa điểm phù hợp!");
    }
  }
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
