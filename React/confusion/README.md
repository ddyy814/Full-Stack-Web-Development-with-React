# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Assignment 1:

Assignment Requirements

This assignment requires you to complete the following tasks. Detailed instructions for each task are given below. The picture of the completed web page included below indicates the location within the web page that will be updated by the three tasks.

Task 1

In this task you will be adding a new DishdetailComponent  to your React application and include the component into the menu component's view so that the details of a specific dish are displayed there:

- Replace the card showing the selected dish in MenuComponent's view with the DishdetailComponent, and make sure to pass the selected dish information as props to the DishdetailComponent.
- Create a new DishDetail class in a file named DishdetailComponent.js in the components folder
- Export the DishDetail class from this file so that it can be imported in MenuComponent.js and used to construct the view of the selected dish.
- Return a <div> from the render() function. This <div> should use the Bootstrap row class to position the content within the <div>. This div will display both the details of the dish in a Card and the list of comments side-by-side for medium to extra large screens, but will stack them for xs and sm screens.
- The card should be enclosed inside a <div> appropriate Bootstrap column classes so that it occupies the entire 12 columns for the xs and sm screen sizes, and 5 columns for md screens and above. Also apply a class of m-1 to this div.
- The comments should be enclosed in a <div> to which you apply appropriate column classes so that it occupies the entire 12 columns for the xs and sm screen sizes, and 5 columns for md screens and above. Also apply a class of m-1 to this div.
- If the dish is null then you should return an empty <div>
  
Task 2

In this task you will be adding a card component to the DishdetailComponent view to display the details of the dish given above:

- Implement a function named renderDish() that takes the dish as a parameter and returns the JSX code for laying out the details of the dish in a reactstrap Card. You have already seen this as part of the MenuComponent class in the exercise earlier.
- Display the name of the dish as the Card title, and the description as the Card text.

Task 3

In this task you will use the comments that are included in the dish object above to display a list of the comments for the dish. Please use your JavaScript knowledge to recall how you would access an inner property in a JavaScript object that itself points to an array of JavaScript objects (comments). This task involves the following steps:

- Implement a function named renderComments() that takes the comments array as a parameter and lays out each comment as shown in the image below. You should use the Bootstrap list-unstyled class on the list.
- Each comment should be displayed on two lines, the first one showing the comment, and the second line showing the comment author's name and the date.
- The comments should contain a <h4> header with the word "Comments".
- Remember to enclose the header and comments inside a <div> before returning the JSX code. Otherwise React will not do the layout correctly.
- If the comments are null, then you should return an empty <div>.


## Asssignment 2:

Assignment Requirements

This assignment requires you to complete the following tasks. Detailed instructions for each task are given below. The picture of the completed web page included below indicates the location within the web page that will be updated by the three tasks.

Task 1

In this task you will be integrating the AboutComponent into the single page application:

- First, download the AboutComponent.js given above and move it to the components folder, and
- Update the MainComponent.js file to integrate the AboutComponent into the single page application. You should be able to navigate to the AboutComponent by clicking the links in the navigation bar and the footer.

Task 2

In this task you will implement a new functional component named <RenderLeader> through the RenderLeader() function:

- The RenderLeader() function receives the details of a leader as its  parameter,
- Implement RenderLeader() function to use the Leader information received as a parameter and render the leader information as shown in the screenshot below using the reactstrap <Media> component. Recall how we used the <Media> component in the first module to render the details of a dish in the MenuComponent.
- This will make available the <RenderLeader> component for use within your AboutComponent.
  
Task 3

In this task you will use the <RenderLeader> component created in the previous task to render a list of leaders within your AboutComponent:

- Update the leaders variable within the AboutComponent() function to make use of the <RenderLeader> component to render the list of leaders.


## Assignment 3:


Assignment Requirements

Task 1

In this task you will add a new class component named CommentForm. You need to complete the following:

- Add a new class component named CommentForm that will add a button to the view as shown in the image below.
- When the button is clicked, it toggles a modal that will display the comment form.
- The CommentForm component is used by the RenderComments function to display the button for toggling the modal.

Task 2

In this task you will construct the form for users to submit their comments as shown in the image below. You need to complete the following:

- Set up the form as a local form using the react-redux-form with the three fields: author, rating and comment.
- The rating field in the comment form is implemented using a select, the author is implemented using a text field, while the comment uses a textarea with six rows.

Task 3

In this task, you will enable form validation as shown in the images below. You need to complete the following:

- The author field should at least be three characters long.
- The author field should be less than or equal to 15 characters.
- The user should be alerted by showing the invalid message displayed at the bottom of the field.


## Assignment 4:

Assignment Requirements

Task 1

In this task, you will update the Redux actions and the Home and About components to use the data from the server for rendering the leader information:

- Add new action types in ActionTypes.js to support the fetching of the leaders information from the server
- Add new action creators in ActionCreators.js to enable the fetching of the leaders information from the server and update the Redux store
- Update the code in leaders.js to respond to the dispatched Redux actions and update the Redux store and appropriately handle the loading and errors.
- Update the code in MainComponent.js to fetch and use the leaders information.
- Update HomeComponent.js to render the leader information.
- Update AboutComponent.js to render the leaders information. You should handle the loading and error condition appropriately.

Task 2

In this task, you will enable the saving of the feedback data submitted using the feedback form in the Contact component. You will save the feedback form data submitted by the user to the server:

- Implement a new action creator named postFeedback() that takes a Feedback object as a parameter and submits the feedback to the server using Fetch. Recall that the feedback data is accessible at http://localhost:3001/feedback on the json-server.
- Update MainComponent.js to make the new dispatch method postFeedback() available to ContactComponent.
- Update the ContactComponent.js to submit the form data using the postFeedback() method by passing the feedback form data.

Task 3

In this task you will use simple animation using react-animation-components to enable a staggered rendering of the list of leaders in AboutComponent:

- Use the expand animation that we have already used earlier to judiciously apply animation to the various stages of the form submission.
