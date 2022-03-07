<template>
	<!-- Experiences Component -->
    <b-container id="exp-component">
        <b-row>
            <b-col sm="2" id="exp-img">
                <img id="exp-image" :src="source">
            </b-col>

            <b-col sm="6" id="exp-desc">
                <p>{{ desc }}</p>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
	name: 'ExpComponent',
	props: {
		source: String,
		desc: String
	}
}
</script>

<style lang="scss">
#exp-component {
	padding-bottom: 30px;
	padding-top: 30px;
	color: white;
}

#exp-image {
	width: 100%;
}

#exp-desc {
	text-align: start;
	float: left;
}
</style>
