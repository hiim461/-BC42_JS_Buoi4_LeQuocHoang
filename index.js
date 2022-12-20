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
document.getElementById('btn-B4').onclick = function () {
    // input: canh1. canh2, canh 3: number
    let canh1 = +document.getElementById('canh1-B4').value;
    let canh2 = +document.getElementById('canh2-B4').value;
    let canh3 = +document.getElementById('canh3-B4').value;

    // output : result: string
    let result = '';
    result = 'Đây là tam giác ';

    //progress:
    let vuong = '';
    let can = '';
    let deu = '';
    if (canh1 > 0 && canh2 > 0 && canh3 > 0 && (canh1 + canh2) > canh3 && (canh2 + canh3) > canh1 && (canh1 + canh3) > canh2) {
        if (canh1 === canh2 && canh2 === canh3) { //11
            deu = 'đều'
            result += deu;
        } else { // 00 01 10
            if (canh1 === canh2) { //10
                can = 'cân';
                if (canh3 ** 2 === canh1 ** 2 + canh2 ** 2) {
                    vuong = 'vuông';
                    result += vuong + can;
                } else {
                    result += can;
                }
            } else { // 00 01
                if (canh2 === canh3) { //01
                    can = 'cân';
                    if (canh1 ** 2 === canh2 ** 2 + canh3 ** 2) {
                        vuong = 'vuông';
                        result += vuong + can;
                    } else {
                        result = can;
                    }
                } else {//00
                    if (canh1 === canh3) {
                        can = 'cân';
                        vuong = canh2 ** 2 === canh1 ** 2 + canh3 ** 2 ? 'vuông' : '';
                        result += vuong + can;
                    } else {
                        if (canh1 ** 2 === (canh2 ** 2 + canh3 ** 2) || canh2 ** 2 === (canh1 ** 2 + canh3 ** 2) || canh3 ** 2 === (canh1 ** 2 + canh2 ** 2)) {
                            vuong = 'vuông';
                            result += vuong;
                        } else {
                            result += 'bình thường';
                        }
                    }
                }
            }
        }
    } else {
        result = 'Tam giác này không tồn tại!!!';
    }
    document.getElementById('result-B4').innerHTML = result + '!!!';

}

