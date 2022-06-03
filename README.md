# lazy-load-vanilla
Lazy Load genérico para imagens e frames usando JS puro (vanilla)
Generic Lazy Load for images and frames using pure JS (vanilla)

------------IMPORTANTE------------ <br>
Para este(s) script(s) funcionar(em), presume-se que suas imagens/iframes tenham
um atributo chamado "data-src" setado com o caminho para o conteúdo. Suponha-se também
que estes elementos não tenham o src à priori pois isso mataria o propósito de um lazy load. 

------------IMPORTANT------------- <br>
To make these scripts work, it is assumed you have your img/iframe tags set with 
the attribute "data-src" whose value is the content's path/URL. It is also assumed
these tags don't have it's src attribute previously set, since it would kill the whole purpose of a lazy load in the first place

Exs: <img data-src="content_url"> <iframe data-src="content_url"></iframe>

