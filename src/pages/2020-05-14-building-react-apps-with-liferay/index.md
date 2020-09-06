---
path: "/building-react-apps-for-liferay"
date: "2020-05-15"
title: "Build React Apps for Liferay DXP" 
subtitle: "Tips for "
tags: ['react', 'Liferay']
excerpt: "A preview of my first post" 
---

For sometime now, I have been facinated with modern Javascript frameworks, especially React because they help me quickly and easily transform my ideas into small applications.

In addition, I recently started working with Liferay DXP (Digital Experience Platform) which provides REST and GraphQL APIs for Headless capabilities.  So naturally, I thought it would be interesting to create an application in React and have it connect to Liferay DXP and make it available within the Liferay user-interface.

In this project, we will take a look at:
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

