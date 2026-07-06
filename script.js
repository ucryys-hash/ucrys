const app = document.getElementById("app");

document.getElementById("startBtn").addEventListener("click", () => {

app.innerHTML = `
<div class="container">

<img src="nina.jpg" class="profile">

<h1>Dear Nina ❤️</h1>

<p class="letter">

I don't know if I'm good at expressing my feelings,

but I know one thing...

meeting you has made my days a little happier.

Your smile is beautiful.

Your eyes are beautiful.

Your laugh is beautiful.

Your kindness is beautiful.

And the person you are...

is even more beautiful.

I don't need perfect words.

I just wanted to make something that would remind you

that someone smiles whenever they think of you.

Thank you for being you.

❤️

Forever Yours,

<b>Utpal</b>

</p>

<button onclick="location.reload()">
Read Again ❤️
</button>

</div>
`;

});
