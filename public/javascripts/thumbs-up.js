const status = document.getElementById("liked");
const filmId = status.dataset.filmid;
const userId = status.dataset.userid;

status.addEventListener("click", async (e) => {
  try {

    if (e.target.innerHTML === "Like") {

      const body = { status: true, userId: userId, filmId: filmId};

      await fetch(`/films/${userId}/like`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json"
        }
      });

      e.target.innerHTML = "Liked";
      status.setAttribute("class", "text thumbsed-up-btn");


    } else {

      const body = { userId: userId, filmId: filmId};

      await fetch(`/films/${userId}/like`, {
        method: "DELETE",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json"
        },
      });

      e.target.innerHTML = "Like";
      status.setAttribute("class", "text thumbs-up-btn");


    }

  } catch (err) {

    console.error(err);

  }
})
