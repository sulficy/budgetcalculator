//  register 

function regist(){
    

    const userDetails = {

        uname : regName.value,
        userid : uId.value,
        password : pswd.value

    }

    if((userDetails.uname).length == " " || (userDetails.userid).length == " " || (userDetails.password).length == " " ){


        alert("enter your details")
    }
    else if(userDetails.userid in localStorage){

        alert("this user id already exist")

    }
    else{
        localStorage.setItem(userDetails.userid,JSON.stringify(userDetails))
            alert("successfully registered")

            window.location.href = 'index.html'
    }
    
}



// login


function login(){
    
    const Login ={

    
    userId : UserId.value,
    pWord : passwd.value

}
    
    

    if((Login.userId).lenght == " " || (Login.pWord).length == " "){
        alert("enter your details")
     }
     else{
        if(Login.userId in localStorage){

            let user = JSON.parse(localStorage.getItem(Login.userId))
                
            if(user.password==Login.pWord){
                alert("successfully login")
                
                

                let cUser = Login.userId
                localStorage.setItem("cUser",JSON.stringify(cUser))

                
                window.location = './budget.html'
                
            }
            else{
                alert("invalid password")
            }

        }
        else{
            alert("invalid userid")
        }
     }


}


function calcu(){

    let salary =parseInt(totalIncome.value)  
    let rent =parseInt(Rent.value) || 0
    let groce =parseInt(groceries.value) || 0 
    let trans =parseInt(transportation.value) || 0 
    let enter =parseInt(entertainment.value) || 0 
    let other =parseInt(Other.value) || 0
    
    

    let totalExpense = rent+groce+trans+enter+other
    console.log(totalExpense);
    const balanceAmount = salary-totalExpense

    if(salary<totalExpense){
        let dataHtml=
        `
    <div class="container">
    <h2 class="text-center">Budget Overview</h2>
    <table class="table table-bordered">
        <thead class="thead-light">
            <tr>
                <th scope="col">Category</th>
                <th scope="col">Amount</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="text-light"><b>salary</b></td>
                <td class="text-light">₹${salary}</td> 
            </tr>
            <tr>
                <td class="text-light">rent</td> 
                <td class="text-light">₹${rent}</td>
            </tr>
            <tr>
                <td class="text-light">Grocery</td> 
                <td class="text-light">₹${groce}</td> 
            </tr>
            <tr>
                <td class="text-light">travel</td> 
                <td class="text-light">₹${trans}</td> 
            </tr>
            <tr>
                <td class="text-light">entertainment</td> 
                <td class="text-light">₹${enter}</td> 
            </tr>
            <tr>
                <td class="text-light">other balance</td> 
                <td class="text-light">₹${other}</td>
            </tr>
            <tr>
                <td class="text-light"><h4>Total Expense</h4></td> 
                <td class="text-light"><h4 >₹${totalExpense}</h4></td>
            </tr>
            <tr>
               <td class="text-light"><h4>Over Expense</h4></td> 
                <td class="text-light"><h4 >₹${balanceAmount}</h4></td> 
            </tr>
        </tbody>
    </table>
</div>
    `
    result.innerHTML = dataHtml
    }
    else{
    

    

    htmlData = 
    `
    <div class="container">
    <h2 class="text-center">Budget Overview</h2>
    <table class="table table-bordered">
        <thead class="thead-light">
            <tr>
                <th scope="col">Category</th>
                <th scope="col">Amount</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="text-light"><b>salary</b></td>
                <td class="text-light">₹${salary}</td> 
            </tr>
            <tr>
                <td class="text-light">rent</td> 
                <td class="text-light">₹${rent}</td>
            </tr>
            <tr>
                <td class="text-light">Grocery</td> 
                <td class="text-light">₹${groce}</td> 
            </tr>
            <tr>
                <td class="text-light">travel</td> 
                <td class="text-light">₹${trans}</td> 
            </tr>
            <tr>
                <td class="text-light">entertainment</td> 
                <td class="text-light">₹${enter}</td> 
            </tr>
            <tr>
                <td class="text-light">other balance</td> 
                <td class="text-light">₹${other}</td>
            </tr>
            <tr>
                <td class="text-light"><h4>Total Expense</h4></td> 
                <td class="text-light"><h4 >₹${totalExpense}</h4></td>
            </tr>
            <tr>
                <td class="text-light"><h4>Balance Amount</h4></td> 
                <td class="text-light"><h4>₹${balanceAmount}</h4></td>
            </tr>
        </tbody>
    </table>
</div>
    `
    result.innerHTML = htmlData
    }
}
    
    
    


     
    

