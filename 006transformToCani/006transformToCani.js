

let fraseOriginal="cocaina cocaina, dame cocaina";

//let fraseModificada = fraseOriginal.replaceAll("c" ,"k");

//alert(fraseModificada);

function cambiarFrase(fraseOriginal) {
   
    fraseOriginal = fraseOriginal.replaceAll("c" ,"k");

    let fraseModificada="";

    for (let i = 0; i < fraseOriginal.length; i++) {
        
        if (i%2==0) {

           fraseModificada =fraseModificada + fraseOriginal[i].toUpperCase(); 
            
        }else{

            fraseModificada =fraseModificada + fraseOriginal[i].toLowerCase();

        }
        
    }

    //document.write(fraseModificada)
    return fraseModificada+"HHH";
}

alert (cambiarFrase(fraseOriginal));