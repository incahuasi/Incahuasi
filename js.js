var x;
		var x;
		x=$(document);
		x.ready(inicio);

		function inicio(){
		var x;
		x=$(".flexslider");
        x.flexslider();
		x=$(".fade");
		x.fancybox();
		x=$("#fotos");
		x.sortable();
		x=$("#revelar");
		x.click(mostrar);
		x=$("#ocultar");
		x.click(ocultar);

		x=$("#pestanas");
		x.tabs();
		x=$("#poblados");
		x.tabs();
		}

		function mostrar(){
			var x=$(".fad");
			x.slideUp("slow");
		}

		function ocultar(){
			var x=$(".fad");
			x.slideDown("slow");
		}
