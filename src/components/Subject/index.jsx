import { useEffect } from "react";
import "./style.css"

export default function Subject(data) {
    const [ selectedSubject, setSelectedSubjects ] = data.selectedSubjectState
    const interactions = data.interactions

    function selectSubject(id) {
        setSelectedSubjects(id)
    }

    let dinamicClass = ""

    dinamicClass += (data.code === selectedSubject) ? " selected " : ""
    
    for(let primary_req of interactions.primary_req) { dinamicClass += (data.code === primary_req) ? " primary_req " : "" }
    for(let secondary_req of interactions.secondary_req) {dinamicClass += (data.code === secondary_req) ? " secondary_req " : ""}
    for(let primary_pre of interactions.primary_pre) { dinamicClass += (data.code === primary_pre) ? " primary_pre " : "" }
    for(let secondary_pre of interactions.secondary_pre) {dinamicClass += (data.code === secondary_pre) ? " secondary_pre " : ""}

    return (
        <div className={"subject " + dinamicClass} onClick={(e) => selectSubject(data.code)}>
            <p className="code">{data.code}</p>
            <p className="name">{data.name}</p>
        </div>
    )
}