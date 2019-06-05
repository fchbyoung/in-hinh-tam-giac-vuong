// hình 1 :     *
//              * *
//              * * *
//              * * * *
//              * * * * *
for(let i = 1; i < 10; i++){
    for(let j = 0; j < i; j++){
        document.write("* ");
    }
    document.write("<br/>");
}

document.write("-------------------------------<br/>");

// hình 2 :     * * * * *
//              * * * *
//              * * *
//              * *
//              *
for(let i = 1; i < 10; i++){
    for(let j = i; j < 10; j++){
        document.write("* ");
    }
    document.write("<br/>");
}

document.write("-------------------------------<br/>");

// hình 3 :                *
//                       * *
//                     * * *
//                   * * * *
//                 * * * * *
for(let i = 1; i <= 10; i++){
    for(let j = 1; j <= 10; j++){
        if(j > (10-i)){
            document.write(" *");
        }else{
            document.write("&nbsp&nbsp&nbsp");
        }
    }
    document.write("<br/>");
}

document.write("-------------------------------<br/>");

// hình 4 :          * * * * *
//                     * * * *
//                       * * *
//                         * *
//                           *

for (var i = 0; i <= 10; i++) {
    var star = "";

    for (var j = 0; j <= i; j++) {
        star += "&nbsp&nbsp&nbsp";
    }

    for (var k = 10 - i; k > 0; k--) {
        star += " *";
    }
    document.write(star + "<br/>");
}











