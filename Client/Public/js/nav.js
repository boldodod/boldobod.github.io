function toggleDiv(id) {
    let aside  = document.getElementById(id);
if(aside.style.visibility === "hidden") {
    aside.style.visibility = "visible"
} else{
    aside.style.visibility = 'hidden'
};
};