let a = 125, s=0,d;
while(a!=0){
    d = a%10;
    s = (s*10) + d;
    a=(a-d)/10;

}
console.log(s);