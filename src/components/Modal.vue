<template>
    <div class="root">
        <teleport to="body">
            <div v-if="showModal" class="modal">
                <div>
                    <ModalContent
                        :title="title"
                        :message="message" />
                     <button class="button | close-modal" @click="$emit('closeModal')">Cerrar</button>
                </div>
            </div>
        </teleport>
    </div>
</template>

<script setup>
import ModalContent from './ModalContent.vue';

defineProps({
    showModal: {
      type: Boolean,
      required: true
    },
    title: {
        type: String, 
        required: true
    }, 
    message: {
        type: String, 
        required: true
    }
})

defineEmits(['closeModal'])

</script>

<style lang="scss" scoped>
@import '../scss/variables';
@import '../scss/utility';
.root {
    position: relative;
}

.modal {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal > div {
    background-color: $neutral-clr-50;
    padding: 1em;
    border-radius: 10px;
}

.close-modal {
  float: right;    
}
</style>