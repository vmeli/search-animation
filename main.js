var btnSearch = document.getElementById('btn-MainMenu-search-desktop');
var inputSearch = document.getElementById('MainList__search');	
var closeInputSearch = document.getElementById('btn-MainMenu-close-desktop');
var list = document.getElementById('MainList-ul__list');	

btnSearch.onclick = function(e){
    e.preventDefault(); 
    inputSearch.classList.add('is-visible');
    list.classList.add('rotate');
};

closeInputSearch.onclick =function() {
	inputSearch.classList.remove('is-visible');	
};

