# Link:
[Liferay-Reactjs-Portlet-Axios-Yoeman](https://www.linkedin.com/pulse/how-build-react-component-liferay-dxp-paul-towers)
[Liferay Theme Color Schemes](http://www.liferayui.com/color-schemes-in-liferay-theme)
[Liferay Theme Color SchemesLiferay theme color](https://asbnotebook.com/2017/05/01/liferay-theme-color-schemes)
# Steps to create reactjs based portlet in liferay
This project leverages the Yeoman generators for Liferay DXP and Portal CE projects, to start with we need to install Yeoman globally with the following command.
1. npm install -g yo
2. npm install -g generator-liferay-js
3. yo liferay-js
4. The generator will then prompt you to answer some questions. For the first question select React Widget.
![yo lifefray-js](https://user-images.githubusercontent.com/56108097/105335828-8704ed80-5bfe-11eb-8922-97a9bd5ec09f.png)

**Following this you will be asked the following questions:**
* What name shall I give to the folder hosting your project? - For this tutorial I typed: react-gallery
* What is the human readable description of your projects - I typed: React Gallery
* Do you want to add localization support? - I selected no
* Do you want to add configuration support? - I selected no
* Under which category should your widget be listed? - I again typed: react-gallery
* Do you have a local installation of Liferay for development? - I selected yes
* Where is your local installation of Liferay placed? - For this you need to copy the folder path for your Liferay installation. On my computer it was located at: C:\Users\Liferay\Desktop\liferay2020\liferay-dxp-tomcat-7.3.10-ga1-20200930160533946\liferay-dxp-7.3.10-ga1
* Do you want to generate sample code - I selected yes
![yo lifefray-js2](https://user-images.githubusercontent.com/56108097/105339982-4f4c7480-5c03-11eb-851f-acb734330827.png)
The generator will then run.

You can now use your code editor of choice and open the newly created projects folder. My preferences is VS Code. From this point forward I'll also opt to use the build in terminal within VS code for executing commands.

5. npm run deploy

If you now go to your Liferay instance, login and navigate to a page where you wish to deploy the React component you will be able to access the React Component from the widgets tab in the page edit.

Below you can see our component called "React Gallery" and how it currently renders on the page (It is currently rendering the sample code created by the Liferay Generator).
![react-portlet](https://user-images.githubusercontent.com/56108097/105340225-a0f4ff00-5c03-11eb-856e-75af7978fe6e.png)
