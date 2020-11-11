function takeANumber(line, current) {
  line.push(current)
  console.log(`Welcome, ${current}. You are number ${line[line.length]} in line.`)
  return line
}