import "./style.css"

import Period from "../Period"

import data from "../../data/data"
import { useEffect, useState } from "react"
import calcInteractions from "../../scripts/calcInteractions"


export default function Grade({states}) {
    // ID do curso que está sendo apresentado.
    const [courseId] = states

    // Dados recolhidos da base de dados de acordo com o curso selecionado.
    const [ atualData, setAtualData ] = useState(data.eng_de_computacao)

    // Curso selecionado para calcular os demais dependentes.
    const [ selectedSubject, setSelectedSubject ] = useState(null)
    const [ subjectInteractions, setSubjectInteractions ] = useState({
        "primary_req": [],
        "secondary_req": [],
        "primary_pre": [],
        "secondary_pre": []
    })

    useEffect(()=>{
        setSelectedSubject(null)
        
        switch (Number(courseId)){
            case 1:
                setAtualData(data.eng_de_computacao)
                break
            case 2:
                setAtualData(data.eng_eletrica)
                break
            case 3:
                setAtualData(data.eng_de_computacao)
                break
            default:
                setAtualData(data.sistemas_de_informacao)
        }
    }, [states])

    useEffect(()=>{
        if(atualData != null) setSubjectInteractions(calcInteractions(atualData, selectedSubject))
        
    }, [selectedSubject])
    

    return (
        <section className="grade">
            {atualData.map((obj, index) =>{
                return (
                    <div key={index}>
                        <Period data={obj} index={index} selectedSubjectState={[ selectedSubject, setSelectedSubject ]} interactions={subjectInteractions}/>
                    </div>
                    
                )
            })}
        </section>
    )
}