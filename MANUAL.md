## WELCOME

Welcome to the re-purposed *Game Dev Club Fall 2016* repository.

This was likely one of the first repositories I had ever made on Github or Gitlab.
However, it was quite literally untouched for about 5 years.

I intend to "revive" the repository as the blueprint for a basic game made
using web design code (HTML, CSS, JS).

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
    
    -password: int
}

class Level2{
    +goToLevel2()

    -password: int
}

class Level3{
    +goToLevel3()

    -password: int
}

class Level4{
    +goToLevel4()

    -password: int
}

Level1 --right--> Level2
Level2 --right--> Level3
Level3 --right--> Level4
```