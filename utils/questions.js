// Questions for prompts
var questions = [
    {
        type: "input",
        name: "githubName",
        message: "What is your GitHub account username?"
    },
    {
        type: "input",
        name: "projectTitle",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Type a description of your project:"
    },
    {
        type: "input",
        name: "installation",
        message: "Type the steps to install your project:"
    },
    {
        type: "input",
        name: "usage",
        message: "Type project instructions and usage:"
    },
    {
        type: "input",
        name: "license",
        message: "Type chosen license:"
    },
    {
        type: "input",
        name: "contribution",
        message: "Add guidelines for community contribution:"
    },
    {
        type: "input",
        name: "tests",
        message: "Type how to run your project tests:"
    }
];

module.exports = {
    questions
};