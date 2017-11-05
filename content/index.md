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
##### [Assignment 3 — Instruction Sets for Strangers](assignment_instruction_sets)
##### [Assignment 4A — Final Project](assignment_final)
##### [Assignment 4B — Final Paper](assignment_paper)


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
[1M Aug 28](week_1/monday.html) | Studio Introduction Presentations, DT Intro, MS1 Intro + Syllabus, Studio Introduction Workshop | A0 Presentation


**7 in 7**
date | notes
--- | ---
[1W Aug 30](week_1/wednesday.html) | Design Q&A, Constraints Intro, 7 in 7 Intro, Constraints + Framing Workshop | [Meta Assignment](http://localhost:3000/week_1/monday.html)
|
No Class | &nbsp; | &nbsp;
[2W Sep 6](week_2/wednesday.html) | 7 in 7 Presentations, Research and Mapping, Ideas in Form Intro, Reading 1 Intro | A1 Discussion


**Ideas in Form**
date | notes
--- | ---
[3M Sep 11](week_3/monday.html) | Research Presentations, 1d Workshop | A2 Research
[3W Sep 13](week_3/wednesday.html) | 2d Discussion | 2d
|
[4M Sep 18](week_4/monday.html) | 3d Discussion | 3d
No Class | &nbsp; | &nbsp;
|
[5M Sep 25](week_5/monday.html) | 4d Discussion, Instruction Sets for Strangers Intro | Interaction


**Instruction Sets for Strangers**
date | notes
--- | ---
[5W Sep 27](week_5/wednesday.html) | Recon Discussion, Ideation Workshop | Recon
|
[6M Oct 2](week_6/monday.html) | Intervention 1 Discussion, Reflection | Intervention 1
[6W Oct 4](week_6/wednesday.html) | Intervention 1 Discussion, Midterm Introduction | Intervention 2
|
[7M Oct 9](week_7/monday.html) | Intervention 2 Discussion | Intervention 2
[7W Oct 11](week_7/wednesday.html) | Intervention 2 Discussion, Final Introduction | Intervention 2
|
[8M Oct 16](week_8/monday.html) | Midterm Crit | &nbsp;
8W Oct 18 | Midterm Crit | &nbsp;

**Final Project**
date | notes
--- | ---
[9M Oct 23](week_9/monday.html) | Conceptualization + Research | Instruction Sets Documentation
[9W Oct 25](week_9/wednesday.html) | Conceptualization + Research | &nbsp;
|
[10M Oct 30](week_10/monday.html) | Design Values + Proposals | &nbsp;
[10W Nov 1](week_10/wednesday.html) | Design Values + Proposals | &nbsp;
|
[11M Nov 6](week_11/monday.html) | Prototyping | **Project Proposal**, Reading 3
11W Nov 8 | Prototyping | Paper Outline
|
12M Nov 13 | User Testing | &nbsp; 
12W Nov 15 | User Testing | &nbsp; 
|
13M Nov 20 | PoC Prototyping | Paper Draft
No Class | &nbsp; | &nbsp;
|
14M Nov 27 | Iteration | **Full PoC**
14W Nov 29 | Iteration | &nbsp;
|
15M Dec 4 | Iteration | Final Paper
15W Dec 6 | Iteration | &nbsp;
|
16M Dec 11 | Final Crit | **Final Project**
16W Dec 13 | Final Crit | &nbsp;
|
17M Dec 18 | Site Reviews, Reflection | Final Site, Reading 1








<!-- <br/><br/><br/><br/><br/><br/><br/><br/> -->
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
