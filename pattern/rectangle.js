let n = 6, i = 0, string = "", len;
len = (n * 2);
for (j = 1; j <= n; j++) {
    i = 0;
    while (i <= len) {
        string += "*";
        if (i != len - 1) {
            string += " ";
        }
        i = i + 2;
    }
    string += "\n";
}
console.log(string);
