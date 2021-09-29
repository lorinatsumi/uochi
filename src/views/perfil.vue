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

<section>
<figure class="image is-128x128">
  <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
</figure>
</section>

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