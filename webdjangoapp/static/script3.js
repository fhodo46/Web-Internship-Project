let hotels = {
    data: [
      {
        productName: "Annex Hotel",
        price: "30",

        image: "static/photo1hotel.jpg",
        description: "At our resort, where each room has an interesting sea view, you may escape to a peaceful world. Allow the soft sea wind to carry your troubles away as you begin your day to the sound of the waves. The splendor of the ocean is always with you, whether you're relaxing on your balcony or enjoying a tasty lunch by the water.",
      },
      {
        productName: "Regency Hotel",
        price: "25",
        image: "static/photo2hotel.jpeg",
        description: "At our resort, where every accommodation offers a picturesque view of our magnificent pool, you may unwind to the fullest. Enjoy the atmosphere as you lounge on your private balcony and take the sea view in.",
      },
      {
        productName: "Chateau d’Étoile",
        price: "58",
        image: "static/photo3hotel.jpeg", 
        description:"Enjoy a luxurious stay in a room that looks out onto our sparkling pool. You'll get a front-facing view of the pool's alluring charm whether you're going for a morning swim or a relaxing day by the water."
      },
      {
        productName: "Sonesta Suite",
        price: "81",
        image: "static/photo4hotel.jpg",
        description: "Enjoy the best of both worlds from your room: stunning sunsets and a view of the pool. Our hotel puts you in the heart of nature's splendor so you may relax in style and comfort."
      },
      {
        productName: "Nana Korobi",
        price: "31",
        image: "static/japanesehotel.jpg",
        description:"Get a grasp of Japanese culture firsthand at our historic residence. For a genuine flavor of Japanese hospitality, enjoy the calm of tatami-floored rooms, indulge in the genuine cuisine, and rest in an onsen."
      },
      {
        productName: "Silver Lion",
        price: "73",
        image: "static/photohotelprelast.jpg",
        description:"Enter an environment where the window of your room frames our inviting pool. Our hotel guarantees a restorative vacation, whether you choose to swim or just relax and take in the scenery."
      },
      {
        productName: "The Ritz",
        price: "94",
        image: "static/photo5hotel.webp",
        description: "With a view of our hotel's ocean, you can experience coastal living at its best. Beautiful sunrises will greet you in the morning, and the sound of the waves will calm you to sleep. Your ideal coastal retreat awaits with direct beach access, delivering a stay full of peace and ocean-inspired beauty."
      },   {
        
        
        
        
        
        
        
        productName: "The Yappy Hotel",
        price: "38",
        image: "static/doghotelimg.jpg",
        description:"Welcome to the Yappy Hotel, your pet's home away from home. In order to ensure a nice visit, our dog-friendly resort provides cozy accommodations, play areas, and attentive staff. Your dog will love the engaging playing, cooling swimming, and custom meals. Having updates about your pet's well-being throughout their stay will allow you to rest easy. If you want a trip that your dog will adore, pick the Yappy Hotel."
      },
    ],
  };
  
  for (let i of hotels.data) {
    
    let card = document.createElement("div");
    
    card.classList.add("card", i.category, "hide");
   
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
   
    let container = document.createElement("div");
    container.classList.add("hotelattributesarea");
    
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);








    let description= document.createElement("h5");
    description.classList.add("hoteldescription"); description.innerHTML=i.description;  container.appendChild(description);
    
  
    card.appendChild(container);
    document.getElementById("hotelsnotbooked").appendChild(card);
  }
  
  
  function filterProduct(value) {
   
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
     
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
  



    let elements = document.querySelectorAll(".card");
  
    elements.forEach((element) => {
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        if (element.classList.contains(value)) {
          element.classList.remove("hide");
        } else {
          element.classList.add("hide");
        }
      }
    });
  }
  
  document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    elements.forEach((element, index) => {
      if (element.innerText.includes(searchInput.toUpperCase())) {
        cards[index].classList.remove("hide");
      } else {
        cards[index].classList.add("hide");
      }
    });
  });   window.onload = () => { filterProduct("all"); };