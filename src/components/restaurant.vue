<template>
  <!-- nav -->
   <div class="pb-4">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid mx-2">
    <!-- Logo (centered) -->
    <a class="navbar-brand " href="#">
      <img src="../assets/images/logo-FOOD.png" alt="Logo" width="100">
    </a>

    <!-- Toggle Button (aligned to the left on smaller screens) -->
    <div class="order-lg-last last">
      <button class="navbar-toggler border-0 me-auto" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>

    <!-- Collapsible Menu (centered on large screens) -->
    <div class="collapse navbar-collapse justify-content-lg-center" id="navbarNav">
      <ul class="navbar-nav text-center mx-auto">
        <li class="nav-item">
          <router-link class="nav-link fw-bolder" to="#home">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link fw-bolder" to="#about">About Us</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link fw-bolder" to="#gallery">Gallery</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link fw-bolder" to="#menu">Menu</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link fw-bolder" to="#review">Review</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link fw-bolder" to="#order">Order</router-link>
        </li>
      </ul>
    </div>

    <!-- Icons aligned to the right (hidden on smaller screens) -->
    <div class="d-none d-lg-flex align-items-center gap-3 ms-auto">
      <a class="nav-link" href="#"><i class="fas fa-heart"></i></a>
      <a class="nav-link" href="#"><i class="fas fa-search"></i></a>
      <a class="nav-link" href="#"><i class="fas fa-shopping-cart"></i></a>
    </div>
  </div>
