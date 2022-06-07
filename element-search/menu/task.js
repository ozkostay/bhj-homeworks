
const arrElements = Array.from(document.getElementsByClassName('menu__link'));

arrElements.forEach( (item) => {
    
    item.onclick = function() {
        const arrAllMenu = Array.from(document.querySelectorAll('.menu.menu_sub'));
        let subMenu = false;

        arrAllMenu.forEach ( (itm) => {
            itm.className = 'menu menu_sub';
            if ( itm.parentElement === item.parentElement ) {
                itm.className = 'menu menu_sub menu_active';
                subMenu = true;
            }
        });
        
        if ( subMenu ) {
            return false;
        }
        
    }
});