// Bài 5 :
document.getElementById('btnHomQua-B5').onclick = function () {
    //input: date, month, year: number
    let date = +document.getElementById('date-B5').value;
    let month = +document.getElementById('month-B5').value;
    let year = +document.getElementById('year-B5').value;

    // output : result: string
    let result = '';
    result = 'Dữ liệu không hợp lệ!!!';

    // progress :
    let sai = 'Dữ liệu không hợp lệ!!!';
    if (year > 1919 && date > 0 && month > 0 && date < 32 && month < 13 && (year % 1) === 0 && (month % 1) === 0 && (date % 1) === 0) {

        if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
            //nhuận
            if (month === 2) {
                if (date > 29) {
                    result = sai;
                } else {
                    if (date === 1) {
                        date = 31;
                        month--;
                    } else {
                        date--;
                    }
                    result = date + '/' + month + '/' + year;
                }
            } else {
                if (month === 4 || month === 6 || month === 9 || month === 11) { //tháng 30 ngày
                    if (date > 30) {
                        result = sai;

                    } else {
                        if (date === 1) {
                            date = 31;
                            month--;
                        } else {
                            date--;
                        }
                        result = date + '/' + month + '/' + year;
                    }
                } else { //tháng 31 ngày
                    if (date > 31) {
                        result = sai;
                    } else {
                        if (month === 3) {
                            if (date === 1) {
                                date = 29;
                                month--;
                            } else {
                                date--;
                            }
                            result = date + '/' + month + '/' + year;
                        } else {
                            if (month === 1) {
                                if (date === 1) {//tháng1: trước:thang 12 có 31 ngay
                                    date = 31;
                                    month = 12;
                                    year--;
                                } else {
                                    date--;
                                }
                                result = date + '/' + month + '/' + year;
                            } else {
                                if (month === 8) { //tháng truoc: thang 7 có 31 ngày
                                    if (date === 1) {
                                        date = 31;
                                        month--;
                                    } else {
                                        date--;
                                    }
                                    result = date + '/' + month + '/' + year;
                                } else { //thang truoc co 30 ngay
                                    if (date === 1) {
                                        date = 30;
                                        month--;
                                    } else {
                                        date--;
                                    }
                                    result = date + '/' + month + '/' + year;
                                }
                            }
                        }
                    }

                }
            }

        } else {
            //k nhuận
            if (month === 2) {
                if (date > 28) {
                    result = sai;
                } else {
                    if (date === 1) {
                        date = 31;
                        month--;
                    } else {
                        date--;
                    }
                    result = date + '/' + month + '/' + year;
                }
            } else {
                if (month === 4 || month === 6 || month === 9 || month === 11) { //tháng 30 ngày
                    if (date > 30) {
                        result = sai;

                    } else {
                        if (date === 1) {
                            date = 31;
                            month--;
                        } else {
                            date--;
                        }
                        result = date + '/' + month + '/' + year;
                    }
                } else { //tháng 31 ngày
                    if (date > 31) {
                        result = sai;
                    } else {
                        if (month === 3) { //tháng trc: 2
                            if (date === 1) {
                                date = 28;
                                month--;
                            } else {
                                date--;
                            }
                            result = date + '/' + month + '/' + year;
                        } else {
                            if (month === 1) {
                                if (date === 1) {//tháng1: trước:thang 12 có 31 ngay
                                    date = 31;
                                    month = 12;
                                    year--;
                                } else {
                                    date--;
                                }
                                result = date + '/' + month + '/' + year;
                            } else {
                                if (month === 8) { //tháng truoc: thang 7 có 31 ngày
                                    if (date === 1) {
                                        date = 31;
                                        month--;
                                    } else {
                                        date--;
                                    }
                                    result = date + '/' + month + '/' + year;
                                } else { //thang truoc co 30 ngay
                                    if (date === 1) {
                                        date = 30;
                                        month--;
                                    } else {
                                        date--;
                                    }
                                    result = date + '/' + month + '/' + year;
                                }
                            }
                        }
                    }

                }
            }

        }
    }
    else {
        if (date > 0 && month > 0 && date < 32 && month < 13 && year < 1920) {
            result = 'Năm phải từ 1920 trở về sau';
        }
    }


    document.getElementById('result-B5').innerHTML = result;
}


