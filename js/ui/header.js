export {initListenersHeader, chamaDropdown}


// Dropdown
function chamaDropdown(event, dropdownContent) {
    if (event) event.stopPropagation(); 

    const el = document.getElementById(dropdownContent);
    if(el){
        el.classList.toggle("show");
    }else{
        console.log("Elemento não encotrado | ID:", dropdownContent)
    }
}

function initListenersHeader(){
    // Fecha dropdown ao clicar fora 
    window.onclick = function(event) {
        if (!event.target.matches('.dropdownBtn')) {
            var dropdowns = document.getElementsByClassName("dropdownContent");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }



}