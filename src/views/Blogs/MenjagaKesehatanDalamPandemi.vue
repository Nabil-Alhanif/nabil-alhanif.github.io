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
					<h1 class="blog-title">Menjaga Kesehatan Dalam Pandemi</h1>
				</header>

				<!-- Content Start -->
				<figure>
					<img
						src="/images/BlogMenjagaKesehatanDalamPandemi/menjaga_kesehatan_dalam_pandemi.png"
						alt=""
						class="blog-image"
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

const created_at = '2021-03-21T05:00:00.000Z'
const edited_at = '2024-07-01T03:16:00.000Z'
</script>
