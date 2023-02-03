const dayjs = require("dayjs")


function birthday(date) {
    const birthday = dayjs(date)
    const now = dayjs()
    
    
    const ageInYears = now.diff(birthday, 'y')
    const nextBirthday = birthday.add(ageInYears + 1, 'year')
    const daysToNextBirthday = nextBirthday.diff(now, 'day')


    console.log(`Idade: ${ageInYears}`)
    console.log(`Próximo aniversário: ${nextBirthday.format('DD/MM/YYYY')}`)
    console.log(`Dias até completar ${ageInYears + 1} anos: ${daysToNextBirthday}`)

}

birthday("2005-01-06")