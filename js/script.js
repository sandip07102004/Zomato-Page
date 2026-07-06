// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {

    const searchBox = document.querySelector("main input");

    // Animation when page loads
    searchBox.style.opacity = "0";
    searchBox.style.transform = "translateY(30px)";

    setTimeout(() => {
        searchBox.style.transition = "all 0.6s ease";
        searchBox.style.opacity = "1";
        searchBox.style.transform = "translateY(0)";
    }, 300);


    // Typing placeholder effect
    const texts = [
        "Search for restaurant...",
        "Search for cuisine...",
        "Search for dishes..."
    ];

    let index = 0;

    setInterval(() => {
        searchBox.placeholder = texts[index];
        index++;

        if(index >= texts.length){
            index = 0;
        }

    }, 2000);


    // Focus animation
    searchBox.addEventListener("focus", function(){
        searchBox.style.boxShadow = "0 0 10px rgba(226,55,68,0.6)";
    });

    searchBox.addEventListener("blur", function(){
        searchBox.style.boxShadow = "none";
    });

});