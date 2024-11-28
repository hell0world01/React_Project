import { useState } from "react"

export default function RandomColor() {
    const [colorType, setColorType] = useState('hex');
    const [color, setColor] = useState("#00000")

    function randomColorGenerator(numb) {
        return Math.floor(Math.random() * numb)
    }

    function generateHexColor(){
        const randomArray = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hexColor = '#';

        for(let i = 0; i < 6; i++){
            hexColor += randomArray[randomColorGenerator(randomArray.length)];
        }
        console.log(hexColor);
        setColor(hexColor)
    }

    function generateRgbColor(){

    }
    return(
        <div style={{
            width: "100vw",
            height: "100vh",
            background: color,
        }}>
            <button className="text-white bg-gray-400 py-1 px-2 rounded" 
            onClick={() => setColorType('hex')}>Create HEX Color</button>
            <button className="text-white bg-gray-400 py-1 px-2 rounded" 
            onClick={() => setColorType('rgb')}>Create RGB Color</button>
            <button className="text-white bg-gray-400 py-1 px-2 rounded" 
            onClick={colorType === 'hex' ? generateHexColor : generateRgbColor}>Generate Random Color</button>
        </div>
    )
}