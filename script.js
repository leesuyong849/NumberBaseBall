window.onload=function () {
    nums = [];
    let i = 0;
    while (i < 3) {
        let n = Math.floor(Math.random() * 10) ;
        if (! sameNum(n)) {
            nums.push(n);
            i++;
        }
    }
    function sameNum (n) {    return nums.find((e) => (e === n));  }

    console.log(nums)
    num1 = nums[0];
    num2 = nums[1];
    num3 = nums[2];

    counterlimit = Math.random() * 10;
}

function check_numbers() {
    let input1 = document.getElementById("number1").value;
    let input2 = document.getElementById("number2").value;
    let input3 = document.getElementById("number3").value;
    console.log(input3);

    if (input1 === '' || input2 === '' || input3 === '') {
        console.log("error");
        input1.value = '';
        input2.value = '';
        input3.value = '';
        return;
    }

    let inputs = [];
    inputs.push(input1, input2, input3)

    let s = 0;
    let b = 0;

    for (let i = 0; i <3; i++) {
        for (let j =0; j<3; j++) {
            if (nums[i] === inputs[j]) {
                if (i === j) {
                    s++;
                } else {
                    b++;
                }
            }
        }
    }

    const container = document.createElement('div');
    container.className('check-result');

    const out = document.createElement('div');
    out.className= 'left';
    out.innerText = input1 + input2 +input3;
    container.appendChild(out);

    const rightCon = document.createElement('div');
    rightCon.className= 'right';

    if (s === 0 && b === 0) {
        rightCon.innerHTML = '<div class="out num-result">O</div>';
    } else {
        rightCon.innerHTML = s + ' <div class="strike num-result">S</div> ' + b + ' <div class="ball num-result">B</div>';
    }
    container.appendChild(rightCon);

    const displayer = document.getElementById('result-display');
    displayer.appendChild(container);

    if (s === 3) {
        let elementById = document.getElementById('result-display');
        let resultImg = document.createElement('img');
        resultImg.className('result-display');
        resultImg.src = 'success.png';
        elementById.appendChild(resultImg);
    }


    //실패한 경우
    counter--;
    if (counter === 0) {
        const click = document.getElementsByClassName("submit-button");
        click.innerHtml = '<button className="submit-button">확인하기</button>';
        let elementById = document.getElementById('result-display');
        let resultImg = document.createElement('img');
        resultImg.className('result-display');
        resultImg.src = 'fail.png';
        elementById.appendChild(resultImg);
    }
}

function inputCheck(input1, input2, input3) {
    if (input1 == null || input2 == null || input3 == null) {
        console.log("error");
        input1.value = null;
        input2.value = null;
        input3.value = null;
        return false;
    }
    return true;
}