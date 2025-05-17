

// bai 1
function tinhTong() {
    let luong = document.getElementById('luongNgay').value;
    let ngay = document.getElementById('ngay').value;
    
    let tong = luong * ngay ;
    document.getElementById('ketqua').innerText = "Tổng lương của bạn là : " + tong  + " VND";
};
// bai 2
function tinhTrungBinh(){
    let mon1 = +document.getElementById('monA').value;
    let mon2 = +document.getElementById('monB').value;
    let mon3 = +document.getElementById('monC').value;
    let mon4 = +document.getElementById('monD').value;
    let mon5 = +document.getElementById('monE').value;

    let tongTrungBinh = (mon1+mon2+mon3+mon4+mon5)/5;

    document.getElementById('ketqua2').innerText = "Trung bình môn của bạn là : " + tongTrungBinh + "điểm";
}
// bai 3
function quyDoi(){
    let usd = +25.976;
    let nhapTien = +document.getElementById('usd').value;

    let quyDoiTien = nhapTien*usd;

    document.getElementById('ketqua3').innerText = nhapTien + " USD = " + quyDoiTien + " VND"; 
}
// bai 4
function tinh(){
    let chieuDai = +document.getElementById('chieuDai').value;
    let chieuRong = +document.getElementById('chieuRong').value;

    let chuVi = (chieuDai+chieuRong)*2;
    let dienTich = chieuDai*chieuRong;

    document.getElementById('ketqua4').innerText = "Diện tích hình chữ nhật là : " + dienTich +" cm² "+" ;"+" Chu vi : " + chuVi +" cm";

}
//cau 5
function kiSo(){
    let kiSo = +document.getElementById('kiSo').value;

    let hangChuc = Math.floor(kiSo/10);
    let hangDonVi = kiSo%10;

    let tong = hangChuc+hangDonVi;

    document.getElementById('ketqua5').innerText = "Tổng của số "+kiSo+" là : "+hangChuc +" + "+ hangDonVi +" = "+tong;
}

