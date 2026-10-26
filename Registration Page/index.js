// const form = document.getElementById("regForm");
// const output = document.getElementById("output");
// 
// form.addEventListener("submit", function(e) {
    // e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const btn = document.getElementById("btn"); 
    const div = document.getElementById("students");
    const shorStudents = ()=>{
        // console.log(name.vale);
        // console.log(email.value);
        // console.log(password.value);
        div.innerText =`${name.value } $ {name.email}`;
        
        
    }
    btn.addEventListener("click",showStudents)

        // <p><strong>Name:</strong> ${name}</p>
        // <p><strong>Email:</strong> ${email}</p>
        // <p><strong>Password:</strong> ${password}</p>
    // `;

    // output.appendChild(card);

    // form.reset();
// });