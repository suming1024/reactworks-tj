//1-5까지 출력하기
let i =1;
while(true){
    console.log(i);
    i++;
    if(i>5)
        break;
}

//1-5까지 합
let j=1;
let sum=0;

while(true){
    sum=sum+j;
    j++;
    console.log(`j=${j},sum=${sum}`);

    if(j>5)
        break;
}

console.log(`합께${sum}`);
