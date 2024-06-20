<template>
    <div>
        <h1>My Projects</h1>
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'Projects',
    components: {
        ProjectCard
    },
    data() {
        return {
            projects: [
                { id: 1, title: 'Project 1', description: 'Description of project 1' },
                { id: 2, title: 'Project 2', description: 'Description of project 2' },
                // 他のプロジェクト
            ]
        };
    }
};
</script>