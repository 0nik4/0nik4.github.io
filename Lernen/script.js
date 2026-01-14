"use strict";
let all = 0; 
let seitou = 0;
let gotou = 0;
let crc = "";
let stant = document.getElementById("stats");
let quiz = document.getElementById("word");
let trans = document.getElementById("japanese");
let correct = document.getElementById("correct");
const derbutton = document.getElementById("der");
const diebutton = document.getElementById("die");
const dasbutton = document.getElementById("das");

const words = [
  ["der", "Mann", "男"],
  ["der", "Mittag", "正午"],
  ["der", "Vormittag", "午前"],
  ["der", "Nachmittag", "午後"], // いぬ 
  ["der", "Morgen", "朝"],
  ["der", "Abend", "夕方"],
  ["der", "Tag", "日"],
  ["der", "Montag", "月曜日"],
  ["der", "Dienstag", "火曜日"],
  ["der", "Mittwoch", "水曜日"],
  ["der", "Donnerstag", "木曜日"],
  ["der", "Freitag", "金曜日"],
  ["der", "Samstag", "土曜日"],
  ["der", "Sonntag", "日曜日"],
  ["der", "Junge", "少年、男の子"],
  ["der", "Anfang", "初め、始まり"],
  ["der", "Angesteller", "会社員"],
  ["die", "Frau", "女"],
  ["die", "Uhr", "〜時（時刻）"],
  ["die", "Minute", "〜分（時刻）"],
  ["die", "Sekunde", "〜秒（時刻）"],
  ["die", "Mitternacht", "真夜中"],
  ["die", "Nacht", "夜"],
  ["die", "Woche", "週"],
  ["die", "Gebrut", "誕生"],
  ["die", "Taufe", "洗礼"],
  ["die", "Kindheit", "子供時代"],
  ["die", "Achtung", "注意、尊敬"],
  ["die", "Adresse", "住所、宛名"],
  ["die", "Angestelle", "女性会社員"],
  ["die", "Angst", "不安"],
  ["die", "Antwort", "返事"],
  ["das", "Kind", "子供"],
  ["das", "Leben", "人生、生命、生活"],
  ["das", "Baby", "赤ちゃん"],
  ["das", "Kleinkind", "幼児"],
  ["das", "Mädchen", "少女、女の子"],
  ["das", "Knabenalter", "少年時代"]
];

function getRandom() {
  let result = Math.floor(Math.random() * words.length);
  return result;
}

function reset() {
  let word = words[getRandom()];
  crc = word[0];
  quiz.textContent = word[1];
  trans.textContent = word[2];
}

reset();

{
  derbutton.addEventListener("click", () => {
    const A = "der";
    judgeAnswer(A);
  });
  diebutton.addEventListener("click", () => {
    const A = "die";
    judgeAnswer(A);
  });
  dasbutton.addEventListener("click", () => {
    const A = "das";
    judgeAnswer(A);
  });
}

function judgeAnswer(answer) {
  all += 1;
  console.log(answer + crc);
  if (crc != answer) {
    correct.textContent = "不正解、正解は" + crc + "です";
    gotou += 1;
  } else { 
    correct.textContent = "正解";
    seitou += 1;
  };
  stats.textContent = "問題数：" + all + "｜正答数：" + seitou + "｜誤答数：" + gotou + "｜正答率" + Math.floor((seitou / all) * 100) + "％";
  setTimeout(() => {
    reset();
    answer = "";
    correct.textContent = "";
  }, 1000);
}