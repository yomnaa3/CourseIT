
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

  function copyToClipboard(id) {
          var from = document.getElementById(id);
          var range = document.createRange();
          window.getSelection().removeAllRanges();
          range.selectNode(from);
          window.getSelection().addRange(range);
          document.execCommand('copy');
          window.getSelection().removeAllRanges();
          window.alert("Thank you for your Feedback, we appreciate it :)");
  }


  // let x = 60
  // function code2(){
  //   if (false){
  //     let x = 45 
  //   }
  //   console.log(y)
  // }
  // Code2()

// var x = 10;

//  x = null 

// console.log( typeof x) 

  // var x ;

  // console.log( typeof x)