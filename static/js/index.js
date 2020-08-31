;(function() {
  const regex = new RegExp(/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i);
  var $url_input = $('#url_input')
  var $error_msg = $('#error_msg')
  var $shorten_btn = $('#shorten_btn')
  //$shorten_btn.on('click', function() {
  // $(this).addClass('is-loading')
  //})

  function show_error() {
      $error_msg.removeClass('is-invisible')
      $url_input.removeClass('is-primary').addClass('is-danger')
      $shorten_btn
        .attr('disabled', true)
        .removeClass('is-primary')
        .addClass('is-danger')
  }

  function hide_error() {
    $error_msg.addClass('is-invisible')
    $url_input.addClass('is-primary').removeClass('is-danger')
    $shorten_btn
      .attr('disabled', false)
      .addClass('is-primary')
      .removeClass('is-danger')
  }

  $url_input.on('input', hide_error)

  $('#main_form').submit(function(e) {
    e.preventDefault()
    var url = $(this).serializeArray()[0].value
    url = url.replace('!"#$%&\'()*+,-./@:;<=>[\\]^_`{|}~', '')
    console.log(url)
    if (url.match(regex) === null) {
      show_error()
      return
    }
  })
})()
