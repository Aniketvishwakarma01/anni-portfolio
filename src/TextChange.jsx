import React, {useState, useEffect } from 'react'

const TextChange = () => {
    const texts= ["Hi, I'm Aniket Vishwakarma", "I'm a Full Stack Java Developer", "I build web applications"];
    const [currentText, setCurrentText] = useState("");
    const [endValue, setEndValue] = useState(true);
    const [isForward, setIsForward] = useState(true);
    const [index, setIndex] = useState(0);

    useEffect(()=>{
        const inetrval =setInterval(()=>{
            setCurrentText(texts[index].substring(0, endValue))
            if(isForward){
                setEndValue((prev)=>prev+1);
            }else{
                setEndValue((prev)=>prev-1);
            }
            if(endValue > texts[index].length+10){
                setIsForward(false);
            }
            if(endValue<2.1){
                setIsForward(true);
                setIndex((prev)=>prev&texts.length);
            }
        }
        , 100);
        return () => clearInterval(inetrval);
    }, [endValue, isForward, index, texts]);
    return (
    <div className="transition ease duration-300">{currentText}
      
    </div>
  )
}

export default TextChange
