import React, { useState, useEffect } from 'react'

export default ()=>{
    let initial:any = []
    //using initial to declare the type of an array as any because it will not allow you to do so inside useState, and 
    //it has a default type never when defined in useState
    const [cardList, setCardList] = useState(initial)
    




    const onLoad = async ()=>{
        await fetch('https://api.salad.io/core/master/get-gpu-whitelist')
        .then(response => response.json())
        .then((data)=>{
            const list = data.gpuList;
            setCardList(list.sort(byEligible));
        })
        .catch((error)=>{
        console.log(error)
        });

    }
    //below is a comparing function to further define to our default sort function
    //what and how we need to sort. A is the current value that it is looking to sort
    //and B is the next value in the array.
    const byEligible=(a:any, b:any)=>{
        return b.isEligible - a.isEligible
    }


    useEffect(()=>{
        onLoad();
    }, [])


    return(
        <>
            <div>
                {cardList.map((element:any, index:any)=>{
                        
                        const eligibility=(eligibility:any)=>{
                            if(eligibility){
                                return('Qualified')
                            }else {
                                return('Unqualified')
                            }
                        }
                        
                        return(
                            <div key={index} className="container-list" >
                                <div className="row">
                                    <p>Earning: {element.earningsPerMinute}</p>
                                    <p>{eligibility(element.isEligible)}</p>
                                    <p>ID: {element.gpuId}</p>
                                </div>
                                <h1 className="row">{element.gpuName}</h1>
                            </div>
                        )
                    })
                }

                
            </div>
        </>
    )
}