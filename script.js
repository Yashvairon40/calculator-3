function clearScreen(){
    document.getElementById("result").value="";
}
function setScreenValue(value){
    document.getElementById("result").value+=value;
}
function calculateResult(){
    const result= document.getElementById("result");
    const expression=result.value.trim();
    if (expression===""){
        result.value="enter an expression";
        return;
    }
    try{
        result.value=eval(expression);
    }
    catch(e){
        result.value="invalid expression";
    }


}
