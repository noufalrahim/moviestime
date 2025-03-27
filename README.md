# 🎬 Movie Search Mobile App  

A React Native application that allows users to search for movies using the **OMDb API**, view details, and save favorites.  

---

## 🚀 Features  
✅ Search for movies by title using **OMDb API**  
✅ Display movie posters and titles in a list  
✅ View detailed movie information (poster, title, year, genre, rating, etc)  
✅ Save favorite movies using **AsyncStorage**  
✅ Load more movies at the bottom  
✅ Featured movies list

---

## 📥 How to Run  

### **1️⃣ Install Dependencies**  
```sh
npm install

npm start
```

### Project Strucutre
# src

* [assets/](./src/assets)
  * [images/](./src/assets/images)
    * [ANKFr.jpg](./src/assets/images/ANKFr.jpg)
    * [HD-wallpaper-joker-movie-8k-banner.jpg](./src/assets/images/HD-wallpaper-joker-movie-8k-banner.jpg)
    * [MV5BOTA1Mzc2N2ItZWRiNS00MjQzLTlmZDQtMjU0NmY1YWRkMGQ4XkEyXkFqcGc@._V1_SX300.jpg](./src/assets/images/MV5BOTA1Mzc2N2ItZWRiNS00MjQzLTlmZDQtMjU0NmY1YWRkMGQ4XkEyXkFqcGc@._V1_SX300.jpg)
    * [blank-profile-picture.png](./src/assets/images/blank-profile-picture.png)
    * [hq720.jpg](./src/assets/images/hq720.jpg)
    * [john_wick_chapter_two_ver3_xlg.png](./src/assets/images/john_wick_chapter_two_ver3_xlg.png)
    * [the-avengers-movie-poster-banner.png](./src/assets/images/the-avengers-movie-poster-banner.png)
* [components/](./src/components)
  * [Cards/](./src/components/Cards)
    * [MovieCard.tsx](./src/components/Cards/MovieCard.tsx)
    * [MovieCardExtended.tsx](./src/components/Cards/MovieCardExtended.tsx)
    * [index.ts](./src/components/Cards/index.ts)
  * [Carousel/](./src/components/Carousel)
    * [CarouselComponent.tsx](./src/components/Carousel/CarouselComponent.tsx)
    * [index.ts](./src/components/Carousel/index.ts)
  * [HorizontalSlider/](./src/components/HorizontalSlider)
    * [HorizontalSlider.tsx](./src/components/HorizontalSlider/HorizontalSlider.tsx)
    * [index.ts](./src/components/HorizontalSlider/index.ts)
  * [MovieDetailItem/](./src/components/MovieDetailItem)
    * [MovieDetailItem.tsx](./src/components/MovieDetailItem/MovieDetailItem.tsx)
    * [index.ts](./src/components/MovieDetailItem/index.ts)
* [constants/](./src/constants)
  * [index.ts](./src/constants/index.ts)
* [navigators/](./src/navigators)
  * [HomeStackNavigator.tsx](./src/navigators/HomeStackNavigator.tsx)
  * [RootNavigator.tsx](./src/navigators/RootNavigator.tsx)
  * [index.ts](./src/navigators/index.ts)
* [screens/](./src/screens)
  * [Favourites/](./src/screens/Favourites)
    * [FavouritesScreen.tsx](./src/screens/Favourites/FavouritesScreen.tsx)
    * [index.ts](./src/screens/Favourites/index.ts)
  * [Home/](./src/screens/Home)
    * [HomeScreen.tsx](./src/screens/Home/HomeScreen.tsx)
    * [index.ts](./src/screens/Home/index.ts)
  * [Movies/](./src/screens/Movies)
    * [AboutMoviesScreen.tsx](./src/screens/Movies/AboutMoviesScreen.tsx)
    * [index.ts](./src/screens/Movies/index.ts)
  * [Search/](./src/screens/Search)
    * [SearchScreen.tsx](./src/screens/Search/SearchScreen.tsx)
    * [index.ts](./src/screens/Search/index.ts)
* [types/](./src/types)
  * [MovieType.ts](./src/types/MovieType.ts)
* [utils/](./src/utils)
  * [getItem.ts](./src/utils/getItem.ts)
  * [parseItems.ts](./src/utils/parseItems.ts)
  * [saveItem.ts](./src/utils/saveItem.ts)

