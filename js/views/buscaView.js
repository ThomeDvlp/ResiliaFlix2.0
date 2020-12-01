class SearchViews{

    static template(infos){
        return `<img id="borda" src="${infos.poster}" class="img-thumbnail col-12 col-sm-6 col-md-4 col-lg-3 shadow p-2 mb-5 rounded movie-image" onclick="ModalController.newInfos('${infos.imdbID}')" data-toggle="modal" data-target="#ModalScrollable">`
    }
}