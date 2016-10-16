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
        console.log('post req response:', response);
        // var task = taskObj.task;
        // console.log('post req task:', task);
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
