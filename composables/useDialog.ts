const isOpen = ref<boolean>(false)

export const useDialog = () => {
  const openModal = () => {
    isOpen.value = true
    lockBodyScroll()
  }

  const closeModal = () => {
    isOpen.value = false
    unlockBodyScroll()
  }

  const lockBodyScroll = () => {
    document.body.style.overflow = 'hidden'
  }

  const unlockBodyScroll = () => {
    document.body.style.overflow = ''
  }

  return {
    isOpen,
    openModal,
    closeModal
  }
}
