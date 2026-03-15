	Hacker Newsnew | past | comments | ask | show | jobs | submit	login
Ask HN: I'm a software engineer going blind, how should I prepare?
3270 points by zachrip on April 19, 2020 | hide | past | favorite | 473 comments
I'm a 24 y/o full stack engineer (I know some of you are rolling your eyes right now, just highlighting that I have experience on frontend apps as well as backend architecture). I've been working professionally for ~7 years building mostly javascript projects but also some PHP. Two years ago I was diagnosed with a condition called "Usher's Syndrome" - characterized by hearing loss, balance issues, and progressive vision loss.
I know there are blind software engineers out there. My main questions are:

- Are there blind frontend engineers?

- What kinds of software engineering lend themselves to someone with limited vision? Backend only?

- Besides a screen reader, what are some of the best tools for building software with limited vision?

- Does your company employ blind engineers? How well does it work? What kind of engineer are they?

I'm really trying to get ahead of this thing and prepare myself as my vision is degrading rather quickly. I'm not sure what I can do if I can't do SE as I don't have any formal education in anything. I've worked really hard to get to where I am and don't want it to go to waste.

Thank you for any input, and stay safe out there!

Edit:

Thank you all for your links, suggestions, and moral support, I really appreciate it. Since my diagnosis I've slowly developed a crippling anxiety centered around a feeling that I need to figure out the rest of my life before it's too late. I know I shouldn't think this way but it is hard not to. I'm very independent and I feel a pressure to "show up." I will look into these opportunities mentioned and try to get in touch with some more members of the blind engineering community.


	
kolanos on April 19, 2020 | next [–]

You can definitely continue as a software engineer. I'm living proof. It won't be easy, especially at first. For a while it will feel like you're working twice as hard just to keep up with your sighted peers. But eventually, the better you get with your tools, you'll find you have some superpowers over your sighted peers. For example, as you get better with a screen reader, you'll be bumping the speech rate up to 1.75-2X normal speech. You'll be the only one who can understand your screen reader. You'll become the fastest and most proficient proof reader on your team. Typos will be easily spotted as they just won't "sound right". It will be like listening to a familiar song and then hitting an off note in the melody. And this includes code. Also, because code is no longer represented visually as blocks, you'll find you're building an increasingly detailed memory model of your code. Sighted people do this, too, but they tend to visualize in their mind. When you abandon this two dimensional representation, your non-visual mental map suffers no spatial limits. You'll be amazed how good your memory will get without the crutch of sight. Good luck. If you're a Mac user you can hit me up for tool recommendations. My email is my username at gmail dot com.

	
vidanay on April 19, 2020 | parent | next [–]

Your comment about proof reading and errors not sounding right reminds me of the "proper/best" way to learn Morse code for ham radio. Most everyone is familiar with the charts that show A=.- B=-... etc. Lots of beginners try to actually interpret the sounds in their ears and convert that to a letter and then convert a bunch of those to a word. Obviously, that is very processor intensive and has a high failure rate. The best way is to treat each audio pattern as a letter in a new language and skip the conversion process. Eventually, you recognize entire words just from the sounds.

	
kendallpark on April 20, 2020 | root | parent | next [–]

A while back I worked for a team that had wired up Jenkins to a speaker in the office. Each type of event would trigger a different Zelda sound effect. Victory music for successful deployments, game over music for breaking the build, etc. Notably, dev server exceptions were connected to sword clashing sounds.
It led to debugging situations like this:

"Okay, so that's two clanks when we click on this button, but if we do it on this other page it's only one clank. Hm."

Turns out, there are some bugs that are easier to detect this way. Looking at timestamps doesn't really give a "sense" of whether two events are in a tight causal link. With sound, you can immediately "hear" that two adverse events are occuring at identical intervals every time. What's great is that the sound information doesn't take up any additional attention. It just fades into the background if you don't need it. When there is a pattern, it stands out.


	
egd on April 20, 2020 | root | parent | next [–]

At a previous gig, we had a lot of systems named after animals, and I'd joked about wiring our alerting system up to emit the animal sound for the system that was paging, but I think I'm actually going to do that at my next gig. Outside the land of software, engineers debug systems using sound all the time - I think we're underutilizing our senses and our pattern recognition.

	
WalterBright on April 20, 2020 | root | parent | next [–]

I always wonder at the madness of elevator design. Most of them "ping" as they pass a floor for accessibility. But that means the blind rider must first know the floor he is on, then count the pings to the right floor.
It should simply announce each floor as it passes. I know from experience that you can make quite comprehensible voice sounds by connecting a 5V I/O pin to a speaker, so there is no excuse. (All you do is digitize the speech, then turn the pin on and off as the wave crosses 0.)

Ditto for every device that comes with a chart saying which LED blink pattern means what status. Like the "fast blink" and "slow blink". The LED is blinking, is that "fast" or "slow"?


	
avip on April 20, 2020 | root | parent | next [–]

Any modestly "modern" elevator would have Braille indicators. And many also announce floors same way public transit does.

	
WalterBright on April 20, 2020 | root | parent | next [–]

I've never been in an elevator that announced the floors with anything better than a ping. This is despite elevators being controlled by single board computers since around 1980.
The buttons have had braille on them for a long time.


	
Piskvorrr on April 20, 2020 | root | parent | next [–]

Interesting. OTOH, while old builds here (electromechanical, no microcontrollers, <1990) lack even the basic ping, I haven't been in an elevator built in the new millenium which wasn't excessively chatty. (Central Europe mostly, but the same experience everywhere I went: "ground floor, main entrance, access to train station; mind the door; door is opening")

	
andrewshadura on April 20, 2020 | root | parent | prev | next [–]

Interesting you say that, literally every lift in a public space that does any sound at all around here announces each floor with proper spoken speech, not just a ping.

	
badsectoracula on April 20, 2020 | root | parent | prev | next [–]

I wonder if it is due to some ancient regulation mandating rings/pings that nobody bothered to update for current tech. When i lived in Warsaw (Poland) for a while, every single elevator i came across - including those in very old buildings - had voice recordings for announcing the current floor. I almost learned polish numbers from them :-P

	
bobthepanda on April 20, 2020 | root | parent | prev | next [–]

In a lot of modern buildings in Hong Kong, lifts announce floors in three languages: English, Cantonese, and Mandarin.
I'd imagine in Macau, they might use four (those three plus Portuguese); the public transit stop announcements do, and quite frankly I'm not sure how they guarantee that they can complete the announcements before the next stop.


	
burfog on April 21, 2020 | root | parent | next [–]

At that point, just use Morse code. For small buildings, the cuckoo clock method works too.

	
bobthepanda on April 21, 2020 | root | parent | next [–]

the main reason why elevators in Hong Kong do not is that most of them are high speed high-rise elevators and the numbers just whip by. It would probably be very frantic sounding to use Morse if you went from ground to 50 in less than a minute.
Instead they only announces floors that are stopped on, so this works fine.

One benefit of using spoken vernaculars rather than Morse is that Morse has to be taught; Hong Kong historically draws large portions of its population from migrants originating from all over China, where until recently there was wide variance in schooling and literacy rates.


	
vidarh on April 20, 2020 | root | parent | prev | next [–]

I know of at least a few in London office buildings that speak. Especially buildings with large banks of elevators that tends to have "fancier" control systems that manage all of the elevators.

	
apetresc on April 20, 2020 | root | parent | prev | next [–]

Canadian here - even my condo building elevator announces floor numbers with a (pretty well-digitized) voice. And believe me, my building is no marvel of modernity.

	
andrewshadura on April 20, 2020 | root | parent | prev | next [–]

https://www.youtube.com/watch?v=YzCdkkG4Gnk

	
neltnerb on April 20, 2020 | root | parent | prev | next [–]

I haven't seen taking ones a ton, outside of hotels and fairly new conference centers and the like.

	
willyt on April 21, 2020 | root | parent | prev | next [–]

Might be an EU thing. Pretty sure there's a regulation that says new lifts need to announce floors even cheap hoists that only go one floor do it.

	
vidarh on April 20, 2020 | root | parent | prev | next [–]

A fun demonstration of getting comprehensible sound via one bit sampling is that you can use a tight loop on a C64 to read from any number of input pins (such as the tape input) to sample sound, and play it back either by writing to any number of outputs and connect it to a speaker, or indirectly by using the signal to toggle the sound chip volume up and down.
So not only can you get comprehensible voices from a 5V I/O pin to a speaker, pretty much any CPU newer than the mid 70's will be powerful enough to drive it.

So I agree - there's not really any excuse other than that people haven't thought about the UI.


	
woodrowbarlow on April 20, 2020 | root | parent | next [–]

my c64 is sitting right next to me, and i think i'll play with this after work. thanks!

	
vidarh on April 20, 2020 | root | parent | next [–]

Careful not to burn anything out... Though the C64 is pretty indestructible - I connected all kinds of things to the IO lines of it back in the day... And a few inadvisable cases of soldering things straight to the user port pins (I'm amazed I never destroyed any machines.... that way)
A tip is to turn off the screen during sampling and playback, as otherwise the video chip steals a lot of memory cycles.

You might then also be interested in this far more impressive playback with the C64:

https://brokenbytes.blogspot.com/2018/03/a-48khz-digital-mus...


	
zeveb on April 20, 2020 | root | parent | prev | next [–]

The one edge case is that the bells work for all blind folks, not just those who understand the language spoken by and announcement. Of course, a blond person in that case could just count announcements …

	
jaywalk on April 20, 2020 | root | parent | next [–]

Hey, let's leave hair color out of this.

	
zeveb on April 20, 2020 | root | parent | next [–]

Argh, wish I'd got your comment in time. I meant, of course, a blind person!

	
WalterBright on April 20, 2020 | root | parent | prev | next [–]

> Of course, a blond person in that case could just count announcements …
Exactly, he's not worse off.

Besides, I've traveled in foreign countries where I literally do not know a single word in that language. You start picking up words by association almost immediately.


	
patmorgan23 on April 20, 2020 | root | parent | prev | next [–]

The elevators in my building only make one announcement per stop.

	
Piskvorrr on April 20, 2020 | root | parent | prev | next [–]

The "ping for accessibility" is a holdover from ancient times (think 1910s), when there was an actual bell that was rung by the elevator's passage (one ding up, two dings down, IIRC). Current technology has (and uses) far better capabilities, either by (common) samples or by (uncommon) speech synthesis: "ding" "Floor 6." "Doors opening..."

	
WalterBright on April 20, 2020 | root | parent | prev | next [–]

I have noticed that some street walk/don't walk signs now have a voice rather than just a tone. It sure took a long time. Though the voice would be improved by saying "walk east" rather than just "walk".
But still, hardly any use a voice.


	
lb1lf on April 20, 2020 | root | parent | prev | next [–]

-At a former employer, I had coded some embedded devices to spit out their bus address and current error code in morse code using the buzzer in the keypad. Saved me lots of time during initial debugging of new installations, then I'd just disable the buzzer before heading for home.
(At least) on one occasion I forgot; years later a puzzled chief engineer calls me and says that his first officer had told him that E209 had a pending IGBT failure while they were discussing issues with the equipment we'd delivered over the din of the buzzers. Would that hypothesis have any possible merit?


	
jjeaff on April 20, 2020 | root | parent | prev | next [–]

It might depend on the person, but sound can be a powerful way to perceive the world. When I was living in another country and learning the language, I found that the difference between a lot of bad or mediocre language learners and those that were really good, was that those that were good eventually stopped thinking in terms of grammar rules and dictionary words and started remembering phrases by how they sounded.
If you say something that is grammatically incorrect in your own language, most native speakers will tell you it just "sounds" wrong. They can't even explain the rules of why it is wrong, but they know it sounds wrong.


	
lozf on April 20, 2020 | root | parent | prev | next [–]

That concept reminds me of "Peep - the network auralizer."
- https://www.usenix.org/legacy/publications/library/proceedin...

- http://peep.sourceforge.net/intro.html


	
WalterBright on April 20, 2020 | root | parent | prev | next [–]

I used to debug embedded systems by hooking an I/O pin to the speaker, then would toggle the pin level at various points in the program.
You could tell where it went wrong by the "song" after a while. Sorta like tuning your car by ear.


	
hermitdev on April 20, 2020 | root | parent | next [–]

This reminds me of when I was helping a friend debug his home-built computer. Couldn't get a POST message out of it indicating why it wouldn't boot. After a while of searching, discovered it was because there wasn't a speaker connected to the non-existent pins for the speaker (there were no pins, just the soldering points for them). Once discovering that, used a multimeter to read the POST error - no GPU detected. Fun times...

	
WalterBright on April 20, 2020 | root | parent | next [–]

> multimeter
Once I was introduced to an oscilloscope, I much preferred that. I bought a nice one off of ebay for about $60, and another peach of a scope from the pawn shop for $40.


	
biscuittin on April 21, 2020 | root | parent | prev | next [–]

I'm reminded of this set up at a fusion reactor: https://www.youtube.com/watch?v=IrtGp8hv-0Y
They put microphones in the reactor and monitors for them in the control room, so they can hear if something sounds wrong.


	
kedean on April 20, 2020 | root | parent | prev | next [–]

That's super interesting. I would imagine another benefit of that system is pattern detection. It would be much easier to notice a "beat" happening than with log messages, where you need to put things on a timeseries representation to see those patterns show up.

	
pnathan on April 21, 2020 | root | parent | prev | next [–]

That is technically termed sonification, FYI.

	
27182818284 on April 20, 2020 | root | parent | prev | next [–]

Similar experience for when I taught myself the Dvorak layout years ago. My fingers learned the common motion for whole words first. Actually, I'm not sure I could draw the layout of the qwerty keyboard I'm typing on right now from memory either.

	
richardw on April 20, 2020 | root | parent | next [–]

Just for a laugh, try changing your phone keyboard to Dvorak. It seemed like a good idea but felt alien to see the keys I naturally use. Swiping was just ridiculous.
Obviously it’s just practice but I don’t mind using qwerty on my phone. It keeps it vaguely present in my memory.


	
PureParadigm on April 20, 2020 | root | parent | next [–]

I've been typing Dvorak on my computer since middle school and so I thought it'd naturally be a good idea to switch my phone... turns out not so much. While having all the common letters on the home row is good for regular typing, it is not good for phone typing which is heavily dependent on autocorrect. If I miss a letter by one key it's still likely for it to be a valid word because common letters are clustered and autocorrect misinterprets. For example, I might type "i" and then "t", "n", and "s" are all adjacent meaning if I meant to type "is" and I miss by one key and type "in" then it is not corrected. Other annoying ones are "by" and "my" because the b and m are next to each other.
Sadly, I'm in a bit too deep to go back to Qwerty on my phone (I'd be very slow for awhile). I do still enjoy Dvorak on the computer and while I don't think I'm a faster typist than I would be with Qwerty, I rarely (pretty much never) experience finger strain when typing for long periods.


	
chillacy on April 20, 2020 | root | parent | next [–]

Supposedly the entire reason Qwerty was designed was to prevent typewriters from jamming by making the keys as disambiguous as possible, which is now ironically ideal on tiny screens.

	
kqr on April 20, 2020 | root | parent | next [–]

Indeed. All the reasons Qwerty are bad for 10 finger typing are specifically the reasons it's fairly good for tiny touchscreen typing!

	
lelag on April 20, 2020 | root | parent | prev | next [–]

I switched to Dvorak in the early 2000's and typing qwerty on a keyboard is totally alien to me now.
However, any attempt at using Dvorak on a touch screen keyboard has failed as I can't rely on my muscle memory.

I found that for touch screen input I preferred using qwerty since I have a better feel about where keys are to hunt and peck. Funnily when typing dvorak, my fingers knows where the keys are but I don't have a good conscious mental map of the layout.

Maybe it's due to the fact that you have to touch type dvorak without any visual help since most users use regular qwerty layout keyboards.


	
james_s_tayler on April 20, 2020 | root | parent | prev | next [–]

Can vouch for colemak being hard to type correctly with on a phone. Normally with qwerty I felt I didn't rely so much on autocorrect, but with Colemak I make certain mistakes quite frequently. Especially given eio are all next to each other a lot of times when I want to type o I type "i" instead. I think it's gotten better in recent months but certain combinations on Colemak just seem to be very sub optimal for a phone. Especially the placing of the vowels.
I'm used to it now and it doesn't quite bother me enough to relearn qwerty on mobile. Kinda stuck in this weird limbo of relying on autocorrect for every 5th word. Hahaha.


	
james_s_tayler on April 20, 2020 | root | parent | prev | next [–]

Funny story. I started learning Colemak must have been close to a year ago now. I switched my home computer and phone to Colemak, but kept my work computer on Qwerty as I wasn't quite ready to suffer the initial productivity hit even though I knew I needed to do it in order to really breakthrough. In the end I couldn't commit, so I switched everything back. About 6 months later my wife received a text while she was driving and asked me to reply to it. I picked up her phone and fumbled through typing out a reply. Something felt off. I opened up my phone to compare. I had never switched my phone back to Qwerty and my brain had completely adjusted. So much so that I didn't even realize my keyboard had been Colemak for the last 6 months.
It's still Colemak to this day.


	
peterlk on April 20, 2020 | root | parent | prev | next [–]

I did this many years ago, and am now terribly slow at typing on a phone with a qwerty keyboard, and still cannot use a Dvorak keyboard on my computer...

	
squiggleblaz on April 20, 2020 | root | parent | prev | next [–]

It is painful to use Windows on my surface as a tablet, since I want the physical keyboard layout to be dvorak and the osk layout to be qwerty (because I've never really seen the dvorak layout). Microsoft obviously has no interest in making it accessible to dvorak users.
I think the dvorak equivalent of an osk is something more like MessageEase. If they would bother to update their Windows offering to something a little more recent (high dpi instead of scaling etc) it would be nice tho


	
lexicality on April 20, 2020 | root | parent | prev | next [–]

Amusing story - when I was in uni I decided to learn dvorak and since I'd just got a shiny new smartphone I set the keyboard in it to dvorak too.
I was never able to get over my qwerty touchtyping skills and gave up very quickly but I left my smartphone keyboard that way as I thought people's reactions when they tried to use it was funny.

Six years later, I bought a kinesis advantage and discovered to my horror that my touchtyping skills were useless with the alien key layout and I couldn't remember where any of the keys were because I'd not looked at them for so long.

However - the kinesis had a "dvorak" button and after having used it on my phone for so long I found it easier to learn that then re-learn qwerty. 4 years later and I get hopelessly lost every time I try to use qwerty.


	
adrianN on April 20, 2020 | root | parent | prev | next [–]

Wow doing that would make so little sense. The benefit of dvorak is less finger movement when touch typing. It would be interesting to optimize the keyboard layout on a phone for less finger movement while swiping, but that probably looks a lot different than Dvorak.

	
scott_w on April 20, 2020 | root | parent | next [–]

For swiping it’s the opposite: you need to move your finger more to clearly disambiguate which letters you want to “select.” The hardest words are things like “as” and “tool” where there’s letters close by to miss-swipe over. At least in my experience.

	
lexicality on April 20, 2020 | root | parent | prev | next [–]

I remember seeing a finger movement optimised keyboard a few years back, it was incredibly alien and based on gestures

	
Gh0stRAT on April 20, 2020 | root | parent | next [–]

You're probably talking about MessageEase.
I've been using it for about 7 months now and it's been great. I especially like being able to type complex passwords without looking at my phone's keyboard. (like when joining a new wifi network, for example)


	
bad_user on April 20, 2020 | root | parent | prev | next [–]

I never understood why Dvorak is a thing.
I and others like me can touch type with Qwerty just fine. I can comfortably do 70-90 wpm, which is above my speed of thought. I don't suffer from RSI either and I've been touch typing for 20 years.

Also the Qwerty layout is more international. In non-English languages the Dvorak assumptions break down, the layout being optimized for English. And good luck finding Dvorak versions for other languages. Whereas all localized keyboard layouts that I've seen are based on Qwerty (for languages using Latin chars obviously). So for people communicating in more than English, like myself, anything non-Qwerty would be a pain.

So the biggest problem with Dvorak is that it is non-standard and it ain't worth it imo. I have issues with using other workstations, of friends and colleagues, just by having reconfigured Caps Lock into another Ctrl.


	
1337shadow on April 20, 2020 | root | parent | next [–]

I speak 3 languages on Dvorak-alt-intl layout which I have optimized for coding: https://blog.yourlabs.org/posts/2017-12-22-dvorak-intl-code-...
Dvorak fixed my RSI problems, it is not possible that Qwerty have the same physical impact than Dvorak because physically a Qwerty typer has to "walk" a lot more distance with their fingers to type the same thing than a Dvorak typer that has all voyels on the home row.

You can spot a Dvorak user by just watching them type: their fingers walk a lot less distance than other users. It's a trick that I learned from other Dvorak users who had spotted me.

I can still touch type with Qwerty, but my hands hurt after 5 minutes.

I type around 145 wpm, including in the 3 languages I speak (all ASCII based though) and languages or frameworks that I know by hearth.

To make it easy for colleges and friends, I just have 2 aliases:

alias aoeu="setxkbmap fr"

alias qsdf="setxkbmap -I ~/.xkb code -print | xkbcomp -I$HOME/.xkb - $DISPLAY"

As you can see, the four letters of the how row, in dvorak switches to french, in french switches to dvorak. Of course it could be more complicated with more layouts if I had to support them but then I guess a systray icon would work.

Anyway, also using Kinesis Advantage 2 LF, absolutely love it, and plenty of other "non-standard" stuff like the OP says, such as a tiling window manager.

Highly recommend learning or making a better layout than Qwerty because the drawbacks are largely country balanced by the benefits IMHO.

It's not about whatever someone thinks is "standard" it's about how you want to touch the machine for the rest of your life.


	
bad_user on April 20, 2020 | root | parent | next [–]

> "I can still touch type with Qwerty, but my hands hurt after 5 minutes."
That's not a good metric. In your case, you might be right, but for the general public it's like when picking up any new exercise or sport, like running or biking or anything really, when untrained you end up for the first few days with sore ligaments, joints and muscles. You get used to it.

My hands never hurt, even though I love writing long texts, long emails, long code comments, etc. I can also do 120 wpm but I don't feel the need to do it because it's stressful, not necessarily on the hands, but on my thought process. Speed isn't an issue.

If Dvorak solved your RSI, that's awesome, I can understand why you switched, however I don't think this is a causality issue, meaning that I don't think it was Qwerty that caused RSI in the first place. If Dvorak is a good strategy for you to manage the pain, then great, but it's pain management, not a cure.

I also used to configure my machines a lot, going into a yak shaving rabbit hole every time it wasn't functioning properly. I was on Linux back then, but I gave it up and nowadays I'm much happier. The only yak shaving sink I still have is Emacs and I'll get rid of it as soon as I find something better.


	
1337shadow on April 20, 2020 | root | parent | next [–]

Indeed it's just my personal experience, but there's a fact that you seem to have missed: the distance that fingers must walk to type the same text is higher in qwerty than in dvorak, that's the whole point of dvorak and others such as bepo. So, typing in Qwerty is more physical work than typing Dvorak. There are ways to calculate that pretty accurately.
I don't have proof that less finger distance means less hand work means less pain, so maybe you're right, maybe it's just a coincidence.

Or maybe less finger distance means less work which means less tension accumulated in the muscles and then indeed less pain.

Nonetheless, I changed "fixed my RSI" by "fixed my RSI problems" thanks to your feedback, which should clear out the misunderstanding.


	
kqr on April 20, 2020 | root | parent | next [–]

It's also worth mentioning that some of the Qwerty pain can be psychosomatic in origin. Even for me, who hasn't suffered RSI, it was pretty clear that I didn't feel the exertion of Qwerty until I had gotten used to something better (Colemak, in my case.) Once I knew how nice it can feel to type on a keyboard, anything less nice starts mentally hurting – and I'm sure, for some people, also physically.

	
hermitdev on April 20, 2020 | root | parent | prev | next [–]

> The only yak shaving sink I still have is Emacs and I'll get rid of it as soon as I find something better.
I'm a long time Vim user, myself (and no, not looking to spark a holy war here). One observation I have about my own habits is that I subconsciously slap the ESC key every time I'm done with something, even if I'm in a non-modal editor like Notepad or SQL Management studio. It's just become so ingrained in me that I can't stop doing it. Mostly because there's no negative feedback loop associated with doing it.


	
hultner on April 21, 2020 | root | parent | next [–]

Same here, it's a pain when working with spreadsheets where this clears the cell, drives me nuts. Also I always turn on caps lock when using someone else's computer since I rebind esc to caps.

	
yoloClin on April 20, 2020 | root | parent | prev | next [–]

I fee like UI/UX needs to be completely redesigned and dvorak isn't even half (or any) of the battle. Single-key copy/paste, undo/redo, keyboard driven UIs, etc etc. I say this as I type on dvorak and while I love it, I also regret it due to interoperability issues and breaking of common keyboard shortcuts (I miss Ctrl+CVX).
But I just aliased `us` and `dv` to setxkbmap shortcuts, so thanks for that!


	
james_s_tayler on April 20, 2020 | root | parent | next [–]

That's what Colemak is for. IMO no one should consider learning Dvorak these days.

	
kqr on April 20, 2020 | root | parent | next [–]

Dvorak still has the alternating hands rhythm that Colemak lacks, being more built on one-handed finger rolls than Dvorak. Most people I speak to prefer the finger rolls of Colemak, but some people (like me) prefer the alternating hands rhythm of Dvorak.
(That said, I still use Colemak because it happens to work better for my native tongue. If I only wrote English, I would have been a Dvorak user.)


	
yoloClin on April 20, 2020 | root | parent | prev | next [–]

What I'm talking about is a UI/UX problem that cannot be solved by key layout, I even experimented with a Ergodox and ended up in keybind hell really quickly because supporting one application others very quickly.

	
mresposito on April 20, 2020 | root | parent | prev | next [–]

I switched to Dvorak after I got RSI about 10 years ago. It was so bad that I couldn't type anymore. So I taught myself Dvorak because I did some research and it seemed it could have been helpful. I was pretty desperate to solve my problem, and it seemed Dvorak could help since your hands travel less than Qwerty.
Fortunately, I haven't had RSI ever since I switched to Dvorak.

Switching to Dvorak is quite tedious, and I wouldn't recommend it unless you have a good reason to do so.

Regarding internationalization, I write in English, Spanish and Italian in Dvorak with no problem. It really doesn't any difference to me as compared to Qwerty.


	
lytefm on April 20, 2020 | root | parent | prev | next [–]

> And good luck finding Dvorak versions for other languages.
I definitely recommend Neo2 for German users. Ctrl + a,x,v and c still with the left hand. Letter frequency optimised for German first, English second. All programming symbols easy accessible, additional layers for Greek symbols and math notation. Also, users of non-US layouts have much more to "gain" by switching from query-like layouts: Due to umlauts or accents, brackets tend to be way harder to reach.


	
edwinyzh on April 20, 2020 | root | parent | prev | next [–]

You reminds me about learning a foreign language you need to think in the foreign language without the translating part.

	
michaelmior on April 20, 2020 | root | parent | prev | next [–]

Any tips on how to start then? I used to know all the letters in Morse code but it was basically just learning the chart as you mentioned. I've since forgotten most of the alphabet.

	
vidanay on April 20, 2020 | root | parent | next [–]

It's called Koch's method.
http://www.justlearnmorsecode.com/koch.html

https://www.qsl.net/n1irz/finley.morse.html


	
michaelmior on April 20, 2020 | root | parent | next [–]

I'll have to try that. I've tried some acoustical training before, but not starting at full speed like Koch's method.

	
Tempest1981 on April 20, 2020 | root | parent | prev | next [–]

Once you learn all the letters, as you walk around, pick various items you encounter, and say their name in Morse code. A car: "dah-dit-dah-dit. Dit-dah. Dit-darrrr-dit."
For fun, pronounce "R" like a pirate would.


	
michaelmior on April 20, 2020 | root | parent | next [–]

Thanks for this one. I haven't heard this suggestion before. I'll keep that in mind if I ever try to pick it up again :)

	
jfalcon on April 20, 2020 | root | parent | prev | next [–]

