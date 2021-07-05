let str = `
010-1234-5678
the123@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
There's always happiness.
abbcccdddd
`

console.log(
    str.match(/(?<=@).{1,}/g)
)
