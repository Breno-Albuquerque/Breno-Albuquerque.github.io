export const titleBoxVar = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
}

export const containerVariant = {
  hidden: {
    
  },
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5
    }
  }
}

export const boxVariant = {
  hidden: {
    opacity: 0,
    x: -50,
    y: -50,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}