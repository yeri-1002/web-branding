// 상단 버튼
const topB1 = document.querySelector('.sec-4 > .con > .top > .text > .button > .b-1');
const topB2 = document.querySelector('.sec-4 > .con > .top > .text > .button > .b-2');
const topB3 = document.querySelector('.sec-4 > .con > .top > .text > .button > .b-3');

// 하단 버튼
const bottomB1 = document.querySelector('.sec-4 > .con > .bottom > .text > .button > .b-1');
const bottomB2 = document.querySelector('.sec-4 > .con > .bottom > .text > .button > .b-2');
const bottomB3 = document.querySelector('.sec-4 > .con > .bottom > .text > .button > .b-3');

// 상단 hover 이벤트
[topB2, topB3].forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    topB1.style.backgroundColor = 'transparent';
    topB1.style.borderColor = '#0CC291';
    topB1.style.color = '#0CC291';
  });
  btn.addEventListener('mouseleave', () => {
    topB1.style.backgroundColor = '#0CC291';
    topB1.style.borderColor = 'transparent';
    topB1.style.color = '#FFF';
  });
});

// 하단 hover 이벤트
[bottomB2, bottomB3].forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    bottomB1.style.backgroundColor = 'transparent';
    bottomB1.style.borderColor = '#0CC291';
    bottomB1.style.color = '#0CC291';
  });
  btn.addEventListener('mouseleave', () => {
    bottomB1.style.backgroundColor = '#0CC291';
    bottomB1.style.borderColor = 'transparent';
    bottomB1.style.color = '#FFF';
  });
});
