function toggleTheme(){
    document.body.classList.toggle("dark-mode");
};
// this function toggles dark mode on and off
let count=0;
function addProject(){
    count++;
    document.getElementById("count").innerText= count;
};
// counter for crochet projects