/**
 * the stack calling program
 *
 * By:      Devin Jhu
 * Version: 1.0
 * Since:   2022-11-4
 */

import Vehicle from './vehicle'

console.log('Created Ford focus')
const fordFocus = new Vehicle('white', 'B40-C4RR0', 4, 284)

console.log('Status:')
fordFocus.status()

console.log('Accelerating, 10 of power for 10 sec.')
fordFocus.accelerate(10, 10)
console.log(`New speed: ${Number(fordFocus.getSpeed())}`)

console.log('Changing colour to black:')
fordFocus.setColor('black')
console.log(`New color: ${String(fordFocus.getColor())}`)

// new Ferrari
console.log('\nCreated a Ferrari')
const ferrari = new Vehicle('red', 'VHD-35HU', 2, 320)

console.log('Status:')
ferrari.status()

console.log('Accelerating, 100 of power for 4 sec.')
ferrari.accelerate(100, 4)
console.log(`New speed: ${Number(ferrari.getSpeed())}`)

console.log('Breaking, 10 of power for 10 sec.')
ferrari.break(10, 10)
console.log(`New speed: ${Number(ferrari.getSpeed())}`)

console.log('Changing color:')
ferrari.setColor('racing red!')
console.log(`New color: ${String(ferrari.getColor())}`)

// new Citroen Ami
console.log('\nCreated a Citroen Ami')
const citroenAmi = new Vehicle('blue', 'FS-695-DQ', 2, 45)

console.log('Status:')
citroenAmi.status()

console.log('Accelerating, 5 of power for 10 sec.')
citroenAmi.accelerate(5, 10)
console.log(`New speed: ${Number(citroenAmi.getSpeed())}`)

console.log('Breaking, 2 of power for 10 sec.')
citroenAmi.break(2, 10)
console.log(`New speed: ${Number(citroenAmi.getSpeed())}`)

console.log('Changing color:')
citroenAmi.setColor('purple')
console.log(`New color: ${String(citroenAmi.getColor())}`)

console.log('\nDone.')