If you talk to old school CW operators, they will all tell you that you need to go beyond the letters and into the words and sentences like you skim over a paragraph. In fact, if you operate morse too slow, many of these old schoolers don't want to talk to you as you break the "flow". Which is the exact thing you're wanting to achieve in morse fluency.

	
verall on April 20, 2020 | root | parent | prev | next [–]

It's just like a language. If you want to read morse code look at that chart, but if you want to hear it quickly you'll need to do audio flashcards. I n Anki it's pretty easy to add cards that have no text but sound which should be all you need.

	
feminintendo on April 21, 2020 | root | parent | prev | next [–]

I wonder if the same thing is possible with sight reading music.

	
anonytrary on April 20, 2020 | parent | prev | next [–]

> you'll be bumping the speech rate up to 1.75-2X normal speech
Try 5-6x. I've met some blind people who listen to audio so fast, it sounds like noise to me. As someone who isn't blind, I regularly listen to lectures and audiobooks on 1.75-2.5x (depending on the base rate) without issues, but 6x is just something else entirely.

> Typos will be easily spotted as they just won't "sound right".

Really good way to describe this. It's almost like listening to an audio fingerprint which magically indexes the answer in your brain. My blind friend was doing law, but I'm sure she did something similar to help her map the dependencies between laws.


	
kolanos on April 20, 2020 | root | parent | next [–]

> Try 5-6x. I've met some blind people who listen to audio so fast, it sounds like noise to me. As someone who isn't blind, I regularly listen to lectures and audiobooks on 1.75-2.5x (depending on the base rate) without issues, but 6x is just something else entirely.
Yes, indeed. I was writing that original comment for someone just getting started. What ends up happening is no matter how fast the speech rate is, you'll eventually get used to it and your brain will grow impatient. So you'll bump the rate up another 0.25 and rinse and repeat. Pretty soon it's incomprehensible to anyone but you.

I'm pretty sure anyone can get used to 2X+ without much effort. After a while you'll wonder how you ever listened to speech at a normal rate. Be careful, though, as I've found myself grow impatient listening to people in real life and can trace it back to my high-speed listening habits.


	
officemonkey on April 20, 2020 | root | parent | next [–]

When I listen to audiobooks or podcasts, I can easily bump up the speed by 25% until I hit 2x. Faster, depending on the reader and the type of book. If it's a good non-fiction reader like Edward Herrmann, I can go faster. If it's a fiction book with an expressive reader using accents and emoting, I sometimes can't get beyond 1.5.

	
yummypaint on April 20, 2020 | root | parent | next [–]

Some content is even improved by being sped up. Doubling the speed made me enjoy cartalk again. Having to constantly wait through multiple seconds of hacking laughter was breaking the flow.

	
selckin on April 20, 2020 | root | parent | prev | next [–]

Does it affect listening to music? Does it also trigger the impatience?

	
kingbirdy on April 20, 2020 | root | parent | next [–]

I'm not blind but I do like to listen to podcasts, YouTube, etc at 1.5-3x and I've certainly caught myself getting annoyed at how long it takes to listen to a new album I want to check out, but I've never tried to speed it up, I just remember to relax and enjoy it.

	
cormacrelf on April 20, 2020 | root | parent | prev | next [–]

> My blind friend was doing law, but I'm sure she did something similar to help her map the dependencies between laws.
Nobody calls them dependencies, but yes, you would be able to hear if `Re Estates Croft, deceased [2018] NSWSC 1303` were wrong.


	
wlohsen on April 21, 2020 | root | parent | prev | next [–]

i'm sighted and super adhd. i run my kindle at 4x. its super annoying because they speed the words but not the spaces. half a god damn sentence could go by during their spaces

	
leeoniya on April 19, 2020 | parent | prev | next [–]

> Also, because code is no longer represented visually as blocks, you'll find you're building an increasingly detailed memory model of your code.
does refactoring by other team members have an outsized negative effect on this?


	
cbarrick on April 20, 2020 | root | parent | next [–]

Relatedly, are there challenges or benefits to reading diffs in this model?

	
WalterBright on April 20, 2020 | parent | prev | next [–]

Since I work on the D programming language design, I'm interested in any advice you can give on what would make a programming language design more accessible to blind programmers.

	
hnick on April 20, 2020 | parent | prev | next [–]

> You'll be amazed how good your memory will get without the crutch of sight
That's all really interesting. I personally have a problem with my thoughts in that I need to "sound out" or read them aloud in my head. This sometimes really slows me down, I mull over a thought until it sounds right. Especially when I'm tired I can get stuck in a loop. And it applies when reading too, I can force myself to read faster but usually I slow down and hear every word out of habit.

I know some people don't have this inner voice. I wonder if it means they can think more freely.


	
roganartu on April 20, 2020 | root | parent | next [–]

I can’t speak to physical blindness, but I have aphantasia[0] which basically means I cannot voluntarily invoke my minds eye. Up until I found out about it last year, I thought that “visualizing” things was a metaphor for thinking, as I didn’t realize people could actually see things without looking at them.
There are varying degrees of aphantasia. For context, I am completely unable to “see” anything in my mind. I do not dream either. If I close my eyes and think of something, nothing happens visually, though I can more easily remember things about whatever it is. I would describe it more as complete emptiness, instead of darkness (as darkness implies there is something there at all). I have been like this since I was born.

One thing that stood out to me in GPs comment was that programmers tend to visualize code to reason about it. I asked a bunch of my friends after finding out my minds eye is blind and they all said they do it at least sometimes, some of them do it constantly.

I obviously don’t, but I can say that I have a very good memory (in general, but also for code), and often find myself capable of context switching between related bits of code faster than many of my peers. I rarely reach for a diagram for explanation, however I do use them very regularly for documentation and explaining designs because I find other people seem to be able to process that format better.

I don’t know if my aphantasia contributes to any of this, these are just things I’ve noticed I’m good at. One thing I am terrible at, however, is design.

[0] https://en.m.wikipedia.org/wiki/Aphantasia


	
vekker on April 20, 2020 | root | parent | next [–]

> For context, I am completely unable to “see” anything in my mind. I do not dream either. If I close my eyes and think of something, nothing happens visually
Correct me if I'm wrong but I suspect a lot of self-diagnosed cases of aphantasia are due to the ambiguity of language (specifically, English)... Qualia lost in translation.

I suspect nobody really sees something visually when thinking/imagining something, in a sober waking state (barring maybe a few rare exceptions or psychotic disorders). If you would see something superimposed on your visual field, with closed eyes or not, that would be called hallucinating.

For me, "seeing it in my mind's eye" is a different kind of "seeing": there is no visual input.

Example: imagine a tree. Where are the branches? Where are the roots? Where are the leaves? What color do the leaves have? Etc... You can answer these questions, right? The place where you find the answers is where the mind's eye is. I've yet to meet someone who actually sees the tree with the same visual clarity as if looking at an actual tree.

