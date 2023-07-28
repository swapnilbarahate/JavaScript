function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}
async function fun() {
    console.log('Hello World');
    for (let i = 1; i <= 10; i++) {
        await sleep(2000);
        console.log(i + " " + "Welcome to the javaTpoint.com" + " " + "</br>");
    }
}
fun();