let result= $(".result");
    result.value="";

$(document).ready(function(){

    $("button").click(function (e) {
        let digit=$(this).attr('id').charAt(1);
        processSymbol(digit);
    });

    $("body").keydown(function (e) {
        processSymbol(e.key);
    });

});

//set the value and text of input field
function setValue(value){
    result.value+=value;
    result.val(result.value);
}

/*take the symbol and process it   
if the symbol is different from "=" or "Enter" or "c" or backarrow the symbol will be added to the text
else the command of those symbols will be triggred 
*/
function processSymbol(symbol){
    switch (symbol) {
        case "1":
            setValue("1");    
            break;
        case "2":
            setValue("2");    
            break;
        case "3":
            setValue("3");    
            break;
        case "4":
            setValue("4");    
            break;
        case "5":
            setValue("5");    
            break;
        case "6":
            setValue("6");    
            break; 
        case "7":
            setValue("7");    
            break;
        case "8":
            setValue("8");    
            break;
        case "9":
            setValue("9");    
            break;
        case "0":
            setValue("0");    
            break;
        case "+":
            setValue("+");    
            break;
        case "-":
            setValue("-");    
            break;
        case "*":
            setValue("*");    
            break;
        case "/":
            setValue("/");    
            break;
        case ".":
            setValue(".");    
            break;
        case "%":
            setValue("%");             
            break;
        case "(":
            setValue("(");             
            break;
        case ")":
            setValue(")");             
            break;
        case "b":
        case"Backspace":
            if(result.value.length===1){
                result.value="0";
                result.val("0");         
            } 
            result.value=result.value.substring(0, result.value.length -1 )
            result.val(result.value);         
            break;
        case "Delete":
        case "c":
            result.value="";
            result.val("");
            break;
        case "=":
        case "Enter":
            try {
            let x = eval(result.value);
            result.val(x);
            result.value=x;   
            } catch (error) {
               result.val("Error"); 
               result.value=""
            }finally{break;}                                                                                          
        default:
            break;
    }     
}
