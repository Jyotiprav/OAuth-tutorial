## Implementation of OAuth 2.0 using NodeJS

OAuth2 is an authentication protocol that is used to authenticate and authorize users in an application by using another service provider.

There are three parties in any OAuth flow:

The client - The person, or user who is logging in.

The consumer - The application that the client wants to log in to.(Our aplication)

The service provider - The external application through which the user authenticates. (which is gmail for this application)

In this project, we will authenticate using OAuth2 API, and build a sample node application, running on the local port 3000, with a web interface.

### Step 1: Download the initial files from the following link:
https://github.com/Jyotiprav/OAuth-tutorial/tree/master/(OAuth%20project)Starting%20Files

### Step 2: Images fo some pages from starting files
After downloading the files, initialize node modules using `npm init`.
#### Home page

![Image](https://github.com/Jyotiprav/OAuth-tutorial/blob/master/images/Home%20page.png)

#### Login page

![Image](https://github.com/Jyotiprav/OAuth-tutorial/blob/master/images/Login%20page.png)

#### Register page

![Image](https://github.com/Jyotiprav/OAuth-tutorial/blob/master/images/register%20page.png)

### Step 3:
For this application, I am using Passport strategy for authenticating with Google using the OAuth 2.0 API.
[Check here](http://www.passportjs.org/packages/passport-google-oauth20/)

### Step 4:Install
`npm install passport-google-oauth20`

### Step 5:
Before using passport-google-oauth20, you must register an application with Google. If you have not already done so, a new project can be created in the [Google Developers Console](https://console.developers.google.com/). Your application will be issued a client ID and client secret, which need to be provided to the strategy. (Reference: http://www.passportjs.org/packages/passport-google-oauth20/)



Watch the following video to learn how to create API project using google account.


https://youtu.be/eujH243BRdc


Save the ClientID and Client secret in .env file. 

CLIENT_ID=348128912****************************** .apps.googleusercontent.com

CLIENT_SECRET=CEWX******** mrpKqcU8Z3R1H

### Step 6:
Install following packages:
```
npm i passport-google-oauth20
npm i mongoose-findorcreate
npm i dotenv

```


References:

https://www.sohamkamani.com/blog/javascript/2018-06-24-oauth-with-node-js/




