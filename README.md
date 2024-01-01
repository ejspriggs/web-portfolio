# Screenshots
![Projects menu open](https://i.imgur.com/nLElslR.png)

The "Projects" drop-down links to tic-tac-toe, and has a placeholder link for the stretch version of it.  Drop-downs are implemented using the strategy described here: https://www.w3schools.com/howto/howto_css_dropdown.asp , and screenshots are taken for the present document using the ":hover" pseudoclass forcing option in the Firefox debugger.

![Themes menu open](https://i.imgur.com/HwPoDrP.png)

The "Themes" drop-down implements a theme-switcher in JavaScript, using the variable-scope-based strategy described here: https://medium.com/@haxzie/dark-and-light-theme-switcher-using-css-variables-and-pure-javascript-zocada-dd0059d72fa2

![Tic-tac-toe screenshot](https://i.imgur.com/KwueqEc.png)

Tic-tac-toe, with the player's choice of mark, and a game results/play again function.  Both of the latter are implemented in a modal.  SVG glyphs are my own work, and were handwritten in XML.

# Technologies
- HTML
- JavaScript
- CSS
- SVG (XML)

# Installation Instructions
N/A

# User stories
- As a friend of Edward, I'm curious about why he's been so busy lately and/or want to gas him up about something he's put time into.
- As a hiring manager, I want to see if this Spriggs guy is any good at web pages.
- As someone interested in playing games in a web browser, I have encountered a link to one of Edward's portfolio projects in the wild, and I want to play the game.

# Unsolved problems/Major hurdles
The tic-tac-toe logic should be refactored.  My initial approach is less maintainable than it could be, but this didn't become obvious until I was running through the requirements and actually checking everything off.

I noticed while working on this assignment that I burned up a lot of cognitive effort thinking about the "right" way to do things that were really a free choice.  I also noticed myself using meta-strategies that were appropriate to a long iteration time, despite the iteration time being just a few seconds.  It seems I need to change some habits.

There are some usability issues that became obvious once I actually coded and used the game, that hadn't occurred to me while wireframing.  For example, showing the "game over" modal as soon as the game ends, with no delay, means that the user's last piece and possibly the computer's last piece are covered as soon as they are placed.  This isn't necessarily a "bug" in the strict sense of the term, since the program is performing as designed, but once I implemented it, I realized I should have designed it differently.

# Next Steps
- Refactor the game logic.
- Add a few more themes to the theme switcher, and make the colors prettier.
- Add more detail to my bio page, without duplicating the info already available in my resume too much.
- Improve game usability, including pausing before displaying the "game over" modal, highlighting the game-ending line (if there is one) during the pause, and moving the "play again" button to the bottom right corner of the modal.
- Duplicate the refactored game as a skeleton for the stretch version of the game, and update the portfolio link to point to it.
