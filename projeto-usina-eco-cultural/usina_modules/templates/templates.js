import { BlogPage } from "./pages/blogPage.js";
import { ColetivoPage } from "./pages/coletivoPage.js";
import { ContatoPage } from "./pages/contatoPage.js";
import { HomePage } from "./pages/homePage.js";
import { modalNewsletter } from "./sections/modalNewsletter.js";

const renderApp = (data2Inject) => {
    document.addEventListener('DOMContentLoaded', () => {
        const { targetId, template } = data2Inject;
        const targetHTML = document.getElementById(targetId);
        if (targetHTML) {
            targetHTML.innerHTML = template;
        } else {
            console.error(`Elemento com ID "${targetId}" não encontrado.`);
        }
    });
};


const renderView = (data2Inject, changeBtn) => {
    const changeBtnElement = document.getElementById(changeBtn);
    
    changeBtnElement.addEventListener('click', () => {
        const { targetId, template } = data2Inject;
        const targetHTML = document.getElementById(targetId);
        if (targetHTML) {
            targetHTML.innerHTML = template;
        } else {
            console.error(`Elemento com ID "${targetId}" não encontrado.`);
        }
    });
};


export const renderTemplates = () => {
    const dataDefault = {
        targetId: 'contentId',
        template:   HomePage
    };

    const changeBtn1 = "btnNav1";
    const dataHome = {
        targetId: 'contentId',
        template:   HomePage
    };

    const changeBtn2 = "btnNav2";
    const dataColetivo = {
        targetId: 'contentId',
        template:   ColetivoPage
    };


    const changeBtn3 = "btnNav3";
    const dataBlog = {
        targetId: 'contentId',
        template:   BlogPage
    };



    const changeBtn6 = "btnNav6";
    const dataContato = {
        targetId: 'contentId',
        template:   ContatoPage
    };

    renderApp(dataDefault);
    renderView(dataHome, changeBtn1);
    renderView(dataColetivo, changeBtn2);
    renderView(dataBlog, changeBtn3);


    renderView(dataContato, changeBtn6);
};

