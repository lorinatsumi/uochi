<template>
 <div>
   <section class= "section is-small has-background-white-ter">
    <div class="content is-medium has-text-centered">
         <h1>Solicitação de serviço</h1>

    </div>
  </section>

   <section v-if="!currentUser" class= "has-text-centered has-background-white-ter">
      Você precisa estar logado para realizar um orçamento
   </section>
   <section v-else class= "has-text-centered has-background-white-ter">
      <p class = "title is-4"> Desejo o serviço para o dia... </p>
      <br>

            
      <b-datetimepicker v-model="data" inline></b-datetimepicker>


    <br>
    <br>

    <p class = "title is-4"> Com a duração de... </p>
  

          <b-field label>
            <b-select v-model="agendamento.pacote" placeholder="Selecione um Pacote" expanded="true">
                    <option
                              v-for="pacote in pacotes"
                              :value="pacote.id"
                              :key="pacote.id">
                              {{ pacote.descricao }} - {{ pacote.valor }}
                    </option>
                </b-select>
          </b-field>
        
      <br>
      <br>


      <p class = "title is-4"> Instrução e informações </p>

      <div class = "container is-max-desktop">  
              <b-input v-model="agendamento.instrucoes" maxlength="150" style= "is-primary" type="textarea" placeholder = "(Por exemplo: Fazer limpeza da cozinha, sala e banheiros. Foco em tirar gordura do fogão, retirar mofo da parede da sala e limpeza dos pisos no geral. Por favor, não mexer nos itens do escritório.)"> </b-input>
          
      </div>

      <br>

     

      <p class = "title is-4"> O profissional deverá... </p>
      <br>

        <b-field class="has-text-centered">
            <b-radio-button v-model="agendamento.quemRecebera"
                native-value="Interfonar/Tocar a campainha e aguardar"
                type="is-success is-light is-outlined">
                <b-icon icon="close"></b-icon>
                <span>Interfonar/Tocar a campainha e aguardar</span>
            </b-radio-button>

            <b-radio-button v-model="agendamento.quemRecebera"
                native-value="egar a chave na recepção"
                type="is-success is-light is-outlined">
                <span>Pegar a chave na recepção</span>
            </b-radio-button>

            <b-radio-button v-model="agendamento.quemRecebera"
                native-value="Apenas entrar (Estará aberto)"
                type="is-success is-light is-outlined">
                Apenas entrar (Estará aberto)
            </b-radio-button>

        </b-field>


      

        <br>
        <br>

      <b-field>
              <b-switch v-model="agendamento.incluirProduto" style = "is-primary" size="is-medium"  >Desejo incluir produtos de limpeza</b-switch>
      </b-field>

      <p class = "is-size-7">Importante: o profissional não levará equipamentos como balde, vassoura, rodo e escada.
      <br>
      Se esses itens forem necessários, devem estar disponíveis no local da limpeza.</p>

      <br>
      <br>

      <b-button type="is-primary" @click="iniciarAgendamento()">Escolher profissional</b-button>

      <br>
      <br>
      <br>

    </section>

 </div> 
</template> 

<script>
import moment from 'moment';

export default {
    props: ['canCancel'],
    data(){
        return {
            data: null,
            agendamento: {
              data: '', 
              horario: '',
              duracaoServico: '',
              //horas: '',
              minutos: '',
              instrucoes: '',
              quemRecebera: '',
              incluirProduto: false,
            },
            pacotes: []
        }
    },  
    computed: {
      currentUser () {
        return this.$store.getters.currentUser
      }
    },      
    created() {
      var self = this;
      //Chama a api para buscar as pacotes
      this.axios.get('pacotes/').then((response) => {
        self.pacotes = response.data;
      })
      
    },
    methods: {
      iniciarAgendamento() {


        console.log('data');
        var dataFormatada = moment(this.data).format('YYYY-MM-DD');
        var horario = moment(this.data).format('HH:mm');
        console.log(this.data);
        console.log(dataFormatada);
        console.log(horario);
        

        this.agendamento.data = dataFormatada;
        this.agendamento.horario = horario;

        
        var self = this;

        //Chama a api para criar o usuário
        this.axios.post('agendamentos-create/', this.agendamento).then((response) => {
          console.log(response);
          self.$buefy.dialog.alert('Agendamento iniciado. Escolha agora o profissional!')
          self.$router.push({ name: 'Profissionais', query: { agendamento: response.data.id }});
        })
        
      }      
    }
}
</script>