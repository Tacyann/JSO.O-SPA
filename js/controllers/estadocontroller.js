
function montaCidade(estado, pais){
	$.ajax({
		type:'GET',
		url:'https://servicodados.ibge.gov.br/api/v1/localidades/distritos',
		contentType: "application/json; charset=utf-8",
		dataType: "jsonp",
		async:false
	}).done(function(response){
		cidades='';

		$.each(response, function(c, cidade){

			cidades+='<option value="'+cidade+'">'+cidade+'</option>';

		});

		
		$('#cidade').html(cidades);

	});
}

function montaUF(pais){
	$.ajax({
		type:'GET',
		url:'https://servicodados.ibge.gov.br/api/v1/localidades/distritos',
		contentType: "application/json; charset=utf-8",
		dataType: "jsonp",
		async:false
	}).done(function(response){
		estados='';
		$.each(response, function(e, estado){

			estados+='<option value="'+estado.UF+'">'+estado.Estado+'</option>';

		});

		
		$('#estado').html(estados);

		
		montaCidade($('#estado').val(), pais);

		
		$('#estado').change(function(){
			montaCidade($(this).val(), pais);
		});

	});
}

function montaPais(){
	$.ajax({
		type:	'GET',
		url:	'https://servicodados.ibge.gov.br/api/v1/localidades/distritos',
		contentType: "application/json; charset=utf-8",
		dataType: "jsonp",
		async:false
	}).done(function(response){
		
		paises='';

		$.each(response, function(p, pais){

			if(pais.Pais == 'Brasil'){
				paises+='<option value="'+pais.Sigla+'" selected>'+pais.Pais+'</option>';
			} else {
				paises+='<option value="'+pais.Sigla+'">'+pais.Pais+'</option>';
			}

		});

		
		$('#pais').html(paises);

		
		montaUF($('#pais').val());

		
		$('#pais').change(function(){
			if($('#pais').val() == 'BR'){
				
				$('#estado').remove();
				$('#cidade').remove();
				$('#campo_estado').append('<select id="estado"></select>');
				$('#campo_cidade').append('<select id="cidade"></select>');

				
				montaUF('BR');		
			} else {
				
				$('#estado').remove();
				$('#cidade').remove();
				$('#campo_estado').append('<input type="text" id="estado">');
				$('#campo_cidade').append('<input type="text" id="cidade">');
			}
		})

	});
}

montaPais();