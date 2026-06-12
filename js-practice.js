//Loops

//for loop

//1 to 10 print

for(let i=1;i<=10;i++){
    console.log(i);
}


// 1 to 10 reverse print
for(let i=10;i>=1;i--){
    console.log(i);
}


//while loop
let i=1;

while(i<=5){
    console.log(i);
    i++
}


//do while loop
i=1;
do{
    console.log(i);
    i++;
}
while(i<=5);


//Even Numbers
for(let i=1;i<=20;i++){
    if(i%2==0){
        console.log(i);
    }
}


//odd Number
for(let i=1;i<=20;i++){
    if(i%2!==0){
        console.log(i);
    }
}


//Multiplication Table
for(let i=1;i<=10;i++){
    console.log("5 x" + " " +i + "=" + (5*i));
}


//Sum of Numbers
let sum =0;
for(let i=1;i<=100;i++){
    sum = sum+i;
}
console.log(sum);


//1 to 10 print it but when come the 5 loop stop it
for(let i=1;i<=5;i++){
    if(i==5){
        break;
    }
    console.log(i);
}


//1 to 10 print but skip the 5 
for(let i=1;i<=10;i++){
    if(i==5){
        continue;
    }
    console.log(i);
}


//pattern
for(let i=1;i<=5;i++){
    let result = " ";

    for(let j=1;j<=i;j++){
        result = result + j;
    }

    console.log(result);
}


//* Pattern
for(let i=1;i<=5;i++){
    let result =" ";
    for(let j=1;j<=i;j++){
        result = result + "*";
    }
    console.log(result);
}


//* Reverse pattern
for(let i=5;i>=1;i--){
    let result=" ";
    for(let j=1;j<=i;j++){
        result=result+"*";
    }
    console.log(result);

}