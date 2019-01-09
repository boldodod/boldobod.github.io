// $(document).ready(){

//     $(".dot-nav").on("click", function){
        
//     }
// }

// function toggleDiv(id) {
//     var aside = document.getElementById(id);
//     console.log('aside',aside.style)
//     if (aside.style.visibility === 'hidden'){
//         aside.style.visibility = 'hidden'
//     }
//     else {
//         aside.style.visibility === 'hidden'
//     }
// };

// document.getElementById("sidebar").addEventListener("click", toggleDiv(){
//     var aside = document.getElementById(id);

//     if (aside.style.visibility === 'hidden'){
//         aside.style.visibility = 'hidden'
//     }
//     else {
//         aside.style.visibility === 'hidden'
//     }
// });

function toggleDiv(id) {
    let aside  = document.getElementById(id);
if(aside.style.visibility === "hidden") {
    aside.style.visibility = "visible"
} else{
    aside.style.visibility = 'hidden'
};
};