import React, { useState } from 'react';
import Totals from './Components/Totals';
import './Styles/main.css'
import ListDefault from './Components/List-Default';
import ListByName from './Components/List-byName';
import ListByEarn from './Components/List-byEarn';
import ListByEligible from './Components/List-byEligible'

const App: React.FC = () => {
  
  const [list, setList]=useState(<ListDefault/>)
  
  
  
  
  
  return (
    <>
      <Totals />

      {/* three radio buttons with onClick functions to sort the gpuList array by whatever key we specify */}
      <div className="row">
        <div>    
            <label>
                <input 
                type="radio" 
                name="sorting" 
                value="byEligible" 
                onClick={()=>setList(<ListByEligible/>)}
                /> Sort by Eligibility
            </label>
        </div>
        <div>    
            <label>
                <input 
                type="radio" 
                name="sorting" 
                value="byEarn" 
                onClick={()=>setList(<ListByEarn/>)}
                /> Sort by Highest Earning
            </label>
        </div>
        <div>    
            <label>
                <input 
                type="radio" 
                name="sorting" 
                value="byName" 
                onClick={()=>setList(<ListByName/>)}
                /> Sort by Name
            </label>
        </div>
      </div>

      {list}


    </>
  );
}

export default App;
