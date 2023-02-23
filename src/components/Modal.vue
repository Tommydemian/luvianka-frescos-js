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
    }, 
    message: {
        type: String, 
    }
})

defineEmits(['closeModal'])

</script>

<style lang="scss" scoped>
@import '../scss/variables';
@import '../scss/utility';
@import '../scss/mixins';
.root {
    position: relative;
}
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: auto;
  margin-left: -150px;
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