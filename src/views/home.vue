<template>
  <section class="section">
  <section class="section">
  
    <div class="columns is-vcentered">

        <div class="column">
          <section class="section">
             <div class="content is-large">
            <h1 class="title is-size-1">Limpeza descomplicada.</h1>
            </div>
          
          <h2 class="subtitle">Otimize seu tempo. Nós cuidamos do seu conforto!</h2>
          

           <div class="buttons">
            <b-button type="is-primary" expanded>Agendar serviço</b-button>
            
          </div>
          </section>
        </div>        
        
          <div class="column">
            <img src="@/assets/imageminicio.png" width="500" height="400">
            </div>
            
    </div>
     <hr>

      <section class="section is-medium">
        <div class="content is-medium has-text-centered">
          <h1 class="title">Encontrar uma pessoa de confiança para cuidar do</h1>
          <h1 class="title">seu lar nunca foi tão fácil!</h1>
        </div>
      <br>
      <br>
      <br>
        <div class="content is-medium has-text-centered">
         <h2>Por que ser Uochi?</h2>
        </div>
    <br>    

    <div class="columns">
      <div class="column">
         <img src="@/assets/icone.png"
         class="por-que-uochi">
        <h4 class="subtitle has-text-centered">Praticidade</h4>      
      </div>
      <div class="column">
         <img src="@/assets/icone.png" class="por-que-uochi">
        <h4 class="subtitle has-text-centered">Praticidade</h4>      
      </div>
      <div class="column">
         <img src="@/assets/icone.png" class="por-que-uochi">
        <h4 class="subtitle has-text-centered">Praticidade</h4>      
      </div>
      <div class="column">
         <img src="@/assets/icone.png" class="por-que-uochi">
        <h4 class="subtitle has-text-centered">Praticidade</h4>      
      </div>
      <div class="column">
         <img src="@/assets/icone.png" class="por-que-uochi">
        <h4 class="subtitle has-text-centered">Praticidade</h4>      
      </div>
    </div>

      </section>

  <div class="content is-medium has-text-centered">
         <h2>Dúvidas frequentes</h2>
        </div>
  
  <section class= "p-6">
      
        <b-collapse
            class="card"
            animation="slide"
            v-for="(duvida, index) of duvidas"
            :key="index"
            :open="isOpen == index"
            @open="isOpen = index">
            <template #trigger="props">
                <div
                    class="card-header"
                    role="button"
                >
                    <p class="card-header-title">
                        {{ duvida.title }}
                    </p>
                    <a class="card-header-icon">
                        <b-icon
                            :icon="props.open ? 'menu-down' : 'menu-up'">
                        </b-icon>
                    </a>
                </div>
            </template>
            <div class="card-content">
                <div class="content">
                    {{ duvida.text }}
                </div>
            </div>
        </b-collapse>

    </section>


    


  </section>
  </section>
</template>
<style>
  .por-que-uochi{
    width: 150px;
  }
</style>
<script>
    export default {
        data() {
            return {
                isOpen: 0,
                duvidas: [
                {
                    title: 'Quais as formas de pagamento?',
                    text: 'Os pagamentos são feitos online. Até o momento aceitamos cartão de crédito, transferência bancária, Mercado Pago, PIX e Picpay. As transações de cartão de crédito são realizadas através do Mercado Pago, um dos maiores gateways de pagamento do Brasil. Muito fácil e prático!'
                },
                {
                    title: 'Title 2',
                    text: 'Text 2'
                },
                {
                    title: 'Title 3',
                    text: 'Text 3'
                }
                ]
            }
        }
    }
</script>