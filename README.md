# AnnandaleBBSB
new Annandale Travel League website
http://www.annandalebbsb.org/ is the existing site

# Build Instructions

Project build with `create react app`
Navigate to root directory `/annandale` and run command `npm start`
Project will run at `http://localhost:3000`

# Architecture

JavaScript app
NodeJS as the server-side component
MySQL as database component (eventually)
front-end in Angular? React? other? - open for discussion

# Sitemap ramblings

Annandale BB/SB

Home page - use the General Info content from current page
Umpire Info
Field Schedule
Baseball Info
  - levels/ages
  - rules/schedules
  - league website
Softball info
  - levels/ages
  - rules/schedules
  - league website
Registration
  - Stripe.JS for payment
  - store & validate information
  - printable version for manual completion and submittal
Board/Contact Info
Coaches
Philosophy
Standards of Conduct
Protected by login
  - Evaluations stored in db (site-admin gets all, coach gets only his/her team)
  - registration report (site-admin only)
  - team rosters and contact info (all rosters and contact info available to all users)
