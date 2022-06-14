
function onTab() {
    let currentIndex;
    tabs.forEach( (element, index) => {
        element.classList.remove('tab_active');
        if (element === this) {
            currentIndex = index;
        }
    });
    this.classList.add('tab_active');
    
    tabContents.forEach( (element) => {
        element.classList.remove('tab__content_active');
    });
    tabContents[ currentIndex ].classList.add('tab__content_active');
}


const tabs = Array.from(document.querySelectorAll('.tab'));
tabs.forEach( (element) => {
    element.addEventListener('click', onTab);
});

const tabContents = Array.from(document.querySelectorAll('.tab__content'));
