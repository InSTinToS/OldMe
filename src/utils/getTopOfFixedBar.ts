import { MutableRefObject } from 'react'

/* 
  Para que ?
  para fazer uma navbar que está no meio do site se posicionar fixada
  ao topo quando a página for escrollada para baixo

  Como utilizar ?
  Obter o ref de uma div aonde deseja colocar a navbar
  Usar um estado para obter o retorno da função e adiciona-la ao estilo
  da navbar
  possivel adição de padding dentro da div referenciada

  Examplo em Next:

  useEffect(() => {
    window.addEventListener('scroll', () =>
      setTop(getTopOfFixedNavbar(aboveParallax))
    )
  }, [aboveParallax])
*/

const getTopOfFixedNavbar = (
  refOfDivInInitialPosition: MutableRefObject<HTMLElement>
) => {
  const topDistanceFromViewport = refOfDivInInitialPosition.current?.getBoundingClientRect()
    .top
  const conditionToFix = topDistanceFromViewport > 0

  return conditionToFix ? topDistanceFromViewport : 0
}

export default getTopOfFixedNavbar
