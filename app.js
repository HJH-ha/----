// alert("test");
let show = true; // 불린형태 , 메뉴 보이기
const container = document.querySelector(".container");
const menu = document.getElementById("menu");
const add = document.getElementById("add");
const items = document.querySelectorAll(".item");
const numbers = ["one", "two", "three", "four", "five", "six"];

container.addEventListener("click", () => {
  // alert("클릭");
  if (show) {
    add.style.transform = "rotate(45deg)"; // 45회전
    menu.style.transform = "scale(1)";

    //반복문
    //items.forEach((item, i) => item.classList.add(numbers[i]));
    // items[0].classList.add("one");
    // items[1].classList.add("two");
    // items[2].classList.add("three");
    // items[3].classList.add("four");
    // items[4].classList.add("five");
    // items[5].classList.add("six");
    for (let i = 0; i < items.length; i++) {
      items[i].classList.add(numbers[i]);
    }
    show = false; // 한번 더 클릭시 else문으로 감
  } else {
    add.style.transform = "rotate(0deg)"; // 0도로 돌림
    menu.style.transform = "scale(.9)";

    // 위에 추가한 클래스들을 제거, add를 remove로 변경 toggle은 항상 반대로
    // items.forEach((item, i) => item.classList.remove(numbers[i]));
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove(numbers[i]);
    }

    //show를 다시 반대로 설정 , 다시 누르면 펼쳐짐
    show = true;
  }
});
