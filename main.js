var formLogin = document.getElementById("btn-login");
var formLogup = document.getElementById("btn-logup");
var backGround = document.getElementById("back");
var backGround2 = document.getElementById("background");
formLogin.onclick = function (){
    backGround.style.display = 'flex';
    document.getElementById("login").style.display = 'block';
    document.getElementById("logup").style.display = 'none';

}

formLogup.onclick = function (){
    backGround.style.display = 'flex';
    document.getElementById("login").style.display = 'none';
    document.getElementById("logup").style.display = 'block';

}

backGround2.onclick = function (){
    backGround.style.display = 'none';
}

document.getElementById("switch-logup").onclick = function (){
    backGround.style.display = 'flex';
    document.getElementById("login").style.display = 'none';
    document.getElementById("logup").style.display = 'block';
}
document.getElementById("switch-login").onclick = function (){
    backGround.style.display = 'flex';
    document.getElementById("logup").style.display = 'none';
    document.getElementById("login").style.display = 'block';
}

