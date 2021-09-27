<template>
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
            <b-navbar-item href="#/contato">
                Como funciona
            </b-navbar-item>
            <b-navbar-item href="#/quemsomos">
                Quem somos
            </b-navbar-item>
            <b-navbar-item href="#/parceiros">
                Profissionais
            </b-navbar-item>
            
        </template>

         <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
    
</template>

