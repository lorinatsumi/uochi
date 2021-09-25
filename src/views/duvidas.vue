<template>

 <section class="section is-small">
    <div class="content is-medium has-text-centered">
         <h2>Dúvidas frequentes</h2>
  
  

  
  <section class= "p-6">
      
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
                        {{ duvida.title }}
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
                    {{ duvida.text }}
                </div>
            </div>
        </b-collapse>

  </section>
</div>
</section>
</template>

<script>
    export default {
        data() {
            return {
                isOpen: 0,
                duvidas: [
                {
                    title: 'Quais as formas de pagamento?',
                    text: 'Os pagamentos são feitos online. Até o momento aceitamos cartão de crédito, transferência bancária, Mercado Pago, PIX e Picpay. As transações de cartão de crédito são realizadas através do Mercado Pago, um dos maiores gateways de pagamento do Brasil. Muito fácil e prático!'
                },
                {
                    title: 'Como reagendar ou cancelar meu atendimento?',
                    text: 'É só entrar em contato pelo nosso whatsapp ou email. * O reagendamento deve ser realizado com antecendência de no máximo 6 (seis) horas. * O cancelamento/reagendamento entre três horas e uma hora de antecedência ensejam a cobrança de 50% do valor dos serviços agendados.'
                },
                {
                    title: 'Preciso ter meus próprios produtos de limpeza?',
                    text: 'Não. Caso deseje, você pode optar por profissionais que levam os produtos de limpeza necessários :)'
                },
                {
                    title: 'Preciso ter meus próprios produtos de limpeza?',
                    text: 'Não. Caso deseje, você pode optar por profissionais que levam os produtos de limpeza necessários :)'
                },
                ]
            }
        }
    }
</script>
  