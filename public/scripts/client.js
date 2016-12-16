// console.log('Client is running'); test to make sure client is linked properly

// GET task list

$(function () {

  $.ajax({
    type: 'GET',
    url: '/app',
    success: function (response) {
      console.log('get response:', response);
      response.forEach(function (task) {
        var task = task.task;
        var $li = $('<li class="list-group-item"></li>');
        $li.append('<div class="checkbox"><label><input type="checkbox" value="">'
         + task + '</label><button type="button" class="btn btn-danger btn-sm" id="delete">' +
         '<span class="glyphicon glyphicon-remove"></span></button>');
        $('.list-group').append($li);
        var $input = $('<div class="input-group">');
        $input.append('<span class="input-group-addon"><input type="checkbox"' +
        'aria-label="complete"></span><input type="text" class="form-control"' +
        'aria-label="remove" value="' + task + '"><span class="input-group-btn">' +
        '<button class="btn btn-danger" type="button"><span class="glyphicon ' +
        'glyphicon-remove"></span></button></span></div>');
        $('.col-lg-6').append($input);
      });

      $('div').on('click', '#delete', function (event) {
        event.preventDefault();
        console.log('Delete button clicked:', this);
        var taskID = $(this).data('id', response.id);
        console.log('taskID:', taskID);
        $.ajax({
          type: 'DELETE',
          url: '/app/' + taskID,
          success: function (response) {
            console.log('delete response:', response);
          },
        });
      });
    },
  });

  // append DOM with new task on submit

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
    $(this).find('input').val('');

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
        $('.list-group').append($li);
      },
    });
  });

});
