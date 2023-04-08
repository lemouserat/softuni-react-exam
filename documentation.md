# softuni-react-exam - Travel Blog Project by Anastas

Frontend is deployed at https://travel-blog-react-exam.web.app/ but server is not due to Victor's advise. 

A Travel blog single page application app built on ReactJS with educational purposes.
Users can upload blogs with stories from their travels around the world.
They can post comments and recommend places visited by other users.

We hope you have a great time sharing your exciting stories and reading some others from our registered users.

## Guests' functionality

Not logged in users can see the following views:

* Home
* Login
* Register
* Blogs
    * Only the static information about a blog. 
* Gallery

Logged in users can benefit from the full functionality of the website.


## Register

Registration is simple and requires only an email and password.
Fields will be validated upon blur and will display a message with the particular problem.
All fields are required and the Registration button does not work unless all fields are filled in accordingly. 

## Login

Login fields will be validated upon blur and will display a message with the particular problem.
All fields are required and the Login button does not work unless all fields are filled in accordingly.
You will receive an error message if such user does not exist in the database. 

## Add Blog

Everything starts with adding a blog post. You can add your blog post through the following input fields:
* Title - required. Must be between 3 and 20 characters and is validated upon blur.
* Country - required. 
* City - not required as sometimes the story from the blog post might have happened not in a particular city.
* Photo url - required. Paste a valid URL with an image from the place that you visited.
* Story - Even if you're not a writer you can write at least 10 characters. 

## Blogs

A list of all currently posted blogs.
Each element is displayed with a small rounded version if the image, the title, the country and city, and the author of the post. 
Click the Continue Reading button to enter the Blog post details.


## Blog Post Details

Here you will find a particular blog post in its entirety - the title, image, country and city, the author of the post, and the story.
As we said guest can see only the static information of each blog post. The recommendations count is also visible to guests.

### Comments

Logged in users will also be able to add comments and delete their own comment if they decide alter on.

### Recommendations

Logged in users can add a recomendation to a particular place. If they have a bad experience later on, they can remove their recommendation.
The authors of the blog post cannot recommend their own blog post - this would be like voting for yourself in the elections.

### Edit

Owners can edit their own blogpost. 
The input fields will be already populated and validated if you somehow delete a certain field and click the Edit Blog Post button.
Nothing can be lost by mistake. 

### Delete

Owners can delete their own blogpost. 
If you click the button by mistake, don't worry. You will be asked for confirmation before the blog post is deleted from the database.

## Gallery

A gallery containing all images from all posted blog posts.
Hover over an image if you want to see a bigger version of it.
Clicking a particular image will navigate you to the blog post it corresponds to.

## My profile

This is your personal space as a user.
Here you will see a list of all blog posts that you posted. Again, click the Continue Reading to visit them once again.
You will also see a list of all comments that you posted. You will see the comment and the title of the blog to which it belongs.

## Logout

Once you are done with a session you can always log out. 


## Brief Architecture

### Style
The style of the project is based on a public bootstrap template but a lot of views and pages were changes or created from scratch.
Some create-bootstrap are used to compliement the design.

### Backend 
* The backend is the softuni-practice-server.
* All "pages" are separated into different react components.
* All specific css is placed in the corresponding component folder in a concrete css file.
* Authentication is handled by the AuthContext and then the AuthService (with some help by the requester.)
* Some functionality is based on the Context API - AuthContext and BlogContext, while other is based on Redux Reducer e.g. blogReducer, which holds the functionality to add and delete comments and recommendations. 
* There are different service files that handle the REST API calls to the backend but with the help of the requester.js service which creates a form of abstraction.
* Several custom hooks are used - useForm (provides the onSubmit and changeValues listeners as well as the form validation), useLocalStorage (syncs the state to local storage so that it persists through a page refresh) and useService (with it the blog and auth service factories compliment the context). 
* There is also a BlogOwner, which hides the edit functionality from anyone besides the blog owner. 
* CountriesData holds all countries for the concrete dropdown with all countries in the world.
* RouteGuard is used to stop all not authenticated users to reach pages that they are not allowed to see or use.




