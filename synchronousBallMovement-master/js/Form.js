class Form{
    constructor(){}
display(){
    var title = createElement('h2')
    title.html("car racing game")
    title.position(250,30)
    var input = createInput("name:")
    input.position(300,100)
    var button = createButton('play')
    button.position(300,200)
    var greeting = createElement('h3')

    button.mousePressed(function(){
        input.hide()
        button.hide()
        var name = input.value()
        playerCount+=1
        player.update(name)
        player.updateCount(playerCount)
        greeting.html("hello "+name)
        greeting.position(250,250)
    })
}


}