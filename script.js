const app = document.getElementById("app");
const music = document.getElementById("music");

document.getElementById("startBtn").addEventListener("click", () => {

    if (music) {
        music.play().catch(()=>{});
    }

    app.innerHTML = `
    <section class="hero">

        <div class="glass">

            <h2>Dear Nina ❤️</h2>

            <p>
            I don't know if this little surprise can explain
            how much I appreciate you...
            <br><br>
            But every time you smile,
            the world feels a little brighter.
            <br><br>
            I love your smile,
            your eyes,
            your kindness,
            your laugh,
            your beautiful heart,
            and the way you make ordinary moments feel special.
            <br><br>
            Thank you for being you.
            <br><br>
            — Utpal ❤️
            </p>

            <button id="heartBtn">❤️ One Last Surprise</button>

        </div>

    </section>
    `;

    document.getElementById("heartBtn").onclick = showFinal;

});

function showFinal(){

    app.innerHTML = `
    <section class="hero">

        <div class="glass">

            <h2>Forever ❤️</h2>

            <p>

            No matter how many websites exist...

            This one will always remind me
            of the person I made