</nav>
</div>

  <!-- home -->

  <div id="home" class="container pt-5">
    <div class="row justify-content-between align-items-center">
      <div class="col-lg-5 col-sm-12 col-12 mt-3">
        <p class="fw-bold display-6 text-center text-lg-start">
          Get Fresh <span class="text-warning">food </span> In a <br />
          easy way
        </p>
        <p class="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse at
          voluptatum recusandae vero, quas quidem vel, doloribus ut culpa ex non
          pariatur eos doloremque sint consequuntur architecto repellat ea
          cupiditate! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Debitis quas quidem iste nam soluta aliquid! Unde nih
        </p>
        <p>
          <button class="btn btn-warning btn-lg rounded-4">order new</button>
        </p>
      </div>
      <div class="col-lg-6 col-sm-12 col-12 order-first order-lg-last">
        <img src="../assets/images/burger.png" alt="" class="img-fluid" />
      </div>
    </div>
  </div>
  <!-- About US -->
  <br /><br /><br /><br />
  <div id="about"class="container">
    <div class="row justify-content-between jjustify-content-center" style="max-width: 100%">
      <div class="col-lg-5 col-sm-12 col-12">
        <img src="../assets/images/about-us.png" alt="" class="img-fluid" />
      </div>
      <div class="col-lg-6 col-sm-12 col-12">
        <div  id="about" class="container fs-2 justify-content-center d-flex gap-3">
          <p class="fw-bold">About </p>
          <p class="text-warning fw-bold text-decoration-underline">Us</p>
        </div>
        <div>
          <p class="">Why choose us ?</p>
        </div>
        <p class="m-0">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse at
          voluptatum recusandae vero, quas quidem vel, doloribus ut culpa ex non
          pariatur eos doloremque sint consequuntur architecto repellat ea
          cupiditate! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Debitis quas quidem iste nam soluta aliquid! Unde nih
        </p>
        <p class="pt-3">
          <button class="btn btn-warning btn-lg rounded-4">order new</button>
        </p>
      </div>
    </div>
  </div>
  <!-- notre galerie -->
  <div   id="gallery" class="container fs-2 justify-content-center d-flex gap-3">
    <p class="fw-bold">Our</p>
    <p class="text-warning fw-bold text-decoration-underline">Gallary</p>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-lg-4 mt-2 col-md-5 col-sm-6 col-6">
        <img src="../assets/images/sandwich.jpg" alt="" class="img-fluid rounded-3 hov" />
      </div>
      <div class="col-lg-4 mt-2 col-md-5 col-sm-6 col-6">
        <img src="../assets/images/cupcake-myrtille.jpg" alt="" class="img-fluid rounded-3 hov" />
      </div>
      <div class="col-lg-4 mt-2 col-md-5 col-sm-6 col-6">
        <img src="../assets/images/cupcake-chocolat.jpg" alt="" class="img-fluid rounded-3 hov" />
      </div>
      <div class="col-lg-4 mt-2 col-md-5 col-sm-6 col-6">
        <img src="../assets/images/gateau-myrtille.jpg" alt="" class="img-fluid rounded-3 hov" />
      </div>
      <div class="col-lg-4 mt-2 col-md-5 col-sm-6 col-6">
        <img src="../assets/images/pizza.jpg" alt="" class="img-fluid rounded-3 hov w-100" />
      </div>
      <div class="col-lg-4 mt-3 col-md-5 col-sm-6 col-6">
        <img src="../assets/images/gateauchocolat.jpg" alt="" class="img-fluid rounded-3 hov" />
      </div>
    </div>
  </div>
  <!--  our menu  -->
  <div id="menu" class="container fs-2 justify-content-center d-flex gap-2 pt-5">
    <p class="fw-bold">Our</p>
    <p class="text-warning fw-bold text-decoration-underline">Menu</p>
  </div>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-3 col-md-4 col-sm-6 col-8 pt-5 ps-2">
        <img src="../assets/images/burger (1).png" alt="" class="img-fluid hove rounded-2" />
        <div class="text-center">
          <p class="text-warning pt-2">burger</p>
          <p class="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            perspiciatis.
          </p>
          <p class="">20$</p>
          <p class="text-warning d-flex justify-content-center gap-2">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </p>
          <button class="btn btn-dark rounded-3 hove">order new</button>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 col-8 pt-5">
        <img src="../assets/images/pasta.jpg" alt="" class="img-fluid hove rounded-2" />
        <div class="text-center">
          <p class="text-warning pt-2">pasta</p>
          <p class="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            perspiciatis.
          </p>
          <p class="">20$</p>
          <p class="text-warning d-flex justify-content-center gap-2">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </p>
          <button class="btn btn-dark rounded-3 hove">order new</button>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 col-8 pt-5">
        <img src="../assets/images/lasagna.jpg" alt="" class="img-fluid hove rounded-2" />
        <div class="text-center">
          <p class="text-warning pt-2">Lasagna</p>
          <p class="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            perspiciatis.
          </p>
          <p class="">20$</p>

          <p class="text-warning d-flex justify-content-center gap-2">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </p>
          <button class="btn btn-dark rounded-3 hove">order new</button>
        </div>
      </div>

      <div class="col-lg-3 col-md-4 col-sm-6 col-8 pt-5">
        <img src="../assets/images/drink.jpg" alt="" class="img-fluid hove rounded-2" />
        <div class="text-center">
          <p class="text-warning pt-2">drink</p>
          <p class="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            perspiciatis.
          </p>
          <p class="">20$</p>
          <p class="text-warning d-flex justify-content-center gap-2">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </p>
          <button class="btn btn-dark rounded-3 hove">order new</button>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 col-8 pt-5">
        <img src="../assets/images/pizza (1).jpg" alt="" class="img-fluid hove rounded-2" />
        <div class="text-center">
          <p class="text-warning pt-2">pizza</p>
          <p class="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            perspiciatis.
          </p>
          <p class="">20$</p>
          <p class="text-warning d-flex justify-content-center gap-2">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </p>
          <button class="btn btn-dark rounded-3 hove">order new</button>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 col-8 pt-5">
        <img src="../assets/images/hotdog.jpg" alt="" class="img-fluid hove rounded-2" />
        <div class="text-center">
          <p class="text-warning pt-2">Hotdog</p>
          <p class="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            perspiciatis.
          </p>
          <p class="">20$</p>
          <p class="text-warning d-flex justify-content-center gap-2">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </p>
          <button class="btn btn-dark rounded-3 hove">order new</button>
        </div>
      </div>

      <div class="col-lg-3 col-md-4 col-sm-6 col-8 pt-5">
        <img src="../assets/images/juse.jpg" alt="" class="img-fluid hove rounded-2" />
        <div class="text-center">
          <p class="text-warning pt-2">Juse</p>
          <p class="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            perspiciatis.
          </p>
          <p class="">20$</p>
          <p class="text-warning d-flex justify-content-center gap-2">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </p>
          <button class="btn btn-dark rounded-3 hove">order new</button>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 col-8 pt-5">
        <img src="../assets/images/biryani.jpg" alt="" class="img-fluid hove rounded-2" />
        <div class="text-center">
          <p class="text-warning pt-2">Biryani</p>
          <p class="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            perspiciatis.
          </p>
          <p class="">20$</p>
          <p class="text-warning d-flex justify-content-center gap-2">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </p>
          <button class="btn btn-dark rounded-3 hove">order new</button>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 col-8 pt-5">
        <img src="../assets/images/chocolate.jpg" alt="" class="img-fluid hove rounded-2" />
        <div class="text-center">
          <p class="text-warning pt-2">Chocolate</p>
          <p class="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            perspiciatis.
          </p>
          <p class="">20$</p>
          <p class="text-warning d-flex justify-content-center gap-2">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </p>
          <button class="btn btn-dark rounded-3 hove">order new</button>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 col-8 pt-5">
        <img src="../assets/images/icecream.jpg" alt="" class="img-fluid hove rounded-2" />
        <div class="text-center">
          <p class="text-warning pt-2">Ice Cream</p>
          <p class="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            perspiciatis.
          </p>
          <p class="">20$</p>
          <p class="text-warning d-flex justify-content-center gap-2">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </p>
          <button class="btn btn-dark rounded-3 hove">order new</button>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 col-8 pt-5">
        <img src="../assets/images/spanchi.jpg" alt="" class="img-fluid hove rounded-2" />
        <div class="text-center">
          <p class="text-warning pt-2">Spanchi</p>
          <p class="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            perspiciatis.
          </p>
          <p class="">20$</p>
          <p class="text-warning d-flex justify-content-center gap-2">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </p>
          <button class="btn btn-dark rounded-3 hove">order new</button>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 col-8 pt-5">
        <img src="../assets/images/sandwich (1).jpg" alt="" class="img-fluid hove rounded-2" />
        <div class="text-center">
          <p class="text-warning pt-2">Sandwich</p>
          <p class="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            perspiciatis.
          </p>
          <p class="">20$</p>
          <p class="text-warning d-flex justify-content-center gap-2">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </p>
          <button class="btn btn-dark rounded-3 hove">order new</button>
        </div>
      </div>
    </div>
  </div>

  <!-- our review -->
  <div id="review" class="container fs-2 justify-content-center d-flex gap-2 pt-5">
    <p class="fw-bold">Our</p>
    <p class="text-warning fw-bold text-decoration-underline">Review</p>
  </div>
  <div class="container pt-5 pb-5">
    <div class="row justify-content-center">
      <div class="col-lg-3 col-md-6 col-sm-6 pt-4">
        <div class="p-3 shadow-lg text-center">
          <img src="../assets/images/custumer1.jpg" alt="" class="img-fluid rounded-circle w-50 pt-2" />
          <p class="text-warning pt-2">Jane LeBron</p>
          <p class="text-warning d-flex justify-content-center gap-2">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </p>
          <p class="text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            debitis assumenda accusamus saepe optio aliquid ad dolore suscipit
            blanditiis aliquam, commodi illo delectus quaerat! Provident
            laboriosam repellat nihil repellendus optio. Nam reprehenderit sint
            tenetur nulla a quibusdam alias ullam!
          </p>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 col-sm-6 pt-4">
        <div class="p-3 shadow-lg text-center">
          <img src="../assets/images/custumer2.jpg" alt="" class="img-fluid rounded-circle w-50 pt-2" />
          <p class="text-warning pt-2">John Doe</p>
          <p class="text-warning d-flex justify-content-center gap-2">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </p>
          <p class="text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            debitis assumenda accusamus saepe optio aliquid ad dolore suscipit
            blanditiis aliquam, commodi illo delectus quaerat! Provident
            laboriosam repellat nihil repellendus optio. Nam reprehenderit sint
            tenetur nulla a quibusdam alias ullam!
          </p>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 col-sm-6 pt-4">
        <div class="p-3 shadow-lg text-center">
          <img src="../assets/images/custumer3.jpg" alt="" class="img-fluid rounded-circle w-50 pt-2" />
          <p class="text-warning pt-2">Cecile Laure</p>
          <p class="text-warning d-flex justify-content-center gap-2">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </p>
          <p class="text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            debitis assumenda accusamus saepe optio aliquid ad dolore suscipit
            blanditiis aliquam, commodi illo delectus quaerat! Provident
            laboriosam repellat nihil repellendus optio. Nam reprehenderit sint
            tenetur nulla a quibusdam alias ullam!
          </p>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 col-sm-6 pt-4">
        <div class="p-3 shadow-lg text-center">
          <img src="../assets/images/custumer4.jpg" alt="" class="img-fluid rounded-circle w-50 pt-2" />
          <p class="text-warning pt-2">Kevin Carl</p>
          <p class="text-warning d-flex justify-content-center gap-2">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </p>
          <p class="text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            debitis assumenda accusamus saepe optio aliquid ad dolore suscipit
            blanditiis aliquam, commodi illo delectus quaerat! Provident
            laboriosam repellat nihil repellendus optio. Nam reprehenderit sint
            tenetur nulla a quibusdam alias ullam!
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- our order -->
  <div id="order" class="container fs-2 justify-content-center d-flex gap-2 pt-5">
    <p class="fw-bold">Our</p>
    <p class="text-warning fw-bold text-decoration-underline">Order</p>
  </div>
  <div class="forme">
    <div class="container">
      <div class="row align-items-center pb-4">
        <div class="col-lg-6 col-md-6">
          <img src="../assets/images/service.png" alt="" class="img-fluid w-75" />
        </div>
        <div class="col-lg-6 col-md-6">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <form action="https://example.com/page-inexistante.html" method="get">
                <label for="nom" class="form-label">Name</label>
                <input type="text" class="form-control mb-3 rounded-3" id="nom" name="nom" required
                  placeholder="Name" />
                <label for="numero" class="form-label">Number</label>
                <input type="tel" class="form-control mb-3 rounded-3" id="numero" name="numero" required
                  placeholder="Number" />
                <label for="message" class="form-label">Order</label>
                <input class="form-control mb-3 rounded-3" id="message" name="message" rows="5" required
                  placeholder="order" />
              </form>
            </div>

            <div class="col-lg-6 col-md-6">
              <form action="https://example.com/page-inexistante.html" method="get">
                <label for="nom" class="form-label">Email</label>
                <input type="email" class="form-control mb-3 rounded-3" id="nom" name="nom" required
                  placeholder="Email" />
                <label for="numero" class="form-label">How much</label>
                <input type="tel" class="form-control mb-3 rounded-3" id="numero" name="numero" required
                  placeholder="How much" />
                <label for="message" class="form-label">Adress</label>
                <input class="form-control mb-3 rounded-3" id="message" name="message" rows="5" required
                  placeholder="Adress" />
              </form>
            </div>
          </div>
          <a><button type="submit" class="btn btn-warning">Order New</button></a>
        </div>
      </div>
    </div>
  </div>
  <!-- our team -->
  <div class="acteur pb-5">
    <div class="container fs-2 justify-content-center d-flex gap-2 pt-5">
      <p class="fw-bold">Our</p>
      <p class="text-warning fw-bold text-decoration-underline">Team</p>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-6 col-md-3 d-flex justify-content-center mb-4">
  <div class="outer-circle">
    <div class="inner-circle">
      <img src="../assets/images/cuisto1.jpg" alt="Chef 1" class="img-fluid profile-image" title="Chef 1">
      <div class="overlay">
        <h5 class="text-white">Chef</h5>
        <p class="text-white text-center">Lorem ipsum dolor sit amet consectetur</p>
        <div class="social-icons d-flex justify-content-center gap-3">
          <a href="#" class="text-white"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="text-white"><i class="fab fa-twitter"></i></a>
          <a href="#" class="text-white"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="col-6 col-md-3 d-flex justify-content-center mb-4">
  <div class="outer-circle">
    <div class="inner-circle">
      <img src="../assets/images/cuisto2.jpg" alt="Chef 1" class="img-fluid profile-image" title="Chef 1">
      <div class="overlay">
        <h5 class="text-white">Chef</h5>
        <p class="text-white text-center">Lorem ipsum dolor sit amet consectetur</p>
        <div class="social-icons d-flex justify-content-center gap-3">
          <a href="#" class="text-white"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="text-white"><i class="fab fa-twitter"></i></a>
          <a href="#" class="text-white"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="col-6 col-md-3 d-flex justify-content-center mb-4">
  <div class="outer-circle">
    <div class="inner-circle">
      <img src="../assets/images/cuisto3.jpg" alt="Chef 3" class="img-fluid profile-image" title="Chef 1">
      <div class="overlay">
        <h5 class="text-white">Chef</h5>
        <p class="text-white text-center">Lorem ipsum dolor sit amet consectetur</p>
        <div class="social-icons d-flex justify-content-center gap-3">
          <a href="#" class="text-white"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="text-white"><i class="fab fa-twitter"></i></a>
          <a href="#" class="text-white"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="col-6 col-md-3 d-flex justify-content-center mb-4">
  <div class="outer-circle">
    <div class="inner-circle">
      <img src="../assets/images/cuisto4.jpg" alt="Chef 1" class="img-fluid profile-image" title="Chef 1">
      <div class="overlay">
        <h5 class="text-white">Chef</h5>
        <p class="text-white text-center">Lorem ipsum dolor sit amet consectetur</p>
        <div class="social-icons d-flex justify-content-center gap-3">
          <a href="#" class="text-white"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="text-white"><i class="fab fa-twitter"></i></a>
          <a href="#" class="text-white"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>


  <!-- footer -->
  <div class="bg-warning pt-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-2 col-md-6">
          <p class="fs-3 fw-bolder">Location</p>
          <p class="fs-6">Sri lanka</p>
          <p class="fs-6">USA</p>
          <p class="fs-6">India</p>
          <p class="fs-6">Japan</p>
          <p class="fs-6">Italy</p>
        </div>
        <div class="col-lg-2 col-md-6">
          <p class="fs-3 fw-bolder">Quick Link</p>
          <p class="fs-6">Home</p>
          <p class="fs-6">About</p>
          <p class="fs-6">Menu</p>
          <p class="fs-6">Gallary</p>
          <p class="fs-6">Order</p>
        </div>
        <div class="col-lg-3 col-md-6">
          <p class="fs-3 fw-bolder">Contact</p>
          <p class="fs-6"><a href="" class="text-dark">+94 13 3456 789 </a></p>
          <p class="fs-6"><a href="" class="text-dark"> +94 25 558858 </a></p>
          <p class="fs-6">
            <a href="" class="text-dark"> johndoe@123gamil.com </a>
          </p>
          <p class="fs-6">
            <a href="" class="text-dark"> foodshop@gmail.com </a>
          </p>
        </div>
        <div class="col-lg-3 col-md-6">
          <p class="fs-3 fw-bolder">Our Services</p>
          <p class="fs-6">Fats delivey</p>
          <p class="fs-6">Easy Payement</p>
          <p class="fs-6">24*7 Service</p>
        </div>
        <div class="col-lg-2 col-md-6">
          <p class="fs-3 fw-bolder">Follows</p>
          <p class="fs-6">Fats delivey</p>
          <p class="d-flex gap-2">
            <i class="fab fa-facebook"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import
