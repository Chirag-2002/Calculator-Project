// var forms = document.getElementById('form')
 var result=document.getElementById('result');
var compute = document.getElementsByName('btn');
var displayvalue = '';
for (item of compute) {
    item.addEventListener('click', (e)=>{
        var buttonText=e.target.value;
        if (buttonText=='X')
        {
            buttonText='*';
            displayvalue+=buttonText
            result.value=buttonText;
        }
        else if (buttonText=='Clear')
        {
            displayvalue=" ";
            result.value=displayvalue;
        }
        else if (buttonText =='=')
        {
            result.value = eval(displayvalue);
        }
        else{
            displayvalue+=buttonText
            result.value=displayvalue;
        }
        try
        {
            if  (buttonText=="=")
            {
                displayvalue+=buttonText;
                result.value=eval(displayvalue)
            }

        }
        catch(error)
        {
            result.value="Can't divide any number by zero ";
        }
    });
}

