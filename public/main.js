var update = document.getElementById('update')
var del = document.getElementById('delete')

update.addEventListener('click', function () {
  fetch('quotes', {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
<<<<<<< HEAD
      'Title': 'English ',
      'AuthorName': 'Henry Longfellow',
      'BookFormat': 'Ebook.',
      'Price': '$9500'
      
=======
      'name': 'Darth Vader',
      'quote': 'I find your lack of faith disturbing.'
>>>>>>> b23801235d08bb941db30046c19804352bff10c0
    })
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(data => {
    console.log(data)
  })
})
<<<<<<< HEAD
// var del = document.getElementById('delete')

del.addEventListener('click', function() {
  fetch('quotes', {
    method: 'delete'
    // headers: {
    //   'Content-Type': 'application/json'
    // },
    // body: JSON.stringify({
      
    // })
  }).then(function (response) {
    window.location.reload()
  })
})






















=======

del.addEventListener('click', function () {
  fetch('quotes', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'name': 'Darth Vader'
    })
  }).then(function (response) {
    window.location.reload()
  })
})
>>>>>>> b23801235d08bb941db30046c19804352bff10c0
