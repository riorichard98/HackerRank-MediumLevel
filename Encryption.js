function encryption(s) {
    // Write your code here
    s = s.split(' ').join('')
    let output = ''
    let temps = []
    let temp = []
    for(let i = 0 ; i < s.length ; i++){
        temp.push(s[i])
        if((i + 1) % Math.ceil(Math.sqrt(s.length)) === 0 || i === s.length-1){
            temps.push(temp)
            temp = []
        }
    }
    let counter = 0
    for(let i = 0 ; i < temps[0].length ; i++){
        for(let j = 0 ; j < temps.length ; j++){
            counter++
            if(temps[j][i]){
                output += temps[j][i]
            }
            if(counter % temps.length === 0){
                output += ' '
            }
        }
    }
    return output
}