//import BDD from "./BDD.js"
export default {
  name: "",

  components: {},
  //     setup(){
  //      class restaurant{
  //        constructor(image,titre)
  //       {
  //         this.image=image
  //         this.tttre=titre
  //     }
  //     }
  //     let data_restaurant=[]
  //     const makeDatarestaurant = () =>{
  //      let  three_restaurant=[]
  //      for(const restaurant of BDD)
  // }
  //     }
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap");

#app {
  font-family: "Plus jakarta Sans";
}
.outer-circle {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 4px solid #ccc; /* Couleur du cercle externe */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.inner-circle {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  border: 4px solid #ccc; /* Couleur du cercle interne */
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.overlay h5, .overlay p {
  margin: 0;
}

.social-icons i {
  font-size: 1.2rem;
}

.inner-circle:hover .profile-image {
  opacity: 0;
}

.inner-circle:hover .overlay {
  opacity: 1;
}


.hov:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(102, 67, 67, 0.2);
}

.hove:hover {
  transform: scale(1.04);
  /* box-shadow: 0 10px 20px rgba(102, 67, 67, 0.2); */
}

.forme {
  background-image: url(../assets/images/background-burger.jpeg);
}

.acteur {
  background-image: url(../assets/images/background.jpeg);
}

.imge {
  border-radius: 50%;
  /* arrondir les coins de l'image et des bordures */
  border: 10px solid #dddada;
  /* bordure extérieure */
  box-shadow: 0 0 0 5px #d8cece;
  /* bordure intérieure */
  outline: 5px solid #ffffff;
  /* bordure intérieure */
}
</style>