document.getElementById('btnMai-B5').onclick = function () {
    //input:
    let date = +document.getElementById('date-B5').value;
    let month = +document.getElementById('month-B5').value;
    let year = +document.getElementById('year-B5').value;

    // output : result: string
    let result = '';
    result = 'Dữ liệu không hợp lệ!!!';

    //progress:
    let sai = 'Dữ liệu không hợp lệ!!!';
    if (year > 1919 && date > 0 && month > 0 && date < 32 && month < 13 && (year % 1) === 0 && (month % 1) === 0 && (date % 1) === 0) {
        if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
            //tháng 31 ngày
            if (date > 31) {
                result = sai;
            } else {
                if (month === 12) {
                    //tháng 12
                    if (date === 31) {
                        date = 1;
                        month = 1;
                        year++;
                    } else {
                        date++;
                    }
                    result = date + '/' + month + '/' + year;
                } else {
                    //các tháng 31 còn lại
                    if (date === 31) {
                        date = 1;
                        month++;
                    } else {
                        date++;
                    }
                    result = date + '/' + month + '/' + year;
                }
            }
        } else {
            if (month === 4 && month === 6 && month === 9 && month === 11) {
                if (date > 30) {
                    result = sai;
                } else {
                    if (date === 30) {
                        date = 1;
                        month++;
                    } else {
                        date++;
                    }
                    result = date + '/' + month + '/' + year;
                }
            } else { //tháng 2 nhuận
                if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
                    if (date > 29) {
                        result = sai;
                    } else {
                        if (date === 29) {
                            date = 1;
                            month++
                        } else {
                            date++
                        }
                        result = date + '/' + month + '/' + year;
                    }
                } else {
                    //tháng 2 k nhuận
                    if (date > 28) {
                        result = sai;
                    } else {
                        if (date === 28) {
                            date = 1;
                            month++
                        } else {
                            date++
                        }
                        result = date + '/' + month + '/' + year;
                    }
                }
            }
        }

    } else {
        if (date > 0 && month > 0 && date < 32 && month < 13 && year < 1920) {
            result = 'Năm phải từ 1920 trở về sau';
        }
    }
    document.getElementById('result-B5').innerHTML = result;
}
//Bài 6:
document.getElementById('btn-B6').onclick = function () {
    // input : month, year : number
    let month = +document.getElementById('month-B6').value;
    let year = +document.getElementById('year-B6').value;

    // output  : result:string
    let result = '';

    // progress :
    if (month > 0 && year > 1919 && month < 13 && (year % 1) === 0 && (month % 1) === 0) {
        if (month === 1 && month === 3 && month === 5 && month === 7 && month === 8 && month === 10 && month === 12) {
            result = 'Tháng ' + month + ' năm ' + year + ' có 31 ngày!!!';
        } else {
            if (month === 4 && month === 6 && month === 9 && month === 11) {
                result = 'Tháng ' + month + ' năm ' + year + ' có 30 ngày!!!';
            } else {
                if ((year % 4) === 0 && (year % 100) !== 0 || (year % 400) === 0) {
                    result = 'Tháng ' + month + ' năm ' + year + ' có 29 ngày!!!';
                } else {
                    result = 'Tháng ' + month + ' năm ' + year + ' có 28 ngày!!!';
                }
            }
        }

    } else {
        if (year < 1920) {
            result = 'Cần nhập năm từ 1920';
        } else {
            result = 'Dữ liệu không hợp lệ';

        }
    }
    document.getElementById('result-B6').innerHTML = result;
}

