// Password Validation
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        let password = document.getElementById("password").value;
        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            event.preventDefault();
        }
    });
});

// Canvas Drawing
window.onload = function() {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    ctx.fillStyle = "blue";
    ctx.fillRect(20, 20, 100, 100);
};

// Dynamic SVG
document.addEventListener("DOMContentLoaded", function() {
    let svgContainer = document.getElementById("svg-container");
    svgContainer.innerHTML = `
        <svg width="1500" height="70">
            <rect width="1500" height="70"  fill="black" />
            <text x="50" y="55" fill="white" font-size="20">copyright@yordi.web development</text>
        </svg>
    `;
});
    
