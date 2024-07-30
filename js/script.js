const menubar = document.getElementsByClassName('menubar')[0];
const navtag = document.getElementsByClassName('navtag')[0];
const cross = document.getElementsByClassName('cross')[0];


const menubaropen = () => {
    navtag.classList.add("navtagshow");
    menubar.style.display = 'none';
    // console.log('hello');
}

const closemanubar = () => {
    navtag.classList.remove("navtagshow");
    menubar.style.display = 'block';
}



menubar.addEventListener('click', menubaropen);
cross.addEventListener('click', closemanubar);

