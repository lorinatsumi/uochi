
<template>
    <form action="">
      <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">Login</p>
            <button
             type="button"
             class="delete"
             @click="$emit('close')"/>
           </header>
            <section class="modal-card-body">
             <b-field label="Email">
               <b-input
                  type="email"
                 :value="email"
                 placeholder="Digite seu email"
                 required>
                </b-input>
             </b-field>

             <b-field label="Senha">              
               <b-input
                  type="senha"
                  :value="password"
                  password-reveal
                  placeholder="Digite sua senha" required>
              </b-input>
             </b-field>

                <b-checkbox>Me lembre</b-checkbox>
            </section>
            <footer class="modal-card-foot">
                <b-button
                    label="Fechar"
                    @click="$emit('close')" />
                <b-button
                    label="Entrar"
                    type="is-primary" />
             </footer>
         </div>
     </form>
</template>
    

<script>
  export default {
    props: ['email', 'password', 'canCancel']
  }
</script>
