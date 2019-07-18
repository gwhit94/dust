// Collapsible button
var coll = document.getElementsByClassName("projectsDrop");
var i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = document.getElementsByClassName("projectLink");  
        for (i = 0; i < content.length; i++) {
            var link = content[i];
            if (link.style.display === "block") {
            link.style.display = "none";
            } else {
            link.style.display = "block";
            }
        };
    });
} 