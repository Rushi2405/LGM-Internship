//getnumber

function number(num)
{
    var result = document.getElementById("input");

    result.value += num;
}

//getresult

function result()
{
    var result = document.getElementById("input");
    result.value = eval(result.value)

}

//clearResult

function clearResult()
{
    var result = document.getElementById("input");
    result.value = " "

}

//deleteCharacter

function deleteChar()
{
    var result = document.getElementById("input");
    var remove = number.value;
    remove = remove.slice(0,-1);
    number.value = remove ;

}