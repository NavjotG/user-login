// User Login

document.getElementById("button").addEventListener("click", PasswordL);

function PasswordL() {
  // Input
  let passwords = document.getElementById("password").value;
  let usernames = document.getElementById("username").value;

  //   Process
  if (usernames === "admin" && passwords === "1234") {
    alert("Login Successful");
  } else if (usernames !== "admin" && passwords === "1234") {
    alert("Username Incorrect");
  } else if (usernames === "admin" && passwords !== "1234") {
    alert("Invalid Password");
  } else if (usernames !== "admin" && passwords !== "1234") {
    alert("Please input your username/password correctly.");
  }
}
