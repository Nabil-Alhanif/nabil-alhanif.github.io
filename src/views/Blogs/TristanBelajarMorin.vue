<template>
	<main class="bg-white pb-16 pt-8 antialiased dark:bg-gray-900 lg:pb-24 lg:pt-16">
		<div class="mx-auto flex max-w-screen-xl justify-between px-4">
			<article
				class="format format-sm format-blue mx-auto w-full max-w-2xl dark:format-invert sm:format-base lg:format-lg"
			>
				<!-- Title & Author -->
				<header class="not-format mb-4 lg:mb-6">
					<address class="mb-6 flex items-center not-italic">
						<div class="mr-3 inline-flex items-center text-sm text-gray-900 dark:text-white">
							<div
								class="relative mr-4 size-16 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600"
							>
								<UserAvatarIcon class="absolute size-20 text-gray-400" />
							</div>
							<div>
								<a href="#" rel="author" class="text-xl font-bold text-gray-900 dark:text-white"
									>M Nabil Alhanif</a
								>
								<p class="text-base text-gray-500 dark:text-gray-400">
									<DateComponent :iso-date-string="created_at" message="Created on: " />
								</p>
								<p class="text-base text-gray-500 dark:text-gray-400">
									<DateComponent :iso-date-string="edited_at" message="Last edited on: " />
								</p>
							</div>
						</div>
					</address>
					<h1
						class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 dark:text-white lg:mb-6 lg:text-4xl"
					>
						Tristan Belajar Morin
					</h1>
				</header>

				<!-- Content Start -->
				<p class="lead">Altamis Ahmad Tristan lagi belajar Morin</p>
				<p>
					Jadi katanya si Tristan lagi belajar Morin, terus aku keingetnya Morin itu yang merek
					selai itu. Jadi Dias tadi nyoba ngedit buku morin fotonya diganti sama selai morin, tapi
					photoshop nya ngecrash, jadi aku yang ngeditin pake GIMP.
				</p>
				<figure>
					<img src="/images/BlogTristanBelajarMorin/tristan_beneran_belajar_gais.png" alt="" />
					<figcaption>
						Altamis Ahmad Tristan sedang serius belajar untuk persiapan OSN-K 2021
					</figcaption>
				</figure>
				<figure>
					<img
						src="/images/BlogTristanBelajarMorin/morin_physics_peanut_butter.png"
						alt=""
						class="w-[42rem]"
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
	</main>
</template>

<script setup>
import UserAvatarIcon from '@/components/icons/UserAvatarIcon.vue'
import DateComponent from '@/components/DateComponent.vue'

const created_at = '2021-06-01T05:00:00.000Z'
const edited_at = '2024-07-01T02:30:00.000Z'
</script>
