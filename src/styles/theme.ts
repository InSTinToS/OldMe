const theme = {
  colors: {
    primary: '#67daf9',
    secondary: '#222222',
    tertiary: '#fcfcfc',
    quaternary: '#141414'
  },
  glass: {
    primary: {
      backdropFilter: 'blur(1.5px)',
      background: 'rgba(255, 255, 255, 0.4)',
      border: '1px solid rgba(103, 218, 249, 0.18)',
      shadow: ' 0 4px 32px 0 rgba(103, 218, 249, 0.37)'
    },
    secondary: {
      backdropFilter: 'blur(1.5px)',
      background: 'rgba(0, 0, 0, 0.4)',
      border: '1px solid rgba(0, 0, 0, 0.2)',
      shadow: ' 0 8px 20px 0 rgba(0, 0, 0, 0.5)'
    },
    tertiary: {
      backdropFilter: 'blur(1.5px)',
      background: 'rgba(0, 0, 0, 0.8)',
      border: '1px solid rgba(0, 0, 0, 0.7)',
      shadow: ' 0 8px 20px 0 rgba(0, 0, 0, 0.5)'
    }
  },
  font: {
    giant: 'clamp(3rem, 3.3333rem + 2.0833vw, 5rem);',
    big: 'clamp(2rem, 2.3333rem + 2.0833vw, 4rem);',
    medium: 'clamp(1.6rem, 1.3333rem + 2.0833vw, 2rem);',
    small: 'clamp(1.5rem, 0.3333rem + 2.0833vw, 1.8rem);',
    tiny: 'clamp(1rem, 0.6667rem + 1.0417vw, 1.5rem);'
  }
}

export default theme
