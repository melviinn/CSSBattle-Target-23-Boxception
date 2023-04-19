const dropdown1 = document.getElementById("dropdown-content");
const dropdown2 = document.getElementById("dropdown-content2");
const dropdown3 = document.getElementById("dropdown-content3");
const hint = document.getElementById("hint");
const hintDiscord = document.getElementById("hintDiscord");
const hintTwitter = document.getElementById("hintTwitter");
const discord = document.getElementById("iconDiscord");
const twitter = document.getElementById("iconTwitter");
const mail = document.getElementById("iconMail");
const hintMail = document.getElementById("hintMail");
const buttonValider = document.getElementById("mouseoverBox")

function openDropdown() {
    dropdown1.classList.toggle("show");
}

function openDropdown2() {
    dropdown2.classList.toggle("show");
}

function openDropdown3() {
    dropdown3.classList.toggle("show");
}

buttonValider.addEventListener("mouseover", func, false);
buttonValider.addEventListener("mouseout", func, false);
discord.addEventListener("mouseover", func1, false);
discord.addEventListener("mouseout", func1, false);
twitter.addEventListener("mouseover", func2, false);
twitter.addEventListener("mouseout", func2, false);
mail.addEventListener("mouseover", func3, false);
mail.addEventListener("mouseout", func3, false);

function func() {
    hint.classList.toggle("show");
}

function func1() {
    hintDiscord.classList.toggle("show");
}

function func2() {
    hintTwitter.classList.toggle("show");
}

function func3() {
    hintMail.classList.toggle("show");
}