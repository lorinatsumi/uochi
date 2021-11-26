<template>
  <section class= "section is-medium has-background-white-ter">
    <div class="content is-medium has-text-centered">
         <h2>Escolha seu profissional</h2>
    </div>
  <br>
 

 <div class="columns">
    <div v-for= "(profissional, index) in profissionais" :key="index" class ="column">


      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-120x120">
        <img src="@/assets/cleiasmall (1).png" alt="Image">
            </figure>
          </div>
          

          <div class="media-content">
            <div class="content">
        <p>
          <br>
          <strong class = 
          "title is-6" @click="isCardModalCleia = true ">{{profissional.nome}}</strong>
          <br>
          <small class = "subtitle is-6" @click="isCardModalCleia = true" >Mais conhecida como {{profissional.apelido}}</small>
          
          <br>
          <br>
          <small>
          Atendimentos com a Uochi: 63
          <br>
          19 Avaliações
          <br>
          Nota média: 4,8
          </small>
        </p>
      </div>
       <div class="buttons">
            <b-button @click="contratar(profissional)" type="is-primary" size="is-small" outlined>Contratar</b-button>
        </div> 
    </div>
  </article>
</div>

</div>








</div>


<section class = "has-text-centered mt-5">
<a href ="#/pagamento"> <b-button type="is-primary">Ir para pagamento</b-button> </a>
</section>

<br>


<b-modal v-model="isCardModalCleia" :width="640" scroll="keep">
            <div class="card has-text-centered">
                <div class="card-image">
                    <figure>
                        <img src="@/assets/cleia.png" alt="Image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4">Rosicleia Aparecida Francor</p>
                            <p class="subtitle is-6">Mais conhecida como CLEIA</p>
                        </div>
                    </div>

                    <div class="content">
                      <strong class = "has-text-primary"> Experiências:</strong> Há 12 anos trabalhando com o serviço doméstico
                      <br>
                      <br>
                      <strong class = "has-text-primary">   Habilidade em destaque: </strong>  Não é por nada, mas a Cleia arrasa na limpeza dos vidros e banheiros, hein?
                      <br>
                      <br>
                       <strong class = "has-text-primary">  Hobbie favorito:</strong>  Ler livros, caminhar e ver filmes com a família.
                      <br>
                      <br>
                      
                      <strong class = "has-text-primary"> Adora conversar sobre: </strong> a vida e família principalmente.
                      <br>
<br>
                        "Sou ótima com organização e limpeza, e me orgulho como faço o meu trabalho, tanto na minha casa quanto na casa da pessoa a quem presto meu serviço"
                    </div>
                </div>
            </div>
        </b-modal>



<b-modal v-model="isCardModalNete" :width="640" scroll="keep">
            <div class="card has-text-centered">
                <div class="card-image">
                    <figure>
                        <img src="@/assets/ivonete.png" alt="Image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4">Ivonete Butcher da Silva</p>
                            <p class="subtitle is-6">Mais conhecida como NETE</p>
                        </div>
                    </div>

                    <div class="content">
                      <strong class = "has-text-primary"> Experiências:</strong> Há 3 anos ajudando lares a serem mais confortáveis e limpos.
                      <br>
                      <br>
                      <strong class = "has-text-primary">   Habilidade em destaque: </strong>  A Nete é conhecida por sua agilidade, sem perder a qualidade!
                      <br>
                      <br>
                       <strong class = "has-text-primary">  Hobbie favorito:</strong>  Passear com a filha.
                      <br>
                      <br>
                      
                      <strong class = "has-text-primary"> Adora conversar sobre: </strong> o trabalho.
                      <br>
<br>
                        "Estou sempre disposta a atender a necessidade dos clientes com pontualidade"
                    </div>
                </div>
            </div>
        </b-modal>


<b-modal v-model="isCardModalAdri" :width="640" scroll="keep">
            <div class="card has-text-centered">
                <div class="card-image">
                    <figure>
                        <img src="@/assets/adriane.png" alt="Image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4">Adriane da Guia Veloso</p>
                            <p class="subtitle is-6">Mais conhecida como ADRI</p>
                        </div>
                    </div>

                    <div class="content">
                      <strong class = "has-text-primary"> Experiências:</strong> Há mais de 3 anos trabalhando com o serviço doméstico
                      <br>
                      <br>
                      <strong class = "has-text-primary">   Habilidade em destaque: </strong>  Sou reconhecida pela organização e limpeza de lares.

                      <br>
                      <br>
                       <strong class = "has-text-primary">  Hobbie favorito:</strong>  Faço exercício e a gosto de cuidar da minha casa.
                      <br>
                      <br>
                      
                      <strong class = "has-text-primary"> Adora conversar sobre: </strong> a família principalmente.
                      <br>
<br>
                        "Sou caprichosa e adoro o que eu faço."
                    </div>
                </div>
            </div>
        </b-modal>


  </section>
</template>

<script>
    export default {
        data() {
            return {
                profissionais:{},
                isImageModalCleia: false,
                isCardModalCleia: false,
                isImageModalNete: false,
                isCardModalNete: false,
                isImageModalAdri: false,
                isCardModalAdri: false
            }
        },
        created() {
          var self = this;
          //Chama a api para buscar as pacotes
          this.axios.get('profissionais/').then((response) => {
            self.profissionais = response.data;
          }) 
        },
        methods: {
          contratar(profissional) {
            console.log('profissional', profissional);
            var agendamento = this.$route.query.agendamento;
            console.log('agendamento', agendamento);

            
            var self = this;
            var data = {
              profissional: profissional.id
            }

            //Chama a api para criar o usuário
            this.axios.put('agendamentos-update/' + agendamento + "/", data).then((response) => {
              console.log(response);
              self.$buefy.dialog.alert('Agendamento realizado com sucesso')
              self.$router.push({ name: 'Pagamento', query: { agendamento: agendamento }});
            })
            
          }                     
        }
    }
</script>