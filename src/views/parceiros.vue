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
              <img src="@/assets/cleiasmall.png" alt="Placeholder image">
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
            <b-button type="is-primary">Primary</b-button>
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

    <a href ="#/pagamento"> <b-button type="is-primary">Ir para pagamento</b-button> </a>



  
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