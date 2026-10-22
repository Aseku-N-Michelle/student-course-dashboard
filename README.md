# Student Course Dashboard

A responsive React dashboard (built with Vite) that shows course cards with completed and in-progress states.

## Setup instructions

1. Install Node.js and VS Code.
2. Download or clone this repository.
3. Open the project folder in VS Code.
4. Run `npm install` in the terminal.
5. Run `npm run dev` and open the local address shown in the terminal (usually http://localhost:5173).

## Features

- Reusable `CourseCard` component that receives course data through props
- Courses rendered with `map()` using `course.id` as the key
- Completed and in-progress states, with a progress bar for active courses
- Helpful message when there are no courses
- Summary line showing courses completed and credits earned (my extension feature)
- Responsive layout for phone and desktop

## Screenshots

Desktop view:

![Desktop view](screenshots/desktop.png)

Phone view:

![Phone view](screenshots/phone.png)
