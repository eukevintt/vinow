// vip

if (document.querySelector('#vip')) {
    document.querySelector('#vip').addEventListener('click', vip)
}


function vip() {
    cidades = document.getElementById('cidadesa').value
    tot = document.getElementById('totala').value

    switch (cidades) {
        case 'selecione':
            viagem = 0
            break;
        case 'rj':
            viagem = 500
            break;
        case 'sp':
            viagem = 540
            break;
        default:
            viagem = 700
            break;
    }

    if (document.getElementById('tour').checked) {
        tour = 100
    } else {
        tour = 0
    }

    if (document.getElementById('ingresso').checked) {
        ingresso = 200
    } else {
        ingresso = 0
    }

    if (document.getElementById('diaria').checked) {
        diaria = 300
    } else {
        diaria = 0
    }

    document.getElementById('totala').value = (Number(viagem) + Number(tour) + Number(ingresso) + Number(diaria))
}

// Plano Gold

if (document.querySelector('#gold')) {
    document.querySelector('#gold').addEventListener('change', gold)
}
function gold() {
    cidades = document.getElementById('cidade').value
    tot = document.getElementById('totala').value

    switch (cidades) {
        case 'selecione':
            viagem = 0
            break;
        case 'rj':
            viagem = 370
            break;
        case 'sp':
            viagem = 400
            break;
        default:
            viagem = 550
            break;
    }

    if (document.getElementById('tourr').checked) {
        tour = 100
    } else {
        tour = 0
    }

    if (document.getElementById('ingressoo').checked) {
        ingresso = 200
    } else {
        ingresso = 0
    }

    if (document.getElementById('diariaa').checked) {
        diaria = 300
    } else {
        diaria = 0
    }

    document.getElementById('total').value = (Number(viagem) + Number(tour) + Number(ingresso) + Number(diaria))
}


// Aba de login
addEventListener('load', () => {
    if (localStorage.login == 'true') {
        document.querySelector('#login').innerHTML = `<a class="nav-link" href="#" data-toggle="modal" data-target="#modalperfil">Meu perfil</a>`

        document.querySelector('#sair').innerHTML = `<a class="btn btn-outline-primary ml-md-2" href="#"  onclick="sair()">Sair</a>`

        localStorage.branco = ''

        document.getElementById('co').innerHTML = localStorage.branco
    }
})

function logar() {
    email = document.getElementById('email').value
    senha = document.getElementById('senha').value

    if (email == 'admin@admin.com' && senha == '123') {

        document.querySelector('#login').innerHTML = `<a class="nav-link" href="#" data-toggle="modal" data-target="#modalperfil">Meu perfil<span class="badge badge-info">4</span></a>`

        document.querySelector('#sair').innerHTML = `<a class="btn btn-outline-primary ml-md-2" href="#"  onclick="sair()">Sair</a>`

        document.getElementById('img').src = 'img/sem-foto.png'

        localStorage.login = true

        $('#modalLogin').modal('toggle')

    } else if (email == localStorage.emaill && senha == localStorage.senhaa) {

        document.querySelector('#login').innerHTML = `<a class="nav-link" href="#" data-toggle="modal" data-target="#modalperfil">Meu perfil <span class="badge badge-info">4</span></a>`

        document.querySelector('#sair').innerHTML = `<a class="btn btn-outline-primary ml-md-2" href="#"  onclick="sair()">Sair</a>`

        document.getElementById('img').src = 'img/sem-foto.png'

        localStorage.login = true

        $('#modalLogin').modal('toggle')
    }
}

function sair() {
    localStorage.login = false

    document.querySelector('#login').innerHTML = `<a class="nav-link" data-toggle="modal" data-target="#modalLogin">Login</a>`

    document.querySelector('#sair').innerHTML = `<a class="btn btn-outline-primary ml-md-2" href="inscricao.html" >Inscreva-se</a>`
}

