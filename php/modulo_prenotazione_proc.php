<?php
#################  SETTAGGI DI INVIO ####################
//destinatario (sostituisci tra le virgolette con il tuo indirizzo EMAIL)
$destinatario = "chrisdanna2000@gmail.com";
//Url (grazie) da visualizzare dopo l'invio della mail (sostituisci tra le virgolette)
$paginaGrazie = "../mail-grazie.html";
//Url (errore) da visualizzare dopo l'invio della mail (sostituisci tra le virgolette)
$paginaErrore = "../mail-errore.html";
#################  /SETTAGGI DI INVIO ####################

if($_POST){
	################# REGULAR EXPRESSIONS #################

	//(nomi e cognomi) solo caratteri maiuscoli o minuscoli, accentate latine, spazio, virgola, punto, trattino. Minimo 2 caratteri
	define("_RE_NOMECOGNOME","/^(?=.{2,}$)(([a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõőøùúûüųūűÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕŐØÙÚÛÜŲŪŰŸÝŻŹÑßÇŒÆČŠŽ∂ð ,\.\'\-])\2?(?!\2))+$/");
	//email
	define("_RE_EMAIL","/^(([a-zA-Z]|[0-9])|([-]|[_]|[.]))+[@](([a-zA-Z0-9])|([-])){2,63}[.](([a-zA-Z0-9]){2,63})+$/");

	################# /REGULAR EXPRESSIONS #################
	if(
	//settaggio della verifica dei valori campi inviati
	preg_match(_RE_NOMECOGNOME,$_POST['nome'])
	&& preg_match(_RE_NOMECOGNOME,$_POST['cognome'])
	&& preg_match(_RE_EMAIL,$_POST['email'])
	&& preg_match(_RE_NOMECOGNOME,$_POST['città'])
	&& preg_match(_RE_NOMECOGNOME,$_POST['prenotazione_tipo'])
	&& preg_match(_RE_NOMECOGNOME,$_POST['corso_tipo'])
	&& $_POST['consenso'] == "SI"
	)
	{

		$subject = "Richiesta dal dominio " . $_SERVER['SERVER_NAME'] . " del " . date("d/m/Y H:i:s");
		
		$headers = "";
		$headers .= "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset:UTF-8" . "\r\n";
		$headers .=  "From:" . $_POST['email'] . "\r\n";
		$messaggio = "";
		$messaggio .= "NOME: " . $_POST['nome'] . "\n";
		$messaggio .= "COGNOME: " . $_POST['cognome'] . "\n";
		$messaggio .= "EMAIL: " . $_POST['email'] . "\n";
		$messaggio .= "CITTÀ: " . $_POST['città'] . "\n";
		$messaggio .= "TIPO PRENOTAZIONE: " . $_POST['prenotazione_tipo'] . "\n";
		$messaggio .= "RICHIESTA: " . $_POST['corso_tipo'] . "\n";
		$messaggio .= "CONSENSO AL TRATTAMENTO DEI DATI: " . $_POST['consenso'] . "\n";
		$messaggio .= "\n";
		$messaggio .= "\n";
		if(mail($destinatario,$subject,$messaggio,$headers)){
            header("location:" . $paginaGrazie);
            die();
		}
		else{
            header("location" . $paginaErrore);
            die();
		}
	}
	else{
        header("location" . $paginaErrore);
        die();
	}
}
?>