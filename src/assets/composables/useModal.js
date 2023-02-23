import { ref } from 'vue'

export function useModal(){
    const modalRef = ref(null);
    const showModal = ref(false);
    
    const openModal = () => {
      showModal.value = true;
    }

    const closeModal = () => {
     showModal.value = false;
    }

    return {
        modalRef, 
        showModal, 
        openModal, 
        closeModal
    }
}

