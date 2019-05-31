import React, { useState, useEffect } from 'react'

export default ()=>{
    
    const [cardList, setCardList] = useState()
    const [hello, setHelo] = useState()

    const onLoad = async ()=>{
        await fetch('https://api.salad.io/core/master/get-gpu-whitelist')
        .then(response => response.json())
        .then((data) =>{ 
            // setCardList(
            //     data.gpuList.isEligible.sort((a:any, b:any)=>{
            //         return a > b;
            //     })
            // );
            


        })
    }

    const check=()=>{
        return(
            <div>
                <p>hellooooo</p>
            </div>
        )
    }

    useEffect(()=>{
        onLoad();
    }, [])


    return(
        <>
            {check()}
            <div id="cardList">
                     
            </div>
        </>
    )


}