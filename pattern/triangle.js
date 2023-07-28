let n=5;
let i,j,string="";
function triangle(n){
    for(i=1;i<=n;i++)
    {
        for(j=1;j<=n-i;j++)
        {
            string+=" ";
        }
        for(j=1;j<=i;j++)
        {
            string+="* ";
        }
        string+="\n";
    }
    //console.log(string);
    return string;
}
//triangle(n);
console.log(triangle(n));


