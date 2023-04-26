# How to contribute?

- Fork the repository
- Clone the forked repository to your local machine
- Install dependencies by running `npm ci`
- Navigate to the `src/data` directory
- Open the `Profile.json` file
- Add your profile data in the JSON object format, following the existing structure:

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

  > Note: Copy the above code, edit your details, and paste it in the middle (not at the top or bottom). It doesn't matter where you add your profile; it will appear randomly on the website.

- Save the changes to the `Profile.json` file.
- Create a new branch for your profile `git checkout -b add-profile`
- Commit your changes `git commit -m "Add profile"`
- Push to the branch `git push origin add-profile`
- Create a pull request to submit your changes to the main repository.
- Wait for the project maintainers to review and merge your changes.
