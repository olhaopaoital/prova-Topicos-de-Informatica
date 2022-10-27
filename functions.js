function selectProduct(product) {
    document.getElementById('id-product').value = product;
}

function plus() {
    var divValue = parseInt(document.getElementById('id-product').value);
    divValue = divValue + 1;
    document.getElementById('id-product').value = divValue;
}

function minus() {
    var divValue = parseInt(document.getElementById('id-product').value);
    divValue = divValue - 1;
    document.getElementById('id-product').value = divValue;
}

function deposit(value){
    var divValue = document.getElementById('deposit-value').innerHTML;
    document.getElementById('deposit-value').innerHTML = divValue + value;
}

function confirm(){

    var depositDiv = parseFloat(document.getElementById('deposit-value').innerHTML);
    var balanceDiv = depositDiv + parseFloat(document.getElementById('balance-value').innerHTML)

    document.getElementById('balance-value').innerHTML = balanceDiv;
    document.getElementById('deposit-value').innerHTML = '';
}

function withdraw() {
    var depositDiv = parseFloat(document.getElementById('deposit-value').innerHTML);
    var balanceDiv =  parseFloat(document.getElementById('balance-value').innerHTML);

    if((balanceDiv - depositDiv) > 0){
        document.getElementById('balance-value').innerHTML = balanceDiv - depositDiv;
        document.getElementById('deposit-value').innerHTML = '';
    }
    else {
        document.getElementById('balance-value').innerHTML = 0;
        document.getElementById('deposit-value').innerHTML = '';
    }
}

function buy(id) {
    if(id > 0){
        var productPrice = parseFloat(document.getElementById(`product${id}-price`).innerHTML);
        var productstock = parseFloat(document.getElementById(`product${id}-stock`).innerHTML);
        var balanceDiv = parseFloat(document.getElementById('balance-value').innerHTML)

        if((balanceDiv - productPrice) >= 0){

            if ((productstock - 1) >= 0) {
                document.getElementById('balance-value').innerHTML = balanceDiv - productPrice;
                document.getElementById(`product${id}-stock`).innerHTML = productstock - 1;
            }
        }
    }
}