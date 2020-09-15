---
path: "/building-react-apps-for-liferay"
date: "2020-05-15"
title: "Build React Apps for Liferay DXP" 
subtitle: "Tips for creating React apps for Liferay DXP"
tags: ['react', 'Liferay', 'DXP']
excerpt: "Build apps for Liferay DXP" 
---

Modern Javascript frameworks like React can help you quickly and easily create any type of application, from a simple Todo app to a more complex customer portal solution with personalized content and role-based access.

Now, in some cases, you may need to surface data from other systems within your application, for example: If your customer portal has a dashboard and you need to show tasks for a given users that live in an HR system.  Of course, you could create logic within React to make API calls, but then you would have to maintain this over time.

As an alternative, you could leverage a platform like Liferay DXP, which is an enterprise PaaS solution, as an integration hub.  In this scenario, all of the integration logic would be managed at the platform level that is already integrated with SSO for security, appliying the proper roles and permissions per user.  This includes personalized interactions, like targeted content, access to sites, etc.

So in this article, we will take a look at working with Liferay DXP (Digital Experience Platform) and incorporate a simple React application to display HR Tasks.


which provides REST and GraphQL APIs. 

In this project, we will take a look at how to create a React project
<ol>
<li> Liferay Yeoman generator </li>
<li> Building a Liferay React JS Widget </li>
<li> Deploying a React app to Liferay </li>
<li> Using Liferay UI events </li>
</ol>

<h3>Installation</h3>
Let's install the Yeoman generators for Liferay.  If you are not familiar with Yeoman check it out [Yeoman](https://yeoman.io/), it's a scaffolding tool for modern web apps.  Next, navigate to the Liferay Help Pages and install the [JS Generator](https://help.liferay.com/hc/en-us/articles/360029147411-Installing-the-JS-Generator-and-Generating-a-Bundle)

<h3>First project</h3>
To begin, create a project with the generator with any name you like.  This name will be how the application is recognized in the Liferay user-interface as well, so choose wisely.

