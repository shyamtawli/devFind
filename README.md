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

**To add your profile data to the project, here are the following steps:**

1. Fork the repository to create a copy in your GitHub account.
2. Clone the forked repository to your local development environment.
3. Install dependencies by running **`npm install`**
4. Navigate to the **`src/data`** directory.
5. Open the **`Profile.json`** file.
6. Add your profile data in the JSON object format, following the existing structure:

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
8. Create a new branch for your profile **`git checkout -b add-profile`**
9. Commit your changes **`git commit -m "add: <your-name>"`**
10. Push to the branch **`git push origin add-profile`**
11. Create a pull request to submit your changes to the main repository.
12. Wait for the project maintainers to review and merge your changes.

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
Don't forget to leave a star ⭐️
