<template>
  <div id="artisan">
    <Header />

    <Nav :navElements="navElements"/>
    
    <Title title="Custom Designed and Built, Energy Efficient Homes in Jacksonville,<br>St. Augustine and Amelia Island Florida..." 
            quote="“Where we love is home - Home that our feet may leave, but not our hearts.”<br>Oliver Wendell Holmes" />

    <articlesList :evenArticles="evenArticles" :oddArticles="oddArticles"/>

    <Footer />
  </div>
</template>

<script>

import Header from './components/header'
import Nav from './components/nav'
import Title from './components/title'
import articlesList from './components/articles-list'
import Footer from './components/footer'
import './assets/js/script.js';

export default {
  name: 'Artisan',
  components: {
      Header,
      Nav,
      Footer,
      Title,
      articlesList,
  },

  data()
  {
    return {
        articles: [
            {
                id: 1,
                image: require("./assets/images/Layer_3.png"),
                heading: "Timeless designs",
                description: "Modern innovations with a focus on functional floor plans, family friendly open living and dramatic curb appeal drives us throughout the entire home design and building process.<br><br>Artisan Homes offers extensive selections of flooring, fixtures, trim and cabinetry that provide your family the opportunity to customize a home based on your personal lifestyle and preferences."
            },

            {
                id: 2,
                heading: "Master Craftsman",
                description: "Since 2003, Artisan Homes has been providing families in greater Jacksonville with design driven,expertly crafted custom homes of exceptional value. Quality, lifestyle and energy efficiency are core tenets of our business model.<br><br>To ensure your families comfort and investment, our custom-craftedhomes are constructed using only the highest quality materials, modern features and expert oversight."
            },

            {
                id: 3,
                image: require("./assets/images/Layer_5.png"),
                heading: "Custom Designed and Built<br>Artisan Homes in Jacksonville,<br>Florida",
                description: "<a href='/' class='article__description__anchor'>Learn more</a>"
            },

            {
                id: 4,
                image: require("./assets/images/Layer_4.png"),
                heading: "Energy efficiency",
                description: "Artisan Homes is committed to energy conservation and efficiency. We adhere to energy saving building standards and building techniques, featuring modern HVAC systems and appliances that use far less energy than technologies employed even 5 years ago.<br><br>Artisan Homes can save your family up to $200 per month on the cost of utilities."
            },

            {
                id: 5,
                image: require("./assets/images/Layer_7.png"),
                heading: "Custom Designed and Built<br>Artisan Homes in Amelia Island,<br>Florida",
                description: "<a href='/' class='article__description__anchor'>Learn more</a>"
            },

            {
                id: 6,
                image: require("./assets/images/Layer_6.png"),
                heading: "Custom Designed and Built<br>Artisan Homes in St. Augistine,<br>Florida",
                description: "<a href='/' class='article__description__anchor'>Learn more</a>"
            },

            {
                id: 7,
                image: require("./assets/images/Layer_9.png"),
                heading: "View Our Galery of Homes",
                description: "<a href='/' class='article__description__anchor'>Learn more</a>"
            },

            {
                id: 8,
                image: require("./assets/images/Layer_8.png"),
                heading: "Homes for Sale",
                description: "<a href='/' class='article__description__anchor'>Learn more</a>"
            },
        ],

        navElements: [
            {
                id: 1,
                href: "#about-us",
                text: "About us"
            },
            {
                id: 2,
                href: "#communities",
                text: "Communities"
            },
            {
                id: 3,
                href: "#homes",
                text: "Homes for sale"
            },
            {
                id: 4,
                href: "#custom",
                text: "Custom Built On Any Lot"
            },
            {
                id: 5,
                href: "#gallery",
                text: "Gallery"
            },
            {
                id: 6,
                href: "#connect",
                text: "Connect"
            },
        ]
    }
  },

  computed:{
      evenArticles(){
          return this.articles.filter(item => {
              if(item.id%2 == 0) {
                  return true
              }
              else {
                  return false
              }
          })
      },

      oddArticles(){
          return this.articles.filter(item => {
              if(item.id%2 != 0) {
                  return true
              }
              else {
                  return false
              }
          })
      }

  }
}

</script>

<style lang="scss">
@import './assets/css/style.scss';
</style>
