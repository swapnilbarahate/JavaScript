let n,i,j,len;
let string = "";
n=3;
len=(n*2)-1;
for(i=1;i<=n;i++)
{
    for(j=0;j<len;j++)
    {
        if(j==0 || j>=len-i || j<i)
        {
            string+="* ";       }
        else{
            string+="  ";
        }
    }
    string += "\n";
}
console.log(string);