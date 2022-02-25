const loadData = async () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    const url = (`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchText}`);
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.player[0]))
}
const displayData = player => {
    const playerArea = document.getElementById('player-area');
    playerArea.innerHTML = "";
    const div = document.createElement('div');
    div.className = 'row border border-primary p-2';
    div.innerHTML = `
    <div class="col-lg-4">
        <img class="w-100" src="${player.strThumb}" alt="">
    </div>
    <div class="col-lg-8">
        <p>Name:${player.strPlayer}</p>
        <p>Date Of Birth:${player.dateBorn}</p>
        <p>Nationality:${player.strNationality}</p>
        <p>Position:${player.strPosition}</p>
        <p>Team:${player.strTeam2}</p>
        <p>Weight:${player.strWeight}</p>
    </div>
    `
    playerArea.appendChild(div);

}