 document.getElementById("calc-btn").addEventListener("click",function(){
        var first_number = document.getElementById("first_input").value;
        var second_number = document.getElementById("second_input").value;
        try{
            let result =divide(Number(first_number),Number(second_number));
            // console.log("first");
            // console.log("second");
              document.getElementById("result").innerHTML = result;
        }catch(error){
            alert(error.message);
        }finally{ //always run(optional block)
            console.log("finally");
        }
       
      
    });