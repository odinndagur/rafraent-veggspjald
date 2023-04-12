import { useControls } from 'leva'
import { map, clamp } from './map'
import { Hvittmesh } from './Hvittmesh';
import { Litamesh } from './Litamesh';
import { Linur } from './Linur';
import { HjaKronunni } from './Hjakronunni'
import { HjaKronunniLit } from './Hjakronunnilit';

export function KronuScene() {
    const {  singleSlider } = useControls({
      singleSlider: {
        value: 0,
        min: 0,
        max: 2,
        step: 0.01,
        render: (get) => get('scene') === 'KronuScene'
      }
    })
    return (
      <group>
        {/* <HjaKronunni opacity={1}/> */}
        <HjaKronunniLit opacity={1}/>
        {/* <Litamesh opacity={1} scale={[1,2,1]}/>
        <Hvittmesh opacity={clamp(singleSlider - 1, 0, 1)} scale={[1,2,1]}/>
        <Linur opacity={clamp(singleSlider, 0, 1)} scale={[1,2,1]}/> */}
      </group>
    )
  }