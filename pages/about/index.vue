<template>
  <div class="container">
    <h1 class="header aboutTitle display-5 text-center">About the Project</h1>
    
    <div style="" class="video">
      <div class="ratio ratio-16x9">
        <iframe
          src="https://www.youtube.com/embed/i2h9vZYNVLc"
          title="YouTube video player"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <div class="mb-5 mt-5">
      <h2 class="header">The What</h2>
      The Business Smart Dashboard (BSD) is a prototype that imitates a
      dashboard Usku to view performance analytics for
      their eCommerce sales activity. The data used in a production version would
      consist of a combination of data from Usku’s internal data and publicly
      accessible data covering areas such as Purchase History, Customer Data and
      Sales Volume, etc. 
      <p></p>
      For this body of work the data used is a modified version of Microsoft's
      <a href='https://docs.microsoft.com/en-us/sql/samples/adventureworks-install-configure?view=sql-server-ver15&tabs=ssms'>
      Adventureworks</a> Data Warehouse.
    </div>
    <hr />
    <div class="mb-5 mt-5">
      <h2 class="header">The Who</h2>
      This project was then chosen by a team of six Swinburne University
      students to undertake as their final year Capstone project.
      <br /><br />
      <div class="row">
        <div class="col-md-6">
          <h3>Team Leader: <span class="header">Ben Mouritz</span></h3>
          Studying a Bachelor of Computer Science (Data Science) Highly
          self-motivated and great teamwork skills combined with soft skills to
          aid communication of highly technical aspects. Passionate about data,
          automation, cloud-based solutions, and adoption.
        </div>

        <div class="col-md-6">
          <h3>Client Liason: <span class="header">Tuan Tu Cat</span></h3>
          Studying a Bachelor of Computer Science, Software Development major.
          Financial background, developing desktop application using web
          technologies full-time experience. I always try to develop things in
          unfamiliar areas when needed without skipping learning how to do it
          properly.
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <h3>Support Manager: <span class="header"> Phuong Nguyen</span></h3>
          Studying a Bachelor of Engineering, major in Software Experienced in
          web, software design using multiple languages with the newest
          technology. I am a competitive person and I love the challenge of
          mastering new things. My goal for every project is to help the client
          to improve their business process by turning client data into
          information and information into insight.
        </div>
        <div class="col-md-6">
          <h3>Planning Manager: <span class="header">Meghna Aggarwal</span></h3>
          Studying a Bachelor of Computer Science, majoring in Data Science My
          strengths include data analytics, data visualisation and developing
          ETL processes/data modelling. I am passionate about working with data
          owners to drive and improve business processes by providing automated
          dashboards, reporting capabilities and actionable insights.
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <h3>QC Manager: <span class="header">Shane Turville</span></h3>
          Studying a Bachelor of Computer Science, specialising in Data Science.
          My strengths are ETL development, Database scripting, Data
          reconciliation, Stakeholder engagement and Data modelling. I am
          passionate about making sense from client data and allowing them to
          obtain valuable insights and make strong business decisions from that
          data.
        </div>
        <div class="col-md-6">
          <h3>Dev Manager: <span class="header">Jai Lafferty</span></h3>
          Studying a Bachelor of Computer Science (Software Development) I’m a
          problem solver by nature and aren’t afraid of using highly technical
          methods to overcome deeply complex issues. I love automation and data
          engineering, I strive for everything I develop to ‘just work’.
        </div>
      </div>
    </div>
    <hr />
    <div class="mb-5 mt-5">
      <h2 class="header">The Why</h2>
      The Business Smart Dashboard is an exploration of additional value can be 
      extracted from an organisation's data. This exercise is a demonstration
      is elevating an organisation's visibility of its operational performance, 
      and consequently allows the organisation to make more informed decisions.
      <p></p>
      With a robust data pipeline, this project highlights the ability for
      a data mature organisation to better leverage what they already have. A 
      key example of this lies within our use of Machine Learning to cluster 
      similar groups of customers together based on their personal details and 
      purchasing activity. This enables the organisation to better identify, and 
      tailor their activities to, its customers.
    </div>
    <hr />
    <div class="mb-5 mt-5">
      <h2 class="header">The How</h2>
      <img src="../../assets/img/BSD-Architecture.jpg" width=100%></img>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'USKU Analytics || Home'
    }
  },

  mounted() {
    let yourScript = document.createElement('script')
    yourScript.setAttribute('src', 'https://kit.fontawesome.com/b99e675b6e.js')
    document.head.appendChild(yourScript)
  }
}
</script>
<style lang="scss">
.container {
}
.video {
  padding: 3rem 0;
  width: 60%;
  margin: auto;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
}

</style>
