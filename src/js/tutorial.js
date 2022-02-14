function mage(){
    const mage = document.createElement('div')
    mage.classList.add('class')
    mage.classList.add('mageDiv')
    mage.classList.add('containerClass')
    const mageButton = document.createElement('button')
    const mageTitle = document.createElement('h2')
    mageTitle.innerHTML = 'Mago'
    mageTitle.classList.add('titleClass')
    mageButton.innerHTML += 'Escolha'
    mageButton.classList.add('mage')
    const divInfo = document.createElement('div')
    divInfo.classList.add('containerInfo')
    const mageInfo = document.createElement('p')
    mageInfo.innerHTML = 'Especialista em magias de longa distância, pode causar uma grande quantidide de dano em área.'
    mageInfo.classList.add('info')
    divInfo.appendChild(mageInfo)
    mage.appendChild(mageTitle)
    mage.appendChild(divInfo)
    mage.appendChild(mageButton) 
    mage.style.animation = 'fadeIn 1s 1 ease 0s both'
    return mage
}

function warrior(){
    const warrior = document.createElement('div')
    warrior.classList.add('class')
    warrior.classList.add('warriorDiv')
    const warriorButton = document.createElement('button')
    const warriorTitle = document.createElement('h2')
    warriorTitle.innerHTML = 'Guerreiro'
    const imgClass = document.createElement('img')
    imgClass.src = ('./src/img/warrior.png')
    imgClass.classList.add('imgClass')
    warriorTitle.classList.add('titleClass')
    warriorButton.innerHTML += 'Escolha'
    warriorButton.classList.add('warrior')
    const divInfo = document.createElement('div')
    divInfo.classList.add('containerInfo')
    const warriorInfo = document.createElement('p')
    warriorInfo.innerHTML = 'Possui talento nato para combate corpo a corpo, tendo grande resistência e inflinge um dano considerável.'
    warriorInfo.classList.add('info')
    divInfo.appendChild(warriorInfo)
    warrior.appendChild(warriorTitle)
    warrior.appendChild(imgClass)
    warrior.appendChild(divInfo)
    warrior.appendChild(warriorButton) 
    warrior.style.animation = 'fadeIn 1s 1 ease 0.2s both'
    return warrior
}

function assassin(){
    const assassin = document.createElement('div')
    assassin.classList.add('class')
    assassin.classList.add('assassinDiv')
    const assassinButton = document.createElement('button')
    const assassinTitle = document.createElement('h2')
    assassinTitle.innerHTML = 'Assassino' 
    assassinTitle.classList.add('titleClass')    
    assassinButton.innerHTML += 'Escolha' 
    assassinButton.classList.add('assassin')
    const divInfo = document.createElement('div')
    divInfo.classList.add('containerInfo')
    const assassinInfo = document.createElement('p')
    assassinInfo.innerHTML = 'Mestre das sombras, age fora da visão de seus oponentes, sendo extremamente letal com seus ataques surpresa.'
    assassinInfo.classList.add('info')
    divInfo.appendChild(assassinInfo)
    assassin.appendChild(assassinTitle)
    assassin.appendChild(divInfo)
    assassin.appendChild(assassinButton) 
    assassin.style.animation = 'fadeIn 1s 1 ease 0.4s both'
    return assassin
}

function archer(){
    const archer = document.createElement('div')
    archer.classList.add('class')
    archer.classList.add('archerDiv')
    const archerButton = document.createElement('button')
    const archerTitle = document.createElement('h2')
    archerTitle.innerHTML = 'Arqueiro'
    archerTitle.classList.add('titleClass')
    archerButton.innerHTML += 'Escolha'
    archerButton.classList.add('archer')
    const divInfo = document.createElement('div')
    divInfo.classList.add('containerInfo')
    const archerInfo = document.createElement('p')
    archerInfo.innerHTML = 'Perito no combate com armas a distância, o arqueiro se mostra efetivo quando se trata de dano ao longo do tempo.'
    archerInfo.classList.add('info')
    divInfo.appendChild(archerInfo)
    archer.appendChild(archerTitle)
    archer.appendChild(divInfo)
    archer.appendChild(archerButton)
    archer.style.animation = 'fadeIn 1s 1 ease 0.6s both'
    return archer
}

