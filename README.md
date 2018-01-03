------------------------------
Integrating Ionic and Loopback
------------------------------

If you have not created the REST API already, which will be required for this app, go to: https://github.com/abdeokar23/ionic-loopback-integration

This app was created with reference from: https://www.joshmorony.com/building-a-review-app-with-ionic-2-mongodb-node/

The only difference being, the REST API was created using Loopback Framework for simplicity.

Changes to the app design can be made with reference from the Ionic documentation. Ionic allows app design for Android, iOS and Windows Phone.

As a prerequisite MongoDB server and the Loopback API needs to be running in the background. To do so type the commands below in the terminal from the loopback api folder that you will have created:

	mongod

And in a seperate terminal instance:

	node .

It is not mandatory to run the mongod command from the loopback project folder, and can be run from anywhere.

For running the ionic app, type the commands below in the terminal from the ionic-root folder:

	ionic serve

	or

	ionic lab

The app does not yet run flawlessly. On running the app, click on View Devices button first. Then continue with Add Device. Initially the app will not work without clicking on View Devices first, the issue is being worked on.
