$(document).ready(function() {

$("[rel='tooltip']").tooltip();

  jQuery(document).ready(function() {
    jQuery("time.timeago").timeago();
  });



  $('.tweet-compose').on('focus',function(){
    $('#tweet-controls').show()
    $('.tweet-compose').css('height','5em')
    })

    $('.tweet-compose').on('blur', function(){
      if ($('.tweet-compose').val()) {
      }
      else {$('#tweet-controls').hide();

      }
      // $('.tweet-compose').css('height','2.5em');

    })

  $('.tweet-compose').on('keyup keydown', function() {

  var $charCount = $('#char-count');

  var $tweetCompose = $('.tweet-compose');

  $charCount.text(140 - $tweetCompose.val().length);

  if ($tweetCompose.val().length >= 130) {
    $charCount.css('color', 'red')
  }
  else if ($tweetCompose.val().length < 130)
    $charCount.css('color', '#999')

  if ($tweetCompose.val().length > -1 && $tweetCompose.val().length < 141) {

    $('#tweet-submit').removeAttr('disabled');
  }
  else {
    $('#tweet-submit').attr('disabled','disabled');
  }



})

  var $tweetSubmit = $('#tweet-submit');

  $tweetSubmit.on('click', function() {

    if ($('.tweet-compose').val()) {

    $('#stream').prepend(
      '<div class="tweet">' +
        '<div class="content">' +
        '<div class="top-wrapper">' +
          '<span class="top-left">' +
            '<img class="avatar" src="img/jake.jpg" />' +
            '<strong class="fullname">' + $('.myName').text() + '</strong>' +
            '<span class="username">' + '@jakec0rry' + '</span>' +
          '</span>' +
          '<div class="images">' +
            '<span class="favorited"><img class= "fav-pic" src="img/favorite-img.jpeg"/></span>' +
            '<span class="retweeted"><img class= "retweet-pic" src="img/arrow-retweet.png"/></span></div></div>' +
          '<p class="tweet-text">' + $('.tweet-compose').val() + '</p>' +
          '<div class="tweet-actions" style="display: none"><ul><li><span class="icon action-more"></span> More</li></ul></div>' +
          '<div class="stats"><div class="retweets"><p class="num-retweets">30</p><p>RETWEETS</p></div><div class="favorites"><p class="num-favorites">6</p><p>FAVORITES</p></div><div class="users-interact"><div><img src="img/alagoon.jpg" /><img src="img/vklimenko.jpg" /></div></div>' +
            '<div class="time">' + '<time class="timeago" datetime="2016-02-12T15:44:17Z" title="February 12, 2016">' + jQuery.timeago(new Date()) + '</time>' + '</div></div></div></div>')


    $('.tweet-compose').val('');

    $('#char-count').text('140');

    $('#char-count').css('color', '#999');

    }

  })





  $(document).on('mouseenter', '.tweet', function() {
    $(this).find('.tweet-actions').show();
  })
  $(document).on('mouseleave', '.tweet', function() {
    $(this).find('.tweet-actions').hide();
  })


  var k = true;
  $(document).on('click', '.tweet', function() {

    if (k) {
      $(this).find('.stats, .reply').toggle(k);
      k = false;
    }
    else {
      $(this).find('.stats, .reply').toggle(k);
      k = true;
    }
  })






})
