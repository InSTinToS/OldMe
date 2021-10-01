import React, { forwardRef } from 'react'
import Style from './styles'

interface ResumeProps {}

const Resume = forwardRef<any, ResumeProps>(({}, ref) => (
  <Style ref={ref}>
    <h2>Resumo</h2>

    <div>
      <p>
        Estou cursando Engenharia da Computação e com o passar do tempo obtive
        muito interesse na parte de programação, mais especificamente em
        desenvolvimento web.
      </p>

      <p>
        Participo de um projeto de Pesquisa e Desenvolvimento Científico há 2
        anos proporcionado pela universidade e nele consegui colocar em prática
        meus conhecimentos e aprender ainda mais, neste projeto sou responsável
        por desenvolver o front-end e o design (UI/UX), estou utilizando React
        com Typescript e alguns pacotes entre eles Styled Components, React
        Router, Redux Toolkit, etc, para o UI utilizo Figma e Adobe Illustrator
        e para versionamento Git.
      </p>

      <p>
        Inicialmente tenho interesse em trabalhar com Next, React e React-Native
        e posteriormente quero aprender mais sobre o back-end utilizando Node e
        banco de dados MySQL e MongoDB.
      </p>

      <p>
        Como este projeto está chegando ao fim estou em busca de novas
        experiências e conhecimentos, mas agora diretamente no mercado de
        trabalho.
      </p>
    </div>
  </Style>
))

export default Resume
