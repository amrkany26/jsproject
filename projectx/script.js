function saveEmailAndPassword() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  }

  function sayHi(){
   const firstName = document.getElementById('firstname').value; 
   const lastName = document.getElementById('lastname').value;

   alert(`Hi, ${firstName} ${lastName} welcome back to our website`);
  }

//foreach 
  const names = ['alex', 'bob','ron','sarah' ];

names.forEach(function(name) {
  console.log(`Hello, ${name}`);
});