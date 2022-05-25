<template>
  <div>
    <div class="wrapper">
      <div class="main_content">
        <div class="info">
          <div class="title">
            <h1>Driver page</h1>
            <br />
            SEPA Semester 1 - 2021
          </div>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A sed
            nobis ut exercitationem atque accusamus sit natus officiis totam
            blanditiis at eum nemo, nulla et quae eius culpa eveniet
            voluptatibus repellat illum tenetur, facilis porro. Quae fuga odio
            perferendis itaque alias sint, beatae non maiores magnam ad, veniam
            tenetur atque ea exercitationem earum eveniet totam ipsam magni
            tempora aliquid ullam possimus? Tempora nobis facere porro,
            praesentium magnam provident accusamus temporibus! Repellendus harum
            veritatis itaque molestias repudiandae ea corporis maiores non
            obcaecati libero, unde ipsum consequuntur aut consectetur culpa
            magni omnis vero odio suscipit vitae dolor quod dignissimos
            perferendis eos? Consequuntur!
          </div>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A sed
            nobis ut exercitationem atque accusamus sit natus officiis totam
            blanditiis at eum nemo, nulla et quae eius culpa eveniet
            voluptatibus repellat illum tenetur, facilis porro. Quae fuga odio
            perferendis itaque alias sint, beatae non maiores magnam ad, veniam
            tenetur atque ea exercitationem earum eveniet totam ipsam magni
            tempora aliquid ullam possimus? Tempora nobis facere porro,
            praesentium magnam provident accusamus temporibus! Repellendus harum
            veritatis itaque molestias repudiandae ea corporis maiores non
            obcaecati libero, unde ipsum consequuntur aut consectetur culpa
            magni omnis vero odio suscipit vitae dolor quod dignissimos
            perferendis eos? Consequuntur!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'USKU Analytics || Driver'
    }
  },

  mounted() {
    let yourScript = document.createElement('script')
    yourScript.setAttribute('src', 'https://kit.fontawesome.com/b99e675b6e.js')
    document.head.appendChild(yourScript)
  }
}
</script>
<style>
body {
  background-color: #fff;
  position: relative;
}

.wrapper .main_content {
  min-height: calc(100vh);
  width: 60%;
  margin-left: 20%;
  padding: 20px;
  line-height: 30px;
  margin: auto;
}

.wrapper .main_content .title h1 {
  font-family: 'Montserrat';
  margin-bottom: 5%;
  margin-top: 5%;
  color: var(--UskuYellow);
  font-size: 4em;
}

.wrapper .main_content .info div {
  margin-bottom: 20px;
  color: var(--TextColour);
}

.wrapper .main_content .info div h2 {
  font-weight: bold;
  color: var(--UskuYellow);
}

.wrapper .main_content .info div h3 {
  margin-top: 10px;
}
</style>
