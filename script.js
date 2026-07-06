const app = document.getElementById("app");

app.innerHTML = `
<div class="card">

<img src="nina.jpg" class="photo">

<h1>Hey Nina ❤️</h1>

<p class="text">
Before you continue...
<br><br>
Promise me you'll smile at least once today. 😊
</p>

<button id="open">
Open Surprise ✨
</button>

</div>
`;

document.getElementById("open").onclick=function(){

app.innerHTML=`

<div class="card">

<h1>❤️ Just One Thing ❤️</h1>

<p class="text">

I didn't make this website because I know how to code.

I made it because...

someone special deserves something made with time, not just words.

😊

</p>

<button id="next">
Continue →
</button>

</div>

`;

};