function principal(){
    const main = document.querySelector('main')
    const footer = document.querySelector('footer')
    main.innerHTML = ''
    footer.innerHTML = 'Escolha a sua classe:'
    writer(footer)
    main.style.display = 'flex'
    main.style.alignItems = 'center'
    main.style.justifyContent = ''

    main.appendChild(mage())
    main.appendChild(warrior())
    main.appendChild(assassin())
    main.appendChild(archer())
    escolha()
    audio()
}

function escolha(){
    const buttons = document.getElementsByTagName('button')
    const titles = document.getElementsByClassName('titleClass')
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', ()=>{
            if(titles[i].innerHTML.toLowerCase() === 'mago'){
                formulario('Mago')
            }else if(titles[i].innerHTML.toLowerCase() === 'guerreiro'){
                formulario('Guerreiro')
            }else if(titles[i].innerHTML.toLowerCase() === 'assassino'){
                formulario('Assassino')
            }else{
                formulario('Arqueiro')
            }
        })
    };
}

function formulario(classe){
    const main = document.querySelector('main')
    const footer = document.querySelector('footer')
    main.innerHTML = ''
    footer.innerHTML = `Você escolheu ${classe}. Nos diga seu nome e idade`
    writer(footer)
    const form = document.createElement('form')
    const labelName = document.createElement('label')
    labelName.for = 'name'
    labelName.innerHTML = 'Nome:'
    form.appendChild(labelName)
    const inputName = document.createElement('input')
    inputName.type = 'text'
    inputName.name = 'name'
    inputName.id = 'name'
    inputName.autocomplete = "off"
    form.appendChild(inputName)
    const labelIdade = document.createElement('label')
    labelIdade.for = 'idade'
    labelIdade.innerHTML = 'Idade:'
    form.appendChild(labelIdade)
    const inputIdade = document.createElement('input')
    inputIdade.type = 'number'
    inputIdade.name = 'idade'
    inputIdade.id = 'idade'
    form.appendChild(inputIdade)
    const submit = document.createElement('input')
    submit.type = 'submit'
    submit.value = 'Enviar'
    submit.classList.add('enviar')
    form.appendChild(submit)
    main.appendChild(form)
    submit.addEventListener('click', (e) => {
        e.preventDefault
        posFormulario(classe, inputName.value, inputIdade.value)
    })
}

function posFormulario(classe, nome, idade){
    const main = document.querySelector('main')
    const footer = document.querySelector('footer')
    main.innerHTML = ''
    footer.innerHTML = `Você inseriu essas informações. Tem certeza?`
    writer(footer)
    const player = escolhaPlayer(classe, nome, idade)
    
    
    main.appendChild(divInfo(player))
}

function escolhaPlayer(classe, nome, idade){
    console.log(classe)
    let player = ''
    if(classe.toLowerCase() === 'mago'){
        player = new Mage(classe, nome, idade)
    }else if(classe.toLowerCase() === 'guerreiro'){
        player = new Warrior(classe, nome, idade)
    }else if(classe.toLowerCase() === 'guerreiro'){
        player = new Assassin(classe, nome, idade)
    }else{
        player = new Archer(classe, nome, idade)
    }
    console.log(player)
    return player
}

function divInfo(player){
    const div = document.createElement('div')
    div.classList.add('confirmar')
    const pClasse = document.createElement('p')
    pClasse.innerHTML = `A classe escolhida foi: ${player.classe}`
    pClasse.classList.add('informacoes')
    div.appendChild(pClasse)
    const pNome = document.createElement('p')
    pNome.innerHTML = `O nome inserido foi: ${player.nome}`
    pNome.classList.add('informacoes')
    div.appendChild(pNome)
    const pIdade = document.createElement('p')
    pIdade.innerText = `A idade do jogador é: ${player.idade}`
    pIdade.classList.add('informacoes')
    div.appendChild(pIdade)
    const img = document.createElement('img')
    img.src = player.img
    img.classList.add('imgClass')
    div.appendChild(img)
    const sim = document.createElement('button')
    const nao = document.createElement('button')
    sim.innerHTML = 'Sim'    
    nao.innerHTML = 'Não'    
    const decisao = document.createElement('div')
    sim.classList.add('decisao')
    nao.classList.add('decisao')
    sim.addEventListener('click', () => menu(player))
    nao.addEventListener('click', () => principal())
    decisao.appendChild(sim)
    decisao.appendChild(nao)
    div.appendChild(decisao)
    return div
}


principal()