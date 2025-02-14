let shareContainer = document.querySelector('.share-pop');
let shareBtn = document.querySelector('.share-btn');


shareBtn.onclick = function() {
    shareContainer.classList.toggle('active');
}