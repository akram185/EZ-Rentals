# EZ-Rentals
- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**EZ Rentals** is a site where user can explore the cars available to rent. User will be provided with car types and models in card format on the homepage and when clicked on the cards user can find more information and pricing about the car on its detail page. User can also sign-up with EZ Rentals to add the car to their my cars list and or can edit or delete the list._

<br>

## MVP

### Goals

- _Build users, cars, cars-types, vehicles and types tables with associations,_
- _User should be able to view all the car options and be able to select their desired car._
- _Users should be able to edit or delete their preference.._
- _Make home,nav,layout,header,footer,sign-up, login, information components._
- _Use flexbox for presenting car cards on the home screen._
- _Implement responsive designs which will support tablet screens and mobile screens._
- _etc._

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | React handles functional front-end._ |
|   React Router   | React Router will route users to different screens for better UX._ |
|    Ruby on Rails    | Ruby on Rails is the framework that includes everything needed to create database-backed web applications according to the Model-View-Controller (MVC)._ |
|  Formik  | Formik is a in built library which can handle forms._ |
|  Bootstrap  | Bootstrap is really clean to style cards._ |

<br>

### Client (Front End)

#### Wireframes

![Root Link Desktop](https://wireframe.cc/6KympU)

- Desktop Landing

![Car Details](https://wireframe.cc/Mkhv6F)

- Details Car

![Sign-Up form](https://wireframe.cc/BUCT9N)

- Form 

![Root Link Tablet](https://wireframe.cc/drQ6yh)

- Tablet Resource Index

![Root Link Mobile](https://wireframe.cc/FJNH9J)

- Mobile Resource Index

#### Component Tree

![Whimsical](https://whimsical.com/8MqvLQRWvZD9T64NhHwUvR)

#### Component Hierarchy

``` structure

 src
    ├── App.css
    ├── App.js
    ├── components
    │   └── Header.jsx
    ├── containers
    │   └── MainContainer.jsx
    ├── index.css
    ├── index.js
    ├── layouts
    │   └── Layout.jsx
    ├── screens
    │   ├── Typess.jsx
    │   ├── CarCreate.jsx
    │   ├── CarDetail.jsx
    │   ├── CarEdit.jsx
    │   ├── Cars.jsx
    │   ├── Login.jsx
    │   └── Register.jsx
    └── services
        ├── api-config.js
        ├── auth.js
        ├── Types.js
        └── Cars.js

```

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Layout    | functional |   n   |   n   | _The layout will wrap the app._                                  |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|    Sign-up   | functional |   n   |   n   | _The Sign-up contains form for user._                            |
|    Home      | functional |   n   |   n   | _The Home will render the posts using cards in flexbox._         |
|  Car Card    | functional |   n   |   y   | _The cards will render the car info via props._                  |
|    Footer    | functional |   n   |   n   | _The footer will show info about EZ-Rentals and copyright._      |

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| App Skeleton     |    L    |     2 hrs      |     6 hrs     |    6 hrs    |
| Backend CRUD/Structure    |    H    |     8 hrs      |     12 hrs     |    12 hrs    |
| Create CRUD Actions in Frontend |    H     |     8 hrs      |     10 hrs     |     10 hrs     |
| Sign-up/Login form |    H     |     8 hrs      |     12 hrs     |     12 hrs     |
|Styling |    H     |     12 hrs      |     8 hrs     |     8 hrs     |
| Responsive Design |    H     |     6 hrs      |     4 hrs     |     4 hrs     |
| Project debugging and deployment  |    H    |     5 hrs      |     2 hrs     |     2 hrs     |
| TOTAL               |          |     49 hrs      |     54 hrs     |     54 hrs     |


<br>

### Server (Back End)

#### ERD Model

[ERD](https://drive.google.com/file/d/1JcOOvpUhPrp5pITmULZqLXhuyVXzpbId/view?usp=sharing)

<br>

***

## Post-MVP

- _Sign-up form validation._
- _Implement grid in nav._
- _Add a favorites component which holds more than one car for user to come back and reserve._
- _Make home,nav,layout,header,footer,sign-up, login, information components._
- _Add search bar which can filter cars by price and narrow down the choices for user._
- _etc._
***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
