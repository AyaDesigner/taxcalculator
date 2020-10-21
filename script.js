const form = document.querySelector("#tax");

form.onsubmit = function (event) {
  event.preventDefault();

  const salary = document.querySelector("#input").value;

  let netSalary = 0;

  if (salary <= 15000) {
    netSalary = salary;
  }
  else if (salary > 15000 && salary <= 30000){
    netSalary = salary - (salary * 10)/100;
  }
  else if (salary > 30000 && salary <= 60000){
    netSalary = salary - (salary * 30)/100;
  }
  else {
    netSalary = salary - (salary * 40)/100;
  }


  const sect = document.querySelector("#result");

  const paraMessageNetSalary = document.createElement('p');

  paraMessageNetSalary.textContent = "Your net salary is "+ netSalary;

  sect.innerHTML="";

  sect.appendChild(paraMessageNetSalary);
};

