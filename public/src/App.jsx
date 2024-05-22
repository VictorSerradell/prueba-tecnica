
import './App.css'
import { useCatImage } from './hooks/useCatImages.js'
import { useCatFact } from './hooks/useCatFact.js'



export function App () {
    const { fact, refreshFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })

const handCLick = async () =>{
    refreshFact()
    }

    return (
        <main>
            <h1>App de Gatitos</h1>
        <button onClick={handCLick}>Get new fact</button>
            
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt=
            {`Image extracted using the first three words for ${fact}`} />}
        

            
        </main>
)
    
}