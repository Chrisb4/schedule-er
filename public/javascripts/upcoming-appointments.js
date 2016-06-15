var dates = [
  {
    date: '6/14/16',
    times: ['16:00', '17:00']
  },
  {
    date: '6/15/16',
    times: ['16:00', '17:00']
  },
  {
    date: '6/16/16',
    times: ['16:00', '17:00']
  }
];

$(document).ready(function(){
  $('.upcoming-appointment-form').hide();

  for (var i = 0; i < dates.length; i++) {
    var date = moment(dates[i].date);
    var formatedDate = date.format("dddd, MMMM Do YYYY");
    if (date.isBefore(moment(), 'day')) {
      continue;
    }
    $('.dates').append('<h3>' + formatedDate + '</h3>');

    for (var j = 0; j < dates[i].times.length; j++) {
      var time = moment(dates[i].date + ' ' + dates[i].times[j]);
      var dateTime = time.format();
      var formatedTime = time.format('LT');
      // 6/15/16 16:00
      $('.dates').append('<button class="appointment-button" data-date-time="' + dateTime + '">' + formatedTime + '</button>');
    }

  }

  $('.appointment-button').click(function(event) {
    event.preventDefault();
    var dateTime = $(this).data('date-time');
    $('.upcoming-appointment-form').show();
    $('.upcoming-appointments').hide();
    // POST to back end for booking appointment
    // alert(dateTime);

    // go to a url ?date-time=06-17-16 4pm
  });

});