//Bài 7:
document.getElementById('btn-B7').onclick = function () {
    // input : number : number
    let number = +document.getElementById('number-B7').value;

    // output : result: string
    result = '';

    // progress :
    let tram = 0;
    let chuc = 0;
    let donVi = 0;
    let docTram = '';
    let docChuc = '';
    let docDonVi = '';
    if (number < 0) {
        number = Math.abs(number);
        donVi = number % 10;
        chuc = Math.floor((number % 100)/10) ;
        tram = Math.floor(number / 100);
        if (tram !== 0) {
            switch (tram) {
                case 1: {
                    docTram = 'một trăm';
                }; break;
                case 2: {
                    docTram = 'hai trăm';
                }; break;
                case 3: {
                    docTram = 'ba trăm';
                }; break;
                case 4: {
                    docTram = 'bốn trăm';
                }; break;
                case 5: {
                    docTram = 'năm trăm';
                }; break;
                case 6: {
                    docTram = 'sáu trăm';
                }; break;
                case 7: {
                    docTram = 'bảy trăm';
                }; break;
                case 8: {
                    docTram = 'tám trăm';
                }; break;
                case 9: {
                    docTram = 'chín trăm';
                }; break;
            }
            switch (chuc) {
                case 0: {
                    docChuc = ' lẻ';
                }
                case 1: {
                    docChuc = ' mười';
                }; break;
                case 2: {
                    docChuc = ' hai mươi';
                }; break;
                case 3: {
                    docChuc = ' ba mươi';
                }; break;
                case 4: {
                    docChuc = ' bốn mươi';
                }; break;
                case 5: {
                    docChuc = ' năm mươi';
                }; break;
                case 6: {
                    docChuc = ' sáu mươi';
                }; break;
                case 7: {
                    docChuc = ' bảy mươi';
                }; break;
                case 8: {
                    docChuc = ' tám mươi';
                }; break;
                case 9: {
                    docChuc = 'chín mươi';
                }; break;
            }
            switch (donVi){
                case 0: {
                    docDonVi = '';
                }
                case 1: {
                    docDonVi = ' một.';
                }; break;
                case 2: {
                    docDonVi = ' hai.';
                }; break;
                case 3: {
                    docDonVi = ' ba.';
                }; break;
                case 4: {
                    docDonVi = ' bốn.';
                }; break;
                case 5: {
                    docDonVi = ' năm.';
                }; break;
                case 6: {
                    docDonVi = ' sáu.';
                }; break;
                case 7: {
                    docDonVi = ' bảy.';
                }; break;
                case 8: {
                    docDonVi = ' tám.';
                }; break;
                case 9: {
                    docDonVi = 'chín.';
                }; break;
            }
            if (chuc===0 && donVi===0){
                result = 'Âm ' + docTram + ' chẵn.';
            }
            else{
                result = 'Âm ' + docTram + ' ' + docChuc + ' ' + docDonVi;
            }
        } else {
            result = 'Dữ liệu không hợp lệ!'
        }
    } else {
        donVi = number % 10;
        chuc = Math.floor((number % 100)/10) ;
        tram = Math.floor(number / 100);
        if (tram !== 0) {
            switch (tram) {
                case 1: {
                    docTram = 'Một trăm';
                }; break;
                case 2: {
                    docTram = 'Hai trăm';
                }; break;
                case 3: {
                    docTram = 'Ba trăm';
                }; break;
                case 4: {
                    docTram = 'Bốn trăm';
                }; break;
                case 5: {
                    docTram = 'Năm trăm';
                }; break;
                case 6: {
                    docTram = 'Sáu trăm';
                }; break;
                case 7: {
                    docTram = 'Bảy trăm';
                }; break;
                case 8: {
                    docTram = 'Tám trăm';
                }; break;
                case 9: {
                    docTram = 'Chín trăm';
                }; break;
            }
            switch (chuc) {
                case 0: {
                    docChuc = ' lẻ';
                }
                case 1: {
                    docChuc = ' mười';
                }; break;
                case 2: {
                    docChuc = ' hai mươi';
                }; break;
                case 3: {
                    docChuc = ' ba mươi';
                }; break;
                case 4: {
                    docChuc = ' bốn mươi';
                }; break;
                case 5: {
                    docChuc = ' năm mươi';
                }; break;
                case 6: {
                    docChuc = ' sáu mươi';
                }; break;
                case 7: {
                    docChuc = ' bảy mươi';
                }; break;
                case 8: {
                    docChuc = ' tám mươi';
                }; break;
                case 9: {
                    docChuc = 'chín mươi';
                }; break;
            }
            switch (donVi){
                case 0: {
                    docDonVi = '';
                }
                case 1: {
                    docDonVi = ' một.';
                }; break;
                case 2: {
                    docDonVi = ' hai.';
                }; break;
                case 3: {
                    docDonVi = ' ba.';
                }; break;
                case 4: {
                    docDonVi = ' bốn.';
                }; break;
                case 5: {
                    docDonVi = ' năm.';
                }; break;
                case 6: {
                    docDonVi = ' sáu.';
                }; break;
                case 7: {
                    docDonVi = ' bảy.';
                }; break;
                case 8: {
                    docDonVi = ' tám.';
                }; break;
                case 9: {
                    docDonVi = 'chín.';
                }; break;
            }
            if (chuc===0 && donVi===0){
                result = docTram + ' chẵn.';
            }
            else{
                result = docTram + ' ' + docChuc + ' ' + docDonVi;
            }
        } else {
            result = 'Dữ liệu không hợp lệ!'
        }
    

    }
    document.getElementById('result-B7').innerHTML = result;
}


