function takeANumber(line, current) {
  
  line.push(current)
  
  return `Welcome, ${current}. You are number ${line.length} in line.`
}


function nowServing(line) {
  
   if (line.length > 0) {
     
   let temp = `Currently serving ${line[0]}`
   
   line.shift()
   
   return temp
  } 
  
  else {
    
    return 'There is nobody waiting to be served!'
    
  }
}