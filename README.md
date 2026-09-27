# Job Match AI

A modern job-matching application built with **Next.js, TypeScript, and Tailwind CSS**.

Job Match AI analyzes a resume against a job description and provides a clear overview of the match.

## Features

- Resume and job description analysis
- Match percentage
- Matching skills
- Missing skills
- Job level detection
- Experience detection
- Resume strengths
- Resume improvement suggestions

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- App Router

## How It Works

Paste your resume and a job description into the application. The app analyzes the text and identifies matching skills, missing skills, job level, and experience requirements.

The current version uses **rule-based text analysis** and does not require an API key.

## Test Example

### Resume

Full-Stack Developer with 1+ years of experience with React, TypeScript, Next.js, JavaScript, GitHub and MongoDB.

### Job Description

Junior Full-Stack Developer with 2+ years of experience in React, TypeScript, Next.js, Node.js, MongoDB and Docker.

### Expected Results

- **Match Score:** 82%
- **Job Level:** Junior
- **Required Experience:** 2+ years
- **Resume Experience:** 1+ years
- **Missing Skills:** Node.js, Docker

## Getting Started

Clone the repository:

```bash
git clone https://github.com/rumachoudhury/job-match-ai.git
cd job-match-ai

Install dependencies:

npm install

Start the development server:

npm run dev

Open http://localhost:3000 in your browser.

Author

Ruma Choudhury

Full-Stack Developer

GitHub: https://github.com/rumachoudhury
