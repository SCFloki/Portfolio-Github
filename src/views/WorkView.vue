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
						:desc="language.desc"
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
						:info="framework.info_dropdown"
						:desc="framework.desc"
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
						:info="tool.info_dropdown"
						:desc="tool.desc"
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
					desc: "test HTML/CSS"
				},
				{
					id: 1,
					name: "JS",
					progress: 70,
					info_dropdown: 1,
					desc: "test JS"
				},       
				{
					id: 3,
					name: "PHP",
					progress: 60,
					info_dropdown: 2,
					desc: "test PHP"
				},        
				{
					id: 4,
					name: "SQL",
					progress: 60,
					info_dropdown: 3,
					desc: "test SQL"
				},
				{
					id: 5,
					name: "Python",
					progress: 70,
					info_dropdown: 4,
					desc: "Python"
				}
			],

			frameworks: [
				{
					id: 0,
					name: "VueJS",
					progress: 70,
					info_dropdown: 5,
					desc: "test VueJS"
				},
				{
					id: 1,
					name: "React Native",
					progress: 60,
					info_dropdown: 6,
					desc: "test React Native"
				},
				{
					id: 2,
					name: "Symfony",
					progress: 65,
					info_dropdown: 7,
					desc: "test Symfony"
				},
				{
					id: 3,
					name: "Django",
					progress: 80,
					info_dropdown: 8,
					desc: "test Django"
				}

			],

			tools: [
				{
					id: 0,
					name: "Git/Github",
					progress: 90,
					info_dropdown: 9,
					desc: "test Github"
				},
				{
					id: 1,
					name: "Visual Studio Code",
					progress: 100,
					info_dropdown: 10,
					desc: 'Utilisation de VSCode test <br>'
				},
				{
					id: 2,
					name: "Trello",
					progress: 100,
					info_dropdown: 11,
					desc: "Planifier des tâches de groupe avec Trello"
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
	margin-top: 20px;
}
</style>