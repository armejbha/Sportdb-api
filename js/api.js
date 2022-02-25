const loadData = async () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    const url = (`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchText}`);
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.player[0]))
}
const displayData = player => {
    const playerDetails = document.getElementById('player-details');
    playerDetails.innerHTML = "";
    console.log(player);
    const playerArea = document.getElementById('player-area');
    playerArea.innerHTML = "";
    const div = document.createElement('div');
    div.className = 'row border border-primary p-2';
    div.innerHTML = `
    <div class="col-lg-12" onclick="playerInfo('${player.strPlayer}')">
        <img class="w-100" src="${player.strBanner}" alt="">
    </div>
    `
    playerArea.appendChild(div);

}
const playerInfo = playerName => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${playerName}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayInfo(data.player[0]))
}
const displayInfo = playerIn => {
    const playerDetails = document.getElementById('player-details');
    playerDetails.innerHTML = "";
    const div = document.createElement('div');
    div.className = 'row border border-primary p-2';
    div.innerHTML = `
    <div class="col-lg-4">
        <img class="w-100" src="${playerIn.strThumb}" alt="">
    </div>
    <div class="col-lg-8">
        <p>Name:${playerIn.strPlayer}</p>
        <p>Date Of Birth:${playerIn.dateBorn}</p>
        <p>Nationality:${playerIn.strNationality}</p>
        <p>Position:${playerIn.strPosition}</p>
        <p>Team:${playerIn.strTeam2}</p>
        <p>Weight:${playerIn.strWeight}</p>
     </div>
    `
    playerDetails.appendChild(div);
}
