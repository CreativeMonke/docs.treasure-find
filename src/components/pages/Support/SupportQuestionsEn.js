const supportQuestionsEn = [
  {
    question: "How do I access the application?",
    content: [
      {
        isHeader: true,
        text: "Upon opening the application, you will be redirected to the home page where you can see a brief description of the event, authentication or registration options, the remaining time until the start of the event, the number of available locations, and the percentage of registered users.",
      },
    ],
  },
  {
    question: "How do I register and authenticate?",
    content: [
      {
        isHeader: true,
        text: "To participate in the treasure hunt, you need to have an account. Register using your email address, first name, last name, and city. You will receive a confirmation code by email to complete the registration. For authentication, use the email and password you have set.",
      },
    ],
  },
  {
    question: "What information is displayed on the main page?",
    content: [
      {
        isHeader: true,
        text: "Depending on the status of the event, the main page will display various information.",
      },
      {
        isHeader: false,
        text: "If the event has not started",
      },
      {
        isHeader: false,
        text: "If it has ended",
      },
      {
        isHeader: false,
        text: "If you have not started your hunt",
      },
      {
        isHeader: false,
        text: "If you have finished it",
      },
      {
        isHeader: false,
        text: "If location permission is not enabled",
      },
    ],
  },
  {
    question: "How does the interactive map work?",
    content: [
      {
        isHeader: true,
        text: "The map shows you the locations included in the treasure hunt, marked with colored circles. Each circle color has its meaning:"
      },
      {
        isHeader: false,
        text: "Grey circle: Indicates that you are not close enough to activate the question."
      },
      {
        isHeader: false,
        text: "Blue circle: Indicates the necessary proximity for activating the question."
      },
      {
        isHeader: false,
        text: "Green circle: Indicates that you have already answered the respective question."
      },
    ],
  },
  {
    question: "What buttons are available on the map?",
    content: [
      {
        isHeader: false,
        text: "Center on current location: This button recenters your map on your current location."
      },
      {
        isHeader: false,
        text: "End hunt: This button allows you to end your participation in the treasure hunt. Using this button is permanent."
      },
    ],
  },
  {
    question: "What can I find in the side menu?",
    content: [
      {
        isHeader: true,
        text: "The side menu gives you access to various features of the application:"
      },
      {
        isHeader: false,
        text: "Home page: Access general information and updates of the event."
      },
      {
        isHeader: false,
        text: "List of locations: View all important locations for the treasure hunt."
      },
      {
        isHeader: false,
        text: "Your answers: Review your previous questions and answers."
      },
      {
        isHeader: false,
        text: "Support page: Get help and technical support."
      },
      {
        isHeader: false,
        text: "Change interface language: Change the language in which the application is displayed."
      },
      {
        isHeader: false,
        text: "Details about your account: Manage your personal information and account settings."
      },
    ],
  },
  {
    question: "How are my answers to questions managed?",
    content: [
      {
        isHeader: true,
        text: "On the 'Your Answers' page, you can view and manage your answers:"
      },
      {
        isHeader: false,
        text: "A correct answer will be marked in green."
      },
      {
        isHeader: false,
        text: "A wrong answer will be marked in red."
      },
    ],
  },
  {
    question: "What should I do in case of an emergency?",
    content: [
      {
        isHeader: true,
        text: "In case of an emergency, follow these steps:"
      },
      {
        isHeader: false,
        text: "Address the nearest accompanying teacher."
      },
    ],
  },
  {
    question: "How can I leave feedback after the event?",
    content: [
      {
        isHeader: true,
        text: "After the event ends, feedback can be left using the following steps:"
      },
      {
        isHeader: false,
        text: "Use the Google Forms form available in the 'Home' section after the event ends"
      },
    ],
  },
  {
    question: "How can I answer the questions in the treasure hunt?",
    content: [
      {
        isHeader: false,
        text: "Question Activation: If you are close enough to the location (the circle on the map becomes blue), you can activate the question by clicking the button that appears in the question modal. Upon activation, the application will check if there is a previous answer for that location. If so, you will see the question and your previous answer, otherwise a 5-minute timer will start to answer.",
      },
      {
        isHeader: false,
        text: "Answering the Question: Once the question is activated, you can enter your answer in the available text field. Make sure the answer is complete and clearly formulated before continuing. If the 5-minute timer expires before you submit the answer, you will no longer be able to answer, and your answer will not be recorded.",
      },
      {
        isHeader: false,
        text: "Submitting the Answer: After you have completed the answer, you can press the submit button. If the answer is valid and the timer has not expired, your answer will be recorded. If there are problems with the answer (for example, it is empty or the timer has expired), you will be notified with an error message and you will have the opportunity to try again, within the available time.",
      },
      {
        isHeader: false,
        text: "Feedback after Submission: In case the answer has been successfully updated, you will receive a confirmation. If you encounter technical problems or have additional questions related to the answering process, you can always access the support page or contact the technical team by email."
      },

    ],
  },
  {
    question: "Contact details",
    content: [
      {
        isHeader: true,
        text: "For questions or support, you can contact the team through the following methods:"
      },
      {
        isHeader: false,
        text: "Support email: treasure.find.oni2024@gmail.com"
      },
      {
        isHeader: false,
        text: "Personal email: rares.cristian.darabana@gmail.com"
      },
      {
        isHeader: true,
        text: "More information: onigim2024.racovita.ro"
      },
    ],
  }
];
export default supportQuestionsEn;