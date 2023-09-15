function Driver(name, age, experience, position) {
    this.name = name;
    this.age = age;
    this.experience = experience;
    this.position = position;
    this.driveMyCar = function() {
alert(`Hi I'm ${this.name}
${this.age} years old
${this.experience} of experience
and I will be your 
Car ${this.position} for today!`)
   
   }}

 const Toto = new Driver(
   'Toto', 23, '2 years', 'driver');

 const Buboy = new Driver(
   'Buboy', 23, '2 years', 'washer'
 )

// var carButton = document.querySelectorAll(".car").length;

// for (var i = 0; i <carButton; i++) {
    
//     document.querySelectorAll(".car")[i].addEventListener("click", function() {
        
//         var button = this.innerText;

//         switch (button) {
//             case "Drive My Car":
//                 alert("stop")
//                 break;
//             case "Car Wash":
//                 var wash = new Audio ("wash.mp3")
//                 wash.play();
//                 alert("wash")
//                 break;
//             default:
//                 break;
//         }

//         function Driver (name, age, years_experties, hobbies) {
//             this.name = name;
//             this.age = age;
//             this.years_experties = years_experties;
//             // this.skill = skill;
//             this.hobbies = hobbies;
//         }
        
//         const driver1 = new Driver ("Toto", 21, "5 years Driving", "eat, sleep, drive");
//         alert (driver1.name);
//         alert (driver1.age);
//         alert (driver1.years_experties);
//         // alert (driver1.skill);
//         alert (driver1.hobbies);

// });
// }