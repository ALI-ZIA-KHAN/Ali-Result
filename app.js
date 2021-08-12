







var students = [
{ Name: 'Liam', Phone: '545454', Age: 3, Institute: 'Padrimore School', Result: 0 },
{ Name: 'Nicholas', Phone: '45454', Age: 1, Institute: 'Padrimore School', Result: 0 },
{ Name: 'Tom', Phone: '1215454', Age: 12, Institute: 'Padrimore School', Result: 0 },
{ Name: 'Latham', Phone: '5454545', Age: 13, Institute: 'Padrimore School', Result: 1 },
{ Name: 'Ross', Phone: '035655', Age: 21, Institute: 'Padrimore School', Result: 1 },
{ Name: 'Taylor', Phone: '79898989', Age: 5, Institute: 'Padrimore School', Result: 0 },
{ Name: 'addingRollnoaaddingRollnoar', Phone: '21212121', Age: 72, Institute: 'Padrimore School', Result: 1 },
{ Name: 'Saifi', Phone: '39699989', Age: 91, Institute: 'Padrimore School', Result: 0 },
{ Name: 'Imad', Phone: '7847777', Age: 85, Institute: 'Padrimore School', Result: 0 },
{ Name: 'Wasim', Phone: '525852154', Age: 51, Institute: 'Padrimore School', Result: 1 }
]


for (var i = 0; i < students.length; i++) {
    var addingRollno = students[i]
    addingRollno.rollno = i + 1
}

for (var i = 0; i < students.length; i++) {
    if (students[i-1].Result == 1) {
        console.log("You are pass" + (i-1))
    }
    else {
        console.log("You are fail" + (i-1))
    }
}

function showResult() {



   var greetings="You Are Pass";
   var sorry="You are Fail";

    var r = document.getElementById('inp')
    var n=document.getElementById('name')
    console.log(r.value)
    for (var i = 0; i < students.length; i++) {
        if (students[i].rollno == (r.value)) {
            alert('Your record has been Found '+students[i-1].Name)
            if(students[i].Result==1){
            n.innerHTML = greetings
            }
            else{
               n.innerHTML=sorry
            }
        }
    }
}
