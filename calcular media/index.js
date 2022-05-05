const classA = [
    {
        name: 'anderson',
        grade: 4
    },
    {
        name: 'Andressa',
        grade: 5
    },
    {
        name: 'fabio',
        grade: 2
    }
]


const classB = [
    {
        name: 'Gustavo',
        grade: 4
    },
    {
        name: 'Maik',
        grade: 9
    }
]


function calculateAverage(students) {
    let sum = 0

    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }
    const average = sum / students.length
    return average
}


function sendMessage(average, Turma) {
    if (average > 5) {
        console.log(`${Turma} average: ${average}, congratulations`)
    } else {
        console.log(`${Turma} average: ${average} is not good.`)
    }
}


function markAsFlunked(student) {
    student.flunked = false
    if (student.grade < 5) {
        student.flunked = true
    }
}


function sendMessageFlunked(student) {
    if (student.flunked) {
        console.log(`Student ${student.name} flunked!`)
    }
}


function studentsFlunked(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendMessageFlunked(student)
    }

}


const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)


sendMessage(average1, 'classA')
sendMessage(average2, 'classB')


studentsFlunked(classA)
studentsFlunked(classB)