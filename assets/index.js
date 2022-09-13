


var loginLink = document.querySelector('#cadastro-link');
var cadastroLink = document.querySelector('.login-link');

const login = document.querySelector('.container-left-login');
const cadastro = document.querySelector('.container-left-cadastro');
const loginImg = document.querySelector('.container-right-login');
const cadastroImg = document.querySelector('.container-right-cadastro');

//Esse script altera as abas de login e cadastro  

loginLink.addEventListener("click", () => {
    cadastro.style.top="0"
    login.style.top="100%"
    loginImg.style.top="-100%"
    cadastroImg.style.top="0"
})

cadastroLink.addEventListener("click", () => {
    cadastro.style.top="-100%"
    login.style.top="0"
    loginImg.style.top="0"
    cadastroImg.style.top="100%"
})


//------------------------------------------------------------------------------------------------------


var emailLogin = document.querySelector('#email-login');
var alertErrorLogin = document.querySelector('#placeholder-error-login')

emailLogin.addEventListener("blur", () =>{

//Mantem o placeholder recuado quando o input estiver preenchido. 

    const placeholderLoginEmail = document.querySelector('.placeholder-email-login');
  
    if(emailLogin.value != "" ){

        placeholderLoginEmail.classList.add('active');

    }else{

        placeholderLoginEmail.classList.remove('active');

    };

//Confere se o email digitado é válido.

    if (!emailLogin.checkValidity()){

        alertErrorLogin.style.display="block"
        alertErrorLogin.innerHTML="Email inválido"

    };

    });
emailLogin.onclick = () =>{

    //Esconde o alert de email invalido 

    alertErrorLogin.style.display="none"

}

//------------------------------------------------------------------------------------------------------

var emailCadastro = document.querySelector('#email-cadastro');
var alertErrorCad = document.querySelector('#placeholder-error-cadastro');


//Mantem o placeholder recuado quando o input estiver preenchido. 

emailCadastro.addEventListener("blur", () =>{

    const placeholderCadEmail = document.querySelector('.placeholder-email-cadastro');
  
    if(emailCadastro.value != "" ){

        placeholderCadEmail.classList.add('active');

    }else{

        placeholderCadEmail.classList.remove('active');

    };
//Confere se o email digitado é válido.

    if (!emailCadastro.checkValidity()){

        alertErrorCad.style.display="block";
        alertErrorCad.innerHTML="Email inválido";

    };

    emailCadastro.onclick = () =>{

    //Esconde o alert de email invalido 

    alertErrorCad.style.display="none"

    }
})


//------------------------------------------------------------------------------------------------------

var nomeCadastro = document.querySelector('#nome');

//Impede que o usuário coloque caracteres especiais em seu nome

nomeCadastro.addEventListener("keypress", (e) => {

    if(!checkChar(e)){
        e.preventDefault();
    }

});
function checkChar(e){

    const char = String.fromCharCode(e.keyCode);

    const padrao = '[a-zA-Z0-9 ]';

    if(char.match(padrao)){
        return true;
    }
}

//------------------------------------------------------------------------------------------------------


var telefoneCadastro = document.querySelector('#tel-input');
var telefone = document.querySelector('.tel');

telefoneCadastro.addEventListener("focus", () =>{

    // Altera o texto do input para melhor indentificação do usuário

    telefone.innerHTML="Telefone"

})

telefoneCadastro.addEventListener("blur", () =>{

    // retorna para o exemplo

    if(telefoneCadastro.value ==""){
        telefone.innerHTML="(XX) X XXXX-XXXX"
    }else{
        telefone.innerHTML="Telefone"
    }
})

telefoneCadastro.addEventListener("keypress", () =>{

    //Formatação do número de telefone

    const inputLength = telefoneCadastro.value.length
 
    if(inputLength === 0){

        telefoneCadastro.value += '('

    }else if (inputLength === 3 ){

        telefoneCadastro.value += ') '

    }else if (inputLength === 10 ){

        telefoneCadastro.value += '-'

    }
})

//------------------------------------------------------------------------------------------------------

var senhaCadastro = document.querySelector('#senha-cadastro');
var senhaConfirm = document.querySelector('#senha-cadastro-confirm');

const imgCadastro = document.querySelector('.container-right-cadastro img');
const requisitos = document.querySelector('.requisitos');

//Esconde a ilustração a direita do cadastro e mostra os requisitos da senha 

senhaCadastro.addEventListener("focus", () =>{

    imgCadastro.style.display="none"
    requisitos.style.display="block"
    
})

//Faz o inverso do mencionado acima
senhaCadastro.addEventListener("blur", () =>{

    imgCadastro.style.display="block"
    requisitos.style.display="none"
    
})

//Valida os requisitos mínimos para criação da senha 

let lower = document.getElementById('lower');
let upper = document.getElementById('upper');
let charNumber = document.getElementById('charNumber');
let charLength = document.getElementById('charLength');

function checkPassword(data){
    const lowerTeste = new RegExp('(?=.*[a-z])');
    const upperTeste = new RegExp('(?=.*[A-Z])');
    const charNumberTeste = new RegExp('(?=.*[0-9])');
    const charLengthTeste = new RegExp('(?=.{8,})');

    //Validação de letras minúsculas

    if(lowerTeste.test(data)){
      lower.classList.add('valid');  
    }else{
        lower.classList.remove('valid');
    }

    //Validação de letras maiúsculas

    if(upperTeste.test(data)){
        upper.classList.add('valid');  
    }else{
        upper.classList.remove('valid');
    }

    //Validação de numeros

    if(charNumberTeste.test(data)){
        charNumber.classList.add('valid');  
    }else{
        charNumber.classList.remove('valid');
    }
    
    //Validação de numeros

    if(charLengthTeste.test(data)){
        charLength.classList.add('valid');  
    }else{
        charLength.classList.remove('valid');
    }
}

//------------------------------------------------------------------------------------------------------

var btnShowSenhaLogin = document.querySelector('.btn-eye-login');
var btnShowSenhaCad = document.querySelector('.btn-eye-cad');
var btnShowSenhaCad2 = document.querySelector('.btn-eye-cad2');
var senhaLogin = document.querySelector('#senha-login');
var senhaCadastro2 = document.querySelector('#senha-cadastro-confirm');



btnShowSenhaLogin.addEventListener("click", () =>{

    if(senhaLogin.type === "password" ){

        senhaLogin.setAttribute('type','text');
        btnShowSenhaLogin.classList.add('hide');

    }else{

        senhaLogin.setAttribute('type','password');
        btnShowSenhaLogin.classList.remove('hide');
    }

});

btnShowSenhaCad.addEventListener("click", () =>{

    if(senhaCadastro.type === "password"){

        senhaCadastro.setAttribute('type','text');
        btnShowSenhaCad.classList.add('hide');

    }else{
        senhaCadastro.setAttribute('type','password');
        btnShowSenhaCad.classList.remove('hide');
    }

})

btnShowSenhaCad2.addEventListener("click", () =>{

    if(senhaCadastro2.type === "password"){

        senhaCadastro2.setAttribute('type','text');
        btnShowSenhaCad2.classList.add('hide');

    }else{

        senhaCadastro2.setAttribute('type','password');
        btnShowSenhaCad2.classList.remove('hide');

    }

});

senhaCadastro2.addEventListener("blur", () =>{

    if(senhaCadastro2.value != senhaCadastro.value){
        alertErrorCad.style.display="block"
        alertErrorCad.innerHTML="As senhas estão diferentes"
    }

})

senhaCadastro2.addEventListener("click", () =>{

    alertErrorCad.style.display="none"
})





















