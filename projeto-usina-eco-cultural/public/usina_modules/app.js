import { templates } from './templates/pages/pages.js';

const getElementPageHtml = () => {
    const getLocationPath = window.location.href;
    const split2Confirm = getLocationPath.split('/').pop();
    if (split2Confirm === "/") {
        let elementPageHtml = "idContent-0";
        return elementPageHtml;
    } else {
        let elementPageHtml;
        switch (split2Confirm) {
            case "usina":
                elementPageHtml = "idContent-0";
                return elementPageHtml;
            case "coletivo":
                elementPageHtml = "idContent-1";
                return elementPageHtml;
            case "timeline":
                elementPageHtml = "idContent-2";
                return elementPageHtml;
            case "blog":
                elementPageHtml = "idContent-3";
                return elementPageHtml;
            case "eventos":
                elementPageHtml = "idContent-4";
                return elementPageHtml;
            case "doe":
                elementPageHtml = "idContent-5";
                return elementPageHtml;
            case "produtos":
                elementPageHtml = "idContent-6";
                return elementPageHtml;
            case "apoio-e-patrocinio":
                elementPageHtml = "idContent-7";
                return elementPageHtml;
            case "contatos":
                elementPageHtml = "idContent-8";
                return elementPageHtml;
            case "sign-in":
                elementPageHtml = "idContent-9";
                return elementPageHtml;
            case "sign-up":
                elementPageHtml = "idContent-10";
                return elementPageHtml;
            default:
                elementPageHtml = "idContent-11";
                return elementPageHtml;
        }
    }
}

const getAndSetCurrentLocation = () => {
    const element2Get = getElementPageHtml();
    const templateOrder = Number(element2Get.split("-").pop().toString());
    console.log(element2Get);
    console.log(templateOrder);
    let element2Set = document.getElementById(element2Get);
    if (element2Set) {
        element2Set.innerHTML = templates[templateOrder];
    } else {
        console.error(`Element with ID ${element2Get} not found.`);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    getAndSetCurrentLocation();
});