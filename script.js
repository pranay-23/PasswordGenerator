const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const symbols="!@#$%^&*()_-+={}[]'\'|<>,?";
const numbers="1234567890";


const upperBox=$("#uppercase");
const lowerBox=$("#lowercase");
const num=$("#numbers");
const sym=$("#symbols");

const getRandomData=(dataSet)=>{
    return dataSet[Math.floor(Math.random()*dataSet.length)];
};

const getPassword=(password="")=>{
    let len=$("#length").val();
    while(password.length<len){
        if(upperBox.is(":checked")){
            if(password.length==len){
                break;
            }
            password+=getRandomData(upperCase);
        }
        if(lowerBox.is(":checked")){
            if(password.length==len){
                break;
               }
            password+=getRandomData(lowerCase);
        }
        if(num.is(":checked")){
            if(password.length==len){
                break;
            }
            password+=getRandomData(numbers);
        }
        if(sym.is(":checked")){
            if(password.length==len){
                break;
            }
            password+=getRandomData(symbols);
        }
        else{
            password+=getRandomData(lowerCase);
        }
    }

    $("#text").text(password);
};


$("#generate").click(function(){
    getPassword();
});