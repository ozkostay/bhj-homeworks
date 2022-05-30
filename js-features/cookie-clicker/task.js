
const cookieId = document.getElementById('cookie');
const clickerCounterId = document.getElementById('clicker__counter');

cookieId.onclick = function() {
    clickerCounterId.textContent = ( Number(clickerCounterId.textContent ) + 1).toString();
    let oldWidth = cookieId.width;
    let oldHeight = cookieId.height;
    cookieId.width = oldWidth * 1.1;
    cookieId.height = oldHeight * 1.1;
    const timer = window.setTimeout(() => {
        cookieId.width = oldWidth;
        cookieId.height = oldHeight;
    }, 100);
}

