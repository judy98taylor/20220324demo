<template>
  <div class="hello" id="hello">
    <div class="Hamburger" @click.self="click_toggler">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <aside id="aside" :class="isShow_aside ? 'aside isShow' : 'aside'">
      <div class="wrapper">
        <h3>Navigate to</h3>
        <div class="closeAside" @click.self="click_toggler">×</div>
      </div>

      <ul>
        <li @click="goTo('#home')">
          <h6>01.</h6>
          <p>Home</p>
        </li>
        <li @click="goTo('#ddcc')">
          <h6>02.</h6>
          <p>DDCC</p>
        </li>
        <li @click="goTo('#product')">
          <h6>03.</h6>
          <p>Product</p>
        </li>
        <li @click="goTo('#additional')">
          <h6>04.</h6>
          <p>Additional Income</p>
        </li>
        <li @click="goTo('#login')">
          <h6>05.</h6>
          <p>Login</p>
        </li>
      </ul>
    </aside>

    <main>
      <div class="s1" id="home">
        <div class="cont">
          <img src="../assets/demo/logo.svg" alt="" />
          <h1>Dimensions X</h1>
          <h2>a Top Software Portal to the Global Market</h2>
          <h3>Dimensions X is the first-class trading software portal.</h3>
          <p>
            The DMS of the DMAX Dark Crypto Community (DDCC) is dedicated to the
            development of powerful and simple innovative portal tools. The
            content of DMS X is focuses on mobile commerce, e-wallets,
            blockchain and AI.
          </p>
          <a href="#ddcc">Scroll</a>
        </div>
      </div>
      <div class="s2" id="ddcc">
        <h2>DMS X technology provides</h2>
        <h2>guidance to DDCC</h2>
        <img src="../assets/demo/DDCC-Logo.png" alt="" />
        <div class="more" @click="click_more">MORE ABOUT US</div>
      </div>
      <div class="s3" id="product">
        <div class="s3t s3c">
          <img src="../assets/demo/img_1.png" alt="" />
          <div class="cont">
            <h3>PRODUCT</h3>
            <h2>
              DMS X is a technology-leading mobile integrated blockchain account
              that connects producers, intermediaries and consumers. This
              evolution is known as "Mutant Partner"
            </h2>
            <p>
              DIMENSIONS X is determined to turn few hundred thousand of
              consumers around the world to become our "Mutant Partners".
              DIMENSIONS X is using mobile phone system DMS X to sell their
              products and services to "Mutant Partners" for market opening
              around the world. Our blockchain account has created a digital
              economy that never existed before, helping "Mutant Partners" to
              master the innovative digital era for sales.
            </p>
          </div>
        </div>
        <div class="s3b s3c">
          <img src="../assets/demo/img_2.png" alt="" />
          <div class="cont">
            <h3>DMS X SYSTEM</h3>
            <h2>
              We will help "Mutant Partners" to open blockchain mobile accounts
              by using DMS X and sell to global participants, so that they can
              become our "Mutant Partners" and create an unprecedented new
              blockchain economy together.
            </h2>
            <p>
              Our mission is to convert the concept from the “organization's
              preferred model” to “personal pipeline model" and apply the
              concept of DMS X to all industries. The blockchain tool model will
              help millions of individual investors to generate more value and
              pay less while establishing a direct sales relationship.
            </p>
          </div>
        </div>
      </div>
      <div class="s4" id="login">
        <h3>LOGIN</h3>
        <img src="../assets/demo/logo_white.svg" alt="" />
        <p>
          Register to activate our all-in-one blockchain account, you can enjoy
          the donated cryptocurrency, and grabs the opportunity to exchange *
          stocks, options, futures, foreign exchange, bonds and funds by using
          blockchain tools and calculate with the lowest cost.
        </p>
        <div class="login" @click="click_login">LOGIN</div>
      </div>
      <div class="s5" id="additional">
        <div class="cont">
          <img src="../assets/demo/icon-quote.svg" alt="" />
          <h2>ADDITIONAL INCOME</h2>
          <p>
            You can earn *extra interest with the fully paid blockchain tool in
            your blockchain account. DIMENSIONS X can lend the stock you
            obtained with the exchange of blockchain tools to the investors who
            willing to short their securities and who are willing to borrow
            stock by paying interest. You can earn interest every day when
            stocks are loaned out, and you can also trade the borrowed stocks
            without restrictions. * Terms and conditions apply
          </p>
        </div>
      </div>
      <footer class="footer">
        <div class="btt" @click="click_btt">Back to Top</div>
        <p>© Copyright Dimensions X 2020</p>
      </footer>
    </main>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
  data() {
    return {
      isShow_aside: false,
    };
  },
  methods: {
    goTo(a: any) {
      this.isShow_aside = false;
      window.location.href = a;
    },
    click_toggler() {
      this.isShow_aside = !this.isShow_aside;
    },
    click_more() {
      location.href = "http://dmaxdark.black/";
    },
    click_btt() {
      window.scrollTo(0, 0);
    },
    click_login() {
      alert("没做！");
    },
  },
})
export default class HelloWorld extends Vue {
  msg!: string;
  isShow_aside!: boolean;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  font-family: "Nunito Sans", sans-serif;
  font-style: normal;
  position: relative;
  height: 100vh;
}
.s1 {
  width: 7.5rem;
  margin: 0 auto;
  background: url("../assets/demo/hero-bg.jpg") no-repeat center center;
  background-size: cover;
  position: relative;
  .cont {
    position: relative;
    z-index: 3;
    width: 100%;
    height: 100%;
    z-index: 3;
    text-align: center;
    box-sizing: border-box;
    padding: 3rem 0.5rem 2rem;
    img {
      position: absolute;
      left: 0.6rem;
      top: 0.8rem;
      display: block;
      height: 0.5rem;
    }
    h1 {
      font-size: 0.8rem;
      color: #fff;
      font-weight: bold;
    }
    h2 {
      font-size: 0.56rem;
      color: rgba(255, 255, 255, 0.5);
      line-height: 1.2;
      width: 90%;
      margin: 0 auto;
      margin-top: 0.4rem;
    }
    h3 {
      font-size: 0.48rem;
      color: #fff;
      // font-weight: 600;
      width: 96%;
      margin: 0 auto;
      margin-top: 0.8rem;
      line-height: 1.2;
    }
    p {
      font-size: 0.34rem;
      color: rgba(255, 255, 255, 0.5);
      margin: 0 auto;
      margin-top: 0.5rem;
      line-height: 1.3;
    }
    a {
      position: absolute;
      bottom: 0.8rem;
      right: 1rem;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.06rem;
      font-size: 0.24rem;
      color: #fff;
      transform: rotate(-90deg) translate3d(100%, 50%, 0);
      transform-origin: right bottom;
      transition: all 0.3s ease-in-out;
    }
    a:visited {
      color: #793ea5;
    }
  }
}
.s1::before {
  display: block;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #111111;
  opacity: 0.7;
  z-index: 2;
}
.s2 {
  background-color: #121212;
  color: #fff;
  text-align: center;
  box-sizing: border-box;
  padding: 2rem 0;
  h2 {
    font-size: 0.48rem;
    line-height: 1.2;
  }
  img {
    width: 4rem;
    margin-top: 1rem;
  }
  .more {
    width: 5rem;
    margin: 0 auto;
    background: #793ea5;
    display: block;
    font-size: 0.28rem;
    padding: 0.4rem 0;
    letter-spacing: 0.06rem;
    margin-top: 1.2rem;
  }
}
.s3 {
  background-color: #0f0f0f;
  color: #fff;
  text-align: center;
  box-sizing: border-box;
  padding: 2rem 0;
  .s3c {
    margin-top: 1rem;
    img {
      width: 4.8rem;
      display: block;
      margin: 0 auto;
    }
    h3 {
      letter-spacing: 0.1rem;
      color: #793ea5;
      font-size: 0.14rem;
      margin-top: 0.3rem;
    }
    h2 {
      font-size: 0.34rem;
      line-height: 1.3;
      margin: 0 auto;
      margin-top: 0.6rem;
      width: 88%;
    }
    p {
      font-size: 0.14rem;
      color: #9c9c9c;
      width: 88%;
      margin: 0 auto;
      margin-top: 0.6rem;
      // letter-spacing: -0.02rem;
      line-height: 1.2;
    }
  }
}
.s4 {
  background-color: #5e3080;
  text-align: center;
  box-sizing: border-box;
  padding: 2.4rem 0;
  h3 {
    font-size: 0.24rem;
    letter-spacing: 0.08rem;
    color: #fff;
  }
  img {
    display: block;
    margin: 0 auto;
    width: 6.4rem;
    margin-top: 1rem;
  }
  p {
    font-size: 0.4rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.6);
    margin: 0 auto;
    width: 78%;
    // letter-spacing: -0.01rem;
    margin-top: 1.8rem;
  }
  .login {
    width: 3rem;
    margin: 0 auto;
    background: #000;
    color: #fff;
    display: block;
    font-size: 0.32rem;
    padding: 0.4rem 0;
    letter-spacing: 0.06rem;
    margin-top: 1rem;
  }
}
.s5 {
  width: 7.5rem;
  margin: 0 auto;
  background: url("../assets/demo/hero-bg.jpg") no-repeat center center;
  background-size: cover;
  position: relative;
  .cont {
    position: relative;
    z-index: 3;
    width: 100%;
    height: 100%;
    z-index: 3;
    text-align: center;
    box-sizing: border-box;
    padding: 2rem 0.5rem;
    color: #fff;
    img {
      display: block;
      margin: 0 auto;
      width: 0.6rem;
    }
    h2 {
      font-size: 0.4rem;
      font-weight: bold;
      margin-top: 1rem;
    }
    p {
      font-size: 0.4rem;
      line-height: 1.6;
      margin-top: 0.5rem;
    }
  }
}
.s5::before {
  display: block;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #111111;
  opacity: 0.9;
  z-index: 2;
}
.footer {
  color: rgba(255, 255, 255, 0.6);
  background-color: #5e3080;
  text-align: center;
  box-sizing: border-box;
  padding: 1.6rem 0 1.2rem;
  position: relative;
  .btt {
    position: absolute;
    left: 50%;
    top: -13%;
    transform: translate3d(-50%, 0, 0);
    width: 3.2rem;
    margin: 0 auto;
    background-color: #351b48;
    color: #fff;
    display: block;
    font-size: 0.24rem;
    font-weight: bold;
    padding: 0.4rem 0;
    letter-spacing: 0.06rem;
    z-index: 2;
    text-transform: uppercase;
  }
  p {
    font-size: 0.2rem;
  }
}
.Hamburger {
  position: fixed;
  z-index: 4;
  top: 0.4rem;
  right: 0.4rem;
  display: block;
  width: 1rem;
  height: 1rem;
  // background: #000;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // --color: #000;
  // background-color: var(--color);
  opacity: var(--opacity);
  span {
    width: 0.6rem;
    display: block;
    height: 0.04rem;
    --color: #fff;
    background-color: var(--color);
  }
  span:nth-child(2) {
    margin: 0.16rem 0;
  }
}
.aside {
  position: fixed;
  background: #000;
  z-index: 5;
  top: 0;
  bottom: 0;
  right: 0;
  width: 50vw;
  width: 89vw;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
  transform-origin: 100% 0;
  // .closeAside {
  //   position: absolute;
  //   top: 0;
  //   right: 0;
  //   background: red;
  // }
  box-sizing: border-box;
  padding: 0 10%;
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.28rem;
    padding-top: 1rem;
  }
  .closeAside {
    color: #fff;
    padding: 0.2rem;
    display: block;
    font-size: 0.4rem;
    font-weight: bold;
    // background: red;
    position: relative;
    top: -0.1rem;
  }
  h3 {
    font-size: 0.28rem;
    color: #793ea5;
    text-transform: uppercase;
    text-align: center;
  }
  ul {
    padding-top: 0.6rem;
  }
  h6 {
    font-size: 0.2rem;
    color: rgba(255, 255, 255, 0.25);
    padding-top: 0.4rem;
    padding-bottom: 0.1rem;
  }
  p {
    color: #fff;
    font-size: 0.4rem;
  }
}

.aside.isShow {
  transform: scaleX(1);
  .ul {
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
    transform-origin: 100% 0;
  }
}
</style>
