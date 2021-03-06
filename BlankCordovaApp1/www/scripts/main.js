var folderName = 'imagenesTrucks';
var fileName;
var root = null; // File System root variable
var currentDir = null; // Current DirectoryEntry listed
var parentDir = null; // Parent of the current directory

var activeItem = null; // The clicked item
var activeItemType = null; // d-directory, f-file
var clipboardItem = null; // file or directory for copy or move 
var clipboardAction = null; // c-copy, m-move
$(document).ready(function () {
    "use strict";
        // Handle the Cordova pause and resume events
    //Se busca la versi�n de json
    $.ajax({
        type: "POST",
        url: "http://s544443713.onlinehome.mx/AppTrucks/app/getTrucksPositions.php",
        dataType: 'JSON',
        async: true,
        cache: false,
        beforeSend: function () {
        },
        success: function (result) {
            console.log(result)
            var dataToStore = JSON.stringify(result);
            localStorage.setItem('version', (JSON.parse(dataToStore)).version);
            localStorage.setItem('trucks', dataToStore);
            console.log("TRUCKS ENCONTRADOS EN MAIN")
            console.log((JSON.parse(dataToStore)).numtrucks);            
        },
        error: function (request, error) {
            console.log(request);
            //window.location = "pages/inicio.html";
        }
    });
    console.log("EN MAIN");                
});

function openMenu(id) {
    if (id == 1)
        window.location = "mapa/mapa.html";
    if (id == 2)
        window.location = "trucks/trucks.html";
    if (id == 3)
        window.location = "eventos/eventos.html";
    if (id == 4)
        window.location = "estaciones/estaciones.html";
    if (id == 5)
        window.location = "promociones/promociones.html";
    if (id == 6)
        window.location = "conantojode/conantojode.html";
    if (id == 7)
        window.location = "magazine/magazine.html";        
}