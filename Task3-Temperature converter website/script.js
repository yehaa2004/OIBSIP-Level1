function tempconverter()
{
    var t=document.getElementById('a').value
    var f=document.getElementById('b').value
    if(Number.isNaN(t)==true)
    { 
        document.write("<h4>Not able to convert</h4>")
    }
    if(Number.isNaN(t)==false)
    { 
        if(f=='Fahrenheit')
        {
            p=parseFloat((t-32)/1.8)
            p=p.toString()
            s='C'
            document.getElementById('c').value=p
        }

        else
        {
            p=parseFloat((t*1.8)+32)
            p=p.toString()
            document.getElementById('c').value=p
        }
    }
}
