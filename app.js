const text = "Age Calculator";
btn = document.getElementById("myButton");
age = document.getElementById("years");
const targetElement = document.getElementById("animated-text");
function textTyper(text, targetElement, i = 0) {
  targetElement.textContent += text[i];
  if (i == text.length - 1) {
    return;
  }
  setTimeout(() => textTyper(text, targetElement, i + 1), 90);
}
textTyper(text, targetElement);

const selectedDateInput = document.getElementById("selected-date");
selectedDateInput.addEventListener("change", () => {
  btn.addEventListener("click", () => {
    const end = new Date();
    const start = selectedDateInput.value;
    const result = calculateYears(start, end);
    if (result < 0) {
      age.textContent = `Please insert an appropriate date`;
      resetDatePicker(btn);
    } else {
      age.textContent = `you are ${result} years old`;
      resetDatePicker(btn);
    }
  });
});

function resetDatePicker(btn) {
  btn.textContent = `Reset`;
  btn.addEventListener("click", () => {
    window.location.reload();
  });
}

function calculateYears(startDateStr, endDateStr) {
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);
  const differenceMs = endDate.getTime() - startDate.getTime();
  const oneYearMs = 1000 * 60 * 60 * 24 * 365.25;
  const years = Math.floor(differenceMs / oneYearMs);
  return years;
}
