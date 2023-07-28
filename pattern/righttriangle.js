let i,j,n,string="";
n=5;
function rightriangle(n){
    for(i=1;i<=n;i++)
    {
        for(j=n*2-i;j>=i;j--)
        {
            string+=" ";
        }
        for(j=1;j<=i;j++)
        {
            string+=" *";
        }
            string+="\n";
    }
    return string;
}
console.log(rightriangle(n));