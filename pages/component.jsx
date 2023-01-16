import Head from 'next/head'
import Image from 'next/image'
import ButtonComponent from '../components/buttons/ButtonComponent'
import CardComponent from '../components/cards/CardComponent'
import DropdownComponent from '../components/dropdown/DropdownComponent'
import SliderComponent from '../components/sliders/SliderComponent'
import TitleComponent from '../components/titles/TitleComponent'

export default function Home() {
  return (
    <div>
      <CardComponent/>
      <DropdownComponent/>
      <ButtonComponent type="text">
        Learn more <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
      </svg>
      </ButtonComponent>
      <SliderComponent height="500px"/>
      <TitleComponent title="do more get more" width={330} color="#FFE13E"/>
    </div>
  )
}
