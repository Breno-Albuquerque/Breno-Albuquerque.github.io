export const animateTitle = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 0.7
    }
  },
}

export const animateIntroduction = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 1.2
    }
  },
}

export const animateButtonsBox = {
  initial: {
    x: '-100vw',
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 6,
      damping: 6,
      stiffness: 30,
      delay: 1.7,
      staggerChildren: 0.5
    }
  },
}