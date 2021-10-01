
const History = ({ allClicks }) =>{
    
    return allClicks.length === 0 ?
        <p> Teh app is used by pressing the buttons</p>
    :
        <p>Button press history: {allClicks.join(' | ')}</p>}

export default History