<template>
  <div>

  <div class="tabs is-large is-right">
    <ul>
      <li class="is-active"><a>Perfil</a></li>
      <li><a>Configurações</a></li>
      <li><a>Crédito</a></li>
      <li><a>Prêmios</a></li>
    </ul>
  </div>
  <div class="columns">
    <div class="column is-1"></div>
  <div class="column is-8">
   <b-menu>
      <b-menu-list label="Menu"> 
          <b-menu-item icon="account" label="Minha conta">
             <b-menu-item icon="cash-multiple" label="Pagamentos" disabled></b-menu-item>
        </b-menu-item>
        <b-menu-item icon="account" label="Configurações">
          <b-menu-item label="Segurança e Privacidade"></b-menu-item>
          <b-menu-item label="Configurações de pagamento"></b-menu-item>
        </b-menu-item>
      </b-menu-list>
      <b-menu-list>
        <b-menu-item label="LGPD" icon="link" tag="router-link" target="_blank" to="/expo"></b-menu-item>
      </b-menu-list>
      <b-menu-list label="Ações">
        <b-menu-item label="Sair"></b-menu-item>
      </b-menu-list>
      </b-menu>
     </div>

  <div class="column is-2">
<section>
   <figure class="image is-square">
     <img class="is-rounded" src="https://s2.glbimg.com/PjbL6xIzxs3OWubVixpf7BEEsu8=/0x0:540x546/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/T/P/1GAQBBQ9KtE0leNx1KgQ/whatsapp-image-2021-06-28-at-23.32.20.jpeg">
    </figure>
     <section class="section">
        <h1 class="title">Juliana</h1>
     </section>
   </section>
   <div class="column is-1"></div>
  </div>
 </div>
 </div>
</template>


<script>
export default {
  data() {
    return {
      isActive: true
    }
  }
}
</script>