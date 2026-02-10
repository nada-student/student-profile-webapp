document.getElementById("studentForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const studentData = {
    name: document.getElementById("name").value,
    rollno: document.getElementById("rollno").value,
    age: document.getElementById("age").value,
    address: document.getElementById("address").value,
    contact: document.getElementById("contact").value,
    email: document.getElementById("email").value
  };

  try {
    const response = await fetch("https://student-backend-s0vi.onrender.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(studentData)
    });

    const result = await response.json();
    alert(result.message);
  } catch (error) {
    alert("Error submitting form");
    console.error(error);
  }
});
