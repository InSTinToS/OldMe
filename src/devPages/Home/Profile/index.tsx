import led from 'assets/led.gif'
import Style, { Avatar, SliderItem } from './styles'
import profile from 'assets/spider.jpg'
import Perspective from 'components/Perspective'
import Slider from 'components/Slider'
import Card from 'components/Card'

interface ProfileProps {}

const Profile = ({}: ProfileProps) => (
  <Style>
    <img id='background' src={led} />

    <Perspective>
      <Slider gap={600} childrenWidth={600} gapVertical={24}>
        <SliderItem>
          <div className='title'>Bem vindo</div>

          <Card id='profile'>
            <Avatar src={profile} />

            <h1>Miguel Andrade Barreto</h1>

            <h2>Desenvolvedor front-end</h2>

            <p>
              São Paulo - Brasil <br />
              Universidade Anhembi Morumbi <br />
              <a href='https://github.com/InSTinToS' target='blank'>
                https://github.com/InSTinToS
              </a>
            </p>
          </Card>
        </SliderItem>

        <SliderItem>
          <div className='title'>Resuminho</div>

          <Card>
            <p>...</p>
          </Card>
        </SliderItem>

        <SliderItem>
          <div className='title'>Objetivo profissional</div>

          <Card>
            <p>...</p>
          </Card>
        </SliderItem>
      </Slider>
    </Perspective>
  </Style>
)

export default Profile
