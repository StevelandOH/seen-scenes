// document.addEventListener("DOMContentLoaded", e => {

  const reviewForm = document.querySelector('.review-form')
  const submitReviewButton = document.querySelector('.submit-review-button')

  reviewForm.addEventListener('submit', async(e) => {
    e.preventDefault()
    const formData = new FormData(reviewForm)

    const review = formData.get('review')
    const filmId = submitReviewButton.dataset.filmid
    const userId = submitReviewButton.dataset.userid



    const body = { review, filmId, userId }

    console.log(body)

    try {
      const res = await fetch(`/films/${filmId}/review/new`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json"
        }

      })

      if (!res.ok) {
        throw res
      }

    } catch (err) {
      console.log('something went wrong')
    }



  })

// })
