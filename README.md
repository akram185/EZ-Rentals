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

_**EZ Rentals** is a site where user can explore the cars available to rent. User will be provided with car types and models in card format on the homepage and when clicked on the cards user can find more information and pricing about the car on its detail page. Once user selects the desired car, user can sign-up with EZ Rentals to reserve the car._


<br>

## MVP

### Goals

- _Build users, cars, cars-types and types tables with associations,_
- _User should be able to view all the car rental options and be able to select their desired car._
- _Users should be able to edit or delete their preference.._
- _Make home,nav,layout,header,footer,sign-up, login, information components._
- _Use flexbox for presenting car cards on the home screen._
- _Implement responsive designs which will support tablet screens and mobile screens._
- _etc._

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Lorem ipsum dolor sit amet, consectetur._ |
|   React Router   | _Lorem ipsum dolor sit amet, consectetur._ |
| React SemanticUI | _Lorem ipsum dolor sit amet, consectetur._ |
|     Express      | _Lorem ipsum dolor sit amet, consectetur._ |
|  Express Router  | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. 

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
|__ services/

```

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Layout    | functional |   n   |   n   | _The layout will wrap the app._                                  |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|    Sign-up   | functional |   n   |   n   | _The Sign-up contains form for user._                            |
|    Home      |   class    |   y   |   n   | _The Home will render the posts using cards in flexbox._         |
|  Car Card    | functional |   n   |   y   | _The cards will render the car info via props._                  |
|    Footer    | functional |   n   |   n   | _The footer will show info about EZ-Rentals and copyright._      |

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| App Skeleton     |    L    |     2 hrs      |     0 hrs     |    0 hrs    |
| Backend CRUD/Structure    |    H    |     8 hrs      |     0 hrs     |    0 hrs    |
| Create CRUD Actions in Frontend |    H     |     8 hrs      |     0 hrs     |     0 hrs     |
| Sign-up/Login form |    H     |     8 hrs      |     0 hrs     |     0 hrs     |
|Styling |    H     |     12 hrs      |     0 hrs     |     0 hrs     |
| Responsive Design |    H     |     6 hrs      |     0 hrs     |     0 hrs     |
| Project debugging and deployment  |    H    |     5 hrs      |     0 hrs     |     0 hrs     |
| TOTAL               |          |     49 hrs      |     0 hrs     |     0 hrs     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

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
