const menuNav = ref<boolean>(false)

export const useNav = () => {
  const toggleNav = () => menuNav.value = !menuNav.value

  return {
    menuNav,
    toggleNav
  }
}
