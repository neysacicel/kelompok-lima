let StartAgain = "yes"
console.log("Welcome to Time & Duration Calculator")
console.log("")

while (StartAgain == "yes"){
StartHour = prompt("Enter 2-digit start hour (00-23): ")
StartMinute = prompt("Enter 2-digit start minute (00-59): ")
EndHour = prompt("Enter 2-digit end hour (00-23): ")
EndMinute = prompt("Enter 2-digit end minute (00-59): ")

if (EndHour < StartHour){
  HourDuration = Number(EndHour) + 24 - StartHour
} else {
  HourDuration = EndHour - StartHour
}

if (EndMinute < StartMinute){
  MinuteDuration = Number(EndMinute) + 60 - StartMinute
  HourDuration = HourDuration - 1
} else {
  MinuteDuration = EndMinute - StartMinute
}
            
console.log("")
console.log(`Start: ${StartHour}:${StartMinute}`)
console.log(`End: ${EndHour}:${EndMinute}`)
console.log(`Duration: ${HourDuration} hour(s) ${MinuteDuration} minute(s)`)

console.log("")
console.log("Do you want to perform another calculation? (yes/no)")
StartAgain = prompt()
console.log("")
            }

console.log("Thank you for using our calculator")
