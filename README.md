# Early Stage Companies Contributions
This is the frontend of the application that the user can view and interact with it. Please, also install the [Rails frontend](https://github.com/luciana-lab/early-stage-companies-backend) and follow the installation instruction.

This application was developed to help summarize the information and needs of companies/startups in their early stage beyond capital needs. It is inspired on [1 Million Cups](https://www.1millioncups.com/).\
1 Million Cups organized a meeting every Wednesday over 163 cities in the U.S. and 2 projects are pitched in every meeting. The community gives support, feedback, and people can help them with the project needs.\
Usage:
1. To create a project, the user needs to create an account or log in;
2. After fill up the form, the project will show up on "all projects" page and will have it own page;
3. All the project information will be displayed on the individual project page where anyone (who is logged in) can add a contribution with the need asked for.
4. The person who wrote the contribution and the project owner are the only ones who can see the contribution content and delete it. The project owner can also edit or delete the project.

**User Perspective**

*Who is the User?*\
Entrepreneurs who need help, beyond funding, to grow their businesses.

*What is their pain point?*\
There's no applications who help early stage companies besides capital.\
The 1 Million Cups members who pitched, there's no easy way to other people contribute with their projects/companies if they don't watch it live.

*How do they use our solution to overcome this problem?*\
This application helps entrepreneurs to get more collaborations to their projects.

**Company Perspective**

*Who is the company?*\
1 Million Cups is a free program designed to empower entrepreneurs with tools and resources to break down barriers that stands in the way of starting and growing their business.

*What is the pain point?*\
There's no way to track how the project is doing after the pitch.

*How do they use our solution to overcome this problem?*\
An easy way to store the presentations, break down the project idea, a clear a message on how anyone can contribute to the project, and monitor the contributions facilitated by 1 Million Cups.

**Flow Diagram**\
*Models*\
Users, Companies, and Contributions.

*Relationship*\
This application is a has_many/belongs_to relationship.\
A user had many companies and has many contributions.\
A company has many contributions and belongs to a user.\
A contribution belongs to a company and belongs to a user.

*Attributes*\
A user has first name, last name, email, password, about, and image.\
A company has name, industry, description, image, website, video, need category, and need.\
A contribution has content.

[Flow diagram](https://drive.google.com/file/d/1evKyGhqsBa7Cxc_P0qdZnGUnjlXYOjLq/view?usp=sharing)
## Instalation
Fork and clone this repo.

Install the backend.

In the backend terminal, start the server:
```
    $ rails s
```

Open the HTML page:
```
    $ npm start
```
and say "yes" to use the localhost:3001 web server.
## Usage

To see the User API data been update go to the localhost:3000 web server.

[Companies API](http://localhost:3000/companies)
# Contributing

This project is intended to be a safe and welcoming space for collaboration.
Bug reports and pull requests are welcome on GitHub at [Luciana GitHub Profile](https://github.com/luciana-lab).

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in this project's codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/luciana-lab/early-stage-companies-backend/blob/main/CODE_OF_CONDUCT.md).

## Extras
[Live Project Page]()\
[Project Walkthrough Video]()\
[Blog Post - Part I](https://luciana-lab.medium.com/rails-react-redux-thunk-user-auth-with-cookies-and-sessions-part-i-98c5ea19a8c7)\
[Blog Post - Part II](https://luciana-lab.medium.com/rails-react-redux-thunk-user-auth-with-cookies-and-sessions-part-ii-e3f9bf036489)\
[30 minutes video coding](https://youtu.be/aBAqAHF81WY)