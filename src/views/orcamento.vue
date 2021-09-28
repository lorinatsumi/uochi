<template>
 <div>
  <section class= "section is-small has-background-white-ter">
    <div class="content is-medium has-text-centered">
         <h2>Solicitação de serviço</h2>

    </div>
  </section>

  <section class= "has-text-centered has-background-white-ter">
    <p class = "title is-6"> Para quando deseja o serviço? </p>
    <br>

          
    <b-datetimepicker v-model="datetime" inline></b-datetimepicker>


  <br>
  <br>

  <p class = "title is-6"> Quanto tempo de serviço você deseja contratar? </p>
    <br>

    <b-field label="Horas">
       <b-select v-model="hourFormat">
                    <option :value="undefined"></option>
                    <option value="1">01</option>
                    <option value="2">02</option>
                    <option value="3">03</option>
                    <option value="4">04</option>
                    <option value="5">05</option>
                    <option value="6">06</option>
                    <option value="7">07</option>
                    <option value="8">08</option>
                    
                </b-select>
            </b-field>

     <b-field label= "minutos">
                <b-select v-model="hourFormat">
                    <option :value="undefined"></option>
                    <option value="12">00</option>
                    <option value="24">30</option>
                </b-select>
            </b-field>

  <br>
  <br>

  <div class = "container is-max-desktop">
    <b-field label="Instruções"
            :label-position="labelPosition">
            <b-input maxlength="150" style= "is-primary" type="textarea" placeholder = "(Por exemplo: Fazer limpeza da cozinha, sala e banheiros. Foco em tirar gordura do fogão, retirar mofo da parede da sala e limpeza dos pisos no geral. Por favor, não mexer nos itens do escritório.)"> </b-input>
        </b-field>
  </div>

  <b-field>
            <b-switch style = "is-primary" size="is-default">Incluir produtos de limpeza</b-switch>
        </b-field>

  <p class = "is-size-7">Importante: o profissional não levará balde, vassoura, rodo e escada.
  <br>
  Se esses itens forem necessários, devem estar disponíveis no local da limpeza.</p>

<br>
<br>

<div class = "container is-max-desktop is-small">
    <b-field label="Quem recerá o profissional?"
            :label-position="labelPosition">
            <b-input maxlength="50" style= "is-primary" type="textarea" placeholder = "Informe se será você, alguma outra pessoa ou deixará a chave em algum lugar específico, como na portaria. (Caso seja outra pessoa, informe o nome completo)"> </b-input>
        </b-field>
  </div>


  </section>
 </div> 
 
</template> 

<script>
export default {
        data() {
            return {
                datetime: new Date()
            ,
                hourFormat: undefined, // Browser locale
            enableSeconds: false,
            locale: undefined // Browser locale
        }
        }
    }
</script>