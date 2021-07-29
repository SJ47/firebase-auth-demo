# Firebase Auth Demo
This demo uses the firebase username and password authentication method.  

Authentication methods used include: Sign up, sign in, update profile, change email, change password, delete account, reset password and verification emails.

The UI uses Material UI so I could get some practice with it as well as to easily setup the UI interfaces and concentrate more on the Firebase auth code.

## Installation and Setup
1. Clone repo
2. npm install
3. Create an environment variable file in the root of the project called "**.env.local**" and paste in the following keys:
  ```
REACT_APP_FIREBASE_API_KEY=replace_this_text_with_your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=replace_this_text_with_your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=replace_this_text_with_your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=replace_this_text_with_your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=replace_this_text_with_your_firebase_messaging_Sender_id
REACT_APP_FIREBASE_APP_ID=replace_this_text_with_your_firebase_app_id
```
*You will replace the "replace_your_text_XXXXXXXXXXXX" above with your own details after your have setup your firebase project.*

## Firebase Setup (*instructions below are valid as at the time of writing this readme file*)
1. Go to https://firebase.google.com/ and setup an account if you do not already have one.  Then log in.
2. Go to the firebase console 
3. Add project
4. Enter a project name (whatever your want to call it) and continue
5. Uncheck/Disable Google Analytics
6. Click Create project
7. Add Firebase to your app by clicking on the web </> icon
8. Give your app a nickname (any name will do)
9. Ignore Firebase Hosting (unless you want to set it up)
10. Click Register app
11. Copy your Firebase config keys and values to the .env.local file you setup earlier, replacing the "replace_your_text_XXXXXXXXXXXX" with your actual values.
12. Make sure your files are all saved.  It's time to run the demo!

## Run the Demo
14. Open a terminal window and go to your app root folder
15. npm run dev
16. Go to your browser http://localhost:3000 and you should see your application running
17. As you have not set any accounts yet, start by clicking on the Sign up and create your first test account.  *Please use a valid email address you have access to as a verification email will be sent to that address so you can validate the email before signing in.*
