<template>
 <div>
   <b-navbar>
       <template #brand>
           <b-navbar-item tag="router-link" :to="{ path: '/' }">
               <img style="height:70px;max-height:none" src= "@/assets/logouochi.png">
           </b-navbar-item>
       </template>
       <template #start>
           <b-navbar-item href="#/">
               Início
           </b-navbar-item>
           <b-navbar-item href="#/comofunciona">
               Como funciona
           </b-navbar-item>
           <b-navbar-item href="#/quemsomos">
               Quem somos
           </b-navbar-item>
           <b-navbar-item href="#/parceiros">
               Profissionais
           </b-navbar-item>
           <b-navbar-item href="#/orcamento">
               Orçamento
           </b-navbar-item>
  </template>
 
        <template #end> 
           <b-navbar-item tag="div">
               <div class="buttons">
                  <a href="#/cadastro"> 
                   <a class="button is-primary">
                     <strong>Cadastrar</strong></a>
                     </a>

                    
                   <a class="button is-light"
                     @click="isComponentModalActive = true">
                       Entrar
                   </a> </div>
           </b-navbar-item>
       </template>
   </b-navbar>
 
 
        <b-modal
           v-model="isComponentModalActive"
           has-modal-card
           trap-focus
           :destroy-on-hide="false"
           aria-role="dialog"
           aria-label="Example Modal"
           aria-modal>
           <template #default="props">
               <modal-form v-bind="formProps" @close="props.close"></modal-form>
           </template>
       </b-modal>
 </div>
</template>
 
 
<script>
 import ModalForm from './modal-form.vue'
 
   export default {
       components: {
         'modal-form':ModalForm
       },
       data() {
           return {
               isComponentModalActive: false,
               formProps: {
                   email: '',
                   password: ''
               }
           }
       }
   }
</script>
