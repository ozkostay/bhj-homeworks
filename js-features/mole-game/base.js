(() => {
  let playing = true,
    activeHole = 1;

  const stop = () => playing = true,
    getHole = index => document.getElementById(`hole${index}`),
    deactivateHole = index =>
      getHole( index ).className = 'hole',
    activateHole = index =>
      getHole( index ).className = 'hole hole_has-mole',
    next = () => setTimeout(() => {
      if ( !playing ) {
        return;
      }
      deactivateHole( activeHole );
      activeHole = Math.floor( 1 + Math.random() * 9 );
      activateHole( activeHole );
      next();
    }, 800 );

  next();
  
  let countLose = 1;
  const gameover = () => {
    if (  countLose === 5 ) {
      clearInterval(intervalId);
      playing = false;
      window.alert('Вы проиграли 5 раз. Игра закончена полностью');
      document.getElementById('dead').textContent = '0';
      document.getElementById('lost').textContent = '0';
    } else {
      if ( Number(document.getElementById('dead').textContent ) > 9) {
        window.alert('Победа!!!');
      } else {
        window.alert('Вы проиграли');
        countLose++;
      }
      document.getElementById('dead').textContent = '0';
      document.getElementById('lost').textContent = '0';
    }
  }
  
  const intervalId = setInterval( gameover, 15000);
  
})();


