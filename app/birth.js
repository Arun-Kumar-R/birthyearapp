function calculate()
{
    var number  = document.getElementById("number").value;
    if (number == "" || number == 0)
    {
        window.alert("Please type your correct age..");
        return;
    }
    var date =  new Date().getFullYear();
    var birthyear = date - number;
    ///enable p tag values and upadte the values
    document.getElementById("year").style.display = "block";
    document.getElementById("year").innerHTML = "Your Birth Year is:"+ birthyear;
}

//disabled p tag values
document.getElementById("year").style.display = "none";

document.getElementById("button").onclick = function() { calculate(); };
//date creation
var date =  new Date();
document.getElementById("date").innerHTML = date.toDateString();