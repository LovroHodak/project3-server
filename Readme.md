# Click'n'Ride
## Description
Basically instant ebay! 
Take a photo of your product and sell it instantly or just check out all the products others are selling and buy. 
So simple. So close. Click'n'ride
## Backlog
- messaging
- use phone camera
  
# Client
## Routes
- / - Home (list of bikes)
- /sellBike - form
- /bike/:id - detail view
- /bike/:id/edit - edit bike
- /bikeSortPriceDown - sorted
- /bikeSortPriceup -sorted
- /stuffList - list of stuffs
- /sellStuff - form
- /stuff/:id - detail view
- /stuff/:id/edit - edit stuff
- /stuffSortPriceDown - sorted
- /stuffSortPriceup -sorted
- /freeList - list of frees
- /giveAway - form
- /free/:id - detail view
- /signup - Signup form
- /signin - signin form

## Pages
- / - Home  PUBLIC
- /sellBike LOGGED IN
- /bike/:id - PUBLIC
- /bike/:id/edit - LOGGED IN + CREATOR
- /bikeSortPriceDown - PUBLIC
- /bikeSortPriceup -PUBLIC
- /stuffList - PUBLIC
- /sellStuff - LOGGED IN
- /stuff/:id - PUBLIC
- /stuff/:id/edit - LOGGED IN + CREATOR
- /stuffSortPriceDown - PUBLIC
- /stuffSortPriceup -PUBLIC
- /freeList - PUBLIC
- /giveAway - LOGGED IN
- /free/:id - PUBLIC
- /signup - PUBLIC
- /signin - PUBLIC
## Components
-addBikeForm
-addFreeForm
-addStuffForm
-bikeDetail
-bikeList
-bikeSortPriceDown
-bikeSortPriceUp
-editForm
-editFormStuff
-freeDetail
-freeList
-myNav
-signIn
-signUp
-stuffDetail
-stuffList-
stuffSortPriceDown
-stuffSortPriceUp
-webcam

## IO

## Models
User model
```
username - String // required
email - String // required & unique
passwordHash - String // required

```
Bike model
```
price
size
bikeType
image
phone
city
ownerId
```
Free model
```
nameFree
phoneFree
cityFree
image
ownerId
```
Stuff model
```
nameStuff
phoneStuff
cityStuff
categoryStuff
image
ownerId
```

## API Endpoints/Backend Routes
# Auth
- POST
-/signin
-/signup
-/logout
GET
-/user

# Bikes
- GET 
-/bikes
-/bikes/:myId
- POST
-/create
- PATCH 
-/bikes/:id
DELETE
-/bikes/:id
# File uploader 
POST
-/upload
POST
-/imageUploadPassImage
# Stuffs
- GET 
-/stuffs
-/stuffs/:id
- POST
-/createS
- PATCH 
-/stuffs/:id
DELETE
-/stuffs/:id
# Frees
- GET 
-/frees
-/frees/:id
- POST
-/createF
DELETE
-/bikes/:id
## Links

### Git
- Clientside
  https://github.com/LovroHodak/project3-client
- Serverside
  https://github.com/LovroHodak/project3-server

### Heroku
https://clicknride.herokuapp.com/