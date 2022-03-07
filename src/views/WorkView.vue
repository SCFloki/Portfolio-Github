<template>
	<div>
		<!-- Skills container -->
		<b-container id="skills-container">
			<b-row>
				<!-- Profile picture -->
				<b-col id="profile">
					<img src="@/assets/images/profile.jpg"><br><br>Doublet Kévin
				</b-col>

				<!-- Language Skills -->
				<b-col class="skills-col">
					<p>Langage</p>

					<SkillComponent 
						v-for="language in languages"
						:key="language.id"
						:name="language.name"
						:progress="language.progress"
						:info="language.info_dropdown"
					/>
				</b-col>

				<!-- Framework Skills -->
				<b-col class="skills-col">
					<p>Framework</p>

					<SkillComponent 
						v-for="framework in frameworks"
						:key="framework.id"
						:name="framework.name"
						:progress="framework.progress"
					/>
				</b-col>

				<!-- Dev Tools Skills -->
				<b-col class="skills-col">
					<p>Outils de développement</p>
					<SkillComponent 
						v-for="tool in tools"
						:key="tool.id"
						:name="tool.name"
						:progress="tool.progress"
					/>
				</b-col>
			</b-row>
		</b-container>

		<!-- Experiences Container -->
		<b-container id="exp-container">
			<b-row id="exp-row">
				<p id="exp">Experiences</p>
				<ExpComponent               
					v-for="exp in exps"
					:key="exp.id"
					:title="exp.title"
					:source="exp.source"
					:desc="exp.desc"
					:date="exp.date"
				/>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import SkillComponent from '@/components/SkillComponent.vue'
import ExpComponent from '@/components/ExpComponent.vue'

export default {
	name: 'WorkView',
	components: {
		SkillComponent,
		ExpComponent
	},
	data() {
		return {
			languages: [
				{
					id: 0,
					name: "HTML/CSS",
					progress: 100,
					info_dropdown: 0,
				},
				{
					id: 1,
					name: "JS",
					progress: 70,
					info_dropdown: 1,
				},       
				{
					id: 3,
					name: "PHP",
					progress: 60,
					info_dropdown: 2,
				},        
				{
					id: 4,
					name: "SQL",
					progress: 60,
					info_dropdown: 3,
				},
				{
					id: 5,
					name: "Python",
					progress: 70,
					info_dropdown: 4,
				}
			],

			frameworks: [
				{
					id: 0,
					name: "Vue",
					progress: 70,
				},
				{
					id: 1,
					name: "React Native",
					progress: 60,
				},
				{
					id: 2,
					name: "Symfony",
					progress: 65,
				},
				{
					id: 3,
					name: "Django",
					progress: 80,
				}

			],

			tools: [
				{
					id: 0,
					name: "Git/Github",
					progress: 90
				},
				{
					id: 1,
					name: "Visual Studio Code",
					progress: 100
				},
				{
					id: 2,
					name: "Trello",
					progress: 100
				},
			],

			exps: [
				{
					id: 0,
					title: "TauXtec",
					source: require('@/assets/images/tauxtec.png'),
					desc: "Réalisation d'un stage a l'issue de ma 3ème année de mon parcours d'ingénieur informatique",
					date: "Janvier 2020 - Avril 2020"

				},
				{
					id: 1,
					title: "Projet d'étude React Native",
					source: require('@/assets/images/react-native.png'),
					desc: "Buisness consulting"
				},
			]
		}
	}
}
</script>

<style lang="scss">
@keyframes animatedBackground {
	from { background-position: -192px top, 192px bottom; }
	to { background-position: 0 top, 0 bottom; }
}

#skills-container {
	margin-top: 50px;
	padding-bottom: 30px;
	padding-top: 30px;
	color: white;
	letter-spacing: 5px;
	background-image: url('@/assets/images/bg.png'), url('@/assets/images/bg.png');
	background-repeat: repeat-x;

	animation: animatedBackground 2s linear infinite;
}

#profile {
	margin: auto;
	border-right: 1px solid white;
}

#profile img {
	border-radius: 50%;
	width: 60%;
	border: 2px solid white;
}

#exp-container {
	color: white;
	padding-bottom: 30px;
	padding-top: 30px;
}

#exp {
	letter-spacing: 5px;
	font-weight: bold;

}

.skills-col {
	margin: 20px;
}

.skills-col p {
	font-weight: bold;
	background:
		linear-gradient(90deg, rgba(255,255,255,0) 0%,
		rgba(255,255,255,0.8) 50%,
		rgba(255,255,255,0) 100%)
		bottom
		no-repeat;
	background-size:100% 1px;
	margin: 20px;
}
</style>