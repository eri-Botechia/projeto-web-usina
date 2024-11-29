
export const HeaderHeroNavbar = `<section class="hero">
        
<div class="hero-content">
  <div class="p-4  mb-4 rounded text-body-emphasis bg-light">
    <div class="container">
      <div class="grid">
    <div class="row hero-blog-header">
    <div class="col-lg-6 px-0  slider-title">
      <div class="text-center"><span class="spanH2">USINA</span>
      </div>
      <h2 class="headingH2">web</h2>
   
      <p>Bem-vindos ao blog da nossa Usina, nossa transformação, nosso Ipiranga!</p>
    </div>
    <div class="col-lg-6 ">
      <div class="row slider">
        <div class="col">
          <div class="carousel slide margin-slider" data-bs-ride="carousel" id="slider">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src="assets/bottom1_orange.png" alt="">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="assets/bottom2_green.png" alt="">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="assets/bottom3_blue.png" alt="">
              </div>
            </div>
  
            <button class="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Siguiente</span>
            </button>
  
            <div class="carousel-indicators">
              <button 
                type="button" 
                data-bs-target="#slider" 
                data-bs-slide-to="0" 
                class="active" 
                aria-current="true" 
                aria-label="Slideshow 1"
              ></button>
              <button 
                type="button" 
                data-bs-target="#slider" 
                data-bs-slide-to="1"
                aria-label="Slideshow 2"
              ></button>
              <button 
                type="button" 
                data-bs-target="#slider" 
                data-bs-slide-to="2"
                aria-label="Slideshow 3"
              ></button>
            </div>
          </div>
        </div>
      </div>	
    </div>
  </div>
</div>
</div>
</div>
</div>
</section>
<!--FIM DO HERO-->
<!--INICIO DO MODAL É COLOCADO AQUI PELO Z-INDEX  E PARA FUNCIONAR EM QUALQUER PAGINA-->
<section
class="modal "
id="modalNewsletter"
tabindex="-1"
aria-hidden="true"
aria-labelledby="label-modal-1"

>
<div class="modal-dialog">

<div class="modal-content">
<!-- Heading Modal-->	  
<div class="modal-header">
  <span class="text-secondary font-weight-bold">NEWSLETTER web</span>
  
  <button class="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
</div>


<div class="modal-body">
    <div class="modal-body-header">
      <span><strong class="font-weight-bold text-secondary">É GRÁTIS</strong>, receber noticias  no e-mail com o:</span>
      <br/>
      <h5> <strong class="font-weight-bold text-success">NEWSLETTER web </strong></h5>
      <p class="small text-secondary">Prencha o Formulário para receber todas as novidades em forma de boletim de notícias em seu e-mail e nos ajude a saber como nos conheceu!</p>
    </div>
    <div class="modal-body-content">
      <form>
        <div class="form-group">
          <label for="inputReceiverUser">Nome</label>
          <input type="email" class="form-control" id="inputReceiverUser" name="inputReceiverUser" aria-describedby="emailHelp" placeholder="ex: 'John Doe'">
        </div>
        <div class="form-group">
          <label for="inputReceiverEmail">Email</label>
          <input type="email" class="form-control" id="inputReceiverEmail" name="inputReceiverEmail" aria-describedby="emailHelp" placeholder="ex: 'john.doe@google.com'">
        </div>

        <div class="form-group my-4">
          <label for="inputReceiverMeetUsBy">Como você nos encontrou?</label>
        
            <!--name="inputReceiverMeetUsBy" id="inputReceiverMeetUsBy" -->
            <div class="container">
             
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="meetUsLinkedin" value="linkedin" checked=false>
                  <label class="form-check-label" for="meetUsLinkedin">Linkedin</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="meetUsFacebook" value="facebook" checked=false>
                  <label class="form-check-label" for="meetUsFacebook">Facebook</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="meetUsLinkedin" value="linkedin" checked=false>
                <label class="form-check-label" for="meetUsLinkedin">Linkedin</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="meetUsFacebook" value="facebook" checked=false>
                <label class="form-check-label" for="meetUsFacebook">Facebook</label>
            </div>
          </div>
        </div>
        <div class="form-group">
        <button type="submit" class="btn btn-primary mt-4 mb-4 mx-2">Enviar</button>
        <button type="delete" class="btn btn-danger mt-4 mb-4 mx-2">Limpar Dados</button>
      </form>
      </div>
    </div>
    <div class="modal-body-footer">
      <small id="emailHelp" class="form-text text-muted">É PRIVADO, seus dados estão seguros e não são compartidos.</small> 
    </div>
</div>
<div class="modal-footer">
    <div class="list-social">
      <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" class="link-social"><i class="fa-brands fa-instagram"></i></a>
      <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" class="link-social"><i class="fa-brands fa-instagram"></i></a>
      <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" class="link-social"><i class="fa-brands fa-instagram"></i></a>
      <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" class="link-social"><i class="fa-brands fa-instagram"></i></a>
    </div>
</div>
</div>
</section>
<!--FINAL DO SECTION MODAL-->
<!--NAVBAR MENU-->
<div class="navbar fixed-top bg-light bg-body-tertiary container">
<nav class="navbar navbar-dark bg-light fixed-top">
<div class="container-fluid">
  <div class="container">
  <a class="navbar-brand text-secondary" href="#">
                      <img src="assets/bottom1_orange.png" alt="" width="40" height="40" class="d-inline-block align-top me-2">
      Usina web

  </a>
  <button class="navbar-toggler showHiddenBtn no-border" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="offcanvas offcanvas-start text-bg-light zSuper p-2" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title m-2" id="offcanvasDarkNavbarLabel">
       MENU
      </h5>
      <button type="button" class="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
       
      </ul>
    </div>
    </div>
  </div>
</div>
</nav>
</div>`



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
    
}
{
    id: 'btnNav7',
    content:'CONTATO',
    param: 7,
    
}

]


const listNavbar = `
           <li class="nav-item">
          <button class="nav-link active text-dark" aria-current="page" id="btnNav1">NOSSO COLETIVO</button>
        </li>
`