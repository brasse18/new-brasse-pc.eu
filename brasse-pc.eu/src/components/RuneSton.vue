<script setup lang="ts">
import TextBoxCompunrnt from '../components/TextBoxCompunent.vue'
const insp:String = "ᛘᛁᛏ:ᚬᛏᚢᚾ:ᚠᚬᚱ:ᚴᚢᚾᛋᚴᛅᛒ:ᚬᚠ:ᚢᛏ:ᚢᚱᚬᛋᛁᚴᛅᛒ:ᚢᚱᚬᚲᛋᛅᚾᛋ:ᛋᛏᚢᚱᚴᛅ:ᛚᛁᚢᚬ᛬ᛘᛁᛏ:ᛚᛁᚢᛦ:ᚠᛅᚱ:ᚴᚢᚾᛋᚲᛅᛒ:᛬ᚢᚱᚬᛋ:ᛚᛁᚢᚬ᛬ᛘᛁᛏ:ᛚᛁᚢᚬ᛬";
const text = 'Jag heter Björn Blomber och jag älskar både programmering och problemlösning. Utöver det är jag en person som trivs med att vara fysiskt aktiv och spendera tid i naturen. Mitt arbete som mjukvaruutvecklare kräver mycket mentalt fokus, så för att balansera livet ägnar jag mig åt att leva ut min passion för vikingatiden genom olika aktiviteter utomhus. '
+'Jag är djupt fascinerad av vikingakulturen, deras historia och deras tro. Att fördjupa mig i deras värld ger mig mycket glädje och kunskap. Förutom att lära mig om vikingarna, ägnar jag mig åt tyngdlyftning och deltar i tävlingar då och då. När jag har chansen kombinerar jag min passion för vikingatiden med tyngdlyftning genom att vara med i "Starke Viking". Det är som strongman-tävlingar, fast utan hjälpmedel. '
+'Jag tycker verkligen om den balans jag har hittat mellan mitt intresse för teknologi och mjukvaruutveckling samt min passion för utomhusaktiviteter och vikingakulturen. Det ger mig en rik och varierad livsstil som jag verkligen uppskattar.'
const pathStart = "M 1 62 c -1 -58 14 -63 79 -53";
const pathMid = "M 1 62 c 112 26 138 11 353 -6";
const pathEnd = "M 1 62 c 54 -5 38 41 33 65 ";
const pathHuvud = "M  1 62 c -16 -6 -33 -8 -47 -16 c -49 -30 -44 -36 6 -6 c -17.3333 -11 -51 -29 -66 -27 c -5 1 -11 -8 -9 -14 c 6 -4 8 0 12 0 c 10 2 15 -2 39 -5 c 87 -10 47.3333 31.3333 70 48 m -90 -35 c 48 -16 77 -2 68 12 c -12 27 -56 -10 -68 -12 "
// m 13 70 c 0 -58 14 -63 79 -53 c 112 26 138 11 355 -6 c 54 -5 38 41 33 65 M 0 70 C 0 0 27 -7 95 4 C 203 30 231 15 447 0 C 521 -13 499 50 496 76 M 496 77
  // to fix css look at this
  // https://css-tricks.com/snippets/css/complete-guide-grid/
  // https://css-tricks.com/snippets/css/a-guide-to-flexbox/
</script>

