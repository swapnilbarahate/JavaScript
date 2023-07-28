let n,i,j,len;
let string = "";
n=5;
len=(n*2)-1;
for(i=n;i>=1;i--)
{
    for(j=0;j<len;j++)
    {
        if( j>=len-i || j<i)
        {
            string+="*";
        }
        else{
            // string+="&nbsp&nbsp";
            string+=" ";
        }
    }
    string += "\n";
    // string += "<br>";
}
for(i=2;i<=n;i++)
{
    for(j=0;j<len;j++)
    {
        if(j==0 || j>=len-i || j<i)
        {
            string+="*";
        }
        else{
            // string+="&nbsp&nbsp";
            string+=" ";
        }
    }
    string += "\n";

    // string += "<br>";
}
console.log(string);
// document.write(string);