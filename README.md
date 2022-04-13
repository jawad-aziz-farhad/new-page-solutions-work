# new-page-solutions-work
1. install node_modules using `npm i`
2. Run the app using `ionic serve`

# Points Addressed in the app:
1. http://www.mocky.io/v2/5daffe6d2f00001172c1374b has broken images.
2. https://unsplash.com/ API is used to fetch images. For now data is coming for `flower` as we are querying for flower.
3. New data pulled for the next page when user will reach to the bottom of the page using `ion-infinite-scroll` component.
4. Data fetched from API will be stored in a shared-data service to use it across both pages (home, details). so we can avoid multiple calls.
5. Animation applied on page transition.
6. Swipe feature applied on details page with `autoPlay` and it will start over after the last slide. 
