function main() {    
   var i;
        for (i = 1; i < 103; i++) { 
            var ep;
            if(i <=9){
                ep = "8";
            } else if(i <= 19){
                ep="12";
            } else if(i <= 29){
                ep = "16";
            } else if(i <= 39){
                ep = "20";
            } else if(i <= 49){
                ep="24";
            } else if(i <= 59){
                ep="28";
            } else if(i <= 72){
                ep="40";
            } else if(i == 78){
                ep="2000";
            } else if(i <= 86){
                ep="50";
            } else if(i <=98){
                ep="60";
            } else if(i <=102){
                ep="70";
            }
            $("#stock").append("<p>OverridePlayerLevelEngramPoints=" + ep + "</p>");
            console.log("OverridePlayerLevelEngramPoints=" + ep);
        }
}
    
$(document).ready(main);