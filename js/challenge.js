
const textoArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");



/* se crea la funcion encriptar, se pasa como parametros el texto y el diccionario*/
function encriptar(text){
    let mapObject = {a:"ai", e:"enter", i:"imes", o:"ober", u:"ufat"};
    let nuevoTexto = text.replace(/a|e|i|o|u/g, function(matched){
        return mapObject[matched]});     
    return nuevoTexto;
    
}
function btnEncriptado(){
    const textoEncrip = encriptar(textoArea.value);
    mensaje.value = textoEncrip;
    mensaje.style.backgroundImage = "none"
    textoArea.value = "";
    copia.style.display = "block"
}    

function desencriptar(textoE){
    let mapObject2 ={ai:"a", enter:"e", imes:"i", ober:"o", ufat:"u"}
    let textoOriginal = textoE.replace(/ai|enter|imes|ober|ufat/g, function(matched){
        return mapObject2[matched]});
    return textoOriginal;
}
function btnDesencriptar(){
    const textoOriginal = desencriptar(mensaje.value);
    mensaje.value = textoOriginal
  //texto.value = "";
}






function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}
