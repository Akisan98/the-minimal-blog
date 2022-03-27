# The Minimal Blog

[![Netlify Status](https://api.netlify.com/api/v1/badges/0bada082-bb43-44e5-b5b6-d0a239b005c4/deploy-status)](https://app.netlify.com/sites/blog-by-akki/deploys)

The Minimal Blog is a website for your new blog created with Angular, Netlify Serverless Functions and Contentful CMS

## How to use

### Images
Try to keep Images to a 16:9 Aspect Ratio for best experience. Ex. 1200 X 675 (Width X Height)

### Contentful Setup

...

## Technical

### How to run

To run this project locally you will need:
- NPM / node.js
- Angular CLI
- Netlify CLI

Use command: ntl dev

### Serverless Function

Using API Keys and other secrets directly in a client side application is a big no-no in the work life / professional environment. That is because a user can still access to the secrets by monitoring the network calls, which defeats the purpose of leaving out secrets of the Git repo. A usual way of solving this problem is the off-load these HTTP calls to our own server or a proxy server, since I really don't need a server for Contentful, I'll be using Serverless Functions at Netlify which is the hosting provider of chose. 

### Thanks to

| Person       | Package |      |
| ------------ | ------- | ---- |
| Carlos Dubón | ng-zoom |      |
|              |         |      |
|              |         |      |

 npm install --legacy-peer-deps