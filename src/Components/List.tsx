import React, { useState, useEffect } from 'react'

export default ()=>{
    let initial:any = []
    const [cardList, setCardList] = useState(initial)

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
            <form className="row">
                <div>     
                    <label><input type="radio" name="sorting" value="byEligible"/> Sort by Eligible</label>
                </div>
                <div> 
                    <label><input type="radio" name="sorting" value="byEarn"/> Sort by Highest Earning</label>
                </div>
                <div>    
                    <label><input type="radio" name="sorting" value="byName"/> Sort by Name</label>
                </div>
            </form>

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
                        <div key={index} className="container-list">
                            <div className="row">
                                <p className="">Earning: {element.earningsPerMinute}</p>
                                <p className="">{eligibility(element.isEligible)}</p>
                                <p className="">ID: {element.gpuId}</p>
                            </div>
                            <h1 className="row">{element.gpuName}</h1>
                        </div>
                    )
                })}

                
            </div>
        </>
    )


}