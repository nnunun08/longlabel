// 무한스크롤 이벤트로 새로운 아이템 추가 시 스크립트 재실행으로 본래 크기 체크후 CSS Grid로 재렌더링이 필요합니다.

const delay = 50;
let timer = null;
window.addEventListener('resize', function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
        const masonry = document.querySelector(".masonry");
        const target = document.querySelectorAll(".masonry .item");
        console.log(masonry)
        masonry.removeAttribute('style');
        if (window.innerWidth > 768) {
            target.forEach((item) => {
                // 본래 크기 확인을 위한 리셋
                item.removeAttribute('style');
                item.style.gridRowEnd = `span ${item.clientHeight + 20}`;
                item.style.width = '100%';
            });
        } else {
            target.forEach((item) => {
                // 본래 크기 확인을 위한 리셋
                item.removeAttribute('style');
                item.style.gridRowEnd = `span ${item.clientHeight + 10}`;
                item.style.width = '100%';
            });
        }
        masonry.style.display = "grid";
        masonry.style.gridAutoRows = "1px";
    }, delay);
});
window.onload = () => {
    const masonry = document.querySelector(".masonry");
    const target = document.querySelectorAll(".masonry .item");
    if (window.innerWidth > 768 ) {
        target.forEach((item) => {
            item.style.gridRowEnd = `span ${item.clientHeight + 20}`;
            item.style.width = '100%';
        });
    } else {
        target.forEach((item) => {
            item.style.gridRowEnd = `span ${item.clientHeight + 10}`;
            item.style.width = '100%';
        });
    }
    masonry.style.display = "grid";
    masonry.style.gridAutoRows = "1px";
}