# Capstone
<br />
<p align="center">
  <a>
    <img src="images/FindingStreamo_wht_txt.png" alt="Logo" width="576px" height="238">
  </a>
  <!-- <h2 align="center"> finding Whiskers</span></h2> -->
  <p align="center">
    Hello, we're Fisker. We're here to change the way you move with world's most exciting and sustainable all-elecrtic vehicles.
    We weave emotion and sustainablility into everything we make.
    <br />
    <br />
    <a href="https://whiskersinc.netlify.app/" target="_blank">Whiskers Inc.</a>
  </p>
</p>
<!-- TABLE OF CONTENTS -->
## Table of Contents
- [About the Project](#about-the-project)
- [Built With](#built-with)
- [The Team](#the-team)
- [MVP (Minimum Viable Product)](#mvp-minimum-viable-product)
- [Stretch Goals](#stretch-goals)
- [Challenges and Solutions](#challenges-and-solutions)
- [Code Snippets](#code-snippets)
- [Screenshots](#screenshots)
<!-- ABOUT THE PROJECT -->

## About The Project
We cloned the web site for Fisker company that sells luxury plug-in electric vehicles. 

## Built With
<strong> Tech: </strong>
- HTML 
- React Redux
- JavaScript
- CSS and Bootstrap
- PostgreSQL

## The Team
<strong> Bogdan Blach: http://www.linkedin.com/in/bogdanblach https://github.com/bblach3 </strong> <br/>
<strong> Jim Chamberlin:https://github.com/jimcha924 https://www.linkedin.com/in/james-chamberlin/ </strong> <br/>
<strong> Jennifer Grillo: https://www.linkedin.com/in/jenngrillo/ https://github.com/jgrillo36 </strong> <br/>
<strong> Jacob Nordstrom: https://www.linkedin.com/in/jacob-nordstrom9/ https://github.com/jacobnordstrom9 </strong> <br/>

- Project Manager | Jennifer Grillo
- User Interface  | Jacob Nordstrom and Jim Chamberline
- Backend | Bogdan Blach and Jennifer Grillo
- Collaborate using Pull Requests from GitHub repo
- Project planning software used with Trello and dbdiagram
## MVP (Minimum Viable Product):
Clone the Fisker website with the folowing implementations:
- Home page
- Sign-up page
- Log-in page
- Store page connecting to back end displaying the products
- About Us page
- fully functioning log-in authentication connected to the back-end database 
- shopping cart for the store page connected to products table in database
## Stretch Goals
- Finish connecting orders to users and products based on the database associations through back-end
- Creating a fully functioning checkout component for the shopping cart
- Feature that allows you to change the language of the page
## Challenges and Solutions: <br/> 
<strong> Challenge: </strong> Separating the front end work and files between Jacob and Jim was somewhat difficult. We had issue with combining the CSS styling components while sharing the same files<br/>
<strong> Solution: </strong> Jim created seprate CSS files for different aspects of the page while making the names of the style attributes more descriptive
<strong> Challenge:</strong> Database table association was the biggest challenge on the back-end. We were struggling to decide between belongTo and hasMany when associating users and products table to orders. It turned out, however, that orders and product-order were the only tables needing associations defined.
<strong> Solution: </strong> We worked repeatedly with the teaching assistant on this issue and with the help of layout diagram and the input from the class instructor we were able to define the correct associations.

## Code Snippets
```sh
** DYNAMIC USER INTERFACE CODE **

//BACKGROUND VIDEO
const BackgroundVideo = () => {
    
 const video = React.useRef(null);
  React.useEffect(() => {
    console.log(video.current.style);
    video.current.style.filter = "blur(10px)";
  }, []);

    return <>

    <div className='container'>
        <video
          style={{ filter: `blur(${blur}px)`, WebkitFilter: `blur(${blur}px)` }}
          autoPlay="autoplay"
          loop="loop"
          muted
          // ref={video}
          id="video-id"
          className='video' >
          {/* TODO make it accept multiple media types */}
          <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
      </video>
        {children}
      </div>

    </>
}

    // REDUCER LOGIC FOR THE SHOPPING CART
    const cartReducer = (state, action) => {
  if (state == null) {
    state = {
        cartItems: [],
        numberOfItems: 0,
        totalCost: parseFloat(0.00)
    };
  }

  switch (action.type) { //action.product

    case ADD_TO_CART:
        console.log("price add", action.product.price)
        let newCartItems = [...state.cartItems];
        let isFound = false;

        newCartItems.forEach(product =>{
            if(product.id === action.product.id){
                product.count++;
                isFound = true;
            }
        })

        if(!isFound){
            newCartItems.push({...action.product, count:1})
        }

        console.log("totalcost", state.totalCost + parseFloat(action.product.price))
        return {
            ...state,
            cartItems: newCartItems,
            numberOfItems: state.numberOfItems + 1,
            totalCost: state.totalCost + parseFloat(action.product.price)
        }


        case REMOVE_FROM_CART:
        console.log("price remove", action.product.price)
        let oldCartItems = [...state.cartItems];
        let newCart = oldCartItems.filter(cartItems => cartItems.id !== action.product.id);

        console.log("oldCartItems", oldCartItems)
        console.log("newCart", newCart)
        console.log("totalcost after remove", state.totalCost - parseFloat(action.product.price))
        return {
            ...state,
            cartItems: newCart,
            numberOfItems: state.numberOfItems - 1,
            totalCost: state.totalCost - parseFloat(action.product.price)
            
        }


    default:
      return state;
  }
};

export default cartReducer
```
## Screenshots
Homepage
<img src="images/homepage.png" alt="homepage" width="100%" height="782">
Search feature
<img src="images/searchingFindingNemo.png" alt="search" width="100%" height="432">
Search results
<img src="images/resultsFindingNemo.png" alt="searchMovieResults" width="100%" height="782">
Link to streaming service where movie is available
<img src="images/Disney+FindingNemo.png" alt="Disney+" width="100%" height="782">
TV show search results
<img src="images/searchTVShow.png" alt="tvShows" width="100%" height="782px">
Example of the list feature
<img src="images/listExample.png" alt="list" width="100%" height="432">
