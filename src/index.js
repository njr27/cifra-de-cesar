const $jumpNumbers = document.querySelector(".content__input-jumpNumbers")
const $message = document.querySelector(".content__input-message")
const $buttonCripto = document.querySelector(".content__button")
const $messageCripto = document.querySelector(".content__output")

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

$buttonCripto.addEventListener("click", () => {
  let jumps = parseInt($jumpNumbers.value)
  let message = [$message.value]
  let newMessage = ""

  for (let stringMessage of message) {
    for (let i = 0; i < stringMessage.length; i++) {
      for (let y = 0; y < alphabet.length; y++) {
        if (stringMessage[i] == alphabet[y]) {
          let newJumps = jumps + y
          newJumps >= 26 ? (newJumps = newJumps % 26) : ""
          newMessage += alphabet[newJumps]
        }
      }
    }
  }
  $messageCripto.value = newMessage
})
