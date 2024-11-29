//import { renderTemplates } from "./templates/templates.js";

/*const useFetch = async (urlBase, path = "", headers = {}) => {
    const url = new URL(`${urlBase}/${path}`);
    try {
        const response = await fetch(url, headers);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('There was an error', error);
        return null;
    } finally {
        console.log('Fetch request finished.');
    }
};

const fetchApi = async (urlBase, path, reqMethod = "GET") => {
    const headers = {
        method: reqMethod,
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return await useFetch(urlBase, path, headers);
};

const renderDataList = (data) => {
    // Verifica se a resposta contém a propriedade 'jokes' e se é um array
    if (!data || !data.jokes || !Array.isArray(data.jokes)) {
        console.error('Expected data to be an object with a jokes array, but got:', data);
        return '<div class="dynamic-content container" id="content"><ul class="row"></ul></div>';
    }
    
    const dataList = data.jokes.map(item => `
        <li class="col-8 col-md-5 col-lg-4 bg-light m-3 rounded p-2 card">
            ${item.setup || item.joke}
        </li>
    `).join('');

    return `<div class="dynamic-content container" id="content"><ul class="row">${dataList}</ul></div>`;
};

const fetchRender = async (urlBase, path = "", reqMethod = "GET", targetId = "content", template2Render = renderDataList) => {
    const data = await fetchApi(urlBase, path, reqMethod);
    const target = document.getElementById(targetId);
    if (target) {
        target.innerHTML = template2Render(data);
    }
};

// Altere a URL se necessário
fetchRender('https://v2.jokeapi.dev/joke', 'Any?lang=pt&amount=10');



const date = moment();
const currentDate = date.format('D/MM/YYYY');
console.log(currentDate); // "17/06/2022"

const dateEmpthyHTML = document.getElementById('datetimeEmpthy')

if(dateEmpthyHTML){
    dateEmpthyHTML.innerHTML = currentDate
}
*/

//renderTemplates()




const listOptionsNav = [

    {
        id: 'btnNav1',
        content: 'HOME',
        param: 1,
        
    }
,
{
    id: 'btnNav2',
    content: 'PROJETO',
    param: 2,
    
}
,
{
    id: 'btnNav3',
    content: 'BLOG',
    param: 3,
    
},
{
    id: 'btnNav4',
    content: 'LOJINHA',
    param: 4,
    
}
,{
    id: 'btnNav5',
    content: 'EVENTOS',
    param: 5,
    
}
{
    id: 'btnNav6',
    content: 'CLUB',
    param: 6,
    
},
{
    id: 'btnNav7',
    content:'CONTATO',
    param: 7,
    
}
]




const listNavbar = `
           <li class="nav-item" id=item-${id}>
          <button class="nav-link active text-dark" aria-current="page" id="btnNav1">${content}</button>
        </li>
`


const mapNav = (lista, elementHTML, template)=>{
  lista.map((el, indice , template)=>{
      const {id , content, param} = el
      const element = document.getElementById(elementHTML)
      const templateRender = `<li class="nav-item" id=item-${id}>
      <button class="nav-link active text-dark" aria-current="page" id="btnNav1">${content}</button>
    </li>`
   
  })
}


const templateDropdown = `               \
                    <ul class="dropdown-menu dropdown-menu-light drop-orange">
                        <li class="drop-orange">
                          <button class="dropdown-item nav-link  drop-orange" id="dropClub1">POR QUE PARTICIPAR?</button></li>
                        <li>
                          <hr class="dropdown-divider">
                        </li>
                        <li><button class="dropdown-item nav-link  drop-orange" id="dropClub2">LOGIN</button></li>
                        <li>
                          <hr class="dropdown-divider">
                        </li>
                        <li class="drop-orange">
                          <button class="dropdown-item nav-link  drop-orange" id="dropClub3">CADASTRO</button>
                        </li>
                        <li>
                          <hr class="dropdown-divider">
                        </li>
                        <li class="drop-orange">
                          <button class="dropdown-item nav-link  drop-orange" id="dropClub4">RECUPERAR SENHA</button>
                        </li>
                      </ul>
`





const renderView= (template, el, target)=>{
 const btnElement = document.getElementById(el)
 btnElement.addEventListener('click',()=>{
    const targetElement = document.getElementById(target);    
        targetElement.innerHTML = template
 })




}


const changeView = (lista, id)=>{
    const trueId = id[id.length - 1]
    listItem  = lista[trueId-1]



    switch (listItem) {
        case 0:
            const dataItem = lista[listItem]
            mapList(dataItem, listNavbar. )
            break;
    
        default:
            break;
    }
}