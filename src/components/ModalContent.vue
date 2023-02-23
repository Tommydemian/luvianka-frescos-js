<template>
    <div class="modal-content">
        <h2 class="title">{{ title }}</h2>
        <p class="mssg">{{ message }}</p>
    </div>
</template>

<script setup>

defineProps({
    title: {
        type: String, 
        default: 'Proximamente'
    }, 
    message: {
        type: String, 
        default: 'Estamos trabajando para subirlo a la brevedad.' 
    }
})
</script>

<style lang="scss" scoped>
@import '../scss/variables';
@import '../scss/utility';
@import '../scss/mixins';

.title {
    font-size: $fs-670;
    font-weight: $fw-semibold;
}
.mssg {
    padding-block: 1em;

    @include mq (small){
        max-width: 25ch;
    }
}
</style>