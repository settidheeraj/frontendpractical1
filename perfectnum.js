let a = 6,i,s=0;
for(i=1;i<a;i++){
    if(a%i==0){
        s=s+i;
    }
}
if(s==a){
    console.log("it is perfect");
}
else{
    console.log("not perfect");
}