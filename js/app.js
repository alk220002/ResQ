document.addEventListener("DOMContentLoaded", function () {
    console.log("ResQ Website geladen");

    // Funktion zum Laden der Karte
    function initMap() {
        const mapContainer = document.getElementById("mapContainer");
        if (!mapContainer) return;
        
        // Hier könnte eine API wie OpenStreetMap oder Google Maps integriert werden
        mapContainer.innerHTML = "<p>Karte wird hier geladen...</p>";
        mapContainer.style.height = "400px";
        mapContainer.style.backgroundColor = "#e0e0e0";
    }

    // Impressum/DSGVO anzeigen
    document.getElementById("impressumBtn").addEventListener("click", function () {
        alert("Hier wird das Impressum und die DSGVO angezeigt.");
    });

    document.addEventListener("DOMContentLoaded", function () {
        console.log("ResQ Website geladen");
    
        // Suchfunktion
        const searchBtn = document.getElementById("searchBtn");
        const searchInput = document.getElementById("searchInput");
    
        if (searchBtn && searchInput) {
            searchBtn.addEventListener("click", function () {
                let query = searchInput.value.trim().toLowerCase();
                
                if (query === "") {
                    alert("Bitte geben Sie einen Suchbegriff ein.");
                    return;
                }
    
                // Simulierte Suchergebnisse
                let results = [];
                if (query.includes("krankenhaus")) {
                    results.push("Nächstes Krankenhaus: AKH Wien, Adresse: Währinger Gürtel 18-20, 1090 Wien");
                }
                if (query.includes("feuerwehr")) {
                    results.push("Nächste Feuerwehrstation: Berufsfeuerwehr Wien, Adresse: Am Hof 9, 1010 Wien");
                }
                if (query.includes("polizei")) {
                    results.push("Nächste Polizeistation: Polizeiinspektion Wien, Adresse: Herrengasse 7, 1010 Wien");
                }
    
                if (results.length > 0) {
                    alert("Suchergebnisse:\n" + results.join("\n"));
                } else {
                    alert("Keine passenden Notfalldienste gefunden.");
                }
            });
        }
    });
    

    // Erste-Hilfe-Anleitungen anzeigen
    document.getElementById("ersteHilfeBtn").addEventListener("click", function () {
        alert("Hier werden Erste-Hilfe-Anleitungen angezeigt.");
    });

    // Karte initialisieren
    initMap();
});
