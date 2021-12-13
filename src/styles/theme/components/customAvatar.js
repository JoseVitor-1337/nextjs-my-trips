const customAvatar = {
  baseStyle: {},
  sizes: {
    md: {
      height: '40px',
      width: '40px',
    },
  },
  variants: {
    square: {
      rounded: 'md',
      backgroundCover: 'contain',
      img: {
        borderRadius: '5px',
      },
    },
  },
  defaultProps: {
    variant: 'square',
    size: 'md',
  },
}

export default customAvatar
