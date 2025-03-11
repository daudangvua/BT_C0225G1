function convert(){
    amount = parseInt(document.getElementById("amount").value);
    from= parseInt(document.getElementById("from").value);
    to=parseInt(document.getElementById("to").value);
    rate= from/to;
    result = amount*rate;
    document.getElementById("result").innerHTML = result;
}