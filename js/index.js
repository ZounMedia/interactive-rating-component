// set state of option selected; default to 1
let optionSelected = "1";

// select and add click event listeners to each option
const options = document
  .querySelectorAll(".option")
  .forEach((option) =>
    option.addEventListener(
      "click",
      () =>
        (optionSelected = option.innerHTML) && console.log({ optionSelected })
    )
  );

//create functino to for submit
function onSubmit() {
  console.log("form submitted");
  //query for ratings cards and destructure them into variables
  const ratingCard = document.querySelector(".rating-card");
  const thankYouCard = document.querySelector(".thank-you-card");
  const submittedRating = document.querySelector(".selection span");
  console.log({ submittedRating });
  //toggle active class
  ratingCard.classList.remove("active");
  thankYouCard.classList.add("active");
  submittedRating.innerHTML = optionSelected;
}
