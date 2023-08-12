import './style.css'
export default function Header({states}) {
    const [ courseId, setCourseId] = states
    return(
        <header>
            <div>
                <select value={courseId} onChange={(e) => setCourseId(e.target.value)}>
                    <option value="1">Eng. de Computação</option>
                    <option value="2">Eng. Eletrica</option>
                    <option value="3">Eng. de Produção</option>
                    <option value="4">Sistemas de Informação</option>
                </select>
            </div>
            <div>
                <h1>Grade<span>UFOP</span></h1>
            </div>
        </header>
    )
}