## K00203819 Cole Campbell Roll Call Application
## March 30th, 2017

Live URL: http://dev.colecampbell.design/FWD/
Github Repo URL: https://github.com/LIT-CM-WDF/ColeCampbell_ProjectRepo

This Angular application was created using Angular CLI. Steps to launch:

1) Open Terminal/Command Prompt and navigate to folder.
2) Once in folder, run NPM install. This will install all necessary node modules.
3) Once modules have been installed, run ng serve to run the Angular CLI server.
4) In a browser, navigate to localhose 4200 (default port)
----------------

## Notes

This Angular project shows my use of the Angular CLI for creating the inital app, as well as creating the various components which make up the application.

The project was updated to Angular 4.0.0 to decrease the load from the Angular/core module as the Animations module had been moved from the core folder to it's own folder. The engine for Angular had also been improved, which drove for this project to be updates as it allows for faster build times during production.

With Angular 4 *ngIf supports the use of else statements. Throughout the application these can be found to display other content if certain conditions are not met.

For the initial login, a user is only allowed to login with Google and no other service. Once logged in, a user is allowed to logout. This logout will remove the auth object from the browser and deauthorize a user from continuing past the login page.

A user is allowed to add a student and a class list. This was initially used for development purposes as it allowed for easier additions of students and class lists. The decision was made to leave these features as work had been put into adding them, but also as they are valuable features and demonstrate my knowledge of data driven forms. Data driven forms have the structure of the form within the .ts form and the validators in the backend as well. Validators are part of the @angular/forms module which allow for easy use or creation of validators. Most inputs have a require validators, but some have length validators, and when adding a student, their student Number must start with the letter K.

A user can create a group and select multiple groups, but validators require for a group to be selected, and a name. Once a user has a group, they are allowed to edit the group, archive the group or delete the group. The "Show Archive" button can be toggled, which will change the display of the screen and the value of the button. The new screen will show the various groups a user has archived. A user can Unarchive a group, or preform the other two actions of a regular group.

If a user edits a group, then a template driven form is displayed. Template driven forms allow for easy two way data binding, showing the user new up to date information as they enter it.

Click on a group's name and you will be shown the group's content, including the class lists in the group and the students in the selected class lists. A user can show the attendance of this group by toggling the "Show Attendance" button. This will show each rollcall that has been performed and the students along with their status of either being present or absent.

A user can also perform a rollcall. When they are performing a rollcall they are presented with the students names and checkboxes which either give back a true or false value. Checked/true means that the student is present, while Unchecked/false means that the student is absent. All checkboxes are checked originally as I felt it would be easier for someone taking attentance to uncheck the absent instead of checking all present.

Throughout the application I have added media query classes provided by Bootstrap, to ensure that users may only do certain tasks while their browser is the size of a phone's browser.