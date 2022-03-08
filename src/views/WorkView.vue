<template>
	<div>
		<!-- Skills container -->
		<b-container id="skills-container">
			<b-row>
				<!-- Profile picture -->
				<b-col id="profile">
					<img src="@/assets/images/profile.jpg"><br><br>
					Doublet Kévin
				</b-col>

				<!-- Language Skills -->
				<b-col class="skills-col">
					<p id="skill-title">Langage</p>

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
					<p id="skill-title">Framework</p>

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
					<p id="skill-title">Outils de développement</p>
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
					desc: "Langage maitrisé au cours de mon parcours"
				},
				{
					id: 1,
					name: "JS",
					progress: 70,
					info_dropdown: 1,
					desc: "Notion de base acquise, en constant apprentissage"
				},       
				{
					id: 3,
					name: "PHP",
					progress: 60,
					info_dropdown: 2,
					desc: "Traitement de requête pour la conception de site dynamique"
				},        
				{
					id: 4,
					name: "SQL",
					progress: 60,
					info_dropdown: 3,
					desc: "Exploitation de base de données sur divers projets"
				},
				{
					id: 5,
					name: "Python",
					progress: 70,
					info_dropdown: 4,
					desc: "Découverte de Python en stage par l'utilisation du Framework Django"
				}
			],

			frameworks: [
				{
					id: 0,
					name: "VueJS",
					progress: 70,
					info_dropdown: 5,
					desc: "Utilisation de VueJS pour quelques projets web, ce portfolio à été créer avec VueJS"
				},
				{
					id: 1,
					name: "React Native",
					progress: 60,
					info_dropdown: 6,
					desc: "Dévellopement d'un application mobile avec React Native"
				},
				{
					id: 2,
					name: "Symfony",
					progress: 65,
					info_dropdown: 7,
					desc: "Utilisation de quelques projets web effectués durant ma formation d'ingénieur"
				},
				{
					id: 3,
					name: "Django",
					progress: 80,
					info_dropdown: 8,
					desc: "Notion de base de Django (4 mois de stage), compétences en Python acquise"
				}

			],

			tools: [
				{
					id: 0,
					name: "Git/Github",
					progress: 90,
					info_dropdown: 9,
					desc: "Gestion des commandes Git, Utilisation de GitHub"
				},
				{
					id: 1,
					name: "Visual Studio Code",
					progress: 100,
					info_dropdown: 10,
					desc: 'Utilisation de VSCode'
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
					desc: "Réalisation d'un stage en tant que développeur web l'issue de ma 3ème année de mon parcours d'ingénieur informatique. La mission était la suivante, répondre aux besoins des utlisateurs en améliorant une application web financière. J'ai pu acquérir des compétences en Python en travaillant sur le framework Django, en travaillant en entreprise j'ai pu améliorer mon sens du travail collectif.",
					date: "Janvier 2021 - Avril 2021"

				},
				{
					id: 1,
					title: "Projet d'étude React Native",
					source: require('@/assets/images/react-native.png'),
					desc: "Lors de ma deuxième année j'ai eu l'occasion développer une application mobile au sein d'un groupe de projet, pour ce faire nous avons choisis de travailler avec React Native pour sa compatibilité avec les différents OS. Nous avons décidé de mettre en avant les commerces les plus touchés par la COVID-19 par le biais d'une application qui leur donnerais plus de visibilité.",
					date: "Juilllet 2020"
				},
				{
					id: 3,
					title: "Président Keyboard Society",
					source: require('@/assets/images/logo.png'),
					desc: "La Keyboard society est une association évènementiel de jeu vidéo, mes camarades et moi-même avons pu fonder cette association et organiser un certains nombres d'évènement notament des LAN au sein de notre école. Chaque évènements nous ont confronter à différents problèmes qui ont pu être résolu en travaillant sur notre organisation au sein de l'association.",
					date: "2019 - 2021"
				},
				{
					id: 4,
					title: "Ambassadeur CESI Corp",
					source: require('@/assets/images/cesi.jpg'),
					desc: "Membre de CESI Corp au sein de mon école, je suis venu en aide à la mise en place des portes ouvertes afin de promouvoir l'école j'ai pu y travailler mon sens de l'organisation et donner une cohésion au sein d'un groupe",
					date: "2019 - 2021"
				},
				{
					id: 5,
					title: "Altameos Multimedia",
					source: require('@/assets/images/altameos.png'),
					desc: "Stage d'observation au poste d'intégrateur HTML. Ce fut mon tout premier stage que j'ai effectuer dans le domaine du web j'ai pu y découvrir la structure d'une société ainsi que les toutes premieres notions de base liées à au dévellopement d'un site web.",
					date: "2013"
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
	animation: animatedBackground 4s linear infinite;
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

#skill-title{
	font-weight: bold;
	letter-spacing: 5px;

}

.skills-col {

	margin: 40px;
}

.skills-col p {
	margin-top: 20px;
}
</style>