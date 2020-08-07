//Plus & Minus Button Handler & Also Product(phoneAmount & caseAmount) price Handler;

function btnHandler(product, plus){

    let amount = document.getElementById(product+"Amount");
    let count = document.getElementById(product+"Input");
    let productCount = parseInt(count.value);
    let price = 0;

        if(plus == true){
            productCount++
        }
        else if(productCount>1 && plus == false){
            productCount--
        }
        if(product == "phone"){
            price = productCount * 1219;
        }
        else if(product == "case"){
            price = productCount * 59;
        }
    
    count.value = productCount;
    amount.innerText = price;
    calculationTotal();
}

// Subtotal, Tax, Total Amount Calculation;

let subTotal = 0;
function calculationTotal (){
    const subAmount = document.querySelectorAll('.amount');
    
    for (let i=0; i< subAmount.length; i++){
        let value = parseInt(subAmount[i].innerText)  ;
        subTotal = subTotal + value;
    }

    const tax = parseInt(subTotal * 0.1) ;
    const total = subTotal + tax ;
    document.getElementById("subTotal").innerText = subTotal;
    document.getElementById("tax").innerText = tax;
    document.getElementById("total").innerText = total;
    subTotal = 0;
}

//Direct Input Handler ;

document.getElementById("phoneInput").addEventListener('change',function(){
    inputDirectChange("phone");
})

document.getElementById("caseInput").addEventListener('change',function(){
    inputDirectChange("case");
})

function inputDirectChange (product){
    
    const testValue = document.getElementById(product+"Input")
        if (testValue.value <=0){
            testValue.value=1;
        }
        btnHandler(product);   
}

//Deleting Cart Item...

let dangerBtn = document.querySelectorAll(".remove-item");

    for (let i = 0; i < dangerBtn.length; i++) {
        dangerBtn[i].addEventListener('click', function(event){
            event.target.parentElement.parentElement.parentElement.remove() ;
            calculationTotal();
         }) 
    }
    

