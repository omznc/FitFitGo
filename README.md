# FitFitGo - A really bad student search engine.


<a href="https://discord.gg/vZRrpBXFNT"><img src="https://img.shields.io/discord/787773373748740128?label=Discord%20Server&style=for-the-badge"></img></a>
<br><br>
## Accessible on https://fitfitgo.omarzunic.com/


I can't really say anything else about this. It took like 2 hours and did not help cure my boredom. 

I used a python script to scrape my Uni's largest Discord server, then with the help of some RegEx patterns I extracted all the matches for `Firstname Lastname IBXXXXXX` and turned that into a JSON. 

Then, you won't see this one coming - I made a webpage to search that by the student ID, and also ended up generating the student email addresses since they're in the `firstname.lastname@edu.fit.ba` format. That's fun and all but not all the messages were `firstname lastname`, some of them were `lastname firstname` so I ended up just making a reversed order in the json for the email. 

I guess it works, though I only have about 150 students currently indexed. If you manage to procure a bigger list, shoot me a pull request and I'll merge it ♥
