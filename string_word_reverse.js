//string word reverse program
//input: "swapnil barahate"
//output:"linpaws etaharab"
let str = "  swapnil shivaji barahate d";
let start=0;end=0;
str = str.split("");
while(end<str.length)
{
    if(str[end]==" "|| end== str.length-1)
    {
        swap(str,start,((end==str.length-1&&str[end]!=" ")? end:end-1));
        start= end+1;
    }
    end++;
}
function swap(str,start,end)
{
    let i=start,j=end;
    while(i<j)
    {
        let temp= str[i];
        str[i]= str[j];
        str[j]= temp;
        i++;
        j--;
    }
    start = end+1;
}
str = str.join("");
console.log(str);