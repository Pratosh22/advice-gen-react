import diceimg from '../images/icon-dice.svg';
function Dice(props){
    const handleClick=()=>{
        props.onClick();
    }
    return(
        <div className='dice'><img src={diceimg} onClick={handleClick} alt="dice-img" /></div>
        
    )

}
export default Dice;