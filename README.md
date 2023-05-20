<div align="center">
<h1>👩‍💻 devFind - Discover and Connect with Skilled Developers!</h1>
</div>

## About 🚀

- **`devFind`** is an open source project that aims to create a platform for developers to showcase their skills and connect with potential collaborators, all in a user-friendly and searchable format.
- With **`devFind`**, developers can create their profiles in JSON format, which are then displayed on the web for others to discover.

## Features 💪

- One of the key features of **`devFind`** is its powerful search functionality.
- Users can search for developers based on specific skills, locations or name, making it easy to find developers with expertise in a particular technology or programming language.
- This makes **`devFind`** a valuable resource for project managers, recruiters, and anyone looking to connect with skilled developers for collaboration or employment opportunities.

## How to add your profile 🤔

> Thank you for your interest in contributing to our open-source project! <br>

## Prerequisites
- A GitHub account
- Git installed on your local development environment
- Node Package Manager (npm) installed on your local development environment

## How to Install Git
Git is a version control system that is used to manage the source code of your project.

To install Git, follow these steps:
1. Download and install Git from the [Official Website](https://git-scm.com/downloads)
2. Open the terminal or command prompt on your local development environment
3. Verify the installation of Git by running the following command:
**`git --version`**

## How to Install npm
npm (Node Package Manager) is a package manager for JavaScript programming language and is used to manage the packages that are required by your project.

To install npm, follow these steps:
1. Download and install Node.js from the [Official Website](https://nodejs.org/en/download/)
2. Open the terminal or command prompt on your local development environment
3. Verify that npm has been installed by running the command: **`npm -v`**

## How to install pnpm
With npm installed pnpm can be set up in different ways:

1. Using npm:

- - npm i pnpm
2. Using one of the official install scripts:

- - Windows (using powershell): **`iwr https://get.pnpm.io/install.ps1 -useb | iex`**
- - Linux: **`curl -fsSL https://get.pnpm.io/install.sh | sh -`**

## Steps to Add Your Profile Data

1. Fork the repository: To create a copy of the repository in your GitHub account, click on the "Fork" button in the top right corner of the project repository page.
2. Clone the forked repository: To clone the repository to your local development environment, open the terminal or command prompt and run the following command:
**`git clone https://github.com/<your-github-username>/<repository-name>.git`**

3. Install dependencies: To install the necessary dependencies for the project, navigate to the project directory and run the following command:
**`pnpm install`**
4. Navigate to the **`src/data`** directory.
5. Open the **`Profile.json`** file.
6. Add your profile data: Copy the following JSON object, edit your details, and paste it in the middle of the **`Profile.json`** file. Make sure to follow the existing structure:

  ```json
   {
     "name": "Your Name",
     "location": "Your Location",
     "bio": "Your Bio should be 20-30 words not more then that",
     "avatar": "https://github.com/<your-github-username>.png",
     "portfolio": "Your Portfolio URL or Github URL",
     "skills": ["Your Skill 1", "Your Skill 2", "..."],
     "social": {
       "GitHub": "https://github.com/<github-username>",
       "Twitter": "https://twitter.com/<twitter-username>",
       "LinkedIn": "https://www.linkedin.com/in/<linkedin-username>"
     }
   },
   ```

   **`Note:`** Copy the above code, edit your details, and paste it in the middle (not at the top or bottom). It doesn't matter where you add your profile, it will appear randomly on the website.

7. Save the changes to the **`Profile.json`** file.
8. Create a new branch: To create a new branch for your profile, run the following command:
**`git checkout -b add-profile`**
9. Commit your changes: To save your changes to the branch, run the following command:
**`git commit -m "add: <your-name>"`**
10. Push to the branch: To push the changes to the remote repository, run the following command:
**`git push origin add-profile`**
11. Create a pull request: To submit your changes to the main repository, create a pull request by clicking on the "Compare & pull request" button on your forked repository page.
12. Wait for review and merge: Wait for the project maintainers to review and merge your changes.


Once your changes are merged, your profile data will be added to the project's **`Profile.json`** file and your profile will be displayed on the project's website.

## Contributing 👨‍💻

Contributions make the open source community such an amazing place to learn, inspire, and create. <br>
**Any contributions you make are truly appreciated!**

## Contributors 🤝

<a href="https://github.com/shyamtawli/devFind/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=shyamtawli/devFind" />
</a>

## Support 🙏

Thank you for contributing to our open-source project! We appreciate your support 🚀 <br>
Don't forget to leave a star
