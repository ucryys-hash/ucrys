// Premium Script
document.getElementById("app").innerHTML = `
<div class="card">
    <img src="nina.jpg" alt="Nina">

    <h1>Hey Nina ❤️</h1>

    <p>
        I made something just for you.<br><br>
        Click the button below...
    </p>

    <button id="openBtn">
        Open Surprise ✨
    </button>
</div>
`;

document.getElementById("openBtn").onclick = () => {
    alert("This is just the beginning ❤️");
};