Dreaming is somewhere in between for me: it's usually visual, but not of the same visual quality as waking life, except when lucid. A lot of people don't remember their dreams, but that doesn't mean they don't have them. Ask yourself right after waking up in REM sleep (don't even open your eyes if you can): what just happened? What were you thinking?


	
quintushoratius on April 20, 2020 | root | parent | next [–]

> I suspect nobody really sees something visually when thinking/imagining something,
I suspect that you may have some degree of aphantasia.

Visualizing something encumbers the same visual processing as sight does. Personally I have a hard time visualizing something and looking at something at the same time. I can only pay close attention to inside or outside, not both simultaneously. (Casual attention, like half-listening, is possible otherwise I'd be a terrible driver.)

To think of it another way: when you say "I've yet to meet someone who actually sees the tree with the same visual clarity as if looking at an actual tree," maybe you should ask some more. I can look at things, close my eyes, and continue studying them up to the limits of my memory and original attention.

Aphantasia seems to come in degrees, not a binary "have it"/"don't have it."


	
vekker on April 21, 2020 | root | parent | next [–]

Perhaps... what I mean is this: close your eyes and visualize a tree. Do you literally see the tree in the darkness of your closed eyelids in front of you, visually? Even just vaguely? If not, then imho that's not really visual. I "see" the tree, but it's a different kind of seeing. Perhaps that's a degree of aphantasia, but how would I know? ;)

	
wizzwizz4 on April 21, 2020 | root | parent | next [–]

I do, but I haven't practised the skill much lately so it's not as vivid as it used to be.
It's more like a second virtual desktop than superimposed; it takes up the same coordinates, but there's a clear distinction between "real" and "imagined" objects (unless I'm particularly tired, but that's closer to "hallucinating" than "visualising").

I used to be able to visualise things in positions relative to real objects, but at the moment I can only manage floating in the air, such that focusing on the position of imagined objects de-focuses the background, either relative to my field of view (so it moves when I move my head) or in a defined position in space (so it doesn't move when I move my head – though obviously this is limited by my ability to instinctively judge positions and distances, so it often doesn't quite work right when things are moving in complex ways, or I'm moving fast).


	
vekker on April 21, 2020 | root | parent | next [–]

That's blowing my mind right now. First I thought people who can visualize to the point of actually seeing what they visualize were pretty rare. For me what I visualize takes place in a mental space: it's a clear mental image, not a literal visual image.
Have you always been able to do this, because you mention practising this skill? Also, does this only happen after focussing on something, or does it happen spontaneously when thinking? I imagine it would be pretty distracting if someone says for example, "don't think of scary thing X", and then the scary thing manifests visually for you because you are thinking about it.


	
wizzwizz4 on April 25, 2020 | root | parent | next [–]

> I imagine it would be pretty distracting if someone says for example, "don't think of scary thing X", and then the scary thing manifests visually for you because you are thinking about it.
That sounds about right. For me, "don't think of a pink elephant" results in the image of a pink elephant, though if I'm not concentrating on its location it's just… somewhere.

> Have you always been able to do this, because you mention practising this skill?

I think I've always been able to do it – but I haven't been doing it as much since I stopped playing with toys, going outside and generally doing activities where such a thing would be useful, so it's less instinctive.


	
karmajunkie on April 21, 2020 | root | parent | prev | next [–]

Uh yeah, same here. Like, I can remember what my daughter looks like as she sleeps in her crib, but visually what I see (with my eyes closed) is just blackness. I've always thought of it as something akin to a prerendering buffer or virtual display context in my mind. What the parent poster is saying makes me think that for them its more like experiencing an actual display, which seems like it would get really confusing layered onto the visual input from their eyes.
The only time I've ever experienced anything like that I was trying psychedelic mushrooms for the one (and so far, only) time, and so it was literally a hallucination.


	
vekker on April 21, 2020 | root | parent | next [–]

That's an excellent analogy! The mental space is exactly like a prerendering buffer. When asleep and dreaming, there is no overriding visual input, so the stuff in the mental space gets rendered. And I guess some people can access this even when sensory input is present. That must be wild.

	
roganartu on April 24, 2020 | root | parent | next [–]

I had many conversations in the weeks following my original discovery, and this comment thread reflects them perfectly.
Me: There's no way everyone actually sees things and I made it 30 years without knowing.

Everyone else: Yeah I see things.

Me: but, like really see or just remember features?

Everyone else: <some variation of quality, but it was always described visually and everyone agreed it was basically like seeing>

I put "see" in quotes in my original comment simply because that is how everyone I spoke to described it; that it's clearly not physical vision, but it's also clearly a visual experience. I have absolutely zero visual experience when I close my eyes, and I never have, it is simply emptiness.

You seem to describe dreaming as if you experience that visually too, while not being able to do it while awake. It's worth noting that this is not uncommon for people with aphantasia, which is why it is the inability to _voluntarily_ invoke your minds eye. Many people can still dream visually, however I do not. I go to sleep and then simply wakeup with nothing but emptiness in between (not an experience of emptiness as time passes, but more like a time skip).


	
vekker on April 27, 2020 | root | parent | next [–]

Yep, imagining/visualizing something goes without an actual visual experience for me. I've always assumed the same thing applies to most people, but I guess I do have some degree of aphantasia.
I can imagine something, but it's like rendering a layer with the opacity brought all the way down to 0, but my "mental computer" knows it's there and can tell its shape, color, all its features & details in 3D space... without seeing the actual visual image.

Dreaming on the other hand is usually multi-sensory and especially visual for me. Much like being awake or in a VR environment, but with internally generated input.

Have you spend time really consciously investigating your sleep? To the point of interrupting it with alarms etc..? I'm someone who's very interested in my dreams: for years, every night before sleep I wonder what I will dream, sometimes I get lucid during the dream, and when I awake my first instinct is to recall my dreams. I think this is why I dream so much. I wonder if the same thing applies to visualization and whether or not aphantasia is "curable" through consciously exercising visualization.


	
patmorgan23 on April 21, 2020 | root | parent | prev | next [–]

When I visualize some thing I don't literally see it in my field of view but I can still 'see' it. It's similar to audition(hearing in your mind). Read something out loud in your mind or play a song in your head. Its the same thing you don't literally hear it but you do 'hear' it.

	
vekker on April 21, 2020 | root | parent | next [–]

Yes but that was my point: I suspect (I can't be sure of course) that this is a limit of the English language. We call it "seeing", but it's not. If it would be real seeing, you would visually see the thing you are visualizing in your field of view, as if it were literally there (like in a dream).

	
shele on April 20, 2020 | root | parent | prev | next [–]

Hehe, perhaps no and this is the moment when you figure out that you have mild aphantasia. When people say they "count sheep jumping over a fence" it's not a metaphor.

	
vekker on April 21, 2020 | root | parent | next [–]

That's kind of what I've been trying to figure out: when people say they count sheep, do they close their eyes and literally see sheep jumping over a fence as if watching a movie or wearing a VR headset? Even in low resolution... That would be pretty impressive... why would we still need movies and games then? ;)
Of course I can imagine sheep jumping over a fence, even in vivid detail, but this imagining is not really seeing visually like in real life, not even like in a dream. As I said, I would describe seeing things that aren't there (with closed eyelids or not) as hallucinating. Perhaps not being able to do that at will is aphantasia, I don't know, but it would blow my mind if it were


	
funnybeam on April 21, 2020 | root | parent | next [–]

Generally when I’m idly visualising something it is ‘in my mind’s eye’ as you put it. But if I’m really focused and close my eyes then everything else seems to disappear and I’m ‘really’ seeing it, not on the inside of my eyelids but it encompasses my entire visual perception if that makes sense
More rarely I also get it with sounds and then it definitely does feel that the sound is originating externally to my mind

You’re right that these experiences are more like hallucinations but I think they are points on a spectrum rather than separate things


	
malikolivier on April 20, 2020 | root | parent | prev | next [–]

Aphantasia is a condition I have never heard about. Your experience and the description on Wikipedia lets me think I was born like this as well.
I had many arguments with my wife about how I did not have visual dreams and did not see anything when I close my eyes. When she says she sees stuff when she closes her eyes, I always assumed it was some sort of metaphor and it was usual for human beings not to see anything when their eyes are closed.

I think when I "visualize" something, not limited to math and code, I do not see anything per se. Mostly I think my thoughts are directed graphs whose nodes are concepts I have in memory.

May I ask how did you get a diagnosis? And did you learn anything of use thanks to this diagnosis?


	
kedean on April 20, 2020 | root | parent | next [–]

Not OP but...
There isn't a scientific diagnosis, it's more of a self observation kind of thing right now. The reason is that there has been very little research into it so far. You may notice that the wikipedia article is extremely short and most of the references are news articles, opinion pieces, and blog entries. Personally, I've found that the realization has offered slightly new ways of approaching life. It's fun to explain to people how I think and how that may differ from them. Nothing truly changed except perspective.

For reference, I also think mostly in directed graphs. I'm also able to roughly draw a shape in my head, but its very quickly erased and is hyperlocal, like trying to draw in the air with a sparkler.

There is a subreddit, r/aphantasia, but I've found that it's mostly a mix of curious gawkers and bitter people claiming that having it has somehow deprived them of essential life experiences.


	
hsrada on April 20, 2020 | root | parent | prev | next [–]

Not OP but this felt like a simple test - https://twitter.com/backus/status/1091203973246111744
There's the Vividness of Visual Imagery Quiz but that's self-administered and is a questionnaire.


	
LouisSayers on April 20, 2020 | root | parent | prev | next [–]

hmmm... this is interesting.
I think I must have this too. E.g. if I close my eyes and try to visualise the face of someone that I hang out with every day, I can't do it.

If I try really hard, the best I can do is a flash of bits of some photographs I remember. It also starts to give me a headache. I think though, if I want to remember how something physically looks it helps to have my eyes open. Even then it's more like flashes than being able to actually see something.

Mostly when I "visualise" something e.g. the house where I live, I think in terms of how things are spatially connected to one another. It's more like a scene from the matrix - where what I'm remember are more the concepts of things and where they are spatially, rather than what things actually look like. This is pretty much also what happens when I'm coding - thinking in terms of concepts and how things are connected together spatially.


	
whylie on April 20, 2020 | root | parent | prev | next [2 more]

	
solarengineer on April 20, 2020 | root | parent | prev | next [–]

I find myself going quieter when I read faster. I do take pauses to think through what I’ve just read. You may want to try separating reading and thinking, and see if that helps you no longer need to think aloud reach word.

	
Marsymars on April 20, 2020 | root | parent | prev | next [–]

FYI that process is called "subvocalization" - I'm only passingly familiar, but if you search that term there's lots of literature about it.

	
hnick on April 20, 2020 | root | parent | next [–]

Yes that's the one, I forgot what it was called. Always found this part interesting (from the wiki):
"This inner speech is characterized by minuscule movements in the larynx and other muscles involved in the articulation of speech. Most of these movements are undetectable (without the aid of machines) by the person who is reading."


	
baseonmars on April 20, 2020 | root | parent | next [–]

Try gently pressing your finger against your larynx when you read in your head - you'll likely find you read faster - this works for me, although I tend not to bother.

	
hnick on April 21, 2020 | root | parent | next [–]

Interesting tip, I will try it.
The worst thing about the inner voice is it's not just when reading, it won't be quiet at bed time. And I have a tendency to complete thoughts as words. Even if I know where it is leading, and what the conclusion is, it feels like I have to see it through and phrase it correctly in my head. I feel very uncomfortable leaving it hanging.


	
cowb0yl0gic on April 22, 2020 | root | parent | next [–]

Exactly. Sometimes I even feel compelled to complete the sentence more than once (as if I wasn't paying attention enough the first time, so I feel the need to say it again). I think there is a subtle difference between that and "reading without production" (when I try it, it feels more like skimming text; I have to really try to pay attention). To me, reading/inner-speaking feels like engaging with the text; to only be able to "see" words would be lifeless (I'm assuming that some/many/most people can do both).

	
aabbcc1241 on April 20, 2020 | root | parent | prev | next [–]

I also rely on the "inner voice" for reading and writing. But I can skip that when programming. I think it's related to how you learn that language in the early stage.

	
Malp on April 20, 2020 | root | parent | next [–]

Could you expand on how you skip it for programming?

	
aabbcc1241 on April 25, 2020 | root | parent | next [–]

When I am designing the solution, I still have the inner voice. But when I'm implementing in code, I can do it almost "brain-lessly", even fine when listening to music.
I'm not sure how do I do that, but I guess because I do it a lot, so I can do it as familiar as walking?

Edit: Maybe because I didn't learn programming by listening to teacher, instead I learn from books and trials. I guess it's more like walking / playing sport, you don't need explicit inner voice to guide your body movement.


	
milton0825 on April 20, 2020 | root | parent | prev | next [–]

I have this inner voice when reading English, which is my second language. However, if I am reading stuffs in Chinese, I can skim through without the inner voice.

	
cowb0yl0gic on April 22, 2020 | root | parent | next [–]

When I read Spanish (2nd language; not great at it) I sub-vocalize as I do in English. But if there is a long, complex word that I would have to laboriously "pronounce" (but I know exactly what it means ahead of time), I will treat it as a gestalt/symbol (so, it's like "cheating" on the vocalizing), so sub-vocalization isn't actually needed for comprehension, but I'm guessing is a parallel mental action/process (probably correlated with how we learn to read a language and personal characteristics). Maybe non-sub-vocalizing is really just suppressing this parallel processing workflow. (I'm wondering if people who "don't need to do this" could read backwords (accidental pun!) effectively.)

	
herval on April 20, 2020 | parent | prev | next [–]

This is incredible! If you have a couple of minutes, would you mind sharing some of the Mac tool recommendations? I'm not blind, but as someone working on consumer apps, good examples really help!

	
frabbit on April 20, 2020 | parent | prev | next [–]

because code is no longer represented visually as blocks, you'll find you're building an increasingly detailed memory model of your code. Sighted people do this, too, but they tend to visualize in their mind. When you abandon this two dimensional representation, your non-visual mental map suffers no spatial limits
That's a really interesting idea to me, because I have been trying to improve my memory and recall (mostly of things like telephone numbers) using the Major Memory system and the emphasis behind that and similar techniques seems to be constructing visual imagery which encodes other information. So, it sounds like you are saying that you have found other pathways/techniques that do explicitly do not do this.


	
kolanos on April 20, 2020 | root | parent | next [–]

It is entirely possible I'm still using my visual cortex. I was once sighted. When I'm in flow my wife tells me that my eyes spasm as though they're following some kind of pattern in space. I'm not aware I was doing this until she mentioned it. I can say, however, that I'm not visualizing the way I once did. In fact, because I don't have a visual input, conjuring up some kind of imaginary visualization would actually slow me down and be a cognitive burden.

	
DavidSJ on April 20, 2020 | root | parent | next [–]

Thank you for sharing your experience.
Would you say your ability to visualize has declined, or you’ve just favored other methods of thinking?


	
_0w8t on April 20, 2020 | root | parent | prev | next [–]

I tried that as well and it does not work for me. What works is association with some stories. For example, to remember a credit card number I associate each 2 digits with a year that gives an event and then the number is a sequence of events.
What also works for me to train memory is to learn phrases in a foreign language that I do not understand. Surprisingly combining those with text I do understand leads to better recall of the whole text. It is almost as understanding harms memory.


	
renaulth on April 20, 2020 | parent | prev | next [–]

Hi, I am in a similar boat, I still have sufficient vision to code without a screen reader, but my concern has always been about the non-programming tasks that any modern developer is faced with on a daily basis.
In my job I typically spend 3-4 hours a day in the IDE, but but rest of the day is spent looking at production issues and servers, looking at RabbitMQ management UI, etc. The emphasis being on "looking".

I'm just curious as to how a screen reader would allow you to do those things, in a high pressure environment?


	
hansccwolf on April 20, 2020 | parent | prev | next [–]

Do you use the screen reader for your code, too? How do you debug your code?

	
bollu on April 20, 2020 | parent | prev | next [–]

Can you please recommend software for this? which screen reader should I use? how should I configure it? how do you code with it?

	
shrimpx on April 20, 2020 | parent | prev | next [–]

Just curious, is it harder to read white space indentation code like python versus curly bracket code like JavaScript?

	
RobMurray on April 20, 2020 | root | parent | next [–]

I don't really find one easier than the other, but I do use indentation in the same way sighted people do. I find it a lot easier than counting braces in my head.

	
slim on April 20, 2020 | root | parent | next [–]

does indentation sound like a pause in the speech?

	
RobMurray on April 20, 2020 | root | parent | next [–]

NVDA just says "one tab" or "two tabs" before the line of text, but only when the indentation level changes.

	
jedberg on April 20, 2020 | parent | prev | next [–]

> you'll be bumping the speech rate up to 1.75-2X normal speech. You'll be the only one who can understand your screen reader
Huh. I already listen to most podcasts and recorded presentations at 2x. Now you make me wonder if I could process information faster with a screen reader even though my sight works just fine...


	
eden_hazard on April 20, 2020 | root | parent | next [–]

I worked with a blind dev and his screen reader is incomprehensible by everyone but him. It had to be at like 5-6x. Guy was a wizard. Sure he had some disadvantages with vision but the guy was wicked fast and would pump out the most code

	
Drakar1903 on April 20, 2020 | root | parent | prev | next [–]

As someone who also does this, I find that the problem becomes not processing the information, but retaining it, and I haven't found a solution to that yet.

	
ramraj07 on April 20, 2020 | root | parent | next [–]

I doubt regular folks can reach 5x or even 2x with good retention. Perhaps if it's a podcast of people chatting about random things, it's possible, but any intellectually stimulating content you probably will have problems. Visually impaired people probably have an advantage on account of having their entire visual cortex freed up and possibly able to help with this (not sure if it does, neuroscience majors here?)

	
saagarjha on April 20, 2020 | root | parent | next [–]

(As a sighted person) I watch all my videos or podcasts at 2x. Depending on how new or dense the content is, I might have to occasionally dial it back, but I think I do fairly well at 2x (usually, this is only the case if I'm distracted or the slides are going by too quickly as well). Often I can even up it to 3x.

	
jmiskovic on April 20, 2020 | root | parent | prev | next [–]

Maybe retention is worse, but I'm still better off. Higher speeds are more engaging and enjoyable to me, as bad speakers and long pauses matter less. Therefore I benefit from watching more talks and lectures. For better retention it is preferable to occasionally re-watch good talks for spaced repetition.
The Video Speed Controller extension is indispensable part of my browsing experience, mostly for keyboard shortcuts to speed up/down and << >> videos.


	
Ragib_Zaman on April 20, 2020 | root | parent | prev | next [–]

I used to listen/watch everything at 1.5x-2x speed but found a similar result. Now I only increase the speed if it's information I only need to process once (e.g the news) but not remember later (lectures, tutorials etc).

	
okal on April 20, 2020 | root | parent | next [–]

I've been doing that lately (1.5x-2x), but taking notes, and making sure to work on any exercises provided after the lecture. I need notes for retention even at 1x, so it doesn't feel like extra work.

	
john4532452 on April 20, 2020 | root | parent | prev | next [–]

The problem with retaining is independent of processing information speed.

	
gugagore on April 20, 2020 | root | parent | prev | next [–]

I've heard screen readers going way faster (I don't know quantitatively) than what it sounds like when I listen to videos at 2x.
I also think it's important that the screen readers use a "old school" synthesized voice, instead of a voice that sound natural, because each of the phonemes is articulated distinctly.


	
benibela on April 21, 2020 | root | parent | prev | next [–]

I do that, too.
Especially presentations. For most movies, I am only comfortable with 1.25x. In presentations people talk extra slowly. It is a classic advice when learning to give presentations, talk slower. After getting used to 2X speed, it becomes extremely frustrating to listen to a live presentation.

Although even 2x presentations still feels slower than my reading speed as kid. But I cannot speed read anymore since I need glasses


	
xupybd on April 20, 2020 | root | parent | prev | next [–]

I've had the same experience with audio books. I find it's easy with entertainment. In normal speech there is a lot of redundancy. You can miss entire sentences and still follow. I don't this would be the case with a screen reader.

	
Shorel on April 20, 2020 | root | parent | prev | next [–]

You got me curious.
I just put some news interview on YouTube at 2x.

It is fun how even the accents are easily recognizable.

Anyway, this is in Spanish. My guess by reading the comments is Spanish is a much easier language to listen at a faster speed.


	
RobMurray on April 20, 2020 | root | parent | prev | next [–]

If you want to try it, older tts voices such as eloquence are intelligible at much higher speeds than the modern natural sounding voices.

	
Galaxity on April 20, 2020 | root | parent | prev | next [10 more]

	
tambarskjelve on April 20, 2020 | parent | prev | next [–]

"Now I will have less distraction." - Leonard Euler upon losing his right eye vision

	
hutzlibu on April 20, 2020 | parent | prev | next [–]

"When you abandon this two dimensional representation, your non-visual mental map suffers no spatial limits. "
My visual representation is definitely 3 dimensional and I am not sure what you mean by abandoning it? I mean, code is statement blocks and controll flow elements. It is data and connections between them at execution. I can imagine, not being visual gives you much more focus and fewer distractions on the mental map, but is it really different?


	
simias on April 20, 2020 | root | parent | next [–]

I don't have this super-power but I can imagine that it could work.
When I'm digging into foreign code especially, I always find myself overwhelmed by the intricacies of the call stack. I get lost in layers, confused by indirections, I lose track of where I was a few steps before or what specific conditions lead me down a particular path.

I guess that if you're blind you need to become a lot better at keeping track of things for basically the entirity of your daily routine. Imagine merely cooking without sight. You need to know where all the ingredients are, you lack a lot of feedback on what you're doing to catch mistakes (did you add the pasta to the water yet or not?). I assume that you need to constantly build a fairly detailed map of the world in your mind where the rest of us can just wing it, basically. I can believe that this skill might make you a better coder.


	
hutzlibu on April 20, 2020 | root | parent | next [–]

"I don't have this super-power but I can imagine that it could work."
I don't think it is a super power, I believe every programmer does that, I just maybe do it a bit more conscious. And when I have to process new code, that just takes time, like for everyone else .. and doing it in a hurry will mean a wrong mental model.


	
kolanos on April 20, 2020 | root | parent | prev | next [–]

> My visual representation is definitely 3 dimensional and I am not sure what you mean by abandoning it? I mean, code is statement blocks and controll flow elements. It is data and connections between them at execution. I can imagine, not being visual gives you much more focus and fewer distractions on the mental map, but is it really different?
An earlier commenter described it like a directed graph. I think that's a pretty good way to describe it. As for whether it is different, I don't know how others think. But one thing I do know is that this is how my mind worked for non-analytical thought before I went blind and still does. I'm just more aware of it now that I don't visualize as much. I only really visualize things these days as a way to communicate ideas with sighted engineers.


	
hutzlibu on April 20, 2020 | root | parent | next [–]

Hm, maybe the word "visualize" is distracting, from what I meant. When I programm, I also do not visualize it, in the meaning, that I have a graphical picture in my head. (At least not all the time )
I mean the mental graph and flow of the program in my head. And being a visual person, I can translate it to somehing graphical, but it does not neccesarily mean it is graphical. But thinking about it, gave some me interesting insights. ("insights" again, a word from a visual dominated world)


	
jaggirs on April 20, 2020 | root | parent | prev | next [–]

I imagine it is like representing code with a flowchart. Suddenly you are a lot less restricted by your mental representation and you can draw arrows any way you want.
I often experience something similar, even though I'm not blind: When I'm doing algebra I sometimes get stuck 'looking' at the equation and systematically trying patterns on it. But what works much better is to really load the equation into your brain so that you have an intuitive idea that guides your pattern matching. If you are blind, I suppose you always need to load it up.


	
blzaugg on April 22, 2020 | parent | prev | next [–]

Would you be willing to chat privately with a colleague of mine going through a similar lost of sight transition?

	
herenorthere on April 20, 2020 | parent | prev | next [–]

Wow. Great response. These comments are why I come here. Thank you!

	
aws_ls on April 20, 2020 | parent | prev | next [–]

Just wanted to say, Thank you!

	
StandardFuture on April 21, 2020 | parent | prev | next [–]

This makes me wonder if we would benefit from forcing children to occasionally train their brains via partial sensory deprivation. Maybe there are aspects of the human brain that go unexercised because we strive to constantly and always use all of our senses for everything simultaneously as much as we possibly can.

	
ddevault on April 19, 2020 | prev | next [–]

I recommend using a tiling window manager - they allow you to organize windows logically, rather than spatially.
I have also written some plugins for using Vim (text editing) and Weechat (IRC chat) with speech synthesis:

https://git.sr.ht/~sircmpwn/dotfiles/tree/master/lib/vim/vim...

https://git.sr.ht/~sircmpwn/dotfiles/tree/master/.weechat/py...

And I have a script for Sway (a tiling window manager) which also gives you audible cues:

https://git.sr.ht/~sircmpwn/dotfiles/tree/master/bin/swaytal...

All of this is somewhat incomplete, but it's a good starting point if you want to get used to them and work on improvements while you're still sighted. Good luck, and let me know if I can be of service.


	
hatsunearu on April 19, 2020 | parent | next [–]

Are you sighted?

	
ddevault on April 19, 2020 | root | parent | next [–]

Not perfectly, and not for long. I wear glasses, but they only do so much, and my vision worsens every year. I use some light assistive technologies on the daily - higher contrast, large fonts, zooming in on things. To test the tools I linked to, I spend the occasional workday with all of my monitors turned off, relying on these tools to get work done. I also have a braille reader that I occasionally pull out.
I have a different philosophy and approach to using computers than most, and that affects my views on accessibility. Stapling a screenreader onto a graphical application, for example, to me seems like the wrong approach. Text-based applications are much more accessible, and these are my bread and butter. To this end, my work on accessibility involves making more information available as text, organized logically rather than spatially, and making it easier to access and manipulate that information with vision impairments (and other sorts of impairments, too).


	
cookiengineer on April 20, 2020 | root | parent | next [–]

As someone preparing for this, too, I still have no clue on how to rasterize the code quickly. Voice always feels inefficient and braille feels like a joke when it comes to the amount of information being displayed. Do you have suggestions? Do you transpile code?
I also use VIM because it feels like the best case of voice integration or braille integration...but I have no source for how to actually do this properly. Are there good reading materials on this?

Currently I am trying to build a semantic web browser, also with the intention to filter out all legacy crap CSS that prevents interaction with the content [1] and the idea of being able to train CNNs with the content... but when it comes to code, my memory of it seems to suck so hard that I always have no clue of what I wrote the day before.

[1] still alpha as hell: https://github.com/cookiengineer/stealth

(Also a long time observer of your work here. You are one of the good guys. Stay awesome!)


	
ddevault on April 20, 2020 | root | parent | next [–]

Even with the aid of sight, I don't read an entire codebase at once. I follow the logic, a few lines at a time, as it moves through the parts I'm interested in. I use grep to find the things I ought to read. With this approach, I build a mental model of the codebase quickly, with lots of blanks - but with detail in the areas I'm focusing on.
As for how to actually rig up braille readers on Linux, check out BRLTTY. It's pretty straightforward. I was working on an Alpine Linux spin which was more accessible out of the box, but I got discouraged by various circumstances and shelved it.


	
mwcampbell on April 20, 2020 | root | parent | next [–]

I think your use of the term "braille reader" might be causing some confusion. I know you use brltty. But do you use its text-to-speech output, or do you use a refreshable braille device that moves little pins up and down to form braille cells? If the former, I'd suggest referring to brltty as a screen reader.
Also, do you run brltty on a Linux text console, or in a terminal window in your Sway session?


	
ddevault on April 20, 2020 | root | parent | next [–]

I use a refreshable braille display. I use it mainly on the Linux console, but I've been thinking about rigging something up for use with Sway.

	
mwcampbell on April 20, 2020 | root | parent | next [–]

Wow, I underestimated your seriousness about adapting to alternate output methods. Did you have to buy that braille display at your own expense? As I'm sure you know, they're expensive. How recently did you start learning braille? Has it been a challenge for you to learn to read it with your fingers?

	
ddevault on April 20, 2020 | root | parent | next [–]

I bought a cheap used one off of eBay, it wasn't too expensive - a few hundred bucks. I know that nicer ones can get up there, though. Learning braille was an unusual challenge, but I didn't find it especially difficult. It only took a couple of days to become reasonably proficient with it. The braille display I ended up with is pretty nice despite its price tag, it has a good finger-feel to it and has a nice set of basic features.
The most difficult thing for me would be learning advanced levels of braille, which involves memorizing shortened forms of many words, but I reckon I can get away with just using long-form for a good long while.


	
zeveb on April 20, 2020 | root | parent | prev | next [–]

> I also use VIM because it feels like the best case of voice integration or braille integration
Check out Emacsspeak: http://emacspeak.sourceforge.net/

It’s written by T.V. Raman, a blind engineer at Google by way of Cornell.

Among other things, with it you can just use the built-in Emacs browser!


	
blzaugg on April 22, 2020 | root | parent | prev | next [–]

Would you be willing to chat privately with a colleague of mine going through a similar lost of sight transition?

	
carapace on April 20, 2020 | root | parent | prev | next [–]

(BTW, stealth sounds awesome!)

	
cookiengineer on April 21, 2020 | root | parent | next [–]

Thank you :3 It’s still a ton of work. I heavily underestimated the networking and parsing part...and had to invent a testrunner that can test networking implementations with known buggy situations (e.g. simulate fragments like on 2g slow mobile situations).
I totally switched my workflow to Test Driven Development due to the last 6 months parsing CSS and http1.1 responses.

It’s amazing how much server infrastructure violates w3c specs and recommendations. Something like partial content (206) is mindblowingly crappily implemented on servers these days when it comes to keep alive sockets and multiple range requests. Some servers reply only with chunked encodings, even for frames with less than 256 bytes (looking at you, cloudflare dns), some only send back a single stream...some just send back ranges without headers...

And I only support http1.1 as of now, because http2 and 3 are both kinda undebuggable and there’s no reference-class testsuite to test against implementations.


	
carapace on April 21, 2020 | root | parent | next [–]

That sounds brutal!
Still, it seems like a very worthwhile project. I'm fed up with modern browsers myself (the "megabar" on Firefox 75 is, somehow, the last straw for me.)

I'm going to keep an eye on Stealth because it sounds like the perfect browser/proxy engine for an experimental UI I'm working on.

Cheers! Good work and good luck. :)


	
mwcampbell on April 20, 2020 | root | parent | prev | next [–]

On the days that you turn your monitor off, how do you do email? Do you also have a speech synthesis plugin for your aerc email client? Or do you use it with a generic screen reader for terminals? If the latter, which screen reader?
I've found that, counter-intuitively, a fully accessible GUI program with a good GUI screen reader is easier to use than a screen-oriented terminal program with a screen reader. The trouble with the latter is that the user has to understand visual concepts like highlighting, the meaning of special characters, etc.

Of course, an application or plugin that's tailor-made for doing a particular task with speech output is better than either of those other choices -- as long as you don't have to use an application that's overall inferior (e.g. using the Emacs/W3 web browser with Emacspeak as opposed to a mainstream browser).


	
ddevault on April 20, 2020 | root | parent | next [–]

>On the days that you turn your monitor off, how do you do email?
Poorly. I want to improve aerc in this respect. For the time being, I use a mix of my braille reader (brltty) and piping emails into vipe so I can use my vim plugin to read them.


	
mwcampbell on April 20, 2020 | root | parent | next [–]

Have you ever used a conventional GUI screen reader? Something like NVDA for Windows, VoiceOver for Mac or iOS, Talkback for Android, or Orca for GNOME? Reading a web page or an HTML email with one of those might give you a different perspective on what's possible, and specifically, how much better the experience of reading a hypertext document with a screen reader can be, compared to something like BRLTTY.

	
ddevault on April 20, 2020 | root | parent | next [–]

I have used Orca, and I can't stand it. The main advantage is a global place to route text for speech synthesis, but I simply hate using screenreaders to use applications which are not designed with accessibility in mind. There are few better solutions for browsing the web, though. I've been meaning to try lynx with brltty.

	
mwcampbell on April 20, 2020 | root | parent | next [–]

> I simply hate using screenreaders to use applications which are not designed with accessibility in mind.
I can understand that. I think many of us have just accepted that it has to be this way, because we're a minority and we want to have all of the advantages of using mainstream applications (economies of scale, active development, not being at an extra disadvantage compared to sighted peers, etc.).

Of course, you don't fit the profile of a "mainstream consumer" when it comes to computers. In particular, I gather that you take full advantage of the hackability of free software. So using custom TTS plugins as opposed to a clunky generic screen reader is just an extension of that overall approach to using computers.


	
RobMurray on April 20, 2020 | root | parent | prev | next [–]

If Orca is the only GUI screen reader you have tried, I can understand you being put off. Try NVDA on Windows with Firefox and you'll never look back. NVDA is open source btw.

	
RobMurray on April 20, 2020 | root | parent | prev | next [–]

I would strongly recommend switching to Windows - the screen readers are just so much better than anything on Linux. I agree with the other person who said that GUI programs are easier to use with a screen reader. At least on windows, this is definitely the case.

	
tapia on April 20, 2020 | root | parent | next [–]

You know that Drew is the maintainer of sway, right? I don't think switching to Windows is an option here :P

	
RobMurray on April 20, 2020 | root | parent | next [–]

From my experience, using the web in lynx or with emacspeak isn't an option in 2020. You just have to have a modern browser in conjunction with a well maintained screen reader. I wish I could use linux for everything, but if I want to be productive on the web I have to use Windows.

	
mwcampbell on April 20, 2020 | root | parent | next [–]

> From my experience, using the web in lynx or with emacspeak isn't an option in 2020.
Even 20 years ago the limitations of those options were clear to anyone who was willing to face reality. I was in denial for a while. (Note: I have limited vision, but I spent a lot of time helping blind people use Linux back then.)

Of course, Lynx and Emacs/W3 aren't the only alternatives. I think an interesting option would be a specialized browser UI based on headless Chromium.

In any case, I'm guessing Drew won't give up his free-software ideals easily, if at all. And he's a capable enough hacker that I'm sure he'll come up with a solution that works well for him.


	
gopaz on April 19, 2020 | root | parent | prev | next [–]

I would love to read more about this in your blog! Sway is my daily driver and I love it!

	
matt_the_bass on April 19, 2020 | root | parent | prev | next [–]

It seems like this level of organization would be beneficial to the sighted community as well. Is this a value that you use to market to customers?

	
ddevault on April 20, 2020 | root | parent | next [–]

Yes.

	
innocentoldguy on April 20, 2020 | root | parent | prev | next [–]

Which do you prefer, screen-readers or braille readers? Also, how long did it take you to be able to feel the braille effectively?

	
ddevault on April 20, 2020 | root | parent | next [–]

I don't like screen readers, but I liked teaching applications to speak themselves based on text commands. I like to combine this with a braille reader and use both in different contexts. For example, a braille reader is more unambiguous with punctuation, capitalization, etc, but speech synthesis is necessary to catch my attention for a notification from a non-active application, and is more comfortable for reading natural language. It's worth reiterating, though, that I don't need these tools (yet), so people who depend on them daily may have a different opinion.
Braille is easy, I could read it reasonably well with just a couple of days of study.


	
blzaugg on April 22, 2020 | root | parent | prev | next [–]

Would you be willing to chat privately with a colleague of mine going through a similar lost of sight transition?

	
dicknuckle on April 20, 2020 | parent | prev | next [–]

As a side note, weechat runs beautifully in Docker. I access it with Glowingbear but though a terminal it would also be trivial.

	
bear8642 on April 20, 2020 | parent | prev | next [4 more]

	
zw123456 on April 20, 2020 | prev | next [–]

I started my career at Bell Labs in the 80's and one engineer there made a huge impact on me. I learned more from him that any other single person I have worked with since. He suffered from progressive myopia so he had a rig with a camera and a big screen and a huge monitor. He coded slower than everyone else, but in a way, that was his secret power because his code almost never failed in testing. Also, he was brilliant and I learned more about hardware and software from him that I did in Masters EE program. Also, he had this insight about the balance between when to use hardware and when to use software that I think is somewhat lacking today (discussion for another day). A lot of people have said that he was the inspiration for the character in the movie Sneakers (Whistler) could be he was really well know but passed away some time ago. I recall a time when we had a big meeting with a lot of executives and he had long hair and a beard and after the meeting one of the big wigs said to me "who is the guys that looks like Jesus, he is a genius". Sorry that I am going on a bit, I cannot even begin to understand what you are going through, but I can tell you that you should not underestimate the impact you can have on others. I wish I had better words here, I wish I knew more about what to suggest to help you technically, but all I know is that someone dealing something with something similar to you meant a great deal to me personally and professionally. Best wishes.

	
Endlessly on April 20, 2020 | parent | next [–]

Meat of your comment to me is this phrase, “he had this insight about the balance between when to use hardware and when to use software that I think is somewhat lacking today” - would you attempt to clarify what you’re expressing he would have said about balancing the design of how software & hardware work together? Thanks.

	
zw123456 on April 20, 2020 | root | parent | next [–]

Sorry I have not been monitoring this.
Here is what I learned back then. What we were working on was an automated system to monitor data circuits, which back then were basically modems connected to a dedicated audio circuit. They called it a private line data circuit.

The problem back then of course was that you essentially needed a way to sample the audio modem circuit and do analysis of it. We had written some code on a Symbolics computer that could do the analysis (that was the old timey LISP type AI computer).

The trick was how to get the samples without a person having to jack in and record it or whatever. Today this seems trivial but it was more complicated back then. We brainstormed on it (he had a sharp ear BTW). We ended up building a device that had some custom hardware on it that then interfaced the ADC over DMA to a 68000 processor and could monitor multiple circuits etc. and fed that to the Symbolics which could predict all sorts of things.

Anyhow, it taught me how you could sort of combine the two to offload some stuff to HW but still keep the flexibility of SW.

I see a lot of similar types of trade offs today. Now of course we have FPGA's for hardware that can do a lot but you still need interface circuitry to the real world depending on the application. I have worked on a lot of projects where there is a tendency to always reach for software or vice versa.

What I think happens is you might have a company let's say company 'G' that is basically a software company and everyone they hire knows software really well. And they interview and hire more software people. Then if they were to let's say... buy a company that makes HW, perhaps phones, they have a difficult time. Or they try to build out a network and struggle.

Then maybe you have another company 'V' and they are good at building a network but they don't understand software so if they buy a software company it is difficult for them.

Then you have a company Apple that has always done both and they seem to make better choices.

I am sure a lot of you out there can think of similar examples.

This is just my observations based on my experiences. The more a team has a diverse set of experiences and background (HW, SW, Network) the better the chance of getting an optimal solution.


	
ozim on April 20, 2020 | root | parent | prev | next [–]

I think now it would be comparable to having good clue which workload should be server side vs which workload should be client side in web dev. Back end devs want to do all on back end and front end guys want to do all in front end. Then you get issues like API returning too much data that someone can abuse or hundreds of calls with ajax to setup something....

	
Vinceo on April 20, 2020 | root | parent | prev | next [–]

I'm interested in hearing more about that as well.

	
gautamcgoel on April 20, 2020 | root | parent | next [–]

Me too.

	
racl101 on April 20, 2020 | parent | prev | next [–]

> but in a way, that was his secret power because his code almost never failed in testing.
Reminds me of the stories about Stephen Hawking and how it seemed like he was just sitting there miserable but he instead he was thinking very deeply and how his disabilities forced him to be able to think visually in his mind and compensate because he would only get a quick chance to absorb input.


	
richrichardsson on April 20, 2020 | parent | prev | next [–]

I always assumed Whistler in Sneakers was a reference to https://en.wikipedia.org/wiki/Joybubbles

	
hoistbypetard on April 20, 2020 | root | parent | next [–]

I did as well. I can't find a reference at the moment, but I'm almost positive the authors of the screenplay said as much in the early 90s.

	
zw123456 on April 20, 2020 | root | parent | next [–]

I am sure you are right, everyone on HN is always right about everything :) Probably those of us that loved Louie just felt like he was like that.

	
hollander on April 21, 2020 | parent | prev | next [–]

That 80s guy sounds like a genius, but this guy is probably not, like most of us. He may be intelligent and hardworking, but a genius is on a different level. Another thing is that progressive myopia is something different than going completely blind and deaf. That is this guy's fate. How do you communicate then?

	
downerending on April 20, 2020 | parent | prev | next [–]

> coded slower [...] his code almost never failed in testing.
Huh. I've had this most of my career as well, especially in the latter years. I do consider this a secret power, but many of my colleagues (especially the younger ones) view it as a fault.


	
zw123456 on April 20, 2020 | root | parent | next [–]

Me too, I have always been slower, not a fault at all. If you code slow and make fewer mistakes then you may end up being faster in the end than someone who cranks it out but has to redo it 3 times when problems are found in testing. Of course there are I am sure super programs who can do both, but I haven't seen one yet.

	
RobMurray on April 19, 2020 | prev | next [–]

I have been blind since birth. I recommend downloading NVDA, a free screen reader for windows, and getting used to using it for basic computer use. Getting used to hearing the speech as fast as possible is key to being able to use it efficiently.
You said you have hearing loss. Is it bad enough to make speech output useless? If so you would need to learn braille.

I would never try front end design as I have no idea what it should look like, but you may still be able to do it if you have an image in your head of what you are trying to achieve. You would just have to ask someone to check it.

Python is not a problem with screen readers, contrary to what someone else said. The screen reader can be set to report the indentation level. In fact I can't think of any text based language that wouldn't be usable with a screen reader. Tools are a different story. Some work and some don't.

Feel free to contact me if you would like any more information, weather it's about computers or not. rob at mur.org.uk


	
mwcampbell on April 20, 2020 | parent | next [–]

Not only is Python not problematic when using a screen reader, but there are blind programmers who gladly choose Python over other languages. The NVDA screen reader, mentioned in the parent comment, is developed primarily by blind programmers, in Python. The Orca screen reader for GNOME was written by a blind friend of mine, in Python. I have another blind friend who wrote and sold several accessible apps for Windows and Mac using Python. And those are just a few anecdotes that I'm aware of.

	
warent on April 20, 2020 | root | parent | next [–]

I've come to understand that this is actually a very powerful reason to actually use tabs instead of spaces for indentation. I used to have the irrational preference of using spaces, but once I learned that screen readers work better with tabs, it was a no-brainer from then on.

	
RobMurray on April 20, 2020 | root | parent | next [–]

I don't mind weather it is tabs or spaces, as long as they are not mixed.

	
warent on April 20, 2020 | root | parent | next [–]

Are you telling me a programmer used their blindness to trick me into thinking their personal preference was absolutely necessary!? Man this war is ruthless!

	
RobMurray on April 20, 2020 | root | parent | next [–]

I don't know, maybe it made a difference to them, but NVDA just says for example "4 space" or "1 tab".

	
DonHopkins on April 20, 2020 | root | parent | prev | next [–]

You might also want to check out "dragonfly", which is a Python based system for integrating applications with speech recognition and synthesis, and includes a large library of pre-existing modules for many popular applications:
https://pypi.org/project/dragonfly/

Project description:

Dragonfly offers a powerful Python interface to speech recognition and a high-level language object model to easily create and use voice commands. Dragonfly supports following speech recognition engines:

Dragon NaturallySpeaking (DNS), a product of Nuance

Windows Speech Recognition (WSR), included with Microsoft Windows Vista and freely available for Windows XP


	
zachrip on April 20, 2020 | parent | prev | next [–]

Fortunately my hearing loss is stable and correctable using hearing aids.

	
warent on April 20, 2020 | root | parent | next [–]

This was my biggest concern. I'm so relieved to hear this and have very high hopes for you!

	
O_H_E on April 20, 2020 | parent | prev | next [–]

This is a bit off-topic, but may I ask: how did you get introduced to programming?
Feel free to not answer :D


	
RobMurray on April 20, 2020 | root | parent | next [–]

Basic on a C64 in the 80s. I had just enough sight to read the screen if I set it to all caps and adjusted the contrast on the TV.

	
istorical on April 19, 2020 | prev | next [–]

Biggest advice, start programming with your monitor covered up by a sheet or turned off now while you still have the option to turn it back on to figure out what you just did.
Gradually have it turned off for longer periods without turning it on to see what's happening until you can do it without seeing it at all.


	
kolanos on April 19, 2020 | parent | next [–]

On Macs, there's a screen curtain feature that can be turned on and off. The shortcut is FN+CTRL+OPTION+SHIFT+-. It might be different on older versions of OSX, used to use the right option key, but I've forgotten the keystrokes.

	
ValentineC on April 19, 2020 | root | parent | next [–]

It looks like the shortcut depends on what one's VoiceOver triggers key are.
Here's the Apple doc for anyone interested: https://support.apple.com/en-us/HT201443


	
asadotzler on April 20, 2020 | root | parent | prev | next [–]

NVDA on Windows also offers a screen curtain. So does TalkBack on Android.

	
simonebrunozzi on April 19, 2020 | prev | next [–]

I don't have any answer for Zach (the poster), but I feel a big need to share my feelings about this.
I'm sipping a decent morning coffee, I'm in Japan, whereas my home is San Francisco. I've been here for ~5 weeks, trying to escape the coronavirus disaster that is unfolding in the US, and trying to enjoy spring in Japan as well. I'm lucky enough to be able to afford a few weeks abroad without too many money worries.

Work is a disaster. The last ~4 years of my life have been both unlucky (e.g. recently I was offered a highly lucrative executive job in SF, only to see the CEO change his mind on the whole operation - not on me specifically - at the last moment) and badly handled by me.

My professional career essentially came to a halt and so far didn't recover. I still keep my cool, but I am a bit worried about what's going to happen in the future, especially given the current situation with the virus.

And now, in all of this, few minutes ago I've read "I'm going blind, how to prepare", and my perspective suddenly changed. It's as if something clicked, and I can now "see" the world as it is.

I'm incredibly lucky. Most of us here are incredibly lucky. Zach, you probably didn't mean it, but today you somehow triggered a very positive reaction in me. I wanted to let you know.

I also wish you best of luck with your condition, and hope that you will manage to have a great life despite a deteriorating health.


	
zachrip on April 19, 2020 | parent | next [–]

This experience has been so humbling. I grew up in a rough household and when I had barely scraped myself past high school graduation and gotten work as a SWE and eventually made it to some fortune 50 companies I thought I had life figured out. Then I started bumping into things and struggling playing my favorite games. My eye doctor casually telling me I have RP and discovering I'd be going blind in the parking lot post appointment really knocked me on my ass.
But there are silver linings. I was born with severe hearing loss but it's stable and corrected with hearing aids. I don't have any balance issues (I have USH2A, which only results in hearing/vision loss). I'm so fortunate to have experienced all that I have and all that I will. Thank you for the kind words.


	
nzealand on April 20, 2020 | root | parent | next [–]

> discovering I'd be going blind in the parking lot post appointment
That is devastating.

Did you get a second opinion?


	
zachrip on April 20, 2020 | root | parent | next [–]

Yes this was 2 years ago, I ended up at Columbia Ophthalmology in NYC and they were able to get me DNA tested after another local doctor failed to assist me in doing so. USH2A is the name of the specific condition if you're curious.

	
dundercoder on April 20, 2020 | root | parent | next [–]

I have two mutations on USH2A. It would be spectacular if someone could repair the whole gene.

	
advectus on April 20, 2020 | root | parent | next [–]

Really appreciate both of your stories. Any chance you could share the specific mutation? Such a difficult to understand condition given that both of you have one or more mutations in USH2A but have different stories around hearing loss

	
foofoo2 on April 22, 2020 | root | parent | prev | next [–]

Photobiomodulation seems promising
PHOTOBIOMODULATION IN INHERITED RETINAL DEGENERATION (2012)

"A growing body of evidence indicates that exposure of tissue to low energy photon irradiation in the far-red to near-infrared (NIR) range of the spectrum, (photobiomodulation or PBM) acts on mitochondria-mediated signaling pathways to attenuate oxidative stress and prevent cell death. "

https://dc.uwm.edu/cgi/viewcontent.cgi?article=1007&context=...

I have no experience with it, just lots of reading during this downtime.


	
hycaria on April 20, 2020 | parent | prev | next [–]

>I'm sipping a decent morning coffee, I'm in Japan, whereas my home is San Francisco. I've been here for ~5 weeks, trying to escape the coronavirus disaster that is unfolding in the US, and trying to enjoy spring in Japan as well. I'm lucky enough to be able to afford a few weeks abroad without too many money worries.
I would say you're selfish or dumb enough to be moving in a time where people should just stop those behaviors and stay wherever the fuck they are... And this is not even considering you know, GHG and stuff.

But globally this comment is so full of oneself I'm amazed.


	
forgotmypw23 on April 19, 2020 | parent | prev | next [–]

I had a similar experience with my career, and after a lot of trying and moping, I recognized it as an opportunity to work and do what i love, without compromise. is there anything that you've been dreaming of working on?

	
simonebrunozzi on April 20, 2020 | root | parent | next [–]

Yes, exactly this. I am working on this. Nothing big to announce yet, but slowly getting there.
What is it that you love doing? Mind sharing a bit?


	
mburst on April 19, 2020 | prev | next [–]

I would recommend trying to study up on Section 508 compliance https://www.hhs.gov/web/section-508/index.html. It's a set of rules that all government orgs in the US must follow for making sure their content is accessible. If you do end up becoming visually impaired you'll end up with a unique perspective on building accessible websites.

	
iandanforth on April 19, 2020 | parent | next [–]

Are there consulting firms that specialize in 508 audits? Seems like a potentially lucrative field given the activist lawsuits that happen in this area.
https://www.natlawreview.com/article/ada-website-litigation-...


	
Endlessly on April 20, 2020 | root | parent | next [–]

Yes, there have been professionals offering all types of services for 508 ever since it came out. Might be wrong, but none of the companies I have seen offering these services seems notably successful as a result of their 508 services. Compliance based services are rarely a money maker, though in some situations given predictable need and clients, compliance based services are frequently a way to build relationships that lead to more lucrative deals.

	
extra88 on April 19, 2020 | parent | prev | next [–]

The W3C's Web Content Accessibility Guidelines (WCAG) are the basis for many accessibility laws and more useful for actually learning what makes a site accessible.
If you don't already place an emphasis on using semantic HTML markup, learn more about that, it's the foundation of accessible design.


	
folkhack on April 20, 2020 | root | parent | next [–]

Sighted developers should use a screen reader on their own sites to get an idea of what's up. Very simple changes with semantic HTML can make a world of difference. It's sometimes as simple as swapping tags for their semantic counterparts.

	
eli on April 19, 2020 | parent | prev | next [–]

Most US universities need to comply too

	
mburst on April 20, 2020 | root | parent | next [–]

Yea my first programming job was translating word docs to accessible html for universities. The jobs around section 508 compliance seem mainly government related

	
TriNetra on April 20, 2020 | prev | next [–]

Legally blind, I'm a full stack engineer (and a solution/security architect) with extensive experience in building both backend and frontend (web) systems. I work on Windows with Jaws screen reader. I use autohotkey extensively to super charge my productivity. I had worked as employee with Microsoft (and others) in the past and have been running my consultancy cum product company since 2016. Email in profile
- You can do frontend coding but certainly some assistance is needed for verifying the UI design. In any decent sized project, Personally I prefer my sighted colleague to handle look and feel (mainly the CSS part - though I know CSS) as I feel it's not a productive use of my time. It's always better to have a UI specialist anyway. FE devs have lot of other things to do especially when it is SPA based.

- Visual studio is good for development and debugging (for .net related languages at least). If you're on windows use autohotkey and setup shortcut keys and hotstrings to automate repetitive actions and text. For instance I prefer bash for using Git and have setup commands like 'gtcom' which expands to 'git add . (newline) git commit -am ''. I just have to type the comment then. Since you'd be working exclusively via keyboard it's important you do more with less hits to reduce strain on your wrists.

- Another important thing is to be able to find alternatives to UI tools your colleague are using but which could be highly inaccessible. Your programming skills and knowledge of system internals will help you with that. Do not settle with any tool which decreases your productivity considerably just because the team is using it, as you'll be judged based on your deliverable and not what tools you used.

I second what @kolanos has written. Programming is mostly a mental job (no pun intended) and everybody has to load a representation of the program in head before one can start fleshing out good code. PG has also written about it


	
whitehouse3 on April 20, 2020 | parent | next [–]

> Programming is mostly a mental job (no pun intended)
I'm drawing a blank. What's the pun here?


	
TriNetra on April 20, 2020 | root | parent | next [–]

The term mental is often used in the region I live to indicate psychologically disturbed person. So clarifying that I didn't mean anything other than the literal meaning of mind related job.

	
newtwilly on April 20, 2020 | root | parent | prev | next [–]

I think the pun has to do with the word 'job', which is an abstraction used for CPU scheduling, among other things.

	
notaplumber on April 20, 2020 | root | parent | prev | next [–]

'mental' can often also mean 'crazy'.

	
LouisSayers on April 20, 2020 | root | parent | prev | next [–]

Mental: relating to disorders of the mind.

	
blzaugg on April 22, 2020 | parent | prev | next [–]

Would you be willing to chat privately with a colleague of mine going through a similar lost of sight transition?

	
TriNetra on April 22, 2020 | root | parent | next [–]

sure, email in profile

	
ilamont on April 20, 2020 | prev | next [–]

Seek out HN user CAMLORN. Quoting from a response in an old thread about screen readers:
I'm the blind dev who refactored a huge chunk of the Rust compiler [0]. I'm at roughly 800 words a minute with a synth, with the proven ability to top out at 1219. 800 or so is the norm among programmers. In order to get it we normally end up using older synths which sound way less natural because modern synthesis techniques can't go that fast. There's a trade-off between natural sounding and 500+ words a minute, and the market now strongly prefers the former because hardware can now support i.e. concatenative synthesis.

https://news.ycombinator.com/item?id=20883169


	
EnderMB on April 19, 2020 | prev | next [–]

I'm very sorry to hear that.
I'm not sure where you're based, but I've heard of Usher's Syndrome after hearing a talk from someone named Molly Watt, who also has Usher's Syndrome. It might be worth dropping her a line, as in her line of work she might be able to either give some advice, or point you towards someone in your situation that can help.

https://www.mollywatt.com/


	
taywrobel on April 19, 2020 | prev | next [–]

I’m not sure if you’re willing to consider a change of employer, but when I worked at Apple, their accessibility team never ceased to amaze me. They have several blind, as well as deaf and paralyzed engineers on their A11Y team. I’d argue that’s a large part of why the accessibility story on iOS is as good as it is. Having engineers that have various disabilities work on the accessibility of their products helps ensure that solutions genuinely solve problems in an effective way.
I know you may not want to have your disability define your career, but if working to help others that have the same affliction appeals to you, let me know. I’m not there any more, but still have connections I could reach out to for you.


	
xenadu02 on April 20, 2020 | parent | next [–]

Apple definitely has blind employees both working in accessibility and in other groups.
I only mention that to say don't discount yourself even if you're blind (or deaf, etc). There are plenty of engineering teams at Apple that would be happy to have you.


	
AlexCoventry on April 20, 2020 | root | parent | next [–]

> don't discount yourself even if you're blind
One of the strongest programmers I've ever met was blind, and they were working on security software, not accessibility issues.


	
Shebanator on April 20, 2020 | parent | prev | next [–]

I work at google, and have had the privilege of working with some amazing blind programmers. Apple and Google are both investing a lot in a11y.

	
dundercoder on April 19, 2020 | prev | next [–]

I have just the visual component of Ushers, I’ve got about 5 degrees left of my visual field. I never really did front end work, but I still regularly do back end, and project management.
I haven’t moved to non visual coding yet. Instead I have optimized for the vision I have left. I have a very bright monitor, very bright lights in my office (overhead) and have learned to make a place for everything, and always put things back in their place.

Never underestimate the amount of time you can lose from looking for something that is only slightly out of place. Be it a pen, your glasses, or a USB stick.

So long as you are able, don’t disclose your impairment to anyone in an employment situation during the interviewing or new hire phase. Discrimination is awful and frustrating and illegal, but it is still the norm and it’s easiest to just avoid it if you can.


	
Endlessly on April 20, 2020 | parent | next [–]

Curious, while I agree discrimination is wrong, deeply impacts everyone in a number of ways, why at the very least would you not want to know prior to interviewing, being hired, etc - if a company was biased?
If it’s not clear, there are ways to detect this, it’s legal, and if I thought there was any opportunity to easily detect biases that might impact me, I would do so.


	
dundercoder on April 20, 2020 | root | parent | next [–]

Because I honestly think that most discrimination is unconscious. Many people conducting interviews have never met a legally blind person and it can make them uncomfortable. Generally, I have found people don’t hire others who make them uncomfortable, or at the least, would put other candidates ahead of them.
Once hired and able to demonstrate ability, people are less likely to let that initial uncomfortableness get the better of them.


	
isidorn on April 20, 2020 | prev | next [–]

Hi,
My name is Isidor and I work on VS Code. Here's some hopefully useful advice:

* Join a screen reader mailing list and get to know the commnity: Program-L is the name of the general list and there is one list for Orca Screen Reader in case you are a Linux user

We try hard to make VS Code accessible so in case you decide to use VS Code:

* We have a gitter channel for accessibility which you can join https://gitter.im/Microsoft/vscode-a11y

* You can file issues and provide feedback as we try to improve continously https://github.com/microsoft/vscode

* Feel free to ping me @isidorn on either of those or on Twitter. And let me know if we can help more.

I wish you all the best


	
bramd on April 20, 2020 | prev | next [–]

No time to read the whole thread right now, but feel free to get in touch (email is in my profile). I'm blind since birth and have had various software development jobs. These days I shifted a bit and started my own company doing digital accessibility consulting.
If you'll become totally blind (e.g. need to transition to a screen reader some day), I would advise you to leave the Mac platform. The built-in screen reader seems good at first, but falls down in complex work. Support for web browsing is suboptimal (Firefox is a no go) and the screen reader is only updated in the regular OS X release cycle. This means bugs will stick around a long time and it's totally unclear what the status of a bug is. Also, hackability of VoiceOver is limited. I find that a must for a tool that I am 100% reliant on.

I'm very sympathetic to Linux and run it in many places (Raspberry pi, home server, some stuff on VPSs), but I think Windows is a better accessible desktop experience now. Microsoft is trying tu push accessibility hard in most of their projects, this is often lacking in open source projects. Even if OS projects want to do a good job at accessibility, they usually miss the manpower of knowledge to do so. Especially given Docker and WSL (Windows subsystem for Linux), it is easy to run Linux-based development workloads on a Windows box.

My editor of choice these days is VS Code. That team is also very active on the accessibility of their editor. I use the free and open source NVDA screen reader. If something in NVDA is broken, I can at least look at their Github if any work is being done and if needs be throw in a few patches myself.

So, summing up I would say: find out a set of accessible tools to do your job, learn them before you get blind. Relying on vision until the very latest moment will give you an enormous productivity hit when the switch to 100% screen reader use comes (based on my experience training low vision and blind users in a previous job).

From what I've seen from the thread, others have already touched on some advantages of being a blind coder. You'll get a better mental model of your code out of necessity and depending on your team/employer you can be a more valuable team member because you also bring knowledge of software accessibility.

Hope this helps and good luck!


	
oaabhilash on April 19, 2020 | prev | next [–]

I am a Software Engineer and my spouse has limited vision. These is based on my experience 1. Use your remaining time with vision to be really really good at touch typing. I mean, you should be able to any character without looking at the keyboard. 2. My spouse finds these magnifiers really useful to read small text. Hoping you can use these if you can retain some vision. https://www.amazon.com/gp/product/B01EV0XP8S/ref=ppx_yo_dt_b.... 3. Learn how to use the Accessibility features in Windows, Mac, Android, Linux and ios. Learn the shortcuts. You should think about how to use the tools for low vision (magnifier) and no vision (Audio aids and other stuff) 4. Learn the ADA standards for applications and be an advocate for visually impaired. At my own work, I try to use every opportunity to push for more accessible applications. However there so many software applications deployed to Enterprise every day, without any accessibility considerations. Being a software engineer, I implore you to be a champion for this cause. 5. People who grew up using computers from the 90s are turning older now. Next 10 to 20 years they will demand the applications they use to be accessible. As an industry, we will need to change the way we do business. 6. Know that this is going to be Mental Health / emotional challenge as well. Get help if needed

	
csdreamer7 on April 19, 2020 | prev | next [–]

Please watch this video on the i3 desktop environment. The windows are managed and can be controlled by keystrokes.
https://www.youtube.com/watch?v=b_RL_Q8CR78

From 2015, a blind engineer uses emacspeak to write C++.

https://www.businessinsider.com/how-blind-google-engineer-wr...

I have read some HN comments in the past from blind engineers. Not sure if they are frontend.


	
vharish on April 20, 2020 | parent | next [–]

I would like to second this. Any tiling window manager could be of great help.

	
acdha on April 19, 2020 | prev | next [–]

I’m really sorry that you have to face that and wish I had better advice.
My employer is the U.S. federal government and I would highly recommend considering looking at government (or contractor) jobs: we take very seriously the need to serve ALL of the public and front-end engineers who deeply understand and value accessibility are extremely valuable contributors since they can provide the subjective guidance which no level of automated tool or guideline can provide.

The GSA’s 18F has a great guide to building accessible websites:

https://accessibility.18f.gov/

(The BBC guide is also good: http://www.bbc.co.uk/guidelines/futuremedia/accessibility/)

I’d treat that as both an area to learn the tools for personal reasons - e.g. get comfortable with the accessibility tools in your favorite operating system - and as an area to learn more. There’s a pretty good story for web accessibility these days but a lot of people do not make much use of it and someone who can make an entire team more efficient has a somewhat uncommon selling point.


	
tuukkao on April 20, 2020 | prev | next [–]

Blind since birth full stack software developer here. I might not be able to relate to your situation completely but here are some of my experiences:
>Are there blind frontend engineers?

I don't think so. It's not that you can't do frontend at all, just that you can't do it completely. Something like copying the layout from a visual mockup doesn't really work unless someone describes the mockup to you, and even then it might not be 100 % correct, though i'd say your experience as a sighted frontend developer would definitely help there. Thankfully (in this case anyway) SPA's tend to be so complex these days that there is plenty of work to do without touching the actual layout. My frontend work has consisted mostly of refactoring and writing various integrations. Occasionally I've written some complete features where I've laid out a rough version of the UI and someone sighted in the team has finished it off for me. This strategy has worked out relatively well for me in the past. However I'd say doing solo frontend work is sadly a no-go.

> What kinds of software engineering lend themselves to someone with limited vision? Backend only?

Basically anything non-visual works out. Backend, yes, but also the business logic of SPA apps as well as devops work.

> Besides a screen reader, what are some of the best tools for building software with limited vision?

- A good editor which is accessible and has an extensive set of keyboard shortcuts. Visual Studio Code and Eclipse are the two editors that I use in my day to day work.

- Terminal. It's often much quicker to do things like text manipulation, version control and devops administration there, since you don't have to waste so much time going through information that you don't need. I've found git gui's to be particularly useless. Web browsers and editors/ide's are basically the only gui tools that I use.

Feel free to hit me up if I could be of any help.


	
chrisdone2 on April 19, 2020 | prev | next [–]

If i went blind tomorrow I would invest heavily in:
1. Emacs and Emacsspeak in particular. Emacs is the richest text-based user experience out there; imagine if all Terminal apps were configurable and scriptable under the same coherent framework. This is why Emacsspeak is an incredibly valuable asset that I would lean heavily on in the event of vision loss.

2. I would invest heavily in making sure that I have a very trivial way to deploy Chrome user extensions or similar such that I could write my own screen readers, document explorers, etc. tailored to my own liking. The only thing close to Emacs is the DOM with JavaScript as it’s Elisp. A lot of people gripe about the web, but the fact that almost all my apps come under the same pliable DOM means I can manipulate without vision almost everything. See e.g. vimperator.

These two things mean that you could do most of your job as-is, with assistance from colleagues.

As you’re a full stack developer, you’ll find point 2 easy. And point 1 is hard but a worthy investment. Emacs is older than the web and will probably outlive it.

I would probably also look at using tree sitter to make screenreading code more efficient at the AST level, because code is parsed linearly but we read it with random access.

I’d start working with my screen turned off or covered with paper if I knew ahead of time, that way I could start training. Honestly, computing-wise I wouldn’t be that worried about losing my vision. It’s the rest of life that’s harder.

Best of luck to you! Drop me a PM if you’d like some pointers on my two bullet points.


	
dannypgh on April 20, 2020 | parent | next [–]

> Emacs and Emacsspeak in particular. Emacs is the richest text-based user experience out there;
My naive expectation is that non-visual editors like ed and ex would be easier to use than visual editors like emacs and vi, but I'm curious to learn more about how people work here. How well do visual editors interact with screen readers? The screen readers would presumably need to offer an interface to reread parts of the screen, and this seems redundant with the non-visual editors that take commands to print like ranges.


	
josephkern on April 20, 2020 | root | parent | next [–]

Emacs has a unique feature as well, it can become the entire gui for anything you are trying to do; web browser, email client, IRC client, etc. all converted into plain text.
I even had it setup a few years ago to send and read tweets.


	
shakna on April 20, 2020 | root | parent | prev | next [–]

I go temporarily blind at various unpredictable times, so I'm not 100% in the non-visual bucket, but I am sometimes. (Simplifying grossly).
I find next to no difference between vim, nano, and Sublime Text for useability under a screen reader. You can focus, grab menus, issue macros, all the same.

For the most part, the reader won't jump back to re-read something to you, unless you ask it to. But you can make it jump between real panes and text panes in much the same way.

(There can be a little configuration involved, for both curses and graphics based applications, depending on your reader, but it's generally a one-time setup that someone else has done first.)


	
mcv on April 19, 2020 | prev | next [–]

I have no experience with being blind, and I can't imagine what it's like. I can only wish you the best, and hope it progresses as slowly as possible.
I do know one reason why a blind front-end developer can be very valuable for a company: there are a lot of blind people out there, and they need to be able to use the web too. For this reason, a lot of companies care a lot about accessibility, and so do a lot of developers. But despite those best efforts, those developers keep dropping the ball without even noticing, because they don't experience it. As a blind developer, you will notice when something your team has built, doesn't work for blind people. This can be very valuable in the right situation.


	
gostsamo on April 20, 2020 | prev | next [–]

Hi, A blind python developer here. You can do the job and though it has its frustrations with inaccessible tools, there're always alternatives. The two best things that you can use for web development are VS Code, because Microsoft are currently in "we love accessibility" phase of their product cycle and doing a good job of it, and emacs because it gives you a text-based os at the cost of a somewhat steep learning curve. People are using braille displays though it is not unavoidable. As a screen reader, you can use emacs speak with emacs, orca in linux, voice over on MacOs and IOs, and NVDA for Windows. Specially for web devs, there is an NVDA addon that can help object positions in web pages and has some other nicities if you are the type to do front end. Developer tools in all browsers have some more work to do before being fully accessible so there will be some issues there. If you need some more info, program-l@freelists.org is a blind-dev community with experienced visually impaired devs. Feel welcome anytime.

	
Waterluvian on April 19, 2020 | prev | next [–]

I just want to throw this out there, just in case you haven't deeply considered it. I'm sure others will answer your question more properly.
Have you considered that maybe you don't want to be doing software engineering and with this precious remaining time would rather prepare for something entirely different? Not sure what your financial situation will be or if you live somewhere with sufficient social support, but if you're going to be blind for life (and you're very young), optimizing for employment (ie. "I'm already a software engineer, may as well commit to that") might not be the best way to live a full and fulfilling life.


	
cortesoft on April 19, 2020 | parent | next [–]

I am confused why his diagnosis makes any difference... this isn't a fatal disease, so he has no fewer years to live than the rest of us.
If he thought being a software engineer was what he wanted to do to live a fulfilling life before his diagnosis, why would that change now?


	
frosted-flakes on April 20, 2020 | root | parent | next [–]

Because programming without sight is hard. It's definitely doable and could very well lead to a fulfilling life. Or it might not. Maybe there are other careers that he might be better suited for and where his disability won't be as much of a hindrance. If so, he still has time while he can see to prepare for a career change.
Basically, the GP is telling the OP to consider all of his options and not to box himself into software engineering just because that's what he does now.


	
miki123211 on April 20, 2020 | root | parent | next [–]

> Maybe there are other careers that he might be better suited for and where his disability won't be as much of a hindrance.
I'm blind myself, and I consider software-engineering to be one of the nicest options out there, at least in my country. Sure, there are difficulties, but not as many as in other fields. Computers can be accessible, and accessible tools can usually be found.

A blind person becoming a software engineer is a realistic option. a blind person becoming... almost anything else is not. As a blind person, career prospects are pretty limited, and someone who already is a software engineer has a huge advantage, compared to someone who i.e. invested n years of his life into becoming a surgeon.


	
sn on April 20, 2020 | root | parent | prev | next [–]

Maybe it's not programming without sight that's hard, but working with sighted programmers who use tools that aren't compatible with screen readers.

	
cortesoft on April 21, 2020 | root | parent | prev | next [–]

Being without sight is hard, period. Software seems like one of the easier jobs to do while blind, actually.

	
wlesieutre on April 20, 2020 | root | parent | prev | next [–]

I think “Remaining time with vision” is the intended reading, as in if there’s some other career OP wants to switch to, it would be easier to do now

	
maerF0x0 on April 20, 2020 | root | parent | next [–]

or even as simple as "Go see the world instead of spending your remaining sight on screen reader software."

	
soneca on April 19, 2020 | parent | prev | next [–]

I am failing to see where are you coming from with this. If anything, changing careers to software development made me live a more fulfilling life in the last 3 years.
What would be your suggestion for the best way to live a full and fulfilling life?


	
Waterluvian on April 19, 2020 | root | parent | next [–]

I'm glad it's fulfilling for you. It is for me too. What I said wasn't an indictment on software engineering as a source of joy.
I think many 24 year olds have spent so much of their recent years thinking about their career that they might miss the fact that there's so much more to life. This time might be better spent in other ways too. I just want to nudge this individual towards considering those things too.


	
kolanos on April 19, 2020 | root | parent | prev | next [–]

Do what you're passionate about. You're going to have a learning curve no matter what, might as well enjoy the ramp up as much as possible.

	
arthurofbabylon on April 19, 2020 | parent | prev | next [–]

This advice is universally applicable. We should be returning to first principles in our own lives - although, it’s so hard to do so.

	
Tijdreiziger on April 19, 2020 | parent | prev | next [–]

Going blind doesn't preclude OP from having to make a living, right? We'd all rather be optimizing for other matters than employment, but most of us don't seem to have that luxury.

	
jimohalloranau on April 20, 2020 | prev | next [–]

A couple of years ago I was staring down the barrel of giving up a 20 year career in software development due to a degenerative eye condition.
I can't tell you how many hours I wasted chasing parse errors in PHP code because I literally couldn't see the difference between a "." and "," anymore.

My solution ended up being transplant surgery to replace one of my corneas, which has largely restored vision in one eye. I still use a lot of large fonts, high contrast, etc, but I'm able to manage much easier on a day to day basis.

I had a wonderfully supportive employer, so when it was clear to me that unless something changed dramatically (i.e. surgery) I would no longer be able to do my current job we sat down (at my instigation) and discussed what this might look like in terms of both what sort of role I could continue to do, and what I wanted to do (not always the same thing, and the latter is important).

My manager at the time said something which has stuck with me. He said that (paraphrasing) the thing he really valued was the care, thought and attention I paid to the work I did. And that the way that had been expressed was through fingers on keyboard writing code. We just needed to find a way of capturing that thought and turning it into code a different way.

We never fully made the transition into a completely different role because my surgery meant I was able to continue (after 20 years I still love coding and didn't want to entirely give that up). But for me, that was going to mean spending more time with junior developers, coaching, mentoring, etc. I didn't want to manage people, so moving up the chain into management wasn't an option for me. But Project Management, might be an option that allows you to leverage some technical skills, but be less dependent on your vision.

So, if your employer is amenable, don't try to do this alone. See what changes can be made to accommodate your needs. Having a degenerative condition where you're not going blind overnight is an advantage, because it means you can work with your employer to adapt your role over time to suit you.


	
webczat on April 20, 2020 | parent | next [–]

Partially sighted people are less productive than blind people. You had problems with seeing difference between characters, but if you would have used a screenreader it would just unambiguously tell you which one it is... From my experience people with very low vision will generally do far more spelling errors when typing on a phone than me (and I am not comfortable typing on a touch screen).

	
keiferski on April 20, 2020 | prev | next [–]

Try and read Borges’ essay on blindness.
Some excerpts:

There were the books, but I had to ask my friends the titles of them. I remembered a sentence from Rudolf Steiner, in his books on anthroposo­ phy, which was the name he gave to his theosophy. He said that when some­ thing ends, we must think that something begins. His advice is salutary, but the execution is difficult, for we only know what we have lost, not what we will gain. We have a very precise image-an image at times shameless-of what we have lost, but we are ignorant ofwhat may follow or replace it.

I made a decision. I said to myself: since I have lost the beloved world of appearances, I must create something else. At the time I was a professor of English at the university. What could I do to teach that almost infinite lit­ erature, that literature which exceeds the life of a man, and even generations of men? What could I do in four Argentine months of national holidays and strikes? I did what I could to teach the love of that literature, and I refrained as much as possible from dates and names.

https://www.gwern.net/docs/borges/1977-borges-blindness.pdf


	
synthmeat on April 19, 2020 | prev | next [–]

There's fair amount of useful information here https://news.ycombinator.com/item?id=18522497

	
vilvadot on April 19, 2020 | prev | next [–]

There is this guy who is pretty well known in the spanish dev community:
https://twitter.com/kastwey

https://www.xataka.com/otros/soy-ciego-nacimiento-asi-mi-tra...

He often talks at conferences about his situation and setup, so if you understand spanish you might be able to find quite a lot on this. Also it might be worth a shot contacting him for more info.

Best of luck with your new adventure.


	
esoteriq on April 20, 2020 | prev | next [–]

Hello! I have Type I Usher myself and my vision tanked when I was 27 (~8 years ago). I'm a writer, so I can't give you much programming advice but I've been through the gamut in terms of technology and life changes. I'm happy to share what has and hasn't worked for me. My email is in my profile.
I do want to say one thing, though: It absolutely sucks at first but you'll adapt. One day at a time.


	
elviejo on April 19, 2020 | prev | next [–]

Use a text editor such as Emacs or Vim.
Migrate from front end development to backend...

Learn to live in the command line.

Take car of your soul


	
shrimp_emoji on April 20, 2020 | parent | next [–]

Inevitably, whatever happens, you keep on trucking
It's a circular but effective way to coupe


	
WheelsAtLarge on April 20, 2020 | prev | next [–]

I recommend you work on your support network now. As you get less able you begin to retreat more on to yourself and your family and less towards the people outside your comfort circle. Make an effort to meet new people and make new friends, now. Also, you will want to stay home more as you feel less comfortable with your abilities, so create habits that will force you to go out and interact with people. For whatever reason, many people are uncomfortable with the disabled, they aren't trying to be jerks but it's hard for many, so if people get used to you early then it will be so much easier on you in the long run. One advantage of knowing what's coming is that you can change your behavior now so you can better deal with your changing abilities.
If you haven't yet, get in contact with the local Braille Institute so they can help you.

An interesting thing about humans is that we get used to whatever life brings us. Problems that seemed impossible to accept and deal with when you are facing them will suddenly be very manageable once you have to deal with them directly.

Be strong and good luck!


	
nickhuh on April 19, 2020 | prev | next [–]

I don't have any experience programming without visual aids; and you've probably already thought of this aspect though I'll mention it just in-case: if I were facing a similar situation, I would look into long-term disability insurance and see if there's anything I can do on that front. That way, I could still pursue being productive with blindness or deafblindness, but would have less economic pressure while doing so.
Many employers offer a combination of short-term and long-term disability that will provide income (in some cases until you retire) in the event that you can no longer work.


	
tmnster85 on April 20, 2020 | prev | next [–]

My one year old daughter is a survivor of bacterial meningitis, she had to have a bilateral craniotomy to help get the infection under control. This left her with moderate brain sesquale. She is with us today, she has cortical visual impairment. While my daughter situation is a little different. These comments give me so much hope. Thank you. It really means the world after a tough weekend.

	
sn on April 20, 2020 | prev | next [–]

My company (prgmr.com) gave a presentation about hiring our first blind engineer at SCALE last year:
https://www.socallinuxexpo.org/scale/17x/presentations/accid...

https://www.youtube.com/watch?v=FvrQPdt1X30&feature=youtu.be

We hired another blind developer who occasionally does some frontend work. If any sort of visual layout is involved, that obviously needs review, but he's able to add on to existing pages. He's also trying selenium for testing the visual layout.

It will probably be more of a challenge for you since you're having to learn to deal with lack of vision as an adult rather than having been blind since a young age. In your position I'd seek out advice specifically from others who have gone through the same process.


	
tibbydudeza on April 20, 2020 | prev | next [–]

I have a colleague who has RP (Retinitis pigmentosa).
He is a SAP front end developer and uses normal laptop/ keyboard running Windows 10 with the addition of a screen reader called Jaws and an IPhone.

He lives close to work and lives on his own and walks to the office unassisted or uses uber further out ... the only issue is when there is a crowd and then we help him get to the canteen for example.

Obviously his audio acuity is way above the norm , his screen reader is probably set at over 300 words per minute.

Also another thing is we make sure the office layout remains the same as he has memorized the layout.


	
jka on April 19, 2020 | prev | next [–]

While I don't yet know a ton about the accessibility software development community, I've discovered Deque Labs[1] while looking into some accessibility tooling.
They have really good resources and training around accessibility for the web, and some of the software they develop[2] is incorporated into Google Lighthouse.

Their guides and videos might help you get a sense for how other people use alternative access methods to interface with the web.

With both the skills to write software and a deeper understanding of the use cases you'll be well-positioned to help improve things for a lot of people - I'm sure it could be tough at times, but stick with it, and best of luck to you.

[1] - https://www.deque.com/services/accessibility-empathy-lab/

[2] - https://github.com/dequelabs/axe-core


	
smanatstpete on April 19, 2020 | prev | next [–]

I work with many engineers who became blind in a variety of ways. If you provide your email address, I can introduce you to them. Here is my temporary email (docesar172 at lagsixtome dot com) if you do not want your contact to be published.

	
3boll on April 19, 2020 | prev | next [–]

Hey, there you have a few references that could be of some help!
Google: https://www.businessinsider.com/how-blind-google-engineer-wr...

Visual Studio: https://www.youtube.com/watch?v=94swlF55tVc

Forzano (Amazon) https://www.youtube.com/watch?v=57P_dCEPtRw, https://blog.aboutamazon.com/working-at-amazon/blind-since-b...

Wishing you the best, J


	
reyalteya on April 20, 2020 | prev | next [–]

I am a totally blind software engineer. Was also not born blind, but our difference is, I am already blind when I became a software engineer.
However, I made a career shift a few years back due to my frustrations to inaccessible work tools, plus the company where I worked before is not that inclusive. I was disheartened, but it turned out to be a blessing in disguise because the interesting world of digital accessibility opened up for me.

Just thinking.. maybe we can collaborate. From someone who was once sighted and became blind in a not so very young age, maybe we can collaborate. I am very willing to teach you the ropes. not being a software engineer of course. I believe you’re already an expert in that. But more of learning how to be comfortable with being blind while growing in the tech world.

Hope to chat with you soon.


	
atdrummond on April 19, 2020 | prev | next [–]

I have hired blind developers in the past and would do so again. Happy to share thoughts on an accessible workplace or discuss a position any time: alex@gatepay.co
I would also echo the comment made regarding government positions. There are quite a few compelling coding jobs in the public sector and the government seems to take their responsibilities with regards to workplace needs quite seriously.


	
fatiherikli on April 20, 2020 | prev | next [–]

I'm not sure about the technical parts, but I was a member of an organization which aims blind people to ride bicycle by using tandem bicycles. So the concept is, non-blind person riding the bicycle and blind person pedals while sitting on the back. I did a lot of rides like that and we became very close friends with some of them.
They are (blind people) is very good in reading (listening) and also in speaking. I believe being a person who's easy to communicate is very importent in our industry and you will be a very good asset for your team.

You can email me if you'd like to hear more about that organization and maybe you can find something like that in your city as well.

fatiherikli@gmail.com


	
RickJWagner on April 19, 2020 | prev | next [–]

First, I'm very sorry this is happening to you. I hope to later read where you have been very successful.
I work for Red Hat, we have a successful executive named Chad E. Foster (https://chadefoster.com/), he has some recorded talks that outline some of the pitfalls he's encountered and the ways he found around them. Maybe his advice can be of use. (You might even consider reaching out. He seems a very approachable guy.)

I worked closely with another person who went blind. He relied on big monitors and monitor settings to help him.

Good luck, we'll all be rooting for you.


	
heavyset_go on April 20, 2020 | prev | next [–]

I had a complication with my vision where I could have become blind, and was in the same position as you are. There are blind engineers, and compared to 15 years ago, there are many highly configurable and powerful tools at a blind engineer's disposal. After doing some research, I walked away slightly relieved at what options were available. I'm just posting this to give you a bit of hope.
I highly suggest documenting your condition, its progression and your eventual disability, and getting your disability status recognized by the government as soon as you can. Navigating social services and the ADA is a skill in itself.


	
zachrip on April 20, 2020 | parent | next [–]

Here in AZ the gov vocational rehab is so understaffed just to be onboarded I received an appointment almost a year after I called. Now with corona virus cases will surely have been pushed back even further possibly for another year. It's so frustrating to work with.
Even just getting diagnosed I had to fight my insurance company who said that a DNA test was not necessary (it's a genetic condition???).

All of these things are the reason I'm trying to get ahead of all this. This entire thread has given me a lot of hope, thank you.


	
imutemyteam on April 20, 2020 | prev | next [–]

In the meantime, I would really urge you to travel and see the beautiful sights and places which you might not be able to later on. Splurge a bit and see those places so you can have a memory of them and never have the feeling that you missed out on anything in life. The Great Barrier Reef, The Grand Canyon, visit a space observatory so you can see the other planets, other galaxies, etc.,
Especially considering your age, I would really really urge you to do this. If you dont have anyone to go with you; just do it solo. I hope you consider my suggestion.


	
unfocused on April 20, 2020 | prev | next [–]

I deal with duty to accommodate and I can tell from experience some of the tools that our employees that are blind currently use. They are:
1. JAWS screen reader. They all say this is the best 2. Programmable keys, such as https://xkeys.com/xk16.html 3. ABBY Finereader - to digitize images so they can be read by JAWS. 4. Large specialized monitors (I forget which model) that could help.

And yes, like someone already mentioned, you will be listening to your screen reader at lightning speed.

All the best!


	
eli555 on April 19, 2020 | prev | next [–]

I had a coworker this happened too. He was in his late 40s when this happened and so had to use a screen reader instead of a Braille display. He used edlin over putty on Windows. Since Jaws ran best there for him. He had to stop working on languages like Python where a screen reader is of little help.

	
blondin on April 19, 2020 | parent | next [–]

> He had to stop working on languages like Python where a screen reader is of little help.
i find this interesting. is it due to the space significance thingy?


	
sn on April 20, 2020 | root | parent | next [–]

Python is totally possible with a screen reader; the screen reader just needs to read out punctuation. It's easier with a self voicing application like emacs.

	
eli555 on April 20, 2020 | root | parent | next [–]

Three spaces vs one space is punctuation?

	
walterbell on April 19, 2020 | parent | prev | next [–]

Which languages work best with a screen reader?

	
exdsq on April 19, 2020 | prev | next [–]

One thing to consider is to write a blog on accessibility - it’ll help expose issues to those who develop developer tools which is great but it’ll also help you get exposure for getting work.

	
ashilfarahmand on April 19, 2020 | parent | next [–]

I was thinking the exact same thing! It would be something I would definitely be interested in reading just to get a different perspective on how different people approach a site.

	
coffeemug on April 20, 2020 | prev | next [–]

> Since my diagnosis I've slowly developed a crippling anxiety centered around a feeling that I need to figure out the rest of my life before it's too late.
I can't imagine how you must be feeling, so take what I'm about to say with a grain of salt.

Losing your sight is undoubtedly going to be one of the top five most important events in your life that will split everything into "before" and "after". Maybe it will be the most important. But it's still one of the top five. And right behind those five there will be another five that aren't quite as important, but still pretty close. Life has a way about it like that. (Some of us get dealt a better hand than others of course, but there are precious few for whom all top ten life events have smooth continuity and are all ecstatically positive).

I'm by no means telling you to take this lightly or not to prepare. It sounds like you're throwing yourself into this thing and doing the best you can to set yourself up for future success. That's great. But do take a long view on these things. You have fifty years ahead of you, and crazy shit will happen that will knock you off your horse maybe every decade or so.

It's not exactly that your anxiety is unwarranted, just that it's not telling you the whole story. This is (hopefully) going to be a long, long road. Aiming to have everything buttoned down at 24 (or 34, or 54) is not a reasonable expectation, blind or not.

Anyway, best of luck to you. If you want, I can put you in touch with a friend who's a developer with no sight. (Also happy to just talk to you for emotional support) My e-mail is in the profile.


	
schoen on April 19, 2020 | prev | next [–]

You might want to check out some things like
https://www.reddit.com/r/emacs/comments/bh0vm0/emacspeak_how...

https://stackoverflow.com/questions/118984/how-can-you-progr...

and also contact some individual programmers with visual impairments.

I don't have particular expertise in this area but I remember meeting a completely blind software developer in 1995 or 1996 (when presumably the tools available were much more limited!). He said that he had successfully pursued this career for a number of years already at that time. However, I think the things he was working with would be things that you'd consider more to be backend engineering.

I also know a computer scientist who is blind and who has continued researching, publishing, and teaching, but as he works in theory, his work might also feel more backend-like.

> - Besides a screen reader, what are some of the best tools for building software with limited vision?

If you decide to learn Braille well, Braille terminals are still a thing:

https://en.wikipedia.org/wiki/Refreshable_braille_display

(You might have seen one used in the movie Sneakers!)

Some fluent Braille readers can use these terminals at very high speeds (although people who use screen readers also often get used to using their screen readers at extremely high speeds).

> - Are there blind frontend engineers?

I know you might not want to pigeonhole yourself and work specifically on disability-related projects, but a lot of companies are trying to ensure accessibility of their web sites and so are interested in having developers with specific disabilities to help make sure that that works out properly. I believe there are consultancies of people with specific impairments who develop (and test) UI for accessibility to users with similar disabilities.


	
thayne on April 20, 2020 | prev | next [–]

> Are there blind frontend engineers?
I have zero experience in this area, and don't actually know any blind engineers, but I have two thoughts: 1. A lot of frontend development isn't necessarily tied to the UI itself. especially in more complicated apps, where a lot of the logic is in the frontend. 2. I think a blind developer has an advantage when it comes to building websites that are usable by other visually impaired people. Maybe consider looking into a11y development, if that interests you.


	
game_the0ry on April 20, 2020 | prev | next [–]

I know your situation really sucks, but you are in a fortunate position to reposition yourself as a UI (both web and mobile) accessibility consultant, given your experience in front end web.
A couple of folks mentioned this before - government contractors and federal agencies are required to be compliant with WCAG 2.0 A/AA standards.

I work at a financial institution in front end web. Accessibility is a big deal for us and I can tell you from experience that it is significant pain point for everyone (front end developers and testers). I would estimate that about 70% of the defects I work on are accessibility related. Also, my first job out of boot camp was doing only web accessibility work for a company that was trying to get their site WCAG compliant by 2017.

I toyed with the idea of starting my own accessibility consulting service, given how frustrating it can be. Its a challenge to get a UI to work visually consistent across browsers, operating systems, and devices. Add screen readers and focus placement to the mix, and the work becomes very annoying and time consuming.

I would speculate that accessibility becomes its own niche specialty, similar to how front end and back end work is often viewed as their own specialties. That's opportunity for you, my friend. I hope you can make the best of it. Good luck.


	
sky_rw on April 20, 2020 | prev | next [–]

Unrelated to the question:
> "I'm a 24 y/o full stack engineer (I know some of you are rolling your eyes right now..."

As a 35 year old full stack engineering manager I can say that anybody rolling their eyes at that statement needs to check themselves. Lately I've been getting smoked by a 21 year old software dev. She's constantly teaching me things and improving my code. Frameworks and technologies evolve so fast that age is a very poor metric of practical knowledge.


	
slow_donkey on April 20, 2020 | parent | next [–]

I believe the emphasis was on "full stack engineer" which is why the justification was experience with both frontend and backend engineering.
Depending on which circles you run with, full stack is usually seen as misnomer because it colloquially refers to frontend engineers with the bare knowledge of backend in Node.


	
jhgb on April 20, 2020 | parent | prev | next [–]

Is that really a matter of age, or of experience? Surely your own code didn't deteriorate since you were 21 year old yourself. Or is this largely about newfangled things that didn't exist back then?

	
sky_rw on April 20, 2020 | root | parent | next [–]

Age and on-paper experience are incomplete measures of intelligence and capability.

	
eddieh on April 19, 2020 | prev | next [–]

As I'm already an Emacs user, I'd start by looking at what Emacspeak (http://emacspeak.sourceforge.net) can offer. Since Emacs itself is way more than a text editor this package is also much more than that. It isn't just a screen reader, instead it is an audio based desktop that does email, web, news, plays games, keeps notes, calendars, writes computer languages, etc.

	
O_H_E on April 19, 2020 | prev | next [–]

For navigation in the real world, make sure to check out echolocation. Some blind people have been navigating the world using sound reflections like bats. I was recently watching [1] and it blew-out my mind. You could start training now. Apparently after much practice people could be independent to the point of riding bikes.
[1] https://www.youtube.com/watch?v=08smCjKWNL0


	
cskchao on April 20, 2020 | prev | next [–]

I've been blind since birth, and much of my life and work is possible through the use of technology. I've used screenreaders on Windows, Mac, iOS and Android (both speech and Braille output). Many blind people are employed in various technical professions. I'm happy to answer whatever I can, and direct you to smarter people who may be able to answer what I can't. My Twitter and gmail username is the username on here.

	
auslegung on April 19, 2020 | prev | next [–]

There is a lot of good advice here, and I know you can continue to do SE if you’re committed. In addition to the advice here, you could consider
- finding businesses who would benefit from employing a blind SE. I have no idea who, but probably companies who care a lot about accessibility

- you could become a tech project manager or another career that is tangential to SE. I know there will be obstacles to overcome, but maybe not as many as in SE, idk.


	
lisper on April 20, 2020 | prev | next [–]

No advice, just offering moral support and letting you know that you're not alone. I have macular degeneration so I'm not going completely blind, but I'm losing my foveas so that still presents some significant challenges when it comes to coding. At the moment I'm compensating with larger fonts. I don't know what I'll do when that's not enough any more.

	
solarengineer on April 19, 2020 | prev | next [–]

Unorthodox suggestion: build up lots of capital ASAP, so that you don’t struggle later commuting to terms with loss of vision as well as potential loss of revenue.
Some approaches to consider: Algo trading , creating and selling off products, creating stuff for startups for a stake in the profits. Right now, you may want to consider all options rather than regretting not doing so later.

I have seen two blind persons in my work life: one is a guru with emacs and gnome programming and today runs his own Python training and also sells an accounting package ( called GNU Khata). He was born blind.

Another is an architect and advisor at a consulting company. He lost his vision to an accident. He was fortunate to have already built up capital, and used that as a buffer to take a year off to learn how to cope and to continue.

Until I’d met them both, I’d thought that suicide might be the only feasible approach were I to go blind. I am now completely positive about living even after blindness, but I do understand the benefits of having a capital base and being financially independent.

All the best.


	
dan-robertson on April 19, 2020 | parent | next [–]

I’m not sure I agree with this advice though I have no experience with being blind. Possibly creating/selling products/running a service would be a good way to have an income stream which is reasonably sustainable but I would worry about any graphical front end to any software product, and my general worry would be about loss of income because my expectation would be that finding a job while blind would be hard. I would expect working for a large tech company would have two advantages: 1. This would likely be the most reliable easiest way to actually build up a decent amount of capital; and 2. I would expect a larger company would be more accommodating of your going blind because they would be much better able to cope with a loss of productivity and adjustment period and they may be more nervous of the legal risks of not supporting you. If you run your own business or work for a company with little spare money, it will be much harder to have a loss of productivity or adjustment period.

	
solarengineer on April 20, 2020 | root | parent | next [–]

Building up a financial foundation as an employee can take years. The OP may not have that much time. I therefore suggested algo trading ( their programming skills come to use ), and creating and selling off products ( where they build things and sell them off, instead of building a SaaS business and getting caught up in all the business building).

	
sky_rw on April 20, 2020 | parent | prev | next [–]

It's silly that this comment is being downvoted. Building up capital is good advice for anybody, if only because you may have a surprise medical condition (or, you know, global pandemic) impact your career and cashflow. In this case OP is 'fortunate' enough to have early warning. IDK if algo trading etc is the right path, but a solid savings account and investment portfolio never hurt anybody.

	
KhoomeiK on April 19, 2020 | prev | next [–]

Even as someone who isn't blind, I think popularizing more screenless tools (or even tools with just fewer visuals) could be useful for the dev community as a whole. My eye strain is getting especially bad now that we're in quarantine since I'm sitting in front of a monitor nearly the entire day.
Hope to see some cool suggestions, tools, and software posted in this thread!


	
randycupertino on April 21, 2020 | prev | next [–]

I used to work at a healthcare navigation (insurance contractor) company. My biggest advice to you is to start acquiring copies of and saving all of your medical records, and keep them filed and organized.
Years down the road, if you need disability, it can be an arduous process and some of the doctor's visits and notes may be gone (health care companies come and go, have mergers, lose medical records due to old out of date systems, etc). If you need to show a history of decline over the years and don't have that all to submit, they will use it as a reason to reject you.

Getting disability in the US isn't easy- we joked it was "like trying to join the Jewish faith" because they reject everyone three times. Most of our patients would apply multiple times and end up having to hire attorneys to help them apply.

Keeping your records and building a trail of evidence will save you a lot of grief in the long run- even if you don't think you will need it- I would say start saving your documents just in case.


	
mbutsk on April 19, 2020 | prev | next [–]

Accessibility testing/engineering is a very important niche within software engineering. You could very easily build a career that will enhance the lives of others in similar situations.

	
kinow on April 20, 2020 | parent | next [–]

Indeed, we are building a web app now to replace an existing GUI. In our group, in at least two companies we have people with color blindness, so we decided to incorporate WCAG design practices from the beginning.
It's quite hard for us, as we relay on browser extensions to test and tell us whether we are doing accessibility right or not, before we send the app to be tested by our co-workers/users.

These tools lack somewhat, they are not easy to integrate in the build process, and instead developers have to remember to run them, and check different things (e.g. there are multiple types of color-blindness, EU vs. USA regulations for accessibility, ARIA roles/labels where possible for screen readers etc).

So you could definitely start working on something in that area. Maybe more tools, more information, services for testing, consultancy.


	
kalyan02 on April 20, 2020 | prev | next [–]

Sometime back, I worked with a colleague who was completely blind. As I was introduced to this new would-be-teammate, I instinctively tried to thrust my hand forward for a handshake, only to stop myself short with a horrifying realization that might not be an appropriate form. Fortunately, to my great relief, he was used to such situations and offered his hand first. This moment particularly struck me.
The experience of working with him was exciting and as challenging as it was enlightening, as I think I learnt a bit more about myself and all the things around me I took for granted.

Anyway, here are some of my observations

1. Navigating a busy open-layout office is possible, but hard. My colleague was really great at doing so without using his stick.

2. Often it is the sighted who would hesitate at water-cooler chat for fear of offending or saying something untoward, but the colleague took the initiative to put them at ease, so it was always fun. No one could slip out unnoticed by him. The puns were mortifyingly entertaining, which I think only a blind person can make.

3. The written form of communication goes great lengths in bridging the communication gap (This is applicable in general as well)

4. ASCII diagrams and SVGs are great ways of making content such as flow charts and architecture diagrams accessible. Tools such as PlantUML, dotviz, mermaidjs are helpful.

5. Statically typed languages make it much easier to work within a screen-reader environment. We were working with Go, and he had much better success with it than a language that was used in other parts of the company.

6. Emacs seems to have a lot of tooling to facilitate the use of screen-readers.

7. Open-office chatter (in-person and chat) can become overwhelming very quickly, so setting expectations ahead on how you'd plan to work helps your teammates.

8. Monitoring is hard (in a server-side environment) as the notion of "taking a look" at the graphs doesn't translate for someone who is not sighted. I wish there were better ways that are more accessible.

Losing sight is perhaps one of the most terrifying prospects anyone can face. However, seeing (see what I did there) my colleague also gives me hope that all is not futile. It is possible to live a fulfilled life. It is possible to have a successful career as a software developer. Being blind does not have to mean disabled but merely differently-abled.

I wish you the best of luck.


	
claytonaalves on April 19, 2020 | prev | next [–]

You should really talk to Lucas Radaelli, a very tallented blind programmer working at google. He calls himself Brazilian Daredevil (marvel character).
https://twitter.com/lucasradaelli


	
sethx on April 20, 2020 | prev | next [–]

I see you got a lot of great technical suggestions here. I am in no way able to comprehend what you must be going through mentally, but to tackle your anxiety, please consider meditation. If you have never done that before, there is an excellent 10 day course that can be followed, onsite, on a donation basis. If you're broke you don't have to pay. It's a 10 day silent retreat, which means you don't have to talk to anyone and can just focus on "showing up to do the work". https://www.dhamma.org/

	
takecarefnd on April 20, 2020 | parent | next [–]

Can't agree more.

	
farazy on April 20, 2020 | prev | next [–]

Hi,
What's your timeline? Is this due to a generic issue like Retinitis pigmentosa, Choroideremia, Are you losing peripheral (10 degrees) or central (20/200)? (You can email me directly: faraz.y at iCloud

Different companies have various groups specifically for visually impaired. For example, at Aira.io (the entire engineering is working on software for blinds so they are very open) Ted Drake at Intuit (I personally know him. He is an amazing person and has so much connection specifically for visually impaired) Rio Akasaka at Google (His team is mostly focused on disability related projects)

Feel free to reach out to me on the email above..


	
johnmarinelli on April 20, 2020 | prev | next [–]

No idea on how to prepare, but one of my colleagues is blind and is one of the most detail-oriented backend engineers we have. One thing I've learned from him is that Apple products are MUCH less accessible than PC.

	
jitendrac on April 20, 2020 | prev | next [–]

https://clinicaltrials.gov/ct2/show/NCT03780257
https://ir.proqr.com/news-releases/news-release-details/proq...

ProQR is working on some -RNA based gene editing treatment for Usher's syndrome. Stay updated with its result,hope for best. They are recruiting new patients for trial if interested.


	
at_a_remove on April 20, 2020 | prev | next [–]

I only have a little to offer:
First, in college I knew a guy with RP. He was hands-down the most brilliant coder I knew at the time. Aside from blowing up the screen (screenreaders did not yet exist), he ended up simply memorizing his code. He held the whole thing in his head.

I also knew -- internet-only -- a woman with the more severe form of Usher's (born deaf, go blind) -- who was quite techy even in the early 1990s and now works doing tech stuff for libraries, last I checked. She, also, had it going on.

In short, I can tell you this: other people have done it, so you also have a shot at it.


	
robocat on April 20, 2020 | prev | next [–]

I suggest practice with voice readers without looking e.g. start with web browsing and NVDA. When you get confused, try to resolve without looking. If that fails, use your sight to work out why you went wrong: especially learn what heuristic you could have used to correct yourself without needing sight? You would need someone else to help if you try to learn after your sight went - I found that the accessibility software had a lot of showstopper usability bugs.
If your balance issues are manageable, perhaps start joining blind social or support groups in your area. Potentially you could help them with their technical issues, since maybe you would learn a lot by helping others, and there are always people that really need help with tech!

And a supremely left-field idea: Perhaps investigate changing states or countries if you find that your local systems are not helping you? Some places have better infrastructure for the blind or sight impaired - do you see pedestrian markings locally https://en.wikipedia.org/wiki/Tactile_paving or are they dangerous: https://99percentinvisible.org/article/death-tactile-paving-... also it is rumoured that some wealthy countries with socialised health may help you more?

Good luck. PS: I’m not sight impaired.


	
unexaminedlife on April 20, 2020 | prev | next [–]

I have a relative who is blind. I have told her I think there are 2 strong opportunities in technology that I can think of that might suit her. Granted she is not tech savvy so may not apply for you.
1) educating other blind people in how to best utilize technology. She was always "legally blind", but has been 100% blind since the 90's so picking up technology has not been easy for her.

2) Accessibility QA. I know this probably could feel like a "step back" from being a developer, but I think the world (especially large companies who are becoming more and more dependent on their web presence) NEED more people who can help their teams understand the world from the perspective of a blind person. There are people in these positions obviously, but I was surprised to learn that most of them can see, so I don't put much faith in their ability to do justice to their jobs.

Finally, this sort of goes with #2 above, but I think there's opportunity and a market (think government subsidies) for people who want to build accessibility technology to make it easier for blind people to use technology. I think this probably should start from standardization. There are a lot of standards out there, but I think not enough.

PS. I think one of the best first steps will be to start to learn Braille. It likely will be easier to get started while you can still see.


	
bretthowell on April 20, 2020 | prev | next [–]

Late to this discussion, but witnessing the amazing community support is uplifting and I thought I'd drop a couple of links I don't think I saw in any other comments:
1. Talon - Writing code by voice: https://www.blakewatson.com/journal/writing-and-coding-by-vo...

2. Gordon Gund - Blind later in life, conquered the market by speed listening. Quote: "Meanwhile his (acquired) blindness seemed to pour gasoline on the fire of his life, and he began to flourish in unexpected arenas." https://vimeo.com/296637627 (TED-style inspiring video, speed listening at ~8:45) https://n-magazine.com/blind-curing-blind/

3. CRISPR holds promise, never stop hoping for a cure. It's an amazing time to be alive, keep building amazing tech for the world, and perhaps even learn to program the big data tools used to find the solution. https://www.cell.com/molecular-therapy-family/methods/fullte... Unfortunately, can't link directly, but search for jobs at "Broad Institute of MIT and Harvard" with the title "Bioinformatics" or "Python" in the query.


	
nh2 on April 20, 2020 | prev | next [–]

Last year I did a course on learning braille, run by two blind friends.
Definitely get a refreshable braille display, and learn it and set up your usual development workflow while you can still see.

I was amazed by how plug-and-play the braille display of my friend was. I plugged it via USB into my Ubuntu laptop with brltty and it worked out of the box: I could read my terminal output on it, and it even did the "blinking cursor" of where the cursor is on screen without any configuration.

Within 2 days, I learned basic Braille (we simulated learning it fully blindly, that is with closed eyes), could read things slowly, and also learned typing Braille with the 6-chord keys present on the refreshable braille display.

The blind friends that taught me can use both text-to-speech and the braille display at insane speeds.

They can give free-standing presentations, talking at high speed for an hour in perfectly sophisticated language while looking at the audience with the laptop apparently closed, when in fact they are just reading it off the braille device with a finger! Reading the braille device certainly has the chance to give you apparently-superhuman abilities. I found that so cool that I considered getting good at it already just for that purpose.

So, in summary:

1) I think you have very good chances of staying very proficient even if you go fully blind.

2) Play around with the tool set already now, and fix apparent pain points ahead of time that are easier to fix while still seeing.


	
mattwad on April 19, 2020 | prev | next [–]

I just learned how to make my website accessible to screen readers (using aria labels, tabindex, etc). You should definitely check it out now to learn how it works. I only did part of my website and it seems like a full-time job. I'm not blind, so I am sure I could have done much better if I was more familiar with tools like Mac's VoiceOver. I am sure there's a market for these skills, especially in any company that has a decent amount of users. Best of luck!

	
KevNeff on April 20, 2020 | prev | next [–]

Hello!
I am also a coder in the professional world with Ushers. I have Type 2A. I have found some employers don't answer back if vision loss is mentioned. I try not to mention in during the interview process, but I made sure to discuss it before accepting an offer. You will likely have to quit driving at some point with Ushers. You'll still be able to stay active, but you may decide that you don't want to wield 2 tons of steel when you could easily miss a cyclist or jaywalking pedestrian. Driving is something you have to prepare for exception not the rule. Long term, you will likely have to look in cities with good public transportation or a walkable commute to work.

Besides learning to manipulate screen readers at a rapid pace. One skill to practice is reading braille. When I was receiving assistive training at the Criss Cole Rehabilitation Center, I met MANY instructors who had personal experience coding without much vision at all. While they themselves chose to transition to a career helping others of all skill levels improve their access to computers, they reassured me that I would be able to be productive in a work environment with the right tools. The reason why I encourage learning braille is that in place of or paired with a screen reader, you could use a braille display connected to your computer. This allows you to employ more rapid mobility parsing a document than you might with a screen reader. I have not gotten fast enough at reading braille that I have justified the expensive purchase of a braille display nor has the need arrived currently, however, that is part of my long term plans for dealing with the situation.


	
saagarjha on April 20, 2020 | parent | next [–]

> I have found some employers don't answer back if vision loss is mentioned.
That sounds illegal.


	
wmij on April 20, 2020 | prev | next [–]

First off, I'm so sorry to hear that you've been diagnosed with this condition. I haven't read through any of the replies to your question aside from a quick read through, so I'm sorry if any of my advice is redundant, helpful or not.
My immediate advice to you as an engineer is to remember that your most powerful and valuable tool is your mind. The ability to solve software engineering problems starts with the cognitive aspects of your knowledge, intuition, experience and who you are. An engineer's cognitive ability to solve problems and guide outcomes is the most valuable thing that we bring to any project we join or undertake.

Look for a team or project that values critical thinking to drive execution over just banging out code. Don't sweat being hands on in the long run, i.e. writing code and pushing features. Make the most of the work you're doing now to start honing your skills to be able to drive things like architecture, implementation choices, etc. based on experience, lessons learned, people you enjoy working with etc.

Also, keep in mind that you have a unique albeit unfortunate set of circumstances that can bring a perspective as you're going through this to what works and doesn't for others in similar circumstances that want to have careers in software technology. Be open to an awareness for areas where you can help solve problems and be involved in building solutions for others in a similar circumstance as you're in. Look for ways to develop products, tools, advisory groups, training, etc. that can help engineers with similar disabilities.

I wish you the best and again, I'm very sorry you're facing this. I hope that my thoughts help in some way.


	
tlh on April 19, 2020 | prev | next [–]

I can't imagine how hard it is to keep positive in this situation and I think it's great that you're asking these practical questions to help your future self out. I hope you get some really useful answers from the rest of the community.
I don't have the answers to those questions but I did want to drop a line of encouragement and say this; your hard work up until now will not be wasted, whatever you end up doing. You can — and will — find ways to continue to stretch and apply your engineering mind, and most likely in ways that you can't predict right now.

Later on, you will look back and find that nobody would be better placed for whatever you're doing at that moment than you.

Finally (and I'm not saying this to deter you from continuing down the SE route, there are plenty of examples online of partially-sighted or blind SEs doing very well and you're attitude is indicative that you should experience no different), but everyone of us has so much more to give to this world than just our skillset, and you don't need a qualification for the things that truly matter in life.

Keep going and I echo the other commenter, take car of your soul, it's important.


	
wirthjason on April 19, 2020 | prev | next [–]

While I don’t have this my grandmother became blind so there could be a genetic disposition and I’ve wondered (worried?) about what would happen if I did. I would focus on the things I could manipulate with my mind rather than a keyboard and monitor. Basically this boils down to the algorithms and mathematical aspects, they are more about thinking and logic than writing code.
All too often we get stuck in the tools and not the thing we are trying to do. I remember a quite about photography (sorry for a story about vision): “I wanted to become a photographer so I took a class. We learned all sorts of things shutter speeds, aperture, film types, etc. But of all the things we learned, we never learned where to point the damned camera!” The computer science take on this quote is “Computer Science is no more about computers than astronomy is about telescopes." I try to keep these in mind when I feel myself drifting towards the tools side of things and come back to what’s important.

As also noted, there’s never been a better time for accessibility than now. It’s an opportunity to advance that area and become an expert.


	
Paladiamors on April 20, 2020 | prev | next [–]

I have a friend that went through this exact thing. He's helped with Facebook to design better accessibility features at one point. He used to be a developer and did photography and most inspiringly he still does photography even while blind which I think is an inspiration.
Spend time now to learn about accessibility features on different systems, iPhone, android, your PC. Look into how to navigate into them. Look up screen readers as you may use them to have them read content from the web for you. Be an advocate for accessibility features and their standardization as this is often forgotten with developers.

I've posted a link below to a video of my friend, if you'd like to reach out to him, PM me. It's a definitely challenging time. I've known him since before and after going blind so he may give some advice from his experience.

Also reach out to other blind communities now to hear perspectives from many other people if you can. https://www.facebook.com/watch/?v=2108067789479904


	
shakkhar on April 20, 2020 | prev | next [–]

When I interviewed at Google a few years ago, my lunch buddy was a blind software engineer (sounded like L5). He navigated multiple floors, guided me to the cafeteria, checked his emails completely on his own. It was impressive to see him navigate hallways, going through doors and taking stairs up and down effortlessly. It can definitely be done by anyone with training and effort. Best of luck!

	
profitor on April 19, 2020 | prev | next [–]

I don't know if this is helpful to you, but recently I stumbled across this[1] post by a blind developer. He's touching briefly on his setup of choice and what tools he chose and why.
[1]https://www.vincit.fi/en/software-development-450-words-per-...

I wish you the best of luck.


	
martinbooth on April 20, 2020 | prev | next [–]

At the company I work for UI accessibility issues are automatic high priority bugs. You'll be an asset (as a frontend developer) to any company that values accessibility (and I'm certain that many do).
Contrary to your concerns, I think that being visually impaired and being a frontend developer will most likely open up opportunities rather than close them down.


	
babaganoosh89 on April 19, 2020 | prev | next [–]

I knew a blind software engineer that was decent, he'd use Eclipse and have his screen reader speed turned very fast.

	
taigi100 on April 20, 2020 | prev | next [–]

One small detail: when your hearing will get worst you'll probably have to have a cochlear implant. The newer models have a "neat" trick where you can connect them to your phone / pc by using bluetooth so they can act like sort of headphones. Keep your head up and keep walking the path, you can do it!

	
EndingCredits on April 21, 2020 | prev | next [–]

I'm in a similar boat to you as I'm about your age, also have Ushers (type II, which is what I'm assuming you have), and programming features heavily in my work (although I'm not in SWE).
I'd interested to chat with you; you can drop me an email at (awwoof) (hotmail) (com) To be honest, I am not very up to date with assistive technologies. I think my plan is basically pick stuff up when I find it useful.

Also, on a lighter note, while it's impossible to tell what the future holds, in my experience many people retain good central vision into their 50s (although that might be a self selecting sample). RP is also a key research area (easy to administer things to the eyes) so it's always possible there will be a treatment at some point. Obviously you still have to prepare for the worst, but it's not necessarily an absolute. It's very que sera sera.


	
e-_pusher on April 20, 2020 | prev | next [–]

Sorry to hear this Zach. Best of luck and I hope you will pull through this stronger.
I would look into positions at Microsoft. Since the current CEO Satya Nadella took over, there has been a big push to improve the accessibility of Microsoft products, and I know that there are quite a few blind developers working there.


	
NitroNills on April 19, 2020 | prev | next [–]

edbrowse(1) is developed by seeing-impaired person (Karl Dahlke) - it's a webbrowser with ed(1)-like interface which also does JS. I've heard it's awesome for scripting! Though it requires som ed(1)ucation.
http://edbrowse.org/


	
cmaury on April 21, 2020 | prev | next [–]

Hey, I'm a legally blind engineering manager (stargardt's macular degeneration). The accessibility community was hugely welcoming when I started to lose my vision at about the same age you are. I'm happy to talk through my experience and be helpful in anyway I can. chrmaury at gmail.

	
sultanofsaltin on April 20, 2020 | prev | next [–]

Like some of the other comments, I’d focus on developing skills in web accessibility and areas that will help you be more productive.
I’m not sure how severe your hearing loss is but if podcasts are your style check out https://drunkenux.com/. The hosts have done a lot of episodes speaking from their backgrounds building education sites, where accessibility in development is required (also it’s funny and who doesn’t need a little levity).

More than anything, experiment with the suggestions here, different input methods, track your progress, Etc. For managing the anxiety especially, dedicating time weekly to work on your system can lead to some of the biggest rewards and occasionally, key insights.

Carpe Diem and keep us posted as you find the hacks that work for you!


	
dude_bro on April 20, 2020 | prev | next [–]

One of my managers during an internship in college was blind. I actually had no idea he was blind until I met him in person; this includes being interviewed by him remotely and have discussions about code I was writing in real time. I was completely shocked.
This was at a very large corporation, and he had been blind throughout his long career there. I believe the primary tools he used were JAWS and a device that would actually generate braille for text on screen. This was pretty incredible to me, as he would do most of his reading via this braille device.

I don't think you will be limited to a certain portion of the stack. In some ways, it may open up certain opportunities like working more on the Accessbility features for front-ends, which is a critical part of a front-end but often overlooked.


	
symisc_devel on April 19, 2020 | prev | next [–]

We do offer a custom version of our OCR reader app for Vision Impaired persons. The app require minimal interaction with the user. Just a single will trigger the phone camera, you have to take a picture and the text language is automatically recognized and played back aloud in your default language and accent with built-in translation powered by Google.
The OCR is powered by PixLab[1] and is damn good. The application homepage is https://i2s.symisc.net. If you are interested in trying the Vision Impaired version, let me know via chm at symisc dot net.

[1] https://pixlab.io/cmd?id=docscan


	
mattkrisiloff on April 20, 2020 | prev | next [–]

Doubt my comment will get to you with so many commenters and it's a bit off topic, but are you familiar with savesightnow.org? They are a patient advocacy group specifically for Usher's Syndrome working on finding a cure...good people involved in it.

	
benjamin21 on April 20, 2020 | prev | next [–]

Vincent Le Goff, the author of the excellent "Apprendre à programmer en Python" (in French) from the french side of OpenClassRooms is blind. There is a picture of him with the Braille reader and headsets in the book version. Maybe he would be of some help ? course: https://openclassrooms.com/fr/courses/235344-apprenez-a-prog... profile: https://openclassrooms.com/fr/membres/prolixe-27218

	
gtm1260 on April 19, 2020 | prev | next [–]

I'm so sorry to hear that. I'm curious what people's opinions are specifically around frontend. How can software enable someone who's blind to ensure that a frontend matches a design? Can we as a community develop new tools for this?

	
parham90 on April 20, 2020 | prev | next [–]

Hi there! A colleague of mine referred me to your post. I'd love to have a call and help with advice and coaching to reduce your anxiety of going blind. Since I published the post @ssivark mentioned, I got a lot of emails from developers who were afraid of going blind or who were actually like yourself and were going blind, so trust me when I say that you are not alone and people like you have pulled through. Since you value showing up and being independent, I'm certain you will pull through, too.
Please reach out to me on my website (https://www.parhamdoustdar.com/). I'd love to help.


	
pgt2art on April 19, 2020 | prev | next [–]

https://clinicaltrials.gov/ct2/results?term=retinitis+pigmen...
i hope the link can help you trials of new medications


	
crashbunny on April 20, 2020 | prev | next [–]

I read a blog post a while ago that was quite remarkable. From memory it was someone going blind (your age) while studying law, and halfway through couldn't read any more.
Determined to finish his degree he developed the ability to listed to audiobooks ludicrously fast, way faster than reading, and it opened up a whole new world to him that was previously hidden.

Chumhumming around today I'm pretty sure the man's name is Isaac Lidsky. He's done TED talks and been interviewed on podcasts, written blogs posts, etc.

Go check him out and even try and contact him.

Good luck. I reckon you'll be strong enough, prepared enough, and with a little help from lots of people be able to thrive.


	
Tijdreiziger on April 19, 2020 | prev | next [–]

This presentation by a blind software engineer at Microsoft has always stuck with me: https://www.youtube.com/watch?v=94swlF55tVc

	
atum47 on April 20, 2020 | prev | next [–]

Well, back in 2018 I participated in a event for software engineers undergrads in Paraná/Brasil, I was glad to see that there ware a blind girl there. At first I was afraid to approach her with a thousand questions, cause I was curious, just like you are, to know how is her day to day. I got the chance to talk to her and she seemed pretty normal. Her computer had a screen reader and she was having fun at the event. She and I end up taking a mini workshop about Watson (IBM chatbot). Nice gal, she was doing alright and I'm sure you will be alright as well. Don't give up.

	
JonathanFly on April 20, 2020 | prev | next [–]

>Are there blind frontend engineers?
I'm sure this has been mentioned, but front ends need to be usable by blind users so I would imagine a blind front end developer would be extremely useful in that case, at a minimum.


	
sumguysr on April 20, 2020 | prev | next [–]

My mother is blind and was a rehab teacher. Learn to use a screen reader now, while you can still map the words to the visual structure on screen. The structure applications expose to screen readers is often drastically different than what we intuit from looking at it.
Learn braille. It's hard, resources are scarce, lots of people don't do it any more. This is why, with practice you can read braille off a computer braille display about as fast as sighted people read text. No screen reader can ever be intelligible that fast. Braille is also a much better way to read code syntax.


	
dchichkov on April 20, 2020 | prev | next [–]

Curious, when doing your research on the syndrome, did you encounter following article in Nature: https://www.nature.com/articles/jhg201029
And did you read majority of articles that cite this article? https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=Gene...


	
hollander on April 21, 2020 | prev | next [–]

How about focussing on communication methods for people who are (almost) blind and deaf, leaving all communication to touch. I don't know if you can make a living from that, but given your intelligence, your programming and tech knowledge, your determination, you may have what it takes to make this work.
Thinking about it, this type communication might work in dark and soundless environments like when you dive in muddy water. Another target group is people in a coma. Just a suggestion. There are probably more use cases than people with Usher.


	
jart on April 21, 2020 | prev | next [–]

Might be possible for you to not go deaf / blind if you get Gates' crispr thing from some greymarket source online for a few hundred bucks and do your own research. https://www.usher-syndrome.org/our-story/all-ush-news.html
I've heard anecdotal evidence online that traditional health care system does FDA-approved gene edits for 1%ers costing somewhere in ballpark of ~$800,000.


	
tjohns on April 19, 2020 | prev | next [–]

There are quite a few blind engineers at my company.
Most of the folks I've worked with are either backend engineers or working on frontend accessibility-related features. (Frontend engineering doesn't just include design for sighted users!)

While I don't have any experience myself, I'd recommend looking at braille displays in addition to screen readers: https://en.wikipedia.org/wiki/Refreshable_braille_display


	
tumregels on April 21, 2020 | prev | next [–]

I think you should consider reading this book
http://www.buddhanet.net/pdf_file/mahasit1.pdf

and/or listen to these talks

https://www.amaravati.org/series/the-collected-teachings-of-...

or anything from within this realm.

Personally I believe there is cure and way out of suffering only in meditation. But don't believe me - try it out.


	
femto113 on April 19, 2020 | prev | next [–]

This site has resources oriented towards learning braille while you still have sight:
http://www.dotlessbraille.org/


	
ackbar03 on April 20, 2020 | prev | next [–]

Top comment has a good positive example but if you want another example of success, apparently the head of global macro at citadel hedge fund is blind as well, I don't know if he's still there. There was a story about him from before when he was working at standard chartered as a fx trader blind. He had a similar impairment where he was losing his vision and used the time in between to train himself to work and visualize graphs from data read out to him or something like that

	
WhyNotHugo on April 20, 2020 | prev | next [–]

I had a professor in university who was blind.
To this day, I'm amazed at how I could read code to him, and he's spot where the mistake was.

He coded with a screen reader. AFAIK, accessibility on Linux is pretty poor in general (I'm a fan of Linux, but I get the impression that's the truth), so you might want to consider well what you main OS will be.

Frontend might be tough -- but then, you're a perfect candidate to give feedback on website accessibility. There might be a career there if well-planned.


	
trm42 on April 20, 2020 | prev | next [–]

Sorry to hear about what's happening to you. Read once about this guy who's using screen reader to code:
https://www.vincit.fi/en/software-development-450-words-per-...

One of the interesting things here is the mention of web frontend frameworks which may make the frontend work possible even without seeing the frontend.

Hope you'll get through the life change. Take care.


	
fsckboy on May 3, 2020 | prev | next [–]

check out TECO as a text editor. It was designed way back in the day when printing minor text edits to paper (or paper tape!) over and over would waste a lot of paper, so it trained you to keep a picture of your text in your head and normal editing was writing little macros in your head to move around and make changes.
EMACS was originally written in TECO. Don't waste a lot of time reading about people remembering TECO today, you'll hear too much from all the people who talk only about LISP's parentheses and not about how perfect the people who love LISP find it. Better to spend your time seeing if you love TECO.

https://almy.us/teco.html

download it here https://github.com/blakemcbride/TECOC

read about it on wikipedia and check out the external links https://en.wikipedia.org/wiki/TECO_(text_editor)

the guy who created it in the early 60's is still around http://www.opost.com/dlm/#teco


	
diebeforei485 on April 19, 2020 | prev | next [–]

I have heard anecdotally that Apple in particular does hire a lot of blind software engineers - in large part to help make its products accessible to the blind.

	
dan-robertson on April 19, 2020 | parent | next [–]

On the other side of this, I’ve heard that the software Apple makes tends to be very good from an accessibility standpoint. An advantage of not needing to look at it is that you can have your phone screen permanently off and get a massively extended battery life.

	
robocat on April 20, 2020 | root | parent | next [–]

I wasted a bunch of time attempting to start making a mobile single page app accessible. Much of that was due to Safari 12 on an iPad, because I had believed that Apple VoiceOver was good. I found VoiceOver to be incredibly buggy. With iOS system apps, I was able to see where the voice feature was totally misleading or just wrong. And trying to use the ARIA markup to get Safari to voice the UI correctly felt like a dark art, and I gave up after weeks of effort.
If Apple VoiceOver is the best, god help the blind, because our software is failing them (and that includes the software I was responsible for).


	
ssivark on April 20, 2020 | prev | next [–]

On the question of tools:
1. Emacspeak, a text-to-speech system developed by T.V. Raman (a developer at Google) who was blind since childhood: https://en.wikipedia.org/wiki/Emacspeak & https://en.wikipedia.org/wiki/T._V._Raman

2. How a completely blind dev/manager uses Emacs daily (talk at a recent Emacsconf) -- https://www.youtube.com/watch?v=i8dBvssptP0 & https://www.parhamdoustdar.com/2016/04/03/tools-of-blind-pro...

3. Google has an app called "Lookout" which they suggest using while wearing your phone attached to a lanyard around your neck, that uses ML (not fully perfect) to identify objects in front of you.

To the extent that you stay within some homogeneous environment and avoid fragmentation in your tools, you might be able to get good text-to-speech. (The quality of AI solutions will hopefully continue improving drastically over the next few years)

Also, probably experiment with and invest into one of the software ecosystems (Google/Apple/Amazon/etc) so they get comfortable with understanding your voice.

You probably want to avoid the mouse, and get comfortable with a fully keyboard based workflow. To that end, check out browsers like Qute and Next.

----

Beyond software and tools, would you want to relocate to some place where there is dependable public transport (or cab service)? Once you move, it might take a while to get familiar with the surroundings.

Good luck, and hope you manage to stay ahead of the curve. I'm sure finding community would help. Try reaching out to some of the people mentioned in this and other comments -- I'm sure they would love to help.

----

PS, HN'ers: It would be great to find a few interviews with accessibility-oriented guidance on "Usesthis". To that end, I've opened a Github issue with this request. Feel free to comment there and add suggestions of people to interview, or other recommendations https://github.com/waferbaby/usesthis/issues/97


	
cdiamand on April 19, 2020 | prev | next [–]

Sorry to hear that! Not sure if you're familiar with algolia, but you can search of all of hacker news for blind programming resources:
https://hn.algolia.com/?dateRange=all&page=0&prefix=true&que...

Hope this helps and best of luck!


	
tomohawk on April 19, 2020 | prev | next [–]

Consider getting a job at a fortune 100 company or with the federal government, or with a company that does contracting for the federal government.

	
irrational on April 20, 2020 | prev | next [–]

I don’t have any experience, but I had a girlfriend in the late 1980s who’s dad was a totally-blind programmer. Surely in the past 30+ years technology has made a lot of strides so that it should be even more doable now than it was back then. Or in other words, if a guy who had been totally blind from birth could be a programmer in the 1980s, you can definitely do it in the 2020s.

	
Marconius on April 20, 2020 | prev | next [–]

Look into local blind center resources for immediate help in the transition process. The earlier you start working with the Department of Rehabilitation, the sooner resources can be made available for training, education, and tech you'll need moving forwards.
I was an animator and VFX artist and lost my vision suddenly in 2014 in the span of 30 minutes. I can no longer do that work, but started learning orientation & mobility white cane training from the Lighthouse for the Blind in San Francisco and worked with the Dept. of Rehab to figure out life moving forwards. I received training in how to use a screen reader in iOS, Android, Mac, and Windows. I learned about accessibility and dove into my background as a former QA engineer for animation software and my UX/UI experience from VFX and motion graphics and started learning development on my own time. Figured out Python using TextEdit and Terminal on my Mac, am in the process of learning JS, used Xcode to learn Swift, and I tend to code websites by hand, then share them with someone with sight to check out my CSS.

There are a lot of resources out there to help you adapt, but it will take baby steps. I highly recommend you learn braille as blind coders tend to use braille displays to quickly check through lines of code, although I primarily just use VoiceOver to listen to code line by line at a very fast speed. Braille will help you type a lot faster on your phone when you find a collaborative work experience to be inaccessible; we use Slack at work, but the desktop version is awful in terms of accessibility, so I only use the iOS app and can quickly and accurately type out very detailed messages using Apple's braille screen input.

It's all about adaptation and not being afraid to ask for help. Zoom and Google Meet work great, and Microsoft products have gotten much much better in terms of accessibility. Google Suite takes a lot of getting used to, but is doable and functional with enough practice.

If you are on Windows, Jaws and NVDA will be essential to learn, and I've heard that Visual Basic studio is very accessible. I haven't found Sublime, atom, or other text editors to be accessible on the Mac, but TextEdit and Xcode work just fine for all matter of filetypes, and of course emacsspeak and Vim work in Terminal or iTerm.

Check out the /r/Blind sub reddit, Applevis.com, and know that you'll have support. It's a huge transition but you'll make it through!


	
thepratt on April 20, 2020 | prev | next [–]

I don't have information to share on where to look, but some positions to consider relate to a11y. I've met and worked with some consultants in the past that their entire position was dedicated to making websites and apps more accessible - audits and on-going. He also did training for teams to bring them up on best-practice so the dev teams can do this proactively.

	
Shebanator on April 20, 2020 | prev | next [–]

You have my deepest sympathies - it is tough enough going blind, but having to cope with potential hearing loss as well? The good news is that there are solutions even in this space - https://www.helenkeller.org/hknc is a good resource, as is the National Federation for the Blind.

	
MattPalmer1086 on April 19, 2020 | prev | next [–]

I met a blind front end web developer a few years ago. I'm afraid I don't have any details on his setup, but they do exist.

	
josephkern on April 20, 2020 | prev | next [–]

You should consider setting up a well known and repeatable folder structure for your email inbox.
You will need to file everything into a phonetically distinct structure for efficient navigation through your folder hierarchy. Nested directories in this case is not a bad idea.

I have seen this type of structure used very efficiently with a screen reader and Outlook in person.


	
daviddever23box on April 21, 2020 | prev | next [–]

You will survive and thrive in the remote era; that said, make a note of the areas for which screen readers lack coverage (i.e., BIOS screens, stack traces and the like) so that you can work around or call out a need for said tools.
Good luck, and do reach out if you need anything; PVL is real and more people suffer from it than you'd realize at face value.


	
collyw on April 20, 2020 | prev | next [–]

Just a thought, as I am in no way an expert here, but there must be companies that help implement solutions for people with vision problems. I am sure they would be the most sympathetic to hiring people in your position, you will have unique insights that able sighted programmers won't. Maybe get in touch and see what they recommend.

	
ruckuus on April 21, 2020 | prev | next [–]

This one quite old article about a blind software engineer at Google, may not directly help in any way, but thought to share it here https://www.businessinsider.com/how-blind-google-engineer-wr...

	
contingencies on April 20, 2020 | prev | next [–]

Get off the computer and enjoy the sensory world while you can. You will have adequate time to hone your comprehension of process, formalism and other manner of abstract erudition thereafter, which will have its own beauty. Travel is a bitch if you can't see. Get out there now. I can recommend from first hand experience cycle touring with a tent and sleeping bag as a good way to see much of the world at a leisurely pace and very cheaply which does not require you to waste time saving money. Having that geographical reference to hang subsequently acquired knowledge on is golden. Get out there. http://www.artoftravel.net/

	
leanuser57 on April 20, 2020 | prev | next [–]

First of all, I wish you luck and strength. I can't really imagine how this must be for you.
One little pointer: I know that edbrowse is developed by a blind programmer. It might take some time to adapt to, I guess.

https://github.com/CMB/edbrowse


	
hindsightbias on April 20, 2020 | prev | next [–]

Working at big-corp, have worked with several differently abled coders who were amazing. You might look at larger orgs, like Cisco, P&G, IBM etc. Modern tooling may make it easy for smaller orgs, but big corps have been active in these types of issues for a long time.
teamblind.com has forums on employers and hiring info.


	
jll29 on April 19, 2020 | prev | next [–]

SAP had or has a blind developer at their Walldorf, Germany headquarters. As of 2000, he was using a Braille line.
Perhaps back-end work is easier without vision, in particular databases.

I hope you get to travel a bit whilst you can still see - catch some beautiful memories (nature) while you can... that's what I would do. All the best!


	
zachrip on April 19, 2020 | parent | next [–]

I spent last summer working remotely traveling a lot of Western Europe mostly by myself and it changed my life. I'd never left the country before and here I was dropped off in Oslo at 1am by myself. Now I have so many memories and I take time most days to look at the pictures I took to try and build stronger mental imagery that I can remember. I wish everyone had the opportunity to do so.

	
godzillabrennus on April 19, 2020 | prev | next [–]

If you are in the USA then I think the best profession for the blind is the legal trade. Do you have it in you to change careers?
Courts in the USA are by and large accommodating thanks to the ADA.

Your technical background, with the loss of vision, with a legal degree, and I think you’d have a very long, lucrative, and fulfilling career.


	
spir on April 20, 2020 | prev | next [–]

http://www.alteraeon.com/ may be of interest.
Alter Aeon is a text-based online roleplaying game (a MUD). I believe that over half of their players are vision-impaired. Perhaps they could be a source of information as well as community.


	
DCRichards on April 21, 2020 | prev | next [–]

I recommend watching (and listening to) this talk by Saqib Shaikh, a blind developer using Visual Studio and how we codes and debugs with his screen reader https://www.youtube.com/watch?v=94swlF55tVc

	
katar on April 20, 2020 | prev | next [–]

If you haven't already looked into it, your state probably has some kind of "services for the blind". I have RP and was able to get help from them. Definitely look to see if your state has a govt dept like that. They offer tools and training to those in need to get jobs or keep working.

	
adrianbye on April 19, 2020 | prev | next [–]

I'd suggest making the focus being what you need in order to support yourself as a blind person, not being a software engineer.
There may be particular things blind people excel at and do very well with. Use a list of those things as your starting point.

Perhaps software engineering is on that list, but I'd make sure.


	
hliyan on April 19, 2020 | prev | next [–]

So sorry to hear this! I have no expert advice to offer, but have you thought about developing a very high level of expertise in some area (preferably in some areas of back end architecture) which allows you to consult without having to write code (unless that is what you truly want to do).
Best of luck!


	
lobo_tuerto on May 1, 2020 | prev | next [–]

Two years ago this was posted on HN:
Blind since birth, writing code at Amazon since 2013 https://news.ycombinator.com/item?id=16896236

Hope it can be useful, and alleviate a bit the anxiety you are feeling.


	
marcg on April 21, 2020 | prev | next [–]

Look up Dr. Chieko Asakawa, who is a distinguished researcher and technologist at IBM for accessibility concerns. Having lost her sight at a young age, she understands this space. I had the pleasure to work with her and her team, years ago, and found them to be incredibly sharp.

	
ChrisRR on April 21, 2020 | prev | next [–]

I'm reminded of this short video of a blind software developer using Visual Studio. Maybe it'll give you some idea https://www.youtube.com/watch?v=94swlF55tVc

	
skocznymroczny on April 20, 2020 | prev | next [–]

At my university computer science course, there was a student who had sight issues. He was actually one of the better students. Most of the time he was writing the code with high-contrast theme enabled and extreme zoom, like see only few words at a time kind of zoom.

	
gobins on April 19, 2020 | prev | next [–]

In a similar situation though as not as bad as what you have and have thought I should prepare for the worst. I have CSR(Central Serous Retinopathy) for the last 3 years. It come and goes but my eyesight gets worse every time it comes back. Stay strong.

	
mmaret on April 20, 2020 | prev | next [–]

They are not "production ready", but you may, one day, benefit from retinal implant. One of the most advanced seems to be from https://www.pixium-vision.com/
Good luck !


	
mmaret on April 20, 2020 | prev | next [–]

They are not "production ready", but you may, one day, benefit from retinal implant. One of the most advanced seemd to be from https://www.pixium-vision.com/
Good luck !


	
sheinsheish on April 20, 2020 | prev | next [–]

Start learning a musical instrument. This will give you something for the soul and heart to look forward to. Especially because developing is exclusively a mind activity and also because playing music activates and connects both sides of the brain.

	
dcreemer on April 20, 2020 | prev | next [–]

I have an (adult) child with Usher Syndrome, and have lots of connections and resources that I'd be happy to share. There is a a decent amount of research going on right now. If you like, feel free to reach me at my username at gmail.

	
fludlight on April 20, 2020 | prev | next [–]

Look into becoming an ADA consultant for web/mobile. It's a growing market that companies are forced to pay attention to due to lawsuits. There is recurring work every time they redesign parts of the front end, which is often.

	
DoreenMichele on April 24, 2020 | prev | next [–]

You can also join blind dev works.
https://groups.google.com/forum/?nomobile=true#!forum/blind-...


	
rergaerg on April 20, 2020 | prev | next [–]

Thanks for this question and for everyones answers. I am a software engineer, and have a friend, female, aged 30 from a different department at work who is going blind and afraid to research anything. I think this will help a lot.

	
ubrpwnzr on April 19, 2020 | prev | next [–]

I agree with those that reference the govt policies that all orgs are suppose to follow. This could really turn into your career. I went to school with a blind network engineer and he was top of the class. Stay strong brother.

	
KuhlMensch on April 20, 2020 | prev | next [–]

I am not blind, but as a frontend engineer, I have noticed when myself or my colleges do frontend state, we will use TDD/Component testing using enzyme or react-testing library for days, and only do the final test visually.

	
aivarannamaa on April 20, 2020 | prev | next [–]

It could be good idea to learn about accessibility API-s (MSAA, UI Automation, Accessible 2, ATK), in case you want to contribute to improving the screenreaders and/or create new accessibility tools, now or in the future.

	
Elof on April 20, 2020 | prev | next [–]

I'm not loosing my vision, but I'm dyslexic. I listen to almost all content, but just assumed I couldn't do that with code. This is inspiring me to try.
Thank you OP for asking and thank all of you helpful HN folks for sharing.


	
kikoreis on April 20, 2020 | prev | next [–]

I have worked closely with Nicolas Pitre, a kernel engineer who is blind and is one of the most amazing people I've worked with. I'm happy to put you in touch with him if you like -- my email is in my profile.

	
yadco on April 20, 2020 | prev | next [–]

Maybe focus more on software design / general architecture. Or teaching programming concepts. Or some other job that you would be using your knowledge while not having to stare at code for hours on a screen.

	
hopia on April 19, 2020 | prev | next [–]

https://www.vincit.fi/en/software-development-450-words-per-...

	
qu4ku on April 20, 2020 | prev | next [–]

I strongly recommend you to consider cybersecurity. I believe that you not only will have a chance to compete with typicals but you will have an edge.
The shell is a pretty awesome place to be in if you asked me.


	
saagarjha on April 20, 2020 | parent | next [–]

I'm not sure what being blind has to do with cybersecurity?

	
blue_devil on April 20, 2020 | prev | next [–]

Perhaps off-topic: if you have not read "The mind's eye" by Oliver Sacks, you may find it helpful, emotionally. Keeping an (audio) journal might help also to cope with anxiety.

	
CPLX on April 20, 2020 | prev | next [–]

Only tangentially related to your question perhaps, but it's good time to become a musician, and to learn all the various software and digital elements involved in making modern music.

	
brozaman on April 21, 2020 | prev | next [–]

> - Are there blind frontend engineers?
I know one frontend dev who is entirely blind from birth. He specializes on making websites accessible for blind people, and he's got a good reputation.


	
straffs on April 20, 2020 | prev | next [–]

My father was in a similar situation in his 30's. He went back to school and became a physical therapist. Today he says it is one of the best choices he made in his life.

	
kuon on April 20, 2020 | prev | next [–]

I have no real advice. But I want to wish you good luck. And let you know that at my modest level, I will always advocate for good accessibility in software and hardware.

	
DekelS on April 21, 2020 | prev | next [–]

Hi,
I was wondering if you might have a LinkedIn profile so I can review your experience and skills. Maybe in the near future, we can use someone with your abilities in our company.


	
imprettycool on April 19, 2020 | prev | next [–]

If I were in your position, I'd probably get a job at someplace like Facebook or Google. They're huge, cushy companies and probably have resources for SWEs that go blind. Who knows maybe you can go on disability while you're working there, and never have to work again in your life
BTW, I don't know if asking the internet for advice on this subject is a good idea. I imagine it's gonna be mostly speculation. I'd seek out other people that have firsthand experience (i.e. they went blind) and ask what they did and how they're doing...


	
DekelS on April 21, 2020 | prev | next [–]

Hi,
Do you have a LinkedIn page by any chance? I would like to review your resume and skills.

We will need some additional force in our company in the near future, and you might fit =)


	
nerdinja on April 21, 2020 | prev | next [–]

I once played World of Warcraft: Classic with a blind man I met on Twitch, if he can do that, you can sure as hell write good lookin' code.

	
begeekandchic on April 20, 2020 | prev | next [–]

I think you might find this interesting - https://serenade.ai/

	
stevev on April 21, 2020 | prev | next [–]

Not sure if anyone has mentioned plover. A few years ago a dev was able to use it audio wise to code. Programming by sounds. openstenoproject

	
bergstromm466 on April 20, 2020 | prev | next [–]

It is so incredibly heartwarming to me to see this thread stay as one of the top submissions/threads as long as it has.
Thank you HN community.


	
lholden on April 20, 2020 | prev | next [–]

> I'm a 24 y/o full stack engineer( I know some of you are rolling your eyes right now
It can be tough some times being a younger person in the industry, but know that there is no reason anyone here should be rolling their eyes at this. I was working full time in software development at 17 myself.

> What kinds of software engineering lend themselves to someone with limited vision? Backend only?

There is a growing market for front end web accessibility. Especially for software that meets the needs of both sighted and non-sighted individuals. Not only do I think there is a place for non-sighted individuals in front end software development if that's something you are interested in, but I think it's vital to have these individuals having a role in developing front end software.

> Does your company employ blind engineers? How well does it work? What kind of engineer are they?

We do not currently employ any blind engineers, though we would be very happy to hire one. We have customers that require visual accessibility compliance and right now this compliance is largely being implemented by sighted people. I would consider this a non ideal situation.

With this said, I also don't want it to be felt like you have to specialize in your own disability either. I have known some really badass back end engineers that are entirely blind. With the right tools and some experience, they are able to consume content at the same speed as any sighted person. Hell, in some cases... significantly faster.

> I'm really trying to get ahead of this thing

I think this speaks for your character. It's easy to get caught up in denial and to hold out until the very last moment.

I can't personally speak to how it feels to deal with going blind, so I'll let those with much more experience in this area speak to that. One thing I can say though, is to start using the available tools now and full time, even if you don't require them yet. By the time you find yourself depending on them, you will already be accustomed to using them.

I'd be happy to speak about my own personal struggles with disability (I am rapidly becoming deaf), but honestly... I'll spare you that unless you actually want me to. It's obviously a very different experience and I don't want it to feel like I am diminishing the significance of what you are going through. :)

