const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", () => {

document.querySelector(".card").innerHTML = `

<img src="nina.jpg" class="photo" alt="Nina">

<h1>Dear Nina ❤️</h1>

<p class="letter">

I wasn't trying to make something perfect.

I just wanted to make something that was only for you.

Every time I see your smile,
it makes the day feel a little brighter.

I love your smile.

I love your eyes.

I love your laugh.

I love your kindness.

And I love the little things that make you... you.

Maybe these are just simple words,

but every single one is true.

Thank you for being someone so special.

❤️

Forever Yours,

<b>Utpal</b>

</p>

<button id="againBtn">Read Again ❤️</button>

`;

document.getElementById("againBtn").addEventListener("click", () => {
location.reload();
});

});
