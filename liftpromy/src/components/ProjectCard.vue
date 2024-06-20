<template>
    <div class="project-card">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <img :src="project.image" alt="Project Image" />
        <a :href="project.link" target="_blank">View Project</a>
    </div>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: {
        project: {
            type: Object,
            required: true
        }
    }
};
</script>

<style scoped>
.project-card {
    border: 1px solid #ccc;
    padding: 16px;
    border-radius: 8px;
    margin: 16px;
    text-align: center;
}

.project-card img {
    max-width: 100%;
    height: auto;
    margin: 8px 0;
}
</style>