// Upload de imagens
if (localStorage.img) {
    document.getElementById('img').src = localStorage.img
}
$(function () {
    $('#upload').change(function () {
        const file = $(this)[0].files[0]
        const fileReader = new FileReader()
        fileReader.onloadend = function () {
            img = $('#img').attr('src', fileReader.result)
            localStorage.img = fileReader.result
        }

        localStorage.img = fileReader.readAsDataURL(file)
        document.getElementById('co').innerHTML = localStorage.branco
    })
})

function mudarfoto() {
    document.getElementById('co').innerHTML = `<input type="file" id="upload" style="display:none">`

    $(function () {
        $('#upload').change(function () {
            const file = $(this)[0].files[0]
            const fileReader = new FileReader()
            fileReader.onloadend = function () {
                img = $('#img').attr('src', fileReader.result)
                localStorage.img = fileReader.result
            }
            localStorage.img = fileReader.readAsDataURL(file)
            document.getElementById('co').innerHTML = localStorage.branco
        })
    })
}


// Inscreva-se

function inscreva() {
    localStorage.nome = document.getElementById('inputnome').value
    localStorage.emaill = document.getElementById('inputemail').value
    localStorage.senhaa = document.getElementById('inputsenha').value
    localStorage.endereco = document.getElementById('inputendereco').value
    localStorage.cidade = document.getElementById('inputcidade').value
    localStorage.cep = document.getElementById('inputcep').value
    localStorage.nasc = document.getElementById('inputdata').value
    $('#modalsucesso').modal('show')
}

// Perfil
datatual = new Date();
datainput = localStorage.nasc
datainput2 = datainput.split('-')

// Dados pessoais
document.getElementById('nomee').value = localStorage.nome
idade = datatual.getFullYear() - datainput2[0]
document.getElementById('dadopesso').innerHTML = `<div>Você tem ${idade} anos</div><div>Data de nascimento: ${datainput2[2]}/${datainput2[1]}/${datainput2[0]}</div><div>Você mora em ${localStorage.endereco}, ${localStorage.cidade} - ${localStorage.cep}</div>`

//comentario perfil
function comentario() {
    nomecomentario = document.getElementById('nomecoment').value
    comentario['x'] = document.getElementById('coment').value


    if (nomecomentario != "") {
        data = new Date()
        hora = data.getHours() + ":" + data.getMinutes()
        come = document.getElementById('comenta')
        avatar = document.getElementById('avatar')
        come.innerHTML += `<img src="img/teste_perfil/coment.jpg" onclick="caqui()" class="img-ava d-block mt-4" id="avatar" align="left"><h4 class="mt-4">${nomecomentario}</h4><output id="comenta" class="d-block mt-3 ml-6">${comentario['x']}</output><output class="time-right" id="hora">${hora}</output>`
        localStorage.comen = come
    } else {
        data = new Date()
        hora = data.getHours() + ":" + data.getMinutes()
        come = document.getElementById('comenta')
        come.innerHTML += `<img src="img/sem-foto.png" class="img-ava d-block mt-4" id="avatar" align="left"><h4 class="mt-4">Anônimo</h4> <output id="comenta" class="d-block mt-3 ml-6">${comentario['x']}</output><output class="time-right" id="hora">${hora}</output>`
        localStorage.comen = come
    }
    localStorage.comen = document.getElementById('comenta').innerHTML
    localStorage.comentario = document.getElementById('comenta').value
}

addEventListener('load', () => {
    if (localStorage.comentario == undefined) {
        document.getElementById('comenta').innerHTML = ''
    } else {
        document.getElementById('comenta').innerHTML = localStorage.comen
    }
})
// Rockinrio


