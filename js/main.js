
let slides = document.getElementsByClassName("slide").length - 4;
let a = 0;

function slider(n){
    if(n && a < slides) {
        $("#slides").css("margin-left", "-=305px");
        ++a;
    }
    else if(!n && a > 0) {
        $("#slides").css("margin-left", "+=305px");
        --a;
    }
    let prev = document.getElementById("prev");
    let next = document.getElementById("next");
    if(a >= slides && !(next.hasAttribute("disabled"))) next.setAttribute("disabled", "disabled");
    else if(a < slides && (next.hasAttribute("disabled"))) next.removeAttribute("disabled");
    if(a <= 0 && !(prev.hasAttribute("disabled"))) prev.setAttribute("disabled", "disabled");
    else if(a > 0 && (prev.hasAttribute("disabled"))) prev.removeAttribute("disabled");
}

document.getElementById("logo-footer").addEventListener('click', function (e) {
    e.preventDefault()
    
    document.querySelector("#top").scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })

  new CircleType(document.getElementById('radius'));