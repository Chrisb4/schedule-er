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
  },
  {
    date: '6/18/16',
    times: ['10:00', '16:00', '17:00']
  }
];

$(document).ready(function(){
  $('.upcoming-appointment-form').hide();
  $('.thank-you').hide();

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
    $("#inputDateTime").val(dateTime);
    // POST to back end for booking appointment
    // alert(dateTime);

    // go to a url ?date-time=06-17-16 4pm
  });


  $( "form" ).on( "submit", function( event ) {
    event.preventDefault();
    var newName = $("#inputName").val();
    var newEmail = $("#inputEmail").val();
    var newMessage = $("#inputMessage").val();
    var newTime = $("#inputDateTime").val();
    // console.log("here is the form info:" +  newName + " " + newEmail + " " + newMessage + " " + newTime);
    var testTime = moment(newTime).format('dddd, MMMM, Do, hA');
    // console.log("This is the testTime: " + testTime);
    $('.upcoming-appointment-form').hide();
    $('.thank-you').show();
    $('.thank-you').append('<h2 class="text-format">Thank you. Your Appointment is <br/><br/> scheduled for: ' + testTime + '</h2>');
    var appointment = $.ajax({
      url: '/appointment',
      type: 'POST',
      dataType: 'json',
      data: { fullName: newName, email: newEmail, message: newMessage, time: newTime }
    });
    appointment.done(function(data){
      console.log("ajax success???");
    });
    appointment.fail(function(jqXHR, textStatus, errorThrown){
      console.log(errorThrown);
    });
  });



//This is an example of the ajax post, on .done send user to the thank you page
  // $.post( "test.php", { name: "John", time: "2pm" })
  //   .done(function( data ) {
  //     alert( "Data Loaded: " + data );
  //   });

// My first try of on ajax post
//   $.post( "/appointment", { fullName: newName, email: newEmail, message: newMessage, time: newTime })
//       .done(function( data) {
//         alert ( "Data Loded: " + data);
//       });





});
