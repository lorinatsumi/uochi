<template>
 <div>
  <section class="hero is-small has-background-primary-light ">
  <br>
   <div class="hero-body">
        
  <!--coluna box -->
  <div class="columns">
    <div class="column is-2">
     <h4 class="subtitle"></h4>
      </div>
      <div class="box column is-8">    
       <section class="section">
         <p class="title has-text-centered">
         Uhuuuul! </p>
         <br>
         <p class="subtitle has-text-centered"> Bem vindo(a) à família Uochi. Bora fazer seu cadastro? </p>
         <br>
         <!--coluna nome e sobrenome -->
         <div class="columns">
         <div class="column">
           <b-field label="Seu nome">
            <b-input v-model="usuario.nome"></b-input>
          </b-field>
         </div>
         <div class="column">
           <b-field label="Sobrenome">
            <b-input v-model="usuario.sobrenome"></b-input>
            </b-field>          
         </div>
         </div>
         <!--fecha nome e sobrenome -->

        <div class="columns">
          <div class="column">
            <b-field label="Email">
                <b-input placeholder="fulano@email.com"  type="email"
                    v-model="usuario.email"
                    maxlength="30">
                </b-input>
            </b-field>
          </div>

          <div class="column">
            <b-field label="Telefone celular">
             <b-input placeholder="DDD + telefone" type="number" v-model="usuario.telefone" maxlength="30"></b-input>
            </b-field>
          </div>
        </div>


        <b-field label="Como você gosta de ser chamado(a)"
            type="is-success"
            message="O apelido está disponível">
            <b-input v-model="usuario.apelido" maxlength="30"></b-input>
        </b-field>
 
      <br>

      <div class="columns">
        <div class="column">
          <b-field label="Data de Nascimento">
             <b-input
             type="date" v-model="usuario.dataNascimento" maxlength="10"></b-input>
          </b-field>
        </div>

        <div class="column">
          <b-field label="CPF">
              <b-input placeholder="Digite seu CPF" type="number" v-model="usuario.cpf" maxlength="30"></b-input>
          </b-field>
        </div>
      </div>


        <div class="columns">
           <div class="column">
              <b-field label="Endereço">
                <b-input placeholder="Rua 7 de Setembro, 90" v-model="usuario.endereco" maxlength="30"></b-input>
              </b-field>
           </div>

           <div class="column">
              <b-field label="Complemento">
                <b-input placeholder="Apartamento/Bloco/Torre" v-model="usuario.complemento" maxlength="30"></b-input>
              </b-field>
           </div>
         </div>

        <b-field label="Ponto de Referência">
            <b-input placeholder="Esquina com... / De frente para... / Ao lado de..." v-model="usuario.pontoReferencia" maxlength="30"></b-input>
        </b-field>
      
        <div class="columns">
          <div class="column">
            <b-field label="Cidade">
              <b-select v-model="usuario.cidade" placeholder="Selecione uma cidade" expanded="true">
                  <option
                            v-for="cidade in cidades"
                            :value="cidade.id"
                            :key="cidade.id">
                            {{ cidade.nome }}
                  </option>
              </b-select>
            </b-field> 
          </div>

          <div class="column">
            <b-field label="Estado">
              <b-select v-model="usuario.estado" placeholder="Selecione um Estado" expanded="true">
                  <option
                            v-for="estado in estados"
                            :value="estado.id"
                            :key="estado.id">
                            {{ estado.nome }}
                  </option>
              </b-select>
            </b-field>  
          </div>
          <div class="column">
              <b-field label="Bairro">
                <b-select v-model="usuario.bairro" placeholder="Selecione um Bairro" expanded="true">
                  <option
                            v-for="bairro in bairros"
                            :value="bairro.id"
                            :key="bairro.id">
                            {{ bairro.nome }}
                  </option>
                </b-select>
              </b-field> 
           </div>
        </div> 


        <b-field label="Criar senha"
            type="is-warning"
            :message="['Senha é muito curta', 'Senha deve ter no mínimo 6 caracteres']">
            <b-input v-model="usuario.senha" type="password" maxlength="30"></b-input>
        </b-field> 

        <b-field>
            <b-checkbox v-model="usuario.pets">
                Possuo Pets em casa
            </b-checkbox>
        </b-field>

        <b-field>
            <b-checkbox v-model="usuario.termosCondicoes">
                Aceito os Termos e Condições da Uochi
            </b-checkbox>
        </b-field>

        <b-field>
            <b-checkbox v-model="usuario.politicaPrivacidade">
                Estou de acordo com a Políticas de Privacidade da Uochi
            </b-checkbox>
        </b-field>

        <br>

        <b-button @click="cadastrar()" type="is-primary" expanded >Cadastrar</b-button>

    <div class="column is-2">
    </div>
    </section>
    </div> 
  </div>  
<!--fecha coluna box --> 
 </div>        
</section>
</div>
</template>

<script>
export default {
    props: ['canCancel'],
    data(){
        return {
            usuario: {
              nome: '',
              sobrenome: '',
              email: '',
              apelido: '', 
              telefone: '',
              senha: '',
              cpf: '',
              endereco: '',
              complemento: '',
              pontoReferencia: '',
              pets: '',
              termosCondicoes: false,
              politicaPrivacidade: false,
              cidade: null,
              estado: null,
              bairro: null,
            },
            cidades: []
        }
    },  
    created() {
      var self = this;
      //Chama a api para buscar as cidades
      this.axios.get('cidades/').then((response) => {
        self.cidades = response.data;
      })  
    },
    methods: {
      cadastrar() {
          var self = this;
          if (!this.usuario.termosCondicoes) {
            self.$buefy.dialog.alert('Vocês precisa aceitar os Termos e Condições')
          } else if (!this.usuario.politicaPrivacidade) {
            self.$buefy.dialog.alert('Vocês precisa aceitar as Políticas de Privacidade')
          } else {
            //Chama a api para criar o usuário
            this.axios.post('usuarios-create/', this.usuario).then((response) => {
              console.log(response);
              //Fecha o modal
              self.$emit('close');
              //Mostra a mensagem de sucesso
              self.$buefy.dialog.alert('Cadastro realizado com sucesso!')
            })
          }
                  
      }
    }  
}
</script>