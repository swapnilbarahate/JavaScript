
let counter=0,n=3,i,j;
let str= "";
for(i=1; i<=n;i++)
{
    counter=0;
    for(j=1;j<(n*2)-1;j++)
    {
        if(counter<n)
        {
            str+=" ";
            counter++;
        }
        else if(j<counter)
        {
            str +="* ";
            
        }
        
    }
    str += "\n";
}
console.log(str);