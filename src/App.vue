<template>
    <main class="flex flex-col justify-between">
        <div>
            <Header />
            <div class="container mx-auto px-4 max-w-screen-xl">
                <Main />
            </div>
        </div>
        <Footer />
    </main>
</template>

<script setup>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style scoped>
main {
    min-height: 100vh;
}
</style>
