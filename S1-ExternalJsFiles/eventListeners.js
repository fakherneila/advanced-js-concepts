 document.getElementById("calc-btn").addEventListener("click",function(){
        var first_number = document.getElementById("first_input").value;
        var second_number = document.getElementById("second_input").value;
        let result =divide(Number(first_number),Number(second_number));
        document.getElementById("result").innerHTML = result;
    });