document.getElementById("button").addEventListener("click", function () {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Please fill in both username and password.");
  } else if (username !== "nihub" || password !== "nihubguest") {
    alert("Invalid username or password. Please try again.");
  } else {
    alert("Login successful!");
  }
});

document.getElementById("button").addEventListener("click", function () {
    alert("You clicked the OK button!");
  });