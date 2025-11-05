const lamp = document.getElementById("lamp");
let desligada = true;

lamp.addEventListener('click', () => {
    if(desligada){
        lamp.src = "assets/lamp_on.png";
        document.body.style.background = "radial-gradient(circle, white 8%, yellow 100%)";
        desligada = false;
    }else{
        lamp.src = "assets/lamp_off.png";
        document.body.style.background = "radial-gradient(circle, white 8%, black 100%)";
        desligada = true;
    }
});
