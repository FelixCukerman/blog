(function()
{
    document.writeln("Привет мир");
}());
 
(function(n)
{
     
    var result = 1;
    for(var i=1; i<=n; i++)
        result *=i;
    document.writeln("Факториал числа " + n + " равен " + result);
}(4));