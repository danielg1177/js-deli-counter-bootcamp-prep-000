function takeANumber(line, current) {
  
  line.push(current)
  
  return `Welcome, ${current}. You are number ${line.length} in line.`
}


function nowServing(line) {
  
   if (line.length > 0) {
     
   console.log(line[0])
   
   return line.shift()
  } 
  
  else {
    
    return 'There is nobody waiting to be served!'
    
  }
}