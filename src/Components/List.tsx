import React, { useState, useEffect } from 'react'

export default ()=>{
    
    let [cardList, setCardList] = useState()

    const onLoad = async ()=>{
        await fetch('https://api.salad.io/core/master/get-gpu-whitelist')
        .then(response => response.json())
        .then((data)=>{
            const list = data.gpuList;
            setCardList([...list]);
        })
        .catch((error)=>{
        console.log(error)
        });

    }



    useEffect(()=>{
        onLoad();
    }, [])


    return(
        <>

            <div id="cardList">
                {cardList.map((element:any, index:any)=>{
                    
                    const eligibility=(eligibility:any)=>{
                        if(eligibility){
                            return('Qualified')
                        }else {
                            return('Unqualified')
                        }
                    }
                    
                    return(
                        <div key={index} className="container-row">
                            <div>
                                <p>Earning: {element.earningsPerMinute}</p>
                                <p>{eligibility(element.isEligible)}</p>
                            </div>
                            <h1>{element.gpuName}</h1>
                        </div>
                    )
                })}

                
            </div>
        </>
    )


}