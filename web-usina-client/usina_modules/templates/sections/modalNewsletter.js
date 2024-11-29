export const modalNewsletter = `  
<section
                    class="modal"
                    id="modalNewsletter sectionNewsletter"
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
                                          <input class="form-check-input" type="checkbox" id="meetUsLinkedin" value="linkedin" checked="false">
                                          <label class="form-check-label" for="meetUsLinkedin">Linkedin</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                          <input class="form-check-input" type="checkbox" id="meetUsFacebook" value="facebook" checked="false">
                                          <label class="form-check-label" for="meetUsFacebook">Facebook</label>
                                      </div>
                                      <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" id="meetUsLinkedin" value="linkedin" checked="false">
                                        <label class="form-check-label" for="meetUsLinkedin">Linkedin</label>
                                      </div>
                                      <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" id="meetUsFacebook" value="facebook" checked="false">
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
                              <small id="emailHelp" class="form-text text-muted">Nós não compartilharemos seu email com ninguém.</small>
                            </div>
                        </div>
          
                      
                        <div class="modal-footer">
                        
                        </div>
                      </div>
                    </div>
                    </section>
                    `;