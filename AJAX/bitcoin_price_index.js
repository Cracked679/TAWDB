
//Bitcoin Price Index
    var button = document.querySelector("#button");
    var price = document.querySelector("#price");

    button.addEventListener("click",function(){
        var XHR = new XMLHttpRequest();
        
        XHR.onreadystatechange = function(){
            if(XHR.readyState == 4 && XHR.status == 200){
                var url = JSON.parse(XHR.responseText).bpi.INR.rate_float;
                price.innerHTML = url;
            }
        }
        XHR.open("GET","https://api.coindesk.com/v1/bpi/currentprice/INR");
        XHR.send();
    });
