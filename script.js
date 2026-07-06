const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", function () {

document.querySelector(".container").innerHTML = `

<img src="nina.jpg" class="profile" alt="Nina">

<h1>Dear Nina ❤️</h1>

<p class="letter">

I don't know if these words are perfect...

But they are honest.

Every time I think about you,
I end up smiling.

I love your smile.

I love your eyes.

I love your laugh.

I love your kindness.

I love the little things that make you... you.

Thank you for being such a beautiful part of my thoughts.

I hope this tiny surprise made you smile.

❤️

Forever Yours,

<b>Utpal</b>

</p>

<button id="backBtn">Read Again ❤️</button>

`;

document.getElementById("backBtn").addEventListener("click", function () {
location.reload();
});

});
