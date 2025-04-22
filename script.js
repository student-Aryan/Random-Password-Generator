function generatePassword() {
  const length = parseInt(document.getElementById("length").value);
  const includeUppercase = document.getElementById("include-uppercase").checked;
  const includeNumbers = document.getElementById("include-numbers").checked;
  const includeSymbols = document.getElementById("include-symbols").checked;

  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  let characterSet = lowercaseChars;

  if (includeUppercase) characterSet += uppercaseChars;
  if (includeNumbers) characterSet += numberChars;
  if (includeSymbols) characterSet += symbolChars;

  if (characterSet.length === 0) {
    alert("Please select at least one character type.");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[randIndex];
  }

  document.getElementById("password").value = password;
}

function copyPassword() {
  const passwordField = document.getElementById("password");
  if (passwordField.value === "") {
    alert("No password to copy!");
    return;
  }

  navigator.clipboard.writeText(passwordField.value)
    .then(() => {
      alert("Password copied to clipboard!");
    })
    .catch(err => {
      console.error("Failed to copy: ", err);
    });
}

