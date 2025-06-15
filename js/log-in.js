function m1() {
  const ten = document.getElementById("ten_dang_nhap").value.trim();
  const mk = document.getElementById("mat_khau").value.trim();

  const storedTk = sessionStorage.getItem("tk");
  const storedMk = sessionStorage.getItem("mk");

  // Xóa thông báo lỗi trước đó
  document.getElementById("passtb").innerText = "";

  if (ten !== storedTk || mk !== storedMk) {
    document.getElementById("passtb").innerText = "Tài khoản hoặc mật khẩu không đúng";
    return; 
  }

  // Đăng nhập thành công
  sessionStorage.setItem("trangthai", "hien");
  sessionStorage.setItem("ten_dang_nhap", ten);
  alert("Xin chào, " + ten + "!");
  window.location.href = "trangchu.html";
}

