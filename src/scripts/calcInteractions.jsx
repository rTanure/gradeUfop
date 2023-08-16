
export default function calcInteractions(data, id) {
    if(id == null) return {
        "primary_req": [],
        "secondary_req": [],
        "primary_pre": [],
        "secondary_pre": []
    }
    let start = new Date().getTime()
    let primaryPre = calcPrimaryPre(data, id)
    let endPrimaryPre = new Date().getTime()
    let secondaryPre = calcSecondaryPre(data, id)
    let endSecondaryPre = new Date().getTime()

    let primaryReq = calcPrimaryReq(data, id)
    let endPrimaryReq = new Date().getTime()
    let secondaryReq = calcSecondaryReq(data, primaryReq)
    let endSecondaryReq = new Date().getTime()


    const newInteractions = {
        "primary_req": primaryReq,
        "secondary_req": secondaryReq,
        "primary_pre": primaryPre,
        "secondary_pre": secondaryPre
    }
    console.log("==============")
    console.log("> Tempo total:        ", endSecondaryReq - start, "ms")
    console.log("> Tempo primaryPre:   ", endPrimaryPre - start, "ms")
    console.log("> Tempo secondaryPre: ", endSecondaryPre - endPrimaryPre, "ms")
    console.log("> Tempo primaryReq:   ", endPrimaryReq - endSecondaryPre, "ms")
    console.log("> Tempo secondaryReq: ", endSecondaryReq - endPrimaryReq, "ms")
    return newInteractions
}

function searchById(data, id) {
    for(let period of data) {
        for(let subject of period) {
            if(subject.id === id) {
                return subject
            }
        }
    }
    return null;
}

function calcPrimaryReq(data, id) {
    let result = searchById(data, id)
    if(result != null) {
        return result.requisitos
    } else {
        return null
    }
}

function calcSecondaryReq(data, primaryReq) {
    let secondaryReq = new Set();
    for(let primarySubject of primaryReq) {
        let temporaryList = calcPrimaryReq(data, primarySubject)
        for(let secondarySubject of temporaryList) {
            secondaryReq.add(secondarySubject)
            for(let temp of calcSecondaryReq(data, secondaryReq)) {
                secondaryReq.add(temp)
            }
        }
    }
    return secondaryReq;
}

function calcSecondaryPre(data, id) {
    const secondaryPre = new Set()


    for(let period of data) {
        for(let subject of period) {
            let primaryReq = calcPrimaryReq(data, subject.id)
            let secondaryReq = calcSecondaryReq(data, primaryReq)
            for(let secondaryReqSubject of secondaryReq) {
                if(secondaryReqSubject === id) {
                    secondaryPre.add(subject.id)
                }
            }
        }
    }
    return secondaryPre
}

function calcPrimaryPre(data, id) {
    let primaryPre = new Set()

    for(let period of data) {
        for(let subject of period) {
            for(let requirement of subject.requisitos) {
                if(requirement === id) {
                    primaryPre.add(subject.id)
                }
            }
        }
    }

    return primaryPre
}