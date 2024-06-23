<template>
    <div class="col-md-6">
        <div class="card mb-4">
            <div class="card-header">
                {{ title }}
            </div>
            <div class="card-body">
                <p>{{ message }}</p>
                <div v-for="skill in skills" :key="skill.name" class="skill-bar">
                    <div class="d-flex justify-content-between align-items-center mb-1">
                        <h5 class="mb-0">{{ skill.name }}</h5>
                        <span class="small">{{ skill.comment }}</span>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" :style="{ width: skill.level + '%' }"
                            :aria-valuenow="skill.level" aria-valuemin="0" aria-valuemax="100"><span class="small">{{
                    skill.level }}%</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface Skill {
    name: string;
    level: number;
    comment: string;
}

defineProps<{
    title: string;
    message: string;
    skills: Skill[];
}>();
</script>

<style scoped>
.skill-bar {
    margin-bottom: 1rem;
}

.skill-bar .progress {
    height: 0.8rem;
    /* smaller height */
}

.skill-bar h5 {
    font-size: 0.9rem;
    /* smaller font size */
}

.skill-bar .small {
    font-size: 0.8rem;
}
</style>