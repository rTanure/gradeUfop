import "./style.css"

import Subject from "../Subject";

export default function Period(data) {
    return (
        <div className="period">
            <span>{data.index + 1}</span>
            {
                data.data.map((obj, index)=>{
                    return (
                        
                        <div key={obj.id}>
                            <Subject code={obj.id} name={obj.nome} selectedSubjectState={data.selectedSubjectState} interactions={data.interactions}/>
                            
                        </div>

                    )
                })
            }
        </div>
    )
}