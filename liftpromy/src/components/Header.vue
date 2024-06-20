<script setup>
</script>

<template>
    <header>
        <img src="@/assets/logo.png" alt="Logo" class="logo" />
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/projects">Projects</router-link>
            <router-link to="/contact">Contact</router-link>
        </nav>
    </header>
</template>

<style scoped>
.logo {
    height: 40px;
    margin-right: 10px;
}

/* その他のスタイルを追加 */
</style>