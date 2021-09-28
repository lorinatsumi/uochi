<template>
 <div>
  <section class= "section is-medium">
    <div class="content is-medium has-text-centered">
         <h2>Solicitação de serviço</h2>

    </div>
  </section>

    <div class="container">
      <section>
        <b-field label="Para qual data você deseja o serviço?" grouped>
            <b-datepicker v-model="selected" :mobile-native="false">
                <template v-slot:trigger>
                    <b-button
                        icon-left="calendar-today"
                        type="is-primary" />
                </template>
            </b-datepicker>
            <b-input expanded readonly :value="selectedString" />
        </b-field>
       </section>
    </div>
 </div> 
</template> 

<script>
export default {
    data() {
        return {
            selected: null
        }
    },
    computed: {
        selectedString() {
            return this.selected ? this.selected.toDateString() : ''
        }
    }
}
</script>