function toggleFavorite(button) {
    
    button.classList.toggle("favorite");

    
    var serverName = button.parentElement.textContent.trim();

    if (button.classList.contains("favorite")) {
        
        document.getElementById("notification").innerText = serverName + " ajouté aux favoris";
        document.getElementById("notification").classList.remove("hidden");
    } else {
        
        document.getElementById("notification").classList.add("hidden");
    }
}

function marquerCommeFavori(serverName) {
    
    alert(serverName + " a été marqué comme favori !");
}

var serveur = "Nom du serveur";
marquerCommeFavori(serveur);