> Since my diagnosis I've slowly developed a crippling anxiety centered around a feeling that I need to figure out the rest of my life before it's too late.

This is a very reasonable and understandable reaction to what you are dealing with.


	
blzaugg on April 22, 2020 | prev | next [–]

Would you be willing to chat privately with a colleague of mine going through a similar lost of sight transition?

	
NitroNills on April 19, 2020 | prev | next [–]

edbrowse(1) is developed by seeing-impaired person - it's a webbrowser with ed(1)-like interface which also does JS. I've heard it's awesome for scripting! Though it requires som ed(1)ucation.

	
mannanj on April 20, 2020 | prev | next [–]

I know I'm not helping you with your original question but I hope this can be well received anyway. Have you looked into or tried extreme diet interventions in the way of recovery? Red light or other type of light therapy?

	
Techasura on April 20, 2020 | prev | next [–]

This will help you mate: https://youtu.be/cmpu58yv8-g

	
g_langenderfer on April 20, 2020 | prev | next [–]

https://www.youtube.com/results?search_query=blind+software+...

	
emgee_1 on April 20, 2020 | prev | next [–]

Definitely checkout emacspeak.

	
emgee_1 on April 20, 2020 | prev | next [–]

Definitely checkout Emacspeak.

	
Fr0styMatt88 on April 20, 2020 | prev | next [–]

