var main = function () {

    $('#add').click(function () {
      var post = $('.status-box').val();
      $('.posts').prepend('<li>' + post + '</li>');
      $('.status-box').val('');
      $('.counter').text(140);
      $('#add').addClass('disabled');
      var history = $('.posts').html();
      localStorage.setItem('posts', history);
      return false;
    });

    if (localStorage.getItem('posts')) {
      $('.posts').html(localStorage.getItem('posts'));
    }

    $('#clear').click(function () {
      window.localStorage.clear();
      location.reload();
      return false;
    });

    $('.status-box').keyup(function () {
      var postlength = $(this).val().length;
      var charactersLeft = 140 - postlength;
      $('.counter').text(charactersLeft);
      if (charactersLeft < 0) {
        $('#add').addClass('disabled');
      } else if (charactersLeft === 140) {
        $('#add').addClass('disabled');
      } else {
        $('#add').removeClass('disabled');
      }
    });

    $('#add').addClass('disabled');

    $(document).keypress(function (event) {
      if (event.which === 13) {
        $('#add').click();
        return false;
      }
    });

  };

$(document).ready(main);
