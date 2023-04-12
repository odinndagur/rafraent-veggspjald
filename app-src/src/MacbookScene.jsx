import { Html } from "@react-three/drei"
import { useControls } from "leva"
import { Suspense } from "react";
import { Macbook } from './Macbook';
import './MacbookScene.css';


function Visir(){
    const { vision, fontSize, contrast, saturation, scene } = useControls({
        vision: { value: 1, min: 0.5, max: 4, step: 0.01 },
        fontSize: { 
          value: 1,
          min: 0.5,
          max: 4,
          step: 0.01,
          render: (get) => get('scene') === 'MacbookScene'
        },
        contrast: { value: 0, min: -1, max: 1, step: 0.01 },
        saturation: { value: 1, min: 0, max: 1, step: 0.01 },
      })

      const styles = {
        visir: {
          zoom:`${vision}`,
          filter:`contrast(${1 + contrast} saturate(${saturation}))`,
          webkitFilter:`contrast(${1 + contrast}) saturate(${saturation})`,
          width:'100%',
          height:'100%',
          display:'flex',
          // justifyContent:'center',
          // alignItems:'center',
          fontSize:`${fontSize}rem`,
          textAlign:'left',
          flexDirection:'column',
          // padding:'0.5rem',
          backgroundColor:'white',
          overflow: 'scroll'
        },
        header: {
          width:'100%',
          height:'auto',
          maxHeight:'4rem',
          display:'flex',
          padding:'0 1rem',
          position:'sticky',
          top:'0',
          justifyContent:'center',
          // alignContent:'center',
          flexDirection:'column',
          backgroundColor:'blue',
          color:'white',
          fontSize: `${Math.min(2,fontSize)}rem`
        },
        thumbnail: {
          width: '250px',
          padding:'1rem'
        },
        newsStory: {
          display:'block',
          margin:'0 4rem',
          maxWidth: '400px',
          overflow: 'auto'
        }
      }
    return (
        <div style={
            styles.visir
          }>
          <header style={styles.header}>
            <h1>Vísir.is</h1>
          </header>
          <main>
            <div style={styles.newsStory}>
                <h2>
                    Netti nettason kominn aftur!
                </h2>
                <p>
                    Helvíti nettur á því eins og alltaf. What a næs yo.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni consequuntur culpa aut laborum, odit dolorum doloremque nisi debitis accusamus laudantium.</p>

                <video controls style={styles.thumbnail} src="http://msx.benzac.de/media/video1.mp4" />
                <p>Aut laborum, odit dolorum doloremque nisi debitis accusamus laudantium dolorum doloremque nisi debitis accusamus laudantium.</p>

            </div>
            <div style={styles.newsStory}>
                <h2>WHAT! Vann í lottó??</h2>
                <p>
                    Hver? Veit ekki. Einhver sem keypti miða.
                </p>
            </div>
            <div style={styles.newsStory}>

            </div>
            <div style={styles.newsStory}>

            </div>
          </main>
          <footer>
            
          </footer>


        </div>
    )
}


export function MacbookScene(){
    
    return (
      <Suspense fallback={null}>
      <group position={[0,-4,-12]}>
      <Macbook position={[0,0,0]} scale={[50,50,50]}/>
          <Html
          // occlude='blending'
          occlude
          transform
          position={[0,5.5,0.08]}
          // zIndexRange={[0,100]}
          >
            <div className="smapp" style={{
              backgroundColor: 'white',
              width:'600px',
              height: '410px',
              borderRadius: '2px',
              overflow:'hidden',
              }}>
                <Visir/>
            </div>
        </Html>
      </group>
      </Suspense>
    )
  }