<template>
    <div >
    <Profile />
    <!-- <Skills />
    <Projects /> -->
    </div>
</template>

<script>
import Profile from '@/components/Profile.vue';
// import Skills from './components/Skills.vue';
// import Projects from './components/Projects.vue';

export default {
    name: 'App',
    components: {
        Profile,
        // Skills,
        // Projects,
    },
};
</script>

<style>
@import 'bootstrap/dist/css/bootstrap.min.css';
@import '@/assets/resume/css/resume.css';
/* テンプレートのCSSをインポート */
</style>