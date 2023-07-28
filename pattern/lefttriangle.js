let i,j,n,string="";
n=20;
function lefttriangle(n){
    for(i=1;i<=n;i++)
    {
        for(j=1;j<=i;j++)
        {
            string+="* ";
        }
            string+="\n";
    }
    return string;
}
console.log(lefttriangle(n));