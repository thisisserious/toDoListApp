console.log('Client is running');

$(function () {

  var testObj = { name: 'Laura', age: '33' };

  $.ajax({
    type: 'POST',
    url: '/app',
    data: testObj,
    success: function (testObj) {
      console.log('testObj:', testObj);
    },
  });
});
