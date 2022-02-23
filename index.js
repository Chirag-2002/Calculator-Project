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
    });
}










// var form=document.getElementById('form');
// var result=document.getElementsByName('ans');
// var compute =document.getElementsByName('btn');
// for (item of compute)
// {
//     item.addEventListener('click',buttonClick);
// }

// function buttonClick(e)
//  {
//     // console.log("Button Clicked !")
//     // document.getElementById("heading").textContent="Perform";
//     // result.innerHTML ='<h3>'+e.target+'</h3>'; // Dosen't Work
//     // console.log(e.clientX);
//     // console.log(e.altKey);
//     //console.log(e.ctrlKey);
//     //console.log(e.shiftKey);
//     buttonText=e.target.value;
//     // console.log(buttonText)
//     if (buttonText=='X')
//     {
//         buttonText='*';
//         result.value=buttonText;
//     }
// }
// // TYPES OF EVENT IN JS :

// // 1)click event
// // 2) dblclick
// // 3) mousedown
// // 4) mouseup
// // 5) mouseenter
// // 6) mouseleave
// // 7) mouseover
// // 8) mouseout
// //9) mousemove





