const menuNav = ref<boolean>(false)

export const useNav = () => {
  const toggleNav = () => {
    menuNav.value = !menuNav.value

    if (menuNav.value) {
      document.documentElement.style.overflow = 'hidden'
      window.scrollTo(0, 0)
      return
    }

    document.documentElement.style.overflow = 'auto'
  }

  return {
    menuNav,
    toggleNav
  }
}
