console.log('Client is running');
$(function () {

  $('form').on('submit', function (event) {
    event.preventDefault();
    console.log('this:', this);

    var taskObj = {};
    var task = $('input').val();
    console.log('input:', task);

    var $input = $('#input');
    $input.empty();

    taskObj.task = task;
    taskObj.complete = 'no';
    console.log('taskObj:', taskObj);

    $.ajax({
      type: 'POST',
      url: '/app',
      data: taskObj,
      success: function (response) {

        console.log('post response:', taskObj);
        var task = taskObj.task;
        var complete = taskObj.complete;
        console.log('response task:', task);
        console.log('response complete:', complete);
        var $li = $('<li class="list-group-item"></li>');
        $li.append('<div class="checkbox"><label><input type="checkbox" value="">'
         + task + '</label><button type="button" class="btn btn-danger btn-sm" id="delete">' +
         '<span class="glyphicon glyphicon-remove"></span></button>');
        // $li.append('<p>' + task + '</p>');
        $('.list-group').append($li);
      },
    });
  });

  // $.ajax({
  //   type: 'GET',
  //   url: '/app',
  //   success: displayTask,
  // });

  // test to make sure client and router are playing nice
  // var testObj = { name: 'Laura', age: '33' };
  // $.ajax({
  //   type: 'POST',
  //   url: '/app',
  //   data: testObj,
  //   success: function (testObj) {
  //     console.log('testObj:', testObj);
  //   },
  // });
});
