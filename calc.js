function click1(val)
{
    document.getElementById("a").value=document.getElementById("a").value+val

}
function clear1()
{
    document.getElementById("a").value=" "
}
function equal1()
{
    text=document.getElementById("a").value
    var result=eval(text) 
    document.getElementById("a").value=result
    

}
