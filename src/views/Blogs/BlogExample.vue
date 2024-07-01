<template>
	<main class="bg-white pb-16 pt-8 antialiased dark:bg-gray-900 lg:pb-24 lg:pt-16">
		<div class="mx-auto flex max-w-screen-xl justify-between px-4">
			<article
				class="format format-sm format-blue mx-auto w-full max-w-2xl dark:format-invert sm:format-base lg:format-lg"
			>
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
									>Test Author</a
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
						A Blog Example
					</h1>
				</header>
				<p class="lead">Preamble of the blog</p>
				<p>
					Okay so this a paragraph that I wrote because bla bla bla I just need a kinda long but not
					really that long paragraph so yeah this is it and I know that there are no punctuation
					whatsoever here because Im just not feeling like it
				</p>
				<p>
					Oh yeah, btw this whole page is based on
					<a href="https://flowbite.com/blocks/publisher/blog-templates/"
						>Flowbite default blog template</a
					>. It really is a cool project, and I'm glad that I found it. I mean, when Kak Dany first
					introduce me to tailwindcss a few weeks ago I'm not entirely sure if it's a good idea to
					use it compared to just writing everything by hand. But, I do know a bit of Bootstrap, and
					although I've tried writing this in bootstrap, It doesn't really click with me. So yeah,
					flowbite, really realy cool
				</p>
				<figure>
					<img src="https://picsum.photos/640/360" alt="" />
					<figcaption>
						Random picture by <a href="https://picsum.photos/">Lorem Picsum</a>
					</figcaption>
				</figure>
				<h2>Second Section</h2>
				<p>
					Okay so this the second section of the whole blogs, probably, if you count the one before
					the picture as the first section, which I did.
				</p>
				<p>
					If you don't consider that one to be a first section, then this is the first section. But
					then, what do you call the section before this? The 0th section? Idk maybe if you count
					from 0, or you might call it preamble, hmm?
				</p>
				<h2>Now some list example</h2>
				<p>Yeah here we go, some numbered list example wohooo</p>
				<ol>
					<li>
						<strong>First List Element</strong>. This is the first list element of this list,
						because I say so haha;
					</li>
					<li>
						<strong>Second List Element</strong>. Apparently flowbite uses the tag
						<code>strong</code> for list element, which is cool I guess;
					</li>
					<li>
						<strong>Third List Element</strong>. Yeah this is the last list element because I don't
						know what else I should type lol.
					</li>
				</ol>
				<h3>Okay now this is a smaller heading, it uses h3</h3>
				<h4>And this is an even smaller heading</h4>
				<p>Do you know why this heading is smaller? Simple, it uses h4</p>
				<h4>A quick question!</h4>
				<p>
					What do you think of the size of this heading? Is it the same as before? Smaller? Larger?
					Hahaha
				</p>
				<h4>And a quick answer!</h4>
				<p>Badabum, the answer is it's the <strong>SAME</strong>. It also uses h4 :))</p>
				<h3>Another List</h3>
				<h4>A dotted list</h4>
				<ul>
					<li>Oh look at this one</li>
					<li>It's a dotted list</li>
					<li>How interesting!</li>
				</ul>
				<h3>Blockquote?</h3>
				<p>Are you ready for blockquote boys?</p>
				<blockquote>
					<p>O yeah babyy, we have blockquote for the whole day!!</p>
				</blockquote>
				<h4>Code example</h4>
				<p>
					Right, so the code for this one is quite painful, I don't think I will ever use it. Maybe.
				</p>
				<pre><code class="language-html">&lt;dl class="grid grid-cols-2 gap-8 max-w-screen-md text-gray-900 sm:grid-cols-3 dark:text-white"&gt;
&lt;div class="flex flex-col justify-center items-center"&gt;
  &lt;dt class="mb-2 text-3xl font-extrabold"&gt;73M+&lt;/dt&gt;
  &lt;dd class="text-lg font-normal text-gray-500 dark:text-gray-400"&gt;developers&lt;/dd&gt;
&lt;/div&gt;
&lt;div class="flex flex-col justify-center items-center"&gt;
  &lt;dt class="mb-2 text-3xl font-extrabold"&gt;1B+&lt;/dt&gt;
  &lt;dd class="text-lg font-normal text-gray-500 dark:text-gray-400"&gt;contributors&lt;/dd&gt;
&lt;/div&gt;
&lt;div class="flex flex-col justify-center items-center"&gt;
  &lt;dt class="mb-2 text-3xl font-extrabold"&gt;4M+&lt;/dt&gt;
  &lt;dd class="text-lg font-normal text-gray-500 dark:text-gray-400"&gt;organizations&lt;/dd&gt;
&lt;/div&gt;
&lt;/dl&gt;
</code></pre>
				<h4>Table example</h4>
				<p>
					Right so this is a table example, it is the exact same as the one from flowbite because my
					creative juices had ran out.
				</p>
				<table>
					<thead>
						<tr>
							<th>Country</th>
							<th>Date &amp; Time</th>
							<th>Amount</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>United States</td>
							<td>April 21, 2021</td>
							<td><strong>$2,300</strong></td>
						</tr>
						<tr>
							<td>Canada</td>
							<td>May 31, 2021</td>
							<td><strong>$300</strong></td>
						</tr>
						<tr>
							<td>United Kingdom</td>
							<td>June 3, 2021</td>
							<td><strong>$2,500</strong></td>
						</tr>
						<tr>
							<td>Australia</td>
							<td>June 23, 2021</td>
							<td><strong>$3,543</strong></td>
						</tr>
						<tr>
							<td>Germany</td>
							<td>July 6, 2021</td>
							<td><strong>$99</strong></td>
						</tr>
						<tr>
							<td>France</td>
							<td>August 23, 2021</td>
							<td><strong>$2,540</strong></td>
						</tr>
					</tbody>
				</table>
			</article>
		</div>
	</main>
</template>

<script setup>
import UserAvatarIcon from '@/components/icons/UserAvatarIcon.vue'
import DateComponent from '@/components/DateComponent.vue'

const created_at = '2024-07-01T00:41:00.000Z'
const edited_at = '2024-07-01T00:41:00.000Z'
</script>
