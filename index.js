function takeANumber(line, current ) {
  line.push(current)
  console.log(`Welcome, ${current}. You are number ${line.length + 1} in line.`)
  return line
}