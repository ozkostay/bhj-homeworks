
const arrElements = Array.from(document.getElementsByClassName('menu__link'));

arrElements.forEach( (item) => {
    
    item.onclick = function() {
        const arrAllMenu = Array.from(document.querySelectorAll('.menu.menu_sub'));
        let subMenu = false;

        arrAllMenu.forEach ( (itm) => {
            if ( itm.parentElement === item.parentElement ) {
                if (itm.classList.contains('menu_active')) {
                    itm.classList.remove('menu_active')
                } else {
                    itm.classList.add('menu_active');
                }
                subMenu = true;
            }
        });
        
        if ( subMenu ) {
            return false;
        }
        
    }
});