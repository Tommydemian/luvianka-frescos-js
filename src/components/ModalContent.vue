<template>
    <div class="modal-content">
        <h2>{{ title }}</h2>
        <p>{{ message }}</p>
    </div>
</template>

<script setup>

defineProps({
    title: {
        type: String, 
        required: true
    }, 
    message: {
        type: String, 
        required: true
    }
})
</script>

<style lang="scss" scoped>
</style>