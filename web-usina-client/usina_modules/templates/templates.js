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

export const renderTemplates = () => {
    const dataModalNewsletter = {
        targetId: 'sectionNewsletter',
        template: modalNewsletter
    };

    renderApp(dataModalNewsletter);
};

