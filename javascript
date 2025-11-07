document.addEventListener('DOMContentLoaded', () => {
    // HTML에서 원과 숫자 표시 요소를 가져옵니다.
    const clickCircle = document.getElementById('clickCircle');
    const clickCountSpan = document.getElementById('clickCount');

    let count = 0; // 숫자를 세기 위한 변수 초기화

    // 원을 클릭했을 때 실행될 함수를 정의합니다.
    clickCircle.addEventListener('click', () => {
        count++; // 숫자를 1 증가시킵니다.
        clickCountSpan.textContent = count; // 화면에 표시되는 숫자를 업데이트합니다.
        
        // 클릭할 때마다 원의 색상을 랜덤하게 바꾸는 추가 기능 (선택 사항)
        // const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        // clickCircle.style.backgroundColor = randomColor;
    });
});