I've been very low-vision since birth and having glaucoma (since birth) meant that I lived with the very real possibility of going blind. I knew this from the time I was a child and preparations were made. Thankfully my glaucoma has been under control for many years at this point, though I'm still extremely low-vision. So what follows is just some random points, as I don't really know how to keep this post reasonably short, nor what should go in what order. So hopefully this doesn't devolve into rambling :) Anyway, some observations and lessons:
- Others have mentioned touch typing. I was taught touch typing from an early age with the help of an educational support teacher. I can say that it's one of the most valuable skills I have and I'm really, really thankful to the special teachers that put in the effort with me over those years.

- I naturally gravitated to computers. I don't know what it was, but after seeing them in school, I had to have one! I never got into blind sports as a kid and couldn't play most regular sports at school, so my parents saw the opportunity of computers as something I could get into. Something else I'm really really grateful for (I've been incredibly, incredibly lucky). The rest is history.

- I'll stress again - if you love software engineering and computers, there is no reason at all that it can't be your profession.

- Tech-wise, I use a magnifier on my Android phone and I use the magnifier on OSX. On Windows, it's easier to sit close to the screen. If you're at the stage where you need screen magnification, I can say that I've found the OSX built-in magnifier along with the trackpad a stellar combination.

- I find it difficult to locate the mouse pointer, so I use an extension called Saka Keys in my browser, which allows me to follow links on pages without having to use the mouse. I primarily use the command line for things if I can, especially if I might be on another machine that I can't get as close to as I need (eg- helping a friend quickly). You get to a point with touch-typing where you can feel when you've made a typing mistake. You also get really good at memorizing stuff, as others have said.

