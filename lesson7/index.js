let a = 18

if(a<18){
    console.log("ban la tre con");
}else if(a<30){
    console.log("ban la ng lon");
}else if(a>30){
    console.log('ban da gia');
}


function hoatDongBuoiSang(thu){
    console.log("thu" + thu);
    console.log("thuc day");
    console.log("danh rang");
    console.log("an sang");
}

hoatDongBuoiSang(2)
hoatDongBuoiSang(3)
hoatDongBuoiSang(4)



function tinhHieu(b,a){
    console.log(`Ans ${a} + ${b} is ${a-b}`);
    if(a>b){
        console.log("correct");
    }else if(a<b){
        console.log("wrong");
    }
}


function tinhTich(b,a){
    console.log(`Ans ${a} * ${b} is ${a*b}`);
    if(a>b){
        console.log("correct");
    }else if(a<b){
        console.log("wrong");
    }
}


function tinhThuong(b,a){
    console.log(`Ans ${a} / ${b} is ${a/b}`);
    if(b == 0){
        console.log("no solution");
    }else{
        console.log(`Ans ${a} / ${b} is ${a/b}`);
    }
}