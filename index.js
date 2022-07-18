document.getElementById("sapXep").onclick = function() {
    //Input
    var N1 = document.getElementById("N1").value*1;
    var N2 = document.getElementById("N2").value*1;
    var N3 = document.getElementById("N3").value*1;
//count
 var ShowA = ""
    if(N1 > N2 && N2 > N3){
        ShowA += "<p> thu tu tang dan" + N3+" " +N2 +" "+N1  + "</p>"
    }
    else if(N2 > N3 && N1 > N3){
        ShowA += "<p>thu tu tang dan" + N3+" " +N1+" " +N2 + "</p>"

    }
    else if(N1 > N3 && N3 > N2 ){
        ShowA += "<p>thu tu tang dan" + N2+" " +N3+" " +N1 + "</p>"
        
    }
    else if(N3 >N1 && N1 > N2 ){
        ShowA += "<p>thu tu tang dan" + N2+" " +N1+" " +N3 + "</p>"
        
    }
    else if(N2 >N3 && N3 > N1){
        ShowA += "<p>thu tu tang dan" + N1+" " +N3+" " +N2 + "</p>"
    }
    else if(N3 > N2 && N2 > N1){
        ShowA += "<p>thu tu tang dan" + N1+" " +N2+" " +N3 + "</p>"
        
    }
    else{
        ShowA+= "<p>co don vi bang nhau trong 3 so</p>"
    }
document.getElementById("Get").innerHTML = ShowA;
}

//bai 2
document.getElementById("ok").onclick = function() {
    var otp = document.getElementById("otp").value
    var showD = ""    
    if(otp == "dad"){
        showD += "<p>hello father, have a nice day!"
    }
    else if(otp == 'mom'){
        showD += "<p>hello mother, have a nice day!"
    }
else if(otp == 'sis'){
    showD += "<p>hello younger sister, have a nice day!"
}
else if(otp == 'bro'){
    showD += "<p>hello brother, have a nice day!"
}
document.getElementById("boardV").innerHTML = showD;
}
//bai 3
document.getElementById("Find").onclick = function() {
    var Nu1 = document.getElementById("N-1").value*1;
    var Nu2 = document.getElementById("N-2").value*1;
    var Nu3 = document.getElementById("N-3").value*1;

    var showB = ""
    if(Nu1 %2 == 0 &&Nu2 %2== 0&&Nu3%2==0){
        showB += "<p>tat ca la so chan</p>"
    }
    else if(Nu1 %2 == 0 && Nu2 %2 == 0 && Nu3 %2 == 1){
        showB += "<p>1 so le va 2 so chan</p>"
    }
    else if(Nu1 %2 == 0 && Nu2 %2 == 1 &&  Nu3 %2 ==1 ){
        showB += "<p>1 so chan va 2 so le</p>"

    }
    else if(Nu1 %2 == 0 && Nu2 %2 == 1 && Nu3 %2 == 0){
        showB += "<p>1 so le va 2 so chan</p>"

    }
    else if(Nu1 %2 == 1&& Nu2 %2 == 0&& Nu3 %2 ==0){
        showB += "<p>1 so le va 2 so chan</p>"

    }
    else if(Nu1 %2 == 1 &&  Nu2 %2 == 1&& Nu3 %2 ==0){
        showB += "<p>2 so le va 1 so chan</p>"

    }
    else if(Nu1 %2 == 1 &&  Nu2 %2 == 0&& Nu3 %2 ==1){
        showB += "<p>2 so le va 1 so chan</p>"

    }
    else if(Nu1 %2 == 1 &&Nu2 %2== 1&&Nu3%2==1)
    showB += "<p>tat ca la so le</p>"
document.getElementById("UpNumber").innerHTML = showB;
}



//bai 4
document.getElementById("Count").onclick = function() {
    var S1 = document.getElementById("S-1").value*1;
    var S2 = document.getElementById("S-2").value*1;
    var S3 = document.getElementById("S-3").value*1;
var S12 = S1 * S1 + S2 *S2 
var S23 = S2 * S2 + S3 *S3
var S13 = S1 *S1 + S3*S3

    var ShowC = "";
    if (S1 == S2 && S2 == S3){
        ShowC += "<p>tam giac deu</p>"
    }
    else if(S1 == S2 || S2 == S3 || S1 == S3 ){
        ShowC += "<p>tam giac can</p>"
    }
    else if(S1 *S1 == S23 || S2*S2 == S13 || S3 *S3 == S12 ) {
        ShowC += "<p>tam giac vuong</p>"
    }
    else{
        ShowC += "<p>tam giac thuong</p>"

    }
    document.getElementById("boardA").innerHTML = ShowC;
}