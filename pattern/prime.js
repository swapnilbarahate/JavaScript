let i,j,output="",count=0,numList=[10,3,7,100,16,34,55,666,77,555,66,444,333,23,456,66,11,444,666,777,677,333,99,904,765,849,18];
let flag=0;
for(i=0;i<numList.length;i++)
{
    flag=0;
    for(j=2;j<=(numList[i]/2);j++)
    {
        if(numList[i]%j==0)
        {
            flag=1;
            break;
        }
    }
    if(flag==0)
    {
        count++;
        output+=`${numList[i]},`;
    }
}
console.log(`in given list ${output} is prime numbers and count is:${count}`);