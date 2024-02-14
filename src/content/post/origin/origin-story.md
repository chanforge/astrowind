---  
publishDate: 2024-02-01
title: DINGO! or how I learned to make a game.  
excerpt: Read the story on what inspired the creation of this new dingo app.  
image: /src/content/post/origin/images/post-header.png
category: Blog
---

## WHAT IS DINGO? ♥️♠️♦️♣️

DINGO, or "Deaf Bingo," offers a fresh take on the classic game of BINGO.

![An image of BINGO cards and chips](/src/content/post/origin/images/bingo.png)

While traditional bingo may evoke memories of a bygone era, DINGO brings a modern twist to the game.

The Deaf community has adopted a friendlier, more hip way of playing a game among large numbers of people without the clutter of bingo cards, chips and pencils.

That game is called DINGO.

---

## THE INSPIRATION 💡

### HOW I ENDED UP MAKING A NEW DINGO APP FOR EVERYBODY.

I'm somewhat famous in the local Deaf community for being a hermit, which I rather enjoy being! Sometimes I appear at Deaf events when the stars align and I'm in the mood for socializing 🥸

Given my homebody nature and the stigma around DINGO games and senior citizens, I had never attended a DINGO game until sometime in 2022.

I quickly learned how to play, and in the process of playing along with everybody in the audience, I became very curious about this software they were projecting on the screen.


![A screenshot of an older DINGO software interface I saw](/src/content/post/origin/images/bingorose-dingo2.png)


It was a little dry-looking and very reminiscent of software in the 2000's. Not that I didn't like it *(I am a sucker for nostalgic design)*, but I had quickly assumed it was just simply an old piece of software...
until I spoke with the club president about it.

I found out this particular software had been contracted to be developed & distributed among Deaf clubs and organizations for a price of approximately $70 after it was initially created, with the ability to append your own Deaf club/organization’s logo on your licensed copy.
*(The actual cost to initially develop the program by contract is unknown)*

This software was developed sometime around 2016 and *requires* Microsoft Access 2007 which is quite outdated.
It wasn't until 2020 the software became discontinued.

As an apparent result of weak software security and high entry cost, **many Deaf clubs shared DINGO software with each other**, such as this particular one, just so they're able to run their own local DINGO games.

I have/hold nothing against the developers of that software, but I couldn’t help but feel bothered by a few things in particular…

---

### THE DEAF ECOSYSTEM

As I researched DINGO software alternatives, many of them were contracted & developed by hearing people.

![Another example of DINGO software asking for a license](/src/content/post/origin/images/bigd-dingo2.png )

While I understand that one obviously would need to be compensated for developing custom/proprietary software, it didn’t sit well with me that plenty of (hearing) developers-for-hire profited from creating software for the Deaf community…
**while none of the software developed by Deaf/HoH seem to exist or are not being acknowledged.**

![DINGO being played at CSUN Fremont](/src/content/post/origin/images/6.png)

---

### ALL THE DEMAND AND NO SUPPLY

DINGO games are somewhat of an open secret in our community – everyone's aware of them, yet they're seldom discussed until you find yourself in the midst of one. They're the kind of events that fly under the radar until you're there, fully engaged and enjoying yourself. Once the game wraps up, it's back to the routine of daily life, with little mention of the fun experience you just had.

It’s the same with poker players, you wouldn’t know who plays poker until you started poking around 👉😎👉

So in that case, it’s not often that you get a Deaf/HoH developer that catches wind of the need for a quality DINGO software and takes the time to build one unless somebody asked them directly.

After all, I didn’t even begin to consider building this app until I went to a DINGO game myself and understood the demand before my own eyes.

Deaf clubs or buyers have often had to dig deep into their pockets to pay for customized DINGO software, navigating the headaches of compatibility issues across various outdated platforms (computers), operating systems, and such.

As a student in software development, looking at this 90's-flavored software just made me think,
**“How can I make something better than that?”**

---

## STEP 1, DRAW A CIRCLE. STEP 2, DRAW THE REST OF THE OWL.


