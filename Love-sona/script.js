const febHolidays = [
  "Дорогой малыш, пожалуйста, почувствуй это",
  "Пожалуйста, это цикл любви, ощущай его хорошо",
  "Ты и друг, и любовь 😊",
  "Ты единственный и тысяча в одном 🤩",
  "В горе ты, в счастье ты 🤨",
  "В жизненном пути ты для меня достаточно ❤",
  "Я любил тебя с большой страстью, я тебя люблю ❤️",
  "Ты мое все ✔",
  "Ты моя родственная душа ✨💕",
  "И, конечно... подожди, малыш.....",
  "Моя будущая жена 🤭",
  "Я всегда буду рядом с тобой",
  "Неважно, как далеко мы находимся 🥰",
  "Я обещаю, что никогда не подведу тебя",
  "Ты самая красивая, самая милая, самая смешная,",
  "самая сладкая девушка на свете. 🤞✍",
  "В одном слове, ты просто идеальна. 😍",
  "Я самый счастливый человек на свете 🥰",
  "Я так благодарен, что встретил тебя ❤️",
  "Я всегда буду стараться, чтобы ты была счастлива 🥺",
  "Я всегда с тобой 🤞✔",
  "Никогда не считай себя одинокой 💓",
  "Ты самый особенный человек в моей жизни 🥰",
  "Я не хочу тебя терять 😒",
  "И поверь мне, я не хочу никого другого 🥰",
  "Нет никого лучше тебя ❤️",
  "Ты лучший, малыш!! 💖",
  "Или я должен сказать, что я скучаю по тебе, когда",
  "что-то действительно хорошее происходит 🤨",
  "Мне нравятся те моменты, которые я провел с тобой",
  "виртуально или оффлайн 💓",
  "Были трудности, 😢",
  "но мы преодолели большинство из них 🥰",
  "и это дало мне понять, насколько",
  "ты важна в моей жизни ❤️",
  "Этот полный цикл любви только для тебя, 😘",
  "моя безусловная любовь, моя частная переменная 💖",
  "Пожалуйста, береги любовь, которая действительно любит тебя ❤",
  "Я бинарен в любви; ты единственная '1' в моей жизни",
  "Спасибо Богу за помощь нам, что мы встретились 🙏",
  "Ты любовь моей жизни,",
  "Я так тебя люблю ❤️"
];

const ulEl = document.querySelector("ul");
const d = new Date();
let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
let activeIndex = daynumber;
const rotate = -360 / febHolidays.length;
init();
function init() {
  febHolidays.forEach((holiday, idx) => {
    const liEl = document.createElement("li");
    liEl.style.setProperty("--day_idx", idx);
    liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1
      }</time><span>${holiday}</span>`;
    ulEl.append(liEl);
  });
  ulEl.style.setProperty("--rotateDegrees", rotate);
  adjustDay(0);
}
function adjustDay(nr) {
  daynumber += nr;
  ulEl.style.setProperty("--currentDay", daynumber);
  const activeEl = document.querySelector("li.active");
  if (activeEl) activeEl.classList.remove("active");
  activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
  const newActiveEl = document.querySelector(
    `li:nth-child(${activeIndex + 1})`
  );
  document.body.style.backgroundColor = window.getComputedStyle(
    newActiveEl
  ).backgroundColor;
  newActiveEl.classList.add("active");
}
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      adjustDay(-1);
      break;
    case "ArrowDown":
      adjustDay(1);
      break;
    default:
      return;
  }
});
