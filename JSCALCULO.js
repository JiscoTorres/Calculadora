// AUTOR: Gustavo Neitzke.
var expressao = ''
var resultado = ''
function sendNum(digit){
       var algarismo = digit;
       expressao = expressao + algarismo;
       document.getElementById('screen').placeholder = expressao;
       console.log(expressao[1])
       if(expressao[0] == '0'){
              if (expressao[1] != '.' && expressao[1]!= undefined){
                     expressao = expressao.replace('0', '')
              }
       }
       return expressao;
}
function equalTo(){
       console.log(expressao);
       try{
       resultado = eval(expressao);
       if (Number.isInteger(resultado)){
              document.getElementById('screen').placeholder = resultado;
   
       }
       else{
              document.getElementById('screen').placeholder = resultado.toFixed(2);
   
       }
       expressao = resultado;
       if (Number.isInteger(expressao) == false){
           expressao = expressao.toFixed(2)
       }
       return expressao;
       }catch(err){
           alert("Expressão digitada inválida!")
           document.getElementById("mensagem_erro").innerHTML = "Expressão digitada inválida!"
           expressao = '';
           document.getElementById('screen').placeholder = expressao;
           setTimeout(function(){
              document.getElementById("mensagem_erro").innerHTML = "";
           }, 5000)
           return expressao    
       }
       
}

function clearScr(){
	expressao = '';
       document.getElementById('screen').placeholder = expressao;
       return expressao;    
}
