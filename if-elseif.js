let m1 = 40,m2 = 50,m3 = 60;
let avg = (m1+m2+m3)/3;
if (avg>=75)
    console.log("distinction");
else if(avg>=60 && avg <75)
    console.log("first class");
else if(avg>=50 && avg < 60)
    console.log("second class");
else if(avg>=40 && avg < 50)
    console.log("third class");
else 
    console.log("fail");