// function showMessage() {
//     alert( 'Hello everyone!' );
//   }

function showMessage() {
    alert( 'Hello everyone!' );
  }
  
  showMessage();
  showMessage();
// second example


  function showMessage() {
    let message = "Hello, I'm JavaScript!"; // local variable
  
    alert( message );
  }
  
  showMessage(); // Hello, I'm JavaScript!
  
  alert( message ); // <-- Error! The variable is local to the function

  //example 3
  function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return confirm('Do you have permission from your parents?');
    }
  }
  
  let age = prompt('How old are you?', 18);
  
  if ( checkAge(age) ) {
    alert( 'Access granted' );
  } else {
    alert( 'Access denied' );
  }