document.getElementById("bmiForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const dob = document.getElementById("dob").value;
  const gender = document.getElementById("gender").value;
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100;
  const bmi = weight / (height * height);
  let category = "";
  let advice = "";

  if (bmi < 18.5) {
    category = "Underweight";
    advice = "Being underweight can lead to fatigue, weak immunity, and osteoporosis.";
  } else if (bmi < 24.9) {
    category = "Normal weight";
    advice = "Great! Your BMI is within the normal range. Keep it up!";
  } else if (bmi < 29.9) {
    category = "Overweight";
    advice = "Overweight may increase the risk of heart disease, diabetes, and high blood pressure.";
  } else {
    category = "Obese";
    advice = "Obesity significantly increases the risk of heart disease, diabetes, joint problems, and more.";
  }

  document.getElementById("result").innerHTML = `
    <h3>Hello ${name}, your BMI is ${bmi.toFixed(2)}</h3>
    <p>Status: <strong>${category}</strong></p>
    <p>${advice}</p>
  `;

  fetch("http://localhost:3000/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, age, dob, gender, weight, height: height * 100, bmi })
  });
});