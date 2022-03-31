import { useState } from "react";
import Reports from "./Reports";
import { data } from "./data";
import ButtonAll from "./ButtonAll";
import ButtonFavor from "./ButtonFavor";
import ButtonTypeReport from "./ButtonTypeReport";


function Main() {
    const [report, setReport] = useState(data);

    const allRep = (allRep) => {
        const newAll = data.filter(index => index.allRep===allRep);
        setReport(newAll);
    }

    const favorReport = (favorRep) => {
        const favor = data.filter(index => index.favorRep===favorRep);
        setReport(favor);
    }

    const typeReport = (typeRep) => {
        const type = data.filter(index => index.typeRep===typeRep);
        setReport(type);
    }

    return(
        <div className="cont-groupBtn">
            

            <div className="cont-btn">
                <div className="btn">
                    <ButtonAll btnAll={allRep}/>
                </div> 

                <div className="btn">
                    <ButtonTypeReport btnType={typeReport}/>
                </div>

                <div className="btn">
                    <ButtonFavor btnFavor={favorReport}/>
                </div>
            </div>

            <div>
                <Reports blockRep={report}/>
            </div>
        
            
        </div>
    )
}
export default Main;