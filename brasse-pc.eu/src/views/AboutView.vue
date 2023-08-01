<script setup lang="ts">
import TextBoxCompunrnt from '../components/TextBoxCompunent.vue'
//import TextAboutMe from 'raw-loader!../assets/about.txt'
const prop = defineProps<{
  text: String
  width: Number
}>()

const text = 'Jag heter Björn Blomber och jag älskar både programmering och problemlösning. Utöver det är jag en person som trivs med att vara fysiskt aktiv och spendera tid i naturen. Mitt arbete som mjukvaruutvecklare kräver mycket mentalt fokus, så för att balansera livet ägnar jag mig åt att leva ut min passion för vikingatiden genom olika aktiviteter utomhus. '
+'Jag är djupt fascinerad av vikingakulturen, deras historia och deras tro. Att fördjupa mig i deras värld ger mig mycket glädje och kunskap. Förutom att lära mig om vikingarna, ägnar jag mig åt tyngdlyftning och deltar i tävlingar då och då. När jag har chansen kombinerar jag min passion för vikingatiden med tyngdlyftning genom att vara med i "Starke Viking". Det är som strongman-tävlingar, fast utan hjälpmedel. '
+'Jag tycker verkligen om den balans jag har hittat mellan mitt intresse för teknologi och mjukvaruutveckling samt min passion för utomhusaktiviteter och vikingakulturen. Det ger mig en rik och varierad livsstil som jag verkligen uppskattar.'
</script>

<template>
  <div class="about">
    <TextBoxCompunrnt :text=text :lineBreak=3 :split=true />
 </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    display: grid;
    align-items: center;
  }
}
</style>
