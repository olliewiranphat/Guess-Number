//Game: Guess the correct number (9)
const correct = Math.floor(Math.random() * 10)

let input = prompt(`Can you guess the lottery number this time?`) //null, string, number
// alert(`input: ${input}`);
//attemp times
let attemp = 1 //เดาครั้งที่ 1 
//....cond
while (input != correct) { //input != 9 do this
    //input ค่าใหม่ ที่ != correct มารอเช็คค่าอยู่ตรงนี้


    if (input == 'q') {
        break //ออกจาก while loop ทันที
    }

    //// input != "   "
    if (input) { //input == fsdrdjtcjh, 3543536
        input = Number(input) //convert input to typeof number : 0, number, NaN
        //input == NaN ออก //input == 'aedsg'
        if (!Number.isNaN(input)) { //input == real number
            //This is part: input is a real number
            if (input >= 10) {
                input = prompt(`Too Hight!, It's less than 10`)
            }
            else if (input > correct) { //input > 9
                console.log(input);
                input = prompt(`Too Hight!, It's less that`) ///****/Problem!!!How to back to Low/High
                //input == ค่าใหม่ ออกจาก if else เอา input กลับไป check ใน while
                attemp += 1

            } else { //input < correct //input == null, string, < correct
                console.log(input); //input < 9
                input = prompt(`Too Low!`)
                //input == ค่าใหม่ ออกจาก if else เอา input กลับไป check ใน while
                attemp += 1
            }
        }

    }

    if (input == correct) {
        break
    }

    //Loop
    ////input == "  ", input == NaN
    input = prompt(`Not Correct!, Pls enter a number again or 'q' `)
}
//ออกจาก loop เมื่อ cond ของ while เป็น false, break
if (input == 'q') {
    alert(`OK, Quit game and attempt ${attemp}`)
} else {
    //input == correct
    alert(`You won the lotto!!, attempt: ${attemp}`)
}
alert(`Go to Website!`)



// let test = Number(prompt(`fill`)) //convert input to typeof number : 0, number, NaN
// alert(test)

// //input 12345 : test = 12345
// //input aecv  : test = NaN
// //input "   " : test = 0