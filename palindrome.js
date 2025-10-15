let a = 125 , s=0,d;
while (a!=0){
    d = a%10;
    s = (s*10)+d;
    a = (a-d)/10;
}
if(s==a){
    console.log("it is a palindrome");
}else{
    console.log("it is not a palindrome");
}