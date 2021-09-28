<template>
  
  <section class="section">
  
    <div class="columns is-vcentered">

        <div class="column is-5">
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
        
          <div class="column is-7">
            <img src="@/assets/yes (6).png">
            </div>
            
    </div>
       
      <section class="section is-medium ">
                <hr style= "width: 70px;margin:auto;background-color:#2400ff">
        <br>
        <div class="content is-medium has-text-centered">
          <h1 class="title">Encontrar uma pessoa de confiança para cuidar do</h1>
          <h1 class="title">seu lar nunca foi tão fácil!</h1>
        </div>

        <hr style= "width: 70px;margin:auto;background-color:#2400ff">
        <br>

        <div class="columns">
      
        <div class="column is-1">
        &nbsp;
        </div>     
      
        <div class="column is-10">
          <img src="@/assets/cabeca.png">
        </div>

        <div class="column is-1">
        &nbsp;
        </div>   
      </div>

      <br>
      <br>
      <br>
        <div class="content is-medium has-text-centered">
         <h2>Por que ser Uochi?</h2>
        </div>
    <br>    

    <div class="columns has-text-centered">
      <div class="column">
         <img src="@/assets/icone (11).png"
         class="por-que-uochi">
        <h4 class="subtitle has-text-centered">Praticidade</h4>
        <h7>Tenha seu lar limpo novamente com alguns cliques</h7>       
      </div>
      <div class="column">
         <img src="@/assets/liberdade.png" class="por-que-uochi">
        <h4 class="subtitle has-text-centered">Confiança e liberdade de escolha</h4>
        <h7>Conte com um perfil completo dos profissionais e avaliações</h7>       
      </div>
      <div class="column">
         <img src="@/assets/personalizado.png" class="por-que-uochi">
        <h4 class="subtitle has-text-centered">Serviço personalizado pra você</h4>   
         <h7>Escolha a quantidade de horas e pague por aquilo que você realmente precisa</h7>     
      </div>
     
    </div>
    <br>
    <br>
    <div class="columns has-text-centered">
      
      <div class="column is-2">
        &nbsp;
      </div>     
      <div class="column is-4">
         <img src="@/assets/pagamento.png" class="por-que-uochi">
        <h4 class="subtitle has-text-centered">Pagamento online</h4>
         <h7>Pague de onde estiver de forma prática</h7>      
      </div>
      <div class="column is-4">
         <img src="@/assets/produtos.png" class="por-que-uochi">
        <h4 class="subtitle has-text-centered">Produtos de limpeza opcionais</h4> 
         <h7 class = "has-text-centered"> Não se preocupe com quais produtos comprar
           <br> e ainda economize dinheiro </h7>  
           
      </div>
      <div class="column is-2">
        &nbsp;
      </div> 
    </div>

      </section>

    <section class="section">
        <h1 class="title has-text-centered">O que estão falando da Uochi?</h1>
    </section>

    <b-carousel>
        <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
            <section :class="`hero is-medium is-${carousel.color}`" :style="{ backgroundImage: 'url(' + carousel.fundo + ')' }">
                <div class="hero-body has-text-centered">
                    <h1 class="title is-size-5">{{carousel.text}}</h1>
                </div>
            </section>
        </b-carousel-item>
    </b-carousel>


  </section>
  
  
</template>
<style>
  .por-que-uochi{
    width: 150px;
  }
</style>

<script>
export default {
    data(){
        return {
            carousels: [
                { text : '"A primeira experiência com a Uochi foi extremamente positiva. Fiz minha solicitação do serviço pelo celular, o agendamento foi confirmado e no outro dia quando cheguei em meu apartamento estava tudo devidamente limpo."'
                , color: 'gray', fundo: require('@/assets/fundo (14).png') },
                { text: 'Gostei muito da praticidade, do fato de vocês disponibilizarem materiais de limpeza. Eu não sou muito atento a comprar esse tipo de coisa no mercado e não sei exatamente o que a diarista prefere usar.', color: 'gray', fundo: require('@/assets/fundo (14).png') },
                { text: 'O atendimento [da uochi] foi impecável. A profissional enviada - Cleia, um amor de pessoa: super simpática, cuidadosa e organizada. Estendeu seu período de trabalho, pois uma encomenda específica (arrumar guarda-roupas) tomou quase toda manhã e ficou perfeito. Até umas panelas que estavam com manchas ficaram brilhando! Tive que sair resolver algumas coisas e me senti bastante seguro em deixar a casa nas mãos dela. Dois pontos que acho muito importantes: agendei de um dia para o outro e o pagamento por transferência: nunca tenho dinheiro em espécie e normalmente esse tipo de serviço precisa ser remunerado assim. Muito obrigado Olimpo e Cleia!', color: 'gray', fundo: require('@/assets/fundo (14).png') }
            ]
        }
    }
}

          
</script> 
