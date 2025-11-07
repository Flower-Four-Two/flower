document.addEventListener('DOMContentLoaded', () => {
    // HTML에서 클릭 영역과 숫자 표시 요소를 가져옵니다.
    const clickArea = document.getElementById('clickArea');
    const counterSpan = document.getElementById('counter');

    let count = 0; // 숫자를 세기 위한 변수 초기화

    // 클릭 영역을 클릭했을 때 실행될 함수를 정의합니다.
    clickArea.addEventListener('click', () => {
        count++; // 숫자를 1 증가시킵니다.
        counterSpan.textContent = count; // 화면에 표시되는 숫자를 업데이트합니다.
    });
});
