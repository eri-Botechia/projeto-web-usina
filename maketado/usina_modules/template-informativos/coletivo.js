const coletivo = `
<main class="main" id="main__content">
    <section class="coletivo">
        <header class="header__section">
            <h2 class="heading__h2">O COLETIVO</h2>
            <div class="bg-coletivo">
                <div class="nav nav-tabs bg-light" id="nav-tab" role="tablist">
                    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">O COLETIVO</button>
                    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">A PROPOSTA</button>
                    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">AS METAS</button>
                </div>
            </div>
        </header>
        <div class="tab-content bg-coletivo" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                <div class="content__coletivo bg-light row m-5">
                    <div class="col-12">
                        <div class="box-2-scroll">
                            <h3 class="heading__h3">O COLETIVO</h3>
                            <p>O Coletivo Usina Eco-Cultural surge do descontentamento de moradores da região da subprefeitura do Ipiranga, que inclui as comarcas do Heliópolis-Sacomã, Cursino e Ipiranga, que observam na região um amplo espaço abandonado por mais de 20 anos onde era localizado o antigo Incinerador Vergueiro.</p>
                            <p>A partir desse descontentamento e da área abandonada, uma junção de arquitetos, urbanistas, ativistas, artistas e ambientalistas, entre outras profissões, decidiram, a partir de 2019, se unir como cidadãos a fim de discutir propostas de transformações, para a revitalização e aproveitamento do Incinerador, além de ações gerais que contribuiriam com a região.</p>
                            <p>Cabe ressaltar que este coletivo é plural, multipartidário e horizontal, respeitando sempre os valores de construir soluções do povo, para o povo e pelo povo da região, e que podem ser reproduzidas em outros lugares com a mesma finalidade, de melhorar e contribuir para a sociedade.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                <div class="content__coletivo bg-light row m-5">
                    <div class="col-12">
                        <div class="box-2-scroll">
                            <h3 class="heading__h3">A PROPOSTA</h3>
                            <p>A proposta do movimento é revitalizar o espaço abandonado onde foi o Incinerador Vergueiro, reaproveitando o espaço para formar um centro de cultura e lazer que desenvolve atividades culturais, educativas, informativas, lúdicas e de conscientização ecológica, revivendo um espaço morto e trazendo um novo impacto e valores para aquele edifício icônico do passado.</p>
                            <p>Permitir a reflexão de como melhorar a sociedade em que vivemos e colaborar para a formação do indivíduo socialmente, culturalmente, academicamente e ecologicamente consciente, de modo que o projeto tem uma visão holística da sociedade e de seus indivíduos, que visa a reparação histórica de um ambiente que, em seu funcionamento, não tinha os melhores valores de preservação como motriz de suas atividades.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                <div class="content__coletivo bg-light row m-5">
                    <div class="col-12">
                        <div class="box-2-scroll">
                            <h3 class="heading__h3">AS METAS</h3>
                            <p>Come meta global do projeto temos o emprego da visão holística que a partir de varias atividades que trazem valor para a contribuição da construção de uma sociedade e de indivíduos com valores aprendidos, revisados ou aprofundados em relação a cidadania, cultura, lazer, ensino acadêmico, conhecimento e conscientização ecológica e incentivo aos hábitos saudáveis, de modo a fortalecer indivíduos que possam contribuir para uma sociedade mais equilibrada e sana.</p>
                        <ul class="dropdown-menu d-block position-static mx-0 shadow w-220px">
 <li>
      <button class="dropdown-item d-flex gap-2 align-items-center"			data-bs-toggle="modal"
					data-bs-target="#mi-modal-1"
				>
        <img src="assets/brand/icons/i015_cult-greenVar.svg" alt="ecologia icon para modal" class="btnIcon"/>
        Cultura e Lazer
        </button>
        <div class="modal fade" id="mi-modal-1" tabindex="-1" aria-hidden="true" aria-labelledby="label-modal-1">
					<!-- modal external box -->
					<div class="modal-dialog ">
						<!-- modal content -->
						<div class="modal-content  modal__custom">
							<!-- modal header -->
							<div class="modal-header p-4">
								<span class="badge badge-pill badge-warning">Cultura e Lazer</span>
								<button class="btn-close p-4 w-30 bg-danger" data-bs-dismiss="modal" aria-label="Cerrar">
                </button>
							</div>
              
							<!-- Cuerpo de la caja -->
							<div class="modal-body">
                <h4 class="heading__h4">Cultura e Lazer </h4>
                <img src="assets/brand/icons/i015_cult-greenVar.svg" alt="ecologia icon para modal" class="imgRounded"/>

							</div>

							<!-- Pie de pagina de la caja -->
							<div class="modal-footer">
								<button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancelar</button>
								<button type="button" class="btn btn-primary">Acepto</button>
							</div>
						</div>
					</div>
				</div>
    </li>
    <li>
      <button class="dropdown-item d-flex gap-2 align-items-center" href="#">
        <img src="assets/brand/icons/i013_eco-greenVar.svg" alt="ecologia icon para modal" class="btnIcon"/>
        Ecologia e Meio Ambiente
        </button>
    </li>
     <li>
      <button class="dropdown-item d-flex gap-2 align-items-center" href="#">
        <img src="assets/brand/icons/i017_school-greenVar.svg" alt="ecologia icon para modal" class="btnIcon"/>
        Ensino Academico
        </button>
    </li>
        <li>
      <button class="dropdown-item d-flex gap-2 align-items-center" href="#">
        <img src="assets/brand/icons/i019_saude-greenVar.svg" alt="ecologia icon para modal" class="btnIcon"/>
        Saude e Bem-Estar
        </button>
    </li>
  </ul>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
`;

export default coletivo;
