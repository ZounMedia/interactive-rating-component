// set state of option selected; default to 1
let optionSelected = "1";

// find all options
const options = document.querySelectorAll(".option");

//loop over actions and add an click event listener
options.forEach((option) =>
  option.addEventListener("click", () => {
    //find active option and remove active class
    const activeOption = options[parseInt(optionSelected) - 1];
    activeOption.classList.remove("active");

    //add active class to selected option
    optionSelected = option.innerHTML;
    option.classList.add("active");
  })
);

//create functino to for submit
function onSubmit() {
  //query for ratings cards and destructure them into variables
  const ratingCard = document.querySelector(".rating-card");
  const thankYouCard = document.querySelector(".thank-you-card");
  const submittedRating = document.querySelector(".selection span");

  //toggle active class
  ratingCard.classList.remove("active");
  thankYouCard.classList.add("active");
  submittedRating.innerHTML = optionSelected;
}
