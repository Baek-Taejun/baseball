const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 게임 생성
function generatedRandomNumber() {
  var randomNums = new Set();
  while (randomNums.size < 3) {
    var randomNum = Math.floor(Math.random() * (10 - 0) + 0);
    randomNums.add(randomNum);
  }
  return [...randomNums].join("");
}

// 게임 스타트
function playGame() {
  var generatedNumber = generatedRandomNumber();
  // console.log("생성된 3자리 수:", generatedNumber);

  // 사용자 입력값 입력
  rl.question("세 자리 숫자를 입력하세요: ", function checkAnswer(userInput) {
    console.log("사용자 입력:", userInput);

    // 볼 초기화
    var strikeCount = 0;
    var ballCount = 0;

    //판단
    for (var i = 0; i < userInput.length; i++) {
      if (userInput[i] === generatedNumber[i]) {
        strikeCount++;
      } else if (generatedNumber.includes(userInput[i])) {
        ballCount++;
      }
    }

    console.log("스트라이크(S):", strikeCount);
    console.log("볼(B):", ballCount);

    // 정답 및 리겜
    if (strikeCount == 3) {
      console.log("정답");
      rl.question("Re Game (yes/no)", function (answer) {
        if (answer.toLowerCase() === "yes") {
          playGame();
        } else {
          rl.close();
        }
      });
    } else {
      rl.question("세 자리 숫자를 입력하세요:", checkAnswer);
    }
  });
}

playGame();
