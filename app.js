// slacked multiple people for help on this one

window.addEventListener('load', function() {
      setInterval(Friendget, 1000);
});

 function Friendget () {
    var request = new XMLHttpRequest();
    request.addEventListener('load', function() {
        var friendRandom = JSON.parse(this.responseText);
        friendRandom= friendRandom.results[0];
        let child = document.createElement('div');
        child.innerHTML = `
          <img src='${friendRandom.picture.medium}' />
          <p>${friendRandom.name.first}</p>
          <button id=button>Add friend</button>
      `;
      //consulted riggan on this one//
      let button = child.querySelector('button');
      button.addEventListener('click',function (){
        let friendlist = document.getElementById('friends')
        let friendChid = document.createElement('u')

      })
      child.classList.add('row')
      //generate user
      function User (user) {
          let stream = document.getElementById('stream');
          let child = document.createElement('div');
          child.innerHTML = `
          <div class="friends">
              <img src="${user.picture.medium}" class="img-thumbnail" width="75" height="236">
              <div class="friendinfo">
                  <h2>${user.name.first}</h2>
                  <h4>friends since June</h4>
              </div>
          </div>
          `;

          friend.appendChild(child);
      }
        let parent = document.getElementById('stream');
            parent.appendChild(child);
    });
    request.open('GET', 'https://randomuser.me/api/');
    request.send();
}
