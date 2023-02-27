## WELCOME

Welcome to the re-purposed *Game Dev Club Fall 2016* repository.

This was likely one of the first repositories I had ever made on Github or Gitlab.
However, it was quite literally untouched for about 5 years.

I intend to "revive" the repository as the blueprint for a basic game made
using web design code (HTML, CSS, JS).

As of 10/8/22, the repository consists of a small, yet functional
"quiz-based" game. Every answer must be correct in order to reach
the "EndGame" (in other words, one incorrect answer ends the game).

## GAME DESIGN

As of right now, I plan on the game being as a "text-based adventure", using HTML files to traverse between levels.

CSS and JS code will be used to provide imagery and functionality
to the game, including features like a "password" system to save
progress.

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
## PROGRAMMING TECHNIQUES

The following programming techniques have been used in order to make
this game possible:

*CSS*
- Classes
- Attributes/Values

*JS*
- Functions
- Classes
- DOM (Document Object Model)

*Bash*
- Scripts

*HTML*
- Button Code
- Links to JS.
- Comments

*PlantUML*
- Classes
- Arrows
- Attributes/Methods
- Notes

*Docker*
- Containers