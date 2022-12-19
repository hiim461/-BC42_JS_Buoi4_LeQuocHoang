//Bài 1:
document.getElementById('btn-B1').onclick = function () {
    // input: number1, number2, number3 : number 
    let number1 = +document.getElementById('number1-B1').value;
    let number2 = +document.getElementById('number2-B1').value;
    let number3 = +document.getElementById('number3-B1').value;

    //output: string
    let result = '';
    let minimumB1 = 0;

    //progress
    if (number1 < number2) {
        minimumB1 = number1;
        if (minimumB1 < number3) {
            result = number2 < number3 ? minimumB1 + ' ; ' + number2 + ' ; ' + number3 : minimumB1 + ' ; ' + number3 + ' ; ' + number2;
        } else { //num3>num1
            minimumB1 = number3
            result = minimumB1 + ' ; ' + number1 + ' ; ' + number2;
        }
    } else {//num1>num2
        minimumB1 = number2;
        if (minimumB1 < number3) {
            result = number1 < number3 ? minimumB1 + ' ; ' + number1 + ' ; ' + number3 : minimumB1 + ' ; ' + number3 + ' ; ' + number1;

        } else {
            minimumB1 = number3
            result = minimumB1 + ' ; ' + number2 + ' ; ' + number1;
        }
    }
    document.getElementById('result-B1').innerHTML = result;

}

// Bài 2 :
document.getElementById('btn-B2').onclick = function () {
    //input: string
    let xinChao = document.getElementById('info-B2').value;

    //output: result: string;
    let result = 'Xin chào ';

    //progress:
    switch (xinChao) {
        case 'B': {
            result += 'Bố!!!';
        }; break;
        case 'M': {
            result += 'Mẹ!!!';
        }; break;
        case 'A': {
            result += 'Anh Trai!!!';
        }; break;
        case 'E': {
            result += 'Em Gái!!!';
        }; break;
        default: {
            result += 'mọi người!!!';
        }
    }
    document.getElementById('result-B2').innerHTML = result;
}

//Bài 3:
document.getElementById('btn-B3').onclick = function () {
    //input: number1, number2, number3 : number
    let number1 = +document.getElementById('number1-B3').value;
    let number2 = +document.getElementById('number2-B3').value;
    let number3 = +document.getElementById('number3-B3').value;

    //output: result: string
    let result = '';

    //    progress :
    let countChan = 0;
    if (number1 % 2 === 0) { //num1:chẵn
        countChan++;
        if (number2 % 2 === 0) {
            //num2:chẵn
            countChan++
            countChan += number3 % 2 === 0 ? 1 : 0;
        } else {//num2:lẻ
            countChan += number3 % 2 === 0 ? 1 : 0;
        }
    } else {
        if (number2 % 2 === 0) {
            //num2:chẵn
            countChan++
            countChan += number3 % 2 === 0 ? 1 : 0;
        } else {//num2:lẻ
            countChan += number3 % 2 === 0 ? 1 : 0;
        }
    }
    result = 'Có: ' + (3 - countChan) + ' số lẻ; ' + countChan + ' số chẵn.';
    document.getElementById('result-B3').innerHTML = result;

}

// Bài 4: 
document.getElementById('btn-B4').onclick = function (){
    // input: canh1. canh2, canh 3: number
    let canh1 = +document.getElementById('canh1-B4').value;
    let canh2 = +document.getElementById('canh2-B4').value;
    let canh3 = +document.getElementById('canh3-B4').value;

    // output : result: string
    let result = '';
    result = 'Đây là tam giác ' ;
     
    //progress:
    let vuong = '';
    let can = '';
    let deu = '';
    if (canh1>0 && canh2>0 && canh3>0 && (canh1+canh2)>canh3 && (canh2+canh3)>canh1 && (canh1+canh3)>canh2){
        if (canh1===canh2 && canh2===canh3){ //11
            deu = 'đều'
            result += deu;
        } else { // 00 01 10
            if (canh1 === canh2){ //10
                can = 'cân';
                if(canh3 ** 2 === canh1 ** 2 + canh2 ** 2){
                    vuong = 'vuông';
                    result += vuong + can;
                } else{
                    result += can;
                }
            } else { // 00 01
                if (canh2 === canh3){ //01
                    can = 'cân';
                    if (canh1**2 === canh2**2 + canh3**2){
                        vuong = 'vuông';
                        result += vuong + can;
                    } else {
                        result = can;
                    }
                } else {//00
                    if (canh1===canh3){ 
                        can = 'cân';
                        vuong = canh2**2 === canh1**2 + canh3**2 ? 'vuông' : '';
                        result += vuong + can;
                    } else{
                        if(canh1**2===(canh2**2 + canh3**2) || canh2**2===(canh1**2 + canh3**2) || canh3**2===(canh1**2 + canh2**2)){
                            vuong = 'vuông';
                            result += vuong;
                        } else{
                            result += 'bình thường';
                        }
                    }
                }
            }
        }
    } else{
        result = 'Tam giác này không tồn tại!!!';
    }
   document.getElementById('result-B4').innerHTML = result + '!!!'; 

}