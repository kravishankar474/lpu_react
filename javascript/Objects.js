var student = {
    name: 'Harry',
    email: 'harry@123.com',
    regno: 12345,
    login(){
        console.log('student has log in')
    },
    logout(){
        console.log('student has log out')
    },
    tologin()
    {
        console.log(this.name,'logs in')
    }
    
}
student.login();
student.tologin();

    // student.islogin = true;
    // console.log(student)
    // console.log(student['regno'])

    // var span = document.querySelector('#name');
    // console.log(span.id)
    // span.textContent = student[span.id]

//array
var hobbies = ['Reading', 'Writing', 'coding','sports']
console.log(hobbies)

var str = new String('some string')
console.log(str)