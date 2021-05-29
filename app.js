const reviewData = [
  {
    restaurantName: "Next of Kin",
    author: "LeilaFoulon",
    analysis: "Great mirrors and very clean, highly recommend",
    score: "8",
  },
  {
    restaurantName: "Collectivo",
    author: "LeilaFoulon",
    analysis:
      "Collectivo bathroom is spacious but slightly dirty and seems only cleaned once a day or so",
    score: "7",
  },
  {
    restaurantName: "Cupitol",
    author: "LeilaFoulon",
    analysis: "Cupitol also has single stalls, clean, a little dark",
    score: "6",
  },
  {
    restaurantName: "Kansaku",
    author: "LeilaFoulon",
    analysis: "Kansakus bathroom is very clean and spacious, highly recommend",
    score: "9",
  },
];

const fetchReviews = () => {
  const elem = document.getElementById("feed");
  elem.innerHTML = "";
  reviewData.forEach((review) => {
    elem.innerHTML += `<div id="review">
        <div id="review-header-container">
          <div>
            <h3 class="review-header">${review.restaurantName}</h3>
            <p class="author">Submitted by @${review.author}</p>
          </div>
          <div id="review-score-container">
            <p class="review-score">${review.score}</p>
            <p class="review-total">/10</p>
          </div>
        </div>
        <h3 class="review">${review.analysis}</h3>
      </div>`;
  });
};
