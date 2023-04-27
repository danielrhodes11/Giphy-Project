
const $gifArea = $('#gif-area')
const $searchInput = $('#search')

function addGif(res) {
    let numResults = res.data.length;
    if (numResults) {
      let randomIdx = Math.floor(Math.random() * numResults);
      let $newCol = $("<div>", { class: "col-md-12 col-12 mb-4" });
      let $newGif = $("<img>", {
        src: res.data[randomIdx].images.original.url,
        class: "w-100"
      });
      $newCol.append($newGif);
      $gifArea.append($newCol);
    }
  }

  $('form').on("submit", async function(e){
    e.preventDefault();
    let searchTerm = $searchInput.val();
    $searchInput.val("");

    const result = await axios.get('https://api.giphy.com/v1/gifs/search', {params: {
        q: searchTerm,
        api_key: "A8iUOOAlVOQfAFxGDpZcFXkzokE7KS0w"
}});
return addGif(result.data)
  })

  $('#remove-btn').on('click', function(){
    $gifArea.empty();
  });

    
