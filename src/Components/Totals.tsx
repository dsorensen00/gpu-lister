import React, { useState, useEffect } from 'react'

export default ()=>{

    const [totalCards, setTotalCards] = useState()
    const [eligible, setEligible] = useState()
    const [moneyMaker, setMoneyMaker] = useState()

    const onLoad = async ()=>{
        await fetch('https://api.salad.io/core/master/get-gpu-whitelist')
        .then(response => response.json())
        .then((data) =>{ 
            setTotalCards(data.gpuList.length);
            setEligible(data.gpuList.filter((eligible:any) => eligible.isEligible === 1).length);
            setMoneyMaker(data.gpuList.filter((moneyMkr:any) => moneyMkr.earningsPerMinute >= 0.023).length)
        })
    }

    useEffect(()=>{
        onLoad();
    }, [])



    return(
        <div className="header">
            <div id="totalCardsContainer" className="container">
                <h1>{totalCards}</h1>
                <p><br/>Total Cards</p>
            </div>
            <div id="totalEligibleContainer" className="container">
                <h1>{eligible}</h1>
                <p><br/>Total Eligible</p>
            </div>
            <div id="numAbove023Container" className="container">
                <h1>{moneyMaker}</h1>
                <p># of cards earning<br/>above 0.023/hour</p>
            </div>
        </div>
    )






}