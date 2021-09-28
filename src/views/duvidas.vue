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
</div>
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
                    title: 'Não gostei do serviço realizado. Com quem devo falar',
                    text: 'Caso o serviço não saia como o esperado, entre em contato conosco pelo WhatsApp ou email. Fique tranquilo e nos envie fotos após o término do serviço para identificarmos o que aconteceu. Temos um exigente padrão de qualidade! Reforçamos que preencha nosso breve formulário de feedback e avaliação do profissional, pois sua opinião é muito importante e nos ajuda a sempre aprimorar as suas experiências. Para situações de estorno, a notificação deve ser feita no prazo de 12 hrs após finalização do atendimento.'
                },
                {
                    title: 'Posso pedir o serviço mesmo não estando em casa na data e horário marcados?',
                    text: 'Pode sim. Em seu orçamento você deve indicar quem ou como fornecerá o acesso a(o) profissional.'
                },
                {
                    title: 'Gostaria de informar algo ao profissional que irá me atender. Como faço?',
                    text: 'Você poderá preencher o campo "Instruções" em seu orçamento, ou entrar em contato conosco para repassar as devidas informações ao profissional. Nosso time de atendimento via WhatsApp está pronto para te ajudar :)'
                },
                {
                    title: 'Como faço um orçamento?',
                    text: 'Clique no botão "Fazer orçamento" no início da página e preencha rapidinho com algumas informações necessárias. Caso o botão não funcione, é só entrar em contato pelo WhatsApp ou email. Retornaremos com o valor definido de acordo com sua demanda, e com as profissionais disponíveis. Você faz a sua escolha e a confirmação e poderá passar para a etapa de pagamento. E pronto! Logo terá seu lar brilhando novamente.'
                },
                {
                    title: 'Posso escolher qualquer horário que fique melhor para mim?',
                    text: 'Apesar de o horário para agendamento ser livre, é realizado de acordo com a disponibilidade do(a) profissional. Por isso, recomendamos que opte por um horário entre as 06h00 e 19h00, dependendo da sua demanda e do tempo requerido.'
                },
                {
                    title: 'Como funciona o "Serviço compartilhado"?',
                    text: 'Caso você e alguém que more próximo ao seu lar, em um raio de no máximo 1 km, desejem compartilhar o(a) profissional em um mesmo dia e em horários complementares, terão preços especiais!'
                },
                {
                    title: 'Se o profissional cancelar, o que eu faço?',
                    text: 'Fique tranquilo que não vamos te deixar na mão. A equipe Uochi irá trabalhar para resolver a questão da melhor forma possível para você. Entre em contato pelo nosso WhatsApp para definirmos se existe a possibilidade de fazer o atendimento com outro profissional. Vai aí uma dica: Você não vai se arrepender de aceitar a substituição. Confiamos na entrega de todos os nossos parceiros. Mas, caso você não deseja, o valor pago será estornado.'
                },
                {
                    title: 'Tolerância de atraso',
                    text: 'Atrasos por parte do profissional: tolerância de 30 minutos. Caso seja avisado e você aceite, o tempo tolerado poderá ser maior. Caso o profissional chegue depois disso e você não queira mais o serviço, o valor integral será estornado ou reagendaremos com outro profissional. Atrasos por parte do cliente: tolerância de 20 minutos. Caso você não compareça neste tempo, o profissional terá o direito de ir embora e mesmo assim receberá como se o serviço tivesse sido realizado. Neste caso, não há estorno.'
                },
                ]
            }
        }
    }
</script>
  