![A paper that instructs you to "draw two simple circles" on the left and then to "draw the rest of the owl" on the right which shows a fully detailed and complex drawing of an owl.](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pgzkrn8jma59mtxo8as2.jpg)

*It can't be that hard to just make an app, right?*

At the moment when I sat there at my first DINGO game wondering how I could triumph that software, I was already teaching myself how to build things in the [Godot game engine](https://godotengine.org/).

> A Game Engine is a program designed to help you create video games, environments, logic and programming games in 2D and 3D.

However, that is quite time-consuming and while I still enjoy learning game development on the side, I couldn’t commit too much time to the learning curve of this specific game engine at this moment.

This is due to the fact I was a student working through several courses towards a Bachelor's of Science in Software Development. It meant I had to choose my priorities and spent less time learning how to use Godot. After all, Godot is a game engine and you create games with it, and not so much full-fledged software applications (although you technically could!)

Back to the moment during that DINGO game, I wondered how I could make something like that myself...

*What language do I have to code it in?*

*How would I create the graphics for it?*

*How would it all work together?*

That's when I realized it doesn't actually have to be a "program" in that traditional sense. I could just develop it in the form of an actual game that operates like an "app", but with the added benefit of easier graphics workflow and working with visual interfaces, thanks to using a game engine instead of just writing raw code. *Remember, I said you "technically" could make software with a game engine, heh.*

After that realization, I continued to experiment with Godot - until I happened across a different game engine that seemed much easier for people looking for an entry-level experience, although I would use “entry-level” lightly here.

Regardless, I had no prior background in game dev, so this was still all uncharted territory for me. I had no real idea where to start, where to even go from here, and how to possibly bring something like a DINGO software to life.

So I figured, to make that app a reality as soon as possible, I might as well try and learn how to use the alternative and get it out the door faster, yeah?


---

### ENTER "GDEVELOP"

It was a youtube video that led me to discover another free & open-source game engine called [GDevelop](https://gdevelop.io/).

After realizing that it was mostly no-code and relied on a bunch of logic programming, I felt like I already knew what my first project would be, and that's a new DINGO app.

Because of my fooling around with the other engine, "Godot", I was already becoming quickly familiar with the interface in GDevelop and figuring things out.
I absorbed all the included tutorials in the software, along with watching videos on youtube, I went from **nothing** to a **working alpha version** of the DINGO! game in **two weeks**.

I had to pat myself on the back for that one. 🤠

![GIF of an early alpha version of my DINGO app](/src/content/post/origin/images/dingo-alpha.gif)


---

### THE GRAPHICS

In the beginning of my self-learning journey in the GDevelop game engine, I mainly used their in-house free assets, including cards. For the time being, I stuck with several placeholder graphics.

However, as this project started to come together, I knew I wanted to keep this software as independent as possible, especially when it comes to using graphics and images.
When you use assets, free or paid, they require to be credited and acknowledged (unless they are royalty free / public domain.)

I wanted to keep this project as contained as possible and when necessary, only consult with or contract graphics and assets made by Deaf/HoH artists and designers.

Since this was my first project and a personal mission, I created every card and graphics myself, using specific fonts and shapes to maximize visibility and reduce confusion of certain letters / numbers from a reading distance.

I made efforts to ensure that whether the software was being viewed from 5 feet away or 50, that it would be as clear and visible as possible without breaking aesthetics.

Everything is created, designed, and developed in-house at the moment - but I am quite open to including collaborative work with other Deaf/HoH artists and developers as well!

---

### BUG? NAH... IT'S A FEATURE.

After getting a rough version running in just a few weeks, I was feeling confident about this project until I ran into a bug with my ‘Joker mode’ that was game-breaking.

**That bug itself took me several months to figure out.**

I thought maybe I was spending way too much time on the project, so I walked away from it for several weeks.
Every time I would come back to it, I still couldn’t figure out the bug and instead, I’d focus my energy elsewhere within the project.

I eventually ended up taking one of these opportunities to do a complete visual overhaul since I was using mostly “placeholder” graphics and ugly user interfaces (buttons, cards, backgrounds, etc) that I created and had committed sins by doing so.

![A GIF of various combinations of card backing and table themes](/src/content/post/origin/images/themes.gif)

Behold, now the app was still broken but at least it looked very pretty!

**This is the way… right?**

---

#### Q: WHAT BUG WAS IT, EXACTLY?

**A:** When you activate joker mode from the Settings menu, and when it eventually lands on a Joker card, 
**it would do all, if not most, of the following:**

- Get stuck on the “JOKER” alert screen.
- The game locks up even after the JOKER screen successfully dismisses after clicking the “Okay” button.
- The “displayed card” would get stuck on the joker card, while the code behind it was still drawing random cards.
- The array of cards would still get turned over but the “displayed card” would still be stuck on the Joker card.
- The seconds would not work properly after resuming the game after dismissing the “JOKER” alert screen.
- Sanity was slowly being depleted from the developer working on this game.

There were plenty of bugs, but I eventually figured my way around them, but this one was the most difficult one I tried to work with.

---

!["Several months later"](/src/content/post/origin/images/several-months.jpeg)

**It happened.**

I finally figured out how to make the game work correctly with Joker mode enabled, without breaking everything.

Without embarrassing myself, let's just say that there were some logical issues that were impossible to recognize without actually running the game in particular ways to test each possible scenario, which narrowed it down to the problem itself.

Plus to be honest with you all, I don't quite fully remember how... 💀

---

## JUST SEND IT!

This project has been quite a feat of strength for me, considering I’ve never developed a full-fledged “game” before, not even in GDevelop.

After breaking through the “bug” wall, I sped on to finish developing the game to push a working version out as soon as possible, since my local Deaf club would be hosting a DINGO game sometime soon and I wanted to polish the game before showcasing it to my local community for the first time.

As the original supporters of my project - [Atlantic County Society of the Deaf](https://acsdeaf.org) agreed to let me feature my app at their events while I observe, assist and collect feedback.



I quickly realized as soon it was “ready for use”, there’s a certain amount of anxiety that comes with the release of your own software out into the wild. I've never felt this before.

- How will people respond to it?
- Will it work in every scenario?
- Did I balance the game properly?
- Am I forgetting a feature?
- Is this accessible enough?

**Even so, none of that can compare to the satisfaction and pride that comes with having created something out of nothing, and teaching yourself in the process.**

---

## *(steve jobs voice)* ONE MORE THING...

In the beginning of this journey and working on this project, I had a particular goal that was very important to me.

I wanted to keep this game app **free and accessible for everybody.**

Nobody should have to wait for the next Deaf club’s gathering to join a DINGO game, or ask your Deaf friend who “knows a guy who’s got a guy” to get your hands on DINGO software to run their own game.

![Oprah Winfrey pointing to everyone in the audience, saying "YOU GET DINGO FOR FREE!"](/src/content/post/origin/images/oprah.gif)

Initially, I wanted this to be a web app that could run on all platforms and run on laptops, computers, iPads, even mobile devices.
*(GDevelop made that very easy with their ability to export projects to the web or as software.)*

I didn’t want to see any Deaf people, clubs, or organizations, getting billed heavily for something they wanted to use for recreation.

However, I did end up opening a donation link, since the Deaf community has been very supportive of my efforts and I did not really want to solicit costs for using my app, such as "licensing fees" or purchases. Nah...
This was my gift to the community.

**All that counts is that people recognize the value in this software and the games we come up with for the Deaf community.**

The DINGO concept is important to the Deaf community — they need all the reasons they can get to have the Deaf / Hard of Hearing citizens continue gathering at events and having fun together.

---

## CONCLUSION

So that's how I ended up figuring out how to make a game and taking on my first project to create a better DINGO application for everyone to use.

If other Deaf / HoH developers do end up creating their own version… that would be awesome!

As I've said - we need more Deaf/HoH people in our space. When there is a need within the Deaf community, can that need be addressed by another member of the Deaf community?
You can learn more about this concept of Asset-Based Community Development (ABCD) [here](https://www.nurturedevelopment.org/asset-based-community-development/).

Now that I've created something useful for the community, I shall retreat back to my abode under a rock. 👋🏻

(I'm still going to maintain my software, of course! 😎)

Cheers 🍻

-*Channing*

