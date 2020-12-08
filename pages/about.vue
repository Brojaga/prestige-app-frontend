<template>
  <div class="container">
    <navbar />
    <div class="main">
      <h1 class="title">
        About PrestigeApp:
      </h1>
      <div class="min_marg">
        <body class="non-title">
          <p class="description">
            This site is a tool to allow people to view the public opinion of tech companies and universities through crowdsourced ranking.
            This is done by allowing users to choose between two random institutions in a matchup and tallying the total wins and losses for each institution.
            Institutions with a high win/loss rate and statistically significant number of votes are viewed as having a high public opinion.
          </p>
          <p class="description">
            This site is produced as our term project for CSCI 415: Networking and Parallel Computation, Fall 2020.
          </p>
          <p class="contactInfoHead">
            Contact us:
          </p>
          <p class="contactInfoBody">
            Alex Leska
            <a href="https://github.com/leskaa"><img alt="GitHub" src="../assets/github.png" width=20 height=20></a>
            <a href="mailto: alexander.leska@ndsu.edu"><img alt="Email" src="../assets/email.png" width=25 height=20></a>
          </p>
          <p class="contactInfoBody">
            Jack Law
            <a href="https://github.com/Brojaga"><img alt="GitHub" src="../assets/github.png" width=20 height=20></a>
            <a href="mailto: jack.law@ndsu.edu"><img alt="Email" src="../assets/email.png" width=25 height=20></a>
          </p>
          <p class="contactInfoBody">
            Jacob Smith
            <a href="https://github.com/JacobWilliamSmith"><img alt="GitHub" src="../assets/github.png" width=20 height=20></a>
            <a href="mailto: jacob.william.smith@ndsu.edu"><img alt="Email" src="../assets/email.png" width=25 height=20></a>
          </p>
        </body>
      </div>
    </div>
    
  </div>
</template>

<script>
import navbar from '../components/navbar.vue'
export default {
  navbar
}
</script>

<style>
  .title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 500;
  font-size: 60px;
  color: #35495e;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin-top: 60px;
  margin-bottom: 20px;
  text-align: center;
  }

  .non-title {
  font-weight: 300;
  max-width: 1000px;
  margin: 0 auto;
  font-size: 1.3rem;
  color: #526488;
  word-spacing: 2px;
  }

  .contactInfoHead {
    text-align: center;
    font-weight: 500;
    font-size: 1.7rem;
    margin-top: 80px;
    margin-bottom: 5px;
  }

  .contactInfoBody {
    text-align: center;
    font-size: 1.5rem;
  }

  .description {
    text-align: justify;
    margin-bottom: 10px;
  }

  .min_marg {
    padding-left: 5%;
    padding-right: 5%;
  }
</style>