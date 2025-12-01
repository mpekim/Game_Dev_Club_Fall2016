# TABLE OF CONTENTS
- [Welcome](#welcome)
- [Game Design](#game-design)
- [Programming Techniques](#programming-techniques)
- [Version History](#version-history)

# WELCOME

Welcome to the re-purposed ***Game Dev Club Fall 2016*** repository.

This was likely one of the first repositories I had ever made on Github or Gitlab.
However, it was quite literally untouched for about 5 years.

I intend to "revive" the repository as the blueprint for a basic game made
using web design code (HTML, CSS, JS).

As of 10/8/22, the repository consists of a small, yet functional
"quiz-based" game. 
Every answer must be correct in order to reach
the "EndGame" (in other words, one incorrect answer ends the game). (Version 0.0.0)

As of the latest version (1.0.0), each question comes with three
lives. This will be fixed soon to have the same number of lives
carry over from question to question.

# GAME DESIGN (Version 0.0.0)

As of right now, I plan on the game being as a *text-based adventure*, using HTML files to traverse between levels.
There are two forms of data within the game:
- *Users (made with JS classes)*
- *Passwords (provided at the end of each level)*

CSS and JS code will be used to provide imagery and functionality
to the game, including features like a "password" system to save
progress. (JS Functionality for passwords will use forms).

The classes shown below show the level structure of the game.
So far it is intended to be a "one-way street" - the simplest
style of game.

```plantuml

class Level1{
    +goToLevel1()
    +goToWrong()
    
    -password: int
}

class Level2{
    +goToLevel2()
    +goToWrong()

    -password: int
}

class Level3{
    +goToLevel3()
    +goToWrong()

    -password: int
}

class Level4{
    +goToLevel4()
    +goToWrong()ks

    -password: int
}

class EndGame{
    +goToEndGame()
}

Level1 --right--> Level2
Level1 --up--> Wrong
Level2 --right--> Level3
Level2 --up--> Wrong
Level3 --right--> Level4
Level3 --up--> Wrong
Level4 --right--> EndGame
Level4 --up--> Wrong
```
# PROGRAMMING TECHNIQUES

The following programming techniques have been used in order to make
this game possible:

***CSS***
- Classes
- Attributes/Values
- Keyframes

***JS***
- Functions
- Classes
- DOM (Document Object Model)
- ES6
- LocalStorage (Memory for Game Data)

***Bash***
- Scripts
- Functions

***HTML***
- Button Code
- Links to JS
- Comments
- Metadata
- Semantic Tags

***PlantUML***
- Classes
- Arrows
- Attributes/Methods
- Notes

***Docker***
- Containers
- Dockerfiles

# VERSION HISTORY

## Version 0.0.0
- This is the most basic, functional version of the game.
While technically playable, there is no transfer of data
within pages; users are also only placeholders and do not
technically "work".
- Passwords are coded to single values and are easier to
remember once obtained.
- Health: only "1 life", Game Over ensues after a single
wrong answer.

## Version 1.0.0
- Adds functionality to the User class, and allows for
transfer of data across levels.
- Passwords are now randomized and are refreshed every
time at the Game Over screen.
- Health: Lives transfer between levels but reset to
3 each time.

## Version 2.0.0
- User health will transfer across levels, allowing for
a set amount of health across the entire game.
- Question pool has been increased.