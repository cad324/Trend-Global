# Project 4 - Design & Plan

Your Team Name: Silver Mammoth

## Milestone 1: Design your Client's Site

### Client Selection (Milestone 1)

#### Client Description (Samantha)

[Tell us about your client. Who is your client? What kind of website do they want? What are their key goals?]

[NOTE: If you are redesigning an existing website, give us the current URL and some screenshots of the current site. Tell us how you plan to update the site in a significant way that meets the Project 4 requirements.]

Our client is Themis Hsieh, an assistant manager at Trend International, which is a jewelry wholesale company with an office in Long Island City. They want a website that can serve as a basic catalogue for their products by displaying images of current pieces. Their key goals include displaying all relevant information to their customers as well as look "beautiful and elegant". They currently do not have a website for their USA office.


### Client Needs & Wants/Requirements (Milestone 1)

#### Purpose & Content (Kelly)

[Tell us the purpose of the website and what it is all about.]

- The purpose of the website is to communicate information about the mission of Trend International and its products. The content of the site will include a full catalogue of their products, trending products, the mission of Trend International, and a contact page for inquiries.

#### Client Needs and Wants (Clive)

[Collect your client's needs and wants for the website. Come up with several appropriate design ideas on how those needs may be met. In the **Memo** field, justify your ideas and add any additional comments you have. There is no specific number of needs required for this, but you need enough to do the job.]

- Needs/Wants #1
  - **Needs and Wants** [What does your client and audience need and want?]
    - Client needs to have organized visual displays of the merchandise (jewelry).
  - **Design Ideas and Choices** [How will you meet those needs and wants?]
    - Dedicate a page for navigating through the merchandise offered by the client.
  - **Memo** [Justify your decisions; additional notes.]
    - This makes it easy for the target audience (retailers) to find what they want.


- Needs/Wants #2
  - **Needs and Wants** [What does your client and audience need and want?]
    - Trend International needs their clients to be able  to communicate easily with them.
  - **Design Ideas and Choices** [How will you meet those needs and wants?]
    - Create a 'Contact Us' page with a contact form and/or provide all the necessary contact information for our client.
  - **Memo** [Justify your decisions; additional notes.]
    - This makes it easy for the target audience (retailers) to have their lingering questions answered. It also helps our client engage with their potential customers.


- Needs/Wants #3
  - **Needs and Wants** [What does your client and audience need and want?]
    - From the client: "For the website, we are thinking to build classy, elegant web site that is geared more towards advertising the company than actually selling jewelry on internet."
    So, the website has to be visually appealing and interactive enough to attract new customers.
  - **Design Ideas and Choices** [How will you meet those needs and wants?]
    - We will use high quality photos for an elegant feel, and use JavaScript for smooth interactivity.
  - **Memo** [Justify your decisions; additional notes.]
    - These designs must be implemented for Trend International to be competitive since other jewelry wholesale companies use the same methods.

#### Client Meeting Notes (Samantha)

[By this point, you have met once with your client to discuss all their requirements. Include your notes from the meeting, an email they sent you, or whatever you used to keep track of what was discussed at the meeting. Include these artifacts here.]

![](email1.png)
![](meetingnotes.png)

### Target Audience (Milestone 1)

#### Target Audience(s) (Samantha)

  - The target audience of this website as described by our client would be big retail companies, such as JC Penny, Nordstrom, or Macy's that sell jewelry purchased from Jewelry wholesale companies. In addition, our client mentioned that their company sells to wholesalers, retailers, designers, and also chain store representatives.

#### Target Audience Needs (Kelly)

[What are the needs of your target audience(s)? Note that these are probably *not* the needs of your client.]

  - Employees making purchasing decisions for retailers/wholesalers want to find quality jewelry on a website, and therefore would like to see quality pictures and clear information on the materials the jewelry are made of, as well as their prices.
  - Designers would also be interested in knowing what materials the products are made of, as well as their specs (sizes, etc.) and prices.

### Initial Design (Milestone 1)

#### Content (Samantha)

[Place your content in the **content** folder. NOT in the documents folder.]

[Note any content (e.g., text, image) that you need to make/get from the client here.]

Applicable content for our website includes the pictures of the jewelry (necklaces, bracelets, rings, earrings) that will be put on display.

#### Content Organization, Information Architecture, and Navigation (David)

[Lay out the plan for how you'll organize the site and which content will go where. Plan out the navigation for the site. Document your process for organizing the content.]

[Note: As with the Needs and Wants table, there is no specific amount to write here. You simply need enough content to do the job.]

Example:
- **Navigation**
  - Home
  - Trending
  - Jewelry
    - Necklaces
    - Bracelets
    - Rings
    - Earrings
  - About
  - Contact

- **Content** (List all the content corresponding to main navigation and sub-categories.)
  - *Home*: Summaries of the categories listed in Jewelry and a small preview;
  - *Trending*: show the currently trending items from the entire collection;
  - *Jewelry*: Showcase jewelry in the collection;
    - *Necklaces*: Necklaces in collection
    - *Bracelets*: Bracelets in collection
    - *Rings*: Rings in collection
    - *Earrings*: Earrings in collection
  - *About*: Show the company mission and team.
  - *Contact*: Display form to collect inquiries from users. Also display email, phone and mailing address

- **Process**
  - ![](cardsort.png)
  - We utilized the card sort procedure to organize the content and navigation.

#### Sketches (sam)

[Include exploratory idea sketches of your website.]

![](exploratorysketch1.png)
![](exploratorysketch2.png)

[Include sketches of your finalized design.]

- ![](homesketch.png)
- ![](trendingsketch.png)
- ![](jewelrysketch.png)
- ![](aboutsketch.png)
- ![](contactsketch.png)
- ![](mobilesketch1.png)
- ![](mobilesketch2.png)

#### Interactivity (clive & david)

[What interactive features will your site have? Describe how the interactivity connects with the needs of the clients/target audience.]

  - For mobile view, there will be menu that toggles between showing and hiding the menu items.

    - Reason: Users of the website may be accessing it from mobile devices as well as desktops/laptops, so our navigation must be responsive.


  - There will also be custom form validation for the contact page form.

    - Reason: It would make it easier for our clients to check that the user is entering valid information.


  - Users will have the option to filter the images in the jewelry collection.

    - Reason: This will make searching for items and comparing them easier

  - We will also include hover effects for when the clients moves the cursor on an images

    - This will focus on the current image and look pleasant in general too.



#### Additional Comments (Milestone 1)

[If you feel like you haven't fully explained your design choices, or if you want to explain some other functions in your site (such as special design decisions that might not meet the Project 4 requirements), you can use this space to justify your design choices or ask other questions about the project and process.]


## Milestone 2: Draft of Coded Website

### Interactivity (Milestone 2) (Clive)

[Write your interactivity pseudocode here. Remember you must use two conditional statements.]

Contact Form
```
Upon submit:

  if name is a not valid text or is empty, display message "Please enter a valid name". Do not submit form.

  if email is not valid or is empty, display message "Please enter a valid email address". Do not submit form.

  if message field is empty, display message "Please write your message here". Do not submit form.

  Otherwise, submit form
```

Mobile Menu Toggle
```
upon menu icon click:

  if menu <ul> contains class "hidden", remove class "hidden"

  Otherwise, add class "hidden" to menu <ul>
```

### Tasks (Milestone 2) (Kelly)

[You will need to come up with at least 4 tasks. List your tasks here. You *do not* have to do user tests yet.]

Task 1: Does Trend USA offer products for kids?

Task 2: Where are Trend USA's products manufactured?

Task 3: Please send a question to Trend USA asking how to obtain product quotes.

Task 4: Point out a few popular pieces offered by Trend USA.

### Client Meeting (Milestone 2) (Samantha Chu)

[By this point, you have met once with your client a second time to discuss your initial design. Include your notes from the meeting, an email they sent you, or whatever you used to keep track of what was discussed at the meeting. Write a few sentences about the design feedback you received from your client.]

After showing our client the initial design of the website, they liked the feel for the site. However, they had a couple changes from the original layout that they sent us. They wanted us to split the jewelry webpage into different categories, as noted in the meeting notes.

![](meetingnotesM2.png)


### Additional Comments (Milestone 2)

[If you feel like you haven't fully explained your design choices, or if you want to explain some other functions in your site (such as special design decisions that might not meet the Project 4 requirements), you can use this space to justify your design choices or ask other questions about the project and process.]



## Milestone 3: Presentation & Demo Ready Draft

### Additional Comments (Milestone 3)

[If you feel like you haven't fully explained your design choices, or if you want to explain some other functions in your site (such as special design decisions that might not meet the Project 4 requirements), you can use this space to justify your design choices or ask other questions about the project and process.]


## Final Submission: Complete, Polished, and User Tested Website

### Changes Based on Presentation (Final Submission)

[What changes did you make to your plan or design based on your peers' feedback?]

### User Testing (Final Submission)

#### Participant 1

1. Who is your participant, e.g., what is their name, where do they comes from, what is their job, characteristics, etc.?


2. Does your participant belong to your target audience of the site? (Yes / No)

[If “No”, what’s your strategy of associating the user test results to your target audience’s needs and wants? How can your re-design choices based on the user tests make a better fit for the target audience?]

[Report the results for your user's performance on each of your tasks. You should **describe the task** you ask the user to complete, explain **what the user did**, describe the user's **reaction/feedback** to the design, **reflect on the user's performance**, determine what **re-design choices** you will make. You can also add any additional comments in the **memo** field.]

Format:
- Task #1
  - **Task Description** (What was the task for this user?)
    - [You should fill this out]
  - **How did the user do? Did that meet your expectation?**
    - [You should fill this out]
    - [Maybe with multiple points]
  - **User’s reaction / feedback to the design** (e.g., specific problems or issues found in the tasks)
    - [You should fill this out]
  - **Your reflections about the user’s performance to the task**
    - [You should fill this out]
  - **Re-design choices**
    - [You should fill this out]
  - **Memo** (Justify your decisions; additional notes.)
    - [You should fill this out]

[Include evidence of your user testing process.]

#### Participant 2

1. Who is your participant, e.g., what is their name, where do they comes from, what is their job, characteristics, etc.?


2. Does your participant belong to your target audience of the site? (Yes / No)

[If “No”, what’s your strategy of associating the user test results to your target audience’s needs and wants? How can your re-design choices based on the user tests make a better fit for the target audience?]

[Fill this out like you did for Participant 1 above]

#### Participant 3

1. Who is your participant, e.g., what is their name, where do they comes from, what is their job, characteristics, etc.?


2. Does your participant belong to your target audience of the site? (Yes / No)

[If “No”, what’s your strategy of associating the user test results to your target audience’s needs and wants? How can your re-design choices based on the user tests make a better fit for the target audience?]

[Fill this out like you did for Participant 1 above]

### Changes Based on User Testing (Final Submission)

[What changes did you make to your plan or design based on user testing?]

### Final Notes to the Clients (Final Submission)

[Describe in some detail what the client will do (or would have to do) in order to make this website go live. What is the deployment plan?]

[Include any other information that your client needs to know about your final website design. For example, what client wants or needs were unable to be realized in your final product? Why were you unable to meet those wants/needs?]

### Final Notes to the Graders (Final Submission)

[1. Give us three specific strengths of your site that sets it apart from the previous website of the client (if applicable) and/or from other websites. Think of this as your chance to argue for the things you did really well.]

[2. Tell us about things that don't work, what you wanted to implement, or what you would do if you keep working with the client in the future. Give justifications.]

[3. Tell us anything else you need us to know for when we're looking at the project.]
