const status = document.getElementById("liked")

status.addEventListener("click", async (e) => {
  try {

    if (e.target.innerHTML === "Like") {
      const body = { status: true, userId: 1, filmId: 1};

      await fetch(`/films/1/like`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json"
        }
      })

      e.target.innerHTML = "Liked";

    } else {

      await fetch(`/films/1/like`, {
        method: "DELETE",
        // body: JSON.stringify(body),
        // headers: {
        //   "Content-Type": "application/json"
        // },
      })

      e.target.innerHTML = "Like";

    }

  } catch (err) {

    console.error(err);

  }
})
