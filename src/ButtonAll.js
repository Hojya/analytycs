function ButtonAll({btnAll}){
    return(
        <div>
            <button className="button" onClick={() => btnAll('all')}>Все отчеты</button>
        </div>
    )
}
export default ButtonAll;