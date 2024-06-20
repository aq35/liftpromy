<template>
    <div>
        <h1>Contact Me</h1>
        <form @submit.prevent="submitForm">
            <input type="text" v-model="name" placeholder="Your Name" />
            <input type="email" v-model="email" placeholder="Your Email" />
            <textarea v-model="message" placeholder="Your Message"></textarea>
            <button type="submit">Send</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Contact',
    data() {
        return {
            name: '',
            email: '',
            message: ''
        };
    },
    methods: {
        submitForm() {
            // フォームの処理
            alert(`Message sent by ${this.name}`);
        }
    }
};
</script>