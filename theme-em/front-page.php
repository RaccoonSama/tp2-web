<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package theme-em
 */

get_header();
?>


<section class="annonces">
		<div class="annonce"></div>
								
</section>

	<main id="primary" class="site-main">

		<?php if ( have_posts() ) : ?>

			<header class="page-header">
				<?php
				the_archive_title( '<h1 class="page-title">', '</h1>' );
				the_archive_description( '<div class="archive-description">', '</div>' );
				?>
			</header><!-- .page-header -->

			<section class="sectionCours">

			<?php
			$precedent = "XXXXXX";
			$chaine_bouton ='';
			/* Start the Loop */
			while ( have_posts() ) :
				the_post();
            convertirTableau($tPropriete);
                ?>

				<?php if ( $tPropriete['typeCours'] != $precedent)  : 
						if ("XXXXXX" != $precedent) : ?>
							</section>
							<?php
								if (in_array($precedent, ['Jeu', 'Web'])) :?>
								<div class="btn-wrap">
								<?php	 echo $chaine_bouton;
									$chaine_bouton =''; ?>
								</div>	
								
						<?php endif	?>

					<?php	endif; ?>
					
			 	<h2> <?php echo  $tPropriete['typeCours']; ?> </h2> 
			 	<section class=<?= gettingClass($tPropriete['typeCours']) ?>>
				<?php	endif; ?>
				<?php 
				
				$precedent =  $tPropriete['typeCours'];

				
				
				if (in_array($tPropriete['typeCours'], ['Jeu', 'Web']) ) : 
				
				get_template_part('template-parts/content', 'cours-slider');
				$chaine_bouton .= 	'<button id="un" class="btn-slider">*</button>';
				elseif ($tPropriete['typeCours'] == 'Projet'): 

					get_template_part('template-parts/content', 'projets');
				else :
					get_template_part('template-parts/content', 'cours-article');
				endif;
			
				?>
                <?php endwhile; ?>		
			</section>
			<?php
				if(current_user_can('administrator')) :
			?>
			
			<section class="admin-formulaire">
			<h3>Ajouter une nouvelle</h3>
			<input type="text" name="title" placeholder="Titre">
			<textarea name="content" placeholder="Contenu"></textarea>
			<button id="btn-submit2"> Soumettre</button>
			</section>


			<section class="admin-formulaire2">
			<h3>Ajouter une Annonce</h3>
			<input type="text" name="title" placeholder="Titre">
			<textarea name="content" placeholder="Contenu"></textarea>
			<button id="btn-submit"> Soumettre</button>
			</section>
			<?php
				endif;
			?>
			<section class="nouvelles">
				<!-- <button id="btn_nouvelles">Dernière nouvelles</button> -->
				<div class="nouvelles-container">
				</div>
			</section>
			<div class="wave">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#b53ee4" fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
			</div>
<?php
		endif;
		?>

	</main><!-- #main -->

<?php
get_sidebar();
get_footer();


function convertirTableau(&$tPropriete) {

	//$titre = get_the_title();


	$tPropriete['titre'] = get_the_title();
	$tPropriete['sigle'] = substr($tPropriete['titre'],0, 7);
	$tPropriete['nbHeure'] = substr($tPropriete['titre'],-4,3);	
	$tPropriete['session'] = substr($tPropriete['titre'], 4,1);
	$tPropriete['titrePartiel'] = substr($tPropriete['titre'],8,-6);
	$tPropriete['typeCours'] = get_field('type_de_cours');

}


function gettingClass($type_de_cours) {
	if(in_array($type_de_cours, ['Jeu', 'Web'])) 
	{
return('carrousel-2');
	}
	else if ($type_de_cours == 'Projet') {
 		return('class="galerie"');
	}
	else {
		return('class="bloc"');
	}
	
}