function aticket(opcao) {

    if (opcao == "fo") {
        document.getElementById('nomem').value = 'O Fantasma da Ópera'
        document.getElementById('venda').innerHTML = `<div class="row"><div class="col"><smal class="form-text">Preço: R$200</smal><h5>Escolha algumas vantagens adicionais:</h5><label for="fte" class="my-1">Foto com elenco<input type="checkbox" onchange="valor('fo')" name="" id="fte"></label><div>Digite seu email: <input type="email"></div></div><div class="preco col"><h6>Valor Total:</h6><h3 class="text-center">R$<output id="total">200</output></h3><button class="btn btn-success compra" onclick="pgm('fo')">Comprar</button></div></div>`
    } else if (opcao == "ih") {
        document.getElementById('nomem').value = 'Invenções Híbridas'

        document.getElementById('venda').innerHTML = `<div class="row"><div class="col"><smal class="form-text">Preço: R$300</smal><h5>Escolha algumas vantagens adicionais:</h5><label for="fte" class="my-1">Foto com elenco<input type="checkbox" onchange="valor('ih')" name="" id="fte"></label><div>Digite seu email: <input type="email"></div></div><div class="preco col"><h6>Valor Total:</h6><h3 class="text-center">R$<output id="total">300</output></h3><button class="btn btn-success compra" onclick="pgm('ih')">Comprar</button></div></div>`
    } else if (opcao == 'tp') {
        document.getElementById('nomem').value = 'Os Três Porquinhos'

        document.getElementById('venda').innerHTML = `<div class="row"><div class="col"><smal class="form-text">Preço: R$500</smal><h5>Escolha algumas vantagens adicionais:</h5><label for="fte" class="my-1">Foto com elenco<input type="checkbox" onchange="valor('tp')" name="" id="fte"></label><div>Digite seu email: <input type="email"></div></div><div class="preco col"><h6>Valor Total:</h6><h3 class="text-center">R$<output id="total">500</output></h3><button class="btn btn-success compra" onclick="pgm('tp')">Comprar</button></div></div>`
    } else if (opcao == 'iqa') {
        document.getElementById('nomem').value = 'Isso que é Amor'

        document.getElementById('venda').innerHTML = `<div class="row"><div class="col"><smal class="form-text">Preço: R$100</smal><h5>Escolha algumas vantagens adicionais:</h5><label for="fte" class="my-1">Foto com elenco<input type="checkbox" onchange="valor('iqa')" name="" id="fte"></label><div>Digite seu email: <input type="email"></div></div><div class="preco col"><h6>Valor Total:</h6><h3 class="text-center">R$<output id="total">100</output></h3><button class="btn btn-success compra" onclick="pgm('iqa')">Comprar</button></div></div>`
    } else if (opcao == 'b8') {
        document.getElementById('nomem').value = 'Batman 80 - A exposição'

        document.getElementById('venda').innerHTML = `<div class="row"><div class="col"><smal class="form-text">Preço: R$500</smal><h5>Escolha algumas vantagens adicionais:</h5><label for="fte" class="my-1">Foto com elenco<input type="checkbox" onchange="valor('b8')" name="" id="fte"></label><div>Digite seu email: <input type="email"></div></div><div class="preco col"><h6>Valor Total:</h6><h3 class="text-center">R$<output id="total">500</output></h3><button class="btn btn-success compra" onclick="pgm('b8')">Comprar</button></div></div>`
    } else if (opcao == 'zrr') {
        document.getElementById('nomem').value = 'Zorro – Nasce uma Lenda'

        document.getElementById('venda').innerHTML = `<div class="row"><div class="col"><smal class="form-text">Preço: R$200</smal><h5>Escolha algumas vantagens adicionais:</h5><label for="fte" class="my-1">Foto com elenco<input type="checkbox" onchange="valor('zrr')" name="" id="fte"></label><div>Digite seu email: <input type="email"></div></div><div class="preco col"><h6>Valor Total:</h6><h3 class="text-center">R$<output id="total">200</output></h3><button class="btn btn-success compra" onclick="pgm('zrr')">Comprar</button></div></div>`
    } else if (opcao == 'nuno') {
        document.getElementById('nomem').value = "Nuno – Poéticas têxteis contemporâneas"

        document.getElementById('venda').innerHTML = `<div class="row"><div class="col"><smal class="form-text">Preço: R$50</smal><h5>Escolha algumas vantagens adicionais:</h5><label for="fte" class="my-1">Foto com elenco<input type="checkbox" onchange="valor('nn')" name="" id="fte"></label><div>Digite seu email: <input type="email"></div></div><div class="preco col"><h6>Valor Total:</h6><h3 class="text-center">R$<output id="total">50</output></h3><button class="btn btn-success compra" onclick="pgm('')">Comprar</button></div></div>`
    }

    else if (opcao == 'r27') {
        document.getElementById('nomem').value = "Rock in Rio – 27/09"

        document.getElementById('venda').innerHTML = `<div class="row"><div class="col"><smal class="form-text">Preço: R$50</smal><h5>Escolha algumas vantagens adicionais:</h5><label for="fte" class="my-1">Foto com elenco<input type="checkbox" onchange="valor('r27')" name="" id="fte"></label><div>Digite seu email: <input type="email"></div></div><div class="preco col"><h6>Valor Total:</h6><h3 class="text-center">R$<output id="total">550</output></h3><button class="btn btn-success compra" onclick="pgm('')">Comprar</button></div></div>`
    } else if (opcao == 'r28') {
        document.getElementById('nomem').value = "Rock in Rio – Rock in Rio"

        document.getElementById('venda').innerHTML = `<div class="row"><div class="col"><smal class="form-text">Preço: R$50</smal><h5>Escolha algumas vantagens adicionais:</h5><label for="fte" class="my-1">Foto com elenco<input type="checkbox" onchange="valor('r28')" name="" id="fte"></label><div>Digite seu email: <input type="email"></div></div><div class="preco col"><h6>Valor Total:</h6><h3 class="text-center">R$<output id="total">550</output></h3><button class="btn btn-success compra" onclick="pgm('')">Comprar</button></div></div>`
    } else if (opcao == 'r29') {
        document.getElementById('nomem').value = "Rock in Rio – 29/09	"

        document.getElementById('venda').innerHTML = `<div class="row"><div class="col"><smal class="form-text">Preço: R$50</smal><h5>Escolha algumas vantagens adicionais:</h5><label for="fte" class="my-1">Foto com elenco<input type="checkbox" onchange="valor('r29')" name="" id="fte"></label><div>Digite seu email: <input type="email"></div></div><div class="preco col"><h6>Valor Total:</h6><h3 class="text-center">R$<output id="total">550</output></h3><button class="btn btn-success compra" onclick="pgm('')">Comprar</button></div></div>`
    } else if (opcao == 'r30') {
        document.getElementById('nomem').value = "Rock in Rio – 30/09	"

        document.getElementById('venda').innerHTML = `<div class="row"><div class="col"><smal class="form-text">Preço: R$50</smal><h5>Escolha algumas vantagens adicionais:</h5><label for="fte" class="my-1">Foto com elenco<input type="checkbox" onchange="valor('r30')" name="" id="fte"></label><div>Digite seu email: <input type="email"></div></div><div class="preco col"><h6>Valor Total:</h6><h3 class="text-center">R$<output id="total">550</output></h3><button class="btn btn-success compra" onclick="pgm('')">Comprar</button></div></div>`
    } else if (opcao == 'r01') {
        document.getElementById('nomem').value = "Rock in Rio – 01/10"

        document.getElementById('venda').innerHTML = `<div class="row"><div class="col"><smal class="form-text">Preço: R$50</smal><h5>Escolha algumas vantagens adicionais:</h5><label for="fte" class="my-1">Foto com elenco<input type="checkbox" onchange="valor('r01')" name="" id="fte"></label><div>Digite seu email: <input type="email"></div></div><div class="preco col"><h6>Valor Total:</h6><h3 class="text-center">R$<output id="total">550</output></h3><button class="btn btn-success compra" onclick="pgm('')">Comprar</button></div></div>`
    } else if (opcao == 'r02') {
        document.getElementById('nomem').value = "Rock in Rio	 – 02/10	"

        document.getElementById('venda').innerHTML = `<div class="row"><div class="col"><smal class="form-text">Preço: R$50</smal><h5>Escolha algumas vantagens adicionais:</h5><label for="fte" class="my-1">Foto com elenco<input type="checkbox" onchange="valor('r02')" name="" id="fte"></label><div>Digite seu email: <input type="email"></div></div><div class="preco col"><h6>Valor Total:</h6><h3 class="text-center">R$<output id="total">550</output></h3><button class="btn btn-success compra" onclick="pgm('')">Comprar</button></div></div>`
    } else if (opcao == 'r03') {
        document.getElementById('nomem').value = "Rock in Rio	 – 03/10	"

        document.getElementById('venda').innerHTML = `<div class="row"><div class="col"><smal class="form-text">Preço: R$50</smal><h5>Escolha algumas vantagens adicionais:</h5><label for="fte" class="my-1">Foto com elenco<input type="checkbox" onchange="valor('r03')" name="" id="fte"></label><div>Digite seu email: <input type="email"></div></div><div class="preco col"><h6>Valor Total:</h6><h3 class="text-center">R$<output id="total">550</output></h3><button class="btn btn-success compra" onclick="pgm('')">Comprar</button></div></div>`
    } else if (opcao == 'r04') {
        document.getElementById('nomem').value = "Rock in Rio	 – 04/10	"

        document.getElementById('venda').innerHTML = `<div class="row"><div class="col"><smal class="form-text">Preço: R$50</smal><h5>Escolha algumas vantagens adicionais:</h5><label for="fte" class="my-1">Foto com elenco<input type="checkbox" onchange="valor('r04')" name="" id="fte"></label><div>Digite seu email: <input type="email"></div></div><div class="preco col"><h6>Valor Total:</h6><h3 class="text-center">R$<output id="total">550</output></h3><button class="btn btn-success compra" onclick="pgm('')">Comprar</button></div></div>`
    } else if (opcao == 'r05') {
        document.getElementById('nomem').value = "Rock in Rio	 – 05/10	"

        document.getElementById('venda').innerHTML = `<div class="row"><div class="col"><smal class="form-text">Preço: R$50</smal><h5>Escolha algumas vantagens adicionais:</h5><label for="fte" class="my-1">Foto com elenco<input type="checkbox" onchange="valor('r05')" name="" id="fte"></label><div>Digite seu email: <input type="email"></div></div><div class="preco col"><h6>Valor Total:</h6><h3 class="text-center">R$<output id="total">550</output></h3><button class="btn btn-success compra" onclick="pgm('')">Comprar</button></div></div>`
    } else if (opcao == 'r06') {
        document.getElementById('nomem').value = "Rock in Rio	 – 06/10	"

        document.getElementById('venda').innerHTML = `<div class="row"><div class="col"><smal class="form-text">Preço: R$50</smal><h5>Escolha algumas vantagens adicionais:</h5><label for="fte" class="my-1">Foto com elenco<input type="checkbox" onchange="valor('r06')" name="" id="fte"></label><div>Digite seu email: <input type="email"></div></div><div class="preco col"><h6>Valor Total:</h6><h3 class="text-center">R$<output id="total">550</output></h3><button class="btn btn-success compra" onclick="pgm('')">Comprar</button></div></div>`
    }
}
function pgm(evento) {
    alert('Verifique sua caixa de email, para seguir os outros procedimentos!')
}