<template>
  <div>
    <svg viewBox="-45 -15 550 200">
        <path id="test" fill="transparent" d="M 1 62 c -1 -58 14 -63 79 -53 c 112 26 138 11 353 -6 C 487 -2 471 44 466 68 "/>
        <path id="start" fill="transparent" :d="pathStart"/>
        <path id="mid" fill="transparent" :d="pathMid"/>
        <path id="end" fill="transparent" :d="pathEnd"/>
        <path id="huvud" fill="transparent" :d="pathHuvud"/>
        <use href="#start" fill="transparent" stroke="red"  transform="scale(1.3)  translate(-11, -13)" stroke-width="0.8"/>
        <use href="#mid" fill="transparent" stroke="red"  transform="scale(1)  translate(88.5, -67.3)"/>
        <use href="#end" fill="transparent" stroke="red"  transform="scale(1)  translate(440, -73.1)"/>
        <use href="#huvud" fill="transparent" stroke="red" transform="scale(0.87)  translate(-52.3, 93) rotate(250, 0, 0)" stroke-width="1.13" />

                <!-- <path d="M 1 52 c -1 -58 14 -63 79 -53 c 112 26 138 11 353 -6 C 487 -2 471 34 466 58 " fill="none" stroke="black">
            <animateMotion repeatCount="indefinite" dur="5s">
                <mpath xlink:href="#test" />
            </animateMotion>
        </path> -->
        
        <text width="50" class="green" >
            <textPath class="rune-font " xlink:href="#test">
                ᛋᛅᛁᚱ:ᚠᛅ·ᛏᛅᚢᛋ:ᚠᚱᛅᚾᛏᚢᚱ·ᛋᛅᛁᛚᚢᚱ:ᛁᚦ:ᛋᛅᛘᛅ·ᛅᚾ:ᚢᚱᛏᛋᛏᛁᚱ·ᛏᛅᚦᚱ:ᛅᛚᛏᚱᛁᚴᛁ·ᚼᚢᛁᛘ:ᛁᚱ:ᛋᛅᛁᚱ:ᚴᚢᚦᛅᚾ:ᚴᛅᚦᚢᚱ·
            </textPath>
            <!-- <textPath class="line-font" xlink:href="#test">
                <tspan dy="-10">────────────────────────────────────────────────────────────────────────</tspan>
        </textPath>
        <textPath class="line-font" xlink:href="#test">
            <tspan dy="10">────────────────────────────────────────────────────────────────────────</tspan>
        </textPath> -->
        </text>
            <!-- Linje under texten -->
        <use href="#test" fill="transparent" stroke="red" transform="scale(1, 1)  translate(4, 4)" />
    </svg>
  <div class="text">
    <TextBoxCompunrnt :text=text :lineBreak=3 :split=true />
</div>
    
    <svg viewBox="-150 30 800 200">
        <path fill="none" stroke="red"     d="M38,   144   c4-6,      65   -100,  178   -107    c120,  -11,    220,   104,   292,   97" />
        <path id="curve" fill="transparent" d="M53.2, 148.6 c4-6.1,    65.5-96.8,  178.6-95.6  c111.3,  1.2,  170.8,  90.3,  275.1,  97" />
        <!-- <path fill="none" stroke="#000"     d="M 230 160 C 214 154 197 152 183 144 C 134 114 139 108 189 138 C 171.6667 127 138 109 123 111 C 112 112 103 102 102 93 C 89 46 114 48 115 84 C 117 107 151 92 170 90 C 257 80 217.3333 121.3333 241 137 M 132 106 C 224 85 220 107 220 118 C 213 151 164 108 132 106" /> -->
        <text width="500" class="green">
            <textPath class="rune-font" xlink:href="#curve">
                ᛘᛁᛏ:ᚬᛏᚢᚾ:ᚠᚬᚱ:ᚴᚢᚾᛋᚴᛅᛒ:ᚬᚠ:ᚢᛏ:ᚢᚱᚬᛋᛁᚴᛅᛒ:ᚢᚱᚬᚲᛋᛅᚾᛋ:ᛋᛏᚢᚱᚴᛅ:ᛚᛁᚢᚬ᛬ᛘᛁᛏ:ᛚᛁᚢᛦ:ᚠᛅᚱ:ᚴᚢᚾᛋᚲᛅᛒ:᛬ᚢᚱᚬᛋ:ᛚᛁᚢᚬ᛬ᛘᛁᛏ:ᛚᛁᚢᚬ᛬
            </textPath>
        </text>
        <path fill="none" stroke="red" d="M55,  155 c-0-6.1,  65.5-96.8,  178.6-95.6 c111.3  ,1.2  ,170.8,  90.3,  275.1,  100" />
    </svg>

  </div>
</template>

<style scoped>
@font-face {
    font-family: "Junicode";
    /* Ge typsnittet ett namn */
    src: url('@/assets/fonts/Junicode.ttf');
}
.text {
    margin-top: -28%;
    width: 80%;
    margin-left: 12%;
}
.topL {
    margin-top: -250px;
    margin-left: 8px;
}
.topR {
    margin-top: 100px;
    margin-left: 10px;
}
.downL {
    margin-top: -250px;
    margin-left: 8px;
}
.downR {
    margin-top: -250px;
    margin-left: 8px;
}

.rune-font {
    font-family: 'Junicode', sans-serif;
}

.bent-text {
  display: flex;
  flex-direction: column;
  position: relative;
  transform: translate(0, -50%);
}
</style>
