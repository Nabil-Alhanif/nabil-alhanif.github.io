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
									>Muhamad Nabil Alhanif</a
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
						Menjaga Kesehatan Dalam Pandemi
					</h1>
				</header>

				<!-- Content Start -->
				<figure>
					<img
						src="/images/BlogMenjagaKesehatanDalamPandemi/menjaga_kesehatan_dalam_pandemi.png"
						alt=""
					/>
					<figcaption>Poster singkat tentang menjaga kesehatan dalam pandemi</figcaption>
				</figure>
				<p>
					Dalam pandemi korona seperti sekarang ini, kesehatan merupakan suatu hal yang sangat
					penting. Seseorang bisa memiliki uang dan harta yang banyak, namun apabila dia tidak
					sehat, maka ia tidak akan bisa menikmati harta kekayaannya itu. Oleh karena itu, kita
					harus selalu menjaga kesehatan.
				</p>
				<p>
					Lalu bagaimanakah kita dapat menjaga kesehatan di masa pandemi ini? Masa dimana kita harus
					menjaga jarak antara satu sama lain dan berdiam diri di rumah? Rupanya, ada beberapa cara
					yang dapat kita lakukan, yaitu mengikuti protokol kesehatan dan menjaga pola hidup yang
					sehat.
				</p>
			</article>
		</div>
	</main>
</template>

<script setup>
import UserAvatarIcon from '@/components/icons/UserAvatarIcon.vue'
import DateComponent from '@/components/DateComponent.vue'

const created_at = '2021-03-21T05:00:00.000Z'
const edited_at = '2024-07-01T03:16:00.000Z'
</script>
