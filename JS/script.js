let bagItems;
onLoad();

function onLoad(){
 let  bagItemsStr=localStorage.getItem('bagItems');
 bagItems =bagItemsStr ? JSON.parse(bagItemsStr) :[];
displayItemsOnHomePage();
displayBagIcon();
}
function addToBag(itemId){
  bagItems.push(itemId);
  localStorage.setItem('bagItems',JSON.stringify(bagItems));
  displayBagIcon()
}

function displayBagIcon(){
  let bagCounter =document.querySelector('.bag-item-count');
  if(bagItems.length>0){
        bagCounter.style.visibility='visible';

      bagCounter.innerHTML=bagItems.length;
  }else{
    bagCounter.style.visibility='hidden';
  }
}

function displayItemsOnHomePage(){
let itemsContainerElement = document.querySelector(".items-container");
if(!itemsContainerElement){
  return;
}
let innerHTML='';
items.forEach(item =>{
  innerHTML += ` <div class="item-container">
           <img class="item-img" src="${item.image}" alt="product img" >
          <div class="rating"> ${item.rating.stars} ⭐ |${item.rating.count} </div>
          <div class="company-name">${item.company}</div>
          <div class="item-name">${item.item_name}</div>
          <div class="price">
            <span class="current-price">₹ ${item.current_price} </span>
            <span class="original-price">₹ ${item.original_price} </span>
            <span class="discount">(${item.discount_percentage}% OFF)</span>
            <br><button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
          </div>
        </div>`
});
itemsContainerElement.innerHTML = innerHTML;
}


