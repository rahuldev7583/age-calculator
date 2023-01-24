let name = prompt(" Enter your name");
document.getElementById('head').innerHTML = "Hey " + name[0].toUpperCase() + name.slice(1).toLowerCase();
let date = new Date();
let cYear = date.getFullYear();
let cMonth = date.getMonth() + 1;
let cDay = date.getDate();
function run(){ 
  let bYear = document.getElementById('year').value;
   let bMonth = document.querySelector("#dropdown").value;;
   let bDay = document.getElementById('day').value;
  let sleepHour = 8;
   let rDay = cDay - bDay;
   let rMonth = cMonth - bMonth;
   let rYear = cYear - bYear;
   let result = "";
 function diff () {
   if(cDay >= bDay && cMonth >= bMonth){
    result = `<p class="bpara">You are ${rYear} years ${rMonth} months and ${rDay} days old.</p>`; 
   } else if(cDay < bDay && cMonth < bMonth){
     rDay = (cDay + 30) - bDay;
     rMonth = ((cMonth - 1) + 12) - bMonth;
     rYear = (cYear - 1) - bYear;
     result = `<p class="bpara">You are ${rYear} years ${rMonth} months and ${rDay} days old.</p>`;
   } else if(cMonth > bMonth && cDay < bDay){
     rDay = (cDay + 30) - bDay;
     rMonth = (cMonth - 1) - bMonth;
     rYear = cYear - bYear;
     result = `<p class="bpara">You are ${rYear} years ${rMonth} months and ${rDay} days old.</p>`;
   } else if(cDay > bDay && cMonth < bMonth){
     rDay = cDay - bDay;
     rMonth = (cMonth + 12) - bMonth;
     rYear = (cYear - 1) - bYear;
     result = `<p class="bpara">You are ${rYear} years ${rMonth} months and ${rDay} days old.</p>`;
   }
    let ageInDays = (rYear * 365) + (rMonth * 30) + rDay;
     let totalSleep = ageInDays * sleepHour;
     let totalSleepDays = Math.round(totalSleep / 24);
     let sleepYear = Math.trunc(totalSleepDays / 365);
     let sleepMonth = Math.trunc((totalSleepDays % 365) / 30);
     let sleepDay = (totalSleepDays % 365) % 30;
     let sen = `<p class="para">If you sleep 8hr per day which we most of us do. <span>It means you slept ${sleepYear} years ${sleepMonth} months and ${sleepDay} days.</span> We spend around 2hr per day on eating, bathing, cleaning etc and nowadays we spend around 2hr per day on our phone. It means you spend ${sleepYear / 2} years ${sleepMonth / 2} months and ${sleepDay / 2} days on just eating, bathing and scrolling your phone.</p>`;
     return result + sen;
 };
document.getElementById('form').innerHTML = diff();
}