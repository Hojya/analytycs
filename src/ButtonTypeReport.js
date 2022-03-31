function ButtonTypeReport({btnType}){
    return(
        <div className="type-btn">
            <div >
                <button className="button" onClick={() => btnType('one')}>Доступные направления</button>
            </div>
            <div>
                <button className="button" onClick={() => btnType('two')}>Страгегические отчеты</button>
            </div>
            <div>
                <button className="button" onClick={() => btnType('three')}>Показатели</button>
            </div>
            
            
            
        </div>
        
    )
}
export default ButtonTypeReport;