### Introduction

- What are you building?

We are building an app to store travel documents, view them and plan trips.

- Why are you building it?

To help the user easily access all travel documents in one place.

### Project scope

- What are you not building?

Google Maps, Trip Advisor, Google. The scope will be abit more restricted, it will mostly be a digital wallet and not a recommendation app.

- How did you decide what features were important?

Going through the discovery phase, checking what apps already exist and conducting user research, keeping the app scoped to our timeframe.

### Project plan

- How are you going to structure your sprints?

We're going to split our sprints into weeks but place estimated vs actual labels to our project board and issues

- What order are you going to build in?

We're going to start with the MVP basic features and move on to stretch goals if things go well

- How did user research inform your plan?
  It made us think about what was most interesting or useful to the user. Organisation so that they could go off and enjoy themselves on trips.

### Requirement analysis

- How will you ensure your project is accessible to as many users as possible?

Writing semantic, accessibile HTML and CSS. Implementing mobile-first, responsible design to make the app accessible from most devices.

- Are there any legal or regulatory requirements you should consider?

    - User's Privacy
    - Handling user sensitive data (personal documents)

### Project learnings

- Did your team work effectively?

Yes, we worked together on core features and assigned other issues individually 

- What would you do differently next time?

    - Dedicate more time to tech stack research, we used new libraries such as Local Forage and React Router

### Research and findings

- What did you find out from user testing?

Many of our assumptions were challenged.
We had to modify our UX and UI choices and learned what features are more relevant for the user.

### Project outcomes

- Were your assumptions right or wrong?


### Recommendations and conclusions

- What features would you prioritise to build next?
- Was the project a success?
  Software Development Lifecycle stages

### Planning

- What roles did your team take on?  
  
  DevOps - Orian  
  UX/UI and Scrum - Paolo  
  QA - Milly

- Explain the roles and responsibilities of all people working within the software development lifecycle, and how they relate to the project (K2)

  - DevOps: dev environment setup and deployment, setting up linting and formatting, setting up env variables if needed. Communicating deployment error logs to team
  - Scrum: project board management, conducting daily standup, focusing the team on sprint priorities
  - UX/UI: creating global css utility classes and variables, ensuring execution of design follows Figma prototype
  - Quality Assurance: writing tests with Cypress or Jest with a TDD approach, checking that code is formatted correctly without console.logs() left when pushing to GitHub, keeping the code concise and clearly explained to others

- Did these roles help your team work effectively?

    - Yes! Particularly in maximising our velocity. Knowing which domains of the project belong to each role helped us work more efficiently together 

### Analysis

- What might be the intended and unintended consequences of building this product?

(insert Miro board screenshot)

### Design

- How did you plan a user experience?
  (insert Figma board screenshot)
- What technical decisions did you make?
  
  - Frontend first in our development approach
  - We chose React over Next.js as we do not need a server (client-side app)
  - All data stored locally in the browser (indexedDB - non relational db (OO))
  - Platform as a service hosting on Vercel


- Did you create a technical specification?
  - We discussed our technical requirements and researched the best tech stack for our purposes
  (insert Miro screenshot)

### Implementation/Build

- How did you ensure your code was good?
  - We created reusable helper functions and react custom hooks to extract logic and avoid duplicated code
  - We wrote semantic, accessible HTML
  - Used esLint to identify errors before run time
  - Used prettier for consistent, un-opinionated code formatting across the code base
  - Used Dev Tools to debug our code

- What interesting technical problems did you have to solve?
  - Keeping react state and database in sync (custom React hook)

- How did you debug issues that arose?
  Apply structured techniques to problem solving to identify and resolve issues and debug basic flaws in code (S7)

### Test

- How did you verify your project worked correctly?
  Identify and create test scenarios which satisfy the project specification (S6)

- Did writing automated tests catch any bugs?
  Analyse unit testing results and review the outcomes, correcting errors. (S4)

### Deploy

- Where/how did you deploy your application?
  Review and justify their contribution to building, managing and deploying code into the relevant environment in accordance with the project specification (S10)

- What problems did you encounter during deployment?

### Maintain

- Is it easy for someone make changes to the codebase?

- Could a new person quickly be onboarded to contribute?