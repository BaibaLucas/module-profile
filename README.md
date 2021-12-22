# MODULE PROFILE

[Module] Website Profile

## DESCRIPTION

![user-profile](https://github.com/BaibaLucas/module-profile/blob/main/presentation.png "presentation user-profile")
User profile collection of settings and information associated with a user, we can create an user, add and modify profile picture, username, email and password.
Created with React Express and AmazonS3.

### Built With

* [Create React App](https://create-react-app.dev/)
* [Sass](https://sass-lang.com/)
* [Express](https://expressjs.com)
* [Node](https://nodejs.org/en/)
* [AmazonS3](https://aws.amazon.com/fr/s3/?nc2=h_ql_prod_fs_s3)
* [PostgreSQL](https://www.postgresql.org)

## Getting Started

### Installation 

1. Clone the repo
  `git clone https://github.com/BaibaLucas/module-profile.git`
2. Init DB
  -> Go in Back/migration/deploy/init.sql
  -> Follow instruction and create DB
3. Install NPM PACKAGES for Back folders
  `npm install`
4. Enter your variable environement for s3amazon storage and back port in .env (Follow .env.example file)
5. Runs the back app
  `npm start`
6. Install YARN PACKAGES for Front Folder
  `yarn install`
7. Runs the front app
  `yarn start`
8. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
