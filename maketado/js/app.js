import blog from './templates/blog.js';
const btnBlog = document.getElementById('btnBlog');

const changeContent = (idBtn, element4Setup) => {
    let mainHTML = document.getElementById('main__content');
    idBtn.addEventListener('click', () => {
        mainHTML.innerHTML = element4Setup; // Atualiza o conteúdo ao clicar
    });
};

changeContent(btnBlog, blog);
