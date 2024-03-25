setTimeout(function(){
    $(".spinner").hide(5000)
    $(".no-spin").hide(5000)
    $(".main").show(5000)
}, 5000)

const settings = {
	async: true,
	crossDomain: true,
	url: 'https://spotify23.p.rapidapi.com/albums/?ids=21jF5jlMtzo94wbxmJ18aa',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c46564283amsh144b61cae2d0d43p158b40jsn1da24fee41d9',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
    // let img1 = response.albums[0]
    let track = response.albums[0].tracks.items[0].preview_url
    $("source").attr("src", track)
	console.log(response);
});
// $(".spinner").hide(5000)
// $(".main").show(5000)