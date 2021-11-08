# Debugging

- Breakpoints
- Watch
- Call Stack
- Step over / Step into / Step out

<br>

## Breakpoints

---

소프트웨어 개발에서 프로그램을 의도적으로 잠시 또는 아예 멈추게 하는 장소를 가리킨다.

이미 실행중인 프로그램에 대한 정보를 알아내기 위한 수단으로 사용.

프로그램이 예측한대로 기능하고 있는지, 그렇지 않은 경우 문제점이 무엇인지 알아낸다.

VS Code에서 코드라인 왼쪽 공백을 클릭 또는 코드라인 클릭 후 F9로 설정.

breakpoint를 설정하고 디버깅하면 break된 상황에 local, global various와 call stack을 볼 수 있다.

<br>

## Watch

---

코드의 실행에 따른 여러 개의 변수 또는 표현식의 값을 표시.

breakpoint 시점의 값을 보여준다. 입력한 표현식은 실행 과정 중에 계속해서 재평가 된다.

VS Code

Watch 섹션의 빈 공간을 더블클릭 하거나 우측 상단의 `+` 버튼을 클릭하여 검사하고자 하는 변수 또는 표현식을 추가할 수 있다.

현재 디버깅 중인 프로그램 안에 정의된 변수와 표현식이어야 한다.

<br>

## Call Stack

---

프로그램이 함수 호출을 추적할 때 사용.

각 function call 당 하나씩의 스택들로 이루어져 있다.

현재 실행 중인 서브루틴의 실행이 끝났을 때, 제어를 반환할 지점을 보관하기 위함이 주 목적이다.

스크립트에서 함수가 실행되면 함수를 추가하고 끝나면 콜스택에서 제거.

얘시)

```jsx
function firstFunc() {
  secondFunc();
  console.log("first");
}

function secondFunc() {
  thirdFunc();
  console.log("second");
}

function thirdFunc() {
  console.log("third");
}

firstFunc();
```

```jsx
/*

firstFunc() 호출하고 콜 스택으로 가게 된다.
-> secondFunc() 호출하고 콜 스택 위에 쌓는다.
-> thirdFunc() 호출하고 콜 스택 위에 쌓는다.
-> thirdFunc()의 실행이 끝났을 때, 스택에서 제거하고 값을 secondFunc()에게 반환해준다.
-> secondFunc()도 마찬가지로 스택에서 제거되고 값을 firstFunc()에 반환.
-> firstFunc() 실행 후 스택에서 제거

실행 결과
"third"
"second"
"first"

*/
```

<br>

## Step over / Step into / Step out

---

Step over: breakpoint 다음 라인을 실행. 함수가 있어도 실행 후 다음으로 넘어간다

Step into: step over와 마찬가지로 breakpoint 다음 라인을 실행. 다음 라인이 함수일 경우 함수 내부로 들어간다.

Step out: 함수를 끝까지 실행하고 호출시킨 곳으로 되돌아간다. 현재 함수의 리턴으로 이동한다. 즉 현재 함수를 빠져나온다.

<br>

## Reference

---

[https://ko.wikipedia.org/wiki/브레이크포인트](https://ko.wikipedia.org/wiki/%EB%B8%8C%EB%A0%88%EC%9D%B4%ED%81%AC%ED%8F%AC%EC%9D%B8%ED%8A%B8)

[https://ssminji.github.io/2020/02/19/call-stack/](https://ssminji.github.io/2020/02/19/call-stack/)

[https://velog.io/@proshy/VScode-디버깅-breakpoints-watch-step](https://velog.io/@proshy/VScode-%EB%94%94%EB%B2%84%EA%B9%85-breakpoints-watch-step)

[https://ko.javascript.info/debugging-chrome](https://ko.javascript.info/debugging-chrome)

[https://reese-dev.netlify.app/etc/vscode_debugging/](https://reese-dev.netlify.app/etc/vscode_debugging/)
