// import fetch from "node-fetch";


fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{
    return res.json();
}).then((data)=>{

    for(let i=0; i<data.length; i++){
        // create(data[i])
        let data_div = document.createElement("div")
        data_div.setAttribute("class", "data")

        // create p tag with class "name" and stores name
        let name_p = document.createElement("p")
        name_p.innerText = "Name: " + data[i].name
        name_p.setAttribute("class", "name")

        // create p tag with class "email" and stores email
        let email_p = document.createElement("p")
        email_p.innerText = "Email: " + data[i].email
        email_p.setAttribute("class", "email")

        // create p tag with class "street" and stores street
        let street_p = document.createElement("p")
        street_p.innerText = "Street: " + data[i].address.street
        street_p.setAttribute("class", "street")

        // create p tag with class "city" and stores city
        let city_p = document.createElement("p")
        city_p.innerText = "City: " + data[i].address.city
        city_p.setAttribute("class", "city")

        // appends all tags to data div
        data_div.append(name_p)
        data_div.append(email_p)
        data_div.append(street_p)
        data_div.append(city_p)

        let main = document.querySelector("#main")
        // appends div to main div
        main.append(data_div)
        
    }
    
})

