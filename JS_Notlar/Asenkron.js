setInterval(myFunction, 1000);  // Her bir saniyede bir çalışır.
setTimeout(myFunction2, 5000);  // Sadece bir kere çalışır.

function myFunction2() {
    console.log("Hello World");
}

function myFunction() {
    let d = new Date();
    document.getElementById("demo").innerHTML = 
    d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}

