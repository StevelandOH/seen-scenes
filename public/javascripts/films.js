// document.addEventListener("DOMContentLoaded", e => {

  const reviewForm = document.querySelector('.review-form')
  const submitReviewButton = document.querySelector('.submit-review-button')
  const reviewSection = document.querySelector('.reviewContainer')

  reviewForm.addEventListener('submit', async(e) => {
    e.preventDefault()
    const formData = new FormData(reviewForm)

    const review = formData.get('review')
    const filmId = submitReviewButton.dataset.filmid
    const userId = submitReviewButton.dataset.userid

    const body = { review, filmId, userId }

    try {
      const res = await fetch(`/films/${filmId}/review/new`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json"
        },
      })

      const div = document.createElement('div')
      const div2 = document.createElement('div')
      div.innerHTML = review
      div2.innerHTML = '-test'

      div.appendChild(div2)


      reviewSection.insertBefore(div, reviewSection.firstChild)
      console.log(reviewSection)

      if (!res.ok) {
        throw res
      }

    } catch (err) {
      console.error(err)
    }

  })

// })