- At work, don't be afraid to speak up about what you need. This is tough. For many years I was embarrassed about needing help. It's illogical, I know, but it happens. You want to be independent and prove that you can be 'just as capable' as everyone else. That's a double-edged sword though. People WILL forget you are vision-impaired. I had a friend that I've known for years ask me why I sit so close to the webcam a few days ago when we were video chatting. My webcam is on top of my monitor.

- Believe it or not, people WILL forget you are vision impaired or even blind. I have plenty of experience with the former. If you're fiercely independent, people won't think to offer you help. You need to get comfortable with asking for help when you need it. It's a long, long process and something I'm still not 100% on myself; it's difficult.

- A case in point: At work, for the longest time if somebody wanted to show me code or talk me through code, I'd feel too self-conscious and awkward to say anything as we sat there and they started talking through their code. You get really good at memorizing stuff and going off what they say along with the broad 'shape' of the code. It would only be when I needed something specific, like they were pointing to a value or something, where I would lean in and say "what was that value again?". Nowadays I'm much more comfortable in my own skin and I simply ask them to either enable the magnifier on their machine, show me code through a remote desktop connection or I go to my machine and I have them talk through the code while I'm sitting as close to the screen as I need to.

- On a more philosophical note about other people; you're going to come across some strange, but well-intentioned behaviour. I've had new co-workers ask me why I sit so close to the screen; people assume if you're wearing glasses that your vision must be fine. You'll get really annoyed at the "sitting close to screens ruins your eyes" crowd; yes, I've been told (with good intentions) that sitting so close might damage my eyes.

