<template>
<section class="section">
 <h1 class="title has-text-centered is-size-1">O que é Uochi?</h1>
 <h2 class="subtitle has-text-centered">
   Conectamos profissionais de limpeza mais próximos do seu lar </h2>
 
<hr style="background-color:#2400ff; height:3px">
 
<div class="columns ">
 <div class="column is 1 has-text-centered  has-background-white">
    <h4 class="subtitle has-text-centered"></h4>
 </div>
 
 <div class="column is-2.5 has-text-centered has-background-white">
     <img src="@/assets/horarioo.png"
     class="comofunciona">
     <h4 class="subtitle has-text-centered">Escolha a data e horário que deseja o serviço</h4>
 </div>
 <div class="column is-2.5 has-text-centered has-background-white">
    <img src="@/assets/pacote.png"
      class="comofunciona">
     <h4 class="subtitle has-text-centered">Selecione o melhor pacote para você</h4>
   </div>
 <div class="column is-2.5 has-text-centered has-background-white">
   <img src="@/assets/selecionar.png"
     class="comofunciona">
     <h4 class="subtitle has-text-centered">  Escolha um profissional disponível</h4>
   </div>
 <div class="column is-2.5 has-text-centered  has-background-white">
    <img src="@/assets/pagar.png"
    class="comofunciona">
    <h4 class="subtitle has-text-centered">Realize o pagamento online</h4>
 </div>
 <div class="column is 1 has-text-centered  has-background-white">
    <h4 class="subtitle has-text-centered"></h4>
 </div>
</div>
 
<section class="section">
 <h4 class="subtitle"></h4>
</section>
 
<section class="hero is-medium has-background-primary-light">
 <div class="hero-body">
     <h1 class="title"></h1>
      <h1 class="title has-text-centered has-text-grey-dark">Queremos, juntos, ser a maior plataforma de serviços domésticos de Curitiba</h1>
    <nav class="level">
 <div class="level-item has-text-centered">
   <div>
     <p class="title is-size-2 has-text-primary">123</p>
     <p class="heading is-size-6 has-text-primary">Atendimentos realizados</p>
   </div>
 </div>
 <div class="level-item has-text-centered">
   <div>
     <p class="title is-size-2 has-text-primary">R$5.345</p>
     <p class="heading is-size-6 has-text-primary">Repassado para as profissionais</p>
   </div>
 </div>
 <div class="level-item has-text-centered">
   <div>
     <p class="title is-size-2 has-text-primary">100</p>
     <p class="heading is-size-6 has-text-primary">Profissionais cadastradas</p>
   </div>
 </div>
</nav>
</div>
</section>
 
<section class="section is-medium">
 <h1 class="title has-text-centered">Como funciona para o profissional?</h1>
<hr style= "width: 200px;height:3px;margin:auto;background-color:#2400ff">
 
 
<p class="title has-text-white">.</p>
<div class="columns box">
 <div class="column has-text-centered is-size-5">
   Cadastro gratuito na nossa plataforma
 </div>
 <div class="column has-text-centered is-size-5">
   Veja avaliações do cliente antes de aceitar o serviço
 </div>
 <div class="column has-text-centered is-size-5">
   Trabalhe nos dias e horários que desejar com a agenda otimizada
 </div>
 <div class="column has-text-centered is-size-5">
   Receba o pagamento no mesmo dia
 </div>
</div>
 
<section class="section">
 <h4 class="subtitle"></h4>
</section>
 
<div class="columns">
 <div class="column">
 </div>
 <div class="column">
   <div class="block">
    <a href="#/cadastro"> 
    <b-button type="is-primary subtitle" expanded>Quero me Cadastrar</b-button>
    </a>
 </div>
 </div>
 <div class="column">
 </div>
</div>
</section>
 
<section class="hero has-background-primary-light">
 <div class="container.is-fullwidth"></div>
  <div class="hero-body">
   <div class="columns is-vcentered">
 
       <div class="column is-6">
         <section class="section">
            <div class="content is-large">
           <h2 class="title">Ainda possui dúvidas? Entre em contato com nossa equipe!</h2>
        </div>
         <h2 class="subtitle">Responderemos assim que possível</h2> 
         </section>
         <hr style= "width: 500px;height:2px;margin:auto;background-color:#2400ff">
       </div>       
      
         <div class="column is-6">
          <b-field label="Nome">
           <b-input v-model="name"></b-input>
       </b-field>
       <b-field label="Email"
           type="is-danger"
           message="This email is invalid">
           <b-input type="email"
               value="@hotmail.com"
               maxlength="30">
           </b-input>
       </b-field>
       <b-field label="Digite sua mensagem">
           <b-input maxlength="200" type="textarea"></b-input>
       </b-field>
       <button class="button is-primary is-rounded">Enviar</button>
    </div>
    </div>
  </div>
  </section>
 </section>
</template>
 
 
<script>
   export default {
       data() {
           return {
               name: ''
           }
       }
   }
</script>
 
<style>
 .comofunciona{
   width: 160px;
 }
</style>