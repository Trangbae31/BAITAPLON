    function m1(){
        if(document.getElementById("ten_dang_nhap").value===""){
        document.getElementById("usertb").innerText="Vui lòng không để trống tài khoản";
       }
       if(document.getElementById("so_dien_thoai").value===""){
        document.getElementById("teltb").innerText="Vui lòng không để trống số điện thoại";
       }
       if(document.getElementById("email").value===""){
        document.getElementById("emailtb").innerText="Vui lòng không để trống email";
       }
       if(document.getElementById("mat_khau").value===""){
        document.getElementById("passtb").innerText="Vui lòng không để trống mật khẩu";
       }
       if (
    document.getElementById("ten_dang_nhap").value !== "" &&
    document.getElementById("email").value !== "" &&
    document.getElementById("mat_khau").value !== ""
) {
    alert("Đăng ký thành công!")
    sessionStorage.setItem("tk",document.getElementById("ten_dang_nhap").value)
    sessionStorage.setItem("mk",document.getElementById("mat_khau").value)
 window.location.href="log-in.html"
    }
    
    }