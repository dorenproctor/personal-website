import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoModal from '../components/videoModal'

import oldExperience from "../assets/Old Mobile Experience.mp4"
import newExperience from "../assets/New Mobile Experience.mp4"

const WorkExperiencePage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Work Experience</h1>
      <br/>
      <h3>Developer at Daimler Trucking North America</h3>
      <h4>This is a non-exhaustive list of things I've made for Daimler.</h4>

      <h4>Single Sign On Just-In-Time Provisioning</h4>
      <p>When users sign in with SSO, my JIT provisioning code either updates various fields on an existing user or creates a new "portal" user. If the user is a portal user then it also updates or creates an account and a contact which is connected to the user. Multiple strings are parsed and diffed to determine what permission sets and "AccountShare" objects should be assigned to (or removed from) the user. Due to restrictions in Salesforce, these cannot all be updated within the same transaction, so a future call is made to allow all of this to happen.</p>

      <h4>Logger</h4>
      <p>While creating the Just-In-Time Provisioning class I faced an issue where all changes to the database, including logs, were being rolled back when there was an error. To face this problem I created a Logger class which inserts a log in a specific way which allows it to persist on every sign in. While doing this I tried to make the class as reusable as possible. You can create a Logger object and gradually add messages before committing it to the database or you can call a static method to immediately create a log. If you pass an Exception object to the Logger then it will extract information from it including the line number and the stack trace.</p>

      <h4>CFR Form</h4>
      <p>This form allows users to create and edit "Customer Focused Requests". It allows you to load data from existing objects and checks that all the required fields are filled before submission. The multiselect dropdowns inside the form are component that I made. I found an existing component online which only worked with objects and extended it to work with fields of an object or plain strings to make it as reusable as possible. The bottom of the form is another component I made from scratch which adds rows to a table when you select options from two of the dropdowns. The component adds the values of all the cells of the table together and saves each cell into its own object on save/submission.</p>

      <h4>Milestones</h4>
      <p>When "Engineering Work Requests" are attached to a CFR, code I wrote creates or updates Milestones for the CFR which stores the latest date between all EWRs for different date fields. I also created a component which displays the milestones with a progress bar showing the distance between the three dates for each milestone and shows different colors based upon the order of the dates. It handles missing dates appropriately.</p>

      <h4>Journey</h4>
      <p>This component was modeled after the "Path" component that is built into Salesforce. It looks similar but instead of allowing you to select any (pre-set) value of an object's field at any time, it displays "next state" buttons based on the current value. These states are determined by metadata that has a CurrentState, NextState, Color, and a few other fields. In addition to the next state buttons, the component shows all of the values that field has ever been for the object (assuming field tracking is turned on for that field) and when hovering on one of the previous values, it shows a tooltip (which I also made) that displays who set it to that value, when, and how long it stayed that value. The color field in the metadata determines the color of both the next state buttons and the previous values. An undo button appears after hitting any of the next state buttons. The standard Path component can also has a limitation on what objects it can use whereas Journey should be usable for all.</p>

      <h4>REST API & OAuth</h4>
      <p>I created a REST API in Apex which accepts JSON and turn it into SObjects. I was told that a username-password workflow was not secure enough, and that JWT should be used. To meet this requirement, I created a program using Node.js that generates a JWT, makes a call to get an authentication bearer token, and attaches the token in the call to the REST API.</p>

      <h4>Account Deduplication</h4>
      <p>Salesforce has a built-in duplication detector, but they don't give you a decent way to actually view the potential duplicates. To fix this, I've created a custom component which displays each Account in the DuplicateRecordSets in a table. I created a custom filterable dual listbox component because our accounts have hundreds of fields on them and scrolling through that many fields is impractical. The fields you select in the listbox are the fields that display in the table, and there is an input field to filter the DuplicateRecordSets and a second input field to filter the Accounts. When you click on one of the accounts in the table, a modal pops up (another custom component of mine) you can either merge all the accounts in the DuplicateRecordSet into that account or you can remove that account from the DuplicateRecordSet, deleting the DuplicateRecordSets if there become less than two accounts in it.</p>

      <h4>Python with Pandas</h4>
      <p>While working on deduplication, I built a workflow in Python with Pandas that would identify potential duplicates based on fuzzy matching. It had a few issues and the team likes using built-in Salesforce technology, so it is not being used, but it did a pretty effective job. I've also used Pandas for a handful of data analysis purposes and to help with data migration.</p>
      <br/><br/><br/>
      <h3>Intern at Home Depot QuoteCenter</h3>
      <p>At this internship I worked with 3 other interns to make an internal site mobile friendly.</p>
      <VideoModal src={oldExperience} buttonLabel='Before Video'/>&nbsp;
      <VideoModal src={newExperience} buttonLabel='After Video'/>
      <br/><br/><br/>
      <h3>Intel NUC Challenge</h3>
      <p>This isn't <i>exactly</i> work experience, but I was on the team that won 1st place in an Intel competition.</p>
      <a href='https://blogs.intel.com/csr/2015/05/nuc-challenge'>https://blogs.intel.com/csr/2015/05/nuc-challenge</a>
      <br/><br/><br/>
    </Layout>
  )
}

export default WorkExperiencePage
