const theme = {
  colors: { primary: '#67daf9', secondary: '#00000', tertiary: '#fcfcfc' },
  glass: {
    primary: {
      backdropFilter: 'blur(1.5px)',
      background: 'rgba(103, 218, 249, 0.4)',
      border: '1px solid rgba(103, 218, 249, 0.18)',
      shadow: ' 0 8px 32px 0 rgba(103, 218, 249, 0.37)'
    }
  },
  font: {
    giant: 'clamp(4rem, 3.3333rem + 2.0833vw, 5rem);',
    big: 'clamp(3rem, 2.3333rem + 2.0833vw, 4rem);',
    medium: 'clamp(2rem, 1.3333rem + 2.0833vw, 3rem);',
    small: 'clamp(1rem, 0.3333rem + 2.0833vw, 2rem);',
    tiny: 'clamp(1rem, 0.6667rem + 1.0417vw, 1.5rem);'
  }
}

export default theme
