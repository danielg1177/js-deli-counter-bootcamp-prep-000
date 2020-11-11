function takeANumber(line, current) {
  
  line.push(current)
  
  return `Welcome, ${current}. You are number ${line.length} in line.`
}