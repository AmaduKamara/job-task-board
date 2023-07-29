// const handleSubmit = (e) => {
//   e.preventDefault();

//   if (!username || !email || !password || !confirmPassword) {
//     setError("Please fill in all fields");
//     return;
//   }

//   if (password !== confirmPassword) {
//     setError("Passwords do not match");
//     return;
//   }

//   const newUser = {
//     id: uuidv4(),
//     username,
//     email,
//     password,
//   };

//   // Retrieve the existing users array from localStorage or create an empty array if it doesn't exist
//   const existingUsers = localStorage.getItem("users");
//   const storedUsers = existingUsers ? JSON.parse(existingUsers) : [];

//   // Append the new user to the array
//   storedUsers.push(newUser);

//   // Save the updated array back to localStorage
//   localStorage.setItem("users", JSON.stringify(storedUsers));

//   setUsername("");
//   setEmail("");
//   setPassword("");
//   setConfirmPassword("");

//   navigate("/login");
// };
