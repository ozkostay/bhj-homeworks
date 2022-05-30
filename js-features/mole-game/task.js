
function getHole(index) {
    const hole = document.getElementById(`hole${index}`);
    hole.onclick = () => {
        if (hole.className.includes( 'hole_has-mole' )) {
            let dead = document.getElementById('dead');
            dead.textContent = ( Number(dead.textContent) + 1 ).toString();
        } else {
            let lost = document.getElementById('lost');
            lost.textContent = ( Number(lost.textContent) + 1 ).toString();
        }
    }
}

for (i = 1; i < 10; i++ ) {
    getHole(i);
}
    