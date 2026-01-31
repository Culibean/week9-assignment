# Reflection

Please also provide an assignment reflection in your project README.md file.

## Requirements

🎯 Set up user sign-up and user login using Clerk. ✅
🎯 Create and display an error/not found page if the user visits a page that doesn’t exist.✅
🎯 Use 1 or more Radix UI Primitive component, or something similar (e.g. use of a different component library to enhance UX, not just Tailwind). ✅
🎯 Enable users to create a user profile, and input profile information (such as a user biography) using a form. Users and user information should be stored in their own table in the database and handled with an appropriate route. ✅
🎯 Enable users to create posts associated with their Clerk userId. Posts should be displayed on the user’s profile page.

## Required

🎯 What requirements did you achieve?

I believe I achieved all requirements. The Signup and Signin journey works. I have a not found page if a user page doesn't exist. Users can add additional information on sign-up which is stored in their profile page. Users can also add posts when logged in and these posts shpw up on their profile.

🎯 Were there any requirements or goals that you were unable to achieve?

I did not managed to look at the strech goals at all. This was one of the more complicated assignments and I'm happy with where it is at at this time.

## Optional

🏹 Feel free to add any other reflections you would like to share about your submission, for example:

My main trouble this week was taking the time to go through all the necessary documentation, especially with clerk. I first started using webhooks to try and get the clerk-id automatically added to my supabase table. That took most of my Thursday. After encountering several errors, I stripped it back and followed the instructions by Manny on Friday.

I'm glad of all the resources out there when it comes to clerk, especially around auth() and currentUser(). This made creating my page a lot easier but I fully underestimated the amount of time it would take to translate it to the individual pages.

I also started with planning, but quickly got lost. I think next time I will take more time probably laying everyintg out first to avoid confusion. Several times I had to delete whole code blocks before starting again, as well as deleting routes and pages.

I also struggled slightly with the database queries and I had to ask AI for some help correcting some of my errors. I probbaly could have divided it up slightly to avoid this, but the amount of tables and the individual foreign key and relations really confused me. Especially when it came to displaying all posts with their clerk_id, likes and comments. This is definitely an area I want to get my head around more as when it works, it's really cool. I also didn't seed any data through supabase, but actually logged in as indiviual users to test the user journey.

This time I really enjoyed the styling and took some time to play around with fonts and colours. I installed chakra but I couldn't get it to work at all despite watching a lot of videos. So I removed it and decided to have a simple spinner for now. I did not manage to adapt it to smaller screen sizes. But this is something I will look at in future. For now it's a desktop page only.

I still sometimes have errors with clients and server components, but thankfully it's a 50/50 chance and the error messages help me debug. I still prefer react with express over next.js as my head finds it easier to divide both components.

## Resources:

Loading Delay: https://www.reddit.com/r/learnjavascript/comments/1f4zunn/await_new_promiseresolve_settimeoutresolve_1000/
Redirect Clerk: https://clerk.com/blog/nextjs-authentication
