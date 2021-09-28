<template>
  <section class= "section is-medium">
    <div class="content is-medium has-text-centered">
         <h2>Escolha seu profissional</h2>
    </div>
  <br>
  <br>
    <div class="columns has-text-centered">
    <div class="column">
      <div class="card">
        <div class="card-image">
           <figure class="image">
              <img src="@/assets/cleia.png" alt="Placeholder image">
            </figure>
        </div>

    <div class="card-content">
    <div class="media">
      
      <div class="media-content">
        <a class="title is-4 " @click="isCardModalActive = true">Rosicleia Aparecida Francor</a>
        <br>
        <a class="subtitle is-6" @click="isCardModalActive = true">Mais conhecida como CLEIA</a>
      </div>
    </div>

    <div class="content">
      Atendimentos com a Uochi: 63
      <br>
      19 Avaliações
      <br>
      Nota média: 4,8
      <br>
      <br>
      <br>
      <div class="buttons has-text-centered">
            <b-button type="is-primary" outlined, expanded>Solicitar</b-button>
        </div>
          </div>
        </div>
      </div>
    </div>


    <div class="column">
      <div class="card">
        <div class="card-image">
           <figure class="image">
              <img src="@/assets/ivonete.png" alt="Placeholder image">
            </figure>
        </div>

    <div class="card-content">
    <div class="media">
      
      <div class="media-content">
        <a class="title is-4" @click="isCardIvonete = true">Ivonete Butcher da Silva</a>
        <br>
        <a class="subtitle is-6" @click="isCardIvonete = true">Mais conhecida como NETE</a>
      </div>
    </div>

    <div class="content">
      Atendimentos com a Uochi: 2
      <br>
      2 Avaliações
      <br>
      Nota média: 5,0
      <br>
    </div>
        </div>
      </div>
    </div>

    <div class="column">
      <div class="card">
        <div class="card-image">
           <figure class="image">
              <img src="@/assets/adriane.png" alt="Placeholder image">
            </figure>
        </div>

    <div class="card-content">
    <div class="media">
      
      <div class="media-content">
        <a class="title is-4" @click="isCardAdriane = true">Adriane da Guia Veloso
        </a>
        <br>
        <a class="subtitle is-6" @click="isCardAdriane = true">Mais conhecida como ADRI</a>
      </div>
    </div>

    <div class="content">
      Seja o primeiro o meu primeiro cliente com a Uochi!
    </div>
        </div>
      </div>
    </div>


    </div>
  
  <b-modal v-model="isCardModalActive" :width="640" scroll="keep">
            <div class="card">
                <div class="card-image has-text-centered">
                    
                         <img src="@/assets/cleia.png" alt="Placeholder image">
                    
                </div>
                <div class="card-content">
                    <div class="media">
  
                        <div class="media-content has-text-centered">
                            <p class="title is-4">Rosicleia Aparecida Francor</p>
                            <p class="subtitle is-6">Mais conhecida como CLEIA</p>
                        </div>
                    </div>

                    <div class="content has-text-centered">
                      Experiências: Há 12 anos trabalhando com o serviço doméstico
                      <br>
                      <br>
                      Habilidade em destaque: Não é por nada, mas a Cleia arrasa na limpeza dos vidros e banheiros, hein?
                      <br>
                      <br>
                      Hobbie favorito: Ler livros, caminhar e ver filmes com a família.
                      <br>
                      <br>
                      Adora conversar sobre: a vida e família principalmente.
                      <br>
                      <br>
                      "Sou ótima com organização e limpeza, e me orgulho como faço o meu trabalho, tanto na minha casa quanto na casa da pessoa a quem presto meu serviço"
                    </div>
                </div>
            </div>
        </b-modal>

        <b-modal v-model="isCardIvonete" :width="640" scroll="keep">
            <div class="card">
                <div class="card-image has-text-centered">
                    
                         <img src="@/assets/ivonete.png" alt="Placeholder image">
                    
                </div>
                <div class="card-content">
                    <div class="media">
  
                        <div class="media-content">
                            <p class="title is-4">Ivonete Butcher da Silva</p>
                            <p class="subtitle is-6">Mais conhecida como NETE</p>
                        </div>
                    </div>

                    <div class="content">
                      Experiências: Há 3 anos ajudando lares a serem mais confortáveis e limpos.
                      <br>
                      <br>
                      Habilidade em destaque: A Nete é conhecida por sua agilidade, sem perder a qualidade!
                      <br>
                      <br>
                      Hobbie favorito: Passear com a filha
                      <br>
                      <br>
                      Adora conversar sobre: o trabalho.
                      <br>
                      <br>
                      "Estou sempre disposta a atender a necessidade dos clientes com pontualidade"

                    </div>
                </div>
            </div>
        </b-modal>
        
        <b-modal v-model="isCardAdriane" :width="640" scroll="keep">
            <div class="card">
                <div class="card-image has-text-centered">
                    
                         <img src="@/assets/adriane.png" alt="Placeholder image">
                    
                </div>
                <div class="card-content">
                    <div class="media">
  
                        <div class="media-content has-text-centered">
                            <p class="title is-4">Adriane da Guia Veloso</p>
                            <p class="subtitle is-6">Mais conhecida como ADRI</p>
                        </div>
                    </div>

                    <div class="content has-text-centered">
                      Experiência: Há mais de 3 anos trabalhando com o serviço doméstico
                      <br>
                      <br>
                      Habilidade em destaque: Sou reconhecida pela organização e limpeza de lares.
                      <br>
                      <br>
                      Hobbie favorito: Faço exercício e a gosto de cuidar da minha casa.
                      <br>
                      <br>
                      Adora conversar sobre: a família principalmente.
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
                isCardModalActive: false
            }
        }
    }
</script>