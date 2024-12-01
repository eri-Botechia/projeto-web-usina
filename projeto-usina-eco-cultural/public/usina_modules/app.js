const getElementHTML = (getLocationPath) => {
    const split2Confirm = getLocationPath.split('/').pop();
    if (split2Confirm === "/") {
        const elementHTML = "idContent-0"
        return elementHTML
    } else {
        let elementHtml;
        switch (split2Confirm) {
            case "coletivo":
                elementHtml = "idContent-1"
                return elementPageHtml
                break;
            case "timeline":
                elementHtml = "idContent-2";
                return elementPageHtml
                break;
            case "blog":
                elementHtml = "idContent-3"
                return elementPageHtml
                break;
            case "eventos":
                elementHtml = "idContent-4";
                return elementPageHtml
                break;
            case "doe":
                elementHtml = "idContent-5"
                return elementPageHtml
                break;
            case "produtos":
                elementHtml = "idContent-6";
                return elementPageHtml
                break;
            case "apoio-e-patrocinio":
                elementHtml = "idContent-7"
                return elementPageHtml
                break;
            case "contatos":
                elementHtml = "idContent-8";
                return elementPageHtml
                break;
            case "sign-in":
                elementHtml = "idContent-9";
                return elementPageHtml
                break;
            case "sign-up":
                elementHtml = "idContent-10";
                return elementPageHtml
                break;
            default:
                elementHtml = "idContent-11";
                return elementPageHtml
                break;
        }
    }
}

const getAndSetCurrentLocation = (getLocationPath, templates) => {
    const getLocationPath = window.location.href
    const element2Get = getElementHTML(getLocationPath)
    const templateOrder = Number(element2Get.split("-").pop())
    const element2Set = document.getElementById(element2Get)
    element2Set.innerHTML = templates[templateOrder]

}


const onLoad = (templates) => {
    const getLocationPath = window.location.href
    document.addEventListener("DOMContentLoaded", () => {
        getAndSetCurrentLocation(getLocationPath, templates)
    })
}

const executeOnLoad = onLoad(templates)

const main = () => {
    executeOnLoad()
}

main()