## Introduction


- What are you building?

We are building an app to store travel documents, view them and plan trips.

- Why are you building it?

To help the user easily access all travel documents in one place.

### Project scope
---

- What are you not building?

Google Maps, Trip Advisor, Google. The scope will be abit more restricted, it will mostly be a digital wallet and not a recommendation app.

- How did you decide what features were important?

Going through the discovery phase, checking what apps already exist and conducting user research, keeping the app scoped to our timeframe.

### Project plan

---

- How are you going to structure your sprints?

We're going to split our sprints into weeks but place estimated vs actual labels to our project board and issues

- What order are you going to build in?

We're going to start with the MVP basic features and move on to stretch goals if things go well

- How did user research inform your plan?
  It made us think about what was most interesting or useful to the user. Organisation so that they could go off and enjoy themselves on trips.

### Requirement analysis

---

- How will you ensure your project is accessible to as many users as possible?

Writing semantic, accessibile HTML and CSS. Implementing mobile-first, responsible design to make the app accessible from most devices.

- Are there any legal or regulatory requirements you should consider?

    - User's Privacy
    - Handling user sensitive data (personal documents)

### Project learnings

---

- Did your team work effectively?

Yes, we worked together on core features and assigned other issues individually. We were all aligned with the goals of the project. We discussed every feature in detail before writing any code

- What would you do differently next time?

    - Dedicate more time to tech stack research, we used new libraries such as Local Forage and React Router
    - Dedicate more time to planning Database schema - even if local or non-relational. Consider all data being collected and how to organize it before writing the       code


### Research and findings

---

- What did you find out from user testing?

Many of our assumptions were challenged.
We had to modify our UX and UI choices and learned what features are more relevant for the user.

### Project outcomes
---

- Were your assumptions right or wrong?
Some of our assumptions regarding what users want from a travel app were confirmed: 
  - users want one place to store all travel related docs
  - a simple interface with quick links to homepage and back arrow
  - food recommendations are a priority for users

### Recommendations and conclusions
---

- What features would you prioritise to build next?
  - Food Api [Spoonacular](https://spoonacular.com/food-api)
  - Local events / news API 
  - Utilising [Cities.json](https://github.com/lutangar/cities.json) for error handling user input :city_sunrise: 
  - Finish PWA implementation
  - Push notifications on trip day
  - Fix To do list bugs
  - Make document names editable and allow re-uploading an existing doc
  

### Planning
---

- What roles did your team take on?  
  
  DevOps - Orian  
  UX/UI and Scrum Facilitator - Paolo  
  QA - Milly

- Explain the roles and responsibilities of all people working within the software development lifecycle, and how they relate to the project (K2)

  - DevOps: dev environment setup and deployment, setting up linting and formatting, setting up env variables if needed. Communicating deployment error logs to team
  - Scrum: project board management, conducting daily standup, focusing the team on sprint priorities
  - UX/UI: creating global css utility classes and variables, ensuring execution of design follows Figma prototype
  - Quality Assurance: writing tests with Cypress or Jest with a TDD approach, checking that code is formatted correctly without console.logs() left when pushing to GitHub, keeping the code concise and clearly explained to others

- Did these roles help your team work effectively?

    - Yes! Particularly in maximising our velocity. Knowing which domains of the project belong to each role helped us work more efficiently together 

### Analysis
---

- What might be the intended and unintended consequences of building this product?

<img width="577" alt="Screenshot 2022-03-11 at 12 59 31" src="https://user-images.githubusercontent.com/77785778/157871193-6fc1e921-3651-478f-9447-86733ee49302.png">



### Design
---
- How did you plan a user experience?

### Figma wireframes

First iteration  
---
 <img width="635" alt="Screenshot 2022-03-11 at 14 10 24" src="https://user-images.githubusercontent.com/77785778/157883891-4e1b92af-2fca-4685-9792-14f184930606.png">
 
Second iteration
---
 <img width="661" alt="Screenshot 2022-03-11 at 14 10 37" src="https://user-images.githubusercontent.com/77785778/157883960-d40cb49e-55a1-4a39-bc69-83365b17c7ad.png">
<img width="600" alt="Screenshot 2022-03-11 at 14 10 43" src="https://user-images.githubusercontent.com/77785778/157883978-36e4609b-a9e7-4a9c-b160-7dee85b854b6.png">


- What technical decisions did you make?
  
  - Frontend first in our development approach
  - We chose React over Next.js as we do not need a server (client-side app)
  - All data stored locally in the browser (indexedDB - non relational db (OO))
  - Platform as a service hosting on Vercel


- Did you create a technical specification?
  - We discussed our technical requirements and researched the best tech stack for our purposes
  <img width="491" alt="Screenshot 2022-03-11 at 12 59 42" src="https://user-images.githubusercontent.com/77785778/157871295-40e11b59-1357-407c-8c8a-6fff7fd67eb7.png">


### Implementation/Build
---
- How did you ensure your code was good?
  - We created reusable helper functions and react custom hooks to extract logic and avoid duplicated code
  - We wrote semantic, accessible HTML
  - Used esLint to identify errors before run time
  - Used prettier for consistent, un-opinionated code formatting across the code base
  - Used Dev Tools to debug our code

- What interesting technical problems did you have to solve?
  - Keeping react state and database in sync (custom React hook)
  - Progressive Web App setup and implementation

- How did you debug issues that arose?
  - Checking documentation
  - Putting `console.log` at breakpoints to find bug source
  - Inspect with Dev tools
  - Preview PWA offline with dev tools

### Test
---
- How did you verify your project worked correctly?
  - manual testing of user flows on deployed site
  - Cypress end to end testing
  - Vercel integrated logs for build fails

### Deploy
---
- Where/how did you deploy your application?
  - Deployed on Vercel because of good dev experience and automated testing on builds
  - Easy and quick deployment

### Maintain
---
- Is it easy for someone make changes to the codebase?
  - We strived to keep the codebase file system well-organised 
  - Built reusable components and styled components
  - Clear naming of variables
  - custom React hook for syncing db and state has been reused across three different local databases

- Could a new person quickly be onboarded to contribute?
  - We believe so because of the reasons listed above and also because the core features of the app are functioning well and there is a stable base to build upon
