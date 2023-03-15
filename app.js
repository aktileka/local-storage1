const renderBlock = (el,photo) => {
let item = 
`<div class="card" style="width: 18rem;">
    <img src="${photo.url}" class="card-img-top" alt="...">
    <div class="card-body">
    <h1>${el.id}</h1>
      <h5 class="card-title">${el.title}</h5>
      <p class="card-text">${el.body}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>`

    return item
}

let items =[]
let counter = 1
const onLoad = (page) => {
  fetch(`https://jsonplaceholder.typicode.com/posts?_page= ${page}`)
      .then(response => response.json())
      .then(arr => {
        fetch(`https://jsonplaceholder.typicode.com/photos?_page= ${page}`)
        .then(response2 => response2.json())
        .then((arr2) => {
      arr2.map((photo,id)=> {
        let el = renderBlock(arr[id],photo);
        items.push(el);
      });
      })
    })
      
      .then(() =>{
        let cards = items.join("")
        document.getElementById('posts').innerHTML = cards;
        counter++
      })
      .catch(err => {
        alert('Ошибка,балким интернет,текшерип корунуз')
      });
    }
      
      onLoad()