function valor(c) {
    if (c == 'fo') {
        total = document.getElementById('total').value

        a = 200
        if (document.getElementById('fte').checked) {
            fte = 100
        } else {
            fte = 0
        }

        total = Number(a) + Number(fte)
        document.getElementById('total').value = total

    }

    else if (c == 'ih') {
        total = document.getElementById('total').value

        a = 300
        if (document.getElementById('fte').checked) {
            fte = 100
        } else {
            fte = 0
        }

        total = Number(a) + Number(fte)
        document.getElementById('total').value = total

    }

    else if (c == 'tp') {
        total = document.getElementById('total').value

        a = 500
        if (document.getElementById('fte').checked) {
            fte = 100
        } else {
            fte = 0
        }

        total = Number(a) + Number(fte)
        document.getElementById('total').value = total

    }

    else if (c == 'iqa') {
        total = document.getElementById('total').value

        a = 100
        if (document.getElementById('fte').checked) {
            fte = 100
        } else {
            fte = 0
        }

        total = Number(a) + Number(fte)
        document.getElementById('total').value = total

    }

    else if (c == 'b8') {
        total = document.getElementById('total').value

        a = 500
        if (document.getElementById('fte').checked) {
            fte = 100
        } else {
            fte = 0
        }

        total = Number(a) + Number(fte)
        document.getElementById('total').value = total

    }

    else if (c == 'zrr') {
        total = document.getElementById('total').value

        a = 200
        if (document.getElementById('fte').checked) {
            fte = 100
        } else {
            fte = 0
        }

        total = Number(a) + Number(fte)
        document.getElementById('total').value = total

    }

    else if (c == 'nn') {
        total = document.getElementById('total').value

        a = 50
        if (document.getElementById('fte').checked) {
            nn = 100
        } else {
            nn = 0
        }

        total = Number(a) + Number(fte)
        document.getElementById('total').value = total
    }

    else if (c == 'r27') {
        total = document.getElementById('total').value

        a = 50
        if (document.getElementById('fte').checked) {
            fotoElenco = 100
        } else {
            fotoElenco = 0
        }

        total = a + fotoElenco + 500
        document.getElementById('total').value = total
    }

    else if (c == 'r28') {
        total = document.getElementById('total').value

        a = 50
        if (document.getElementById('fte').checked) {
            fotoElenco = 100
        } else {
            fotoElenco = 0
        }

        total = Number(a) + Number(fotoElenco) + 500
        document.getElementById('total').value = total
    }

    else if (c == 'r29') {
        total = document.getElementById('total').value

        a = 50
        if (document.getElementById('fte').checked) {
            fotoElenco = 100
        } else {
            fotoElenco = 0
        }

        total = Number(a) + Number(fotoElenco) + 500
        document.getElementById('total').value = total
    }

    else if (c == 'r30') {
        total = document.getElementById('total').value

        a = 50
        if (document.getElementById('fte').checked) {
            fotoElenco = 100
        } else {
            fotoElenco = 0
        }

        total = Number(a) + Number(fotoElenco) + 500
        document.getElementById('total').value = total
    }

    else if (c == 'r01') {
        total = document.getElementById('total').value

        a = 50
        if (document.getElementById('fte').checked) {
            fotoElenco = 100
        } else {
            fotoElenco = 0
        }

        total = Number(a) + Number(fotoElenco) + 500
        document.getElementById('total').value = total
    }

    else if (c == 'r02') {
        total = document.getElementById('total').value

        a = 50
        if (document.getElementById('fte').checked) {
            fotoElenco = 100
        } else {
            fotoElenco = 0
        }

        total = Number(a) + Number(fotoElenco) + 500
        document.getElementById('total').value = total
    }

    else if (c == 'r03') {
        total = document.getElementById('total').value

        a = 50
        if (document.getElementById('fte').checked) {
            fotoElenco = 100
        } else {
            fotoElenco = 0
        }

        total = Number(a) + Number(fotoElenco) + 500
        document.getElementById('total').value = total
    }

    else if (c == 'r04') {
        total = document.getElementById('total').value

        a = 50
        if (document.getElementById('fte').checked) {
            fotoElenco = 100
        } else {
            fotoElenco = 0
        }

        total = Number(a) + Number(fotoElenco) + 500
        document.getElementById('total').value = total
    }

    else if (c == 'r05') {
        total = document.getElementById('total').value

        a = 50
        if (document.getElementById('fte').checked) {
            fotoElenco = 100
        } else {
            fotoElenco = 0
        }

        total = Number(a) + Number(fotoElenco) + 500
        document.getElementById('total').value = total
    }

    else if (c == 'r06') {
        total = document.getElementById('total').value

        a = 50
        if (document.getElementById('fte').checked) {
            fotoElenco = 100
        } else {
            fotoElenco = 0
        }

        total = Number(a) + Number(fotoElenco) + 500
        document.getElementById('total').value = total
    }
}