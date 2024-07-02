<template>
	<main class="blog-main">
		<div class="blog-container">
			<article class="blog-article">
				<!-- Title & Author -->
				<header class="not-format blog-header">
					<address class="blog-address">
						<div class="blog-avatar-container">
							<div class="blog-avatar">
								<UserAvatarIcon class="blog-avatar-icon" />
							</div>
							<div>
								<a href="#" rel="author" class="blog-avatar-name">Muhamad Nabil Alhanif</a>
								<p class="blog-avatar-date">
									<DateComponent :iso-date-string="created_at" message="Created on: " />
								</p>
								<p class="blog-avatar-date">
									<DateComponent :iso-date-string="edited_at" message="Last edited on: " />
								</p>
							</div>
						</div>
					</address>
					<h1 class="blog-title">Tristan Belajar Morin</h1>
				</header>

				<!-- Content Start -->
				<p class="lead">Altamis Ahmad Tristan lagi belajar Morin</p>
				<p>
					Jadi katanya si Tristan lagi belajar Morin, terus aku keingetnya Morin itu yang merek
					selai itu. Jadi Dias tadi nyoba ngedit buku morin fotonya diganti sama selai morin, tapi
					photoshop nya ngecrash, jadi aku yang ngeditin pake GIMP.
				</p>
				<figure>
					<img
						src="/images/BlogTristanBelajarMorin/tristan_beneran_belajar_gais.png"
						alt=""
						class="blog-image"
					/>
					<figcaption>
						Altamis Ahmad Tristan sedang serius belajar untuk persiapan OSN-K 2021
					</figcaption>
				</figure>
				<figure>
					<img
						src="/images/BlogTristanBelajarMorin/morin_physics_peanut_butter.png"
						alt=""
						class="blog-image"
					/>
					<figcaption>
						Edited cover of
						<a href="https://davidmorin.physics.fas.harvard.edu/books/classical-mechanics/"
							>Introduction to Classical Mechanics</a
						>
						by David Morin with <a href="http://morinfoods.com/">Morin©</a> chocolate peanut.
					</figcaption>
				</figure>
				<h4>Acknowledgement</h4>
				<p>
					Original image by
					<a href="https://scholar.harvard.edu/david-morin/classical-mechanics"
						>David Morin's Introduction to Classical Mechanics</a
					>
					and <a href="http://morinfoods.com/">Morin©</a> All rights reserved.
				</p>
			</article>
		</div>

		<!-- Comment Section -->
		<div class="blog-comment">
			<TheComment />
		</div>
	</main>
</template>

<script setup>
import UserAvatarIcon from '@/components/icons/UserAvatarIcon.vue'
import DateComponent from '@/components/DateComponent.vue'
import TheComment from '@/components/TheComment.vue'

const created_at = '2021-06-01T05:00:00.000Z'
const edited_at = '2024-07-01T02:30:00.000Z'
</script>
