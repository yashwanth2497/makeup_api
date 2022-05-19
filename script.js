var form=document.createElement("form");
form.setAttribute("id","myform");
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("placeholder","Enter a brand name");
input.setAttribute("id","item");
input.setAttribute("required",true);

var sub=document.createElement("input");
sub.setAttribute("type","submit");
sub.setAttribute("value","search");
form.append(input,sub);
document.body.append(form);

let division=document.createElement("div");
division.setAttribute("id","brand");
document.body.append(division);


var formres=document.getElementById("myform");
formres.addEventListener("submit",(event)=>{
event.preventDefault();//to overcome default behaviour
var item=document.getElementById("item").value;
console.log(item);

var res=fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
console.log(res);
res.then((data)=>data.json())
.then((value)=>{
    console.log(value);
    result(value);
})
.catch((error)=>console.log(error));

function result(res){
        let brand_name=res.filter((ele)=>ele.brand===item);
        display(brand_name);
        
}
}); 


let display=(data)=>{
    let tablebody=document.querySelector("#table-body");
    let tableRow="";
    for(let i of data){
        tableRow+=`
        <tr>
          <td>${i.brand}</td>
          <td>${i.name}</td>
          <td>${i.description}</td>
          <td>${i.currency} ${i.price} ${i.price_sign}</td>
          <td><img src="${i.image_link}"></td>
          <td>${i.product_link}</td>
        </tr>
        `
        tablebody.innerHTML=tableRow;
        }
    }

// api_featured_image: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/048/original/open-uri20180708-4-13okqci?1531093614"
// brand: "colourpop"
// category: "pencil"
// created_at: "2018-07-08T23:45:08.056Z"
// currency: "CAD"
// description: "Lippie Pencil A long-wearing and high-intensity lip pencil that glides on easily and prevents feathering. Many of our Lippie Stix have a coordinating Lippie Pencil designed to compliment it perfectly, but feel free to mix and match!"
// id: 1048
// image_link: "https://cdn.shopify.com/s/files/1/1338/0845/collections/lippie-pencil_grande.jpg?v=1512588769"
// name: "Lippie Pencil"
// price: "5.0"
// price_sign: "$"
// product_api_url: "http://makeup-api.herokuapp.com/api/v1/products/1048.json"
// product_colors: (34) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// product_link: "https://colourpop.com/collections/lippie-pencil"
// product_type: "lip_liner"
// rating: null
// tag_list: (2) ['cruelty free', 'Vegan']
// updated_at: "2018-07-09T00:53:23.301Z"
// website_link: "https://colourpop.com"
// [[Prototype]]: Object
