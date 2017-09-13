# Major Studio One 2017

| Parsons School of Design
| ---
| School of Art, Media and Technology
| Justin Bakse
| PGTE 5200 D, Fall 2017
| M 3:50pm—6:30pm, W 3:50—6:30pm
| 6 East 16th Street, Room D1202

### [Syllabus](syllabus.html) • [Class Slack](https://ms1-d.slack.com) • [Assignment Matrix](https://docs.google.com/spreadsheets/d/1PUGHF2wfe7VnJfYr5eYh9nNO6ekzHLHUrzS6PIz_WQ4/edit#gid=0)

## Assignments
##### [Assignment 0 — Studio Introduction](assignment_studio_introduction)
##### [Assignment 1 — 7 in 7](assignment_7_in_7)
##### [Assignment 2 — Ideas In Form](assignment_ideas_in_form)
##### [Assignment 3 — Instruction Sets for Strangers](#assignment_3)
##### [Assignment 4A — Final Project](#assignment_4)
##### [Assignment 4B — Final Paper](#assignment_5)


## Readings
##### [Reading 1 — As We May Think](#reading_1)
##### [Reading 2 — The Social Life of Small Urban Spaces](#reading_2)
##### [Reading 3 — What do Prototypes Prototype?](#reading_3)
##### [Reading 4 — Web Design: The First 100 Years](#reading_4)






### Calendar
**Warm Up**
date | notes
--- | ---
**date** | **agenda** | **due**
[M Aug 28](week_1/monday.html) | Studio Introduction Presentations, DT Intro, MS1 Intro + Syllabus, Studio Introduction Workshop | A0 Presentation


**7 in 7**
date | notes
--- | ---
[W Aug 30](week_1/wednesday.html) | Design Q&A, Constraints Intro, 7 in 7 Intro, Constraints + Framing Workshop | [Meta Assignment](http://localhost:3000/week_1/monday.html)
|
No Class | &nbsp; | &nbsp;
[W Sep 6](week_2/wednesday.html) | 7 in 7 Presentations, Research and Mapping, Ideas in Form Intro, Reading 1 Intro | A1 Discussion


**Ideas in Form**
date | notes
--- | ---
[M Sep 11](week_3/monday.html) | Research Presentations, 1d Workshop | A2 Research
[W Sep 13](week_3/wednesday.html) | 2d Discussion | 2d
|
M Sep 18 | 3d Discussion | 3d, Reading 1
No Class | &nbsp; | &nbsp;
|
M Sep 25 | 4d Discussion, Instruction Sets for Strangers Intro | Interaction, Reading 2


**Instruction Sets for Strangers**
date | notes
--- | ---
W Sep 27 | Recon Discussion, Ideation Workshop | Recon
|
M Oct 2 | Intervention 1 Discussion | Intervention 1
W Oct 4 | Intervention 2 Discussion | Intervention 2
|
M Oct 9 | Intervention 3 Discussion | Intervention 3
W Oct 11 | Instruction Sets Presentations, Final Introduction | A3 Presentation
|
M Oct 16 | Midterm Crit | Domain Statement
W Oct 18 | Midterm Crit | &nbsp;

**Final Project**
date | notes
--- | ---
M Oct 23 | Research Discussion | Broad Research
W Oct 25 | Research Discussion | Deep Research
|
M Oct 30 | Intro to Prototyping, Bodystorming Workshop | R3
W Nov 1 | Proto 1 Discussion | Proto 1
|
M Nov 6 | Proto 2 Discussion | Proto 2
W Nov 8 | Proto 3 Discussion | Proto 3
|
M Nov 13 | User Testing Workshop | POC
W Nov 15 | POC Discussion | POC User Tests
|
M Nov 20 | Discussion + Open Studio | Release Candidate 1, Reading 4
No Class | &nbsp; | &nbsp;
|
M Nov 27 | Discussion + Open Studio, 1-on-1s | &nbsp;
W Nov 29 | Discussion + Open Studio, 1-on-1s | Release Candidate 2
|
M Dec 4 | Discussion + Open Studio | &nbsp;
W Dec 6 | Discussion + Open Studio | Release Candidate 3
|
M Dec 11 | Final Crit | &nbsp;
W Dec 13 | Final Crit | &nbsp;
|
M Dec 18 | Site Reviews, Reflection | Final Site








<br/><br/><br/><br/><br/><br/><br/><br/>
<!-- [2016](/2016) -->

<style>
a[href^="#"]:not(.btn) { color: gray; text-decoration: none; }
.no-class {
    background-color: #EEE;
    color: #AAA !important;
}
.midterm-crit, .final-crit{
    background-color: #EEE;
    color: #000 !important;
    font-weight: bold;
}
table {
    table-layout: fixed;
}
td:first-child {
    width: 100px !important;
}
td:nth-child(3) {
    width: 200px;
}
thead {
    display: none;
}
</style>

<script
  src="https://code.jquery.com/jquery-2.2.4.min.js"
  integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
  crossorigin="anonymous"></script>

<script type="text/javascript">
 console.log($);
 $('tr').each(function(a,b,c) {
     td = $(this).find('td');
     console.log(td, $(td[0]).text());
     if($(td[0]).text() == "No Class") {
         $(this).addClass("no-class");
     }
     if($(td[1]).text() == "Midterm Crit") {
         $(this).addClass("midterm-crit");
     }
     if($(td[1]).text() == "Final Crit") {
         $(this).addClass("final-crit");
     }
 });
</script>

<link rel="stylesheet" type="text/css" href="index.css">
<script type="text/javascript" src="javascript/p5.min.js"></script>
<!-- <script type="text/javascript" src="backgrounds/bg1.js"></script> -->
<style>
canvas { position: fixed; top: 0; left: 0; z-index: -1; }
//.container {background: rgba(255,255,255,.5);};
</style>
