<template>
 <div>
  <section class="hero is-small has-background-primary-light ">
   <div class="hero-body">
    <b-steps>
        <b-step-item label="Dados Pessoais" icon="account-key is-black"> .</b-step-item>
        <b-step-item label="Profile" icon="account"></b-step-item>
        <b-step-item label="Social" icon="account-plus"></b-step-item>
        
  <!--coluna box -->
  <div class="columns">
    <div class="column is-2">
     <h4 class="subtitle"></h4>
      </div>
      <div class="box column is-8">    
       <section class="section">
         <p class="title has-text-centered has-text-primary">
         Dados pessoais</p>
         <!--coluna nome e sobrenome -->
         <div class="columns">
         <div class="column">
           <b-field label="Nome">
            <b-input value=""></b-input>
          </b-field>
         </div>
         <div class="column">
           <b-field label="Sobrenome">
            <b-input value=""></b-input>
            </b-field>          
         </div>
         </div>
         <!--fecha nome e sobrenome -->
        <b-field label="Email">
            <b-input type="email"
                value=""
                maxlength="30">
            </b-input>
        </b-field>

        <b-field label="Apelido"
            type="is-success"
            message="O apelido está disponível">
            <b-input value="" maxlength="30"></b-input>
        </b-field>

        <b-field label="Digite sua senha"
            type="is-warning"
            :message="['Senha é muito curta', 'Senha deve ter no mínimo 6 caracteres']">
            <b-input value="123" type="password" maxlength="30"></b-input>
        </b-field>     
    <div class="column is-2">
    </div>
    </section>
    </div> 
  </div>  
<!--fecha coluna box -->
  </b-steps> 
 </div>        
</section>
</div>
</template>