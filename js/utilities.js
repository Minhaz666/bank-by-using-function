function getinputfieldvalueById(inputfieldid)
{
    const inputfield=document.getElementById(inputfieldid);
    const inputfieldvaluestring=inputfield.value; 
    const inputfieldvalu=parseFloat(inputfieldvaluestring);
    inputfield.value='';
    return inputfieldvalu;
//    console.log(input)
}

function getElementValuebyid (elementid)
{
    const element=document.getElementById(elementid);
    const elementvaluebystring=element.innerText;
    const textelmentvalue=parseFloat(elementvaluebystring);
    element.innerText='';
    return textelmentvalue;
}

//set the value
function settextelementvalue (elementid,newvalue)
{
const textelement=document.getElementById(elementid);
textelement.innerText=newvalue;
}