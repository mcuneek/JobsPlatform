// Handle signup
document
  .getElementById("signupForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = document.getElementById("signupUsername").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    try {
      const response = await fetch("http://localhost:5001/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while signing up.");
    }
  });

// Handle signin
// Handle signin
document
  .getElementById("signinForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("signinEmail").value;
    const password = document.getElementById("signinPassword").value;

    try {
      const response = await fetch("http://localhost:5001/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      if (response.ok) {
        alert(`Welcome, ${result.message}`);

        // Store the JWT token locally (e.g., in localStorage)
        localStorage.setItem("token", result.token);

        // Redirect to the "Hello" page
        if (result.redirect) {
          window.location.href = result.redirect;
        }
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while signing in.");
    }
  });
