# vue-roomlelo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Documentation 

### Views 
```
About.Vue - /about
```
&nbsp;&nbsp;&nbsp;&nbsp;About page for the organisation
```
Home.Vue - /
```
&nbsp;&nbsp;&nbsp;&nbsp;Landing page. It currently consists of 2 components Search and DestinationCard. It has the search functionality and basic promotional images.
```
Product.Vue - /product
```
&nbsp;&nbsp;&nbsp;&nbsp;It is a detail property page. The url consists of the id of the property, which is used to retrive the property. It has 2 components Search and VisitForm (for booking a visit to that property).
```
Search.Vue - /search?id=XYZ
```
&nbsp;&nbsp;&nbsp;&nbsp;It is the list view for properties resulting from the search query (Property type, property location, property for whom). It contains filter for the properties and should contain a property card for each property. (Currently it just shows each property as a string).
```
Shop.Vue - /shop
```
&nbsp;&nbsp;&nbsp;&nbsp;It contains some code for the prototype list page template. But not useful.
```
Uploader.Vue - /uploader
```
&nbsp;&nbsp;&nbsp;&nbsp;It is a page to upload property details from. It was only for prototyping purpose.

### Components
```
DestinationCard.Vue
```
&nbsp;&nbsp;&nbsp;&nbsp;These are cards to display destinations, on the home page.
```
Navbar.Vue
```
&nbsp;&nbsp;&nbsp;&nbsp;This is the navbar, it should be made with the UI. and imported in the each view.
```
PropertCard.Vue
```
&nbsp;&nbsp;&nbsp;&nbsp;This is supposed to be the property card in the list view / search view in the app.
```
Search.Vue 
```
&nbsp;&nbsp;&nbsp;&nbsp;This is the component for search, it has input for Property type, property location, property for whom. It then redirects to /search view it holds 3 parameters type, location and forWhom. 
```
VisitForm.Vue
```
&nbsp;&nbsp;&nbsp;&nbsp;This component has code book a visit to a property, it uses forebase to verify phone number using OTP.

**** /views/Search.vue and /components/Search.Vue are different


