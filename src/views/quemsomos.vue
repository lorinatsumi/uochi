<template>
 <div>
  <div>
    <section class="has-bg-img hero" :style="{height:'500px', backgroundImage: 'url(' + require('@/assets/fundocami.png') + ')' }">
     <section class="section">
      <div class="hero-body">
            <p class="subtitle has-text-grey-dark"></p>
            <h1 class="title has-text-grey-dark is-size-1"> Quem somos</h1><hr style="background-color:#2400ff;width: 400px; height:3px">
        <div class= "column is-6">
        <div class="colums subtitle has-text-grey-dark">
          A Uochi nasceu da percepção e inconformidade com a dificuldade das pessoas de encontrar profissionais domésticos de confiança e qualidade. Com isso, iniciamos nossa história!
           </div>
         <div class="colums subtitle has-text-grey-dark">   Formada por um grupo de estudantes de Negócios Digitais apaixonados por inovação e tecnologia, a Uochi está sendo construída pra entregar o melhor e mais prático serviço pra salvar seu dia a dia :)
            </div>

        </div>
      </div>
    </section>
    </section>
  </div>



  <div>
     <section class="section is-medium">
       <div class= "columns">
        <div class="column is-4">
             <h1 class="title has-text-centered has-text-grey-dark is-size-1">Nossa Missão</h1> </div>
       <div class= "column is-4 subtitle">
         Descomplicar a limpeza, proporcionando tempo, praticidade e conforto para o dia a dia das pessoas.</div>
         
      <div class= "column is-4 subtitle"> 
         E ajudar os profissionais de limpeza doméstica do mundo a serem independentes e decolarem as suas carreiras.</div>  
     </div>
   </section>
  </div>
  
  <div class="box">
   <h1 class="title has-text-centered has-text-grey-dark is is-size-2">Nossos Valores</h1>
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
        <h4 class="subtitle has-text-centered">Crescimento mútuo</h4></div> 
      <div class="column">
         <img src="@/assets/tempo.png" class="valores">
        <h4 class="subtitle has-text-centered">Valorização do tempo</h4>
       </div>
      <div class="column">
         <img src="@/assets/foguete.png" class="valores">
        <h5 class="subtitle has-text-centered">Inovação constante</h5>    </div>
     </div>
   </div>

<br>
<br>
<br> 
 
<div class="box">
  <h2 class="title has-text-centered has-text-grey-dark is is-size-2">Quem faz acontecer</h2>
<div>
       <div class= "columns">
        <div class="column is-4 has-text-centered">
             <img src="@/assets/camily (3).png">
         <p class = "title is-5" > Camily Mayumi</p>
         Cofounder
        </div>
       <div class="column is-4 has-text-centered">
             <img src="@/assets/andrey.png">
         <p class = "title is-5" > Andrey Bertoldi</p>
         
         Cofounder
        </div>
      <div class="column is-4 has-text-centered">
             <img src="@/assets/lori.png">
         <p class = "title is-5" > Lori Natsumi</p>
         
         Cofounder 
        </div>
       </div>
      
   
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