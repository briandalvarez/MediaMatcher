 // Function to handle the button clicks
 function handleButtonClick(category) {
    // Update the page title
    document.getElementById("pageTitle").textContent = category;
    
    // Hide the buttonsContainer and show the subcategories and the back button
    document.getElementById("buttonsContainer").style.display = "none";
    document.getElementById("subcategories").style.display = "block";
    document.getElementById("backButton").style.display = "block";
    
    // Display subcategories based on the category
    var subcategories = [];
    if (category === "Genre") {
        subcategories = ["Action", "Comedy", "Drama", "Sci-Fi", "Horror", "Animated", "Random"];
    } else if (category === "Decade Released") {
        subcategories = ["1970s","1980s", "1990s", "2000s", "2010s", "2020s", "Random"];
    } else if (category === "Language") {
        subcategories = ["English", "Spanish", "French", "German", "Mandarin", "Japanese", "Random"];
    } else if (category === "Award-Winning") {
        subcategories = ["Oscar Winners", "Emmy Winners", "Random"];
    }
    
    // Generate and display subcategory buttons
    var subcategoriesHtml = "";
    for (var i = 0; i < subcategories.length; i++) {
        subcategoriesHtml += '<button class="button subcategory-button" data-category="' + category + '">' + subcategories[i] + '</button>';
    }
    document.getElementById("subcategories").innerHTML = subcategoriesHtml;

    // Add event listeners to subcategory buttons
    var subcategoryButtons = document.querySelectorAll('#subcategories button.subcategory-button');
    subcategoryButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Handle subcategory button click
            var subcategory = this.textContent;
            var category = this.getAttribute('data-category');
            navigateToCardPage(category, subcategory);
        });
    });

    // Add event listener to the "Random" subcategory button
    var randomSubcategoryButton = document.querySelector('#subcategories button:contains("Random")');
    randomSubcategoryButton.addEventListener('click', function() {
        var randomSubcategory = subcategories[Math.floor(Math.random() * subcategories.length)];
        navigateToCardPage(category, randomSubcategory);
    });
}

// Function to navigate to the card.html page with parameters
function navigateToCardPage(category, subcategory) {
    var url = "card.html?category=" + encodeURIComponent(category) + "&subcategory=" + encodeURIComponent(subcategory);
    window.location.href = url;
}

// Function to handle the back button click
document.getElementById("backButton").addEventListener("click", function () {
    // Show the buttonsContainer and hide the subcategories and the back button
    document.getElementById("buttonsContainer").style.display = "block";
    document.getElementById("subcategories").style.display = "none";
    document.getElementById("backButton").style.display = "none";
    
    // Reset the page title
    document.getElementById("pageTitle").textContent = "Media Matcher";
});

// Add event listeners to the category buttons
document.getElementById("genreButton").addEventListener("click", function () {
    handleButtonClick("Genre");
});

document.getElementById("decadeButton").addEventListener("click", function () {
    handleButtonClick("Decade Released");
});

document.getElementById("languageButton").addEventListener("click", function () {
    handleButtonClick("Language");
});

document.getElementById("awardButton").addEventListener("click", function () {
    handleButtonClick("Award-Winning");
});

document.getElementById("randomButton").addEventListener("click", function () {
    // Define an array of categories
    var categories = ["Genre", "Decade Released", "Language", "Award-Winning"];
    
    // Pick a random category from the array and handle the click
    var randomCategory = categories[Math.floor(Math.random() * categories.length)];
    handleButtonClick(randomCategory);
});