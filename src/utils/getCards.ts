import css from 'assets/skills/css.png'
import davinci from 'assets/skills/davinci.png'
import figma from 'assets/skills/figma.png'
import flStudio from 'assets/skills/fl-studio.png'
import framerMotion from 'assets/skills/framer-motion.gif'
import github from 'assets/skills/github.png'
import html from 'assets/skills/html.png'
import illustrator from 'assets/skills/illustrator.png'
import javascript from 'assets/skills/javascript.png'
import knex from 'assets/skills/knex.png'
import mongo from 'assets/skills/mongo.png'
import mysql from 'assets/skills/mysql.png'
import next from 'assets/skills/next.png'
import node from 'assets/skills/node.png'
import photoshop from 'assets/skills/photoshop.png'
import reactRouter from 'assets/skills/react-router.png'
import react from 'assets/skills/react.png'
import reduxToolkit from 'assets/skills/redux-toolkit.png'
import styledComponents from 'assets/skills/styled-components.png'
import typescript from 'assets/skills/typescript.png'
import yarn from 'assets/skills/yarn.png'

import { MiniCardProps } from 'components/MiniCard'

const cards: MiniCardProps[] = [
  {
    image: react,
    title: 'React',
    color: 'green',
    link: 'https://pt-br.reactjs.org/'
  },
  {
    image: next,
    title: 'Next',
    color: 'green',
    link: 'https://nextjs.org/'
  },
  {
    image: github,
    color: 'green',
    title: 'Github',
    link: 'https://github.com/InSTinToS'
  },
  {
    image: framerMotion,
    title: 'Framer Motion',
    color: 'green',
    link: 'https://www.framer.com/motion/'
  },
  {
    image: figma,
    title: 'Figma',
    color: 'green',
    link: 'https://www.figma.com/design/'
  },
  {
    image: flStudio,
    title: 'FL Studio',
    color: 'green',
    link: 'https://www.image-line.com/'
  },
  {
    image: styledComponents,
    title: 'Styled-Components',
    color: 'green',
    link: 'https://styled-components.com/'
  },
  {
    image: reduxToolkit,
    title: 'Redux Toolkit',
    color: 'green',
    link: 'https://redux-toolkit.js.org/'
  },
  {
    image: reactRouter,
    title: 'React Router',
    color: 'green',
    link: 'https://reactrouter.com/web/guides/quick-start'
  },
  {
    image: html,
    title: 'HTML',
    color: 'green',
    link: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML'
  },
  {
    image: css,
    title: 'CSS',
    color: 'green',
    link: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS'
  },
  {
    image: javascript,
    title: 'Javascript/Ecmascript',
    color: 'green',
    link: 'https://pt-br.reactjs.org/'
  },
  {
    image: typescript,
    title: 'Typescript',
    color: 'green',
    link: 'https://www.typescriptlang.org/'
  },
  {
    image: yarn,
    title: 'Yarn and NPM',
    color: 'green',
    link: 'https://yarnpkg.com/'
  },
  {
    image: node,
    title: 'Node',
    color: 'yellow',
    link: 'https://nodejs.org/en/'
  },
  {
    image: mysql,
    title: 'MySQL',
    color: 'yellow',
    link: 'https://www.mysql.com/'
  },
  {
    image: knex,
    title: 'Knex',
    color: 'red',
    link: 'https://knexjs.org/'
  },
  {
    image: mongo,
    title: 'Mongo DB',
    color: 'red',
    link: 'https://www.mongodb.com/pt-br'
  },
  {
    image: illustrator,
    title: 'Adobe Illustrator',
    color: 'red',
    link: 'https://www.adobe.com/br/products/illustrator.html'
  },
  {
    image: photoshop,
    title: 'Adobe Photoshop',
    color: 'red',
    link: 'https://www.adobe.com/br/products/photoshop.html'
  },
  {
    image: davinci,
    title: 'Davinci Resolve',
    color: 'red',
    link: 'https://www.blackmagicdesign.com/br/products/davinciresolve/'
  }
]

export default cards
