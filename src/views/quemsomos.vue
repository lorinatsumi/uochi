<template>
<div>
  <div>
    <section class="has-bg-img hero" :style="{height:'513px', backgroundImage: 'url(' + require('@/assets/capaaa.png') + ')' }">
      <div class="hero-body">

            <p class="subtitle has-text-grey-dark"> 
        </p>
            <h1 class="title has-text-grey-dark is-size-1"> Nossa História</h1>

        <div class="colums subtitle has-text-grey-dark">
          <div class= "column is-8">
          O segredo do sucesso de uma boa receita são os ingredientes e o modo de preparo correto. Por isso, sempre use alimentos de boa qualidade e preste muito atenção durante os processo. Assim, você garante um bolo simples fofinho e cheio de sabor!  </div>
        </div>
      </div>
    </section>
  </div>


  <div>
     <section class="section">
       <div class= "columns">
        <div class="column is-4">
             <h1 class="title has-text-grey-dark is-size-2">Nossa Missão</h1> </div>
       <div class= "column is-4">
         Descomplicar a limpeza, proporcionando tempo, praticidade e conforto para o dia a dia das pessoas.</div>
      <div class= "column is-4"> 
         E ajudar os profissionais de limpeza doméstica do mundo a serem independentes e decolarem as suas carreiras.</div>  
     </div>
   </section>
  </div>


<div class="box">
  <h1 class="title has-text-centered has-text-grey-dark">Valores</h1>
    <div class="columns has-text-centered">
      <div class="column">
         <img src="@/assets/heroi.png"
         class="valores">
        <h4 class="subtitle has-text-centered">Valorização humana</h4>   </div>
      <div class="column">
         <img src="@/assets/confianca.png"
         class="valores">
        <h4 class="subtitle has-text-centered">Confiança e transparência</h4>      
      </div>
      <div class="column">
         <img src="@/assets/crescimento.png"
         class="valores">
        <h4 class="subtitle has-text-centered">Crescimento mútuo</h4>   </div>
      <div class="column">
         <img src="@/assets/tempo.png" class="valores">
        <h4 class="subtitle has-text-centered">Valorização do tempo</h4>
       </div>
      <div class="column">
         <img src="@/assets/foguetee.png" class="valores">
        <h5 class="subtitle has-text-centered">Inovação constante</h5>    </div>
     </div>
</div>


 <div class="box">
  <div>
     <section class="section">
       <div class= "columns">
        <div class="column is-6">

          <h3 class="title has-text-white">.</h3>
             <h1 class="title has-text-centered is-size-1 has-text-grey-dark">Quem faz Acontecer</h1> </div>
       <div class= "column is-6">
         
       <b-carousel>
        <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
            <section :class="`hero is-medium is-${carousel.color}`">
                <div class="hero-body has-text-centered">
                    <h1 class="title">{{carousel.text}}</h1>
                </div>
            </section>
        </b-carousel-item>
    </b-carousel>       
    </div>
    </div>
   </section>
  </div>
  </div>


</div>
</template>
<style>
  .valores{
    width: 130px;
  }
</style>

<script>
export default {
    data(){
        return {
            carousels: [
                { text: 'Slide 1', color: 'primary' },
                { text: 'Slide 2', color: 'info' },
                { text: 'Slide 3', color: 'success' },
                { text: 'Slide 4', color: 'warning' },
                { text: 'Slide 5', color: 'danger' }
            ]
        }
    }
}
</script>