function start() {

    $("#inicio") .hide();

    $("#fundoGame") .append("<div id='jogador' class='anima1'></div>");
    $("#fundoGame") .append("<div id='inimigo1' class='anima2'></div>");
    $("#fundoGame") .append("<div id='inimigo2'></div>");
    $("#fundoGame") .append("<div id='amigo' class='anima3'></div>");


    var jogo = {};
    var velocidade = 5;
    var posicaoY = parseInt(Math.random() * 334);
    var TECLA = {
        W: 87,
        S: 83,
        D: 68
    }
    /*COMANDO PARA MOVIMENTAÇÃO DOS OBJ*/ 
    jogo.pressionou =[];

    $(document).keydown(function(e){
        jogo.pressionou[e.which] = true;
        });
    
    
        $(document).keyup(function(e){
           jogo.pressionou[e.which] = false;
        });


    /*LOOP DE MOVIMENTAÇÃO*/ 
    jogo.timer = setInterval(loop,30);

    function loop(){

        movefundo();
        movejogador();
    }

    /*MOVER FUNDO DO GAME*/
    function movefundo() {
	
        esquerda = parseInt($("#fundoGame").css("background-position"));
        $("#fundoGame").css("background-position",esquerda-1);

    }

    function movejogador() {
	
	if (jogo.pressionou[TECLA.W]) {
		var topo = parseInt($("#jogador").css("top"));
        $("#jogador").css("top",topo-10);
        
            if (topo<=0) {

                $("#jogador").css("top",topo+10);
            }
	
	}
	
	if (jogo.pressionou[TECLA.S]) {
		
		var topo = parseInt($("#jogador").css("top"));
        $("#jogador").css("top",topo+10);	
        
            if (topo>=434) {

                $("#jogador").css("top",topo-10);
            }
	}
	
	if (jogo.pressionou[TECLA.D]) {
		
	}

}
}