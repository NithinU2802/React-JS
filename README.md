# React Js Learnings

    React Js is a most popular Open Source JavaScript library for building user 
interface. Which can provide reliable and intractive webpages that can make reliable
intraction with user.

    React Js is Created and Maintained by Meta(Facebook).

    Most of the JavaScript obeys on the field of MVC Architecture. Which makes developer
to make model by controller and provide a clearcut view to the users. 
    React Js is repsonsible for "View" (UI) in MVC Architecture. Make an intractive and can
provide design to the website.

#   We use React Js for following features
        - Virtual DOM
        - Reusable Component
        - Single Page Application
    
    DOM - Document Object Model (A tree structure and consist of elements which is html tags).
        - React creates a VIRTUAL DOM in memory which means to create a copy of Real DOM. Whenever
    the state of an object changes, It create a NEW VIRTUAL DOM and its compared with the Previous 
    Virtual DOM for finding the difference.
        - Once this process is done then the changed object only updated in the Real DOM instead 
    of updating all the objects.

    Component - Component Based Architecture break out our application into multiple small parts
    and it can be composed together at the final stage.
              - Components are reuaable code. So, we can reuse the component anywhere in our 
    application. 
            Eg: Header Component, Content Component, Footer Component, Navigation Component.
              - Easy to split the job as component and can combine together at the end of the 
    project and deliver to the team. As these components are reuable in every stage of scenario.

    Multi Page Application (Traditional Method) - Display the data or submitting data back to the server,
    renders new pages from the server.

    Single Page Application - we can use one html page by changing or modifing the elements on the page
    without loading the entire page form the server.
                            - Only the Necessary file is transfer in the form of JSON file and its 
    rendered inside html elements. So, there is no required to reload the page.

#   Add React to Website

    Without installing node or npm modules we can add React to our website using below script

        <script src="https://unpkg.com/react@18/umd/react.development.js" crossorgin></script>
        <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorgin></script>

    