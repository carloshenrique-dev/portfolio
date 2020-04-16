function myFunction(){
    var element = document.body;
    element.classList.toggle("dark-mode");
    
}

function funcao() {
    var x = document.getElementById("button");
    if (x.innerText === "Dark Mode") {
      x.innerText = "Light Mode";    
    } else {
      x.innerText = "Dark Mode";     
    }
  }