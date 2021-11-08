<template>
  
  <div>
    <section class="section is-medium">
    <div class="content is-medium has-text-centered">
         <h2>Dúvidas frequentes</h2>

  
     <section class= "section is-small">
      
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
                        {{ duvida.pergunta }}
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
                    {{ duvida.resposta }}
                </div>
            </div>
        </b-collapse>

  </section>
</div>
</section>
</div>
</template>

<script>
    export default {
        data() {
            return {
                isOpen: 0,
                duvidas: [
                
                ]
            }
        },

        created() {
          var self = this;
          this.axios.get('duvidas/').then((response) => {
            self.duvidas = response.data;
          })
        }
    }
</script>
  