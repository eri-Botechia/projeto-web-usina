import blog from './template-informativos/blog.js';
import home from './template-gerais/home.js';
import projeto from './template-informativos/projeto.js';
import usinaSkills from './template-acoes/usinaSkills.js';

const btnBlog = document.getElementById('btnBlog');
const btnHome = document.getElementById('btnHome');
const btnSkills = document.getElementById('btnSkills')

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
    changeContent(btnHome, home); 
    changeContent(btnSkills, usinaSkills);
    const btnProjetoH= document.getElementById('btnProjetoHero')
    changeContent(btnProjetoH, projeto)
});