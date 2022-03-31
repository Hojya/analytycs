function ButtonFavor({btnFavor}){
    return(
        <div> 
            <button className="button" onClick={() => btnFavor('yes')}>Избранное</button>
        </div>
    )
        
    
    
}
export default ButtonFavor;