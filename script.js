var wakeuptime = 8;
var lunchtime = 13;
var naptime = lunchtime + 2;
var partytime;
var workouttime = 17;
var evening = 16;

// Getting it to show the current time on the page
var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + "!";
 
    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function() 
{
  var time = new Date().getHours();
  var messageText;
  var image = "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/avengers-endgame-ny2012-directorsandcast.jpg";

  var timeEventJS = document.getElementById("timeEvent");
  var imageJS = document.getElementById('Image');
  
  if (time == partytime)
  {
    image = "https://qph.fs.quoracdn.net/main-qimg-49c09ef49c461006b9fb6513e3767ebf";
    messageText = "Avengers!!..Let's party!";
  }
  else if (time == wakeuptime)
  {
    image = "https://i.ytimg.com/vi/1Rg8T_s4_Qc/maxresdefault.jpg";
    messageText = "Wake up!";
  }
  else if (time == lunchtime)
  {
    image = "https://fastly.syfy.com/sites/syfy/files/styles/1140x640_hero/public/2019/04/the_hulk_ben_and_jerrys.png?offset-x=0&offset-y=0";
    messageText = "Time for lunch!";
  }
  else if (time == naptime)
  {
    image = "https://static0.cbrimages.com/wordpress/wp-content/uploads/2018/07/captain-america-first-avenger.jpg";
    messageText = "Sleep tight!";
  }
  else if (time == workouttime)
  {
      image = "https://am24.mediaite.com/tms/cnt/uploads/2020/04/bro-thor-endgame.jpg";
      messageText = "It's time to lift some weights!";
  }
  else if (time < 12)
  {
    image = "https://cosmicbook.news/sites/default/files/styles/image_header/public/avengers-endgame-art-book.jpg?itok=vYvb09Q2";
    messageText = "Good morning!";
  }
  else if (time >= evening)
  {
    image = "https://www.shuspectra.com/wp-content/uploads/2016/11/Doctor-Strange.jpg";
    messageText = "I am here to say Good evening!";
  }
  else
  {
    image = "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/avengers-endgame-ny2012-directorsandcast.jpg";
    messageText = "Good afternoon!";
  }

  console.log(messageText); 
  timeEventJS.innerText = messageText;
  imageJS.src = image;
  
  showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);


// Getting the Party Time Button To Work
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function()
{
    if (partytime < 0) 
    {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent(); 


// Activates Wake-Up selector
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var napTimeSelector =  document.getElementById("napTimeSelector");

var napEvent = function()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);

// Activates Workout-Time selector
var workoutTimeSelector = document.getElementById("workoutTimeSelector");

var workoutEvent = function()
{
    workouttime = workoutTimeSelector.value;
};

workoutTimeSelector.addEventListener("change",workoutEvent);