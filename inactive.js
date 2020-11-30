const user = {
  name: "Qasim Asad",
  age: "25",
  city: "san francisco",
  lastActivity: new Date().getTime(),
};

const inactiveFirstStage = () => {
  console.log("User has been inactive for the past 1-2 minutes");
};

const inactiveSecondStage = () => {
  console.log("User has been inactive for the past 3-4 minutes");
};

const inactiveThirdStage = () => {
  console.log("User has been inactive for the past 5-6 minutes");
};

// this is the main method that acts like a worker and runs every 1 minute
setInterval(function () {
  // please write your code here
  var time = new Date().getTime() - user.lastActivity;
  if (time / 1000 >= 1 && time / 1000 <= 2) {
    inactiveFirstStage();
  }
  if (time / 1000 >= 4 && time / 1000 <= 5) {
    inactiveSecondStage();
  }
  if (time / 1000 >= 6 && time / 1000 <= 7) {
    inactiveThirdStage();
  }
}, 1000);
