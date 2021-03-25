<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package theme-em
 * 
 * 
 */


global $tPropriete;
?>
		
<article>

					<p><?php echo $tPropriete['sigle'] . "-" . $tPropriete['typeCours']; ?> </p>
					<a href="<?php echo get_permalink(); ?>"> <?php echo $tPropriete['titrePartiel']; ?></a>
					<p>Session : <?php echo $tPropriete['session']; ?> </p>
</article>