- The way I think of this is that people are generally good and I'm happy to answer questions from anyone, as long as they're made in good faith. Often I think that people are just uncomfortable with talking about disability. Being a kind of a taboo, they think it's better to 'not say anything', or they're afraid of being rude. I'd rather people ask and I've also become a lot better at being forthcoming about what I need.

- I'm still learning not to shy away from being a 'vision impaired' person. There are some YouTubers that I recommend which I find really inspiring and helpful in this regard:

- The Blind Life is a YouTuber (who if I recall correctly has RP) who focuses on assistive technology and gadgets.

- Molly Burke does some great stuff. She is also blind, RP I think.

- For disability more generally, I cannot recommend 'Special Books By Special Kids' highly enough. It will literally change the way that you react to people. It is utterly incredible.

I know it's very different when you haven't grown up with a disability and suddenly you have to deal with it vs it being "the way it's always been", but I hope some of this might help and I wish you all the best.


	
mahdid000 on April 20, 2020 | prev | next [–]

you can work as a conciliar and give some advice to companies.

	
mhkool on April 20, 2020 | prev | next [–]

Search for Dr den Boer on YouTube. In one of his videos he says: I am no ofthalmologist and a patient that was loosing sight came in and TL;DR his sight came back after 6 months of treatment. Of course I cannot make promises but with loosing sight I would certainly visit him.

	
takecarefnd on April 20, 2020 | prev | next [–]

