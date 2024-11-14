import blog from './template-informativos/blog.js';
import home from './template-gerais/home.js';
import projeto from './template-informativos/projeto.js';
import usinaLab from './template-acoes/usinaLab.js';
import coletivo from './template-informativos/coletivo.js';
import historia from './template-informativos/historia.js';
import templates from './templates.js';


const btnBlog = document.getElementById('btnBlog');
const btnHome = document.getElementById('btnHome');
const btnHistoria = document.getElementById('btnHistoria');
const btnLab = document.getElementById('btnLab')
const btnColetivo = document.getElementById('btnColetivo')



const defaultTemplate = templates.home;
// Function to load initial content
const initialContent = () => {
    const mainHTML = document.getElementById('main__content');
    mainHTML.innerHTML += home; // Load initial content
};

// Function to change content based on button click
const changeContent = (button, content) => {
    button.addEventListener('click', () => {
        const mainHTML = document.getElementById('main__content');
        mainHTML.innerHTML = content; // Update content on click
    });
};

// Set up event listeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initialContent(); // Load initial content
    changeContent(btnBlog, blog); // Set up Blog button
    changeContent(btnHome, defaultTemplate); 
    changeContent(btnLab, usinaLab);
    changeContent(btnColetivo, coletivo);
    changeContent(btnHistoria, historia);
    const btnProjetoH= document.getElementById('btnProjetoHero')
    changeContent(btnProjetoH, projeto)
});