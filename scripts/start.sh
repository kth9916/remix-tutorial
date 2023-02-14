$ npx create-remix hello-remix
? What type of app do you want to create? Just the basics
? Where do you want to deploy? Choose Remix if you're unsure; it's easy to
change deployment targets. Remix App Server
? Do you want me to run `npm install`? No
? TypeScript or JavaScript? JavaScript

$ cd hello-remix
$ yarn
$ yarn dev

# Json holder에서 예 가져오기
npx json-server ./data.json --port 4000 -d 500
