

let fraseOriginal="Hola que tal comemos";

//let fraseModificada = fraseOriginal.replace("c" ,"k");

//alert(fraseModificada);

function cambiarFrase() {
   
    let fraseModificada="";

    for (let i = 0; i < fraseOriginal.length; i++) {
        
        if (i%2==0) {

           fraseModificada =fraseModificada + fraseOriginal[i].toUpperCase; 
            
        }else{

            fraseModificada =fraseModificada + fraseOriginal[i];

        }
        
    }

    //document.write(fraseModificada)
    alert(fraseModificada)
}

cambiarFrase();