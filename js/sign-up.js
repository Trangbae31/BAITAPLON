function m1() {
  let tenDangNhap = document.getElementById("ten_dang_nhap").value.trim();
  let soDienThoai = document.getElementById("so_dien_thoai").value.trim();
  let email = document.getElementById("email").value.trim();
  let matKhau = document.getElementById("mat_khau").value.trim();

  let hasError = false;

  // Xóa hết lỗi cũ
  document.getElementById("usertb").innerText = "";
  document.getElementById("teltb").innerText = "";
  document.getElementById("emailtb").innerText = "";
  document.getElementById("passtb").innerText = "";

  // Kiểm tra tên đăng nhập
  if (tenDangNhap === "") {
    document.getElementById("usertb").innerText = "Vui lòng không để trống tài khoản";
    hasError = true;
  }

  // Kiểm tra số điện thoại
  if (soDienThoai === "") {
    document.getElementById("teltb").innerText = "Vui lòng không để trống số điện thoại";
    hasError = true;
  } else if (!/^\d+$/.test(soDienThoai)) {
    document.getElementById("teltb").innerText = "Số điện thoại chỉ được chứa chữ số";
    hasError = true;
  }

  // Kiểm tra email
  if (email === "") {
    document.getElementById("emailtb").innerText = "Vui lòng không để trống email";
    hasError = true;
  } else if (!email.includes("@")) {
    document.getElementById("emailtb").innerText = "Email phải chứa ký tự '@'";
    hasError = true;
  }

  // Kiểm tra mật khẩu
  if (matKhau === "") {
    document.getElementById("passtb").innerText = "Vui lòng không để trống mật khẩu";
    hasError = true;
  }

  // Nếu không lỗi thì đăng ký thành công
  if (!hasError) {
    alert("Đăng ký thành công! Vui lòng đăng nhập lại");
    sessionStorage.setItem("tk", tenDangNhap);
    sessionStorage.setItem("mk", matKhau);
    window.location.href = "log-in.html";
  }
}