I suggest you to learn meditation. It can help to relief your stress.

	
takecarefnd on April 20, 2020 | parent | next [–]

Calming the Mind: The Practice of Awareness Meditation
https://www.youtube.com/watch?v=dG5ywz8OGqo


	
diogopmelo on April 21, 2020 | prev | next [–]

I am blind and I have been working as a software engineer for almost 3 years. My formation was as an economist with a Master in management, but I went into a 10 month reconversion course to IT, focused on java programming. I am working at a Portuguese international company called Critical Software (I am Portuguese), and it is really inclusive and I feel great. When I was looking for a job in economics./management I felt that no-one wanted to employ me because of my blindness, it was a little depressing, but in IT what matters is your brain, so, usually, there is no discrimination. Sometimes some creativity is needed to overcome some visual challenges, some inaccessible documents or less navigable websites, but with a good team spirit and no problems in assuming when you need help, everything is doable. My experience is fully as a backend developer, but I had an internal workshop on React and I could make things happen in frontend during that afternoon. I am a Mac user (using VoiceOver) and I've used Windows with Jaws and NVDA before 2013. Now I am starting a new challenge at work, because we have to use Linux to run the test environment and, after having a very inaccessible experience with Mint in the last days, I will now install Ubuntu and try to completely figure it out with Orca, its screen reader. I am also doing a Master degree in Software Engineering since September, I've encountered some challenges, but where others visualize, I tend to create mental representations and, sometimes, I have a broader mental picture of things than my colleagues. I also agree with the user about the super-powers, I am realizing that my reading speed is priceless when there are things to learn at work or to study.
Regarding life itself... you can prepare in advance, I knew that I would become blind since I was 8 (I am 29), I still see a tiny bit, irrelevant to work or study but useful to figure light and some walls. I started to try to get around my room at night with no lights and I developed some confidence in myself during my teens. I also learned how to walk with the cane before I thought I needed it, it gives you extra security to know that you are prepared for the inevitable. And walking independently on your own is a requirement to have a guide dog.

I am an independent blind person now and, besides driving, I do everything I want. I play guitar, drums, go to the gym, hear the books I want with my screen reader and I've lived alone and cooked on my own for one year and I still have all my fingers. I know blind people that watch Netflix with audio descriptions, others that run marathons, play futsal...

My biggest challenge was when I wanted to change to software development and my first trial was a failure, and I lost hope of doing it. Since you have that part already, my suggestion is to be calm, believe that, like others, you are capable of overcoming the challenge and try to be yourself and believe in your problem solving capabilities, because in the en that is what life and blindness is about. And trying to prepare in advance and believing it is possible is a decisive first step, believe me!

Try to familiarize yourself with screen readers - NVDA on windows, Voiceover on all Apple things, Orca on Linux, talkback on Android. Know how to turn yours on and off and try to get familiarized with hearing things. There are other tools but I am not an expert on neither: braille displays, tactile printings, haptics also.

Also, try to have some mobility lessons (I don't know if it is the right English term), it is important to learn to feel and hear instead of seeing and to "activate" the capabilities you already have but never needed.

Sorry for the essay, but I wanted to assure you that you can live your own life and be independent despite being blind. If you need anything, diogopmelo@gmail.com


	
attrutt on April 20, 2020 | prev | next [–]

Learn to C

	
O_H_E on April 19, 2020 | prev | next [–]

Someone on lobste.rs posted a few days ago that they are doing an month-long experiment programming with their voice. Maybe get in contact with them.
https://lobste.rs/s/qi5dmk/how_does_your_current_dev_workflo...


	
peter_d_sherman on April 20, 2020 | prev | next [–]

Hi! My name is Peter Sherman. I have been a software engineer for 20+ years. I have also engaged in regular meditation for 20+ years. I would suggest that what you're going to experience in the future may turn out to be a blessing, rather than a curse, as daunting as the idea of future blindness seems.
Now, before I am tarred and feathered alive by pretty much everyone here in the HN community, please give me a moment to explain!

You see, most people spend their lives, their entire lives, searching for something which is outside of themselves, something which they believe will make them happy.

If they find it, it very well might, but unfortunately, it's only for relatively short periods of time, and then desire kicks in, and then there's a new set of goals, a new set of priorities. Nothing lasts forever. Nothing that grants happiness, even for many years -- will continue to do that for many more. Everything changes. (This is Buddhist philosophy incidentally).

What you're searching for, might very well be within -- rather than in the external world.

So how do you find this thing within?

Well, the first step is that you have to close down the external world.

You do this by closing your eyes (note that this is no different than blindness -- but it is less permanent), and relaxing, observing the mind and its flow of images.

If you see nothing but black... don't worry, I promise you, there's a ton of stuff in there -- more than you could ever imagine, more than 80 Zillion Internets' worth of data.

You'll see black for a fairly long time, maybe it will be months, maybe it will even be years, but eventually (with continued regular meditation) is that you'll start to see pinpricks of light, bits of sound, and you'll start to get intuitions and ideas from the higher mind, and you might see flashes of images. You might also drift off into lucid or semi-lucid dreams.

The trick is, don't try to use any force whatsoever to try do any of that, or those things will disappear. The harder you try, the less success you'll have (it's paradoxic in this respect), so a relaxed gentle focus is the key.

Becoming blind, at least the knowledge that that's going to happen to you -- could be compared to knowing that one day in the future you're going to be pushed into the ocean -- and you don't know how to swim.

Meditation, closing the eyes for at least 20 minutes a day, at a regular time every day, and relaxing, letting go, but maintaining a teensy bit of relaxed, gentle focus, gentle presence ("be here, now"), is not unlike learning to swim.

By the time you are pushed into the ocean... you want to be a champion swimmer, not someone who doesn't know how to swim.

Meditation then, is like learning how to swim, if the knowledge of future blindness is like being forced into an ocean...

Anyway, if you'd like, we can talk more about this. Shoot me an email at peter.d.sherman@gmail.com, and let's chat!

Oh, and here's a great song, by the way:

Billy Joel - In The Middle Of The Night (The River of Dreams) https://www.youtube.com/watch?v=A9HFYNITCSs

OK, NOW the HN Community -- can tar (-xvf) and feather me! :-)


	
growlist on April 19, 2020 | prev | next [–]

Good luck man. I'm mildly visually impaired myself and the average person gives it no consideration whatsoever.

	
AS126 on April 20, 2020 | prev | next [–]

Man, I'm so sorry to read this. You are so young, god damn it. You already receive great advice in this thread, I can only wish you the best! Please don't let this bringing you down! Have a wonderful life, no matter the situation! Cheers.

	
paypalcust83 on April 19, 2020 | prev | next [–]

Accessibility engineering perhaps.
I'm fairly certain I'm going to get ARMD because of genetics and family history, and won't have anyone to care for me. It's going to suck.

As my late grandfather said: Getting old isn't for wimps, but the alternative is worse.


	
svilen_dobrev on April 20, 2020 | prev | next [2 more]

	
fctorial on April 19, 2020 | prev [–]

You should try out a lisp. They have the simplest syntax and the code is quite concise.
> This code turned out to be a lot more complicated than I anticipated. The patch ended up adding a hundred lines of Arc. A hundred lines of Arc! Do you have any idea how many lines of Arc that is? I just looked through the history and the last commit that added that many lines of code was over two years ago when we got Arc to compile to JS. [1]

Clojure is quite well documented, and you can do full stack development with it (clojurescript). Intellij has good support for it, and it stores the state of code as an ast. I think there are addons for dealing with ast (search/replace) as well.

Also, you might want to "settle down" wrt your dev setup (tech, tools), since jumping from project to project, tool to tool won't be that easy. Maybe pick a self contained environment you can learn inside out (smalltalk, tools.deps).

Emacs seems to check all these points, but it's still visual oriented. Maybe build one yourself.

[1] https://news.ycombinator.com/item?id=22767204


	
dan-robertson on April 19, 2020 | parent [–]

Counting parents without being able to see indentation sounds like hell but surely there are alternative solutions.

	
dan-robertson on April 20, 2020 | root | parent [–]

Ugh I typod “counting parens”





Guidelines | FAQ | Lists | API | Security | Legal | Apply to YC | Contact

Search: 
