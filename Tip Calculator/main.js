window.addEventListener("DOMContentLoaded", () => {
  const calculate = document.querySelector(".main_btn");

  calculate.addEventListener("click", () => {
    let result = document.querySelector("#tip-amount"),
      quality = parseFloat(document.querySelector("#quality").value),
      bill = parseFloat(document.querySelector("#amount").value),
      guest_nums = parseInt(document.querySelector("#guests").value);

    if (isNaN(bill)) bill = 0; // constraints for empty value
    if (isNaN(guest_nums)) guest_nums = 1;

    const formula = Math.abs((bill * quality) / guest_nums); // formula for result

    document.querySelector("#quality").value = "0"; // clean values
    document.querySelector("#amount").value = ""; // лучше вот аткне писать думаю но хз
    document.querySelector("#guests").value = "";

    result.style.visibility = "visible"; // setting pole visible
    result.textContent = `Tip Amount per Guest: ${formula.toFixed(2)}`;
  });
});
