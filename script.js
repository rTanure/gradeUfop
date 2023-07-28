const ano = document.querySelector("#ano")

const seletor = document.querySelector("#selector")

let atualData

function alterarCurso() {
    start()
}

function searchById(id) {
    for(periodo of atualData) {
        for(materia of periodo) {
            if(materia.id === id) {
                return materia
            }
        }
    }
}

function setClass(id, attribute) {
    const atual = document.querySelector(`#${id}`)
    atual.classList.add(attribute)
}

function removeClass(id, attribute) {
    const atual = document.querySelector(`#${id}`)
    atual.classList.remove(attribute)
}

function setSecondaryReq(id) {
    const requisitos = searchById(id).requisitos
    for(requisito of requisitos) {
        setClass(requisito, "secondary-req")
        setSecondaryReq(requisito)
    }
}

function removePrimaryReq(id) {
    const requisitos = searchById(id).requisitos
    for(requisito of requisitos) {
        removeClass(requisito, "primary-req")
    }
}

function removeSecondaryReq(id) {
    const requisitos = searchById(id).requisitos
    for(requisito of requisitos) {
        removeClass(requisito, "secondary-req")
        removeSecondaryReq(requisito)
    }
}

function setPrimaryReq(id) {
    const requisitos = searchById(id).requisitos
    for(requisito of requisitos) {
        setClass(requisito, "primary-req")
    }
}

function removeSecondaryPre(id) {
    for(periodo of atualData) {
        for(materia of periodo) {
            for(requisito of materia.requisitos) {
                if(id === requisito) {
                    removeClass(materia.id, "secondary-pre")
                    removeSecondaryPre(materia.id)
                }
            }
        }
    }
}

function setSecondaryPre(id) {
    for(periodo of atualData) {
        for(materia of periodo) {
            for(requisito of materia.requisitos) {
                if(id === requisito) {
                    setClass(materia.id, "secondary-pre")
                    setSecondaryPre(materia.id)
                }
            }
        }
    }
}

function setPrimaryPre(id) {
    for(periodo of atualData) {
        for(materia of periodo) {
            for(requisito of materia.requisitos) {
                if(id === requisito) {
                    setClass(materia.id, "primary-pre")
                }
            }
        }
    }
}

function removePrimaryPre(id) {
    for(periodo of atualData) {
        for(materia of periodo) {
            for(requisito of materia.requisitos) {
                if(id === requisito) {
                    removeClass(materia.id, "primary-pre")
                }
            }
        }
    }
}

function select(id) {
    setClass(id, "selected")
    setSecondaryReq(id)
    setSecondaryPre(id)
    setPrimaryPre(id)
    setPrimaryReq(id)
}

function deselect(id) {
    removeClass(id, "selected")
    removeSecondaryReq(id)
    removeSecondaryPre(id)
    removePrimaryReq(id)
    removePrimaryPre(id)
}

function drawMatrix(){
    ano.innerHTML = ""
    for(periodo in atualData) {
        ano.innerHTML += `<div class="periodo" id='periodo_${(parseInt(periodo) + 1)}'>`
        let per = document.querySelector(`#periodo_${(parseInt(periodo) + 1)}`)
        for(materia in atualData[periodo]) {
            per.innerHTML += `<div class='materia' id="${atualData[periodo][materia].id}" onmouseleave="deselect('${atualData[periodo][materia].id}')" onmouseenter="select('${atualData[periodo][materia].id}')"> ${atualData[periodo][materia].nome}</div>`
        }
        ano.innerHTML += `</div>`
    }
}

function start() {
    let valor = seletor.value
    switch(Number(valor)) {
        case 1:
            atualData = data_comp
            break
        case 2:
            atualData = data_si
            break
        case 3:
            atualData = data_ele
            break
        case 4:
            atualData = data_comp
            break
        default:
            atualData = data_comp
    }
    drawMatrix()
}
start()