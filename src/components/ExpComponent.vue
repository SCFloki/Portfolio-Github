<template>
	<!-- Experiences Component -->
    <b-container id="exp-component">
        <b-row>
            <b-col sm="4" id="exp-img">
                <img id="exp-image" :src="source">
            </b-col>

            <b-col sm="6" id="exp-col">
                <p id="exp-title">{{ title }}</p>
				<p id="exp-desc"> {{ desc }}</p>
				<p id="exp-date"> {{ date }}</p>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
	name: 'ExpComponent',
	props: {
		source: String,
		desc: String,
		title: String,
		date: String
	}
}
</script>

<style lang="scss">
#exp-component {
	padding-bottom: 30px;
	padding-top: 30px;
	color: white;
}

#exp-col {
	text-align: start;
	float: left;
}

#exp-image {
	width: 50%;
	float: right;
	margin-right: 20px;
	margin-top: 30px;
}

#exp-title {
	font-weight: bold;
	background:
		linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 34%, rgba(255,255,255,0) 100%)
		bottom left
		no-repeat;
	background-size:50% 1px;
}

#exp-date {
	float: right;
	font-style: italic;
}

#exp-desc {
	font-style: italic;
}
</style>
