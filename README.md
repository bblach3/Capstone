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
We cloned web site for Fisker company that sells luxury plug-in electric vehicles. 

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
- Store page
- About Us page
- fully functioning log-in authentication connected to the back-end database 
- shopping cart for the store page
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
function showFullMediaContent(result) {
    console.log(result)
    // EXTRACT RESULTS & SET BACKUP IF FAILURE
    const tmdbId = result.id || '0';
    const title = result.title || result.name || 'Unknown';
    const tagline = result.tagline || `NO. SEASONS: ${result.number_of_seasons}  ~  NO. EPISODES: ${result.number_of_episodes}` || '';
    const overview = result.overview || '';
    const rating = result.vote_average || '0';
    let date = result.release_date || result.first_air_date || '';
    let status = result.status || '';
    let backdrop = `${BACKDROP}${result.backdrop_path}`;
    let poster = `${POSTER}${result.poster_path}`;
    let trailer = [];
    let linktext = '';
    let streamLink = '';
    let streamService = '';
    let runTime = result.runtime + ' Minutes';
    try {
        linktext = result['watch/providers'].results.US.flatrate[0].provider_name;
        streamLink = POSTER + result['watch/providers'].results.US.flatrate[0].logo_path;
        streamService = result.homepage;
    } catch (error) {
        linktext = title;
        streamLink = 'images/vudu.png'
        streamService = 'https://www.vudu.com'
    }
    // CHANGE DATE TO EUROPEAN FORMAT
    // IF ARTWORK FAILS, SET THE DEFAULT ARTWORK
    if (date) date = date.split('-').reverse().join('-');
    if (result.backdrop_path == null) backdrop = DEFAULT_BACKDROP;
    if (result.poster_path == null) poster = DEFAULT_POSTER;
    // GET TRAILER & GET FOR UNDEFINED
    // RETURN NEW ARRAY AND FILTER BASED ON VIDEO TYPE
    if (result.videos.results.length != 0) {
        trailer = result.videos.results.map(video => {
            if (video.type == 'Trailer') {
                return `https://www.youtube.com/watch?v=${video.key}`;
            }
        }).filter(video => {
            if (video != 'undefined') {
                return video;
            }
        });
    }
    // IF NO TRAILERS EXIST - REDIRECT TO YOUTUBE WITH QUERY
    else {
        trailer[0] = `https://www.youtube.com/results?search_query=${title}`;
    }
    // CREATE HTML TO RETURN
    fullMediaContent.innerHTML = `
        <p class="content-title">MEDIA DETAILS
            <i class="material-icons close-media-content" onclick="resetFullMediaContent(); checkIfCollectionChanged(${tmdbId})">close</i>
        </p>
        <!-- MEDIA BACKDROP -->
        <div id="media-showcase" style="background-image: url('${backdrop}')">
            <a class="download-fanart" href="${backdrop}"target="_blank">DOWNLOAD WALLPAPER<br/>
                <i class="material-icons download-icon">cloud_download</i>
            </a>
            <h1 id="media-title">${title}</h1>
            <a href="${streamService}" class="streamService" target="_blank">
            <img width="8%" id="streamer" src="${streamLink}" alt="${linktext}">
            </a>
        </div>
        <!-- MEDIA DETAILS -->
        <div id="media-details">
            <img width="140" id="media-poster" src="${poster}" alt="${title}">
            <div id="media-details-bar">
                <a href="${trailer[0]}" target=_blank">Trailer</a>
                <span>${rating}</span><span>${status}</span><span>${date}</span><span>${runTime}</span>
                <span class="from-collection" onclick="updateList(${tmdbId},'#from-full-media-collection')">Add/Remove from Collection</span>
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
