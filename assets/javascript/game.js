$( document ).ready(function () {

  // Vars
  // ------------
  var num_rand;
  var num1;
  var num2;
  var num3;
  var num4;
  var wins = 0;
  var losses = 0;
  var currentScore = 0;


  // Functions
  // ------------
  // Generate random numbers between 1 - 12 for each crystal
  function genCrystalNum() {
    return Math.floor(Math.random() * 12) + 1;
  }

  function replay() {
    num_rand = Math.floor(Math.random() * 120) + 19;
    num1 = genCrystalNum();
    num2 = genCrystalNum();
    num3 = genCrystalNum();
    num4 = genCrystalNum();
    currentScore = 0;

    console.log(num_rand, num1, num2, num3, num4)

    // Set crystal value
    $('#img1').attr('value', num1);
    $('#img2').attr('value', num2);
    $('#img3').attr('value', num3);
    $('#img4').attr('value', num4);

    // Display some text
    $('#magicNum').html(num_rand);
    $('#score').html(currentScore);
    $('#wins').html('Wins: ' + wins);
    $('#losses').html('Losses: ' + losses);

  }

  replay();


  // Main logic
  // ------------
  // Click event function to add crystal values
  $('.crystal-btn').on('click', function () {

    var crystalVal = $(this).attr('value');
    crystalVal = parseInt(crystalVal);
    currentScore += crystalVal;
    $('#score').html(currentScore);

    if (currentScore === num_rand) {
      confirm('You Won!');
      wins++;
      $('#wins').html('Wins: ' + wins);
      $('#winLoseStatus').html('You Won!');
      replay();
    }
    else if (currentScore > num_rand) {
      confirm('Oops.. You Lost');
      losses++;
      $('#losses').html('Losses: ' + losses);
      $('#winLoseStatus').html('Oops.. You Lost');
      replay()
    }
  });


  // Reset Game
  $('.reset-btn').on('click', function () {
    wins = 0;
    losses = 0;
    replay();
    $('#winLoseStatus').html('');

  });


});