function takeANumber(line, current) {
  
  line.push(current)
  
  return `Welcome, ${current}. You are number ${line.length} in line.`
}


function nowServing(line) {
  
   if (line.length > 0) {
     
   let temp = `Currently serving ${line[0]}.`
   
   line.shift()
   
   return temp
  } 
  
  else {
    
    return 'There is nobody waiting to be served!'
    
  }
}


function currentLine(line) {
  
  if (line.length > 0) {
    
    let current = 'The line is currently:'
    
    let i = 0
    
    if (i < line.length - 1) {
    
    while(i < line.length) {
      
      let current = current + ` ${i + 1}. ${line[i]}`
      
      i++
      
    } else {
      
      
      
    }
      
    }
    
  }
}