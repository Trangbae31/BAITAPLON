function m1() {
  const ten = document.getElementById("ten_dang_nhap").value;
  const mk = document.getElementById("mat_khau").value;

  if (ten !== sessionStorage.getItem("tk")) {
    document.getElementById("passtb").innerText = "Tài khoản hoặc mật khẩu không đúng";
    return; 
  }

  if (ten === sessionStorage.getItem("tk") && mk === sessionStorage.getItem("mk")) {
    sessionStorage.setItem("trangthai", "hien");
    sessionStorage.setItem("ten_dang_nhap", ten);
    alert("Xin chào, " + ten + "!");
    window.location.href = "trangchu.html";
  }
}
