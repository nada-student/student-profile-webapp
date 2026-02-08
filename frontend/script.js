document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("studentForm");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = {
      name: document.getElementById("name").value,
      rollno: document.getElementById("rollno").value,
      age: document.getElementById("age").value,
      address: document.getElementById("address").value,
      contact: document.getElementById("contact").value,
      email: document.getElementById("email").value
    };

    try {
      const response = await fetch("http://127.0.0.1:5000/student", {

        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      alert(result.message);
      form.reset();

    } catch (error) {
      alert("Error connecting to backend");
      console.error(error);
    }
  });

});
